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
        className: "jsx-1817921737" + " " + "products container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: product._id,
          className: "jsx-1817921737" + " " + "product",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-1817921737" + " " + "product__img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: product.img.url,
          className: "jsx-1817921737",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-1817921737",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
          className: "jsx-1817921737" + " " + "product__title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, product.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-1817921737" + " " + "product__cost",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, product.cost, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "jsx-1817921737" + " " + "product__cost--small",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, "PTS"))));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1817921737",
        __self: this
      }, ".products.jsx-1817921737{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.product.jsx-1817921737{background-color:white;border:1px solid #e6e2e2 padding:1rem;margin-right:3%;margin-bottom:3%;box-shadow:2px 2px 6px -1px rgba(0,0,0,0.25);width:30%;}.product__img.jsx-1817921737 img.jsx-1817921737{width:100%;}.product__title.jsx-1817921737{margin-bottom:1rem;}.product__cost.jsx-1817921737{font-weight:bold;font-size:1.45rem;color:#FF4400;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.product__cost--small.jsx-1817921737{font-size:.75rem;margin-left:.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSnVhbiBFZHVhcmRvIFJleWVzXFxwcm95ZWN0c1xcY2hhbGxhbmdlXFxjb21wb25lbnRzXFxwcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QjRCLEFBR3NDLEFBS1UsQUFVWixBQUlRLEFBSUYsQUFRQSxXQWZyQixNQVFzQixBQVFDLEVBWnZCLElBYmlCLFlBa0JDLENBUWxCLGFBUGlCLFlBbEJHLGFBUEQsR0FRRSxpQkFDK0IsNkJBaUI3QixRQXpCdkIsUUFTYyxVQUNkLG1FQWdCQSIsImZpbGUiOiJDOlxcVXNlcnNcXEp1YW4gRWR1YXJkbyBSZXllc1xccHJveWVjdHNcXGNoYWxsYW5nZVxcY29tcG9uZW50c1xccHJvZHVjdExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0cyB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0cylcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdHMgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2R1Y3RcIiBrZXk9e3Byb2R1Y3QuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltZy51cmx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3RfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX2Nvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5jb3N0fSA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0X19jb3N0LS1zbWFsbFwiPlBUUzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSkgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTJlMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RfX2ltZyBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RfX3RpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0X19jb3N0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRjQ0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0X19jb3N0LS1zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\Juan Eduardo Reyes\\proyects\\challange\\components\\productList.js */"));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.e70fd69fc71b5acab3eb.hot-update.js.map