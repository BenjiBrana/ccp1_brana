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

/***/ "(app-pages-browser)/./src/components/Faq/Faq.jsx":
/*!************************************!*\
  !*** ./src/components/Faq/Faq.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Faq; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst faqs = [\n    {\n        id: \"faq1\",\n        title: \"Pourquoi est-ce important d’avoir un conseil en transformation num\\xe9rique ?\",\n        contenu: \"Le conseil en transformation num\\xe9rique est crucial car il aide les entreprises \\xe0 int\\xe9grer efficacement les technologies num\\xe9riques dans leurs op\\xe9rations quotidiennes. Cela peut conduire \\xe0 une am\\xe9lioration de l’efficacit\\xe9, une augmentation de la productivit\\xe9 et une comp\\xe9titivit\\xe9 accrue sur le march\\xe9.\"\n    },\n    {\n        id: \"faq2\",\n        title: \"Pourquoi est-ce important de faire un audit aux entreprises ?\",\n        contenu: \"Un audit d’entreprise est important car il fournit une \\xe9valuation ind\\xe9pendante des processus et des contr\\xf4les financiers d’une entreprise. Cela permet de s’assurer que l’entreprise est g\\xe9r\\xe9e efficacement et en toute s\\xe9curit\\xe9, ce qui peut renforcer la confiance des investisseurs et des parties prenantes.\"\n    },\n    {\n        id: \"faq3\",\n        title: \"Pourquoi est-ce important d’avoir une strat\\xe9gie de communication et de webmarketing ?\",\n        contenu: \"Avoir une strat\\xe9gie de communication et de webmarketing est essentiel car elle permet \\xe0 une entreprise de toucher efficacement son public cible, de promouvoir ses produits ou services et de renforcer sa pr\\xe9sence en ligne. Cela peut conduire \\xe0 une augmentation de la notori\\xe9t\\xe9 de la marque et \\xe0 une croissance des ventes.\"\n    },\n    {\n        id: \"faq4\",\n        title: \"Pourquoi est-ce important de cr\\xe9er une identit\\xe9 visuelle\",\n        contenu: \"La cr\\xe9ation d’une identit\\xe9 visuelle est importante car elle aide \\xe0 d\\xe9finir comment une entreprise est per\\xe7ue par le public. Une identit\\xe9 visuelle forte et coh\\xe9rente peut aider \\xe0 renforcer la reconnaissance de la marque, \\xe0 \\xe9tablir la cr\\xe9dibilit\\xe9 et \\xe0 diff\\xe9rencier l’entreprise de ses concurrents.\"\n    },\n    {\n        id: \"faq5\",\n        title: \"Pourquoi est-ce important de cr\\xe9er un site web ?\",\n        contenu: \"La cr\\xe9ation d’un site web est importante car elle offre \\xe0 une entreprise une pr\\xe9sence en ligne, ce qui est crucial dans le monde num\\xe9rique d’aujourd’hui. Un site web peut aider \\xe0 atteindre un public plus large, \\xe0 promouvoir les produits ou services de l’entreprise et \\xe0 \\xe9tablir une cr\\xe9dibilit\\xe9.\"\n    },\n    {\n        id: \"faq6\",\n        title: \"Pourquoi est-ce important de g\\xe9rer les r\\xe9seaux sociaux ?\",\n        contenu: \"La gestion des r\\xe9seaux sociaux est importante car elle permet \\xe0 une entreprise d’interagir directement avec son public, de renforcer l’engagement et de surveiller les commentaires et les opinions des clients. Cela peut conduire \\xe0 une meilleure satisfaction de la client\\xe8le et \\xe0 une am\\xe9lioration de la r\\xe9putation de la marque.\"\n    },\n    {\n        id: \"faq7\",\n        title: \"Pourquoi est-ce important de mener une campagne publicitaire ?\",\n        contenu: \"Les campagnes publicitaires sont importantes car elles permettent \\xe0 une entreprise de promouvoir ses produits ou services \\xe0 un public cible. Une campagne publicitaire efficace peut augmenter la notori\\xe9t\\xe9 de la marque, stimuler les ventes et am\\xe9liorer la part de march\\xe9.\"\n    },\n    {\n        id: \"faq8\",\n        title: \"Pourquoi est-ce important de faire du community management ?\",\n        contenu: \"Le community management est important car il permet \\xe0 une entreprise de g\\xe9rer et d’engager une communaut\\xe9 en ligne autour de sa marque ou de son produit. Cela peut conduire \\xe0 une plus grande fid\\xe9lit\\xe9 \\xe0 la marque, \\xe0 une meilleure satisfaction de la client\\xe8le et \\xe0 une augmentation de l’engagement des utilisateurs.\"\n    }\n];\nfunction Faq() {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Ouvre l'élément cliqué/Ferme l'élément si ouvert\n    const handleClickOpen = (id)=>{\n        if (open === id) {\n            setOpen(null);\n        } else {\n            setOpen(id);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            id: \"faq\",\n            className: \"flex flex-col tablette:h-auto bg-primary w-full mt-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-center font-titleFont font-bold text-3xl uppercase pt-4 pb-8\",\n                    children: \"FAQ\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                faqs.map((faq)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center w-full mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                onClick: ()=>handleClickOpen(faq.id),\n                                className: \"faq justify-between font-titleFont font-bold bg-secondary rounded-t-lg w-full\",\n                                children: [\n                                    faq.title,\n                                    open === faq.id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        className: \"animate-spin-slow\",\n                                        src: \"/logo/chevron_up.svg\",\n                                        alt: \"Logo chevron up\",\n                                        title: \"Logo pour fermer la r\\xe9ponse\",\n                                        width: 25,\n                                        height: 25\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 17\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        className: \"animate-spin-slow\",\n                                        src: \"/logo/chevron_down.svg\",\n                                        alt: \"Logo chevron down\",\n                                        title: \"Logo pour voir la r\\xe9ponse\",\n                                        width: 25,\n                                        height: 25\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/2 tablette:w-4/6 mobile:w-4/5 border rounded-b-lg faq-content overflow-hidden transition-opacity duration-300 \".concat(open === faq.id ? \"opacity-100 max-h-full transition-max-h duration-500\" : \"opacity-0 max-h-0 transition-max-h duration-300\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"rounded-b-lg p-4 \".concat(open !== faq.id && \"hidden\"),\n                                    children: faq.contenu\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, faq.id, true, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center my-12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/Contact\",\n                        className: \"cta mobile:hover:scale-90\",\n                        children: \"Vous n'avez pas trouv\\xe9 votre r\\xe9ponse, cliquez ici\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(Faq, \"3gHT60S3lHEhyYybFcB05ha95j4=\");\n_c = Faq;\nvar _c;\n$RefreshReg$(_c, \"Faq\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZhcS9GYXEuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ1Q7QUFDRjtBQUM3QixNQUFNSSxPQUFPO0lBQ1g7UUFDRUMsSUFBSTtRQUNKQyxPQUNFO1FBQ0ZDLFNBQ0U7SUFDSjtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsT0FDRTtRQUNGQyxTQUNFO0lBQ0o7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLE9BQ0U7UUFDRkMsU0FDRTtJQUNKO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLFNBQ0U7SUFDSjtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsT0FBTztRQUNQQyxTQUNFO0lBQ0o7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsU0FDRTtJQUNKO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxPQUNFO1FBQ0ZDLFNBQ0U7SUFDSjtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsT0FDRTtRQUNGQyxTQUNFO0lBQ0o7Q0FDRDtBQUNjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsbURBQW1EO0lBQ25ELE1BQU1VLGtCQUFrQixDQUFDTjtRQUN2QixJQUFJSSxTQUFTSixJQUFJO1lBQ2ZLLFFBQVE7UUFDVixPQUFPO1lBQ0xBLFFBQVFMO1FBQ1Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTztrQkFDQyw0RUFBQ0M7WUFDQ1IsSUFBRztZQUNIUyxXQUFVOzs4QkFFViw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQW9FOzs7Ozs7Z0JBR2pGVixLQUFLWSxHQUFHLENBQUMsQ0FBQ0Msb0JBQ1QsOERBQUNMO3dCQUVDRSxXQUFVOzswQ0FFViw4REFBQ0k7Z0NBQ0NDLFNBQVMsSUFBTVIsZ0JBQWdCTSxJQUFJWixFQUFFO2dDQUNyQ1MsV0FBVTs7b0NBRVRHLElBQUlYLEtBQUs7b0NBQ1RHLFNBQVNRLElBQUlaLEVBQUUsaUJBQ2QsOERBQUNILGtEQUFLQTt3Q0FDSlksV0FBVTt3Q0FDVk0sS0FBSTt3Q0FDSkMsS0FBSTt3Q0FDSmYsT0FBTTt3Q0FDTmdCLE9BQU87d0NBQ1BDLFFBQVE7Ozs7OzZEQUdWLDhEQUFDckIsa0RBQUtBO3dDQUNKWSxXQUFVO3dDQUNWTSxLQUFJO3dDQUNKQyxLQUFJO3dDQUNKZixPQUFNO3dDQUNOZ0IsT0FBTzt3Q0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7OzBDQUtkLDhEQUFDWDtnQ0FDQ0UsV0FBVyxxSEFJVixPQUhDTCxTQUFTUSxJQUFJWixFQUFFLEdBQ1gseURBQ0E7MENBR04sNEVBQUNtQjtvQ0FDQ1YsV0FBVyxvQkFFVixPQURDTCxTQUFTUSxJQUFJWixFQUFFLElBQUk7OENBR3BCWSxJQUFJVixPQUFPOzs7Ozs7Ozs7Ozs7dUJBekNYVSxJQUFJWixFQUFFOzs7Ozs4QkE4Q2YsOERBQUNPO29CQUFJRSxXQUFVOzhCQUNiLDRFQUFDWCxpREFBSUE7d0JBQUNzQixNQUFLO3dCQUFXWCxXQUFVO2tDQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU90RTtHQTVFd0JOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZhcS9GYXEuanN4P2U2ODQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuY29uc3QgZmFxcyA9IFtcclxuICB7XHJcbiAgICBpZDogJ2ZhcTEnLFxyXG4gICAgdGl0bGU6XHJcbiAgICAgICdQb3VycXVvaSBlc3QtY2UgaW1wb3J0YW50IGTigJlhdm9pciB1biBjb25zZWlsIGVuIHRyYW5zZm9ybWF0aW9uIG51bcOpcmlxdWUgPycsXHJcbiAgICBjb250ZW51OlxyXG4gICAgICAnTGUgY29uc2VpbCBlbiB0cmFuc2Zvcm1hdGlvbiBudW3DqXJpcXVlIGVzdCBjcnVjaWFsIGNhciBpbCBhaWRlIGxlcyBlbnRyZXByaXNlcyDDoCBpbnTDqWdyZXIgZWZmaWNhY2VtZW50IGxlcyB0ZWNobm9sb2dpZXMgbnVtw6lyaXF1ZXMgZGFucyBsZXVycyBvcMOpcmF0aW9ucyBxdW90aWRpZW5uZXMuIENlbGEgcGV1dCBjb25kdWlyZSDDoCB1bmUgYW3DqWxpb3JhdGlvbiBkZSBs4oCZZWZmaWNhY2l0w6ksIHVuZSBhdWdtZW50YXRpb24gZGUgbGEgcHJvZHVjdGl2aXTDqSBldCB1bmUgY29tcMOpdGl0aXZpdMOpIGFjY3J1ZSBzdXIgbGUgbWFyY2jDqS4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdmYXEyJyxcclxuICAgIHRpdGxlOlxyXG4gICAgICAnUG91cnF1b2kgZXN0LWNlIGltcG9ydGFudCBkZSBmYWlyZSB1biBhdWRpdCBhdXggZW50cmVwcmlzZXMgPycsXHJcbiAgICBjb250ZW51OlxyXG4gICAgICAnVW4gYXVkaXQgZOKAmWVudHJlcHJpc2UgZXN0IGltcG9ydGFudCBjYXIgaWwgZm91cm5pdCB1bmUgw6l2YWx1YXRpb24gaW5kw6lwZW5kYW50ZSBkZXMgcHJvY2Vzc3VzIGV0IGRlcyBjb250csO0bGVzIGZpbmFuY2llcnMgZOKAmXVuZSBlbnRyZXByaXNlLiBDZWxhIHBlcm1ldCBkZSBz4oCZYXNzdXJlciBxdWUgbOKAmWVudHJlcHJpc2UgZXN0IGfDqXLDqWUgZWZmaWNhY2VtZW50IGV0IGVuIHRvdXRlIHPDqWN1cml0w6ksIGNlIHF1aSBwZXV0IHJlbmZvcmNlciBsYSBjb25maWFuY2UgZGVzIGludmVzdGlzc2V1cnMgZXQgZGVzIHBhcnRpZXMgcHJlbmFudGVzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2ZhcTMnLFxyXG4gICAgdGl0bGU6XHJcbiAgICAgICdQb3VycXVvaSBlc3QtY2UgaW1wb3J0YW50IGTigJlhdm9pciB1bmUgc3RyYXTDqWdpZSBkZSBjb21tdW5pY2F0aW9uIGV0IGRlIHdlYm1hcmtldGluZyA/JyxcclxuICAgIGNvbnRlbnU6XHJcbiAgICAgICdBdm9pciB1bmUgc3RyYXTDqWdpZSBkZSBjb21tdW5pY2F0aW9uIGV0IGRlIHdlYm1hcmtldGluZyBlc3QgZXNzZW50aWVsIGNhciBlbGxlIHBlcm1ldCDDoCB1bmUgZW50cmVwcmlzZSBkZSB0b3VjaGVyIGVmZmljYWNlbWVudCBzb24gcHVibGljIGNpYmxlLCBkZSBwcm9tb3V2b2lyIHNlcyBwcm9kdWl0cyBvdSBzZXJ2aWNlcyBldCBkZSByZW5mb3JjZXIgc2EgcHLDqXNlbmNlIGVuIGxpZ25lLiBDZWxhIHBldXQgY29uZHVpcmUgw6AgdW5lIGF1Z21lbnRhdGlvbiBkZSBsYSBub3RvcmnDqXTDqSBkZSBsYSBtYXJxdWUgZXQgw6AgdW5lIGNyb2lzc2FuY2UgZGVzIHZlbnRlcy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdmYXE0JyxcclxuICAgIHRpdGxlOiAnUG91cnF1b2kgZXN0LWNlIGltcG9ydGFudCBkZSBjcsOpZXIgdW5lIGlkZW50aXTDqSB2aXN1ZWxsZScsXHJcbiAgICBjb250ZW51OlxyXG4gICAgICAnTGEgY3LDqWF0aW9uIGTigJl1bmUgaWRlbnRpdMOpIHZpc3VlbGxlIGVzdCBpbXBvcnRhbnRlIGNhciBlbGxlIGFpZGUgw6AgZMOpZmluaXIgY29tbWVudCB1bmUgZW50cmVwcmlzZSBlc3QgcGVyw6d1ZSBwYXIgbGUgcHVibGljLiBVbmUgaWRlbnRpdMOpIHZpc3VlbGxlIGZvcnRlIGV0IGNvaMOpcmVudGUgcGV1dCBhaWRlciDDoCByZW5mb3JjZXIgbGEgcmVjb25uYWlzc2FuY2UgZGUgbGEgbWFycXVlLCDDoCDDqXRhYmxpciBsYSBjcsOpZGliaWxpdMOpIGV0IMOgIGRpZmbDqXJlbmNpZXIgbOKAmWVudHJlcHJpc2UgZGUgc2VzIGNvbmN1cnJlbnRzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2ZhcTUnLFxyXG4gICAgdGl0bGU6ICdQb3VycXVvaSBlc3QtY2UgaW1wb3J0YW50IGRlIGNyw6llciB1biBzaXRlIHdlYiA/JyxcclxuICAgIGNvbnRlbnU6XHJcbiAgICAgICdMYSBjcsOpYXRpb24gZOKAmXVuIHNpdGUgd2ViIGVzdCBpbXBvcnRhbnRlIGNhciBlbGxlIG9mZnJlIMOgIHVuZSBlbnRyZXByaXNlIHVuZSBwcsOpc2VuY2UgZW4gbGlnbmUsIGNlIHF1aSBlc3QgY3J1Y2lhbCBkYW5zIGxlIG1vbmRlIG51bcOpcmlxdWUgZOKAmWF1am91cmTigJlodWkuIFVuIHNpdGUgd2ViIHBldXQgYWlkZXIgw6AgYXR0ZWluZHJlIHVuIHB1YmxpYyBwbHVzIGxhcmdlLCDDoCBwcm9tb3V2b2lyIGxlcyBwcm9kdWl0cyBvdSBzZXJ2aWNlcyBkZSBs4oCZZW50cmVwcmlzZSBldCDDoCDDqXRhYmxpciB1bmUgY3LDqWRpYmlsaXTDqS4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdmYXE2JyxcclxuICAgIHRpdGxlOiAnUG91cnF1b2kgZXN0LWNlIGltcG9ydGFudCBkZSBnw6lyZXIgbGVzIHLDqXNlYXV4IHNvY2lhdXggPycsXHJcbiAgICBjb250ZW51OlxyXG4gICAgICAnTGEgZ2VzdGlvbiBkZXMgcsOpc2VhdXggc29jaWF1eCBlc3QgaW1wb3J0YW50ZSBjYXIgZWxsZSBwZXJtZXQgw6AgdW5lIGVudHJlcHJpc2UgZOKAmWludGVyYWdpciBkaXJlY3RlbWVudCBhdmVjIHNvbiBwdWJsaWMsIGRlIHJlbmZvcmNlciBs4oCZZW5nYWdlbWVudCBldCBkZSBzdXJ2ZWlsbGVyIGxlcyBjb21tZW50YWlyZXMgZXQgbGVzIG9waW5pb25zIGRlcyBjbGllbnRzLiBDZWxhIHBldXQgY29uZHVpcmUgw6AgdW5lIG1laWxsZXVyZSBzYXRpc2ZhY3Rpb24gZGUgbGEgY2xpZW50w6hsZSBldCDDoCB1bmUgYW3DqWxpb3JhdGlvbiBkZSBsYSByw6lwdXRhdGlvbiBkZSBsYSBtYXJxdWUuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnZmFxNycsXHJcbiAgICB0aXRsZTpcclxuICAgICAgJ1BvdXJxdW9pIGVzdC1jZSBpbXBvcnRhbnQgZGUgbWVuZXIgdW5lIGNhbXBhZ25lIHB1YmxpY2l0YWlyZSA/JyxcclxuICAgIGNvbnRlbnU6XHJcbiAgICAgICdMZXMgY2FtcGFnbmVzIHB1YmxpY2l0YWlyZXMgc29udCBpbXBvcnRhbnRlcyBjYXIgZWxsZXMgcGVybWV0dGVudCDDoCB1bmUgZW50cmVwcmlzZSBkZSBwcm9tb3V2b2lyIHNlcyBwcm9kdWl0cyBvdSBzZXJ2aWNlcyDDoCB1biBwdWJsaWMgY2libGUuIFVuZSBjYW1wYWduZSBwdWJsaWNpdGFpcmUgZWZmaWNhY2UgcGV1dCBhdWdtZW50ZXIgbGEgbm90b3Jpw6l0w6kgZGUgbGEgbWFycXVlLCBzdGltdWxlciBsZXMgdmVudGVzIGV0IGFtw6lsaW9yZXIgbGEgcGFydCBkZSBtYXJjaMOpLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2ZhcTgnLFxyXG4gICAgdGl0bGU6XHJcbiAgICAgICdQb3VycXVvaSBlc3QtY2UgaW1wb3J0YW50IGRlIGZhaXJlIGR1IGNvbW11bml0eSBtYW5hZ2VtZW50ID8nLFxyXG4gICAgY29udGVudTpcclxuICAgICAgJ0xlIGNvbW11bml0eSBtYW5hZ2VtZW50IGVzdCBpbXBvcnRhbnQgY2FyIGlsIHBlcm1ldCDDoCB1bmUgZW50cmVwcmlzZSBkZSBnw6lyZXIgZXQgZOKAmWVuZ2FnZXIgdW5lIGNvbW11bmF1dMOpIGVuIGxpZ25lIGF1dG91ciBkZSBzYSBtYXJxdWUgb3UgZGUgc29uIHByb2R1aXQuIENlbGEgcGV1dCBjb25kdWlyZSDDoCB1bmUgcGx1cyBncmFuZGUgZmlkw6lsaXTDqSDDoCBsYSBtYXJxdWUsIMOgIHVuZSBtZWlsbGV1cmUgc2F0aXNmYWN0aW9uIGRlIGxhIGNsaWVudMOobGUgZXQgw6AgdW5lIGF1Z21lbnRhdGlvbiBkZSBs4oCZZW5nYWdlbWVudCBkZXMgdXRpbGlzYXRldXJzLicsXHJcbiAgfSxcclxuXTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmFxKCkge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIC8vIE91dnJlIGwnw6lsw6ltZW50IGNsaXF1w6kvRmVybWUgbCfDqWzDqW1lbnQgc2kgb3V2ZXJ0XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKGlkKSA9PiB7XHJcbiAgICBpZiAob3BlbiA9PT0gaWQpIHtcclxuICAgICAgc2V0T3BlbihudWxsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE9wZW4oaWQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c2VjdGlvblxyXG4gICAgICAgIGlkPVwiZmFxXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHRhYmxldHRlOmgtYXV0byBiZy1wcmltYXJ5IHctZnVsbCBtdC0xMFwiXHJcbiAgICAgID5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC10aXRsZUZvbnQgZm9udC1ib2xkIHRleHQtM3hsIHVwcGVyY2FzZSBwdC00IHBiLThcIj5cclxuICAgICAgICAgIEZBUVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAge2ZhcXMubWFwKChmYXEpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtmYXEuaWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHctZnVsbCBtYi00XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgzXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tPcGVuKGZhcS5pZCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFxIGp1c3RpZnktYmV0d2VlbiBmb250LXRpdGxlRm9udCBmb250LWJvbGQgYmctc2Vjb25kYXJ5IHJvdW5kZWQtdC1sZyB3LWZ1bGxcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2ZhcS50aXRsZX1cclxuICAgICAgICAgICAgICB7b3BlbiA9PT0gZmFxLmlkID8gKFxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFuaW1hdGUtc3Bpbi1zbG93XCJcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2xvZ28vY2hldnJvbl91cC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvIGNoZXZyb24gdXBcIlxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkxvZ28gcG91ciBmZXJtZXIgbGEgcsOpcG9uc2VcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjV9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluLXNsb3dcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nby9jaGV2cm9uX2Rvd24uc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiTG9nbyBjaGV2cm9uIGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkxvZ28gcG91ciB2b2lyIGxhIHLDqXBvbnNlXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezI1fVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMS8yIHRhYmxldHRlOnctNC82IG1vYmlsZTp3LTQvNSBib3JkZXIgcm91bmRlZC1iLWxnIGZhcS1jb250ZW50IG92ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwICR7XHJcbiAgICAgICAgICAgICAgICBvcGVuID09PSBmYXEuaWRcclxuICAgICAgICAgICAgICAgICAgPyAnb3BhY2l0eS0xMDAgbWF4LWgtZnVsbCB0cmFuc2l0aW9uLW1heC1oIGR1cmF0aW9uLTUwMCdcclxuICAgICAgICAgICAgICAgICAgOiAnb3BhY2l0eS0wIG1heC1oLTAgdHJhbnNpdGlvbi1tYXgtaCBkdXJhdGlvbi0zMDAnXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1iLWxnIHAtNCAke1xyXG4gICAgICAgICAgICAgICAgICBvcGVuICE9PSBmYXEuaWQgJiYgJ2hpZGRlbidcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtmYXEuY29udGVudX1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG15LTEyXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL0NvbnRhY3RcIiBjbGFzc05hbWU9XCJjdGEgbW9iaWxlOmhvdmVyOnNjYWxlLTkwXCI+XHJcbiAgICAgICAgICAgIFZvdXMgbidhdmV6IHBhcyB0cm91dsOpIHZvdHJlIHLDqXBvbnNlLCBjbGlxdWV6IGljaVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJMaW5rIiwiZmFxcyIsImlkIiwidGl0bGUiLCJjb250ZW51IiwiRmFxIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVDbGlja09wZW4iLCJkaXYiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDIiLCJtYXAiLCJmYXEiLCJoMyIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Faq/Faq.jsx\n"));

/***/ })

});