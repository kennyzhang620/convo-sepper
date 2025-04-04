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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConvoView: function() { return /* binding */ ConvoView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MapView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapView */ \"(app-pages-browser)/./components/ui/MapView.tsx\");\n/* harmony import */ var _TableView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TableView */ \"(app-pages-browser)/./components/ui/TableView.tsx\");\n/* harmony import */ var _topbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topbar */ \"(app-pages-browser)/./components/ui/topbar.tsx\");\n/* harmony import */ var _bottombar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bottombar */ \"(app-pages-browser)/./components/ui/bottombar.tsx\");\n/* harmony import */ var _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/ConvosIcons.png */ \"(app-pages-browser)/./public/ConvosIcons.png\");\n/* harmony import */ var _public_Transcript_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/Transcript.png */ \"(app-pages-browser)/./public/Transcript.png\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_helpers */ \"(app-pages-browser)/./components/ui/_helpers.ts\");\n/* harmony import */ var _ConvoStructs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ConvoStructs */ \"(app-pages-browser)/./components/ui/ConvoStructs.tsx\");\n/* harmony import */ var _public_ProfilePicture_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/ProfilePicture.png */ \"(app-pages-browser)/./public/ProfilePicture.png\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction ConvoView(cvp) {\n    _s();\n    var [appMode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const topbar_txt = [\n        {\n            title: \"Conversation Map\",\n            p1: \"Find conversations that you want to join!\",\n            p2: \"Stuck? The transcripts are a great place to start!\",\n            logo: _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            color: \"#FFE100\"\n        },\n        {\n            title: \"Transcripts\",\n            p1: \"See what the conversation is all about!\",\n            p2: \" \",\n            logo: _public_Transcript_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            color: \"#58CC02\"\n        },\n        {\n            title: \"\",\n            p1: \"\",\n            p2: \" \",\n            logo: \"\",\n            color: \"#FFFFFF\"\n        }\n    ];\n    /*\n  const test = [{id: 3, transcript: \"\", px: 55, py: 45, theta: 55, timestamp: Date.now(), paused: false, cxy: 0}, {id: 2, transcript: \"\", px: 95, py: 45, theta: 55, timestamp: Date.now(), paused: false, cxy: 0}];\n  const tdata = [{label: 'Artifical intelligence', id: 3, transcript: 'cock', tips: 'abcd', paused: false}, {label: 'Artifical intelligence',\n      id: 2, transcript: 'cock', tips: 'abcd', paused: false}]\n      */ var [test, setPoint] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    var [tdata, setTranscriptData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const convoserver = \"https://conv-count-poc-997c48b4c4cc.herokuapp.com\" + \"/convo-ts-list\";\n    const server = \"https://conv-count-poc-997c48b4c4cc.herokuapp.com\" + \"/convo-ts-ids\";\n    const clusterServer = \"https://conv-count-poc-997c48b4c4cc.herokuapp.com\" + \"/convo-ts-clusters\";\n    var [fform_colors, setColours] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Map());\n    var prevLen = 0;\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        function loadConvo(e) {\n            let dataArr = null;\n            try {\n                dataArr = JSON.parse(e);\n            } catch (e) {\n                console.error(e);\n            }\n            if (!dataArr) return;\n            if (prevLen != dataArr.length) {\n                setTranscriptData(dataArr);\n                prevLen = dataArr.length;\n                return;\n            }\n        }\n        function loadPoints(e) {\n            let dataArr = null;\n            try {\n                dataArr = JSON.parse(e);\n            } catch (e) {\n                console.error(e);\n            }\n            if (!dataArr) return;\n            if (prevLen != dataArr.length) {\n                setPoint(dataArr);\n                prevLen = dataArr.length;\n                return;\n            }\n        }\n        function loadFFormations(e) {\n            var dataArr = null;\n            try {\n                dataArr = JSON.parse(e);\n            } catch (e) {\n                console.error(e);\n            }\n            if (!dataArr) return;\n            // Draw F-formations\n            for(var i = 0; i < dataArr.length; i++){\n                const fformation = dataArr[i];\n                for(var f = 0; f < fformation.length; f++){\n                    //    document.getElementById(`point-${fformation[f]}`).style.backgroundColor = f_formation_colors[i];\n                    fform_colors.set(fformation[f], _ConvoStructs__WEBPACK_IMPORTED_MODULE_10__.colours[i]);\n                }\n            }\n            console.log(fform_colors);\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_9__.sendPacket)(server, \"GET\", \"\", true, loadPoints, undefined, 3000);\n        }\n        function convo_loop() {\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_9__.sendPacket)(convoserver, \"GET\", \"\", true, loadConvo, undefined, 3000);\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_9__.sendPacket)(clusterServer, \"GET\", \"\", true, loadFFormations, undefined, 3000);\n        }\n        convo_loop();\n        const timer = setTimeout(()=>{\n            const counter = count + 1;\n            setCount(counter);\n        }, 1000);\n        return ()=>clearTimeout(timer);\n    }, [\n        count\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_topbar__WEBPACK_IMPORTED_MODULE_5__.Topbar, {\n                title: topbar_txt[appMode].title,\n                p1: topbar_txt[appMode].p1,\n                p2: topbar_txt[appMode].p2,\n                logo: topbar_txt[appMode].logo,\n                colour: topbar_txt[appMode].color\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 141,\n                columnNumber: 9\n            }, this),\n            appMode == 2 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        alt: \"profile\",\n                        src: _public_ProfilePicture_png__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n                    }, void 0, false, {\n                        fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                        lineNumber: 142,\n                        columnNumber: 31\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-xl\",\n                                children: \"Profile and Settings\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 30\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg\",\n                                children: \"Calibration\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 79\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_12__.Button, {\n                                className: \"text-base\",\n                                label: \"Recentre Device\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 119\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg\",\n                                children: \"Compass Realignment\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 182\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                la: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 230\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 142,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 143,\n                columnNumber: 265\n            }, this),\n            appMode == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MapView__WEBPACK_IMPORTED_MODULE_3__.MapView, {\n                    label: \"a\",\n                    backgroundColour: \"#EFEFEF\",\n                    ConvoPts: test,\n                    height: \"43vh\",\n                    scale: 50,\n                    externColour: fform_colors\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 144,\n                    columnNumber: 31\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 144,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 144,\n                columnNumber: 167\n            }, this),\n            appMode <= 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableView__WEBPACK_IMPORTED_MODULE_4__.TableView, {\n                    label: \"a\",\n                    backgroundColour: appMode == 0 ? \"#58CC02\" : \"#FFFFFF\",\n                    ConvoData: tdata,\n                    height: appMode == 1 ? \"62vh\" : \"25vh\"\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 145,\n                    columnNumber: 31\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 145,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 145,\n                columnNumber: 188\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bottombar__WEBPACK_IMPORTED_MODULE_6__.Bottombar, {\n                onClick1: ()=>setMode(0),\n                onClick2: ()=>setMode(1),\n                onClick3: ()=>setMode(2)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 146,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n        lineNumber: 140,\n        columnNumber: 5\n    }, this);\n}\n_s(ConvoView, \"kmEoOpao2VjXiCiQBcb82/Lhgw8=\");\n_c = ConvoView;\nvar _c;\n$RefreshReg$(_c, \"ConvoView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvQ29udm9WaWV3LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM4QjtBQUU2QjtBQUN2QjtBQUNJO0FBQ047QUFDTTtBQUNhO0FBQ0o7QUFDVDtBQUN5QjtBQUNUO0FBQ3RCO0FBYTNCLFNBQVNhLFVBQVVDLEdBQWU7O0lBRXZDLElBQUksQ0FBQ0MsU0FBU0MsUUFBUSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNsQyxNQUFNZSxhQUFhO1FBQUM7WUFBQ0MsT0FBTztZQUFvQkMsSUFBSTtZQUE2Q0MsSUFBSTtZQUFzREMsTUFBTWQsK0RBQVVBO1lBQUVlLE9BQU87UUFBUztRQUMzTDtZQUFDSixPQUFPO1lBQWVDLElBQUk7WUFBMkNDLElBQUk7WUFBS0MsTUFBTWIsOERBQU9BO1lBQUVjLE9BQU87UUFBUztRQUM5RztZQUFDSixPQUFPO1lBQUlDLElBQUk7WUFBSUMsSUFBSTtZQUFLQyxNQUFNO1lBQUlDLE9BQU87UUFBUztLQUFFO0lBRTNEOzs7O01BSUksR0FFSixJQUFJLENBQUNDLE1BQU1DLFNBQVMsR0FBR3RCLCtDQUFRQSxDQUFnQixFQUFFO0lBQ2pELElBQUksQ0FBQ3VCLE9BQU9DLGtCQUFrQixHQUFHeEIsK0NBQVFBLENBQWMsRUFBRTtJQUUzRCxNQUFNeUIsY0FBYyxzREFBc0Q7SUFDMUUsTUFBTUMsU0FBUyxzREFBc0Q7SUFDckUsTUFBTUMsZ0JBQWdCLHNEQUFzRDtJQUM1RSxJQUFJLENBQUNDLGNBQWNDLFdBQVcsR0FBRzdCLCtDQUFRQSxDQUFDLElBQUk4QjtJQUU5QyxJQUFJQyxVQUFVO0lBRVIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdqQywrQ0FBUUEsQ0FBQztJQUNuQ0QsZ0RBQVNBLENBQUM7UUFJUixTQUFTbUMsVUFBVUMsQ0FBUTtZQUV6QixJQUFJQyxVQUE4QjtZQUNsQyxJQUFJO2dCQUNBQSxVQUFVQyxLQUFLQyxLQUFLLENBQUNIO1lBQ3pCLEVB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QjtvQkFBVUMsVUFBVTdDO29CQUFNOEMsUUFBUTtvQkFBUUMsT0FBTztvQkFBSUMsY0FBY3pDOzs7Ozs7Ozs7O3FDQUFpQyw4REFBQzJCOzs7OztZQUM3SjFDLFdBQVcsa0JBQUksOERBQUMwQzswQkFBSSw0RUFBQ3JELGlEQUFTQTtvQkFBQzRELE9BQU07b0JBQUlHLGtCQUFrQnBELFdBQVcsSUFBSSxZQUFZO29CQUFXeUQsV0FBVy9DO29CQUFPNEMsUUFBU3RELFdBQVcsSUFBSSxTQUFTOzs7Ozs7Ozs7O3FDQUE2Qiw4REFBQzBDOzs7OzswQkFDcEwsOERBQUNuRCxpREFBU0E7Z0JBQUNtRSxVQUFVLElBQU16RCxRQUFRO2dCQUFJMEQsVUFBVSxJQUFNMUQsUUFBUTtnQkFBSTJELFVBQVUsSUFBTTNELFFBQVE7Ozs7Ozs7Ozs7OztBQUduRztHQTFIZ0JIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvQ29udm9WaWV3LnRzeD9lZDIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgeyBTdGF0aWNJbXBvcnQgfSBmcm9tIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvZ2V0LWltZy1wcm9wc1wiO1xuaW1wb3J0IHsgQ1NTUHJvcGVydGllcywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWFwVmlldyB9IGZyb20gXCIuL01hcFZpZXdcIjtcbmltcG9ydCB7IFRhYmxlVmlldyB9IGZyb20gXCIuL1RhYmxlVmlld1wiO1xuaW1wb3J0IHsgVG9wYmFyIH0gZnJvbSBcIi4vdG9wYmFyXCI7XG5pbXBvcnQgeyBCb3R0b21iYXIgfSBmcm9tIFwiLi9ib3R0b21iYXJcIjtcbmltcG9ydCBjb252b19pY29uIGZyb20gJy4uLy4uL3B1YmxpYy9Db252b3NJY29ucy5wbmcnXG5pbXBvcnQgdHJhbnNjciBmcm9tICcuLi8uLi9wdWJsaWMvVHJhbnNjcmlwdC5wbmcnXG5pbXBvcnQgeyBzZW5kUGFja2V0IH0gZnJvbSBcIi4vX2hlbHBlcnNcIjtcbmltcG9ydCB7IGNvbG91cnMsIENvbnZvRGF0YSwgQ29udm9Qb2ludHMgfSBmcm9tIFwiLi9Db252b1N0cnVjdHNcIjtcbmltcG9ydCBQcm9maWxlSW1nIGZyb20gJy4uLy4uL3B1YmxpYy9Qcm9maWxlUGljdHVyZS5wbmcnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9idXR0b25cIjtcbmltcG9ydCBSZWFjdFNsaWRlciBmcm9tICdyZWFjdC1zbGlkZXInXG5cbmludGVyZmFjZSBDb252b1Byb3BzIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XG4gIGJhY2tncm91bmRDb2xvdXI6IHN0cmluZztcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb252b1ZpZXcoY3ZwOiBDb252b1Byb3BzKSB7XG5cbiAgdmFyIFthcHBNb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IHRvcGJhcl90eHQgPSBbe3RpdGxlOiBcIkNvbnZlcnNhdGlvbiBNYXBcIiwgcDE6IFwiRmluZCBjb252ZXJzYXRpb25zIHRoYXQgeW91IHdhbnQgdG8gam9pbiFcIiwgcDI6IFwiU3R1Y2s/IFRoZSB0cmFuc2NyaXB0cyBhcmUgYSBncmVhdCBwbGFjZSB0byBzdGFydCFcIiwgbG9nbzogY29udm9faWNvbiwgY29sb3I6IFwiI0ZGRTEwMFwifSwgXG4gICAge3RpdGxlOiBcIlRyYW5zY3JpcHRzXCIsIHAxOiBcIlNlZSB3aGF0IHRoZSBjb252ZXJzYXRpb24gaXMgYWxsIGFib3V0IVwiLCBwMjogXCIgXCIsIGxvZ286IHRyYW5zY3IsIGNvbG9yOiBcIiM1OENDMDJcIn0sIFxuICAgIHt0aXRsZTogXCJcIiwgcDE6IFwiXCIsIHAyOiBcIiBcIiwgbG9nbzogJycsIGNvbG9yOiBcIiNGRkZGRkZcIn1dXG4gIFxuICAvKlxuICBjb25zdCB0ZXN0ID0gW3tpZDogMywgdHJhbnNjcmlwdDogXCJcIiwgcHg6IDU1LCBweTogNDUsIHRoZXRhOiA1NSwgdGltZXN0YW1wOiBEYXRlLm5vdygpLCBwYXVzZWQ6IGZhbHNlLCBjeHk6IDB9LCB7aWQ6IDIsIHRyYW5zY3JpcHQ6IFwiXCIsIHB4OiA5NSwgcHk6IDQ1LCB0aGV0YTogNTUsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSwgcGF1c2VkOiBmYWxzZSwgY3h5OiAwfV07XG4gIGNvbnN0IHRkYXRhID0gW3tsYWJlbDogJ0FydGlmaWNhbCBpbnRlbGxpZ2VuY2UnLCBpZDogMywgdHJhbnNjcmlwdDogJ2NvY2snLCB0aXBzOiAnYWJjZCcsIHBhdXNlZDogZmFsc2V9LCB7bGFiZWw6ICdBcnRpZmljYWwgaW50ZWxsaWdlbmNlJyxcbiAgICAgIGlkOiAyLCB0cmFuc2NyaXB0OiAnY29jaycsIHRpcHM6ICdhYmNkJywgcGF1c2VkOiBmYWxzZX1dXG4gICAgICAqL1xuXG4gIHZhciBbdGVzdCwgc2V0UG9pbnRdID0gdXNlU3RhdGU8Q29udm9Qb2ludHNbXT4oW10pO1xuICB2YXIgW3RkYXRhLCBzZXRUcmFuc2NyaXB0RGF0YV0gPSB1c2VTdGF0ZTxDb252b0RhdGFbXT4oW10pXG5cbmNvbnN0IGNvbnZvc2VydmVyID0gXCJodHRwczovL2NvbnYtY291bnQtcG9jLTk5N2M0OGI0YzRjYy5oZXJva3VhcHAuY29tXCIgKyBcIi9jb252by10cy1saXN0XCJcbmNvbnN0IHNlcnZlciA9IFwiaHR0cHM6Ly9jb252LWNvdW50LXBvYy05OTdjNDhiNGM0Y2MuaGVyb2t1YXBwLmNvbVwiICsgXCIvY29udm8tdHMtaWRzXCI7XG5jb25zdCBjbHVzdGVyU2VydmVyID0gXCJodHRwczovL2NvbnYtY291bnQtcG9jLTk5N2M0OGI0YzRjYy5oZXJva3VhcHAuY29tXCIgKyBcIi9jb252by10cy1jbHVzdGVyc1wiO1xudmFyIFtmZm9ybV9jb2xvcnMsIHNldENvbG91cnNdID0gdXNlU3RhdGUobmV3IE1hcCgpKVxuXG52YXIgcHJldkxlbiA9IDA7XG5cbiAgICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG5cblxuICAgICAgICBmdW5jdGlvbiBsb2FkQ29udm8oZTpzdHJpbmcpIHtcblxuICAgICAgICAgIGxldCBkYXRhQXJyOiBDb252b0RhdGFbXSB8IG51bGwgPSBudWxsO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGRhdGFBcnIgPSBKU09OLnBhcnNlKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgIGlmICghZGF0YUFycikgcmV0dXJuO1xuICAgICAgXG4gICAgICAgICAgaWYgKHByZXZMZW4gIT0gZGF0YUFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgc2V0VHJhbnNjcmlwdERhdGEoZGF0YUFycik7XG4gICAgICBcbiAgICAgICAgICAgICAgcHJldkxlbiA9IGRhdGFBcnIubGVuZ3RoO1xuICAgICAgXG4gICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgIH1cbiAgICAgfVxuXG5cblxuICAgICBmdW5jdGlvbiBsb2FkUG9pbnRzKGU6c3RyaW5nKSB7XG5cbiAgICAgIGxldCBkYXRhQXJyOiBDb252b1BvaW50c1tdIHwgbnVsbCA9IG51bGw7XG4gICAgICB0cnkge1xuICAgICAgICAgIGRhdGFBcnIgPSBKU09OLnBhcnNlKGUpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgfVxuICBcbiAgICAgIGlmICghZGF0YUFycikgcmV0dXJuO1xuICBcbiAgICAgIGlmIChwcmV2TGVuICE9IGRhdGFBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgc2V0UG9pbnQoZGF0YUFycik7XG4gIFxuICAgICAgICAgIHByZXZMZW4gPSBkYXRhQXJyLmxlbmd0aDtcbiAgXG4gICAgICAgICAgcmV0dXJuO1xuXG4gICAgICB9XG4gfVxuICAgICAgZnVuY3Rpb24gbG9hZEZGb3JtYXRpb25zKGU6c3RyaW5nKSB7XG4gICAgICAgIHZhciBkYXRhQXJyOiBudW1iZXJbXVtdIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYXRhQXJyID0gSlNPTi5wYXJzZShlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGF0YUFycikgcmV0dXJuO1xuXG4gICAgICAgIC8vIERyYXcgRi1mb3JtYXRpb25zXG4gICAgICAgIGZvciAodmFyIGkgPSAwO2kgPCBkYXRhQXJyLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZmb3JtYXRpb24gPSBkYXRhQXJyW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgZiA9IDA7ZjxmZm9ybWF0aW9uLmxlbmd0aCA7ZisrKSB7XG4gICAgICAgICAgICAvLyAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcG9pbnQtJHtmZm9ybWF0aW9uW2ZdfWApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGZfZm9ybWF0aW9uX2NvbG9yc1tpXTtcbiAgICAgICAgICAgICAgICBmZm9ybV9jb2xvcnMuc2V0KGZmb3JtYXRpb25bZl0sICBjb2xvdXJzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGZmb3JtX2NvbG9ycylcbiAgICAgICAgc2VuZFBhY2tldChzZXJ2ZXIsICdHRVQnLCAnJywgdHJ1ZSwgbG9hZFBvaW50cywgIHVuZGVmaW5lZCwgMzAwMCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZ1bmN0aW9uIGNvbnZvX2xvb3AoKSB7XG4gICAgICAgICAgc2VuZFBhY2tldChjb252b3NlcnZlciwgJ0dFVCcsICcnLCB0cnVlLCBsb2FkQ29udm8sIHVuZGVmaW5lZCwgMzAwMClcbiAgICAgICAgICBzZW5kUGFja2V0KGNsdXN0ZXJTZXJ2ZXIsICdHRVQnLCAnJywgdHJ1ZSwgbG9hZEZGb3JtYXRpb25zLCB1bmRlZmluZWQsIDMwMDApXG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnZvX2xvb3AoKTtcbiAgICAgIFxuICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvdW50ZXIgPSBjb3VudCArIDE7XG4gICAgICAgICAgc2V0Q291bnQoY291bnRlcik7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfSwgW2NvdW50XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8VG9wYmFyIHRpdGxlPXt0b3BiYXJfdHh0W2FwcE1vZGVdLnRpdGxlfSBwMT17dG9wYmFyX3R4dFthcHBNb2RlXS5wMX0gcDI9e3RvcGJhcl90eHRbYXBwTW9kZV0ucDJ9IGxvZ289e3RvcGJhcl90eHRbYXBwTW9kZV0ubG9nb30gY29sb3VyPXt0b3BiYXJfdHh0W2FwcE1vZGVdLmNvbG9yfSA+PC9Ub3BiYXI+XG4gICAgICAgIHsgYXBwTW9kZSA9PSAyID8gPGRpdj48SW1hZ2UgYWx0PVwicHJvZmlsZVwiIHNyYz17UHJvZmlsZUltZ30+PC9JbWFnZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj48aDEgY2xhc3NOYW1lPVwidGV4dC14bFwiPlByb2ZpbGUgYW5kIFNldHRpbmdzPC9oMT48aDIgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPkNhbGlicmF0aW9uPC9oMj48QnV0dG9uIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiIGxhYmVsPVwiUmVjZW50cmUgRGV2aWNlXCI+PC9CdXR0b24+PGgyIGNsYXNzTmFtZT1cInRleHQtbGdcIj5Db21wYXNzIFJlYWxpZ25tZW50PC9oMj48YnV0dG9uIGxhPjwvYnV0dG9uPjwvZGl2PjwvZGl2PiA6IDxkaXY+PC9kaXY+IH1cbiAgICAgICAgeyBhcHBNb2RlID09IDAgPyA8ZGl2PjxNYXBWaWV3IGxhYmVsPVwiYVwiIGJhY2tncm91bmRDb2xvdXI9XCIjRUZFRkVGXCIgQ29udm9QdHM9e3Rlc3R9IGhlaWdodD17JzQzdmgnfSBzY2FsZT17NTB9IGV4dGVybkNvbG91cj17ZmZvcm1fY29sb3JzfT48L01hcFZpZXc+PC9kaXY+IDogPGRpdj48L2Rpdj4gfVxuICAgICAgICB7IGFwcE1vZGUgPD0gMSA/IDxkaXY+PFRhYmxlVmlldyBsYWJlbD1cImFcIiBiYWNrZ3JvdW5kQ29sb3VyPXthcHBNb2RlID09IDAgPyBcIiM1OENDMDJcIiA6IFwiI0ZGRkZGRlwifSBDb252b0RhdGE9e3RkYXRhfSBoZWlnaHQ9eyBhcHBNb2RlID09IDEgPyBcIjYydmhcIiA6IFwiMjV2aFwifT48L1RhYmxlVmlldz48L2Rpdj4gOiA8ZGl2PjwvZGl2PiB9XG4gICAgICAgIDxCb3R0b21iYXIgb25DbGljazE9eygpID0+IHNldE1vZGUoMCl9IG9uQ2xpY2syPXsoKSA9PiBzZXRNb2RlKDEpfSBvbkNsaWNrMz17KCkgPT4gc2V0TW9kZSgyKX0+PC9Cb3R0b21iYXI+XG4gICA8L2Rpdj5cbiAgKTtcbn0gIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNYXBWaWV3IiwiVGFibGVWaWV3IiwiVG9wYmFyIiwiQm90dG9tYmFyIiwiY29udm9faWNvbiIsInRyYW5zY3IiLCJzZW5kUGFja2V0IiwiY29sb3VycyIsIlByb2ZpbGVJbWciLCJCdXR0b24iLCJDb252b1ZpZXciLCJjdnAiLCJhcHBNb2RlIiwic2V0TW9kZSIsInRvcGJhcl90eHQiLCJ0aXRsZSIsInAxIiwicDIiLCJsb2dvIiwiY29sb3IiLCJ0ZXN0Iiwic2V0UG9pbnQiLCJ0ZGF0YSIsInNldFRyYW5zY3JpcHREYXRhIiwiY29udm9zZXJ2ZXIiLCJzZXJ2ZXIiLCJjbHVzdGVyU2VydmVyIiwiZmZvcm1fY29sb3JzIiwic2V0Q29sb3VycyIsIk1hcCIsInByZXZMZW4iLCJjb3VudCIsInNldENvdW50IiwibG9hZENvbnZvIiwiZSIsImRhdGFBcnIiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwiZXJyb3IiLCJsZW5ndGgiLCJsb2FkUG9pbnRzIiwibG9hZEZGb3JtYXRpb25zIiwiaSIsImZmb3JtYXRpb24iLCJmIiwic2V0IiwibG9nIiwidW5kZWZpbmVkIiwiY29udm9fbG9vcCIsInRpbWVyIiwic2V0VGltZW91dCIsImNvdW50ZXIiLCJjbGVhclRpbWVvdXQiLCJkaXYiLCJjb2xvdXIiLCJhbHQiLCJzcmMiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwibGFiZWwiLCJidXR0b24iLCJsYSIsImJhY2tncm91bmRDb2xvdXIiLCJDb252b1B0cyIsImhlaWdodCIsInNjYWxlIiwiZXh0ZXJuQ29sb3VyIiwiQ29udm9EYXRhIiwib25DbGljazEiLCJvbkNsaWNrMiIsIm9uQ2xpY2szIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/ConvoView.tsx\n"));

/***/ })

});