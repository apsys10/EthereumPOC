module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./campaign.js":
/*!*********************!*\
  !*** ./campaign.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./web3.js");

/* harmony default export */ __webpack_exports__["default"] = (function (address) {
  var abi = [{
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "approvers",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "goalAmt",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "beneficiary",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "manager",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "title",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "purpose",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "requests",
    "outputs": [{
      "name": "description",
      "type": "string"
    }, {
      "name": "value",
      "type": "uint256"
    }, {
      "name": "recipient",
      "type": "address"
    }, {
      "name": "complete",
      "type": "bool"
    }, {
      "name": "approvalCount",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "approversCount",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "minimumContribution",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "transactions",
    "outputs": [{
      "name": "to",
      "type": "address"
    }, {
      "name": "amount",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "people",
    "outputs": [{
      "name": "addr",
      "type": "address"
    }, {
      "name": "funds",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "name": "minimum",
      "type": "uint256"
    }, {
      "name": "creater",
      "type": "address"
    }, {
      "name": "forWho",
      "type": "address"
    }, {
      "name": "CampaignName",
      "type": "string"
    }, {
      "name": "des",
      "type": "string"
    }, {
      "name": "goal",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "constant": false,
    "inputs": [],
    "name": "contribute",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "description",
      "type": "string"
    }, {
      "name": "value",
      "type": "uint256"
    }, {
      "name": "recipient",
      "type": "address"
    }],
    "name": "createRequest",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "index",
      "type": "uint256"
    }],
    "name": "approveRequest",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "index",
      "type": "uint256"
    }],
    "name": "finalizeRequest",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getSummary",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "address"
    }, {
      "name": "",
      "type": "address"
    }, {
      "name": "",
      "type": "string"
    }, {
      "name": "",
      "type": "string"
    }, {
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getRequestsCount",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getPeople",
    "outputs": [{
      "name": "",
      "type": "address[]"
    }, {
      "name": "",
      "type": "uint256[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "campaignaddr",
      "type": "address"
    }, {
      "name": "to",
      "type": "address"
    }, {
      "name": "index",
      "type": "uint256"
    }],
    "name": "destruct",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getTransactions",
    "outputs": [{
      "name": "",
      "type": "address[]"
    }, {
      "name": "",
      "type": "uint256[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }];
  return new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(abi, address);
});

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      currentUser: '',
      account: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      var currentUser;
      var account;
      currentUser = localStorage.getItem('currentUser');
      account = localStorage.getItem('account');

      _this.setState({
        currentUser: currentUser
      });

      _this.setState({
        account: account
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "route", function () {
      _routes__WEBPACK_IMPORTED_MODULE_3__["Router"].pushRoute('/login');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "logout",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("in logout");
              _context.next = 3;
              return localStorage.removeItem('currentUser');

            case 3:
              _context.next = 5;
              return localStorage.removeItem('account');

            case 5:
              _context.next = 7;
              return _routes__WEBPACK_IMPORTED_MODULE_3__["Router"].pushRoute('/');

            case 7:
              window.location.reload();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      console.log(this.state.currentUser);
      var header;

      if (this.state.currentUser == null) {
        header = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
          inverted: true,
          size: "massive"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          route: "/"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "item"
        }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "item",
          href: "#about"
        }, "About us")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
          position: "right"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: this.route
        }, "Login")));
      } else {
        header = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
          inverted: true,
          size: "massive"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          route: "/"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "item"
        }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          route: "/bit/".concat(this.state.account)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "item"
        }, "Campaigns")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Welcome ", this.state.currentUser, " !")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
          position: "right"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: this.logout
        }, "Logout")));
      }

      return header;
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Wrap */ "./components/Wrap.js");




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), props.children));
});

/***/ }),

/***/ "./components/Wrap.js":
/*!****************************!*\
  !*** ./components/Wrap.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var wrap = function wrap(props) {
  return props.children;
};

/* harmony default export */ __webpack_exports__["default"] = (wrap);

/***/ }),

