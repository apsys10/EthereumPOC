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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./components/Grid.js":
/*!****************************!*\
  !*** ./components/Grid.js ***!
  \****************************/
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
/* harmony import */ var _Wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Wrap */ "./components/Wrap.js");
/* harmony import */ var _campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../campaign */ "./campaign.js");
/* harmony import */ var _pages_json_demo_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/json_demo.json */ "./pages/json_demo.json");
var _pages_json_demo_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../pages/json_demo.json */ "./pages/json_demo.json", 1);
/* harmony import */ var _contributeForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contributeForm */ "./components/contributeForm.js");
/* harmony import */ var _Modal2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modal2 */ "./components/Modal2.js");
/* harmony import */ var _PaypalButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PaypalButton */ "./components/PaypalButton.js");
/* harmony import */ var _components_Message2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Message2 */ "./components/Message2.js");
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../web3 */ "./web3.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);


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












var CLIENT = {
  sandbox: 'ASRY3giNhA74PLE3xxA63YvrTe4o8nqBqYxmihjC1dyKgovBtT0yUIQPdeTJSKMkhNBhzVSQUcqcVCe0',
  production: 'Aa5WfEUtZWM9Go_gSx71WB6UncUGmF2PTZbZwigE2Z_RQECPNA1MzqiCCgIGDmv4wNHJCCN5ABrBRqIh'
};
var ENV =  false ? undefined : 'sandbox';

var Info =
/*#__PURE__*/
function (_Component) {
  _inherits(Info, _Component);

  function Info() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Info);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Info)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      summary: {},
      donation: 0,
      error: '',
      visible: false,
      payment: {},
      touched: false,
      currentRate: 0,
      campaign: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var campaign, summary;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = Object(_campaign__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.props.address);

              _this.setState({
                campaign: campaign
              });

              console.log(campaign);
              _context.next = 5;
              return campaign.methods.getSummary().call();

            case 5:
              summary = _context.sent;

              _this.setState({
                summary: summary
              });

              axios__WEBPACK_IMPORTED_MODULE_11___default.a.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR').then(function (res) {
                console.log(res.data.USD);

                _this.setState({
                  currentRate: res.data.USD
                });
              }).catch(function (err) {
                console.log(err);
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDismiss", function () {
      _this.setState({
        visible: false
      });
    });

    return _this;
  }

  _createClass(Info, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var message;
      var minimumContribution = this.state.summary[0];
      var min = minimumContribution / 1000000000000000000;

      if (this.state.donation < this.state.currentRate && this.state.touched) {
        message = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: {
            color: 'red'
          }
        }, "You won't be an approver if you pay less than minimum contribution. Currently ", min * this.state.currentRate);
        console.log(_typeof(min));
      } else {
        message = null;
      }

      console.log("donating now", this.state.donation);

      var onSuccess =
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(payment) {
          var donate;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  payment.CampignName = _this2.state.summary[6];
                  payment.amount = _this2.state.donation;
                  payment.payerName = localStorage.getItem('currentUser');
                  payment.fullfilled = 0;
                  console.log('Successful payment!', payment);
                  axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('https://donations-ffcdf.firebaseio.com/donations.json', payment).then(function (res) {
                    console.log(res);
                  }).catch(function (err) {
                    console.log(err);
                  });

                  _this2.setState({
                    visible: true
                  });

                  _this2.setState({
                    payment: payment
                  });

                  donate = payment.amount / _this2.state.currentRate;
                  _context2.next = 11;
                  return _this2.state.campaign.methods.contribute().send({
                    from: _this2.props.accountInfo,
                    value: donate * 1000000000000000000,
                    gas: 3000000
                  });

                case 11:
                  window.location.reload();

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function onSuccess(_x) {
          return _ref2.apply(this, arguments);
        };
      }();

      var onError = function onError(error) {
        console.log('Erroneous payment OR failed to load script!', error);

        _this2.setState({
          visible: true
        });

        _this2.setState({
          error: "Erroneous payment!"
        });
      };

      var onCancel = function onCancel(data) {
        console.log('Cancelled payment!', data);

        _this2.setState({
          visible: true
        });
      };

      var manager = this.state.summary[4];
      var balance = this.state.summary[1];
      var beneficiary = this.state.summary[5];
      var name = this.state.summary[6];
      var description = this.state.summary[7];
      var goal = this.state.summary[8];
      var managerName = '';
      var beneficiaryName = '';

      for (var i in _pages_json_demo_json__WEBPACK_IMPORTED_MODULE_5__) {
        if (_pages_json_demo_json__WEBPACK_IMPORTED_MODULE_5__[i].address == manager) {
          managerName = _pages_json_demo_json__WEBPACK_IMPORTED_MODULE_5__[i].name;
          break;
        }
      }

      console.log("name of manager = " + managerName + " for address = " + manager);

      for (var _i in _pages_json_demo_json__WEBPACK_IMPORTED_MODULE_5__) {
        if (_pages_json_demo_json__WEBPACK_IMPORTED_MODULE_5__[_i].address == beneficiary) {
          beneficiaryName = _pages_json_demo_json__WEBPACK_IMPORTED_MODULE_5__[_i].name;
          break;
        }
      }

      console.log(this.state.summary);
      console.log(this.props.accountInfo);
      var bal = balance / 1000000000000000000;
      var items = [{
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
        }, bal + ' ether')
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Wrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginBottom: '20px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Message2__WEBPACK_IMPORTED_MODULE_9__["default"], {
        visible: this.state.visible,
        handle: this.handleDismiss,
        address: this.state.payment.CampignName,
        data: this.state.payment,
        error: this.state.error
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Group, {
        items: items
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          float: 'right',
          padding: '5px',
          marginRight: "400px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        style: {
          color: 'black',
          fontSize: '20px',
          fontFamily: 'Ariel'
        }
      }, "Donate in $"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginBottom: '5px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        icon: "dollar sign",
        error: this.state.donation < this.state.currentRate && this.state.touched,
        size: "mini",
        value: this.state.donation,
        onChange: function onChange(event) {
          _this2.setState({
            donation: event.target.value
          });

          _this2.setState({
            touched: true
          });
        }
      }), message), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PaypalButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "pay",
        client: CLIENT,
        env: ENV,
        commit: true,
        currency: 'USD',
        total: this.state.donation,
        onSuccess: onSuccess,
        onError: onError,
        onCancel: onCancel
      })));
    }
  }]);

  return Info;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Info);

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

