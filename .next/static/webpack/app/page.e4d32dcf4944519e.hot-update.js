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

/***/ "(app-pages-browser)/./components/ui/ConvoView.tsx":
/*!*************************************!*\
  !*** ./components/ui/ConvoView.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConvoView: function() { return /* binding */ ConvoView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _MapView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapView */ \"(app-pages-browser)/./components/ui/MapView.tsx\");\n/* harmony import */ var _TableView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableView */ \"(app-pages-browser)/./components/ui/TableView.tsx\");\n/* harmony import */ var _topbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topbar */ \"(app-pages-browser)/./components/ui/topbar.tsx\");\n/* harmony import */ var _bottombar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bottombar */ \"(app-pages-browser)/./components/ui/bottombar.tsx\");\n\n\n\n\n\nfunction ConvoView(cvp) {\n    const test = [\n        {\n            id: 3,\n            transcript: \"\",\n            px: 55,\n            py: 45,\n            theta: 55,\n            timestamp: Date.now(),\n            paused: false,\n            cxy: 0\n        },\n        {\n            id: 2,\n            transcript: \"\",\n            px: 95,\n            py: 45,\n            theta: 55,\n            timestamp: Date.now(),\n            paused: false,\n            cxy: 0\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_topbar__WEBPACK_IMPORTED_MODULE_3__.Topbar, {\n                title: \"Conversation Map\"\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MapView__WEBPACK_IMPORTED_MODULE_1__.MapView, {\n                label: \"a\",\n                backgroundColour: \"#EFEFEF\",\n                ConvoPts: test,\n                height: 350\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableView__WEBPACK_IMPORTED_MODULE_2__.TableView, {\n                label: \"a\",\n                backgroundColour: \"#58CC02\",\n                ConvoData: []\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bottombar__WEBPACK_IMPORTED_MODULE_4__.Bottombar, {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_c = ConvoView;\nvar _c;\n$RefreshReg$(_c, \"ConvoView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvQ29udm9WaWV3LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSW9DO0FBQ0k7QUFDTjtBQUNNO0FBWWpDLFNBQVNJLFVBQVVDLEdBQWU7SUFFdkMsTUFBTUMsT0FBTztRQUFDO1lBQUNDLElBQUk7WUFBR0MsWUFBWTtZQUFJQyxJQUFJO1lBQUlDLElBQUk7WUFBSUMsT0FBTztZQUFJQyxXQUFXQyxLQUFLQyxHQUFHO1lBQUlDLFFBQVE7WUFBT0MsS0FBSztRQUFDO1FBQUc7WUFBQ1QsSUFBSTtZQUFHQyxZQUFZO1lBQUlDLElBQUk7WUFBSUMsSUFBSTtZQUFJQyxPQUFPO1lBQUlDLFdBQVdDLEtBQUtDLEdBQUc7WUFBSUMsUUFBUTtZQUFPQyxLQUFLO1FBQUM7S0FBRTtJQUNqTixxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDZiwyQ0FBTUE7Z0JBQUNnQixPQUFNOzs7Ozs7MEJBQ2hCLDhEQUFDbEIsNkNBQU9BO2dCQUFDbUIsT0FBTTtnQkFBSUMsa0JBQWlCO2dCQUFVQyxVQUFVZjtnQkFBTWdCLFFBQVE7Ozs7OzswQkFDdEUsOERBQUNyQixpREFBU0E7Z0JBQUNrQixPQUFNO2dCQUFJQyxrQkFBaUI7Z0JBQVVHLFdBQVcsRUFBRTs7Ozs7OzBCQUM3RCw4REFBQ3BCLGlEQUFTQTs7Ozs7Ozs7Ozs7QUFHZDtLQVhnQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9Db252b1ZpZXcudHN4P2VkMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IFN0YXRpY0ltcG9ydCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9nZXQtaW1nLXByb3BzXCI7XG5pbXBvcnQgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNYXBWaWV3IH0gZnJvbSBcIi4vTWFwVmlld1wiO1xuaW1wb3J0IHsgVGFibGVWaWV3IH0gZnJvbSBcIi4vVGFibGVWaWV3XCI7XG5pbXBvcnQgeyBUb3BiYXIgfSBmcm9tIFwiLi90b3BiYXJcIjtcbmltcG9ydCB7IEJvdHRvbWJhciB9IGZyb20gXCIuL2JvdHRvbWJhclwiO1xuXG5pbnRlcmZhY2UgQ29udm9Qcm9wcyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xuICBiYWNrZ3JvdW5kQ29sb3VyOiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29udm9WaWV3KGN2cDogQ29udm9Qcm9wcykge1xuICBcbiAgY29uc3QgdGVzdCA9IFt7aWQ6IDMsIHRyYW5zY3JpcHQ6IFwiXCIsIHB4OiA1NSwgcHk6IDQ1LCB0aGV0YTogNTUsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSwgcGF1c2VkOiBmYWxzZSwgY3h5OiAwfSwge2lkOiAyLCB0cmFuc2NyaXB0OiBcIlwiLCBweDogOTUsIHB5OiA0NSwgdGhldGE6IDU1LCB0aW1lc3RhbXA6IERhdGUubm93KCksIHBhdXNlZDogZmFsc2UsIGN4eTogMH1dO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VG9wYmFyIHRpdGxlPVwiQ29udmVyc2F0aW9uIE1hcFwiPjwvVG9wYmFyPlxuICAgIDxNYXBWaWV3IGxhYmVsPVwiYVwiIGJhY2tncm91bmRDb2xvdXI9XCIjRUZFRkVGXCIgQ29udm9QdHM9e3Rlc3R9IGhlaWdodD17MzUwfT48L01hcFZpZXc+XG4gICAgPFRhYmxlVmlldyBsYWJlbD1cImFcIiBiYWNrZ3JvdW5kQ29sb3VyPVwiIzU4Q0MwMlwiIENvbnZvRGF0YT17W119PjwvVGFibGVWaWV3PlxuICAgIDxCb3R0b21iYXI+PC9Cb3R0b21iYXI+XG4gICAgPC9kaXY+XG4gICk7XG59ICJdLCJuYW1lcyI6WyJNYXBWaWV3IiwiVGFibGVWaWV3IiwiVG9wYmFyIiwiQm90dG9tYmFyIiwiQ29udm9WaWV3IiwiY3ZwIiwidGVzdCIsImlkIiwidHJhbnNjcmlwdCIsInB4IiwicHkiLCJ0aGV0YSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJwYXVzZWQiLCJjeHkiLCJkaXYiLCJ0aXRsZSIsImxhYmVsIiwiYmFja2dyb3VuZENvbG91ciIsIkNvbnZvUHRzIiwiaGVpZ2h0IiwiQ29udm9EYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/ConvoView.tsx\n"));

/***/ })

});