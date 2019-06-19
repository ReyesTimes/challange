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
      console.log(products);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-3299982212" + " " + "products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: product._id,
          className: "jsx-3299982212" + " " + "product",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
          className: "jsx-3299982212" + " " + "product__title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, product.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          class: "product__cost\r ",
          className: "jsx-3299982212",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, product.cost));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3299982212",
        __self: this
      }, ".products.jsx-3299982212{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.product.jsx-3299982212{background-color:white;padding:1rem;margin-right:2%;-webkit-box-shadow:3px 3px 6px -2px rgba(20,20,20,0.3);-moz-box-shadow:3px 3px 6px -2px rgba(20,20,20,0.3);box-shadow:3px 3px 6px -2px rgba(20,20,20,0.3);width:31%;margin-bottom:2%;}.product__title.jsx-3299982212{margin-bottom:1rem;}.product__cost.jsx-3299982212{font-weight:bold;font-size:1.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSnVhbiBFZHVhcmRvIFJleWVzXFxwcm95ZWN0c1xcY2hhbGxhbmdlXFxjb21wb25lbnRzXFxwcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQjRCLEFBR3NDLEFBS1UsQUFXSixBQUlGLGlCQUNDLEVBSnRCLElBWGlCLFlBZ0JqQixDQWZvQixnQkFDdUMsc0JBUHhDLGlDQVFxQyx3QkFQeEQsNEJBUW1ELCtDQUNyQyxVQUNPLGlCQUNyQiIsImZpbGUiOiJDOlxcVXNlcnNcXEp1YW4gRWR1YXJkbyBSZXllc1xccHJveWVjdHNcXGNoYWxsYW5nZVxcY29tcG9uZW50c1xccHJvZHVjdExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0cyB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0cylcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvZHVjdFwiIGtleT17cHJvZHVjdC5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdF9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19jb3N0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuY29zdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA2cHggLTJweCByZ2JhKDIwLDIwLDIwLDAuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA2cHggLTJweCByZ2JhKDIwLDIwLDIwLDAuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNnB4IC0ycHggcmdiYSgyMCwyMCwyMCwwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzElO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0X190aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdF9fY29zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\Juan Eduardo Reyes\\proyects\\challange\\components\\productList.js */"));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.6037e26dc9a016681568.hot-update.js.map