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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Bottombar: function() { return /* binding */ Bottombar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/ConvosIcons.png */ \"(app-pages-browser)/./public/ConvosIcons.png\");\n/* harmony import */ var _public_Transcript_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/Transcript.png */ \"(app-pages-browser)/./public/Transcript.png\");\n/* harmony import */ var _public_Settings_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/Settings.png */ \"(app-pages-browser)/./public/Settings.png\");\n\n\n\n\n\nfunction Bottombar(param) {\n    let { title } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full vrcomp p-4\",\n        style: {\n            display: \"flex\",\n            justifyContent: \"space-evenly\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: _public_ConvosIcons_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                alt: \"Bar at top of AR view\",\n                style: {\n                    width: \"56px\",\n                    width: \"56px\"\n                },\n                priority: true\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/bottombar.tsx\",\n                lineNumber: 14,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: _public_Transcript_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                alt: \"Bar at top of AR view\",\n                style: {\n                    width: \"15%\"\n                },\n                priority: true\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/bottombar.tsx\",\n                lineNumber: 20,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: _public_Settings_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                alt: \"Bar at top of AR view\",\n                style: {\n                    width: \"35%\"\n                },\n                priority: true\n            }, void 0, false, {\n                fileName: \"/Users/ktzhang/convo-sepper/components/ui/bottombar.tsx\",\n                lineNumber: 26,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ktzhang/convo-sepper/components/ui/bottombar.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_c = Bottombar;\nvar _c;\n$RefreshReg$(_c, \"Bottombar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvYm90dG9tYmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThCO0FBRXVCO0FBQ0g7QUFDQTtBQU0zQyxTQUFTSSxVQUFVLEtBQXNCO1FBQXRCLEVBQUVDLEtBQUssRUFBZSxHQUF0QjtJQUN0QixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtRQUFvQkMsT0FBTztZQUFDQyxTQUFTO1lBQVFDLGdCQUFnQjtRQUFjOzswQkFDeEYsOERBQUNWLGtEQUFLQTtnQkFDSlcsS0FBS1YsK0RBQVVBO2dCQUNmVyxLQUFJO2dCQUNKSixPQUFPO29CQUFFSyxPQUFPO29CQUFRQSxPQUFPO2dCQUFNO2dCQUNyQ0MsUUFBUTs7Ozs7OzBCQUVWLDhEQUFDZCxrREFBS0E7Z0JBQ0pXLEtBQUtULDhEQUFRQTtnQkFDYlUsS0FBSTtnQkFDSkosT0FBTztvQkFBRUssT0FBTztnQkFBSztnQkFDckJDLFFBQVE7Ozs7OzswQkFFViw4REFBQ2Qsa0RBQUtBO2dCQUNOVyxLQUFLUiw0REFBVUE7Z0JBQ2ZTLEtBQUk7Z0JBQ0pKLE9BQU87b0JBQUVLLE9BQU87Z0JBQUs7Z0JBQ3JCQyxRQUFROzs7Ozs7Ozs7Ozs7QUFJbEI7S0F2QmdCViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL2JvdHRvbWJhci50c3g/OTE2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uL3B1YmxpYy9Db252b0J1ZGR5LnBuZydcbmltcG9ydCBjb252b19pY29uIGZyb20gJy4uLy4uL3B1YmxpYy9Db252b3NJY29ucy5wbmcnXG5pbXBvcnQgdHJhbnNfc2MgZnJvbSAnLi4vLi4vcHVibGljL1RyYW5zY3JpcHQucG5nJ1xuaW1wb3J0IHNldHRpbmdzX2kgZnJvbSAnLi4vLi4vcHVibGljL1NldHRpbmdzLnBuZydcblxuaW50ZXJmYWNlIFRvcGJhclByb3BzIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCb3R0b21iYXIoeyB0aXRsZSB9OiBUb3BiYXJQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHZyY29tcCBwLTRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seSd9fT5cbiAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICBzcmM9e2NvbnZvX2ljb259IFxuICAgICAgICAgICAgYWx0PVwiQmFyIGF0IHRvcCBvZiBBUiB2aWV3XCIgXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzU2cHgnLCB3aWR0aDogJzU2cHgnfX1cbiAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICBzcmM9e3RyYW5zX3NjfSBcbiAgICAgICAgICAgIGFsdD1cIkJhciBhdCB0b3Agb2YgQVIgdmlld1wiIFxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxNSUnfX1cbiAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgc3JjPXtzZXR0aW5nc19pfSBcbiAgICAgICAgICBhbHQ9XCJCYXIgYXQgdG9wIG9mIEFSIHZpZXdcIiBcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzM1JSd9fVxuICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIkltYWdlIiwiY29udm9faWNvbiIsInRyYW5zX3NjIiwic2V0dGluZ3NfaSIsIkJvdHRvbWJhciIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsInByaW9yaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/bottombar.tsx\n"));

/***/ })

});