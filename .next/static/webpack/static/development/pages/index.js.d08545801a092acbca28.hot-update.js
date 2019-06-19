webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/productList.js":
/*!***********************************!*\
  !*** ./components/productList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\Juan Eduardo Reyes\\proyects\\challange\\components\\productList.js";



var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "render",
    value: function render() {
      var products = this.props.products;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-979016711" + " " + "products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          className: "jsx-979016711" + " " + "product",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }, product.name);
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "979016711",
        __self: this
      }, ".products.jsx-979016711{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.product.jsx-979016711{background-color:white;padding:1rem;margin-right:2%;-webkit-box-shadow:3px 3px 6px -2px rgba(20,20,20,0.3);-moz-box-shadow:3px 3px 6px -2px rgba(20,20,20,0.3);box-shadow:3px 3px 6px -2px rgba(20,20,20,0.3);width:31%;margin-bottom:2%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSnVhbiBFZHVhcmRvIFJleWVzXFxwcm95ZWN0c1xcY2hhbGxhbmdlXFxjb21wb25lbnRzXFxwcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhNEIsQUFHc0MsQUFLVSx1QkFDVixhQUNHLGdCQUN1QyxzQkFQeEMsaUNBUXFDLHdCQVB4RCw0QkFRbUQsK0NBQ3JDLFVBQ08saUJBQ3JCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSnVhbiBFZHVhcmRvIFJleWVzXFxwcm95ZWN0c1xcY2hhbGxhbmdlXFxjb21wb25lbnRzXFxwcm9kdWN0TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA2cHggLTJweCByZ2JhKDIwLDIwLDIwLDAuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA2cHggLTJweCByZ2JhKDIwLDIwLDIwLDAuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNnB4IC0ycHggcmdiYSgyMCwyMCwyMCwwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzElO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\Juan Eduardo Reyes\\proyects\\challange\\components\\productList.js */"));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.d08545801a092acbca28.hot-update.js.map