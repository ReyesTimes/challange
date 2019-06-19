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
        className: "jsx-2332716163" + " " + "products container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: product._id,
          className: "jsx-2332716163" + " " + "product",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-2332716163" + " " + "product__img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: product.img.url,
          className: "jsx-2332716163",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-2332716163",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
          className: "jsx-2332716163" + " " + "product__title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, product.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-2332716163" + " " + "product__cost",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, product.cost, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "jsx-2332716163" + " " + "product__cost--small",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, "PTS"))));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2332716163",
        __self: this
      }, ".products.jsx-2332716163{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.product.jsx-2332716163{background-color:white;padding:1rem;margin-right:3%;box-shadow:2px 2px 5px -1px rgba(0,0,0,0.25);width:30%;margin-bottom:3%;}.product__img.jsx-2332716163 img.jsx-2332716163{width:100%;}.product__title.jsx-2332716163{margin-bottom:1rem;}.product__cost.jsx-2332716163{font-weight:bold;font-size:1.45rem;color:#FF4400;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.product__cost--small.jsx-2332716163{font-size:.75rem;margin-left:.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSnVhbiBFZHVhcmRvIFJleWVzXFxwcm95ZWN0c1xcY2hhbGxhbmdlXFxjb21wb25lbnRzXFxwcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QjRCLEFBR3NDLEFBS1UsQUFTWixBQUlRLEFBSUYsQUFRQSxXQWZyQixNQVFzQixBQVFDLEVBWnZCLElBYmlCLFlBa0JDLENBakJFLEFBeUJwQixhQVBpQixHQWpCbUMsc0JBUGpDLHVCQVFMLFVBQ08sZ0JBZ0JFLENBZnZCLE9BVEEscUZBeUJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSnVhbiBFZHVhcmRvIFJleWVzXFxwcm95ZWN0c1xcY2hhbGxhbmdlXFxjb21wb25lbnRzXFxwcm9kdWN0TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9kdWN0cyBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvZHVjdFwiIGtleT17cHJvZHVjdC5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX2ltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1nLnVybH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdF9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fY29zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmNvc3R9IDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3RfX2Nvc3QtLXNtYWxsXCI+UFRTPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKSB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RfX2ltZyBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RfX3RpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0X19jb3N0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRjQ0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0X19jb3N0LS1zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\Juan Eduardo Reyes\\proyects\\challange\\components\\productList.js */"));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.62b12f15b7f0dc5a653d.hot-update.js.map