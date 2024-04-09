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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MySlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst articles = [\n    {\n        id: \"image1\",\n        image: \"/images/cdi_freelance.webp\",\n        titleImage: \"Photo de l'article CDI ou Freelance\",\n        alt: \"Illustration CDI ou Freelance\",\n        titleArticle: \"CDI ou Freelance, comment choisir ?\",\n        contenu: \"D\\xe9couvrez les cl\\xe9s pour faire le choix crucial entre un contrat \\xe0 dur\\xe9e ind\\xe9termin\\xe9e (CDI) et le statut de freelance, pour optimiser votre carri\\xe8re professionnelle.\"\n    },\n    {\n        id: \"image2\",\n        image: \"/images/communication_webmarketing.webp\",\n        titleImage: \"Photo de l'article communication et web marketing\",\n        alt: \"Illustration communication et web marketing\",\n        titleArticle: \"Le SEA est-il essentiel, ou le SEO seul peut-il \\xeatre ad\\xe9quat ?\",\n        contenu: \"Plongez dans le d\\xe9bat entre SEA et SEO pour d\\xe9couvrir si le r\\xe9f\\xe9rencement payant est vraiment indispensable ou si une strat\\xe9gie SEO bien ficel\\xe9e peut suffire \\xe0 propulser votre pr\\xe9sence en ligne.\"\n    }\n];\nfunction MySlider() {\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        /* Slide automatique au bout d'un certain temps*/ const interval = setInterval(()=>{\n            setPage((prev)=>prev === articles.length ? 1 : prev + 1);\n        }, 5000);\n        /* Evite le slide automatique si on viens de changer manuellement */ return ()=>clearInterval(interval);\n    }, []);\n    /*Page précédente*/ const handlePagePrecedante = ()=>{\n        setPage((prev)=>prev === 1 ? articles.length : prev - 1);\n    };\n    /*Page suivante*/ const handlePageSuivante = ()=>{\n        setPage((prev)=>prev === articles.length ? 1 : prev + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"relative flex h-[calc(100vh-70px)] w-full flex-col justify-center items-center bg-primary\",\n        children: [\n            articles.map((article, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-3/4 scale-75 rounded-lg transition-opacity duration-500 \".concat(page === index + 1 ? \"opacity-100\" : \"opacity-0 pointer-events-none\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" absolute left-1/2  border-2 border-textColor/20 -translate-x-1/2 top-0 -translate-y-full w-full py-3 px-6 bg-secondary rounded-t-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-4xl mobile:text-xl tracking-widest py-6 font-titleFont text-black font-bold text-center\",\n                                children: article.titleArticle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\Nouveau dossier (2)\\\\ccp1_brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\Nouveau dossier (2)\\\\ccp1_brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"h-full w-full object-cover tablette:object-cover max-w-full border-x-2 border-textColor/50\",\n                            priority: true,\n                            src: article.image,\n                            alt: article.alt,\n                            title: article.titleImage,\n                            width: 1800,\n                            height: 580\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\Nouveau dossier (2)\\\\ccp1_brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute  left-1/2 border-2  border-textColor/20 -translate-x-1/2 bottom-0 translate-y-full w-full py-3 px-6 bg-secondary rounded-b-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl mobile:text-base mt-4 py-3 font-bold w-full text-center text-black\",\n                                children: article.contenu\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\Nouveau dossier (2)\\\\ccp1_brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\Nouveau dossier (2)\\\\ccp1_brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, article.id, true, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\Nouveau dossier (2)\\\\ccp1_brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handlePagePrecedante,\n                className: \"z-10 absolute flex h-16  -translate-y-1/2 top-1/2 left-0 text-2xl font-semibold  rounded-r-lg overflow-hidden bg-primary/10  hover:shadow-tertinary  hover:shadow-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex hover:bg-tertinary/50 hover:border-tertinary py-1 transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer  \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"mx-4 w-auto h-auto\",\n                        alt: \"Slide \\xe0 droite\",\n                        src: \"/logo/circle-chevron-left-solid.svg\",\n                        width: 40,\n                        height: 40\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\Nouveau dossier (2)\\\\ccp1_brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\Nouveau dossier (2)\\\\ccp1_brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\Nouveau dossier (2)\\\\ccp1_brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handlePageSuivante,\n                className: \"z-10 absolute bg-primary/10 flex h-16 -translate-y-1/2 top-1/2 right-0 text-2xl font-semibold  rounded-l-lg overflow-hidden hover:shadow-tertinary  hover:shadow-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex hover:bg-tertinary/50 py-1  hover:border-tertinary  transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer  \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"mx-4 w-auto h-auto\",\n                        alt: \"slide \\xe0 gauche\",\n                        src: \"/logo/circle-chevron-right-solid.svg\",\n                        width: 40,\n                        height: 40\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\Nouveau dossier (2)\\\\ccp1_brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\Nouveau dossier (2)\\\\ccp1_brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\Nouveau dossier (2)\\\\ccp1_brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\Nouveau dossier (2)\\\\ccp1_brana\\\\src\\\\components\\\\Slider\\\\Slider.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(MySlider, \"LMxNfAY58b6loOOsHmH6zd80VGE=\");\n_c = MySlider;\nvar _c;\n$RefreshReg$(_c, \"MySlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NsaWRlci9TbGlkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDbUQ7QUFDcEI7QUFFL0IsTUFBTUksV0FBVztJQUNmO1FBQ0VDLElBQUk7UUFDSkMsT0FBTztRQUNQQyxZQUFZO1FBQ1pDLEtBQUs7UUFDTEMsY0FBYztRQUNkQyxTQUNFO0lBQ0o7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsWUFBWTtRQUNaQyxLQUFLO1FBQ0xDLGNBQ0U7UUFDRkMsU0FDRTtJQUNKO0NBQ0Q7QUFFYyxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO0lBRWpDRCxnREFBU0EsQ0FBQztRQUNSLCtDQUErQyxHQUMvQyxNQUFNYSxXQUFXQyxZQUFZO1lBQzNCRixRQUFRLENBQUNHLE9BQVVBLFNBQVNaLFNBQVNhLE1BQU0sR0FBRyxJQUFJRCxPQUFPO1FBQzNELEdBQUc7UUFDSCxrRUFBa0UsR0FDbEUsT0FBTyxJQUFNRSxjQUFjSjtJQUM3QixHQUFHLEVBQUU7SUFDTCxpQkFBaUIsR0FDakIsTUFBTUssdUJBQXVCO1FBQzNCTixRQUFRLENBQUNHLE9BQVVBLFNBQVMsSUFBSVosU0FBU2EsTUFBTSxHQUFHRCxPQUFPO0lBQzNEO0lBQ0EsZUFBZSxHQUNmLE1BQU1JLHFCQUFxQjtRQUN6QlAsUUFBUSxDQUFDRyxPQUFVQSxTQUFTWixTQUFTYSxNQUFNLEdBQUcsSUFBSUQsT0FBTztJQUMzRDtJQUVBLHFCQUNFLDhEQUFDSztRQUFRQyxXQUFVOztZQUNoQmxCLFNBQVNtQixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLDhEQUFDQztvQkFFQ0osV0FBVywwSUFJVixPQUhDVixTQUFTYSxRQUFRLElBQ2IsZ0JBQ0E7O3NDQUlOLDhEQUFDQzs0QkFBSUosV0FBVTtzQ0FDYiw0RUFBQ0s7Z0NBQUdMLFdBQVU7MENBQ1hFLFFBQVFmLFlBQVk7Ozs7Ozs7Ozs7O3NDQUl6Qiw4REFBQ04sa0RBQUtBOzRCQUNKbUIsV0FBVTs0QkFDVk0sUUFBUTs0QkFDUkMsS0FBS0wsUUFBUWxCLEtBQUs7NEJBQ2xCRSxLQUFLZ0IsUUFBUWhCLEdBQUc7NEJBQ2hCc0IsT0FBT04sUUFBUWpCLFVBQVU7NEJBQ3pCd0IsT0FBTzs0QkFDUEMsUUFBUTs7Ozs7O3NDQUdWLDhEQUFDTjs0QkFBSUosV0FBVTtzQ0FDYiw0RUFBQ1c7Z0NBQUVYLFdBQVU7MENBQ1ZFLFFBQVFkLE9BQU87Ozs7Ozs7Ozs7OzttQkExQmZjLFFBQVFuQixFQUFFOzs7OzswQkFnQ25CLDhEQUFDcUI7Z0JBQ0NRLFNBQVNmO2dCQUNURyxXQUFVOzBCQUVWLDRFQUFDYTtvQkFBS2IsV0FBVTs4QkFDZCw0RUFBQ25CLGtEQUFLQTt3QkFDSm1CLFdBQVU7d0JBQ1ZkLEtBQUk7d0JBQ0pxQixLQUFJO3dCQUNKRSxPQUFPO3dCQUNQQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OzBCQUtkLDhEQUFDTjtnQkFDQ1EsU0FBU2Q7Z0JBQ1RFLFdBQVU7MEJBRVYsNEVBQUNhO29CQUFLYixXQUFVOzhCQUNkLDRFQUFDbkIsa0RBQUtBO3dCQUNKbUIsV0FBVTt3QkFDVmQsS0FBSTt3QkFDSnFCLEtBQUk7d0JBQ0pFLE9BQU87d0JBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEI7R0F2RndCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5qc3g/NTZkMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5jb25zdCBhcnRpY2xlcyA9IFtcclxuICB7XHJcbiAgICBpZDogJ2ltYWdlMScsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvY2RpX2ZyZWVsYW5jZS53ZWJwJyxcclxuICAgIHRpdGxlSW1hZ2U6IFwiUGhvdG8gZGUgbCdhcnRpY2xlIENESSBvdSBGcmVlbGFuY2VcIixcclxuICAgIGFsdDogJ0lsbHVzdHJhdGlvbiBDREkgb3UgRnJlZWxhbmNlJyxcclxuICAgIHRpdGxlQXJ0aWNsZTogJ0NESSBvdSBGcmVlbGFuY2UsIGNvbW1lbnQgY2hvaXNpciA/JyxcclxuICAgIGNvbnRlbnU6XHJcbiAgICAgICdEw6ljb3V2cmV6IGxlcyBjbMOpcyBwb3VyIGZhaXJlIGxlIGNob2l4IGNydWNpYWwgZW50cmUgdW4gY29udHJhdCDDoCBkdXLDqWUgaW5kw6l0ZXJtaW7DqWUgKENESSkgZXQgbGUgc3RhdHV0IGRlIGZyZWVsYW5jZSwgcG91ciBvcHRpbWlzZXIgdm90cmUgY2FycmnDqHJlIHByb2Zlc3Npb25uZWxsZS4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdpbWFnZTInLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2NvbW11bmljYXRpb25fd2VibWFya2V0aW5nLndlYnAnLFxyXG4gICAgdGl0bGVJbWFnZTogXCJQaG90byBkZSBsJ2FydGljbGUgY29tbXVuaWNhdGlvbiBldCB3ZWIgbWFya2V0aW5nXCIsXHJcbiAgICBhbHQ6ICdJbGx1c3RyYXRpb24gY29tbXVuaWNhdGlvbiBldCB3ZWIgbWFya2V0aW5nJyxcclxuICAgIHRpdGxlQXJ0aWNsZTpcclxuICAgICAgJ0xlIFNFQSBlc3QtaWwgZXNzZW50aWVsLCBvdSBsZSBTRU8gc2V1bCBwZXV0LWlsIMOqdHJlIGFkw6lxdWF0ID8nLFxyXG4gICAgY29udGVudTpcclxuICAgICAgJ1Bsb25nZXogZGFucyBsZSBkw6liYXQgZW50cmUgU0VBIGV0IFNFTyBwb3VyIGTDqWNvdXZyaXIgc2kgbGUgcsOpZsOpcmVuY2VtZW50IHBheWFudCBlc3QgdnJhaW1lbnQgaW5kaXNwZW5zYWJsZSBvdSBzaSB1bmUgc3RyYXTDqWdpZSBTRU8gYmllbiBmaWNlbMOpZSBwZXV0IHN1ZmZpcmUgw6AgcHJvcHVsc2VyIHZvdHJlIHByw6lzZW5jZSBlbiBsaWduZS4nLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeVNsaWRlcigpIHtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8qIFNsaWRlIGF1dG9tYXRpcXVlIGF1IGJvdXQgZCd1biBjZXJ0YWluIHRlbXBzKi9cclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBzZXRQYWdlKChwcmV2KSA9PiAocHJldiA9PT0gYXJ0aWNsZXMubGVuZ3RoID8gMSA6IHByZXYgKyAxKSk7XHJcbiAgICB9LCA1MDAwKTtcclxuICAgIC8qIEV2aXRlIGxlIHNsaWRlIGF1dG9tYXRpcXVlIHNpIG9uIHZpZW5zIGRlIGNoYW5nZXIgbWFudWVsbGVtZW50ICovXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW10pO1xyXG4gIC8qUGFnZSBwcsOpY8OpZGVudGUqL1xyXG4gIGNvbnN0IGhhbmRsZVBhZ2VQcmVjZWRhbnRlID0gKCkgPT4ge1xyXG4gICAgc2V0UGFnZSgocHJldikgPT4gKHByZXYgPT09IDEgPyBhcnRpY2xlcy5sZW5ndGggOiBwcmV2IC0gMSkpO1xyXG4gIH07XHJcbiAgLypQYWdlIHN1aXZhbnRlKi9cclxuICBjb25zdCBoYW5kbGVQYWdlU3VpdmFudGUgPSAoKSA9PiB7XHJcbiAgICBzZXRQYWdlKChwcmV2KSA9PiAocHJldiA9PT0gYXJ0aWNsZXMubGVuZ3RoID8gMSA6IHByZXYgKyAxKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaC1bY2FsYygxMDB2aC03MHB4KV0gdy1mdWxsIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1wcmltYXJ5XCI+XHJcbiAgICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXthcnRpY2xlLmlkfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgdG9wLTEvMiBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIHctZnVsbCBoLTMvNCBzY2FsZS03NSByb3VuZGVkLWxnIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi01MDAgJHtcclxuICAgICAgICAgICAgcGFnZSA9PT0gaW5kZXggKyAxXHJcbiAgICAgICAgICAgICAgPyAnb3BhY2l0eS0xMDAnXHJcbiAgICAgICAgICAgICAgOiAnb3BhY2l0eS0wIHBvaW50ZXItZXZlbnRzLW5vbmUnXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyogVGl0cmUgZGUgbCdhcnRpY2xlICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYWJzb2x1dGUgbGVmdC0xLzIgIGJvcmRlci0yIGJvcmRlci10ZXh0Q29sb3IvMjAgLXRyYW5zbGF0ZS14LTEvMiB0b3AtMCAtdHJhbnNsYXRlLXktZnVsbCB3LWZ1bGwgcHktMyBweC02IGJnLXNlY29uZGFyeSByb3VuZGVkLXQtbGdcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIG1vYmlsZTp0ZXh0LXhsIHRyYWNraW5nLXdpZGVzdCBweS02IGZvbnQtdGl0bGVGb250IHRleHQtYmxhY2sgZm9udC1ib2xkIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAge2FydGljbGUudGl0bGVBcnRpY2xlfVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogSW1hZ2UgZGUgbCdhcnRpY2xlICovfVxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyIHRhYmxldHRlOm9iamVjdC1jb3ZlciBtYXgtdy1mdWxsIGJvcmRlci14LTIgYm9yZGVyLXRleHRDb2xvci81MFwiXHJcbiAgICAgICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgICAgIHNyYz17YXJ0aWNsZS5pbWFnZX1cclxuICAgICAgICAgICAgYWx0PXthcnRpY2xlLmFsdH1cclxuICAgICAgICAgICAgdGl0bGU9e2FydGljbGUudGl0bGVJbWFnZX1cclxuICAgICAgICAgICAgd2lkdGg9ezE4MDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NTgwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiBDb250ZW51IGRlIGwnYXJ0aWNsZSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgIGxlZnQtMS8yIGJvcmRlci0yICBib3JkZXItdGV4dENvbG9yLzIwIC10cmFuc2xhdGUteC0xLzIgYm90dG9tLTAgdHJhbnNsYXRlLXktZnVsbCB3LWZ1bGwgcHktMyBweC02IGJnLXNlY29uZGFyeSByb3VuZGVkLWItbGdcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgbW9iaWxlOnRleHQtYmFzZSBtdC00IHB5LTMgZm9udC1ib2xkIHctZnVsbCB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAge2FydGljbGUuY29udGVudX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICB7LyogU2xpZGUgcHLDqWPDqWRlbnQgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQYWdlUHJlY2VkYW50ZX1cclxuICAgICAgICBjbGFzc05hbWU9XCJ6LTEwIGFic29sdXRlIGZsZXggaC0xNiAgLXRyYW5zbGF0ZS15LTEvMiB0b3AtMS8yIGxlZnQtMCB0ZXh0LTJ4bCBmb250LXNlbWlib2xkICByb3VuZGVkLXItbGcgb3ZlcmZsb3ctaGlkZGVuIGJnLXByaW1hcnkvMTAgIGhvdmVyOnNoYWRvdy10ZXJ0aW5hcnkgIGhvdmVyOnNoYWRvdy1tZFwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGhvdmVyOmJnLXRlcnRpbmFyeS81MCBob3Zlcjpib3JkZXItdGVydGluYXJ5IHB5LTEgdHJhbnNpdGlvbi10cmFuc2Zvcm0gaG92ZXI6dHJhbnNsYXRlLXgtMSBtb3Rpb24tcmVkdWNlOnRyYW5zZm9ybS1ub25lIGN1cnNvci1wb2ludGVyICBcIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteC00IHctYXV0byBoLWF1dG9cIlxyXG4gICAgICAgICAgICBhbHQ9XCJTbGlkZSDDoCBkcm9pdGVcIlxyXG4gICAgICAgICAgICBzcmM9XCIvbG9nby9jaXJjbGUtY2hldnJvbi1sZWZ0LXNvbGlkLnN2Z1wiXHJcbiAgICAgICAgICAgIHdpZHRoPXs0MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs0MH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIFNsaWRlIHN1aXZhbnQgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQYWdlU3VpdmFudGV9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiei0xMCBhYnNvbHV0ZSBiZy1wcmltYXJ5LzEwIGZsZXggaC0xNiAtdHJhbnNsYXRlLXktMS8yIHRvcC0xLzIgcmlnaHQtMCB0ZXh0LTJ4bCBmb250LXNlbWlib2xkICByb3VuZGVkLWwtbGcgb3ZlcmZsb3ctaGlkZGVuIGhvdmVyOnNoYWRvdy10ZXJ0aW5hcnkgIGhvdmVyOnNoYWRvdy1tZFwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGhvdmVyOmJnLXRlcnRpbmFyeS81MCBweS0xICBob3Zlcjpib3JkZXItdGVydGluYXJ5ICB0cmFuc2l0aW9uLXRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXgtMSBtb3Rpb24tcmVkdWNlOnRyYW5zZm9ybS1ub25lIGN1cnNvci1wb2ludGVyICBcIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteC00IHctYXV0byBoLWF1dG9cIlxyXG4gICAgICAgICAgICBhbHQ9XCJzbGlkZSDDoCBnYXVjaGVcIlxyXG4gICAgICAgICAgICBzcmM9XCIvbG9nby9jaXJjbGUtY2hldnJvbi1yaWdodC1zb2xpZC5zdmdcIlxyXG4gICAgICAgICAgICB3aWR0aD17NDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiYXJ0aWNsZXMiLCJpZCIsImltYWdlIiwidGl0bGVJbWFnZSIsImFsdCIsInRpdGxlQXJ0aWNsZSIsImNvbnRlbnUiLCJNeVNsaWRlciIsInBhZ2UiLCJzZXRQYWdlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiaGFuZGxlUGFnZVByZWNlZGFudGUiLCJoYW5kbGVQYWdlU3VpdmFudGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibWFwIiwiYXJ0aWNsZSIsImluZGV4IiwiZGl2IiwiaDIiLCJwcmlvcml0eSIsInNyYyIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJwIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Slider/Slider.jsx\n"));

/***/ })

});