/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/main.ts":
/*!**************************!*\
  !*** ./src/main/main.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _server_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @server/index */ "./src/main/server/index.ts");





let win;
const BlueBubbles = new _server_index__WEBPACK_IMPORTED_MODULE_4__["BackendServer"](win);

const installExtensions = async () => {
  const installer = __webpack_require__(/*! electron-devtools-installer */ "electron-devtools-installer");

  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ["REACT_DEVELOPER_TOOLS", "REDUX_DEVTOOLS"];
  return Promise.all(extensions.map(name => installer.default(installer[name], forceDownload))).catch(console.log); // eslint-disable-line no-console
};

BlueBubbles.start();

const createWindow = async () => {
  if (true) {
    await installExtensions();
  }

  win = new electron__WEBPACK_IMPORTED_MODULE_1__["BrowserWindow"]({
    width: 1200,
    height: 750,
    minWidth: 550,
    minHeight: 300,
    transparent: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  if (true) {
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "1"; // eslint-disable-line require-atomic-updates

    win.loadURL(`http://localhost:2004`);
  } else {}

  if (true) {
    // Open DevTools, see https://github.com/electron/electron/issues/12438 for why we wait for dom-ready
    win.webContents.once("dom-ready", () => {
      win.webContents.openDevTools();
    });
  }

  win.on("closed", () => {
    win = null;
  });
  win.on("maximize", () => {
    if (win && win.webContents) win.webContents.send("maximized");
  });
  win.on("unmaximize", () => {
    if (win && win.webContents) win.webContents.send("unmaximized");
  });
};

electron__WEBPACK_IMPORTED_MODULE_1__["ipcMain"].handle("minimize-event", () => {
  if (win && win.webContents) win.minimize();
});
electron__WEBPACK_IMPORTED_MODULE_1__["ipcMain"].handle("maximize-event", () => {
  if (win && win.webContents) win.maximize();
});
electron__WEBPACK_IMPORTED_MODULE_1__["ipcMain"].handle("unmaximize-event", () => {
  if (win && win.webContents) win.unmaximize();
});
electron__WEBPACK_IMPORTED_MODULE_1__["ipcMain"].handle("close-event", () => {
  electron__WEBPACK_IMPORTED_MODULE_1__["app"].quit();
  electron__WEBPACK_IMPORTED_MODULE_1__["app"].exit(0);
});
electron__WEBPACK_IMPORTED_MODULE_1__["app"].on("browser-window-focus", () => {
  if (win && win.webContents) win.webContents.send("focused");
});
electron__WEBPACK_IMPORTED_MODULE_1__["app"].on("browser-window-blur", () => {
  if (win && win.webContents) win.webContents.send("blurred");
});
electron__WEBPACK_IMPORTED_MODULE_1__["app"].on("ready", createWindow);
electron__WEBPACK_IMPORTED_MODULE_1__["app"].on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron__WEBPACK_IMPORTED_MODULE_1__["app"].quit();
  }
});
electron__WEBPACK_IMPORTED_MODULE_1__["app"].on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

/***/ }),

/***/ "./src/main/server/constants.ts":
/*!**************************************!*\
  !*** ./src/main/server/constants.ts ***!
  \**************************************/
/*! exports provided: DEFAULT_GENERAL_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GENERAL_ITEMS", function() { return DEFAULT_GENERAL_ITEMS; });
const DEFAULT_GENERAL_ITEMS = {
  ngockServer: () => "",
  guid: () => ""
};

/***/ }),

/***/ "./src/main/server/db/messaging/index.ts":
/*!***********************************************!*\
  !*** ./src/main/server/db/messaging/index.ts ***!
  \***********************************************/
/*! exports provided: MessagingRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingRepository", function() { return MessagingRepository; });
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_0__);

class MessagingRepository {
  constructor() {
    this.db = null;
    this.db = null;
  }

  async initialize() {
    this.db = await Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["createConnection"])({
      name: "messaging",
      type: "sqlite",
      database: `@server/db/messaging/messaging.db`,
      entities: [],
      synchronize: false,
      logging: false
    });
    return this.db;
  }

  async getChatPrevs() {//Get convo participants, most recent message, and message timestamp from all conversations
  }

}

/***/ }),