/***/ "./components/Loader.js":
/*!******************************!*\
  !*** ./components/Loader.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);



var loader = function loader(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Loader"], {
    size: "massive",
    active: props.active
  });
};

/* harmony default export */ __webpack_exports__["default"] = (loader);

/***/ }),

/***/ "./components/Message.js":
/*!*******************************!*\
  !*** ./components/Message.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Notify =
/*#__PURE__*/
function (_Component) {
  _inherits(Notify, _Component);

  function Notify() {
    _classCallCheck(this, Notify);

    return _possibleConstructorReturn(this, _getPrototypeOf(Notify).apply(this, arguments));
  }

  _createClass(Notify, [{
    key: "render",
    value: function render() {
      if (this.props.visible) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            marginLeft: '80px',
            marginRight: '80px',
            marginTop: '80px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
          color: "green",
          onDismiss: this.props.handle,
          header: "Done!"
        }));
      } else {
        return null;
      }
    }
  }]);

  return Notify;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // noftify = (props) =>
// {
// return this.props.visible ? <Message
//           onDismiss={this.handleDismiss}
//           header='Welcome back!'
//            content='This is a special notification which you can dismiss.'
//         /> : null
// }


/* harmony default export */ __webpack_exports__["default"] = (Notify);

/***/ }),

