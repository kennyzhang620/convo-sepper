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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConvoView: function() { return /* binding */ ConvoView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MapView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapView */ \"(app-pages-browser)/./components/ui/MapView.tsx\");\n/* harmony import */ var _TableView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableView */ \"(app-pages-browser)/./components/ui/TableView.tsx\");\n/* harmony import */ var _bottombar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bottombar */ \"(app-pages-browser)/./components/ui/bottombar.tsx\");\n/* harmony import */ var _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/ConvosIcons.png */ \"(app-pages-browser)/./public/ConvosIcons.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ConvoView(cvp) {\n    _s();\n    var [appMode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const topbar_txt = [\n        {\n            title: \"Conversation Map\",\n            p1: \"Find conversations that you want to join!\",\n            p2: \"Stuck? The transcripts are a great place to start!\",\n            logo: _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n        }\n    ];\n    const test = [\n        {\n            id: 3,\n            transcript: \"\",\n            px: 55,\n            py: 45,\n            theta: 55,\n            timestamp: Date.now(),\n            paused: false,\n            cxy: 0\n        },\n        {\n            id: 2,\n            transcript: \"\",\n            px: 95,\n            py: 45,\n            theta: 55,\n            timestamp: Date.now(),\n            paused: false,\n            cxy: 0\n        }\n    ];\n    const tdata = [\n        {\n            label: \"Artifical intelligence\",\n            id: 3,\n            transcript: \"cock\",\n            tips: \"abcd\",\n            paused: false\n        },\n        {\n            label: \"Artifical intelligence\",\n            id: 2,\n            transcript: \"cock\",\n            tips: \"abcd\",\n            paused: false\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            appMode == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MapView__WEBPACK_IMPORTED_MODULE_2__.MapView, {\n                    label: \"a\",\n                    backgroundColour: \"#EFEFEF\",\n                    ConvoPts: test,\n                    height: \"43vh\"\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 23\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 32,\n                columnNumber: 18\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 32,\n                columnNumber: 120\n            }, this),\n            appMode <= 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableView__WEBPACK_IMPORTED_MODULE_3__.TableView, {\n                    label: \"a\",\n                    backgroundColour: appMode == 0 ? \"#58CC02\" : \"FFFFF\",\n                    ConvoData: tdata\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 23\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 33,\n                columnNumber: 18\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 33,\n                columnNumber: 137\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bottombar__WEBPACK_IMPORTED_MODULE_4__.Bottombar, {\n                onClick1: ()=>setMode(0),\n                onClick2: ()=>setMode(1),\n                onClick3: ()=>setMode(2)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(ConvoView, \"sOYyTKBzcrQ1VD7Ybgf7KBZFj80=\");\n_c = ConvoView;\nvar _c;\n$RefreshReg$(_c, \"ConvoView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvQ29udm9WaWV3LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR2dEO0FBQ1o7QUFDSTtBQUVBO0FBQ2E7QUFZOUMsU0FBU0ssVUFBVUMsR0FBZTs7SUFFdkMsSUFBSSxDQUFDQyxTQUFTQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2xDLE1BQU1TLGFBQWE7UUFBQztZQUFDQyxPQUFPO1lBQW9CQyxJQUFJO1lBQTZDQyxJQUFJO1lBQXNEQyxNQUFNVCwrREFBVUE7UUFBQTtLQUFFO0lBRTdLLE1BQU1VLE9BQU87UUFBQztZQUFDQyxJQUFJO1lBQUdDLFlBQVk7WUFBSUMsSUFBSTtZQUFJQyxJQUFJO1lBQUlDLE9BQU87WUFBSUMsV0FBV0MsS0FBS0MsR0FBRztZQUFJQyxRQUFRO1lBQU9DLEtBQUs7UUFBQztRQUFHO1lBQUNULElBQUk7WUFBR0MsWUFBWTtZQUFJQyxJQUFJO1lBQUlDLElBQUk7WUFBSUMsT0FBTztZQUFJQyxXQUFXQyxLQUFLQyxHQUFHO1lBQUlDLFFBQVE7WUFBT0MsS0FBSztRQUFDO0tBQUU7SUFDak4sTUFBTUMsUUFBUTtRQUFDO1lBQUNDLE9BQU87WUFDckJYLElBQUk7WUFBR0MsWUFBWTtZQUFRVyxNQUFNO1lBQVFKLFFBQVE7UUFBSztRQUFHO1lBQUNHLE9BQU87WUFDL0RYLElBQUk7WUFBR0MsWUFBWTtZQUFRVyxNQUFNO1lBQVFKLFFBQVE7UUFBSztLQUFFO0lBQzVELHFCQUNFLDhEQUFDSzs7WUFDSHJCLFdBQVcsa0JBQUksOERBQUNxQjswQkFBSSw0RUFBQzNCLDZDQUFPQTtvQkFBQ3lCLE9BQU07b0JBQUlHLGtCQUFpQjtvQkFBVUMsVUFBVWhCO29CQUFNaUIsUUFBUTs7Ozs7Ozs7OztxQ0FBMkIsOERBQUNIOzs7OztZQUN0SHJCLFdBQVcsa0JBQUksOERBQUNxQjswQkFBSSw0RUFBQzFCLGlEQUFTQTtvQkFBQ3dCLE9BQU07b0JBQUlHLGtCQUFrQnRCLFdBQVcsSUFBSSxZQUFZO29CQUFTeUIsV0FBV1A7Ozs7Ozs7Ozs7cUNBQTRCLDhEQUFDRzs7Ozs7MEJBQ3JJLDhEQUFDekIsaURBQVNBO2dCQUFDOEIsVUFBVSxJQUFNekIsUUFBUTtnQkFBSTBCLFVBQVUsSUFBTTFCLFFBQVE7Z0JBQUkyQixVQUFVLElBQU0zQixRQUFROzs7Ozs7Ozs7Ozs7QUFJL0Y7R0FqQmdCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL0NvbnZvVmlldy50c3g/ZWQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHsgU3RhdGljSW1wb3J0IH0gZnJvbSBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2dldC1pbWctcHJvcHNcIjtcbmltcG9ydCB7IENTU1Byb3BlcnRpZXMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNYXBWaWV3IH0gZnJvbSBcIi4vTWFwVmlld1wiO1xuaW1wb3J0IHsgVGFibGVWaWV3IH0gZnJvbSBcIi4vVGFibGVWaWV3XCI7XG5pbXBvcnQgeyBUb3BiYXIgfSBmcm9tIFwiLi90b3BiYXJcIjtcbmltcG9ydCB7IEJvdHRvbWJhciB9IGZyb20gXCIuL2JvdHRvbWJhclwiO1xuaW1wb3J0IGNvbnZvX2ljb24gZnJvbSAnLi4vLi4vcHVibGljL0NvbnZvc0ljb25zLnBuZydcblxuaW50ZXJmYWNlIENvbnZvUHJvcHMge1xuICBsYWJlbDogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIHN0eWxlPzogQ1NTUHJvcGVydGllcztcbiAgYmFja2dyb3VuZENvbG91cjogc3RyaW5nO1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbnZvVmlldyhjdnA6IENvbnZvUHJvcHMpIHtcblxuICB2YXIgW2FwcE1vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgdG9wYmFyX3R4dCA9IFt7dGl0bGU6IFwiQ29udmVyc2F0aW9uIE1hcFwiLCBwMTogXCJGaW5kIGNvbnZlcnNhdGlvbnMgdGhhdCB5b3Ugd2FudCB0byBqb2luIVwiLCBwMjogXCJTdHVjaz8gVGhlIHRyYW5zY3JpcHRzIGFyZSBhIGdyZWF0IHBsYWNlIHRvIHN0YXJ0IVwiLCBsb2dvOiBjb252b19pY29ufV1cbiAgXG4gIGNvbnN0IHRlc3QgPSBbe2lkOiAzLCB0cmFuc2NyaXB0OiBcIlwiLCBweDogNTUsIHB5OiA0NSwgdGhldGE6IDU1LCB0aW1lc3RhbXA6IERhdGUubm93KCksIHBhdXNlZDogZmFsc2UsIGN4eTogMH0sIHtpZDogMiwgdHJhbnNjcmlwdDogXCJcIiwgcHg6IDk1LCBweTogNDUsIHRoZXRhOiA1NSwgdGltZXN0YW1wOiBEYXRlLm5vdygpLCBwYXVzZWQ6IGZhbHNlLCBjeHk6IDB9XTtcbiAgY29uc3QgdGRhdGEgPSBbe2xhYmVsOiAnQXJ0aWZpY2FsIGludGVsbGlnZW5jZScsXG4gICAgaWQ6IDMsIHRyYW5zY3JpcHQ6ICdjb2NrJywgdGlwczogJ2FiY2QnLCBwYXVzZWQ6IGZhbHNlfSwge2xhYmVsOiAnQXJ0aWZpY2FsIGludGVsbGlnZW5jZScsXG4gICAgICBpZDogMiwgdHJhbnNjcmlwdDogJ2NvY2snLCB0aXBzOiAnYWJjZCcsIHBhdXNlZDogZmFsc2V9XVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG57IGFwcE1vZGUgPT0gMCA/IDxkaXY+PE1hcFZpZXcgbGFiZWw9XCJhXCIgYmFja2dyb3VuZENvbG91cj1cIiNFRkVGRUZcIiBDb252b1B0cz17dGVzdH0gaGVpZ2h0PXsnNDN2aCd9PjwvTWFwVmlldz48L2Rpdj4gOiA8ZGl2PjwvZGl2PiB9XG57IGFwcE1vZGUgPD0gMSA/IDxkaXY+PFRhYmxlVmlldyBsYWJlbD1cImFcIiBiYWNrZ3JvdW5kQ29sb3VyPXthcHBNb2RlID09IDAgPyBcIiM1OENDMDJcIiA6IFwiRkZGRkZcIn0gQ29udm9EYXRhPXt0ZGF0YX0+PC9UYWJsZVZpZXc+PC9kaXY+IDogPGRpdj48L2Rpdj59XG4gICAgPEJvdHRvbWJhciBvbkNsaWNrMT17KCkgPT4gc2V0TW9kZSgwKX0gb25DbGljazI9eygpID0+IHNldE1vZGUoMSl9IG9uQ2xpY2szPXsoKSA9PiBzZXRNb2RlKDIpfT48L0JvdHRvbWJhcj5cblxuIDwvZGl2PlxuICApO1xufSAiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNYXBWaWV3IiwiVGFibGVWaWV3IiwiQm90dG9tYmFyIiwiY29udm9faWNvbiIsIkNvbnZvVmlldyIsImN2cCIsImFwcE1vZGUiLCJzZXRNb2RlIiwidG9wYmFyX3R4dCIsInRpdGxlIiwicDEiLCJwMiIsImxvZ28iLCJ0ZXN0IiwiaWQiLCJ0cmFuc2NyaXB0IiwicHgiLCJweSIsInRoZXRhIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInBhdXNlZCIsImN4eSIsInRkYXRhIiwibGFiZWwiLCJ0aXBzIiwiZGl2IiwiYmFja2dyb3VuZENvbG91ciIsIkNvbnZvUHRzIiwiaGVpZ2h0IiwiQ29udm9EYXRhIiwib25DbGljazEiLCJvbkNsaWNrMiIsIm9uQ2xpY2szIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/ConvoView.tsx\n"));

/***/ })

});