/***/ "./src/main/server/db/settings/index.ts":
/*!**********************************************!*\
  !*** ./src/main/server/db/settings/index.ts ***!
  \**********************************************/
/*! exports provided: SettingsRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRepository", function() { return SettingsRepository; });
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_entities_settings_Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @server/entities/settings/Config */ "./src/main/server/entities/settings/Config.ts");


class SettingsRepository {
  constructor() {
    this.db = null;
    this.db = null;
  }

  async initialize() {
    this.db = await Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["createConnection"])({
      name: "settings",
      type: "sqlite",
      database: `@server/db/settings/settings.db`,
      entities: [_server_entities_settings_Config__WEBPACK_IMPORTED_MODULE_1__["Config"]],
      synchronize: false,
      logging: false
    });
    return this.db;
  } // async getNgrokServer(){
  //     const query = this.db.getRepository(Config).createQueryBuilder("")
  // }
  // async getChats(chatGuid?: string, withParticipants = true) {
  //     const query = this.db.getRepository(Chat).createQueryBuilder("chat");
  //     // Inner-join because a chat must have participants
  //     if (withParticipants) query.innerJoinAndSelect("chat.participants", "handle");
  //     // Add default WHERE clauses
  //     query.andWhere("chat.service_name == 'iMessage'");
  //     if (chatGuid) query.andWhere("chat.guid = :guid", { guid: chatGuid });
  //     const chats = await query.getMany();
  //     return chats;
  // }


}

/***/ }),

/***/ "./src/main/server/entities/settings/Config.ts":
/*!*****************************************************!*\
  !*** ./src/main/server/entities/settings/Config.ts ***!
  \*****************************************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_0__);
var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }


let Config = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Entity"])(), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["PrimaryColumn"])("text", {
  name: "name"
}), _dec3 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Column"])("text", {
  name: "value",
  nullable: true
}), _dec(_class = (_class2 = (_temp = class Config {
  constructor() {
    _initializerDefineProperty(this, "name", _descriptor, this);

    _initializerDefineProperty(this, "value", _descriptor2, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

/***/ }),

/***/ "./src/main/server/fileSystem/index.ts":
/*!*********************************************!*\
  !*** ./src/main/server/fileSystem/index.ts ***!
  \*********************************************/
/*! exports provided: FileSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSystem", function() { return FileSystem; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

class FileSystem {
  constructor() {
    this.attachmentsDir = `Attachments`;
  }

  async setup() {
    this.setupDirectories();
  } //Creates required directories


  setupDirectories() {
    if (!fs__WEBPACK_IMPORTED_MODULE_0__["existsSync"](this.attachmentsDir)) fs__WEBPACK_IMPORTED_MODULE_0__["mkdirSync"](this.attachmentsDir);
  }

}

/***/ }),

/***/ "./src/main/server/index.ts":
/*!**********************************!*\
  !*** ./src/main/server/index.ts ***!
  \**********************************/
/*! exports provided: BackendServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendServer", function() { return BackendServer; });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server_entities_settings_Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @server/entities/settings/Config */ "./src/main/server/entities/settings/Config.ts");
/* harmony import */ var _server_fileSystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @server/fileSystem */ "./src/main/server/fileSystem/index.ts");
/* harmony import */ var _server_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @server/constants */ "./src/main/server/constants.ts");
/* harmony import */ var _server_db_messaging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @server/db/messaging */ "./src/main/server/db/messaging/index.ts");
/* harmony import */ var _server_db_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @server/db/settings */ "./src/main/server/db/settings/index.ts");
/* harmony import */ var _server_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @server/services */ "./src/main/server/services/index.ts");

 //Config and FileSystem Imports



 //Database Imports


 //Service Imports

 // import {Attachment} from "./entities/messaging/Attachment";
// import {Chat} from "./entities/messaging/Chat";

