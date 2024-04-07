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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MySlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst articles = [\n    {\n        id: \"image1\",\n        image: \"/images/cdi_freelance.webp\",\n        titleImage: \"Photo de l'article CDI ou Freelance\",\n        alt: \"Illustration CDI ou Freelance\",\n        titleArticle: \"CDI ou Freelance, comment choisir ?\",\n        contenu: \"D\\xe9couvrez les cl\\xe9s pour faire le choix crucial entre un contrat \\xe0 dur\\xe9e ind\\xe9termin\\xe9e (CDI) et le statut de freelance, pour optimiser votre carri\\xe8re professionnelle.\"\n    },\n    {\n        id: \"image2\",\n        image: \"/images/communication_webmarketing.webp\",\n        titleImage: \"Photo de l'article communication et web marketing\",\n        alt: \"Illustration communication et web marketing\",\n        titleArticle: \"Le SEA est-il essentiel, ou le SEO seul peut-il \\xeatre ad\\xe9quat ?\",\n        contenu: \"Plongez dans le d\\xe9bat entre SEA et SEO pour d\\xe9couvrir si le r\\xe9f\\xe9rencement payant est vraiment indispensable ou si une strat\\xe9gie SEO bien ficel\\xe9e peut suffire \\xe0 propulser votre pr\\xe9sence en ligne.\"\n    }\n];\nfunction MySlider() {\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setPage((prev)=>prev === articles.length ? 1 : prev + 1);\n        }, 5000);\n        return ()=>clearInterval(interval);\n    }, []);\n    const handlePagePrecedante = ()=>{\n        setPage((prev)=>prev === 1 ? articles.length : prev - 1);\n    };\n    const handlePageSuivante = ()=>{\n        setPage((prev)=>prev === articles.length ? 1 : prev + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"relative flex h-[calc(100vh-70px)] w-full flex-col justify-center items-center bg-primary\",\n        children: [\n            articles.map((article, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-3/4 scale-75 rounded-lg transition-opacity duration-500 \".concat(page === index + 1 ? \"opacity-100\" : \"opacity-0 pointer-events-none\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" absolute left-1/2  border-2 border-textColor/20 -translate-x-1/2 top-0 -translate-y-full w-full py-3 px-6 bg-secondary rounded-t-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-4xl mobile:text-xl tracking-widest py-6 font-titleFont text-black font-bold text-center\",\n                                children: article.titleArticle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"h-full  object-cover tablette:object-cover max-w-full border-x-2 border-textColor/50\",\n                            priority: true,\n                            src: article.image,\n                            alt: article.alt,\n                            title: article.titleImage,\n                            width: 1800,\n                            height: 580\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute  left-1/2 border-2  border-textColor/20 -translate-x-1/2 bottom-0 translate-y-full w-full py-3 px-6 bg-secondary rounded-b-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl mobile:text-base mt-4 py-3 font-bold w-full text-center text-black\",\n                                children: article.contenu\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, article.id, true, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handlePagePrecedante,\n                className: \"z-10 absolute flex h-16  -translate-y-1/2 top-1/2 left-0 text-2xl font-semibold  rounded-r-lg overflow-hidden bg-primary/10  hover:shadow-tertinary  hover:shadow-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex hover:bg-tertinary/50 hover:border-tertinary  transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer  \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"mx-4 w-auto h-auto\",\n                        alt: \"Slide \\xe0 droite\",\n                        src: \"/logo/circle-chevron-left-solid.svg\",\n                        width: 40,\n                        height: 40\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handlePageSuivante,\n                className: \"z-10 absolute bg-primary/10 flex h-16 hover:h-1/6 -translate-y-1/2 top-1/2 right-0 text-2xl font-semibold  rounded-l-lg overflow-hidden hover:shadow-tertinary  hover:shadow-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex hover:bg-tertinary/50 hover:border-tertinary  transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer  \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"mx-4 w-auto h-auto\",\n                        alt: \"slide \\xe0 gauche\",\n                        src: \"/logo/circle-chevron-right-solid.svg\",\n                        width: 40,\n                        height: 40\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(MySlider, \"LMxNfAY58b6loOOsHmH6zd80VGE=\");\n_c = MySlider;\nvar _c;\n$RefreshReg$(_c, \"MySlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NsaWRlci9TbGlkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDbUQ7QUFDcEI7QUFFL0IsTUFBTUksV0FBVztJQUNmO1FBQ0VDLElBQUk7UUFDSkMsT0FBTztRQUNQQyxZQUFZO1FBQ1pDLEtBQUs7UUFDTEMsY0FBYztRQUNkQyxTQUNFO0lBQ0o7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsWUFBWTtRQUNaQyxLQUFLO1FBQ0xDLGNBQ0U7UUFDRkMsU0FDRTtJQUNKO0NBQ0Q7QUFFYyxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO0lBRWpDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1hLFdBQVdDLFlBQVk7WUFDM0JGLFFBQVEsQ0FBQ0csT0FBVUEsU0FBU1osU0FBU2EsTUFBTSxHQUFHLElBQUlELE9BQU87UUFDM0QsR0FBRztRQUVILE9BQU8sSUFBTUUsY0FBY0o7SUFDN0IsR0FBRyxFQUFFO0lBRUwsTUFBTUssdUJBQXVCO1FBQzNCTixRQUFRLENBQUNHLE9BQVVBLFNBQVMsSUFBSVosU0FBU2EsTUFBTSxHQUFHRCxPQUFPO0lBQzNEO0lBRUEsTUFBTUkscUJBQXFCO1FBQ3pCUCxRQUFRLENBQUNHLE9BQVVBLFNBQVNaLFNBQVNhLE1BQU0sR0FBRyxJQUFJRCxPQUFPO0lBQzNEO0lBRUEscUJBQ0UsOERBQUNLO1FBQVFDLFdBQVU7O1lBQ2hCbEIsU0FBU21CLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUNDO29CQUVDSixXQUFXLDBJQUlWLE9BSENWLFNBQVNhLFFBQVEsSUFDYixnQkFDQTs7c0NBSU4sOERBQUNDOzRCQUFJSixXQUFVO3NDQUNiLDRFQUFDSztnQ0FBR0wsV0FBVTswQ0FDWEUsUUFBUWYsWUFBWTs7Ozs7Ozs7Ozs7c0NBSXpCLDhEQUFDTixrREFBS0E7NEJBQ0ptQixXQUFVOzRCQUNWTSxRQUFROzRCQUNSQyxLQUFLTCxRQUFRbEIsS0FBSzs0QkFDbEJFLEtBQUtnQixRQUFRaEIsR0FBRzs0QkFDaEJzQixPQUFPTixRQUFRakIsVUFBVTs0QkFDekJ3QixPQUFPOzRCQUNQQyxRQUFROzs7Ozs7c0NBR1YsOERBQUNOOzRCQUFJSixXQUFVO3NDQUNiLDRFQUFDVztnQ0FBRVgsV0FBVTswQ0FDVkUsUUFBUWQsT0FBTzs7Ozs7Ozs7Ozs7O21CQTFCZmMsUUFBUW5CLEVBQUU7Ozs7OzBCQWdDbkIsOERBQUNxQjtnQkFDQ1EsU0FBU2Y7Z0JBQ1RHLFdBQVU7MEJBRVYsNEVBQUNhO29CQUFLYixXQUFVOzhCQUNkLDRFQUFDbkIsa0RBQUtBO3dCQUNKbUIsV0FBVTt3QkFDVmQsS0FBSTt3QkFDSnFCLEtBQUk7d0JBQ0pFLE9BQU87d0JBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2QsOERBQUNOO2dCQUNDUSxTQUFTZDtnQkFDVEUsV0FBVTswQkFFViw0RUFBQ2E7b0JBQUtiLFdBQVU7OEJBQ2QsNEVBQUNuQixrREFBS0E7d0JBQ0ptQixXQUFVO3dCQUNWZCxLQUFJO3dCQUNKcUIsS0FBSTt3QkFDSkUsT0FBTzt3QkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQjtHQXRGd0JyQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyLmpzeD81NmQxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmNvbnN0IGFydGljbGVzID0gW1xyXG4gIHtcclxuICAgIGlkOiAnaW1hZ2UxJyxcclxuICAgIGltYWdlOiAnL2ltYWdlcy9jZGlfZnJlZWxhbmNlLndlYnAnLFxyXG4gICAgdGl0bGVJbWFnZTogXCJQaG90byBkZSBsJ2FydGljbGUgQ0RJIG91IEZyZWVsYW5jZVwiLFxyXG4gICAgYWx0OiAnSWxsdXN0cmF0aW9uIENESSBvdSBGcmVlbGFuY2UnLFxyXG4gICAgdGl0bGVBcnRpY2xlOiAnQ0RJIG91IEZyZWVsYW5jZSwgY29tbWVudCBjaG9pc2lyID8nLFxyXG4gICAgY29udGVudTpcclxuICAgICAgJ0TDqWNvdXZyZXogbGVzIGNsw6lzIHBvdXIgZmFpcmUgbGUgY2hvaXggY3J1Y2lhbCBlbnRyZSB1biBjb250cmF0IMOgIGR1csOpZSBpbmTDqXRlcm1pbsOpZSAoQ0RJKSBldCBsZSBzdGF0dXQgZGUgZnJlZWxhbmNlLCBwb3VyIG9wdGltaXNlciB2b3RyZSBjYXJyacOocmUgcHJvZmVzc2lvbm5lbGxlLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2ltYWdlMicsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvY29tbXVuaWNhdGlvbl93ZWJtYXJrZXRpbmcud2VicCcsXHJcbiAgICB0aXRsZUltYWdlOiBcIlBob3RvIGRlIGwnYXJ0aWNsZSBjb21tdW5pY2F0aW9uIGV0IHdlYiBtYXJrZXRpbmdcIixcclxuICAgIGFsdDogJ0lsbHVzdHJhdGlvbiBjb21tdW5pY2F0aW9uIGV0IHdlYiBtYXJrZXRpbmcnLFxyXG4gICAgdGl0bGVBcnRpY2xlOlxyXG4gICAgICAnTGUgU0VBIGVzdC1pbCBlc3NlbnRpZWwsIG91IGxlIFNFTyBzZXVsIHBldXQtaWwgw6p0cmUgYWTDqXF1YXQgPycsXHJcbiAgICBjb250ZW51OlxyXG4gICAgICAnUGxvbmdleiBkYW5zIGxlIGTDqWJhdCBlbnRyZSBTRUEgZXQgU0VPIHBvdXIgZMOpY291dnJpciBzaSBsZSByw6lmw6lyZW5jZW1lbnQgcGF5YW50IGVzdCB2cmFpbWVudCBpbmRpc3BlbnNhYmxlIG91IHNpIHVuZSBzdHJhdMOpZ2llIFNFTyBiaWVuIGZpY2Vsw6llIHBldXQgc3VmZmlyZSDDoCBwcm9wdWxzZXIgdm90cmUgcHLDqXNlbmNlIGVuIGxpZ25lLicsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15U2xpZGVyKCkge1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHNldFBhZ2UoKHByZXYpID0+IChwcmV2ID09PSBhcnRpY2xlcy5sZW5ndGggPyAxIDogcHJldiArIDEpKTtcclxuICAgIH0sIDUwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VQcmVjZWRhbnRlID0gKCkgPT4ge1xyXG4gICAgc2V0UGFnZSgocHJldikgPT4gKHByZXYgPT09IDEgPyBhcnRpY2xlcy5sZW5ndGggOiBwcmV2IC0gMSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VTdWl2YW50ZSA9ICgpID0+IHtcclxuICAgIHNldFBhZ2UoKHByZXYpID0+IChwcmV2ID09PSBhcnRpY2xlcy5sZW5ndGggPyAxIDogcHJldiArIDEpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLVtjYWxjKDEwMHZoLTcwcHgpXSB3LWZ1bGwgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLXByaW1hcnlcIj5cclxuICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e2FydGljbGUuaWR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgdy1mdWxsIGgtMy80IHNjYWxlLTc1IHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTUwMCAke1xyXG4gICAgICAgICAgICBwYWdlID09PSBpbmRleCArIDFcclxuICAgICAgICAgICAgICA/ICdvcGFjaXR5LTEwMCdcclxuICAgICAgICAgICAgICA6ICdvcGFjaXR5LTAgcG9pbnRlci1ldmVudHMtbm9uZSdcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiBUaXRyZSBkZSBsJ2FydGljbGUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBhYnNvbHV0ZSBsZWZ0LTEvMiAgYm9yZGVyLTIgYm9yZGVyLXRleHRDb2xvci8yMCAtdHJhbnNsYXRlLXgtMS8yIHRvcC0wIC10cmFuc2xhdGUteS1mdWxsIHctZnVsbCBweS0zIHB4LTYgYmctc2Vjb25kYXJ5IHJvdW5kZWQtdC1sZ1wiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgbW9iaWxlOnRleHQteGwgdHJhY2tpbmctd2lkZXN0IHB5LTYgZm9udC10aXRsZUZvbnQgdGV4dC1ibGFjayBmb250LWJvbGQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZUFydGljbGV9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBJbWFnZSBkZSBsJ2FydGljbGUgKi99XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsICBvYmplY3QtY292ZXIgdGFibGV0dGU6b2JqZWN0LWNvdmVyIG1heC13LWZ1bGwgYm9yZGVyLXgtMiBib3JkZXItdGV4dENvbG9yLzUwXCJcclxuICAgICAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICAgICAgc3JjPXthcnRpY2xlLmltYWdlfVxyXG4gICAgICAgICAgICBhbHQ9e2FydGljbGUuYWx0fVxyXG4gICAgICAgICAgICB0aXRsZT17YXJ0aWNsZS50aXRsZUltYWdlfVxyXG4gICAgICAgICAgICB3aWR0aD17MTgwMH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs1ODB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIENvbnRlbnUgZGUgbCdhcnRpY2xlICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAgbGVmdC0xLzIgYm9yZGVyLTIgIGJvcmRlci10ZXh0Q29sb3IvMjAgLXRyYW5zbGF0ZS14LTEvMiBib3R0b20tMCB0cmFuc2xhdGUteS1mdWxsIHctZnVsbCBweS0zIHB4LTYgYmctc2Vjb25kYXJ5IHJvdW5kZWQtYi1sZ1wiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtb2JpbGU6dGV4dC1iYXNlIG10LTQgcHktMyBmb250LWJvbGQgdy1mdWxsIHRleHQtY2VudGVyIHRleHQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICB7YXJ0aWNsZS5jb250ZW51fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIHsvKiBTbGlkZSBwcsOpY8OpZGVudCAqL31cclxuICAgICAgPGRpdlxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBhZ2VQcmVjZWRhbnRlfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInotMTAgYWJzb2x1dGUgZmxleCBoLTE2ICAtdHJhbnNsYXRlLXktMS8yIHRvcC0xLzIgbGVmdC0wIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgIHJvdW5kZWQtci1sZyBvdmVyZmxvdy1oaWRkZW4gYmctcHJpbWFyeS8xMCAgaG92ZXI6c2hhZG93LXRlcnRpbmFyeSAgaG92ZXI6c2hhZG93LW1kXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaG92ZXI6YmctdGVydGluYXJ5LzUwIGhvdmVyOmJvcmRlci10ZXJ0aW5hcnkgIHRyYW5zaXRpb24tdHJhbnNmb3JtIGhvdmVyOnRyYW5zbGF0ZS14LTEgbW90aW9uLXJlZHVjZTp0cmFuc2Zvcm0tbm9uZSBjdXJzb3ItcG9pbnRlciAgXCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtNCB3LWF1dG8gaC1hdXRvXCJcclxuICAgICAgICAgICAgYWx0PVwiU2xpZGUgw6AgZHJvaXRlXCJcclxuICAgICAgICAgICAgc3JjPVwiL2xvZ28vY2lyY2xlLWNoZXZyb24tbGVmdC1zb2xpZC5zdmdcIlxyXG4gICAgICAgICAgICB3aWR0aD17NDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBTbGlkZSBzdWl2YW50ICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlUGFnZVN1aXZhbnRlfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInotMTAgYWJzb2x1dGUgYmctcHJpbWFyeS8xMCBmbGV4IGgtMTYgaG92ZXI6aC0xLzYgLXRyYW5zbGF0ZS15LTEvMiB0b3AtMS8yIHJpZ2h0LTAgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCAgcm91bmRlZC1sLWxnIG92ZXJmbG93LWhpZGRlbiBob3ZlcjpzaGFkb3ctdGVydGluYXJ5ICBob3ZlcjpzaGFkb3ctbWRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBob3ZlcjpiZy10ZXJ0aW5hcnkvNTAgaG92ZXI6Ym9yZGVyLXRlcnRpbmFyeSAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS14LTEgbW90aW9uLXJlZHVjZTp0cmFuc2Zvcm0tbm9uZSBjdXJzb3ItcG9pbnRlciAgXCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtNCB3LWF1dG8gaC1hdXRvXCJcclxuICAgICAgICAgICAgYWx0PVwic2xpZGUgw6AgZ2F1Y2hlXCJcclxuICAgICAgICAgICAgc3JjPVwiL2xvZ28vY2lyY2xlLWNoZXZyb24tcmlnaHQtc29saWQuc3ZnXCJcclxuICAgICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezQwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsImFydGljbGVzIiwiaWQiLCJpbWFnZSIsInRpdGxlSW1hZ2UiLCJhbHQiLCJ0aXRsZUFydGljbGUiLCJjb250ZW51IiwiTXlTbGlkZXIiLCJwYWdlIiwic2V0UGFnZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2IiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZVBhZ2VQcmVjZWRhbnRlIiwiaGFuZGxlUGFnZVN1aXZhbnRlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsIm1hcCIsImFydGljbGUiLCJpbmRleCIsImRpdiIsImgyIiwicHJpb3JpdHkiLCJzcmMiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwicCIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Slider/Slider.jsx\n"));

/***/ })

});