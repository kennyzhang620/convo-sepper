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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConvoView: function() { return /* binding */ ConvoView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MapView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapView */ \"(app-pages-browser)/./components/ui/MapView.tsx\");\n/* harmony import */ var _TableView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TableView */ \"(app-pages-browser)/./components/ui/TableView.tsx\");\n/* harmony import */ var _topbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topbar */ \"(app-pages-browser)/./components/ui/topbar.tsx\");\n/* harmony import */ var _bottombar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bottombar */ \"(app-pages-browser)/./components/ui/bottombar.tsx\");\n/* harmony import */ var _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/ConvosIcons.png */ \"(app-pages-browser)/./public/ConvosIcons.png\");\n/* harmony import */ var _public_Transcript_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/Transcript.png */ \"(app-pages-browser)/./public/Transcript.png\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_helpers */ \"(app-pages-browser)/./components/ui/_helpers.ts\");\n/* harmony import */ var _ConvoStructs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ConvoStructs */ \"(app-pages-browser)/./components/ui/ConvoStructs.tsx\");\n/* harmony import */ var _public_ProfilePicture_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/ProfilePicture.png */ \"(app-pages-browser)/./public/ProfilePicture.png\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var react_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-slider */ \"(app-pages-browser)/./node_modules/react-slider/dist/es/dev/components/ReactSlider/ReactSlider.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction ConvoView(cvp) {\n    _s();\n    var [appMode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const topbar_txt = [\n        {\n            title: \"Conversation Map\",\n            p1: \"Find conversations that you want to join!\",\n            p2: \"Stuck? The transcripts are a great place to start!\",\n            logo: _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            color: \"#FFE100\"\n        },\n        {\n            title: \"Transcripts\",\n            p1: \"See what the conversation is all about!\",\n            p2: \" \",\n            logo: _public_Transcript_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            color: \"#58CC02\"\n        },\n        {\n            title: \"\",\n            p1: \"\",\n            p2: \" \",\n            logo: \"\",\n            color: \"#FFFFFF\"\n        }\n    ];\n    /*\n  const test = [{id: 3, transcript: \"\", px: 55, py: 45, theta: 55, timestamp: Date.now(), paused: false, cxy: 0}, {id: 2, transcript: \"\", px: 95, py: 45, theta: 55, timestamp: Date.now(), paused: false, cxy: 0}];\n  const tdata = [{label: 'Artifical intelligence', id: 3, transcript: 'cock', tips: 'abcd', paused: false}, {label: 'Artifical intelligence',\n      id: 2, transcript: 'cock', tips: 'abcd', paused: false}]\n      */ var [test, setPoint] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    var [tdata, setTranscriptData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const convoserver = \"https://conv-count-poc-997c48b4c4cc.herokuapp.com\" + \"/convo-ts-list\";\n    const server = \"https://conv-count-poc-997c48b4c4cc.herokuapp.com\" + \"/convo-ts-ids\";\n    const clusterServer = \"https://conv-count-poc-997c48b4c4cc.herokuapp.com\" + \"/convo-ts-clusters\";\n    var [fform_colors, setColours] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Map());\n    var prevLen = 0;\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        function loadConvo(e) {\n            let dataArr = null;\n            try {\n                dataArr = JSON.parse(e);\n            } catch (e) {\n                console.error(e);\n            }\n            if (!dataArr) return;\n            if (prevLen != dataArr.length) {\n                setTranscriptData(dataArr);\n                prevLen = dataArr.length;\n                return;\n            }\n        }\n        function loadPoints(e) {\n            let dataArr = null;\n            try {\n                dataArr = JSON.parse(e);\n            } catch (e) {\n                console.error(e);\n            }\n            if (!dataArr) return;\n            if (prevLen != dataArr.length) {\n                setPoint(dataArr);\n                prevLen = dataArr.length;\n                return;\n            }\n        }\n        function loadFFormations(e) {\n            var dataArr = null;\n            try {\n                dataArr = JSON.parse(e);\n            } catch (e) {\n                console.error(e);\n            }\n            if (!dataArr) return;\n            // Draw F-formations\n            for(var i = 0; i < dataArr.length; i++){\n                const fformation = dataArr[i];\n                for(var f = 0; f < fformation.length; f++){\n                    //    document.getElementById(`point-${fformation[f]}`).style.backgroundColor = f_formation_colors[i];\n                    fform_colors.set(fformation[f], _ConvoStructs__WEBPACK_IMPORTED_MODULE_10__.colours[i]);\n                }\n            }\n            console.log(fform_colors);\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_9__.sendPacket)(server, \"GET\", \"\", true, loadPoints, undefined, 3000);\n        }\n        function convo_loop() {\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_9__.sendPacket)(convoserver, \"GET\", \"\", true, loadConvo, undefined, 3000);\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_9__.sendPacket)(clusterServer, \"GET\", \"\", true, loadFFormations, undefined, 3000);\n        }\n        convo_loop();\n        const timer = setTimeout(()=>{\n            const counter = count + 1;\n            setCount(counter);\n        }, 1000);\n        return ()=>clearTimeout(timer);\n    }, [\n        count\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_topbar__WEBPACK_IMPORTED_MODULE_5__.Topbar, {\n                title: topbar_txt[appMode].title,\n                p1: topbar_txt[appMode].p1,\n                p2: topbar_txt[appMode].p2,\n                logo: topbar_txt[appMode].logo,\n                colour: topbar_txt[appMode].color\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 141,\n                columnNumber: 9\n            }, this),\n            appMode == 2 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        alt: \"profile\",\n                        src: _public_ProfilePicture_png__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n                    }, void 0, false, {\n                        fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                        lineNumber: 142,\n                        columnNumber: 31\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-xl\",\n                                children: \"Profile and Settings\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 30\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg\",\n                                children: \"Calibration\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 79\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_12__.Button, {\n                                className: \"text-base\",\n                                label: \"Recentre Device\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 119\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg\",\n                                children: \"Compass Realignment\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 182\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slider__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 230\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 142,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 143,\n                columnNumber: 272\n            }, this),\n            appMode == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MapView__WEBPACK_IMPORTED_MODULE_3__.MapView, {\n                    label: \"a\",\n                    backgroundColour: \"#EFEFEF\",\n                    ConvoPts: test,\n                    height: \"43vh\",\n                    scale: 50,\n                    externColour: fform_colors\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 144,\n                    columnNumber: 31\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 144,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 144,\n                columnNumber: 167\n            }, this),\n            appMode <= 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableView__WEBPACK_IMPORTED_MODULE_4__.TableView, {\n                    label: \"a\",\n                    backgroundColour: appMode == 0 ? \"#58CC02\" : \"#FFFFFF\",\n                    ConvoData: tdata,\n                    height: appMode == 1 ? \"62vh\" : \"25vh\"\n                }, void 0, false, {\n                    fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                    lineNumber: 145,\n                    columnNumber: 31\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 145,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 145,\n                columnNumber: 188\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bottombar__WEBPACK_IMPORTED_MODULE_6__.Bottombar, {\n                onClick1: ()=>setMode(0),\n                onClick2: ()=>setMode(1),\n                onClick3: ()=>setMode(2)\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n                lineNumber: 146,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ktzhang/convo-sepper/components/ui/ConvoView.tsx\",\n        lineNumber: 140,\n        columnNumber: 5\n    }, this);\n}\n_s(ConvoView, \"kmEoOpao2VjXiCiQBcb82/Lhgw8=\");\n_c = ConvoView;\nvar _c;\n$RefreshReg$(_c, \"ConvoView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvQ29udm9WaWV3LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDOEI7QUFFNkI7QUFDdkI7QUFDSTtBQUNOO0FBQ007QUFDYTtBQUNKO0FBQ1Q7QUFDeUI7QUFDVDtBQUN0QjtBQUNJO0FBWS9CLFNBQVNjLFVBQVVDLEdBQWU7O0lBRXZDLElBQUksQ0FBQ0MsU0FBU0MsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNsQyxNQUFNZ0IsYUFBYTtRQUFDO1lBQUNDLE9BQU87WUFBb0JDLElBQUk7WUFBNkNDLElBQUk7WUFBc0RDLE1BQU1mLCtEQUFVQTtZQUFFZ0IsT0FBTztRQUFTO1FBQzNMO1lBQUNKLE9BQU87WUFBZUMsSUFBSTtZQUEyQ0MsSUFBSTtZQUFLQyxNQUFNZCw4REFBT0E7WUFBRWUsT0FBTztRQUFTO1FBQzlHO1lBQUNKLE9BQU87WUFBSUMsSUFBSTtZQUFJQyxJQUFJO1lBQUtDLE1BQU07WUFBSUMsT0FBTztRQUFTO0tBQUU7SUFFM0Q7Ozs7TUFJSSxHQUVKLElBQUksQ0FBQ0MsTUFBTUMsU0FBUyxHQUFHdkIsK0NBQVFBLENBQWdCLEVBQUU7SUFDakQsSUFBSSxDQUFDd0IsT0FBT0Msa0JBQWtCLEdBQUd6QiwrQ0FBUUEsQ0FBYyxFQUFFO0lBRTNELE1BQU0wQixjQUFjLHNEQUFzRDtJQUMxRSxNQUFNQyxTQUFTLHNEQUFzRDtJQUNyRSxNQUFNQyxnQkFBZ0Isc0RBQXNEO0lBQzVFLElBQUksQ0FBQ0MsY0FBY0MsV0FBVyxHQUFHOUIsK0NBQVFBLENBQUMsSUFBSStCO0lBRTlDLElBQUlDLFVBQVU7SUFFUixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2xDLCtDQUFRQSxDQUFDO0lBQ25DRCxnREFBU0EsQ0FBQztRQUlSLFNBQVNvQyxVQUFVQyxDQUFRO1lBRXpCLElBQUlDLFVBQThCO1lBQ2xDLElBQUk7Z0JBQ0FBLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ0g7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QkFBaUI7b0JBQVVDLFVBQVUzQztvQkFBTTRDLFFBQVE7b0JBQVFDLE9BQU87b0JBQUlDLGNBQWN2Qzs7Ozs7Ozs7OztxQ0FBaUMsOERBQUMyQjs7Ozs7WUFDN0oxQyxXQUFXLGtCQUFJLDhEQUFDMEM7MEJBQUksNEVBQUN0RCxpREFBU0E7b0JBQUM2RCxPQUFNO29CQUFJQyxrQkFBa0JsRCxXQUFXLElBQUksWUFBWTtvQkFBV3VELFdBQVc3QztvQkFBTzBDLFFBQVNwRCxXQUFXLElBQUksU0FBUzs7Ozs7Ozs7OztxQ0FBNkIsOERBQUMwQzs7Ozs7MEJBQ3BMLDhEQUFDcEQsaURBQVNBO2dCQUFDa0UsVUFBVSxJQUFNdkQsUUFBUTtnQkFBSXdELFVBQVUsSUFBTXhELFFBQVE7Z0JBQUl5RCxVQUFVLElBQU16RCxRQUFROzs7Ozs7Ozs7Ozs7QUFHbkc7R0ExSGdCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL0NvbnZvVmlldy50c3g/ZWQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHsgU3RhdGljSW1wb3J0IH0gZnJvbSBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2dldC1pbWctcHJvcHNcIjtcbmltcG9ydCB7IENTU1Byb3BlcnRpZXMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hcFZpZXcgfSBmcm9tIFwiLi9NYXBWaWV3XCI7XG5pbXBvcnQgeyBUYWJsZVZpZXcgfSBmcm9tIFwiLi9UYWJsZVZpZXdcIjtcbmltcG9ydCB7IFRvcGJhciB9IGZyb20gXCIuL3RvcGJhclwiO1xuaW1wb3J0IHsgQm90dG9tYmFyIH0gZnJvbSBcIi4vYm90dG9tYmFyXCI7XG5pbXBvcnQgY29udm9faWNvbiBmcm9tICcuLi8uLi9wdWJsaWMvQ29udm9zSWNvbnMucG5nJ1xuaW1wb3J0IHRyYW5zY3IgZnJvbSAnLi4vLi4vcHVibGljL1RyYW5zY3JpcHQucG5nJ1xuaW1wb3J0IHsgc2VuZFBhY2tldCB9IGZyb20gXCIuL19oZWxwZXJzXCI7XG5pbXBvcnQgeyBjb2xvdXJzLCBDb252b0RhdGEsIENvbnZvUG9pbnRzIH0gZnJvbSBcIi4vQ29udm9TdHJ1Y3RzXCI7XG5pbXBvcnQgUHJvZmlsZUltZyBmcm9tICcuLi8uLi9wdWJsaWMvUHJvZmlsZVBpY3R1cmUucG5nJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uXCI7XG5pbXBvcnQgUmVhY3RTbGlkZXIgZnJvbSAncmVhY3Qtc2xpZGVyJ1xuXG5pbnRlcmZhY2UgQ29udm9Qcm9wcyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xuICBiYWNrZ3JvdW5kQ29sb3VyOiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29udm9WaWV3KGN2cDogQ29udm9Qcm9wcykge1xuXG4gIHZhciBbYXBwTW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCB0b3BiYXJfdHh0ID0gW3t0aXRsZTogXCJDb252ZXJzYXRpb24gTWFwXCIsIHAxOiBcIkZpbmQgY29udmVyc2F0aW9ucyB0aGF0IHlvdSB3YW50IHRvIGpvaW4hXCIsIHAyOiBcIlN0dWNrPyBUaGUgdHJhbnNjcmlwdHMgYXJlIGEgZ3JlYXQgcGxhY2UgdG8gc3RhcnQhXCIsIGxvZ286IGNvbnZvX2ljb24sIGNvbG9yOiBcIiNGRkUxMDBcIn0sIFxuICAgIHt0aXRsZTogXCJUcmFuc2NyaXB0c1wiLCBwMTogXCJTZWUgd2hhdCB0aGUgY29udmVyc2F0aW9uIGlzIGFsbCBhYm91dCFcIiwgcDI6IFwiIFwiLCBsb2dvOiB0cmFuc2NyLCBjb2xvcjogXCIjNThDQzAyXCJ9LCBcbiAgICB7dGl0bGU6IFwiXCIsIHAxOiBcIlwiLCBwMjogXCIgXCIsIGxvZ286ICcnLCBjb2xvcjogXCIjRkZGRkZGXCJ9XVxuICBcbiAgLypcbiAgY29uc3QgdGVzdCA9IFt7aWQ6IDMsIHRyYW5zY3JpcHQ6IFwiXCIsIHB4OiA1NSwgcHk6IDQ1LCB0aGV0YTogNTUsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSwgcGF1c2VkOiBmYWxzZSwgY3h5OiAwfSwge2lkOiAyLCB0cmFuc2NyaXB0OiBcIlwiLCBweDogOTUsIHB5OiA0NSwgdGhldGE6IDU1LCB0aW1lc3RhbXA6IERhdGUubm93KCksIHBhdXNlZDogZmFsc2UsIGN4eTogMH1dO1xuICBjb25zdCB0ZGF0YSA9IFt7bGFiZWw6ICdBcnRpZmljYWwgaW50ZWxsaWdlbmNlJywgaWQ6IDMsIHRyYW5zY3JpcHQ6ICdjb2NrJywgdGlwczogJ2FiY2QnLCBwYXVzZWQ6IGZhbHNlfSwge2xhYmVsOiAnQXJ0aWZpY2FsIGludGVsbGlnZW5jZScsXG4gICAgICBpZDogMiwgdHJhbnNjcmlwdDogJ2NvY2snLCB0aXBzOiAnYWJjZCcsIHBhdXNlZDogZmFsc2V9XVxuICAgICAgKi9cblxuICB2YXIgW3Rlc3QsIHNldFBvaW50XSA9IHVzZVN0YXRlPENvbnZvUG9pbnRzW10+KFtdKTtcbiAgdmFyIFt0ZGF0YSwgc2V0VHJhbnNjcmlwdERhdGFdID0gdXNlU3RhdGU8Q29udm9EYXRhW10+KFtdKVxuXG5jb25zdCBjb252b3NlcnZlciA9IFwiaHR0cHM6Ly9jb252LWNvdW50LXBvYy05OTdjNDhiNGM0Y2MuaGVyb2t1YXBwLmNvbVwiICsgXCIvY29udm8tdHMtbGlzdFwiXG5jb25zdCBzZXJ2ZXIgPSBcImh0dHBzOi8vY29udi1jb3VudC1wb2MtOTk3YzQ4YjRjNGNjLmhlcm9rdWFwcC5jb21cIiArIFwiL2NvbnZvLXRzLWlkc1wiO1xuY29uc3QgY2x1c3RlclNlcnZlciA9IFwiaHR0cHM6Ly9jb252LWNvdW50LXBvYy05OTdjNDhiNGM0Y2MuaGVyb2t1YXBwLmNvbVwiICsgXCIvY29udm8tdHMtY2x1c3RlcnNcIjtcbnZhciBbZmZvcm1fY29sb3JzLCBzZXRDb2xvdXJzXSA9IHVzZVN0YXRlKG5ldyBNYXAoKSlcblxudmFyIHByZXZMZW4gPSAwO1xuXG4gICAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcblxuXG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZENvbnZvKGU6c3RyaW5nKSB7XG5cbiAgICAgICAgICBsZXQgZGF0YUFycjogQ29udm9EYXRhW10gfCBudWxsID0gbnVsbDtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBkYXRhQXJyID0gSlNPTi5wYXJzZShlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICBpZiAoIWRhdGFBcnIpIHJldHVybjtcbiAgICAgIFxuICAgICAgICAgIGlmIChwcmV2TGVuICE9IGRhdGFBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHNldFRyYW5zY3JpcHREYXRhKGRhdGFBcnIpO1xuICAgICAgXG4gICAgICAgICAgICAgIHByZXZMZW4gPSBkYXRhQXJyLmxlbmd0aDtcbiAgICAgIFxuICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICB9XG4gICAgIH1cblxuXG5cbiAgICAgZnVuY3Rpb24gbG9hZFBvaW50cyhlOnN0cmluZykge1xuXG4gICAgICBsZXQgZGF0YUFycjogQ29udm9Qb2ludHNbXSB8IG51bGwgPSBudWxsO1xuICAgICAgdHJ5IHtcbiAgICAgICAgICBkYXRhQXJyID0gSlNPTi5wYXJzZShlKTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH1cbiAgXG4gICAgICBpZiAoIWRhdGFBcnIpIHJldHVybjtcbiAgXG4gICAgICBpZiAocHJldkxlbiAhPSBkYXRhQXJyLmxlbmd0aCkge1xuICAgICAgICAgIHNldFBvaW50KGRhdGFBcnIpO1xuICBcbiAgICAgICAgICBwcmV2TGVuID0gZGF0YUFyci5sZW5ndGg7XG4gIFxuICAgICAgICAgIHJldHVybjtcblxuICAgICAgfVxuIH1cbiAgICAgIGZ1bmN0aW9uIGxvYWRGRm9ybWF0aW9ucyhlOnN0cmluZykge1xuICAgICAgICB2YXIgZGF0YUFycjogbnVtYmVyW11bXSB8IG51bGwgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGF0YUFyciA9IEpTT04ucGFyc2UoZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGFBcnIpIHJldHVybjtcblxuICAgICAgICAvLyBEcmF3IEYtZm9ybWF0aW9uc1xuICAgICAgICBmb3IgKHZhciBpID0gMDtpIDwgZGF0YUFyci5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBjb25zdCBmZm9ybWF0aW9uID0gZGF0YUFycltpXTtcbiAgICAgICAgICAgIGZvciAodmFyIGYgPSAwO2Y8ZmZvcm1hdGlvbi5sZW5ndGggO2YrKykge1xuICAgICAgICAgICAgLy8gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBvaW50LSR7ZmZvcm1hdGlvbltmXX1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBmX2Zvcm1hdGlvbl9jb2xvcnNbaV07XG4gICAgICAgICAgICAgICAgZmZvcm1fY29sb3JzLnNldChmZm9ybWF0aW9uW2ZdLCAgY29sb3Vyc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhmZm9ybV9jb2xvcnMpXG4gICAgICAgIHNlbmRQYWNrZXQoc2VydmVyLCAnR0VUJywgJycsIHRydWUsIGxvYWRQb2ludHMsICB1bmRlZmluZWQsIDMwMDApO1xuICAgICAgfVxuICAgICAgXG4gICAgICBmdW5jdGlvbiBjb252b19sb29wKCkge1xuICAgICAgICAgIHNlbmRQYWNrZXQoY29udm9zZXJ2ZXIsICdHRVQnLCAnJywgdHJ1ZSwgbG9hZENvbnZvLCB1bmRlZmluZWQsIDMwMDApXG4gICAgICAgICAgc2VuZFBhY2tldChjbHVzdGVyU2VydmVyLCAnR0VUJywgJycsIHRydWUsIGxvYWRGRm9ybWF0aW9ucywgdW5kZWZpbmVkLCAzMDAwKVxuICAgICAgfVxuICAgICAgXG4gICAgICBjb252b19sb29wKCk7XG4gICAgICBcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb3VudGVyID0gY291bnQgKyAxO1xuICAgICAgICAgIHNldENvdW50KGNvdW50ZXIpO1xuICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH0sIFtjb3VudF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPFRvcGJhciB0aXRsZT17dG9wYmFyX3R4dFthcHBNb2RlXS50aXRsZX0gcDE9e3RvcGJhcl90eHRbYXBwTW9kZV0ucDF9IHAyPXt0b3BiYXJfdHh0W2FwcE1vZGVdLnAyfSBsb2dvPXt0b3BiYXJfdHh0W2FwcE1vZGVdLmxvZ299IGNvbG91cj17dG9wYmFyX3R4dFthcHBNb2RlXS5jb2xvcn0gPjwvVG9wYmFyPlxuICAgICAgICB7IGFwcE1vZGUgPT0gMiA/IDxkaXY+PEltYWdlIGFsdD1cInByb2ZpbGVcIiBzcmM9e1Byb2ZpbGVJbWd9PjwvSW1hZ2U+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+PGgxIGNsYXNzTmFtZT1cInRleHQteGxcIj5Qcm9maWxlIGFuZCBTZXR0aW5nczwvaDE+PGgyIGNsYXNzTmFtZT1cInRleHQtbGdcIj5DYWxpYnJhdGlvbjwvaDI+PEJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2VcIiBsYWJlbD1cIlJlY2VudHJlIERldmljZVwiPjwvQnV0dG9uPjxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+Q29tcGFzcyBSZWFsaWdubWVudDwvaDI+PFJlYWN0U2xpZGVyPjwvUmVhY3RTbGlkZXI+PC9kaXY+PC9kaXY+IDogPGRpdj48L2Rpdj4gfVxuICAgICAgICB7IGFwcE1vZGUgPT0gMCA/IDxkaXY+PE1hcFZpZXcgbGFiZWw9XCJhXCIgYmFja2dyb3VuZENvbG91cj1cIiNFRkVGRUZcIiBDb252b1B0cz17dGVzdH0gaGVpZ2h0PXsnNDN2aCd9IHNjYWxlPXs1MH0gZXh0ZXJuQ29sb3VyPXtmZm9ybV9jb2xvcnN9PjwvTWFwVmlldz48L2Rpdj4gOiA8ZGl2PjwvZGl2PiB9XG4gICAgICAgIHsgYXBwTW9kZSA8PSAxID8gPGRpdj48VGFibGVWaWV3IGxhYmVsPVwiYVwiIGJhY2tncm91bmRDb2xvdXI9e2FwcE1vZGUgPT0gMCA/IFwiIzU4Q0MwMlwiIDogXCIjRkZGRkZGXCJ9IENvbnZvRGF0YT17dGRhdGF9IGhlaWdodD17IGFwcE1vZGUgPT0gMSA/IFwiNjJ2aFwiIDogXCIyNXZoXCJ9PjwvVGFibGVWaWV3PjwvZGl2PiA6IDxkaXY+PC9kaXY+IH1cbiAgICAgICAgPEJvdHRvbWJhciBvbkNsaWNrMT17KCkgPT4gc2V0TW9kZSgwKX0gb25DbGljazI9eygpID0+IHNldE1vZGUoMSl9IG9uQ2xpY2szPXsoKSA9PiBzZXRNb2RlKDIpfT48L0JvdHRvbWJhcj5cbiAgIDwvZGl2PlxuICApO1xufSAiXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1hcFZpZXciLCJUYWJsZVZpZXciLCJUb3BiYXIiLCJCb3R0b21iYXIiLCJjb252b19pY29uIiwidHJhbnNjciIsInNlbmRQYWNrZXQiLCJjb2xvdXJzIiwiUHJvZmlsZUltZyIsIkJ1dHRvbiIsIlJlYWN0U2xpZGVyIiwiQ29udm9WaWV3IiwiY3ZwIiwiYXBwTW9kZSIsInNldE1vZGUiLCJ0b3BiYXJfdHh0IiwidGl0bGUiLCJwMSIsInAyIiwibG9nbyIsImNvbG9yIiwidGVzdCIsInNldFBvaW50IiwidGRhdGEiLCJzZXRUcmFuc2NyaXB0RGF0YSIsImNvbnZvc2VydmVyIiwic2VydmVyIiwiY2x1c3RlclNlcnZlciIsImZmb3JtX2NvbG9ycyIsInNldENvbG91cnMiLCJNYXAiLCJwcmV2TGVuIiwiY291bnQiLCJzZXRDb3VudCIsImxvYWRDb252byIsImUiLCJkYXRhQXJyIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImVycm9yIiwibGVuZ3RoIiwibG9hZFBvaW50cyIsImxvYWRGRm9ybWF0aW9ucyIsImkiLCJmZm9ybWF0aW9uIiwiZiIsInNldCIsImxvZyIsInVuZGVmaW5lZCIsImNvbnZvX2xvb3AiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjb3VudGVyIiwiY2xlYXJUaW1lb3V0IiwiZGl2IiwiY29sb3VyIiwiYWx0Iiwic3JjIiwiY2xhc3NOYW1lIiwiaDEiLCJoMiIsImxhYmVsIiwiYmFja2dyb3VuZENvbG91ciIsIkNvbnZvUHRzIiwiaGVpZ2h0Iiwic2NhbGUiLCJleHRlcm5Db2xvdXIiLCJDb252b0RhdGEiLCJvbkNsaWNrMSIsIm9uQ2xpY2syIiwib25DbGljazMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/ConvoView.tsx\n"));

/***/ })

});