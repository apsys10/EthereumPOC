webpackHotUpdate("static\\development\\pages\\index2.js",{

/***/ "./components/Grid.js":
/*!****************************!*\
  !*** ./components/Grid.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Wrap */ "./components/Wrap.js");
/* harmony import */ var _campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../campaign */ "./campaign.js");
/* harmony import */ var _pages_json_demo_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/json_demo.json */ "./pages/json_demo.json");
var _pages_json_demo_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../pages/json_demo.json */ "./pages/json_demo.json", 1);
/* harmony import */ var _contributeForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contributeForm */ "./components/contributeForm.js");
/* harmony import */ var _Modal2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modal2 */ "./components/Modal2.js");
/* harmony import */ var _PaypalButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PaypalButton */ "./components/PaypalButton.js");
/* harmony import */ var _components_Message2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Message2 */ "./components/Message2.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);


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
      donation: '',
      error: '',
      visible: false,
      payment: {}
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
              console.log(campaign);
              _context.next = 4;
              return campaign.methods.getSummary().call();

            case 4:
              summary = _context.sent;

              _this.setState({
                summary: summary
              });

            case 6:
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

      var onSuccess =
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(payment) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  payment.CampignName = _this2.state.summary[6];
                  payment.amount = _this2.state.donation;
                  payment.payerName = localStorage.getItem('currentUser');
                  console.log('Successful payment!', payment);
                  axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('https://donations-ffcdf.firebaseio.com/donations.json', payment).then(function (res) {
                    console.log(res);
                  }).catch(function (err) {
                    console.log(err);
                  });

                  _this2.setState({
                    visible: true
                  });

                  _this2.setState({
                    payment: payment
                  }); // window.scrollTo(0, 0);


                case 7:
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
        }); // window.scrollTo(0, 0);

      };

      var onCancel = function onCancel(data) {
        console.log('Cancelled payment!', data);

        _this2.setState({
          visible: true
        }); // window.scrollTo(0, 0);

      };

      var manager = this.state.summary[4];
      var minimumContribution = this.state.summary[0];
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
      var min = minimumContribution / 1000000000000000000;
      var mindollars = min * 150;
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
      }, "Donate in USD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginBottom: '5px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        icon: "dollar sign",
        size: "mini",
        value: this.state.donation,
        onChange: function onChange(event) {
          return _this2.setState({
            donation: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PaypalButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "",
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

/***/ })

})
//# sourceMappingURL=index2.js.ccab1e3fb1ef5c39db6f.hot-update.js.map