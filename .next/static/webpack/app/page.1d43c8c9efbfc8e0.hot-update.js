"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/ui/bottombar.tsx":
/*!*************************************!*\
  !*** ./components/ui/bottombar.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Bottombar: function() { return /* binding */ Bottombar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/ConvosIcons.png */ \"(app-pages-browser)/./public/ConvosIcons.png\");\n/* harmony import */ var _public_Transcript_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/Transcript.png */ \"(app-pages-browser)/./public/Transcript.png\");\n\n\n\n\nfunction Bottombar(param) {\n    let { title } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full vrcomp p-4\",\n        style: {\n            display: \"flex\",\n            ju\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                alt: \"Bar at top of AR view\",\n                style: {\n                    width: \"27%\"\n                },\n                priority: true\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/bottombar.tsx\",\n                lineNumber: 12,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: _public_Transcript_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                alt: \"Bar at top of AR view\",\n                style: {\n                    width: \"15%\"\n                },\n                priority: true\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/bottombar.tsx\",\n                lineNumber: 18,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ktzhang/convo-sepper/components/ui/bottombar.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_c = Bottombar;\nvar _c;\n$RefreshReg$(_c, \"Bottombar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvYm90dG9tYmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEI7QUFFdUI7QUFDSDtBQUszQyxTQUFTRyxVQUFVLEtBQXNCO1FBQXRCLEVBQUVDLEtBQUssRUFBZSxHQUF0QjtJQUN0QixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtRQUFvQkMsT0FBTztZQUFDQyxTQUFTO1lBQVFDO1FBQUU7OzBCQUM1RCw4REFBQ1Qsa0RBQUtBO2dCQUNKVSxLQUFLVCwrREFBVUE7Z0JBQ2ZVLEtBQUk7Z0JBQ0pKLE9BQU87b0JBQUVLLE9BQU87Z0JBQUs7Z0JBQ3JCQyxRQUFROzs7Ozs7MEJBRVYsOERBQUNiLGtEQUFLQTtnQkFDSlUsS0FBS1IsOERBQVFBO2dCQUNiUyxLQUFJO2dCQUNKSixPQUFPO29CQUFFSyxPQUFPO2dCQUFLO2dCQUNyQkMsUUFBUTs7Ozs7Ozs7Ozs7O0FBSXBCO0tBakJnQlYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9ib3R0b21iYXIudHN4PzkxNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9wdWJsaWMvQ29udm9CdWRkeS5wbmcnXG5pbXBvcnQgY29udm9faWNvbiBmcm9tICcuLi8uLi9wdWJsaWMvQ29udm9zSWNvbnMucG5nJ1xuaW1wb3J0IHRyYW5zX3NjIGZyb20gJy4uLy4uL3B1YmxpYy9UcmFuc2NyaXB0LnBuZydcbmludGVyZmFjZSBUb3BiYXJQcm9wcyB7XG4gIHRpdGxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQm90dG9tYmFyKHsgdGl0bGUgfTogVG9wYmFyUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB2cmNvbXAgcC00XCIgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwganV9fT5cbiAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICBzcmM9e2NvbnZvX2ljb259IFxuICAgICAgICAgICAgYWx0PVwiQmFyIGF0IHRvcCBvZiBBUiB2aWV3XCIgXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzI3JSd9fVxuICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgIHNyYz17dHJhbnNfc2N9IFxuICAgICAgICAgICAgYWx0PVwiQmFyIGF0IHRvcCBvZiBBUiB2aWV3XCIgXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzE1JSd9fVxuICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJJbWFnZSIsImNvbnZvX2ljb24iLCJ0cmFuc19zYyIsIkJvdHRvbWJhciIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwianUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsInByaW9yaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/bottombar.tsx\n"));

/***/ })

});