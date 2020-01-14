webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "C:\\Users\\user\\Desktop\\NodeBird\\ch1\\front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Home = function Home() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, dummy.mainPosts.map(function (c) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      Key: c.createAt,
      cover: c.img && __jsx("img", {
        alt: "example",
        src: c.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }),
      actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "retweet",
        key: "retweet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "heart",
        key: "heart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "message",
        key: "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "ellipsis",
        key: "ellipsis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })],
      extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "\uD314\uB85C\uC6B0"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, c.User.nickname[0]),
      title: c.User.nickname,
      description: c.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.68a4fc2fd53e52f52be1.hot-update.js.map