// import {Message} from "./entities/messaging/Message";
class BackendServer {
  constructor(window) {
    this.window = void 0;
    this.db = void 0;
    this.messagingRepo = void 0;
    this.settingsRepo = void 0;
    this.ngrokServer = void 0;
    this.socketService = void 0;
    this.config = void 0;
    this.fs = void 0;
    this.hasSetup = void 0;
    this.hasStarted = void 0;
    this.window = window; // Databases

    this.db = null;
    this.messagingRepo = null;
    this.settingsRepo = null; // Other helpers

    this.ngrokServer = null;
    this.config = {};
    this.fs = null; // Services

    this.socketService = null;
    this.hasSetup = false;
    this.hasStarted = false;
  }

  async start() {
    console.log("Starting BlueBubbles Backend...");
    await this.setup();
    await this.startServices();
    console.log("Starting Configuration IPC Listeners...");
    this.startConfigIpcListeners();

    if (this.hasStarted === false) {
      console.log("Connecting to Ngrok...");
      await this.connectToNgrok();
    }
  } //Initial App Setup


  async setup() {
    console.log("Performing Setup..."); // this.db = await this.settingsRepo.initialize();

    await this.initializeDatabase();
    await this.setupDefaults(); // this.db = await this.messagingRepo.initialize();

    try {
      console.log("Initializing filesystem...");
      this.fs = new _server_fileSystem__WEBPACK_IMPORTED_MODULE_3__["FileSystem"]();
      this.fs.setup();
    } catch (ex) {
      console.log("Failed to setup filesystem! " + ex.message);
    }

    console.log("Initializing configuration database...");
    const cfg = await this.db.getRepository(_server_entities_settings_Config__WEBPACK_IMPORTED_MODULE_2__["Config"]).find();
    cfg.forEach(item => {
      this.config[item.name] = item.value;
    });

    try {
      console.log("Launching Services..");
      await this.setupServices();
    } catch (ex) {
      console.log("Failed to launch server services.", "error");
    }
  } //Initialize Database


  async initializeDatabase() {
    try {
      this.db = await Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["createConnection"])({
        name: "settings",
        type: "sqlite",
        database: `@server/db/settings/settings.db`,
        entities: [_server_entities_settings_Config__WEBPACK_IMPORTED_MODULE_2__["Config"]],
        synchronize: false,
        logging: false
      });
    } catch (ex) {
      console.log("Failed to connect to configuration database!" + ex.message);
    }
  } //Setup Default Values


  async setupDefaults() {
    try {
      const repo = this.db.getRepository(_server_entities_settings_Config__WEBPACK_IMPORTED_MODULE_2__["Config"]);

      for (const key of Object.keys(_server_constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_GENERAL_ITEMS"])) {
        const item = await repo.findOne({
          name: key
        });
        if (!item) await this.addConfigItem(key, _server_constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_GENERAL_ITEMS"][key]());
      }
    } catch (ex) {
      console.log("Failed to setup default configurations!" + ex.message);
    }
  }

  async setupServices() {
    if (this.hasSetup) return;

    try {
      console.log("Connecting to messaging database...");
      this.messagingRepo = new _server_db_messaging__WEBPACK_IMPORTED_MODULE_5__["MessagingRepository"]();
      await this.messagingRepo.initialize();
    } catch (ex) {
      console.log("Failed to connect to messaging database! " + ex.message);
    }

    try {
      console.log("Connecting to settings database...");
      this.settingsRepo = new _server_db_settings__WEBPACK_IMPORTED_MODULE_6__["SettingsRepository"]();
      await this.settingsRepo.initialize();
    } catch (ex) {
      console.log("Failed to connect to settings database! " + ex.message);
    }

    try {
      console.log("Initializing up sockets...");
      this.socketService = new _server_services__WEBPACK_IMPORTED_MODULE_7__["SocketService"](this.db, this.messagingRepo, this.settingsRepo, this.fs, this.config.ngrokServer);
    } catch (ex) {
      console.log("Failed to setup socket service! " + ex.message);
    }

    this.hasSetup = true;
  }

  async startServices() {
    if (this.hasStarted === false) {
      console.log("Starting socket service...");
      this.socketService.start(); // this.log("Starting chat listener...");
      // this.startChatListener();
      // this.startIpcListener();
    }

    this.hasStarted = true;
  }

  async addConfigItem(name, value) {
    const item = new _server_entities_settings_Config__WEBPACK_IMPORTED_MODULE_2__["Config"]();
    item.name = name;
    item.value = String(value);
    await this.db.getRepository(_server_entities_settings_Config__WEBPACK_IMPORTED_MODULE_2__["Config"]).save(item);
    return item;
  }

  startIpcListener() {
    electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].handle("getChatPrevs", async (event, args) => {
      if (!this.messagingRepo.db) return 0;
      const count = await this.messagingRepo.getChatPrevs();
      return count;
    });
  }

  startConfigIpcListeners() {
    electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].handle("set-config", async (event, args) => {
      for (const item of Object.keys(args)) {
        if (this.config[item] && this.config[item] !== args[item]) {
          this.config[item] = args[item];
        } // Update in class


        if (this.config[item]) {
          await this.setConfig(item, args[item]);
        }
      }

      this.emitToUI("config-update", this.config);
      return this.config;
    });
  }

  async setConfig(name, value) {
    this.db = await this.settingsRepo.initialize();
    await this.db.getRepository(_server_entities_settings_Config__WEBPACK_IMPORTED_MODULE_2__["Config"]).update({
      name
    }, {
      value
    });
    this.config[name] = value;
    this.emitToUI("config-update", this.config);
  }

  emitToUI(event, data) {
    if (this.window) this.window.webContents.send(event, data);
  }

}

