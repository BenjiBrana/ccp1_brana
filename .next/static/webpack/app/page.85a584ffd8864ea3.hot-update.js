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

/***/ "(app-pages-browser)/./src/components/Slider/Slider.jsx":
/*!******************************************!*\
  !*** ./src/components/Slider/Slider.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MySlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst articles = [\n    {\n        id: \"image1\",\n        image: \"/images/cdi_freelance.webp\",\n        title: \"CDI ou Freelance, comment choisir ?\",\n        contenu: \"D\\xe9couvrez les cl\\xe9s pour faire le choix crucial entre un contrat \\xe0 dur\\xe9e ind\\xe9termin\\xe9e (CDI) et le statut de freelance, pour optimiser votre carri\\xe8re professionnelle.\"\n    },\n    {\n        id: \"image2\",\n        image: \"/images/communication_webmarketing.webp\",\n        title: \"Le SEA est-il essentiel, ou le SEO seul peut-il \\xeatre ad\\xe9quat ?\",\n        contenu: \"Plongez dans le d\\xe9bat entre SEA et SEO pour d\\xe9couvrir si le r\\xe9f\\xe9rencement payant est vraiment indispensable ou si une strat\\xe9gie SEO bien ficel\\xe9e peut suffire \\xe0 propulser votre pr\\xe9sence en ligne.\"\n    }\n];\nfunction MySlider() {\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setPage((prev)=>prev === articles.length ? 1 : prev + 1);\n        }, 5000);\n        return ()=>clearInterval(interval);\n    }, []);\n    const handlePagePrecedante = ()=>{\n        setPage((prev)=>prev === 1 ? articles.length : prev - 1);\n    };\n    const handlePageSuivante = ()=>{\n        setPage((prev)=>prev === articles.length ? 1 : prev + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"relative flex h-[calc(100vh-70px)] w-full flex-col justify-center items-center bg-primary\",\n        children: [\n            articles.map((article, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"  w-full h-3/4 scale-75 rounded-lg  \".concat(page === index + 1 ? \"opacity-100\" : \"opacity-0 pointer-events-none\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" absolute left-1/2 border-2 border-textColor/20 -translate-x-1/2 top-0 -translate-y-full w-full py-3 px-6 bg-secondary rounded-t-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-4xl mobile:text-xl tracking-widest py-6 font-titleFont text-black font-bold text-center\",\n                                children: article.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"imageSize  border-x-2 border-textColor/50\",\n                            fill: true,\n                            alt: \"Image slide\",\n                            src: article.image\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute left-1/2 border-2  border-textColor/20 -translate-x-1/2 bottom-0 translate-y-full w-full py-3 px-6 bg-secondary rounded-b-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl mobile:text-base mt-4 py-3 font-bold w-full text-center text-black\",\n                                children: article.contenu\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, article.id, true, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handlePagePrecedante,\n                className: \"z-10 absolute flex h-16  -translate-y-1/2 top-1/2 left-0 text-2xl font-semibold  rounded-r-lg overflow-hidden bg-primary/10  hover:shadow-tertinary  hover:shadow-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex hover:bg-tertinary/50 hover:border-tertinary  transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer  \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"mx-4 \",\n                        alt: \"Slide \\xe0 droite\",\n                        src: \"/logo/circle-chevron-left-solid.svg\",\n                        width: 40,\n                        height: 40\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handlePageSuivante,\n                className: \"z-10 absolute bg-primary/10 flex h-16 hover:h-1/6 -translate-y-1/2 top-1/2 right-0 text-2xl font-semibold  rounded-l-lg overflow-hidden hover:shadow-tertinary  hover:shadow-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex hover:bg-tertinary/50 hover:border-tertinary  transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer  \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"mx-4\",\n                        alt: \"slide \\xe0 gauche\",\n                        src: \"/logo/circle-chevron-right-solid.svg\",\n                        width: 40,\n                        height: 40\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(MySlider, \"LMxNfAY58b6loOOsHmH6zd80VGE=\");\n_c = MySlider;\nvar _c;\n$RefreshReg$(_c, \"MySlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NsaWRlci9TbGlkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDbUQ7QUFDcEI7QUFFL0IsTUFBTUksV0FBVztJQUNmO1FBQ0VDLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFNBQ0U7SUFDSjtJQUNBO1FBQ0VILElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUNFO1FBQ0ZDLFNBQ0U7SUFDSjtDQUNEO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVqQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNVyxXQUFXQyxZQUFZO1lBQzNCRixRQUFRLENBQUNHLE9BQVVBLFNBQVNWLFNBQVNXLE1BQU0sR0FBRyxJQUFJRCxPQUFPO1FBQzNELEdBQUc7UUFFSCxPQUFPLElBQU1FLGNBQWNKO0lBQzdCLEdBQUcsRUFBRTtJQUVMLE1BQU1LLHVCQUF1QjtRQUMzQk4sUUFBUSxDQUFDRyxPQUFVQSxTQUFTLElBQUlWLFNBQVNXLE1BQU0sR0FBR0QsT0FBTztJQUMzRDtJQUVBLE1BQU1JLHFCQUFxQjtRQUN6QlAsUUFBUSxDQUFDRyxPQUFVQSxTQUFTVixTQUFTVyxNQUFNLEdBQUcsSUFBSUQsT0FBTztJQUMzRDtJQUVBLHFCQUNFLDhEQUFDSztRQUFRQyxXQUFVOztZQUNoQmhCLFNBQVNpQixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLDhEQUFDQztvQkFFQ0osV0FBVyx1Q0FJVixPQUhDVixTQUFTYSxRQUFRLElBQ2IsZ0JBQ0E7O3NDQUlOLDhEQUFDQzs0QkFBSUosV0FBVTtzQ0FDYiw0RUFBQ0s7Z0NBQUdMLFdBQVU7MENBQ1hFLFFBQVFmLEtBQUs7Ozs7Ozs7Ozs7O3NDQUlsQiw4REFBQ0osa0RBQUtBOzRCQUNKaUIsV0FBVTs0QkFDVk0sSUFBSTs0QkFDSkMsS0FBSTs0QkFDSkMsS0FBS04sUUFBUWhCLEtBQUs7Ozs7OztzQ0FHcEIsOERBQUNrQjs0QkFBSUosV0FBVTtzQ0FDYiw0RUFBQ1M7Z0NBQUVULFdBQVU7MENBQ1ZFLFFBQVFkLE9BQU87Ozs7Ozs7Ozs7OzttQkF2QmZjLFFBQVFqQixFQUFFOzs7OzswQkE2Qm5CLDhEQUFDbUI7Z0JBQ0NNLFNBQVNiO2dCQUNURyxXQUFVOzBCQUVWLDRFQUFDVztvQkFBS1gsV0FBVTs4QkFDZCw0RUFBQ2pCLGtEQUFLQTt3QkFDSmlCLFdBQVU7d0JBQ1ZPLEtBQUk7d0JBQ0pDLEtBQUk7d0JBQ0pJLE9BQU87d0JBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2QsOERBQUNUO2dCQUNDTSxTQUFTWjtnQkFDVEUsV0FBVTswQkFFViw0RUFBQ1c7b0JBQUtYLFdBQVU7OEJBQ2QsNEVBQUNqQixrREFBS0E7d0JBQ0ppQixXQUFVO3dCQUNWTyxLQUFJO3dCQUNKQyxLQUFJO3dCQUNKSSxPQUFPO3dCQUNQQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCO0dBbkZ3QnhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NsaWRlci9TbGlkZXIuanN4PzU2ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuY29uc3QgYXJ0aWNsZXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdpbWFnZTEnLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2NkaV9mcmVlbGFuY2Uud2VicCcsXHJcbiAgICB0aXRsZTogJ0NESSBvdSBGcmVlbGFuY2UsIGNvbW1lbnQgY2hvaXNpciA/JyxcclxuICAgIGNvbnRlbnU6XHJcbiAgICAgICdEw6ljb3V2cmV6IGxlcyBjbMOpcyBwb3VyIGZhaXJlIGxlIGNob2l4IGNydWNpYWwgZW50cmUgdW4gY29udHJhdCDDoCBkdXLDqWUgaW5kw6l0ZXJtaW7DqWUgKENESSkgZXQgbGUgc3RhdHV0IGRlIGZyZWVsYW5jZSwgcG91ciBvcHRpbWlzZXIgdm90cmUgY2FycmnDqHJlIHByb2Zlc3Npb25uZWxsZS4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdpbWFnZTInLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2NvbW11bmljYXRpb25fd2VibWFya2V0aW5nLndlYnAnLFxyXG4gICAgdGl0bGU6XHJcbiAgICAgICdMZSBTRUEgZXN0LWlsIGVzc2VudGllbCwgb3UgbGUgU0VPIHNldWwgcGV1dC1pbCDDqnRyZSBhZMOpcXVhdCA/JyxcclxuICAgIGNvbnRlbnU6XHJcbiAgICAgICdQbG9uZ2V6IGRhbnMgbGUgZMOpYmF0IGVudHJlIFNFQSBldCBTRU8gcG91ciBkw6ljb3V2cmlyIHNpIGxlIHLDqWbDqXJlbmNlbWVudCBwYXlhbnQgZXN0IHZyYWltZW50IGluZGlzcGVuc2FibGUgb3Ugc2kgdW5lIHN0cmF0w6lnaWUgU0VPIGJpZW4gZmljZWzDqWUgcGV1dCBzdWZmaXJlIMOgIHByb3B1bHNlciB2b3RyZSBwcsOpc2VuY2UgZW4gbGlnbmUuJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlTbGlkZXIoKSB7XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0UGFnZSgocHJldikgPT4gKHByZXYgPT09IGFydGljbGVzLmxlbmd0aCA/IDEgOiBwcmV2ICsgMSkpO1xyXG4gICAgfSwgNTAwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFnZVByZWNlZGFudGUgPSAoKSA9PiB7XHJcbiAgICBzZXRQYWdlKChwcmV2KSA9PiAocHJldiA9PT0gMSA/IGFydGljbGVzLmxlbmd0aCA6IHByZXYgLSAxKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFnZVN1aXZhbnRlID0gKCkgPT4ge1xyXG4gICAgc2V0UGFnZSgocHJldikgPT4gKHByZXYgPT09IGFydGljbGVzLmxlbmd0aCA/IDEgOiBwcmV2ICsgMSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGgtW2NhbGMoMTAwdmgtNzBweCldIHctZnVsbCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctcHJpbWFyeVwiPlxyXG4gICAgICB7YXJ0aWNsZXMubWFwKChhcnRpY2xlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17YXJ0aWNsZS5pZH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCAgdy1mdWxsIGgtMy80IHNjYWxlLTc1IHJvdW5kZWQtbGcgICR7XHJcbiAgICAgICAgICAgIHBhZ2UgPT09IGluZGV4ICsgMVxyXG4gICAgICAgICAgICAgID8gJ29wYWNpdHktMTAwJ1xyXG4gICAgICAgICAgICAgIDogJ29wYWNpdHktMCBwb2ludGVyLWV2ZW50cy1ub25lJ1xyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIFRpdHJlIGRlIGwnYXJ0aWNsZSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGFic29sdXRlIGxlZnQtMS8yIGJvcmRlci0yIGJvcmRlci10ZXh0Q29sb3IvMjAgLXRyYW5zbGF0ZS14LTEvMiB0b3AtMCAtdHJhbnNsYXRlLXktZnVsbCB3LWZ1bGwgcHktMyBweC02IGJnLXNlY29uZGFyeSByb3VuZGVkLXQtbGdcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIG1vYmlsZTp0ZXh0LXhsIHRyYWNraW5nLXdpZGVzdCBweS02IGZvbnQtdGl0bGVGb250IHRleHQtYmxhY2sgZm9udC1ib2xkIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBJbWFnZSBkZSBsJ2FydGljbGUgKi99XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VTaXplICBib3JkZXIteC0yIGJvcmRlci10ZXh0Q29sb3IvNTBcIlxyXG4gICAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICAgIGFsdD1cIkltYWdlIHNsaWRlXCJcclxuICAgICAgICAgICAgc3JjPXthcnRpY2xlLmltYWdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiBDb250ZW51IGRlIGwnYXJ0aWNsZSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0xLzIgYm9yZGVyLTIgIGJvcmRlci10ZXh0Q29sb3IvMjAgLXRyYW5zbGF0ZS14LTEvMiBib3R0b20tMCB0cmFuc2xhdGUteS1mdWxsIHctZnVsbCBweS0zIHB4LTYgYmctc2Vjb25kYXJ5IHJvdW5kZWQtYi1sZ1wiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtb2JpbGU6dGV4dC1iYXNlIG10LTQgcHktMyBmb250LWJvbGQgdy1mdWxsIHRleHQtY2VudGVyIHRleHQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICB7YXJ0aWNsZS5jb250ZW51fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIHsvKiBTbGlkZSBwcsOpY8OpZGVudCAqL31cclxuICAgICAgPGRpdlxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBhZ2VQcmVjZWRhbnRlfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInotMTAgYWJzb2x1dGUgZmxleCBoLTE2ICAtdHJhbnNsYXRlLXktMS8yIHRvcC0xLzIgbGVmdC0wIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgIHJvdW5kZWQtci1sZyBvdmVyZmxvdy1oaWRkZW4gYmctcHJpbWFyeS8xMCAgaG92ZXI6c2hhZG93LXRlcnRpbmFyeSAgaG92ZXI6c2hhZG93LW1kXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaG92ZXI6YmctdGVydGluYXJ5LzUwIGhvdmVyOmJvcmRlci10ZXJ0aW5hcnkgIHRyYW5zaXRpb24tdHJhbnNmb3JtIGhvdmVyOnRyYW5zbGF0ZS14LTEgbW90aW9uLXJlZHVjZTp0cmFuc2Zvcm0tbm9uZSBjdXJzb3ItcG9pbnRlciAgXCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtNCBcIlxyXG4gICAgICAgICAgICBhbHQ9XCJTbGlkZSDDoCBkcm9pdGVcIlxyXG4gICAgICAgICAgICBzcmM9XCIvbG9nby9jaXJjbGUtY2hldnJvbi1sZWZ0LXNvbGlkLnN2Z1wiXHJcbiAgICAgICAgICAgIHdpZHRoPXs0MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs0MH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIFNsaWRlIHN1aXZhbnQgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQYWdlU3VpdmFudGV9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiei0xMCBhYnNvbHV0ZSBiZy1wcmltYXJ5LzEwIGZsZXggaC0xNiBob3ZlcjpoLTEvNiAtdHJhbnNsYXRlLXktMS8yIHRvcC0xLzIgcmlnaHQtMCB0ZXh0LTJ4bCBmb250LXNlbWlib2xkICByb3VuZGVkLWwtbGcgb3ZlcmZsb3ctaGlkZGVuIGhvdmVyOnNoYWRvdy10ZXJ0aW5hcnkgIGhvdmVyOnNoYWRvdy1tZFwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGhvdmVyOmJnLXRlcnRpbmFyeS81MCBob3Zlcjpib3JkZXItdGVydGluYXJ5ICB0cmFuc2l0aW9uLXRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXgtMSBtb3Rpb24tcmVkdWNlOnRyYW5zZm9ybS1ub25lIGN1cnNvci1wb2ludGVyICBcIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteC00XCJcclxuICAgICAgICAgICAgYWx0PVwic2xpZGUgw6AgZ2F1Y2hlXCJcclxuICAgICAgICAgICAgc3JjPVwiL2xvZ28vY2lyY2xlLWNoZXZyb24tcmlnaHQtc29saWQuc3ZnXCJcclxuICAgICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezQwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsImFydGljbGVzIiwiaWQiLCJpbWFnZSIsInRpdGxlIiwiY29udGVudSIsIk15U2xpZGVyIiwicGFnZSIsInNldFBhZ2UiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldiIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVQYWdlUHJlY2VkYW50ZSIsImhhbmRsZVBhZ2VTdWl2YW50ZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJtYXAiLCJhcnRpY2xlIiwiaW5kZXgiLCJkaXYiLCJoMiIsImZpbGwiLCJhbHQiLCJzcmMiLCJwIiwib25DbGljayIsInNwYW4iLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Slider/Slider.jsx\n"));

/***/ })

});