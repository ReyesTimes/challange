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
        className: "jsx-3550835415" + " " + "products container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: product._id,
          className: "jsx-3550835415" + " " + "product",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-3550835415" + " " + "product__img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: product.img.url,
          className: "jsx-3550835415",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-3550835415",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
          className: "jsx-3550835415" + " " + "product__title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, product.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-3550835415" + " " + "product__cost",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, product.cost, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "jsx-3550835415" + " " + "product__cost--small",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, "PTS"))));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3550835415",
        __self: this
      }, ".products.jsx-3550835415{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.product.jsx-3550835415{background-color:white;padding:1rem;margin-right:3%;margin-bottom:3%;box-shadow:2px 2px 5px -1px rgba(0,0,0,0.35);width:30%;}.product__img.jsx-3550835415 img.jsx-3550835415{width:100%;}.product__title.jsx-3550835415{margin-bottom:1rem;}.product__cost.jsx-3550835415{font-weight:bold;font-size:1.45rem;color:#FF4400;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.product__cost--small.jsx-3550835415{font-size:.75rem;margin-left:.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSnVhbiBFZHVhcmRvIFJleWVzXFxwcm95ZWN0c1xcY2hhbGxhbmdlXFxjb21wb25lbnRzXFxwcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QjRCLEFBR3NDLEFBS1UsQUFTWixBQUlRLEFBSUYsQUFRQSxXQWZyQixNQVFzQixBQVFDLEVBWnZCLElBYmlCLFlBa0JDLENBakJFLEFBeUJwQixhQVBpQixHQWpCSSxpQkFDK0IsS0FSakMsd0NBU0wsU0FnQlMsQ0FmdkIsT0FUQSxxRkF5QkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxKdWFuIEVkdWFyZG8gUmV5ZXNcXHByb3llY3RzXFxjaGFsbGFuZ2VcXGNvbXBvbmVudHNcXHByb2R1Y3RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdHMpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2R1Y3RzIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9kdWN0XCIga2V5PXtwcm9kdWN0Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9faW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWcudXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0X190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19jb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuY29zdH0gPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdF9fY29zdC0tc21hbGxcIj5QVFM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdF9faW1nIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdF9fdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RfX2Nvc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjQ1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGNDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RfX2Nvc3QtLXNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\Juan Eduardo Reyes\\proyects\\challange\\components\\productList.js */"));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.faece7d4a58c8c7f0815.hot-update.js.map