/***/ }),

/***/ "./src/main/server/services/index.ts":
/*!*******************************************!*\
  !*** ./src/main/server/services/index.ts ***!
  \*******************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket */ "./src/main/server/services/socket/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return _socket__WEBPACK_IMPORTED_MODULE_0__["SocketService"]; });




/***/ }),

/***/ "./src/main/server/services/socket/index.ts":
/*!**************************************************!*\
  !*** ./src/main/server/services/socket/index.ts ***!
  \**************************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
 //Internal Libs

class SocketService {
  /**
   * Starts up the initial Socket.IO connection and initializes other
   * required classes and variables
   *
   * @param db The configuration database
   * @param iMessageRepo The iMessage database repository
   * @param fs The filesystem class handler
   * @param port The initial port for Socket.IO
   */
  constructor(db, messagingRepo, settingsRepo, fs, ngrokServer) {
    this.db = void 0;
    this.socketServer = void 0;
    this.messagingRepo = void 0;
    this.settingsRepo = void 0;
    this.fs = void 0;
    this.db = db;
    this.socketServer = socket_io_client__WEBPACK_IMPORTED_MODULE_0__(ngrokServer, {
      query: {
        guid: ""
      }
    });
    this.messagingRepo = messagingRepo;
    this.settingsRepo = settingsRepo;
    this.fs = fs;
  } //Inital Socket Connection Handler


  async start() {}

} // import {createConnection, getManager} from "typeorm";
// import {Handle} from "../entities/messaging/Handle";
// import {chatPrevGetAllAction} from "../actions/ChatPrevGetAllAction";
// //Connect to server with socket
// export async function ConnectToServer(url, aGuid){
// }
// createConnection({
//     type: "sqlite",
//     database: "src/main/server/db/messaging.db",
//     entities: [
//         Handle
//     ],
//     synchronize: true,
//     logging: false
// }).then(async connection => {
//     const io = require('socket.io-client')
//     const socket = io("",{
//     query: {
//         guid: ""
//     }
//     })
//     // On Socket Connect
//     socket.on('connect', () => {
//     console.log(socket.connected)
//     const firstAppStartUp = true;
//     if (firstAppStartUp){
//         //Get all chats from server and save locally
//         // initFromServer();
//         GetAllChatsFromServer();
//         console.log("here");
//     } else{
//     }
//     });
//     // let handle = new Handle();
//     // handle.address = "";
//     //Get All Chats
//     function GetAllChatsFromServer() {
//         socket.emit('get-chats',true,(data) => {
//         console.log(data.data[0].participants[0].address);
//         await GetHandle();
//         chatPrevGetAllAction();
//         //Get Handle
//         asyncfunction GetHandle() {
//             let handleRepository = connection.getRepository(Handle);
//             let i;
//             for(i=0; i < Object.keys(data.data).length; i++){
//                 let handle = new Handle();
//                 if(data.data[i].participants[0].address != null) {
//                     handle.address = data.data[i].participants[0].address;
//                 };
//                 if(data.data[i].participants[0].country != null) {
//                     handle.country = data.data[i].participants[0].country;
//                 };
//                 if(data.data[i].participants[0].uncanonicalizedId != null) {
//                     handle.uncanonicalizedId = data.data[i].participants[0].uncanonicalizedId;
//                 } else{
//                     handle.uncanonicalizedId = "X:XX PM";
//                 };
//                 // console.log(handle.address);
//                 try {
//                     // return connection.manager
//                     //             .save(handle)
//                     //             .then(handle => {
//                     //                 console.log("handle has been saved. handle address is", handle.address);
//                     //             });
//                     handleRepository.save(handle);
//                     console.log("Handle saved");
//                 } catch (err){
//                     console.log(err);
//                 }
//             }
//         }
//             return data
//         })
//     }
// }).catch(error => console.log("TypeORM connection error: ", error));
// // const initFromServer = {
// // }
// //Get A Single Chat by guid
// function GetSingleChat(guid){
//     socket.emit("get-chat",{chatGuid: guid}, (data) =>{
//         console.log(data.data)
//         return data.data
//     })
// }
// //Get All Messages In A Chat
// function GetChatMessages(guid){
//     socket.emit("get-chat-messages",{identifier: guid}, (data) =>{
//         console.log(data.data)
//         return data.data
//     })
// }
// //Get Most Recent Message For A Given guid
// function GetMostRecentMessage(guid){
//     socket.emit("get-last-chat-message",{identifier: guid}, (data) =>{
//         console.log(data)
//         return data
//     })
// }
// //Get Attachment By guid
// function GetAttachmentByGUID(guid){
//     socket.emit("get-attatchment",{identifier: guid}, (data) =>{
//         console.log(data)
//         return data
//     })
// }
// //Get Attachment Chunk By guid
// function GetAttachmentChunkByGUID(guid){
//     socket.emit("get-attatchment-chunk",{identifier: guid}, (data) =>{
//         console.log(data)
//         return data
//     })
// }
// //Get Participants In A Chat
// function GetChatParticipants(guid){
//     socket.emit("get-participants",{identifier: guid}, (data) =>{
//         console.log(data)
//         return data
//     })   
// }
// //Send A Message
// function SendMessage(chatGuid, myMessage) {
//     socket.emit("send-message",{guid: chatGuid, message: myMessage}, (data) =>{
//         console.log(data)
//         return data
//     })  
// }
// //Send A Message With Chunked Attachments
// function SendMessageWithAttachment(guid, myMessage,myAttachmentData){
//     socket.emit("send-message-chunk",{guid: guid, message: myMessage, attachmentData: myAttachmentData}, (data) =>{
//         console.log(data)
//         return data
//     }) 
// }
// //Start A Chat
// function NewChat(guid, chatParticipants){
//     socket.emit("start-chat",{identifier: guid, participants: chatParticipants}, (data) =>{
//         console.log(data)
//         return data
//     }) 
// }
// //Rename A Group Chat
// function RenameGroupChat(guid, newGroupName) {
//     socket.emit("rename-group",{identifier: guid, newName: newGroupName}, (data) =>{
//         console.log(data)
//         return data
//     }) 
// }
// //Add A Participant To Chat
// function AddParticipantToChat(guid, participantAddress){
//     socket.emit("add-participant",{identifier: guid, address: participantAddress}, (data) =>{
//         console.log(data)
//         return data
//     }) 
// }
// //Remove A Participant To Chat
// function RemoveParticipantToChat(guid, participantAddress){
//     socket.emit("remove-participant",{identifier: guid, address: participantAddress}, (data) =>{
//         console.log(data)
//         return data
//     }) 
// }
// //Send Reaction (NOT IMPLEMENTED IN SERVER)
// function SendReaction(guid) {
//     socket.emit("send-reaction",{identifier: guid}, (data) =>{
//         console.log(data)
//     }) 
// }

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "electron-devtools-installer":
/*!**********************************************!*\
  !*** external "electron-devtools-installer" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron-devtools-installer");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map