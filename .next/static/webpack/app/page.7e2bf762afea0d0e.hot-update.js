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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConvoView: function() { return /* binding */ ConvoView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MapView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapView */ \"(app-pages-browser)/./components/ui/MapView.tsx\");\n/* harmony import */ var _TableView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableView */ \"(app-pages-browser)/./components/ui/TableView.tsx\");\n/* harmony import */ var _topbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topbar */ \"(app-pages-browser)/./components/ui/topbar.tsx\");\n/* harmony import */ var _bottombar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bottombar */ \"(app-pages-browser)/./components/ui/bottombar.tsx\");\n/* harmony import */ var _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/ConvosIcons.png */ \"(app-pages-browser)/./public/ConvosIcons.png\");\n/* harmony import */ var _public_Transcript_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/Transcript.png */ \"(app-pages-browser)/./public/Transcript.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ConvoView(cvp) {\n    _s();\n    var [appMode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const topbar_txt = [\n        {\n            title: \"Conversation Map\",\n            p1: \"Find conversations that you want to join!\",\n            p2: \"Stuck? The transcripts are a great place to start!\",\n            logo: _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            color: \"#FFE100\"\n        },\n        {\n            title: \"Transcripts\",\n            p1: \"See what the conversation is all about!\",\n            p2: \" \",\n            logo: _public_Transcript_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            color: \"#58CC02\"\n        }\n    ];\n    /*\n  const test = [{id: 3, transcript: \"\", px: 55, py: 45, theta: 55, timestamp: Date.now(), paused: false, cxy: 0}, {id: 2, transcript: \"\", px: 95, py: 45, theta: 55, timestamp: Date.now(), paused: false, cxy: 0}];\n  const tdata = [{label: 'Artifical intelligence', id: 3, transcript: 'cock', tips: 'abcd', paused: false}, {label: 'Artifical intelligence',\n      id: 2, transcript: 'cock', tips: 'abcd', paused: false}]\n      */ var [test, setPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        Conv\n    ]);\n    const convoserver = \"https://conv-count-poc-997c48b4c4cc.herokuapp.com\" + \"/convo-ts-list\";\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function loadConvo(e) {\n            var dataArr = null;\n            // console.log(e)\n            try {\n                dataArr = JSON.parse(e);\n            } catch (e) {\n                console.error(e);\n            }\n            if (!dataArr) return;\n            if (prevLen != dataArr.length) {\n                clearCells();\n                generateCell(dataArr, 10);\n                prevLen = dataArr.length;\n                return;\n            }\n            reviseCell(dataArr, 10);\n        }\n        function convo_loop() {\n            sendPacket(convoserver, \"GET\", \"\", true, loadConvo, null, 3000);\n        }\n        setInterval(convo_loop, 100);\n        const timer = setTimeout(()=>{\n            const counter = count + 1;\n            setCount(counter);\n        }, 1000);\n        return ()=>clearTimeout(timer);\n    }, [\n        count\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            appMode != 2 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_topbar__WEBPACK_IMPORTED_MODULE_4__.Topbar, {\n                    title: topbar_txt[appMode].title,\n                    p1: topbar_txt[appMode].p1,\n                    p2: topbar_txt[appMode].p2,\n                    logo: topbar_txt[appMode].logo,\n                    colour: topbar_txt[appMode].color\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 31\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 84,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 84,\n                columnNumber: 215\n            }, this),\n            appMode == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MapView__WEBPACK_IMPORTED_MODULE_2__.MapView, {\n                    label: \"a\",\n                    backgroundColour: \"#EFEFEF\",\n                    ConvoPts: test,\n                    height: \"43vh\"\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 31\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 85,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 85,\n                columnNumber: 128\n            }, this),\n            appMode <= 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableView__WEBPACK_IMPORTED_MODULE_3__.TableView, {\n                    label: \"a\",\n                    backgroundColour: appMode == 0 ? \"#58CC02\" : \"#FFFFF\",\n                    ConvoData: tdata,\n                    height: appMode == 1 ? \"62vh\" : \"25vh\"\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 31\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 86,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 86,\n                columnNumber: 191\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bottombar__WEBPACK_IMPORTED_MODULE_5__.Bottombar, {\n                onClick1: ()=>setMode(0),\n                onClick2: ()=>setMode(1),\n                onClick3: ()=>setMode(2)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n}\n_s(ConvoView, \"WAtBm8E9NjT6RfA/Nib0GZRMK0M=\");\n_c = ConvoView;\nvar _c;\n$RefreshReg$(_c, \"ConvoView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvQ29udm9WaWV3LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFHMkQ7QUFDdkI7QUFDSTtBQUNOO0FBQ007QUFDYTtBQUNKO0FBYTFDLFNBQVNRLFVBQVVDLEdBQWU7O0lBRXZDLElBQUksQ0FBQ0MsU0FBU0MsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNsQyxNQUFNVyxhQUFhO1FBQUM7WUFBQ0MsT0FBTztZQUFvQkMsSUFBSTtZQUE2Q0MsSUFBSTtZQUFzREMsTUFBTVYsK0RBQVVBO1lBQUVXLE9BQU87UUFBUztRQUFHO1lBQUNKLE9BQU87WUFBZUMsSUFBSTtZQUEyQ0MsSUFBSTtZQUFLQyxNQUFNVCw4REFBT0E7WUFBRVUsT0FBTztRQUFTO0tBQUU7SUFFaFQ7Ozs7TUFJSSxHQUVKLElBQUksQ0FBQ0MsTUFBTUMsU0FBUyxHQUFHbEIsK0NBQVFBLENBQUM7UUFBQ21CO0tBQUs7SUFFeEMsTUFBTUMsY0FBYyxzREFBc0Q7SUFFcEUsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQUNuQ0QsZ0RBQVNBLENBQUM7UUFJUixTQUFTd0IsVUFBVUMsQ0FBQztZQUVsQixJQUFJQyxVQUFVO1lBQ2YsaUJBQWlCO1lBQ2hCLElBQUk7Z0JBQ0FBLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ0g7WUFDekIsRUFDQSxPQUFPQSxHQUFHO2dCQUNOSSxRQUFRQyxLQUFLLENBQUNMO1lBQ2xCO1lBRUEsSUFBSSxDQUFDQyxTQUFTO1lBRWQsSUFBSUssV0FBV0wsUUFBUU0sTUFBTSxFQUFFO2dCQUMzQkM7Z0JBQ0FDLGFBQWFSLFNBQVM7Z0JBRXRCSyxVQUFVTCxRQUFRTSxNQUFNO2dCQUV4QjtZQUNKO1lBRUFHLFdBQVdULFNBQVM7UUFDeEI7UUFFQSxTQUFTVTtZQUNMQyxXQUFXaEIsYUFBYSxPQUFPLElBQUksTUFBTUcsV0FBWSxNQUFNO1FBQy9EO1FBRUFjLFlBQVlGLFlBQVk7UUFHdEIsTUFBTUcsUUFBUUMsV0FBVztZQUN2QixNQUFNQyxVQUFVbkIsUUFBUTtZQUN4QkMsU0FBU2tCO1FBQ1gsR0FBRztRQUNILE9BQU8sSUFBTUMsYUFBYUg7SUFDNUIsR0FBRztRQUFDakI7S0FBTTtJQUVkLHFCQUNFLDhEQUFDcUI7O1lBQ0tqQyxXQUFXLGtCQUFJLDhEQUFDaUM7MEJBQUksNEVBQUN2QywyQ0FBTUE7b0JBQUNTLE9BQU9ELFVBQVUsQ0FBQ0YsUUFBUSxDQUFDRyxLQUFLO29CQUFFQyxJQUFJRixVQUFVLENBQUNGLFFBQVEsQ0FBQ0ksRUFBRTtvQkFBRUMsSUFBSUgsVUFBVSxDQUFDRixRQUFRLENBQUNLLEVBQUU7b0JBQUVDLE1BQU1KLFVBQVUsQ0FBQ0YsUUFBUSxDQUFDTSxJQUFJO29CQUFFNEIsUUFBUWhDLFVBQVUsQ0FBQ0YsUUFBUSxDQUFDTyxLQUFLOzs7Ozs7Ozs7O3FDQUFxQiw4REFBQzBCOzs7OztZQUM3TWpDLFdBQVcsa0JBQUksOERBQUNpQzswQkFBSSw0RUFBQ3pDLDZDQUFPQTtvQkFBQzJDLE9BQU07b0JBQUlDLGtCQUFpQjtvQkFBVUMsVUFBVTdCO29CQUFNOEIsUUFBUTs7Ozs7Ozs7OztxQ0FBMkIsOERBQUNMOzs7OztZQUN0SGpDLFdBQVcsa0JBQUksOERBQUNpQzswQkFBSSw0RUFBQ3hDLGlEQUFTQTtvQkFBQzBDLE9BQU07b0JBQUlDLGtCQUFrQnBDLFdBQVcsSUFBSSxZQUFZO29CQUFjdUMsV0FBV0M7b0JBQU9GLFFBQVN0QyxXQUFXLElBQUksU0FBUzs7Ozs7Ozs7OztxQ0FBNkIsOERBQUNpQzs7Ozs7MEJBQ3ZMLDhEQUFDdEMsaURBQVNBO2dCQUFDOEMsVUFBVSxJQUFNeEMsUUFBUTtnQkFBSXlDLFVBQVUsSUFBTXpDLFFBQVE7Z0JBQUkwQyxVQUFVLElBQU0xQyxRQUFROzs7Ozs7Ozs7Ozs7QUFHbkc7R0FuRWdCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL0NvbnZvVmlldy50c3g/ZWQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHsgU3RhdGljSW1wb3J0IH0gZnJvbSBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2dldC1pbWctcHJvcHNcIjtcbmltcG9ydCB7IENTU1Byb3BlcnRpZXMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hcFZpZXcgfSBmcm9tIFwiLi9NYXBWaWV3XCI7XG5pbXBvcnQgeyBUYWJsZVZpZXcgfSBmcm9tIFwiLi9UYWJsZVZpZXdcIjtcbmltcG9ydCB7IFRvcGJhciB9IGZyb20gXCIuL3RvcGJhclwiO1xuaW1wb3J0IHsgQm90dG9tYmFyIH0gZnJvbSBcIi4vYm90dG9tYmFyXCI7XG5pbXBvcnQgY29udm9faWNvbiBmcm9tICcuLi8uLi9wdWJsaWMvQ29udm9zSWNvbnMucG5nJ1xuaW1wb3J0IHRyYW5zY3IgZnJvbSAnLi4vLi4vcHVibGljL1RyYW5zY3JpcHQucG5nJ1xuaW1wb3J0IHsgcmVjb3JkZXJfbG9vcCB9IGZyb20gXCIuL3JlY29yZGVyXCI7XG5cbmludGVyZmFjZSBDb252b1Byb3BzIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XG4gIGJhY2tncm91bmRDb2xvdXI6IHN0cmluZztcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb252b1ZpZXcoY3ZwOiBDb252b1Byb3BzKSB7XG5cbiAgdmFyIFthcHBNb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IHRvcGJhcl90eHQgPSBbe3RpdGxlOiBcIkNvbnZlcnNhdGlvbiBNYXBcIiwgcDE6IFwiRmluZCBjb252ZXJzYXRpb25zIHRoYXQgeW91IHdhbnQgdG8gam9pbiFcIiwgcDI6IFwiU3R1Y2s/IFRoZSB0cmFuc2NyaXB0cyBhcmUgYSBncmVhdCBwbGFjZSB0byBzdGFydCFcIiwgbG9nbzogY29udm9faWNvbiwgY29sb3I6IFwiI0ZGRTEwMFwifSwge3RpdGxlOiBcIlRyYW5zY3JpcHRzXCIsIHAxOiBcIlNlZSB3aGF0IHRoZSBjb252ZXJzYXRpb24gaXMgYWxsIGFib3V0IVwiLCBwMjogXCIgXCIsIGxvZ286IHRyYW5zY3IsIGNvbG9yOiBcIiM1OENDMDJcIn1dXG4gIFxuICAvKlxuICBjb25zdCB0ZXN0ID0gW3tpZDogMywgdHJhbnNjcmlwdDogXCJcIiwgcHg6IDU1LCBweTogNDUsIHRoZXRhOiA1NSwgdGltZXN0YW1wOiBEYXRlLm5vdygpLCBwYXVzZWQ6IGZhbHNlLCBjeHk6IDB9LCB7aWQ6IDIsIHRyYW5zY3JpcHQ6IFwiXCIsIHB4OiA5NSwgcHk6IDQ1LCB0aGV0YTogNTUsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSwgcGF1c2VkOiBmYWxzZSwgY3h5OiAwfV07XG4gIGNvbnN0IHRkYXRhID0gW3tsYWJlbDogJ0FydGlmaWNhbCBpbnRlbGxpZ2VuY2UnLCBpZDogMywgdHJhbnNjcmlwdDogJ2NvY2snLCB0aXBzOiAnYWJjZCcsIHBhdXNlZDogZmFsc2V9LCB7bGFiZWw6ICdBcnRpZmljYWwgaW50ZWxsaWdlbmNlJyxcbiAgICAgIGlkOiAyLCB0cmFuc2NyaXB0OiAnY29jaycsIHRpcHM6ICdhYmNkJywgcGF1c2VkOiBmYWxzZX1dXG4gICAgICAqL1xuXG4gIHZhciBbdGVzdCwgc2V0UG9pbnRdID0gdXNlU3RhdGUoW0NvbnZdKVxuXG5jb25zdCBjb252b3NlcnZlciA9IFwiaHR0cHM6Ly9jb252LWNvdW50LXBvYy05OTdjNDhiNGM0Y2MuaGVyb2t1YXBwLmNvbVwiICsgXCIvY29udm8tdHMtbGlzdFwiXG5cbiAgICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG5cblxuICAgICAgICBmdW5jdGlvbiBsb2FkQ29udm8oZSkge1xuXG4gICAgICAgICAgdmFyIGRhdGFBcnIgPSBudWxsO1xuICAgICAgICAgLy8gY29uc29sZS5sb2coZSlcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBkYXRhQXJyID0gSlNPTi5wYXJzZShlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICBpZiAoIWRhdGFBcnIpIHJldHVybjtcbiAgICAgIFxuICAgICAgICAgIGlmIChwcmV2TGVuICE9IGRhdGFBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNsZWFyQ2VsbHMoKTtcbiAgICAgICAgICAgICAgZ2VuZXJhdGVDZWxsKGRhdGFBcnIsIDEwKVxuICAgICAgXG4gICAgICAgICAgICAgIHByZXZMZW4gPSBkYXRhQXJyLmxlbmd0aDtcbiAgICAgIFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgcmV2aXNlQ2VsbChkYXRhQXJyLCAxMCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZ1bmN0aW9uIGNvbnZvX2xvb3AoKSB7XG4gICAgICAgICAgc2VuZFBhY2tldChjb252b3NlcnZlciwgJ0dFVCcsICcnLCB0cnVlLCBsb2FkQ29udm8sICBudWxsLCAzMDAwKVxuICAgICAgfVxuICAgICAgXG4gICAgICBzZXRJbnRlcnZhbChjb252b19sb29wLCAxMDApO1xuXG5cbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb3VudGVyID0gY291bnQgKyAxO1xuICAgICAgICAgIHNldENvdW50KGNvdW50ZXIpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9LCBbY291bnRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIHsgYXBwTW9kZSAhPSAyID8gPGRpdj48VG9wYmFyIHRpdGxlPXt0b3BiYXJfdHh0W2FwcE1vZGVdLnRpdGxlfSBwMT17dG9wYmFyX3R4dFthcHBNb2RlXS5wMX0gcDI9e3RvcGJhcl90eHRbYXBwTW9kZV0ucDJ9IGxvZ289e3RvcGJhcl90eHRbYXBwTW9kZV0ubG9nb30gY29sb3VyPXt0b3BiYXJfdHh0W2FwcE1vZGVdLmNvbG9yfSA+PC9Ub3BiYXI+PC9kaXY+IDogPGRpdj48L2Rpdj4gfVxuICAgICAgICB7IGFwcE1vZGUgPT0gMCA/IDxkaXY+PE1hcFZpZXcgbGFiZWw9XCJhXCIgYmFja2dyb3VuZENvbG91cj1cIiNFRkVGRUZcIiBDb252b1B0cz17dGVzdH0gaGVpZ2h0PXsnNDN2aCd9PjwvTWFwVmlldz48L2Rpdj4gOiA8ZGl2PjwvZGl2PiB9XG4gICAgICAgIHsgYXBwTW9kZSA8PSAxID8gPGRpdj48VGFibGVWaWV3IGxhYmVsPVwiYVwiIGJhY2tncm91bmRDb2xvdXI9e2FwcE1vZGUgPT0gMCA/IFwiIzU4Q0MwMlwiIDogXCIjRkZGRkZcIn0gICAgIENvbnZvRGF0YT17dGRhdGF9IGhlaWdodD17IGFwcE1vZGUgPT0gMSA/IFwiNjJ2aFwiIDogXCIyNXZoXCJ9PjwvVGFibGVWaWV3PjwvZGl2PiA6IDxkaXY+PC9kaXY+IH1cbiAgICAgICAgPEJvdHRvbWJhciBvbkNsaWNrMT17KCkgPT4gc2V0TW9kZSgwKX0gb25DbGljazI9eygpID0+IHNldE1vZGUoMSl9IG9uQ2xpY2szPXsoKSA9PiBzZXRNb2RlKDIpfT48L0JvdHRvbWJhcj5cbiAgIDwvZGl2PlxuICApO1xufSAiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNYXBWaWV3IiwiVGFibGVWaWV3IiwiVG9wYmFyIiwiQm90dG9tYmFyIiwiY29udm9faWNvbiIsInRyYW5zY3IiLCJDb252b1ZpZXciLCJjdnAiLCJhcHBNb2RlIiwic2V0TW9kZSIsInRvcGJhcl90eHQiLCJ0aXRsZSIsInAxIiwicDIiLCJsb2dvIiwiY29sb3IiLCJ0ZXN0Iiwic2V0UG9pbnQiLCJDb252IiwiY29udm9zZXJ2ZXIiLCJjb3VudCIsInNldENvdW50IiwibG9hZENvbnZvIiwiZSIsImRhdGFBcnIiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwiZXJyb3IiLCJwcmV2TGVuIiwibGVuZ3RoIiwiY2xlYXJDZWxscyIsImdlbmVyYXRlQ2VsbCIsInJldmlzZUNlbGwiLCJjb252b19sb29wIiwic2VuZFBhY2tldCIsInNldEludGVydmFsIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY291bnRlciIsImNsZWFyVGltZW91dCIsImRpdiIsImNvbG91ciIsImxhYmVsIiwiYmFja2dyb3VuZENvbG91ciIsIkNvbnZvUHRzIiwiaGVpZ2h0IiwiQ29udm9EYXRhIiwidGRhdGEiLCJvbkNsaWNrMSIsIm9uQ2xpY2syIiwib25DbGljazMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/ConvoView.tsx\n"));

/***/ })

});