/***/ "./components/Message2.js":
/*!********************************!*\
  !*** ./components/Message2.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Notify =
/*#__PURE__*/
function (_Component) {
  _inherits(Notify, _Component);

  function Notify() {
    _classCallCheck(this, Notify);

    return _possibleConstructorReturn(this, _getPrototypeOf(Notify).apply(this, arguments));
  }

  _createClass(Notify, [{
    key: "render",
    value: function render() {
      console.log("payment in notify ", this.props.data.payerID);

      if (this.props.visible) {
        if (this.props.error == '') {
          if (this.props.data.payerID !== undefined) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                marginLeft: '80px',
                marginRight: '80px',
                marginTop: '80px'
              }
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
              color: "green",
              onDismiss: this.props.handle,
              header: "Payment successful to ".concat(this.props.address, " !! Payer Id: ").concat(this.props.data.payerID, " Payment ID: ").concat(this.props.data.paymentID, " ")
            }));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                marginLeft: '80px',
                marginRight: '80px',
                marginTop: '80px'
              }
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
              color: "red",
              onDismiss: this.props.handle,
              header: "You Cancelled Payment!"
            }));
          }
        } else {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              marginLeft: '80px',
              marginRight: '80px',
              marginTop: '80px'
            }
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
            color: "red",
            onDismiss: this.props.handle,
            header: this.props.error
          }));
        }
      } else {
        return null;
      }
    }
  }]);

  return Notify;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // noftify = (props) =>
// {
// return this.props.visible ? <Message
//           onDismiss={this.handleDismiss}
//           header='Welcome back!'
//            content='This is a special notification which you can dismiss.'
//         /> : null
// }


/* harmony default export */ __webpack_exports__["default"] = (Notify);

/***/ }),

/***/ "./components/Modal2.js":
/*!******************************!*\
  !*** ./components/Modal2.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contributeForm2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contributeForm2 */ "./components/contributeForm2.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var modal =
/*#__PURE__*/
function (_Component) {
  _inherits(modal, _Component);

  function modal() {
    _classCallCheck(this, modal);

    return _possibleConstructorReturn(this, _getPrototypeOf(modal).apply(this, arguments));
  }

  _createClass(modal, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          active: true
        }, "Contribute Ether"),
        closeIcon: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
        icon: "archive",
        content: "Contribute"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contributeForm2__WEBPACK_IMPORTED_MODULE_2__["default"], {
        address: this.props.address,
        accountInfo: this.props.accountInfo,
        callback: this.props.callback
      })));
    }
  }]);

  return modal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./components/PaypalButton.js":
/*!************************************!*\
  !*** ./components/PaypalButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_async_script_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-async-script-loader */ "react-async-script-loader");