/***/ "./pages/json_demo.json":
/*!******************************!*\
  !*** ./pages/json_demo.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = [{"name":"John Smith","address":"0x04c677c7AB1c5bc0F769a03388f88e6BA735d8bD","password":"test123","role":"user","access":"true"},{"name":"CampaignManager","address":"0xE17AF25A77e0416F78921A3205E638c0567C762D","password":"test111","role":"manager","access":"true"},{"name":"Force10","address":"0xE69D1402D84E4CbFF29E31dcD25ace4FFCFD48Cb","password":"test","role":"contributer","access":"true"},{"name":"Mahindra","address":"0x82D5ed0551831b4c404341FF37d34f5A364FAf8c","password":"test","role":"contributer","access":"true"},{"name":"Bajaj","address":"0x7248543645A20f45DbAb8f1bDefC8A9E8fbE7618","password":"test","role":"contributer","access":"true"},{"name":"Emisure Labs","address":"0x87d467bd7C1CAB68B32bDca80a440f261a0a6372","password":"test","role":"recipient","access":"true"},{"name":"AlphaPistons","address":"0x28Bfd7e1Af5f21D1EbEBCC2eCf1B168455918356","password":"test","role":"recipient","access":"true"},{"name":"Bharat Locomotive","address":"0x90BD18058138f7fDdfA21ecf945c22e81C93144a","password":"test","role":"recipient","access":"true"},{"name":"superuser","address":"0x98E0E5810D9e262c4AC19815b57c68B7Bf6050a6","password":"test","role":"superuser","access":"true"}];

/***/ }),

/***/ "./pages/onlyView.js":
/*!***************************!*\
  !*** ./pages/onlyView.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../campaign */ "./campaign.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../web3 */ "./web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _json_demo_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./json_demo.json */ "./pages/json_demo.json");
