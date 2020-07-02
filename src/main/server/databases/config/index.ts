import { app } from "electron";
import { createConnection, Connection, Long } from "typeorm";

import { Config } from "./entity";

export class ConfigRepository {
    db: Connection = null;

    config: { [key: string]: any };

    constructor() {
        this.db = null;
        this.config = {};
    }

    async initialize(): Promise<Connection> {
        const isDev = process.env.NODE_ENV !== "production";
        if (this.db) {
            if (!this.db.isConnected) await this.db.connect();
            return this.db;
        }

        let dbPath = `${app.getPath("userData")}/config.db`;
        if (isDev) {
            dbPath = `${app.getPath("userData")}/BlueBubbles-Desktop-App/config.db`;
        }

        this.db = await createConnection({
            name: "config",
            type: "sqlite",
            database: dbPath,
            entities: [Config],
            synchronize: isDev,
            logging: false
        });

        // Create the tables
        if (!isDev) await this.db.synchronize();

        // Load default config items
        await this.loadConfig();
        return this.db;
    }

    private async loadConfig() {
        const repo = this.db.getRepository(Config);
        const items: Config[] = await repo.find();
        for (const i of items) this.config[i.name] = ConfigRepository.convertFromDbValue(i.value);
    }

    /**
     * Checks if the config has an item
     *
     * @param name The name of the item to check for
     */
    contains(name: string): boolean {
        return Object.keys(this.config).includes(name);
    }

    /**
     * Retrieves a config item from the cache
     *
     * @param name The name of the config item
     */
    get(name: string): Date | string | boolean | number {
        if (!Object.keys(this.config).includes(name)) return null;
        return ConfigRepository.convertFromDbValue(this.config[name]);
    }

    /**
     * Sets a config item in the database
     *
     * @param name The name of the config item
     * @param value The value for the config item
     */
    async set(name: string, value: Date | string | boolean | number): Promise<void> {
        const saniVal = ConfigRepository.convertToDbValue(value);
        const repo = this.db.getRepository(Config);
        const item = await repo.findOne({ name });

        // Either change or create the new Config object
        if (item) {
            await repo.update(item, { value: saniVal });
        } else {
            const cfg = repo.create({ name, value: saniVal });
            await repo.save(cfg);
        }

        this.config[name] = saniVal;
    }

    /**
     * Converts a generic string value from the database
     * to its' corresponding correct typed value
     *
     * @param input The value straight from the database
     */
    private static convertFromDbValue(input: string): any {
        if (input === "1" || input === "0") return Boolean(Number(input));
        if (/^-{0,1}\d+$/.test(input)) return Number(input);
        return input;
    }

    /**
     * Converts a typed database value input to a string.
     *
     * @param input The typed database value
     */
    private static convertToDbValue(input: any): string {
        if (typeof input === "boolean") return input ? "1" : "0";
        if (input instanceof Date) return String(input.getTime());
        return String(input);
    }
}
