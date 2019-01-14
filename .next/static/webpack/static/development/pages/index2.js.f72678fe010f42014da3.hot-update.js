webpackHotUpdate("static\\development\\pages\\index2.js",{

/***/ "./pages/index2.js":
/*!*************************!*\
  !*** ./pages/index2.js ***!
  \*************************/
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
/* harmony import */ var _campaign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../campaign */ "./campaign.js");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Grid */ "./components/Grid.js");
/* harmony import */ var _components_Wrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Wrap */ "./components/Wrap.js");
/* harmony import */ var _components_Modal2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Modal2 */ "./components/Modal2.js");
/* harmony import */ var _components_PaypalButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/PaypalButton */ "./components/PaypalButton.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Message2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Message2 */ "./components/Message2.js");


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
        var onSuccess =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(payment) {
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
                    payment.CampignName = summary[6];
                    payment.amount = _this.state.donation;
                    payment.payerName = localStorage.getItem('currentUser');
                    console.log('Successful payment!', payment);
                    axios__WEBPACK_IMPORTED_MODULE_12___default.a.post('https://donations-ffcdf.firebaseio.com/donations.json', payment).then(function (res) {
                      console.log(res);
                    }).catch(function (err) {
                      console.log(err);
                    });

                    _this.setState({
                      visible: true
                    });

                    _this.setState({
                      payment: payment
                    });

                    window.scrollTo(0, 0);

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function onSuccess(_x) {
            return _ref.apply(this, arguments);
          };
        }();

        var onError = function onError(error) {
          console.log('Erroneous payment OR failed to load script!', error);

          _this.setState({
            visible: true
          });

          _this.setState({
            error: true
          });

          window.scrollTo(0, 0);
        };

        var onCancel = function onCancel(data) {
          console.log('Cancelled payment!', data);

          _this.setState({
            visible: true
          });

          window.scrollTo(0, 0);
        };

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
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            style: {
              float: 'right',
              padding: '5px'
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            style: {
              color: 'black',
              fontSize: '20px',
              fontFamily: 'Ariel'
            }
          }, "Donate in USD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"], {
            icon: "dollar sign",
            size: "mini",
            value: _this.state.donation,
            onChange: function onChange(event) {
              return _this.setState({
                donation: event.target.value
              });
            }
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            style: {
              float: 'right',
              padding: '5px',
              marginRight: '400px'
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PaypalButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
            client: CLIENT,
            env: ENV,
            commit: true,
            currency: 'USD',
            total: _this.state.donation,
            onSuccess: onSuccess,
            onError: onError,
            onCancel: onCancel
          }))))),
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Message2__WEBPACK_IMPORTED_MODULE_13__["default"], {
        visible: this.state.visible,
        handle: this.handleDismiss,
        address: this.state.payment.CampignName,
        data: this.state.payment
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          color: 'red'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        style: {
          padding: '10px',
          color: 'black'
        }
      }, "Open Campaigns"), this.renderInfo()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(props) {
        var campaigns, accountInfo, accounts, summaries;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _factory__WEBPACK_IMPORTED_MODULE_2__["default"].methods.getDeployedCampaigns().call();

              case 3:
                campaigns = _context3.sent;
                accountInfo = props.query;
                _context3.next = 7;
                return _web3__WEBPACK_IMPORTED_MODULE_6__["default"].eth.getAccounts();

              case 7:
                accounts = _context3.sent;
                _context3.next = 10;
                return campaigns.map(
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(address, index) {
                    var campaign, summary;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return Object(_campaign__WEBPACK_IMPORTED_MODULE_7__["default"])(address);

                          case 2:
                            campaign = _context2.sent;
                            _context2.next = 5;
                            return campaign.methods.getSummary().call();

                          case 5:
                            summary = _context2.sent;
                            return _context2.abrupt("return", summary);

                          case 7:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function (_x3, _x4) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 10:
                summaries = _context3.sent;
                return _context3.abrupt("return", {
                  campaigns: campaigns,
                  accountInfo: accountInfo,
                  accounts: accounts,
                  summaries: summaries
                });

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 14]]);
      }));

      function getInitialProps(_x2) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CampaignIndex);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/index2")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index2.js.f72678fe010f42014da3.hot-update.js.map