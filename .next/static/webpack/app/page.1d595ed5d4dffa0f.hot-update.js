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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConvoView: function() { return /* binding */ ConvoView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MapView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapView */ \"(app-pages-browser)/./components/ui/MapView.tsx\");\n/* harmony import */ var _TableView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableView */ \"(app-pages-browser)/./components/ui/TableView.tsx\");\n/* harmony import */ var _topbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topbar */ \"(app-pages-browser)/./components/ui/topbar.tsx\");\n/* harmony import */ var _bottombar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bottombar */ \"(app-pages-browser)/./components/ui/bottombar.tsx\");\n/* harmony import */ var _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/ConvosIcons.png */ \"(app-pages-browser)/./public/ConvosIcons.png\");\n/* harmony import */ var _public_Transcript_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/Transcript.png */ \"(app-pages-browser)/./public/Transcript.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ConvoView(cvp) {\n    _s();\n    var [appMode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const topbar_txt = [\n        {\n            title: \"Conversation Map\",\n            p1: \"Find conversations that you want to join!\",\n            p2: \"Stuck? The transcripts are a great place to start!\",\n            logo: _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            color: \"#FFE100\"\n        },\n        {\n            title: \"Transcripts\",\n            p1: \"See what the conversation is all about!\",\n            p2: \" \",\n            logo: _public_Transcript_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            color: \"#58CC02\"\n        }\n    ];\n    const test = [\n        {\n            id: 3,\n            transcript: \"\",\n            px: 55,\n            py: 45,\n            theta: 55,\n            timestamp: Date.now(),\n            paused: false,\n            cxy: 0\n        },\n        {\n            id: 2,\n            transcript: \"\",\n            px: 95,\n            py: 45,\n            theta: 55,\n            timestamp: Date.now(),\n            paused: false,\n            cxy: 0\n        }\n    ];\n    const tdata = [\n        {\n            label: \"Artifical intelligence\",\n            id: 3,\n            transcript: \"cock\",\n            tips: \"abcd\",\n            paused: false\n        },\n        {\n            label: \"Artifical intelligence\",\n            id: 2,\n            transcript: \"cock\",\n            tips: \"abcd\",\n            paused: false\n        }\n    ];\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            const counter = count + 1;\n            setCount(counter);\n        }, 1000);\n        return ()=>clearTimeout(timer);\n    }, [\n        count\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            appMode != 2 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_topbar__WEBPACK_IMPORTED_MODULE_4__.Topbar, {\n                    title: topbar_txt[appMode].title,\n                    p1: topbar_txt[appMode].p1,\n                    p2: topbar_txt[appMode].p2,\n                    logo: topbar_txt[appMode].logo,\n                    colour: topbar_txt[appMode].color\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 31\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 49,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 49,\n                columnNumber: 215\n            }, this),\n            appMode == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MapView__WEBPACK_IMPORTED_MODULE_2__.MapView, {\n                    label: \"a\",\n                    backgroundColour: \"#EFEFEF\",\n                    ConvoPts: test,\n                    height: \"43vh\"\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 31\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 51,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 51,\n                columnNumber: 128\n            }, this),\n            appMode <= 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableView__WEBPACK_IMPORTED_MODULE_3__.TableView, {\n                    label: \"a\",\n                    backgroundColour: appMode == 0 ? \"#58CC02\" : \"#FFFFF\",\n                    ConvoData: tdata,\n                    height: appMode == 1 ? \"62vh\" : \"25vh\"\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 31\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 52,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 52,\n                columnNumber: 191\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bottombar__WEBPACK_IMPORTED_MODULE_5__.Bottombar, {\n                onClick1: ()=>setMode(0),\n                onClick2: ()=>setMode(1),\n                onClick3: ()=>setMode(2)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(ConvoView, \"xFrxcNlmtVUOQoJWNvuFFzICdnU=\");\n_c = ConvoView;\nvar _c;\n$RefreshReg$(_c, \"ConvoView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvQ29udm9WaWV3LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFHMkQ7QUFDdkI7QUFDSTtBQUNOO0FBQ007QUFDYTtBQUNKO0FBYTFDLFNBQVNRLFVBQVVDLEdBQWU7O0lBRXZDLElBQUksQ0FBQ0MsU0FBU0MsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNsQyxNQUFNVyxhQUFhO1FBQUM7WUFBQ0MsT0FBTztZQUFvQkMsSUFBSTtZQUE2Q0MsSUFBSTtZQUFzREMsTUFBTVYsK0RBQVVBO1lBQUVXLE9BQU87UUFBUztRQUFHO1lBQUNKLE9BQU87WUFBZUMsSUFBSTtZQUEyQ0MsSUFBSTtZQUFLQyxNQUFNVCw4REFBT0E7WUFBRVUsT0FBTztRQUFTO0tBQUU7SUFFaFQsTUFBTUMsT0FBTztRQUFDO1lBQUNDLElBQUk7WUFBR0MsWUFBWTtZQUFJQyxJQUFJO1lBQUlDLElBQUk7WUFBSUMsT0FBTztZQUFJQyxXQUFXQyxLQUFLQyxHQUFHO1lBQUlDLFFBQVE7WUFBT0MsS0FBSztRQUFDO1FBQUc7WUFBQ1QsSUFBSTtZQUFHQyxZQUFZO1lBQUlDLElBQUk7WUFBSUMsSUFBSTtZQUFJQyxPQUFPO1lBQUlDLFdBQVdDLEtBQUtDLEdBQUc7WUFBSUMsUUFBUTtZQUFPQyxLQUFLO1FBQUM7S0FBRTtJQUNqTixNQUFNQyxRQUFRO1FBQUM7WUFBQ0MsT0FBTztZQUNyQlgsSUFBSTtZQUFHQyxZQUFZO1lBQVFXLE1BQU07WUFBUUosUUFBUTtRQUFLO1FBQUc7WUFBQ0csT0FBTztZQUMvRFgsSUFBSTtZQUFHQyxZQUFZO1lBQVFXLE1BQU07WUFBUUosUUFBUTtRQUFLO0tBQUU7SUFHeEQsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdoQywrQ0FBUUEsQ0FBQztJQUNuQ0QsZ0RBQVNBLENBQUM7UUFLUixNQUFNa0MsUUFBUUMsV0FBVztZQUN2QixNQUFNQyxVQUFVSixRQUFRO1lBQ3hCQyxTQUFTRztRQUNYLEdBQUc7UUFDSCxPQUFPLElBQU1DLGFBQWFIO0lBQzVCLEdBQUc7UUFBQ0Y7S0FBTTtJQUVkLHFCQUNFLDhEQUFDTTs7WUFDSzVCLFdBQVcsa0JBQUksOERBQUM0QjswQkFBSSw0RUFBQ2xDLDJDQUFNQTtvQkFBQ1MsT0FBT0QsVUFBVSxDQUFDRixRQUFRLENBQUNHLEtBQUs7b0JBQUVDLElBQUlGLFVBQVUsQ0FBQ0YsUUFBUSxDQUFDSSxFQUFFO29CQUFFQyxJQUFJSCxVQUFVLENBQUNGLFFBQVEsQ0FBQ0ssRUFBRTtvQkFBRUMsTUFBTUosVUFBVSxDQUFDRixRQUFRLENBQUNNLElBQUk7b0JBQUV1QixRQUFRM0IsVUFBVSxDQUFDRixRQUFRLENBQUNPLEtBQUs7Ozs7Ozs7Ozs7cUNBQXFCLDhEQUFDcUI7Ozs7O1lBRTdNNUIsV0FBVyxrQkFBSSw4REFBQzRCOzBCQUFJLDRFQUFDcEMsNkNBQU9BO29CQUFDNEIsT0FBTTtvQkFBSVUsa0JBQWlCO29CQUFVQyxVQUFVdkI7b0JBQU13QixRQUFROzs7Ozs7Ozs7O3FDQUEyQiw4REFBQ0o7Ozs7O1lBQ3RINUIsV0FBVyxrQkFBSSw4REFBQzRCOzBCQUFJLDRFQUFDbkMsaURBQVNBO29CQUFDMkIsT0FBTTtvQkFBSVUsa0JBQWtCOUIsV0FBVyxJQUFJLFlBQVk7b0JBQWNpQyxXQUFXZDtvQkFBT2EsUUFBU2hDLFdBQVcsSUFBSSxTQUFTOzs7Ozs7Ozs7O3FDQUE2Qiw4REFBQzRCOzs7OzswQkFDdkwsOERBQUNqQyxpREFBU0E7Z0JBQUN1QyxVQUFVLElBQU1qQyxRQUFRO2dCQUFJa0MsVUFBVSxJQUFNbEMsUUFBUTtnQkFBSW1DLFVBQVUsSUFBTW5DLFFBQVE7Ozs7Ozs7Ozs7OztBQUduRztHQWpDZ0JIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvQ29udm9WaWV3LnRzeD9lZDIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgeyBTdGF0aWNJbXBvcnQgfSBmcm9tIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvZ2V0LWltZy1wcm9wc1wiO1xuaW1wb3J0IHsgQ1NTUHJvcGVydGllcywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWFwVmlldyB9IGZyb20gXCIuL01hcFZpZXdcIjtcbmltcG9ydCB7IFRhYmxlVmlldyB9IGZyb20gXCIuL1RhYmxlVmlld1wiO1xuaW1wb3J0IHsgVG9wYmFyIH0gZnJvbSBcIi4vdG9wYmFyXCI7XG5pbXBvcnQgeyBCb3R0b21iYXIgfSBmcm9tIFwiLi9ib3R0b21iYXJcIjtcbmltcG9ydCBjb252b19pY29uIGZyb20gJy4uLy4uL3B1YmxpYy9Db252b3NJY29ucy5wbmcnXG5pbXBvcnQgdHJhbnNjciBmcm9tICcuLi8uLi9wdWJsaWMvVHJhbnNjcmlwdC5wbmcnXG5pbXBvcnQgeyByZWNvcmRlcl9sb29wIH0gZnJvbSBcIi4vcmVjb3JkZXJcIjtcblxuaW50ZXJmYWNlIENvbnZvUHJvcHMge1xuICBsYWJlbDogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIHN0eWxlPzogQ1NTUHJvcGVydGllcztcbiAgYmFja2dyb3VuZENvbG91cjogc3RyaW5nO1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbnZvVmlldyhjdnA6IENvbnZvUHJvcHMpIHtcblxuICB2YXIgW2FwcE1vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgdG9wYmFyX3R4dCA9IFt7dGl0bGU6IFwiQ29udmVyc2F0aW9uIE1hcFwiLCBwMTogXCJGaW5kIGNvbnZlcnNhdGlvbnMgdGhhdCB5b3Ugd2FudCB0byBqb2luIVwiLCBwMjogXCJTdHVjaz8gVGhlIHRyYW5zY3JpcHRzIGFyZSBhIGdyZWF0IHBsYWNlIHRvIHN0YXJ0IVwiLCBsb2dvOiBjb252b19pY29uLCBjb2xvcjogXCIjRkZFMTAwXCJ9LCB7dGl0bGU6IFwiVHJhbnNjcmlwdHNcIiwgcDE6IFwiU2VlIHdoYXQgdGhlIGNvbnZlcnNhdGlvbiBpcyBhbGwgYWJvdXQhXCIsIHAyOiBcIiBcIiwgbG9nbzogdHJhbnNjciwgY29sb3I6IFwiIzU4Q0MwMlwifV1cbiAgXG4gIGNvbnN0IHRlc3QgPSBbe2lkOiAzLCB0cmFuc2NyaXB0OiBcIlwiLCBweDogNTUsIHB5OiA0NSwgdGhldGE6IDU1LCB0aW1lc3RhbXA6IERhdGUubm93KCksIHBhdXNlZDogZmFsc2UsIGN4eTogMH0sIHtpZDogMiwgdHJhbnNjcmlwdDogXCJcIiwgcHg6IDk1LCBweTogNDUsIHRoZXRhOiA1NSwgdGltZXN0YW1wOiBEYXRlLm5vdygpLCBwYXVzZWQ6IGZhbHNlLCBjeHk6IDB9XTtcbiAgY29uc3QgdGRhdGEgPSBbe2xhYmVsOiAnQXJ0aWZpY2FsIGludGVsbGlnZW5jZScsXG4gICAgaWQ6IDMsIHRyYW5zY3JpcHQ6ICdjb2NrJywgdGlwczogJ2FiY2QnLCBwYXVzZWQ6IGZhbHNlfSwge2xhYmVsOiAnQXJ0aWZpY2FsIGludGVsbGlnZW5jZScsXG4gICAgICBpZDogMiwgdHJhbnNjcmlwdDogJ2NvY2snLCB0aXBzOiAnYWJjZCcsIHBhdXNlZDogZmFsc2V9XVxuXG5cbiAgICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG5cblxuXG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY291bnRlciA9IGNvdW50ICsgMTtcbiAgICAgICAgICBzZXRDb3VudChjb3VudGVyKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfSwgW2NvdW50XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICB7IGFwcE1vZGUgIT0gMiA/IDxkaXY+PFRvcGJhciB0aXRsZT17dG9wYmFyX3R4dFthcHBNb2RlXS50aXRsZX0gcDE9e3RvcGJhcl90eHRbYXBwTW9kZV0ucDF9IHAyPXt0b3BiYXJfdHh0W2FwcE1vZGVdLnAyfSBsb2dvPXt0b3BiYXJfdHh0W2FwcE1vZGVdLmxvZ299IGNvbG91cj17dG9wYmFyX3R4dFthcHBNb2RlXS5jb2xvcn0gPjwvVG9wYmFyPjwvZGl2PiA6IDxkaXY+PC9kaXY+XG4gICAgICAgICB9XG4gICAgICAgIHsgYXBwTW9kZSA9PSAwID8gPGRpdj48TWFwVmlldyBsYWJlbD1cImFcIiBiYWNrZ3JvdW5kQ29sb3VyPVwiI0VGRUZFRlwiIENvbnZvUHRzPXt0ZXN0fSBoZWlnaHQ9eyc0M3ZoJ30+PC9NYXBWaWV3PjwvZGl2PiA6IDxkaXY+PC9kaXY+IH1cbiAgICAgICAgeyBhcHBNb2RlIDw9IDEgPyA8ZGl2PjxUYWJsZVZpZXcgbGFiZWw9XCJhXCIgYmFja2dyb3VuZENvbG91cj17YXBwTW9kZSA9PSAwID8gXCIjNThDQzAyXCIgOiBcIiNGRkZGRlwifSAgICAgQ29udm9EYXRhPXt0ZGF0YX0gaGVpZ2h0PXsgYXBwTW9kZSA9PSAxID8gXCI2MnZoXCIgOiBcIjI1dmhcIn0+PC9UYWJsZVZpZXc+PC9kaXY+IDogPGRpdj48L2Rpdj4gfVxuICAgICAgICA8Qm90dG9tYmFyIG9uQ2xpY2sxPXsoKSA9PiBzZXRNb2RlKDApfSBvbkNsaWNrMj17KCkgPT4gc2V0TW9kZSgxKX0gb25DbGljazM9eygpID0+IHNldE1vZGUoMil9PjwvQm90dG9tYmFyPlxuICAgPC9kaXY+XG4gICk7XG59ICJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1hcFZpZXciLCJUYWJsZVZpZXciLCJUb3BiYXIiLCJCb3R0b21iYXIiLCJjb252b19pY29uIiwidHJhbnNjciIsIkNvbnZvVmlldyIsImN2cCIsImFwcE1vZGUiLCJzZXRNb2RlIiwidG9wYmFyX3R4dCIsInRpdGxlIiwicDEiLCJwMiIsImxvZ28iLCJjb2xvciIsInRlc3QiLCJpZCIsInRyYW5zY3JpcHQiLCJweCIsInB5IiwidGhldGEiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwicGF1c2VkIiwiY3h5IiwidGRhdGEiLCJsYWJlbCIsInRpcHMiLCJjb3VudCIsInNldENvdW50IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY291bnRlciIsImNsZWFyVGltZW91dCIsImRpdiIsImNvbG91ciIsImJhY2tncm91bmRDb2xvdXIiLCJDb252b1B0cyIsImhlaWdodCIsIkNvbnZvRGF0YSIsIm9uQ2xpY2sxIiwib25DbGljazIiLCJvbkNsaWNrMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/ConvoView.tsx\n"));

/***/ })

});