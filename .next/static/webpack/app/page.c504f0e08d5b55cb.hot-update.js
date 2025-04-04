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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConvoView: function() { return /* binding */ ConvoView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MapView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapView */ \"(app-pages-browser)/./components/ui/MapView.tsx\");\n/* harmony import */ var _TableView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableView */ \"(app-pages-browser)/./components/ui/TableView.tsx\");\n/* harmony import */ var _topbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topbar */ \"(app-pages-browser)/./components/ui/topbar.tsx\");\n/* harmony import */ var _bottombar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bottombar */ \"(app-pages-browser)/./components/ui/bottombar.tsx\");\n/* harmony import */ var _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/ConvosIcons.png */ \"(app-pages-browser)/./public/ConvosIcons.png\");\n/* harmony import */ var _public_Transcript_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/Transcript.png */ \"(app-pages-browser)/./public/Transcript.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ConvoView(cvp) {\n    _s();\n    var [appMode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const topbar_txt = [\n        {\n            title: \"Conversation Map\",\n            p1: \"Find conversations that you want to join!\",\n            p2: \"Stuck? The transcripts are a great place to start!\",\n            logo: _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            color: \"#FFE100\"\n        },\n        {\n            title: \"Transcripts\",\n            p1: \"See what the conversation is all about!\",\n            p2: \" \",\n            logo: _public_Transcript_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            color: \"#58CC02\"\n        }\n    ];\n    const test = [\n        {\n            id: 3,\n            transcript: \"\",\n            px: 55,\n            py: 45,\n            theta: 55,\n            timestamp: Date.now(),\n            paused: false,\n            cxy: 0\n        },\n        {\n            id: 2,\n            transcript: \"\",\n            px: 95,\n            py: 45,\n            theta: 55,\n            timestamp: Date.now(),\n            paused: false,\n            cxy: 0\n        }\n    ];\n    const tdata = [\n        {\n            label: \"Artifical intelligence\",\n            id: 3,\n            transcript: \"cock\",\n            tips: \"abcd\",\n            paused: false\n        },\n        {\n            label: \"Artifical intelligence\",\n            id: 2,\n            transcript: \"cock\",\n            tips: \"abcd\",\n            paused: false\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            appMode != 2 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_topbar__WEBPACK_IMPORTED_MODULE_4__.Topbar, {\n                    title: topbar_txt[appMode].title,\n                    p1: topbar_txt[appMode].p1,\n                    p2: topbar_txt[appMode].p2,\n                    logo: topbar_txt[appMode].logo,\n                    colour: topbar_txt[appMode].color\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 29\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 36,\n                columnNumber: 24\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 36,\n                columnNumber: 213\n            }, this),\n            appMode == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MapView__WEBPACK_IMPORTED_MODULE_2__.MapView, {\n                    label: \"a\",\n                    backgroundColour: \"#EFEFEF\",\n                    ConvoPts: test,\n                    height: \"43vh\"\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 23\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 38,\n                columnNumber: 18\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 38,\n                columnNumber: 120\n            }, this),\n            appMode <= 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableView__WEBPACK_IMPORTED_MODULE_3__.TableView, {\n                    label: \"a\",\n                    backgroundColour: appMode == 0 ? \"#58CC02\" : \"#FFFFF\",\n                    ConvoData: tdata,\n                    height: appMode == 1 ? \"62vh\" : \"25vh\"\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 23\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 39,\n                columnNumber: 18\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 39,\n                columnNumber: 178\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bottombar__WEBPACK_IMPORTED_MODULE_5__.Bottombar, {\n                onClick1: ()=>setMode(0),\n                onClick2: ()=>setMode(1),\n                onClick3: ()=>setMode(2)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(ConvoView, \"sOYyTKBzcrQ1VD7Ybgf7KBZFj80=\");\n_c = ConvoView;\nvar _c;\n$RefreshReg$(_c, \"ConvoView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvQ29udm9WaWV3LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFHZ0Q7QUFDWjtBQUNJO0FBQ047QUFDTTtBQUNhO0FBQ0o7QUFhMUMsU0FBU08sVUFBVUMsR0FBZTs7SUFFdkMsSUFBSSxDQUFDQyxTQUFTQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2xDLE1BQU1XLGFBQWE7UUFBQztZQUFDQyxPQUFPO1lBQW9CQyxJQUFJO1lBQTZDQyxJQUFJO1lBQXNEQyxNQUFNViwrREFBVUE7WUFBRVcsT0FBTztRQUFTO1FBQUc7WUFBQ0osT0FBTztZQUFlQyxJQUFJO1lBQTJDQyxJQUFJO1lBQUtDLE1BQU1ULDhEQUFPQTtZQUFFVSxPQUFPO1FBQVM7S0FBRTtJQUVoVCxNQUFNQyxPQUFPO1FBQUM7WUFBQ0MsSUFBSTtZQUFHQyxZQUFZO1lBQUlDLElBQUk7WUFBSUMsSUFBSTtZQUFJQyxPQUFPO1lBQUlDLFdBQVdDLEtBQUtDLEdBQUc7WUFBSUMsUUFBUTtZQUFPQyxLQUFLO1FBQUM7UUFBRztZQUFDVCxJQUFJO1lBQUdDLFlBQVk7WUFBSUMsSUFBSTtZQUFJQyxJQUFJO1lBQUlDLE9BQU87WUFBSUMsV0FBV0MsS0FBS0MsR0FBRztZQUFJQyxRQUFRO1lBQU9DLEtBQUs7UUFBQztLQUFFO0lBQ2pOLE1BQU1DLFFBQVE7UUFBQztZQUFDQyxPQUFPO1lBQ3JCWCxJQUFJO1lBQUdDLFlBQVk7WUFBUVcsTUFBTTtZQUFRSixRQUFRO1FBQUs7UUFBRztZQUFDRyxPQUFPO1lBQy9EWCxJQUFJO1lBQUdDLFlBQVk7WUFBUVcsTUFBTTtZQUFRSixRQUFRO1FBQUs7S0FBRTtJQUU1RCxxQkFDRSw4REFBQ0s7O1lBRUd0QixXQUFXLGtCQUFJLDhEQUFDc0I7MEJBQUksNEVBQUM1QiwyQ0FBTUE7b0JBQUNTLE9BQU9ELFVBQVUsQ0FBQ0YsUUFBUSxDQUFDRyxLQUFLO29CQUFFQyxJQUFJRixVQUFVLENBQUNGLFFBQVEsQ0FBQ0ksRUFBRTtvQkFBRUMsSUFBSUgsVUFBVSxDQUFDRixRQUFRLENBQUNLLEVBQUU7b0JBQUVDLE1BQU1KLFVBQVUsQ0FBQ0YsUUFBUSxDQUFDTSxJQUFJO29CQUFFaUIsUUFBUXJCLFVBQVUsQ0FBQ0YsUUFBUSxDQUFDTyxLQUFLOzs7Ozs7Ozs7O3FDQUFxQiw4REFBQ2U7Ozs7O1lBRW5OdEIsV0FBVyxrQkFBSSw4REFBQ3NCOzBCQUFJLDRFQUFDOUIsNkNBQU9BO29CQUFDNEIsT0FBTTtvQkFBSUksa0JBQWlCO29CQUFVQyxVQUFVakI7b0JBQU1rQixRQUFROzs7Ozs7Ozs7O3FDQUEyQiw4REFBQ0o7Ozs7O1lBQ3RIdEIsV0FBVyxrQkFBSSw4REFBQ3NCOzBCQUFJLDRFQUFDN0IsaURBQVNBO29CQUFDMkIsT0FBTTtvQkFBSUksa0JBQWtCeEIsV0FBVyxJQUFJLFlBQVk7b0JBQVUyQixXQUFXUjtvQkFBT08sUUFBUTFCLFdBQVcsSUFBSSxTQUFTOzs7Ozs7Ozs7O3FDQUE2Qiw4REFBQ3NCOzs7OzswQkFDOUssOERBQUMzQixpREFBU0E7Z0JBQUNpQyxVQUFVLElBQU0zQixRQUFRO2dCQUFJNEIsVUFBVSxJQUFNNUIsUUFBUTtnQkFBSTZCLFVBQVUsSUFBTTdCLFFBQVE7Ozs7Ozs7Ozs7OztBQUkvRjtHQXJCZ0JIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvQ29udm9WaWV3LnRzeD9lZDIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgeyBTdGF0aWNJbXBvcnQgfSBmcm9tIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvZ2V0LWltZy1wcm9wc1wiO1xuaW1wb3J0IHsgQ1NTUHJvcGVydGllcywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hcFZpZXcgfSBmcm9tIFwiLi9NYXBWaWV3XCI7XG5pbXBvcnQgeyBUYWJsZVZpZXcgfSBmcm9tIFwiLi9UYWJsZVZpZXdcIjtcbmltcG9ydCB7IFRvcGJhciB9IGZyb20gXCIuL3RvcGJhclwiO1xuaW1wb3J0IHsgQm90dG9tYmFyIH0gZnJvbSBcIi4vYm90dG9tYmFyXCI7XG5pbXBvcnQgY29udm9faWNvbiBmcm9tICcuLi8uLi9wdWJsaWMvQ29udm9zSWNvbnMucG5nJ1xuaW1wb3J0IHRyYW5zY3IgZnJvbSAnLi4vLi4vcHVibGljL1RyYW5zY3JpcHQucG5nJ1xuaW1wb3J0IHsgcmVjb3JkZXJfbG9vcCB9IGZyb20gXCIuL3JlY29yZGVyXCI7XG5cbmludGVyZmFjZSBDb252b1Byb3BzIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XG4gIGJhY2tncm91bmRDb2xvdXI6IHN0cmluZztcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb252b1ZpZXcoY3ZwOiBDb252b1Byb3BzKSB7XG5cbiAgdmFyIFthcHBNb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IHRvcGJhcl90eHQgPSBbe3RpdGxlOiBcIkNvbnZlcnNhdGlvbiBNYXBcIiwgcDE6IFwiRmluZCBjb252ZXJzYXRpb25zIHRoYXQgeW91IHdhbnQgdG8gam9pbiFcIiwgcDI6IFwiU3R1Y2s/IFRoZSB0cmFuc2NyaXB0cyBhcmUgYSBncmVhdCBwbGFjZSB0byBzdGFydCFcIiwgbG9nbzogY29udm9faWNvbiwgY29sb3I6IFwiI0ZGRTEwMFwifSwge3RpdGxlOiBcIlRyYW5zY3JpcHRzXCIsIHAxOiBcIlNlZSB3aGF0IHRoZSBjb252ZXJzYXRpb24gaXMgYWxsIGFib3V0IVwiLCBwMjogXCIgXCIsIGxvZ286IHRyYW5zY3IsIGNvbG9yOiBcIiM1OENDMDJcIn1dXG4gIFxuICBjb25zdCB0ZXN0ID0gW3tpZDogMywgdHJhbnNjcmlwdDogXCJcIiwgcHg6IDU1LCBweTogNDUsIHRoZXRhOiA1NSwgdGltZXN0YW1wOiBEYXRlLm5vdygpLCBwYXVzZWQ6IGZhbHNlLCBjeHk6IDB9LCB7aWQ6IDIsIHRyYW5zY3JpcHQ6IFwiXCIsIHB4OiA5NSwgcHk6IDQ1LCB0aGV0YTogNTUsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSwgcGF1c2VkOiBmYWxzZSwgY3h5OiAwfV07XG4gIGNvbnN0IHRkYXRhID0gW3tsYWJlbDogJ0FydGlmaWNhbCBpbnRlbGxpZ2VuY2UnLFxuICAgIGlkOiAzLCB0cmFuc2NyaXB0OiAnY29jaycsIHRpcHM6ICdhYmNkJywgcGF1c2VkOiBmYWxzZX0sIHtsYWJlbDogJ0FydGlmaWNhbCBpbnRlbGxpZ2VuY2UnLFxuICAgICAgaWQ6IDIsIHRyYW5zY3JpcHQ6ICdjb2NrJywgdGlwczogJ2FiY2QnLCBwYXVzZWQ6IGZhbHNlfV1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgICB7XG4gICAgICAgIGFwcE1vZGUgIT0gMiA/IDxkaXY+PFRvcGJhciB0aXRsZT17dG9wYmFyX3R4dFthcHBNb2RlXS50aXRsZX0gcDE9e3RvcGJhcl90eHRbYXBwTW9kZV0ucDF9IHAyPXt0b3BiYXJfdHh0W2FwcE1vZGVdLnAyfSBsb2dvPXt0b3BiYXJfdHh0W2FwcE1vZGVdLmxvZ299IGNvbG91cj17dG9wYmFyX3R4dFthcHBNb2RlXS5jb2xvcn0gPjwvVG9wYmFyPjwvZGl2PiA6IDxkaXY+PC9kaXY+XG4gICAgICB9XG57IGFwcE1vZGUgPT0gMCA/IDxkaXY+PE1hcFZpZXcgbGFiZWw9XCJhXCIgYmFja2dyb3VuZENvbG91cj1cIiNFRkVGRUZcIiBDb252b1B0cz17dGVzdH0gaGVpZ2h0PXsnNDN2aCd9PjwvTWFwVmlldz48L2Rpdj4gOiA8ZGl2PjwvZGl2PiB9XG57IGFwcE1vZGUgPD0gMSA/IDxkaXY+PFRhYmxlVmlldyBsYWJlbD1cImFcIiBiYWNrZ3JvdW5kQ29sb3VyPXthcHBNb2RlID09IDAgPyBcIiM1OENDMDJcIiA6IFwiI0ZGRkZGXCJ9IENvbnZvRGF0YT17dGRhdGF9IGhlaWdodD17YXBwTW9kZSA9PSAxID8gXCI2MnZoXCIgOiBcIjI1dmhcIn0+PC9UYWJsZVZpZXc+PC9kaXY+IDogPGRpdj48L2Rpdj59XG4gICAgPEJvdHRvbWJhciBvbkNsaWNrMT17KCkgPT4gc2V0TW9kZSgwKX0gb25DbGljazI9eygpID0+IHNldE1vZGUoMSl9IG9uQ2xpY2szPXsoKSA9PiBzZXRNb2RlKDIpfT48L0JvdHRvbWJhcj5cblxuIDwvZGl2PlxuICApO1xufSAiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNYXBWaWV3IiwiVGFibGVWaWV3IiwiVG9wYmFyIiwiQm90dG9tYmFyIiwiY29udm9faWNvbiIsInRyYW5zY3IiLCJDb252b1ZpZXciLCJjdnAiLCJhcHBNb2RlIiwic2V0TW9kZSIsInRvcGJhcl90eHQiLCJ0aXRsZSIsInAxIiwicDIiLCJsb2dvIiwiY29sb3IiLCJ0ZXN0IiwiaWQiLCJ0cmFuc2NyaXB0IiwicHgiLCJweSIsInRoZXRhIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInBhdXNlZCIsImN4eSIsInRkYXRhIiwibGFiZWwiLCJ0aXBzIiwiZGl2IiwiY29sb3VyIiwiYmFja2dyb3VuZENvbG91ciIsIkNvbnZvUHRzIiwiaGVpZ2h0IiwiQ29udm9EYXRhIiwib25DbGljazEiLCJvbkNsaWNrMiIsIm9uQ2xpY2szIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/ConvoView.tsx\n"));

/***/ })

});