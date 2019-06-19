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
        className: "jsx-979016711" + " " + "products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: product._id,
          className: "jsx-979016711" + " " + "product",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, product.name, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-979016711",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, product.cost));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "979016711",
        __self: this
      }, ".products.jsx-979016711{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.product.jsx-979016711{background-color:white;padding:1rem;margin-right:2%;-webkit-box-shadow:3px 3px 6px -2px rgba(20,20,20,0.3);-moz-box-shadow:3px 3px 6px -2px rgba(20,20,20,0.3);box-shadow:3px 3px 6px -2px rgba(20,20,20,0.3);width:31%;margin-bottom:2%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSnVhbiBFZHVhcmRvIFJleWVzXFxwcm95ZWN0c1xcY2hhbGxhbmdlXFxjb21wb25lbnRzXFxwcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQjRCLEFBR3NDLEFBS1UsdUJBQ1YsYUFDRyxnQkFDdUMsc0JBUHhDLGlDQVFxQyx3QkFQeEQsNEJBUW1ELCtDQUNyQyxVQUNPLGlCQUNyQiIsImZpbGUiOiJDOlxcVXNlcnNcXEp1YW4gRWR1YXJkbyBSZXllc1xccHJveWVjdHNcXGNoYWxsYW5nZVxcY29tcG9uZW50c1xccHJvZHVjdExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0cyB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0cylcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvZHVjdFwiIGtleT17cHJvZHVjdC5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmNvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKSB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggNnB4IC0ycHggcmdiYSgyMCwyMCwyMCwwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggNnB4IC0ycHggcmdiYSgyMCwyMCwyMCwwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDZweCAtMnB4IHJnYmEoMjAsMjAsMjAsMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMxJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\Juan Eduardo Reyes\\proyects\\challange\\components\\productList.js */"));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.9d3a2f31e1a68c5a4f52.hot-update.js.map