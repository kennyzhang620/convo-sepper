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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConvoView: function() { return /* binding */ ConvoView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MapView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapView */ \"(app-pages-browser)/./components/ui/MapView.tsx\");\n/* harmony import */ var _TableView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableView */ \"(app-pages-browser)/./components/ui/TableView.tsx\");\n/* harmony import */ var _topbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topbar */ \"(app-pages-browser)/./components/ui/topbar.tsx\");\n/* harmony import */ var _bottombar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bottombar */ \"(app-pages-browser)/./components/ui/bottombar.tsx\");\n/* harmony import */ var _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/ConvosIcons.png */ \"(app-pages-browser)/./public/ConvosIcons.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ConvoView(cvp) {\n    _s();\n    var [appMode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const topbar_txt = [\n        {\n            title: \"Conversation Map\",\n            p1: \"Find conversations that you want to join!\"\n        }\n    ];\n    const test = [\n        {\n            id: 3,\n            transcript: \"\",\n            px: 55,\n            py: 45,\n            theta: 55,\n            timestamp: Date.now(),\n            paused: false,\n            cxy: 0\n        },\n        {\n            id: 2,\n            transcript: \"\",\n            px: 95,\n            py: 45,\n            theta: 55,\n            timestamp: Date.now(),\n            paused: false,\n            cxy: 0\n        }\n    ];\n    const tdata = [\n        {\n            label: \"Artifical intelligence\",\n            id: 3,\n            transcript: \"cock\",\n            tips: \"abcd\",\n            paused: false\n        },\n        {\n            label: \"Artifical intelligence\",\n            id: 2,\n            transcript: \"cock\",\n            tips: \"abcd\",\n            paused: false\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_topbar__WEBPACK_IMPORTED_MODULE_4__.Topbar, {\n                title: \"Conversation Map\",\n                p1: \"\",\n                p2: \"Stuck? The transcripts are a great place to start!\",\n                logo: _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MapView__WEBPACK_IMPORTED_MODULE_2__.MapView, {\n                label: \"a\",\n                backgroundColour: \"#EFEFEF\",\n                ConvoPts: test,\n                height: \"43vh\"\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableView__WEBPACK_IMPORTED_MODULE_3__.TableView, {\n                label: \"a\",\n                backgroundColour: \"#58CC02\",\n                ConvoData: tdata\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bottombar__WEBPACK_IMPORTED_MODULE_5__.Bottombar, {\n                onClick1: ()=>setMode(0),\n                onClick2: ()=>setMode(1),\n                onClick3: ()=>setMode(2)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(ConvoView, \"sOYyTKBzcrQ1VD7Ybgf7KBZFj80=\");\n_c = ConvoView;\nvar _c;\n$RefreshReg$(_c, \"ConvoView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvQ29udm9WaWV3LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdnRDtBQUNaO0FBQ0k7QUFDTjtBQUNNO0FBQ2E7QUFZOUMsU0FBU00sVUFBVUMsR0FBZTs7SUFFdkMsSUFBSSxDQUFDQyxTQUFTQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2xDLE1BQU1VLGFBQWE7UUFBQztZQUFDQyxPQUFPO1lBQW9CQyxJQUFJO1FBQTJDO0tBQUU7SUFFakcsTUFBTUMsT0FBTztRQUFDO1lBQUNDLElBQUk7WUFBR0MsWUFBWTtZQUFJQyxJQUFJO1lBQUlDLElBQUk7WUFBSUMsT0FBTztZQUFJQyxXQUFXQyxLQUFLQyxHQUFHO1lBQUlDLFFBQVE7WUFBT0MsS0FBSztRQUFDO1FBQUc7WUFBQ1QsSUFBSTtZQUFHQyxZQUFZO1lBQUlDLElBQUk7WUFBSUMsSUFBSTtZQUFJQyxPQUFPO1lBQUlDLFdBQVdDLEtBQUtDLEdBQUc7WUFBSUMsUUFBUTtZQUFPQyxLQUFLO1FBQUM7S0FBRTtJQUNqTixNQUFNQyxRQUFRO1FBQUM7WUFBQ0MsT0FBTztZQUNyQlgsSUFBSTtZQUFHQyxZQUFZO1lBQVFXLE1BQU07WUFBUUosUUFBUTtRQUFLO1FBQUc7WUFBQ0csT0FBTztZQUMvRFgsSUFBSTtZQUFHQyxZQUFZO1lBQVFXLE1BQU07WUFBUUosUUFBUTtRQUFLO0tBQUU7SUFDNUQscUJBQ0UsOERBQUNLOzswQkFDRCw4REFBQ3hCLDJDQUFNQTtnQkFBQ1EsT0FBTTtnQkFBbUJDLElBQUc7Z0JBQUdnQixJQUFHO2dCQUFxREMsTUFBTXhCLCtEQUFVQTs7Ozs7OzBCQUMvRyw4REFBQ0osNkNBQU9BO2dCQUFDd0IsT0FBTTtnQkFBSUssa0JBQWlCO2dCQUFVQyxVQUFVbEI7Z0JBQU1tQixRQUFROzs7Ozs7MEJBQ3RFLDhEQUFDOUIsaURBQVNBO2dCQUFDdUIsT0FBTTtnQkFBSUssa0JBQWlCO2dCQUFVRyxXQUFXVDs7Ozs7OzBCQUMzRCw4REFBQ3BCLGlEQUFTQTtnQkFBQzhCLFVBQVUsSUFBTXpCLFFBQVE7Z0JBQUkwQixVQUFVLElBQU0xQixRQUFRO2dCQUFJMkIsVUFBVSxJQUFNM0IsUUFBUTs7Ozs7Ozs7Ozs7O0FBRy9GO0dBakJnQkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9Db252b1ZpZXcudHN4P2VkMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IFN0YXRpY0ltcG9ydCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9nZXQtaW1nLXByb3BzXCI7XG5pbXBvcnQgeyBDU1NQcm9wZXJ0aWVzLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWFwVmlldyB9IGZyb20gXCIuL01hcFZpZXdcIjtcbmltcG9ydCB7IFRhYmxlVmlldyB9IGZyb20gXCIuL1RhYmxlVmlld1wiO1xuaW1wb3J0IHsgVG9wYmFyIH0gZnJvbSBcIi4vdG9wYmFyXCI7XG5pbXBvcnQgeyBCb3R0b21iYXIgfSBmcm9tIFwiLi9ib3R0b21iYXJcIjtcbmltcG9ydCBjb252b19pY29uIGZyb20gJy4uLy4uL3B1YmxpYy9Db252b3NJY29ucy5wbmcnXG5cbmludGVyZmFjZSBDb252b1Byb3BzIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XG4gIGJhY2tncm91bmRDb2xvdXI6IHN0cmluZztcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb252b1ZpZXcoY3ZwOiBDb252b1Byb3BzKSB7XG5cbiAgdmFyIFthcHBNb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IHRvcGJhcl90eHQgPSBbe3RpdGxlOiBcIkNvbnZlcnNhdGlvbiBNYXBcIiwgcDE6IFwiRmluZCBjb252ZXJzYXRpb25zIHRoYXQgeW91IHdhbnQgdG8gam9pbiFcIn1dXG4gIFxuICBjb25zdCB0ZXN0ID0gW3tpZDogMywgdHJhbnNjcmlwdDogXCJcIiwgcHg6IDU1LCBweTogNDUsIHRoZXRhOiA1NSwgdGltZXN0YW1wOiBEYXRlLm5vdygpLCBwYXVzZWQ6IGZhbHNlLCBjeHk6IDB9LCB7aWQ6IDIsIHRyYW5zY3JpcHQ6IFwiXCIsIHB4OiA5NSwgcHk6IDQ1LCB0aGV0YTogNTUsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSwgcGF1c2VkOiBmYWxzZSwgY3h5OiAwfV07XG4gIGNvbnN0IHRkYXRhID0gW3tsYWJlbDogJ0FydGlmaWNhbCBpbnRlbGxpZ2VuY2UnLFxuICAgIGlkOiAzLCB0cmFuc2NyaXB0OiAnY29jaycsIHRpcHM6ICdhYmNkJywgcGF1c2VkOiBmYWxzZX0sIHtsYWJlbDogJ0FydGlmaWNhbCBpbnRlbGxpZ2VuY2UnLFxuICAgICAgaWQ6IDIsIHRyYW5zY3JpcHQ6ICdjb2NrJywgdGlwczogJ2FiY2QnLCBwYXVzZWQ6IGZhbHNlfV1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxUb3BiYXIgdGl0bGU9XCJDb252ZXJzYXRpb24gTWFwXCIgcDE9XCJcIiBwMj1cIlN0dWNrPyBUaGUgdHJhbnNjcmlwdHMgYXJlIGEgZ3JlYXQgcGxhY2UgdG8gc3RhcnQhXCIgbG9nbz17Y29udm9faWNvbn0+PC9Ub3BiYXI+XG4gICAgPE1hcFZpZXcgbGFiZWw9XCJhXCIgYmFja2dyb3VuZENvbG91cj1cIiNFRkVGRUZcIiBDb252b1B0cz17dGVzdH0gaGVpZ2h0PXsnNDN2aCd9PjwvTWFwVmlldz5cbiAgICA8VGFibGVWaWV3IGxhYmVsPVwiYVwiIGJhY2tncm91bmRDb2xvdXI9XCIjNThDQzAyXCIgQ29udm9EYXRhPXt0ZGF0YX0+PC9UYWJsZVZpZXc+XG4gICAgPEJvdHRvbWJhciBvbkNsaWNrMT17KCkgPT4gc2V0TW9kZSgwKX0gb25DbGljazI9eygpID0+IHNldE1vZGUoMSl9IG9uQ2xpY2szPXsoKSA9PiBzZXRNb2RlKDIpfT48L0JvdHRvbWJhcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0gIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTWFwVmlldyIsIlRhYmxlVmlldyIsIlRvcGJhciIsIkJvdHRvbWJhciIsImNvbnZvX2ljb24iLCJDb252b1ZpZXciLCJjdnAiLCJhcHBNb2RlIiwic2V0TW9kZSIsInRvcGJhcl90eHQiLCJ0aXRsZSIsInAxIiwidGVzdCIsImlkIiwidHJhbnNjcmlwdCIsInB4IiwicHkiLCJ0aGV0YSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJwYXVzZWQiLCJjeHkiLCJ0ZGF0YSIsImxhYmVsIiwidGlwcyIsImRpdiIsInAyIiwibG9nbyIsImJhY2tncm91bmRDb2xvdXIiLCJDb252b1B0cyIsImhlaWdodCIsIkNvbnZvRGF0YSIsIm9uQ2xpY2sxIiwib25DbGljazIiLCJvbkNsaWNrMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/ConvoView.tsx\n"));

/***/ })

});