/* harmony import */ var react_async_script_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_async_script_loader__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var PaypalButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PaypalButton, _React$Component);

  function PaypalButton(props) {
    var _this;

    _classCallCheck(this, PaypalButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PaypalButton).call(this, props));
    _this.state = {
      showButton: false
    };

    if (typeof window !== 'undefined') {
      window.React = react__WEBPACK_IMPORTED_MODULE_0___default.a;
      window.ReactDOM = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a;
    }

    return _this;
  }

  _createClass(PaypalButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          isScriptLoaded = _this$props.isScriptLoaded,
          isScriptLoadSucceed = _this$props.isScriptLoadSucceed;

      if (isScriptLoaded && isScriptLoadSucceed) {
        this.setState({
          showButton: true
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var isScriptLoaded = nextProps.isScriptLoaded,
          isScriptLoadSucceed = nextProps.isScriptLoadSucceed;
      var isLoadedButWasntLoadedBefore = !this.state.showButton && !this.props.isScriptLoaded && isScriptLoaded;

      if (isLoadedButWasntLoadedBefore) {
        if (isScriptLoadSucceed) {
          this.setState({
            showButton: true
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (typeof window !== 'undefined') {
        var _paypal = window.PAYPAL;
      }

      var _this$props2 = this.props,
          total = _this$props2.total,
          currency = _this$props2.currency,
          env = _this$props2.env,
          commit = _this$props2.commit,
          client = _this$props2.client,
          onSuccess = _this$props2.onSuccess,
          onError = _this$props2.onError,
          onCancel = _this$props2.onCancel;
      var showButton = this.state.showButton;

      var payment = function payment() {
        return paypal.rest.payment.create(env, client, {
          transactions: [{
            amount: {
              total: total,
              currency: currency
            }
          }]
        });
      };

      var onAuthorize = function onAuthorize(data, actions) {
        return actions.payment.execute().then(function () {
          var payment = {
            paid: true,
            cancelled: false,
            payerID: data.payerID,
            paymentID: data.paymentID,
            paymentToken: data.paymentToken,
            returnUrl: data.returnUrl
          };
          onSuccess(payment);
        });
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, showButton && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(paypal.Button.react, {
        env: env,
        client: client,
        commit: commit,
        payment: payment,
        onAuthorize: onAuthorize,
        onCancel: onCancel,
        onError: onError
      }));
    }
  }]);

  return PaypalButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (react_async_script_loader__WEBPACK_IMPORTED_MODULE_2___default()('https://www.paypalobjects.com/api/checkout.js')(PaypalButton));

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

/***/ "./components/contributeForm.js":
/*!**************************************!*\
  !*** ./components/contributeForm.js ***!
  \**************************************/
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
/* harmony import */ var _campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../campaign */ "./campaign.js");
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web3 */ "./web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
/* harmony import */ var _components_Wrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Wrap */ "./components/Wrap.js");


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









var ContributeForm =
/*#__PURE__*/
function (_Component) {
  _inherits(ContributeForm, _Component);

  function ContributeForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContributeForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContributeForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: '',
      errorMessage: '',
      loading: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var campaign, accounts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                console.log(_this.props.accountInfo);
                campaign = Object(_campaign__WEBPACK_IMPORTED_MODULE_3__["default"])(_this.props.address);

                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context.prev = 4;
                _context.next = 7;
                return _web3__WEBPACK_IMPORTED_MODULE_4__["default"].eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return campaign.methods.contribute().send({
                  from: _this.props.accountInfo,
                  value: _web3__WEBPACK_IMPORTED_MODULE_4__["default"].utils.toWei(_this.state.value, 'ether'),
                  gas: 3000000
                });

              case 10:
                //Router.pushRoute(`/index/${this.props.accountInfo.accountInfo}`);
                _routes__WEBPACK_IMPORTED_MODULE_5__["Router"].replaceRoute("/campaigns/".concat(_this.props.accountInfo, "/").concat(_this.props.address));
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](4);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 16:
                _this.setState({
                  loading: false,
                  value: ''
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 13]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(ContributeForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log('=========+++++', this.props.accountInfo);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Wrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, " Amount to contribute "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        value: this.state.value,
        onChange: function onChange(event) {
          _this2.setState({
            value: event.target.value
          });
        },
        label: "ether",
        labelPosition: "right"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
        error: true,
        header: "oops",
        content: this.state.errorMessage
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        loading: this.state.loading,
        primary: true
      }, "Contribute")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        active: this.state.loading
      }));
    }
  }]);

  return ContributeForm;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ContributeForm);

/***/ }),

/***/ "./components/contributeForm2.js":
/*!***************************************!*\
  !*** ./components/contributeForm2.js ***!
  \***************************************/
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
/* harmony import */ var _campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../campaign */ "./campaign.js");
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web3 */ "./web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
/* harmony import */ var _components_Wrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Wrap */ "./components/Wrap.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Message */ "./components/Message.js");


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










