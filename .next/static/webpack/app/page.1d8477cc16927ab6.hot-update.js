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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConvoView: function() { return /* binding */ ConvoView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MapView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapView */ \"(app-pages-browser)/./components/ui/MapView.tsx\");\n/* harmony import */ var _TableView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableView */ \"(app-pages-browser)/./components/ui/TableView.tsx\");\n/* harmony import */ var _topbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topbar */ \"(app-pages-browser)/./components/ui/topbar.tsx\");\n/* harmony import */ var _bottombar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bottombar */ \"(app-pages-browser)/./components/ui/bottombar.tsx\");\n/* harmony import */ var _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/ConvosIcons.png */ \"(app-pages-browser)/./public/ConvosIcons.png\");\n/* harmony import */ var _public_Transcript_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/Transcript.png */ \"(app-pages-browser)/./public/Transcript.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ConvoView(cvp) {\n    _s();\n    var [appMode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const topbar_txt = [\n        {\n            title: \"Conversation Map\",\n            p1: \"Find conversations that you want to join!\",\n            p2: \"Stuck? The transcripts are a great place to start!\",\n            logo: _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            color: \"#FFE100\"\n        },\n        {\n            title: \"Transcripts\",\n            p1: \"See what the conversation is all about!\",\n            p2: \" \",\n            logo: _public_Transcript_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            color: \"#58CC02\"\n        }\n    ];\n    const test = [\n        {\n            id: 3,\n            transcript: \"\",\n            px: 55,\n            py: 45,\n            theta: 55,\n            timestamp: Date.now(),\n            paused: false,\n            cxy: 0\n        },\n        {\n            id: 2,\n            transcript: \"\",\n            px: 95,\n            py: 45,\n            theta: 55,\n            timestamp: Date.now(),\n            paused: false,\n            cxy: 0\n        }\n    ];\n    const tdata = [\n        {\n            label: \"Artifical intelligence\",\n            id: 3,\n            transcript: \"cock\",\n            tips: \"abcd\",\n            paused: false\n        },\n        {\n            label: \"Artifical intelligence\",\n            id: 2,\n            transcript: \"cock\",\n            tips: \"abcd\",\n            paused: false\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            appMode != 2 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_topbar__WEBPACK_IMPORTED_MODULE_4__.Topbar, {\n                    title: topbar_txt[appMode].title,\n                    p1: topbar_txt[appMode].p1,\n                    p2: topbar_txt[appMode].p2,\n                    logo: topbar_txt[appMode].logo,\n                    colour: topbar_txt[appMode].color\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 29\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 34,\n                columnNumber: 24\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 34,\n                columnNumber: 213\n            }, this),\n            appMode == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MapView__WEBPACK_IMPORTED_MODULE_2__.MapView, {\n                    label: \"a\",\n                    backgroundColour: \"#EFEFEF\",\n                    ConvoPts: test,\n                    height: \"43vh\"\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 23\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 36,\n                columnNumber: 18\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 36,\n                columnNumber: 120\n            }, this),\n            appMode <= 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableView__WEBPACK_IMPORTED_MODULE_3__.TableView, {\n                    label: \"a\",\n                    backgroundColour: appMode == 0 ? \"#58CC02\" : \"#FFFF9\",\n                    ConvoData: tdata,\n                    height: appMode == 1 ? \"62vh\" : \"25vh\"\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 23\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 37,\n                columnNumber: 18\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 37,\n                columnNumber: 178\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bottombar__WEBPACK_IMPORTED_MODULE_5__.Bottombar, {\n                onClick1: ()=>setMode(0),\n                onClick2: ()=>setMode(1),\n                onClick3: ()=>setMode(2)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(ConvoView, \"sOYyTKBzcrQ1VD7Ybgf7KBZFj80=\");\n_c = ConvoView;\nvar _c;\n$RefreshReg$(_c, \"ConvoView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvQ29udm9WaWV3LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFHZ0Q7QUFDWjtBQUNJO0FBQ047QUFDTTtBQUNhO0FBQ0o7QUFZMUMsU0FBU08sVUFBVUMsR0FBZTs7SUFFdkMsSUFBSSxDQUFDQyxTQUFTQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2xDLE1BQU1XLGFBQWE7UUFBQztZQUFDQyxPQUFPO1lBQW9CQyxJQUFJO1lBQTZDQyxJQUFJO1lBQXNEQyxNQUFNViwrREFBVUE7WUFBRVcsT0FBTztRQUFTO1FBQUc7WUFBQ0osT0FBTztZQUFlQyxJQUFJO1lBQTJDQyxJQUFJO1lBQUtDLE1BQU1ULDhEQUFPQTtZQUFFVSxPQUFPO1FBQVM7S0FBRTtJQUVoVCxNQUFNQyxPQUFPO1FBQUM7WUFBQ0MsSUFBSTtZQUFHQyxZQUFZO1lBQUlDLElBQUk7WUFBSUMsSUFBSTtZQUFJQyxPQUFPO1lBQUlDLFdBQVdDLEtBQUtDLEdBQUc7WUFBSUMsUUFBUTtZQUFPQyxLQUFLO1FBQUM7UUFBRztZQUFDVCxJQUFJO1lBQUdDLFlBQVk7WUFBSUMsSUFBSTtZQUFJQyxJQUFJO1lBQUlDLE9BQU87WUFBSUMsV0FBV0MsS0FBS0MsR0FBRztZQUFJQyxRQUFRO1lBQU9DLEtBQUs7UUFBQztLQUFFO0lBQ2pOLE1BQU1DLFFBQVE7UUFBQztZQUFDQyxPQUFPO1lBQ3JCWCxJQUFJO1lBQUdDLFlBQVk7WUFBUVcsTUFBTTtZQUFRSixRQUFRO1FBQUs7UUFBRztZQUFDRyxPQUFPO1lBQy9EWCxJQUFJO1lBQUdDLFlBQVk7WUFBUVcsTUFBTTtZQUFRSixRQUFRO1FBQUs7S0FBRTtJQUM1RCxxQkFDRSw4REFBQ0s7O1lBRUd0QixXQUFXLGtCQUFJLDhEQUFDc0I7MEJBQUksNEVBQUM1QiwyQ0FBTUE7b0JBQUNTLE9BQU9ELFVBQVUsQ0FBQ0YsUUFBUSxDQUFDRyxLQUFLO29CQUFFQyxJQUFJRixVQUFVLENBQUNGLFFBQVEsQ0FBQ0ksRUFBRTtvQkFBRUMsSUFBSUgsVUFBVSxDQUFDRixRQUFRLENBQUNLLEVBQUU7b0JBQUVDLE1BQU1KLFVBQVUsQ0FBQ0YsUUFBUSxDQUFDTSxJQUFJO29CQUFFaUIsUUFBUXJCLFVBQVUsQ0FBQ0YsUUFBUSxDQUFDTyxLQUFLOzs7Ozs7Ozs7O3FDQUFxQiw4REFBQ2U7Ozs7O1lBRW5OdEIsV0FBVyxrQkFBSSw4REFBQ3NCOzBCQUFJLDRFQUFDOUIsNkNBQU9BO29CQUFDNEIsT0FBTTtvQkFBSUksa0JBQWlCO29CQUFVQyxVQUFVakI7b0JBQU1rQixRQUFROzs7Ozs7Ozs7O3FDQUEyQiw4REFBQ0o7Ozs7O1lBQ3RIdEIsV0FBVyxrQkFBSSw4REFBQ3NCOzBCQUFJLDRFQUFDN0IsaURBQVNBO29CQUFDMkIsT0FBTTtvQkFBSUksa0JBQWtCeEIsV0FBVyxJQUFJLFlBQVk7b0JBQVUyQixXQUFXUjtvQkFBT08sUUFBUTFCLFdBQVcsSUFBSSxTQUFTOzs7Ozs7Ozs7O3FDQUE2Qiw4REFBQ3NCOzs7OzswQkFDOUssOERBQUMzQixpREFBU0E7Z0JBQUNpQyxVQUFVLElBQU0zQixRQUFRO2dCQUFJNEIsVUFBVSxJQUFNNUIsUUFBUTtnQkFBSTZCLFVBQVUsSUFBTTdCLFFBQVE7Ozs7Ozs7Ozs7OztBQUkvRjtHQXBCZ0JIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvQ29udm9WaWV3LnRzeD9lZDIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgeyBTdGF0aWNJbXBvcnQgfSBmcm9tIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvZ2V0LWltZy1wcm9wc1wiO1xuaW1wb3J0IHsgQ1NTUHJvcGVydGllcywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hcFZpZXcgfSBmcm9tIFwiLi9NYXBWaWV3XCI7XG5pbXBvcnQgeyBUYWJsZVZpZXcgfSBmcm9tIFwiLi9UYWJsZVZpZXdcIjtcbmltcG9ydCB7IFRvcGJhciB9IGZyb20gXCIuL3RvcGJhclwiO1xuaW1wb3J0IHsgQm90dG9tYmFyIH0gZnJvbSBcIi4vYm90dG9tYmFyXCI7XG5pbXBvcnQgY29udm9faWNvbiBmcm9tICcuLi8uLi9wdWJsaWMvQ29udm9zSWNvbnMucG5nJ1xuaW1wb3J0IHRyYW5zY3IgZnJvbSAnLi4vLi4vcHVibGljL1RyYW5zY3JpcHQucG5nJ1xuXG5pbnRlcmZhY2UgQ29udm9Qcm9wcyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xuICBiYWNrZ3JvdW5kQ29sb3VyOiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29udm9WaWV3KGN2cDogQ29udm9Qcm9wcykge1xuXG4gIHZhciBbYXBwTW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCB0b3BiYXJfdHh0ID0gW3t0aXRsZTogXCJDb252ZXJzYXRpb24gTWFwXCIsIHAxOiBcIkZpbmQgY29udmVyc2F0aW9ucyB0aGF0IHlvdSB3YW50IHRvIGpvaW4hXCIsIHAyOiBcIlN0dWNrPyBUaGUgdHJhbnNjcmlwdHMgYXJlIGEgZ3JlYXQgcGxhY2UgdG8gc3RhcnQhXCIsIGxvZ286IGNvbnZvX2ljb24sIGNvbG9yOiBcIiNGRkUxMDBcIn0sIHt0aXRsZTogXCJUcmFuc2NyaXB0c1wiLCBwMTogXCJTZWUgd2hhdCB0aGUgY29udmVyc2F0aW9uIGlzIGFsbCBhYm91dCFcIiwgcDI6IFwiIFwiLCBsb2dvOiB0cmFuc2NyLCBjb2xvcjogXCIjNThDQzAyXCJ9XVxuICBcbiAgY29uc3QgdGVzdCA9IFt7aWQ6IDMsIHRyYW5zY3JpcHQ6IFwiXCIsIHB4OiA1NSwgcHk6IDQ1LCB0aGV0YTogNTUsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSwgcGF1c2VkOiBmYWxzZSwgY3h5OiAwfSwge2lkOiAyLCB0cmFuc2NyaXB0OiBcIlwiLCBweDogOTUsIHB5OiA0NSwgdGhldGE6IDU1LCB0aW1lc3RhbXA6IERhdGUubm93KCksIHBhdXNlZDogZmFsc2UsIGN4eTogMH1dO1xuICBjb25zdCB0ZGF0YSA9IFt7bGFiZWw6ICdBcnRpZmljYWwgaW50ZWxsaWdlbmNlJyxcbiAgICBpZDogMywgdHJhbnNjcmlwdDogJ2NvY2snLCB0aXBzOiAnYWJjZCcsIHBhdXNlZDogZmFsc2V9LCB7bGFiZWw6ICdBcnRpZmljYWwgaW50ZWxsaWdlbmNlJyxcbiAgICAgIGlkOiAyLCB0cmFuc2NyaXB0OiAnY29jaycsIHRpcHM6ICdhYmNkJywgcGF1c2VkOiBmYWxzZX1dXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgIHtcbiAgICAgICAgYXBwTW9kZSAhPSAyID8gPGRpdj48VG9wYmFyIHRpdGxlPXt0b3BiYXJfdHh0W2FwcE1vZGVdLnRpdGxlfSBwMT17dG9wYmFyX3R4dFthcHBNb2RlXS5wMX0gcDI9e3RvcGJhcl90eHRbYXBwTW9kZV0ucDJ9IGxvZ289e3RvcGJhcl90eHRbYXBwTW9kZV0ubG9nb30gY29sb3VyPXt0b3BiYXJfdHh0W2FwcE1vZGVdLmNvbG9yfSA+PC9Ub3BiYXI+PC9kaXY+IDogPGRpdj48L2Rpdj5cbiAgICAgIH1cbnsgYXBwTW9kZSA9PSAwID8gPGRpdj48TWFwVmlldyBsYWJlbD1cImFcIiBiYWNrZ3JvdW5kQ29sb3VyPVwiI0VGRUZFRlwiIENvbnZvUHRzPXt0ZXN0fSBoZWlnaHQ9eyc0M3ZoJ30+PC9NYXBWaWV3PjwvZGl2PiA6IDxkaXY+PC9kaXY+IH1cbnsgYXBwTW9kZSA8PSAxID8gPGRpdj48VGFibGVWaWV3IGxhYmVsPVwiYVwiIGJhY2tncm91bmRDb2xvdXI9e2FwcE1vZGUgPT0gMCA/IFwiIzU4Q0MwMlwiIDogXCIjRkZGRjlcIn0gQ29udm9EYXRhPXt0ZGF0YX0gaGVpZ2h0PXthcHBNb2RlID09IDEgPyBcIjYydmhcIiA6IFwiMjV2aFwifT48L1RhYmxlVmlldz48L2Rpdj4gOiA8ZGl2PjwvZGl2Pn1cbiAgICA8Qm90dG9tYmFyIG9uQ2xpY2sxPXsoKSA9PiBzZXRNb2RlKDApfSBvbkNsaWNrMj17KCkgPT4gc2V0TW9kZSgxKX0gb25DbGljazM9eygpID0+IHNldE1vZGUoMil9PjwvQm90dG9tYmFyPlxuXG4gPC9kaXY+XG4gICk7XG59ICJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk1hcFZpZXciLCJUYWJsZVZpZXciLCJUb3BiYXIiLCJCb3R0b21iYXIiLCJjb252b19pY29uIiwidHJhbnNjciIsIkNvbnZvVmlldyIsImN2cCIsImFwcE1vZGUiLCJzZXRNb2RlIiwidG9wYmFyX3R4dCIsInRpdGxlIiwicDEiLCJwMiIsImxvZ28iLCJjb2xvciIsInRlc3QiLCJpZCIsInRyYW5zY3JpcHQiLCJweCIsInB5IiwidGhldGEiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwicGF1c2VkIiwiY3h5IiwidGRhdGEiLCJsYWJlbCIsInRpcHMiLCJkaXYiLCJjb2xvdXIiLCJiYWNrZ3JvdW5kQ29sb3VyIiwiQ29udm9QdHMiLCJoZWlnaHQiLCJDb252b0RhdGEiLCJvbkNsaWNrMSIsIm9uQ2xpY2syIiwib25DbGljazMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/ConvoView.tsx\n"));

/***/ })

});