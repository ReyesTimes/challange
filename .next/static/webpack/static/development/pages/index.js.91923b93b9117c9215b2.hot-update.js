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
        className: "jsx-2511995108" + " " + "products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: product._id,
          className: "jsx-2511995108" + " " + "product",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
          className: "jsx-2511995108" + " " + "product__title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, product.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-2511995108" + " " + "product__cost",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, "$", product.cost));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2511995108",
        __self: this
      }, ".products.jsx-2511995108{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.product.jsx-2511995108{background-color:white;padding:1rem;margin-right:2%;-webkit-box-shadow:3px 3px 6px -2px rgba(20,20,20,0.3);-moz-box-shadow:3px 3px 6px -2px rgba(20,20,20,0.3);box-shadow:3px 3px 6px -2px rgba(20,20,20,0.3);width:31%;margin-bottom:2%;}.product__title.jsx-2511995108{margin-bottom:1rem;}.product__cost.jsx-2511995108{font-weight:bold;font-size:1.15rem;color:#FF4400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSnVhbiBFZHVhcmRvIFJleWVzXFxwcm95ZWN0c1xcY2hhbGxhbmdlXFxjb21wb25lbnRzXFxwcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQjRCLEFBR3NDLEFBS1UsQUFXSixBQUlGLGlCQUNDLEVBSnRCLElBWGlCLFlBZ0JDLENBZkUsYUFnQnBCLEdBZjJELHNCQVB4QyxpQ0FRcUMsd0JBUHhELDRCQVFtRCwrQ0FDckMsVUFDTyxpQkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxKdWFuIEVkdWFyZG8gUmV5ZXNcXHByb3llY3RzXFxjaGFsbGFuZ2VcXGNvbXBvbmVudHNcXHByb2R1Y3RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdHMpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2R1Y3RcIiBrZXk9e3Byb2R1Y3QuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3RfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX2Nvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvZHVjdC5jb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSkgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDZweCAtMnB4IHJnYmEoMjAsMjAsMjAsMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDZweCAtMnB4IHJnYmEoMjAsMjAsMjAsMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA2cHggLTJweCByZ2JhKDIwLDIwLDIwLDAuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RfX3RpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0X19jb3N0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRjQ0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\Juan Eduardo Reyes\\proyects\\challange\\components\\productList.js */"));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.91923b93b9117c9215b2.hot-update.js.map