var ContributeForm =
/*#__PURE__*/
function (_Component) {
  _inherits(ContributeForm, _Component);

  function ContributeForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContributeForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContributeForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: '',
      errorMessage: '',
      loading: false,
      visible: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDismiss", function () {
      _this.setState({
        visible: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateParent", function () {
      _this.props.callback();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var campaign, accounts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                console.log(_this.props.accountInfo);
                console.log("in contribute");
                campaign = Object(_campaign__WEBPACK_IMPORTED_MODULE_3__["default"])(_this.props.address);

                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context.prev = 5;
                _context.next = 8;
                return _web3__WEBPACK_IMPORTED_MODULE_4__["default"].eth.getAccounts();

              case 8:
                accounts = _context.sent;
                _context.next = 11;
                return campaign.methods.contribute().send({
                  from: _this.props.accountInfo,
                  value: _web3__WEBPACK_IMPORTED_MODULE_4__["default"].utils.toWei(_this.state.value, 'ether'),
                  gas: 3000000
                });

              case 11:
                _this.setState({
                  visible: true
                });

                _routes__WEBPACK_IMPORTED_MODULE_5__["Router"].pushRoute("/ind/".concat(_this.props.accountInfo));
                window.location.reload();
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](5);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 19:
                _this.setState({
                  loading: false,
                  value: ''
                });

                _context.next = 22;
                return _routes__WEBPACK_IMPORTED_MODULE_5__["Router"].pushRoute("/ind/".concat(_this.props.accountInfo));

              case 22:
                _this.updateParent(); //window.location.reload();


              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 16]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(ContributeForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log('=========+++++', this.props.accountInfo);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Wrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, " Amount to contribute (in ether) "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        value: this.state.value,
        onChange: function onChange(event) {
          _this2.setState({
            value: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
        error: true,
        header: "oops",
        content: this.state.errorMessage
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        loading: this.state.loading,
        primary: true
      }, "Contribute")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_8__["default"], {
        visible: this.state.visible,
        handle: this.handleDismiss
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        active: this.state.loading
      }));
    }
  }]);

  return ContributeForm;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ContributeForm);

/***/ }),

/***/ "./factory.js":
/*!********************!*\
  !*** ./factory.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./web3.js");
 //import CampaignFactory from './build/CampaignFactory.json';

var abi = [{
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "uint256"
  }],
  "name": "deployedCampaigns",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function",
  "signature": "0x339d50a5"
}, {
  "constant": false,
  "inputs": [{
    "name": "minimum",
    "type": "uint256"
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
  "name": "createCampaign",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function",
  "signature": "0x44b0c856"
}, {
  "constant": true,
  "inputs": [],
  "name": "getDeployedCampaigns",
  "outputs": [{
    "name": "",
    "type": "address[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function",
  "signature": "0x4acb9d4f"
}, {
  "constant": true,
  "inputs": [{
    "name": "b",
    "type": "address"
  }],
  "name": "getMyCampaigns",
  "outputs": [{
    "name": "",
    "type": "address[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function",
  "signature": "0x64c90966"
}, {
  "constant": false,
  "inputs": [{
    "name": "index",
    "type": "uint256"
  }],
  "name": "remove",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function",
  "signature": "0x4cc82215"
}];
var address = "0xb4049d6b71612E866187AD1D465651A52B3B7D7F";
var instance = new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(abi, address);
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./pages/index2.js":
/*!*************************!*\
  !*** ./pages/index2.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factory */ "./factory.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../web3 */ "./web3.js");
/* harmony import */ var _campaign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../campaign */ "./campaign.js");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Grid */ "./components/Grid.js");
/* harmony import */ var _components_Wrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Wrap */ "./components/Wrap.js");
/* harmony import */ var _components_Modal2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Modal2 */ "./components/Modal2.js");


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