var _json_demo_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./json_demo.json */ "./pages/json_demo.json", 1);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var OnlyView =
/*#__PURE__*/
function (_Component) {
  _inherits(OnlyView, _Component);

  function OnlyView(props) {
    var _this;

    _classCallCheck(this, OnlyView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OnlyView).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderNames", function () {
      console.log("in renderNames method");
      return _this.props.people[0].map(function (value, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Row, {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Cell, null, _json_demo_json__WEBPACK_IMPORTED_MODULE_7__.map(function (v, i) {
          return _json_demo_json__WEBPACK_IMPORTED_MODULE_7__[i].address == value ? _json_demo_json__WEBPACK_IMPORTED_MODULE_7__[i].name : null;
        })));
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderAmounts", function () {
      return _this.props.people[1].map(function (value, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Row, {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Cell, null, _web3__WEBPACK_IMPORTED_MODULE_5__["default"].utils.fromWei(value, 'ether')));
      });
    });

    _this.state = {
      showComponent: false
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(OnlyView, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState(function (prevState) {
        return {
          showComponent: !prevState.showComponent
        };
      });
    }
  }, {
    key: "renderCards",
    value: function renderCards() {
      var _this$props = this.props,
          balance = _this$props.balance,
          manager = _this$props.manager,
          minimumContribution = _this$props.minimumContribution,
          requestsCount = _this$props.requestsCount,
          approversCount = _this$props.approversCount,
          beneficiary = _this$props.beneficiary,
          name = _this$props.name,
          description = _this$props.description,
          goal = _this$props.goal;
      var managerName = '',
          beneficiaryName = '';

      for (var i in _json_demo_json__WEBPACK_IMPORTED_MODULE_7__) {
        if (_json_demo_json__WEBPACK_IMPORTED_MODULE_7__[i].address == manager) {
          managerName = _json_demo_json__WEBPACK_IMPORTED_MODULE_7__[i].name;
          break;
        }
      }

      console.log("name of manager = " + managerName + " for address = " + manager);

      for (var _i in _json_demo_json__WEBPACK_IMPORTED_MODULE_7__) {
        if (_json_demo_json__WEBPACK_IMPORTED_MODULE_7__[_i].address == beneficiary) {
          beneficiaryName = _json_demo_json__WEBPACK_IMPORTED_MODULE_7__[_i].name;
          break;
        }
      }

      var min = minimumContribution / 1000000000000000000;
      var items = [// {
      //   header: name,
      //   meta: 'Campaign Name',
      //   description: "Title"
      // },
      // {
      //     header: description,
      //     meta: 'Description',
      //     description: "Purpose of the campaign"
      //   },
      // {
      //   header: managerName,
      //   meta: 'Name of manager',
      //   description: 'Created campaign',
      // },
      // {
      //   header: min,
      //   meta: 'Minimum contribution',
      //   description: 'Contribute atleast this much ether. ',
      // },
      // {
      //   header: web3.utils.fromWei(balance, 'ether'),
      //   meta: 'Balance',
      //   description: 'How much money left in contract',
      // },
      // {
      //   header: beneficiaryName,
      //   meta: 'Owner',
      //   description: 'Campaign belongs to this person.',
      // },
      // {
      //   header: goal + ' ether',
      //   meta: 'Goal Amount',
      //   description: "Goal set for this Campaign"
      // }
      {
        header: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          style: {
            color: 'black'
          }
        }, "Campaign name"),
        meta: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          style: {
            color: 'black'
          }
        }, name),
        description: "Title"
      }, {
        header: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          style: {
            color: 'black'
          }
        }, "Description"),
        meta: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          style: {
            color: 'black'
          }
        }, description)
      }, {
        meta: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          style: {
            color: 'black'
          }
        }, min),
        //minimumContribution,
        header: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          style: {
            color: 'black'
          }
        }, "Minimum Contribution in ether"),
        description: "Contribute atleast this much ether to beacome an approver"
      }, {
        //header: ,
        header: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          style: {
            color: 'black'
          }
        }, "Balance"),
        //header: web3.utils.fromWei(bal , 'ether' )+ 'wei',
        meta: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          style: {
            color: 'black'
          }
        }, _web3__WEBPACK_IMPORTED_MODULE_5__["default"].utils.fromWei(balance, 'ether'))
      }, {
        header: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          style: {
            color: 'black'
          }
        }, "Owner"),
        meta: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          style: {
            color: 'black'
          }
        }, beneficiaryName),
        description: "Owner of this campaign"
      }, {
        header: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          style: {
            color: 'black'
          }
        }, "Goal Amount"),
        meta: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          style: {
            color: 'black'
          }
        }, goal),
        description: "Goal set for this Campaign"
      }];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"].Group, {
        items: items,
        style: {
          marginLeft: '80px'
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log("people", _typeof(this.props.people[0].length));
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        route: "/myCampaigns/".concat(this.props.accountInfo)
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        style: {
          marginLeft: '40px',
          fontSize: '15px'
        }
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          marginLeft: "80px"
        }
      }, "My Campaign"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
        width: 10
      }, this.renderCards())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        route: "/campaigns/".concat(this.props.accountInfo, "/").concat(this.props.address, "/requests")
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        style: {
          float: 'left',
          marginTop: '20px',
          width: "192px",
          marginLeft: "80px"
        }
      }, " View Requests "))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.props.people[0].length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        style: {
          float: 'left',
          marginTop: '20px',
          marginLeft: "80px"
        },
        onClick: this.handleClick
      }, " ", this.state.showComponent ? 'Hide contributers' : 'Show contributers') : null, this.state.showComponent ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          float: 'left',
          marginTop: '70px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Header, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].HeaderCell, null, "Contributer"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Body, null, this.renderNames()))) : null, this.state.showComponent ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          float: 'left',
          marginTop: '70px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Header, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].HeaderCell, null, "Amount in ether"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Body, null, this.renderAmounts()))) : null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var campaign, accountInfo, people, summary;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = Object(_campaign__WEBPACK_IMPORTED_MODULE_3__["default"])(props.query.address);
                accountInfo = props.query.accountInfo;
                _context.next = 4;
                return campaign.methods.getPeople().call();

              case 4:
                people = _context.sent;
                _context.next = 7;
                return campaign.methods.getSummary().call();

              case 7:
                summary = _context.sent;
                return _context.abrupt("return", {
                  address: props.query.address,
                  accountInfo: accountInfo,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4],
                  beneficiary: summary[5],
                  name: summary[6],
                  description: summary[7],
                  goal: summary[8],
                  people: people //contributorsVisibility: "SHOW CONTRIBUTORS"

                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return OnlyView;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (OnlyView);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('/login', '/login').add('/id/:accountInfo', '/onlyCreate').add('/it/:accountInfo', '/middle').add('/bit/:accountInfo', '/middle2').add('/ind/:accountInfo', '/index2').add('/index/:accountInfo', '/onlyCreate').add('/myCampaigns/:accountInfo', '/myCampaigns').add('/details/:accountInfo/:address', '/onlyView').add('/campaigns/:accountInfo', '/campaigns/new').add('/campaigns/:accountInfo/:address', '/campaigns/show').add('/transactions/:accountInfo', '/transactions').add('/int/:address', '/InternalT').add('/accessebility/:accountInfo', '/accessebility').add('/campaigns/:accountInfo/:address/requests', '/campaigns/requests/index').add('/campaigns/:accountInfo/:address/requests/new', '/campaigns/requests/new');
module.exports = routes;

/***/ }),

/***/ "./web3.js":
/*!*****************!*\
  !*** ./web3.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

var provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider("http://localhost:9543");
var web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
web3.eth.net.isListening().then(function () {
  return console.log('is connected');
}).catch(function (e) {
  return console.log('Something went wrong');
});
/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ 10:
/*!*********************************!*\
  !*** multi ./pages/onlyView.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/onlyView.js */"./pages/onlyView.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=onlyView.js.map