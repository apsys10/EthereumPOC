webpackHotUpdate("static\\development\\pages\\onlyCreate.js",{

/***/ "./pages/onlyCreate.js":
/*!*****************************!*\
  !*** ./pages/onlyCreate.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factory */ "./factory.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../web3 */ "./web3.js");
/* harmony import */ var _components_Grid2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Grid2 */ "./components/Grid2.js");
/* harmony import */ var _components_Wrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Wrap */ "./components/Wrap.js");
/* harmony import */ var _json_demo_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./json_demo.json */ "./pages/json_demo.json");
var _json_demo_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./json_demo.json */ "./pages/json_demo.json", 1);
/* harmony import */ var _campaign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../campaign */ "./campaign.js");
/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Message */ "./components/Message.js");


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













var OnlyCreate =
/*#__PURE__*/
function (_Component) {
  _inherits(OnlyCreate, _Component);

  function OnlyCreate() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OnlyCreate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OnlyCreate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      rerender: false,
      visible: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componen", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "Remove",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(address, index) {
        var campaign, summary, faddr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(index);
                _context.prev = 1;
                _context.next = 4;
                return Object(_campaign__WEBPACK_IMPORTED_MODULE_10__["default"])(address);

              case 4:
                campaign = _context.sent;
                _context.next = 7;
                return campaign.methods.getSummary().call();

              case 7:
                summary = _context.sent;
                faddr = "0xb4049d6b71612E866187AD1D465651A52B3B7D7F";
                _context.next = 11;
                return campaign.methods.destruct(faddr, summary[5], index).send({
                  from: _this.props.accountInfo.accountInfo,
                  gas: 4000000
                }).then(function (res) {
                  console.log(res);

                  _this.setState({
                    visible: true
                  });

                  _routes__WEBPACK_IMPORTED_MODULE_5__["Router"].pushRoute("/id/".concat(_this.props.accountInfo.accountInfo)); // this.setState(prevState => ({
                  //   rerender: !prevState.rerender
                  // }));
                  // console.log(this.state.rerender);
                }).catch(function (err) {
                  console.log(err);
                });

              case 11:
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 13]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDismiss", function () {
      _this.setState({
        visible: false
      });
    });

    return _this;
  }

  _createClass(OnlyCreate, [{
    key: "renderCampaigns",
    value: function renderCampaigns() {
      var _this2 = this;

      //console.log("all Campaigns", this.props.campaigns);
      var latest = this.props.campaigns.length;
      var items = this.props.campaigns.map(function (address, index) {
        console.log("array length and address", latest, address);
        return {
          header: " Campaign:  # " + (index + 1),
          color: index + 1 == latest ? "green" : "null",
          description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Wrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            onClick: function onClick() {
              return _this2.Remove(address, index);
            },
            floated: "right",
            style: {
              color: 'red'
            }
          }, "Remove"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Grid2__WEBPACK_IMPORTED_MODULE_7__["default"], {
            address: address
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)),
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
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var externaltransactions;
      var user;
      _json_demo_json__WEBPACK_IMPORTED_MODULE_9__.map(function (v, i) {
        if (_json_demo_json__WEBPACK_IMPORTED_MODULE_9__[i].address == _this3.props.accountInfo.accountInfo) {
          user = _json_demo_json__WEBPACK_IMPORTED_MODULE_9__[i].role;
        }
      });
      console.log("user is", user); // if(this.props.accountInfo.accountInfo == "0x98E0E5810D9e262c4AC19815b57c68B7Bf6050a6")

      if (user == 'superuser') {
        externaltransactions = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Wrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
          route: "/transactions/".concat(this.props.accountInfo.accountInfo)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          size: "big",
          floated: "left",
          content: "Transactions",
          style: {
            marginLeft: '40px'
          }
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
          route: "/accessebility/".concat(this.props.accountInfo.accountInfo)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          size: "big",
          floated: "left",
          content: "Manage Accessability",
          style: {
            marginLeft: '40px'
          }
        }))));
      } else {
        externaltransactions = null;
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, externaltransactions, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        route: "/campaigns/".concat(this.props.accountInfo.accountInfo)
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        style: {
          marginLeft: '40px'
        },
        size: "big",
        floated: "left",
        content: "Create Campaign",
        icon: "add circle"
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          color: 'blue'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        style: {
          color: 'black',
          marginLeft: '80px'
        }
      }, "Open Campaigns"), this.renderCampaigns()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Message__WEBPACK_IMPORTED_MODULE_11__["default"], {
        visible: this.state.visible,
        handle: this.handleDismiss
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(props) {
        var campaigns, accountInfo, accounts;
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
                return _context2.abrupt("return", {
                  campaigns: campaigns,
                  accountInfo: accountInfo,
                  accounts: accounts
                });

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11]]);
      }));

      function getInitialProps(_x3) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return OnlyCreate;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (OnlyCreate);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/onlyCreate")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=onlyCreate.js.f8e9aff481055e86ad30.hot-update.js.map