var CampaignIndex =
/*#__PURE__*/
function (_Component) {
  _inherits(CampaignIndex, _Component);

  function CampaignIndex() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CampaignIndex);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CampaignIndex)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: false,
      donation: '',
      error: '',
      visible: false,
      payment: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggle", function () {
      console.log("in callback");

      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDismiss", function () {
      _this.setState({
        visible: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillReceiveProps", function (props) {
      console.log("in component will recieve props");
      console.log(props);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderInfo", function () {
      var latest = _this.props.campaigns.length;

      var items = _this.props.campaigns.map(function (address, index) {
        return {
          header: " Campaign:   #" + (index + 1),
          color: index + 1 == latest ? "green" : "null",
          description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Wrap__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
            address: address,
            accountInfo: _this.props.accountInfo.accountInfo
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            route: "/campaigns/".concat(_this.props.accountInfo.accountInfo, "/").concat(address)
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            style: {
              fontSize: "20px",
              padding: "5px"
            }
          }, " view details "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            style: {
              marginTop: "20px"
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Modal2__WEBPACK_IMPORTED_MODULE_10__["default"], {
            address: address,
            accountInfo: _this.props.accountInfo.accountInfo,
            callback: _this.toggle
          }))),
          fluid: true
        };
      }).reverse();

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
        items: items,
        style: {
          marginLeft: '80px',
          marginRight: '80px'
        }
      });
    });

    return _this;
  }

  _createClass(CampaignIndex, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          color: 'red'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          padding: '10px',
          color: 'black',
          fontFamily: 'Ariel'
        }
      }, "Open Campaigns"), this.renderInfo()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(props) {
        var campaigns, accountInfo, accounts, summaries;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _factory__WEBPACK_IMPORTED_MODULE_2__["default"].methods.getDeployedCampaigns().call();

              case 3:
                campaigns = _context2.sent;
                accountInfo = props.query;
                _context2.next = 7;
                return _web3__WEBPACK_IMPORTED_MODULE_6__["default"].eth.getAccounts();

              case 7:
                accounts = _context2.sent;
                _context2.next = 10;
                return campaigns.map(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(address, index) {
                    var campaign, summary;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return Object(_campaign__WEBPACK_IMPORTED_MODULE_7__["default"])(address);

                          case 2:
                            campaign = _context.sent;
                            _context.next = 5;
                            return campaign.methods.getSummary().call();

                          case 5:
                            summary = _context.sent;
                            return _context.abrupt("return", summary);

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x2, _x3) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 10:
                summaries = _context2.sent;
                return _context2.abrupt("return", {
                  campaigns: campaigns,
                  accountInfo: accountInfo,
                  accounts: accounts,
                  summaries: summaries
                });

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 14]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CampaignIndex);

/***/ }),

/***/ "./pages/json_demo.json":
/*!******************************!*\
  !*** ./pages/json_demo.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = [{"name":"John Smith","address":"0x04c677c7AB1c5bc0F769a03388f88e6BA735d8bD","password":"test123","role":"user","access":"true"},{"name":"CampaignManager","address":"0xE17AF25A77e0416F78921A3205E638c0567C762D","password":"test111","role":"manager","access":"true"},{"name":"Force10","address":"0xE69D1402D84E4CbFF29E31dcD25ace4FFCFD48Cb","password":"test","role":"contributer","access":"true"},{"name":"Mahindra","address":"0x82D5ed0551831b4c404341FF37d34f5A364FAf8c","password":"test","role":"contributer","access":"true"},{"name":"Bajaj","address":"0x7248543645A20f45DbAb8f1bDefC8A9E8fbE7618","password":"test","role":"contributer","access":"true"},{"name":"Emisure Labs","address":"0x87d467bd7C1CAB68B32bDca80a440f261a0a6372","password":"test","role":"recipient","access":"true"},{"name":"AlphaPistons","address":"0x28Bfd7e1Af5f21D1EbEBCC2eCf1B168455918356","password":"test","role":"recipient","access":"true"},{"name":"Bharat Locomotive","address":"0x90BD18058138f7fDdfA21ecf945c22e81C93144a","password":"test","role":"recipient","access":"true"},{"name":"superuser","address":"0x98E0E5810D9e262c4AC19815b57c68B7Bf6050a6","password":"test","role":"superuser","access":"true"}];

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

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/index2.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index2.js */"./pages/index2.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "react-async-script-loader":
/*!********************************************!*\
  !*** external "react-async-script-loader" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-async-script-loader");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

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
//# sourceMappingURL=index2.js.map