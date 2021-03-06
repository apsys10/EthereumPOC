webpackHotUpdate("static\\development\\pages\\index2.js",{

/***/ "./components/Message2.js":
/*!********************************!*\
  !*** ./components/Message2.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
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
        if (this.props.error == '') {}

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

/***/ })

})
//# sourceMappingURL=index2.js.e1f560b545b3c93edfd8.hot-update.js.map