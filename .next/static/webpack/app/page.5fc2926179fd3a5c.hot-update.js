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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Faq; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst faqs = [\n    {\n        id: \"faq1\",\n        title: \"Pourquoi est-ce important d’avoir un conseil en transformation num\\xe9rique ?\",\n        contenu: \"Le conseil en transformation num\\xe9rique est crucial car il aide les entreprises \\xe0 int\\xe9grer efficacement les technologies num\\xe9riques dans leurs op\\xe9rations quotidiennes. Cela peut conduire \\xe0 une am\\xe9lioration de l’efficacit\\xe9, une augmentation de la productivit\\xe9 et une comp\\xe9titivit\\xe9 accrue sur le march\\xe9.\"\n    },\n    {\n        id: \"faq2\",\n        title: \"Pourquoi est-ce important de faire un audit aux entreprises ?\",\n        contenu: \"Un audit d’entreprise est important car il fournit une \\xe9valuation ind\\xe9pendante des processus et des contr\\xf4les financiers d’une entreprise. Cela permet de s’assurer que l’entreprise est g\\xe9r\\xe9e efficacement et en toute s\\xe9curit\\xe9, ce qui peut renforcer la confiance des investisseurs et des parties prenantes.\"\n    },\n    {\n        id: \"faq3\",\n        title: \"Pourquoi est-ce important d’avoir une strat\\xe9gie de communication et de webmarketing ?\",\n        contenu: \"Avoir une strat\\xe9gie de communication et de webmarketing est essentiel car elle permet \\xe0 une entreprise de toucher efficacement son public cible, de promouvoir ses produits ou services et de renforcer sa pr\\xe9sence en ligne. Cela peut conduire \\xe0 une augmentation de la notori\\xe9t\\xe9 de la marque et \\xe0 une croissance des ventes.\"\n    },\n    {\n        id: \"faq4\",\n        title: \"Pourquoi est-ce important de cr\\xe9er une identit\\xe9 visuelle\",\n        contenu: \"La cr\\xe9ation d’une identit\\xe9 visuelle est importante car elle aide \\xe0 d\\xe9finir comment une entreprise est per\\xe7ue par le public. Une identit\\xe9 visuelle forte et coh\\xe9rente peut aider \\xe0 renforcer la reconnaissance de la marque, \\xe0 \\xe9tablir la cr\\xe9dibilit\\xe9 et \\xe0 diff\\xe9rencier l’entreprise de ses concurrents.\"\n    },\n    {\n        id: \"faq5\",\n        title: \"Pourquoi est-ce important de cr\\xe9er un site web ?\",\n        contenu: \"La cr\\xe9ation d’un site web est importante car elle offre \\xe0 une entreprise une pr\\xe9sence en ligne, ce qui est crucial dans le monde num\\xe9rique d’aujourd’hui. Un site web peut aider \\xe0 atteindre un public plus large, \\xe0 promouvoir les produits ou services de l’entreprise et \\xe0 \\xe9tablir une cr\\xe9dibilit\\xe9.\"\n    },\n    {\n        id: \"faq6\",\n        title: \"Pourquoi est-ce important de g\\xe9rer les r\\xe9seaux sociaux ?\",\n        contenu: \"La gestion des r\\xe9seaux sociaux est importante car elle permet \\xe0 une entreprise d’interagir directement avec son public, de renforcer l’engagement et de surveiller les commentaires et les opinions des clients. Cela peut conduire \\xe0 une meilleure satisfaction de la client\\xe8le et \\xe0 une am\\xe9lioration de la r\\xe9putation de la marque.\"\n    },\n    {\n        id: \"faq7\",\n        title: \"Pourquoi est-ce important de mener une campagne publicitaire ?\",\n        contenu: \"Les campagnes publicitaires sont importantes car elles permettent \\xe0 une entreprise de promouvoir ses produits ou services \\xe0 un public cible. Une campagne publicitaire efficace peut augmenter la notori\\xe9t\\xe9 de la marque, stimuler les ventes et am\\xe9liorer la part de march\\xe9.\"\n    },\n    {\n        id: \"faq8\",\n        title: \"Pourquoi est-ce important de faire du community management ?\",\n        contenu: \"Le community management est important car il permet \\xe0 une entreprise de g\\xe9rer et d’engager une communaut\\xe9 en ligne autour de sa marque ou de son produit. Cela peut conduire \\xe0 une plus grande fid\\xe9lit\\xe9 \\xe0 la marque, \\xe0 une meilleure satisfaction de la client\\xe8le et \\xe0 une augmentation de l’engagement des utilisateurs.\"\n    }\n];\nfunction Faq() {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Ouvre l'élément cliqué/Ferme l'élément si ouvert\n    const handleClickOpen = (id)=>{\n        if (open === id) {\n            setOpen(null);\n        } else {\n            setOpen(id);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            id: \"faq\",\n            className: \"flex flex-col tablette:h-auto bg-primary w-full mt-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-center font-titleFont font-bold text-3xl uppercase pt-4 pb-8\",\n                    children: \"FAQ\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                faqs.map((faq)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center w-full mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                onClick: ()=>handleClickOpen(faq.id),\n                                className: \"faq justify-between font-titleFont font-bold bg-secondary rounded-t-lg w-full\",\n                                children: [\n                                    faq.title,\n                                    open === faq.id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        className: \"animate-spin-slow h-6 w-6\",\n                                        src: \"/logo/chevron_up.svg\",\n                                        alt: \"Logo chevron up\",\n                                        title: \"Logo pour fermer la r\\xe9ponse\",\n                                        width: 24,\n                                        height: 24\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 17\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        className: \"animate-spin-slow\",\n                                        src: \"/logo/chevron_down.svg\",\n                                        alt: \"Logo chevron down\",\n                                        title: \"Logo pour voir la r\\xe9ponse\",\n                                        width: 25,\n                                        height: 25\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/2 tablette:w-4/6 mobile:w-4/5 border rounded-b-lg faq-content overflow-hidden transition-opacity duration-300 \".concat(open === faq.id ? \"opacity-100 max-h-full transition-max-h duration-500\" : \"opacity-0 max-h-0 transition-max-h duration-300\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"rounded-b-lg p-4 \".concat(open !== faq.id && \"hidden\"),\n                                    children: faq.contenu\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, faq.id, true, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center my-12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/Contact\",\n                        className: \"cta mobile:scale-90 mobile:hover:scale-100\",\n                        children: \"Vous n'avez pas trouv\\xe9 votre r\\xe9ponse, cliquez ici\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\CCI\\\\ccp1_Brana\\\\src\\\\components\\\\Faq\\\\Faq.jsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(Faq, \"3gHT60S3lHEhyYybFcB05ha95j4=\");\n_c = Faq;\nvar _c;\n$RefreshReg$(_c, \"Faq\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZhcS9GYXEuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ1Q7QUFDRjtBQUM3QixNQUFNSSxPQUFPO0lBQ1g7UUFDRUMsSUFBSTtRQUNKQyxPQUNFO1FBQ0ZDLFNBQ0U7SUFDSjtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsT0FDRTtRQUNGQyxTQUNFO0lBQ0o7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLE9BQ0U7UUFDRkMsU0FDRTtJQUNKO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLFNBQ0U7SUFDSjtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsT0FBTztRQUNQQyxTQUNFO0lBQ0o7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsU0FDRTtJQUNKO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxPQUNFO1FBQ0ZDLFNBQ0U7SUFDSjtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsT0FDRTtRQUNGQyxTQUNFO0lBQ0o7Q0FDRDtBQUNjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsbURBQW1EO0lBQ25ELE1BQU1VLGtCQUFrQixDQUFDTjtRQUN2QixJQUFJSSxTQUFTSixJQUFJO1lBQ2ZLLFFBQVE7UUFDVixPQUFPO1lBQ0xBLFFBQVFMO1FBQ1Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTztrQkFDQyw0RUFBQ0M7WUFDQ1IsSUFBRztZQUNIUyxXQUFVOzs4QkFFViw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQW9FOzs7Ozs7Z0JBR2pGVixLQUFLWSxHQUFHLENBQUMsQ0FBQ0Msb0JBQ1QsOERBQUNMO3dCQUVDRSxXQUFVOzswQ0FFViw4REFBQ0k7Z0NBQ0NDLFNBQVMsSUFBTVIsZ0JBQWdCTSxJQUFJWixFQUFFO2dDQUNyQ1MsV0FBVTs7b0NBRVRHLElBQUlYLEtBQUs7b0NBQ1RHLFNBQVNRLElBQUlaLEVBQUUsaUJBQ2QsOERBQUNILGtEQUFLQTt3Q0FDSlksV0FBVTt3Q0FDVk0sS0FBSTt3Q0FDSkMsS0FBSTt3Q0FDSmYsT0FBTTt3Q0FDTmdCLE9BQU87d0NBQ1BDLFFBQVE7Ozs7OzZEQUdWLDhEQUFDckIsa0RBQUtBO3dDQUNKWSxXQUFVO3dDQUNWTSxLQUFJO3dDQUNKQyxLQUFJO3dDQUNKZixPQUFNO3dDQUNOZ0IsT0FBTzt3Q0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7OzBDQUtkLDhEQUFDWDtnQ0FDQ0UsV0FBVyxxSEFJVixPQUhDTCxTQUFTUSxJQUFJWixFQUFFLEdBQ1gseURBQ0E7MENBR04sNEVBQUNtQjtvQ0FDQ1YsV0FBVyxvQkFFVixPQURDTCxTQUFTUSxJQUFJWixFQUFFLElBQUk7OENBR3BCWSxJQUFJVixPQUFPOzs7Ozs7Ozs7Ozs7dUJBekNYVSxJQUFJWixFQUFFOzs7Ozs4QkE4Q2YsOERBQUNPO29CQUFJRSxXQUFVOzhCQUNiLDRFQUFDWCxpREFBSUE7d0JBQ0hzQixNQUFLO3dCQUNMWCxXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0EvRXdCTjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GYXEvRmFxLmpzeD9lNjg0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmNvbnN0IGZhcXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdmYXExJyxcclxuICAgIHRpdGxlOlxyXG4gICAgICAnUG91cnF1b2kgZXN0LWNlIGltcG9ydGFudCBk4oCZYXZvaXIgdW4gY29uc2VpbCBlbiB0cmFuc2Zvcm1hdGlvbiBudW3DqXJpcXVlID8nLFxyXG4gICAgY29udGVudTpcclxuICAgICAgJ0xlIGNvbnNlaWwgZW4gdHJhbnNmb3JtYXRpb24gbnVtw6lyaXF1ZSBlc3QgY3J1Y2lhbCBjYXIgaWwgYWlkZSBsZXMgZW50cmVwcmlzZXMgw6AgaW50w6lncmVyIGVmZmljYWNlbWVudCBsZXMgdGVjaG5vbG9naWVzIG51bcOpcmlxdWVzIGRhbnMgbGV1cnMgb3DDqXJhdGlvbnMgcXVvdGlkaWVubmVzLiBDZWxhIHBldXQgY29uZHVpcmUgw6AgdW5lIGFtw6lsaW9yYXRpb24gZGUgbOKAmWVmZmljYWNpdMOpLCB1bmUgYXVnbWVudGF0aW9uIGRlIGxhIHByb2R1Y3Rpdml0w6kgZXQgdW5lIGNvbXDDqXRpdGl2aXTDqSBhY2NydWUgc3VyIGxlIG1hcmNow6kuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnZmFxMicsXHJcbiAgICB0aXRsZTpcclxuICAgICAgJ1BvdXJxdW9pIGVzdC1jZSBpbXBvcnRhbnQgZGUgZmFpcmUgdW4gYXVkaXQgYXV4IGVudHJlcHJpc2VzID8nLFxyXG4gICAgY29udGVudTpcclxuICAgICAgJ1VuIGF1ZGl0IGTigJllbnRyZXByaXNlIGVzdCBpbXBvcnRhbnQgY2FyIGlsIGZvdXJuaXQgdW5lIMOpdmFsdWF0aW9uIGluZMOpcGVuZGFudGUgZGVzIHByb2Nlc3N1cyBldCBkZXMgY29udHLDtGxlcyBmaW5hbmNpZXJzIGTigJl1bmUgZW50cmVwcmlzZS4gQ2VsYSBwZXJtZXQgZGUgc+KAmWFzc3VyZXIgcXVlIGzigJllbnRyZXByaXNlIGVzdCBnw6lyw6llIGVmZmljYWNlbWVudCBldCBlbiB0b3V0ZSBzw6ljdXJpdMOpLCBjZSBxdWkgcGV1dCByZW5mb3JjZXIgbGEgY29uZmlhbmNlIGRlcyBpbnZlc3Rpc3NldXJzIGV0IGRlcyBwYXJ0aWVzIHByZW5hbnRlcy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdmYXEzJyxcclxuICAgIHRpdGxlOlxyXG4gICAgICAnUG91cnF1b2kgZXN0LWNlIGltcG9ydGFudCBk4oCZYXZvaXIgdW5lIHN0cmF0w6lnaWUgZGUgY29tbXVuaWNhdGlvbiBldCBkZSB3ZWJtYXJrZXRpbmcgPycsXHJcbiAgICBjb250ZW51OlxyXG4gICAgICAnQXZvaXIgdW5lIHN0cmF0w6lnaWUgZGUgY29tbXVuaWNhdGlvbiBldCBkZSB3ZWJtYXJrZXRpbmcgZXN0IGVzc2VudGllbCBjYXIgZWxsZSBwZXJtZXQgw6AgdW5lIGVudHJlcHJpc2UgZGUgdG91Y2hlciBlZmZpY2FjZW1lbnQgc29uIHB1YmxpYyBjaWJsZSwgZGUgcHJvbW91dm9pciBzZXMgcHJvZHVpdHMgb3Ugc2VydmljZXMgZXQgZGUgcmVuZm9yY2VyIHNhIHByw6lzZW5jZSBlbiBsaWduZS4gQ2VsYSBwZXV0IGNvbmR1aXJlIMOgIHVuZSBhdWdtZW50YXRpb24gZGUgbGEgbm90b3Jpw6l0w6kgZGUgbGEgbWFycXVlIGV0IMOgIHVuZSBjcm9pc3NhbmNlIGRlcyB2ZW50ZXMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnZmFxNCcsXHJcbiAgICB0aXRsZTogJ1BvdXJxdW9pIGVzdC1jZSBpbXBvcnRhbnQgZGUgY3LDqWVyIHVuZSBpZGVudGl0w6kgdmlzdWVsbGUnLFxyXG4gICAgY29udGVudTpcclxuICAgICAgJ0xhIGNyw6lhdGlvbiBk4oCZdW5lIGlkZW50aXTDqSB2aXN1ZWxsZSBlc3QgaW1wb3J0YW50ZSBjYXIgZWxsZSBhaWRlIMOgIGTDqWZpbmlyIGNvbW1lbnQgdW5lIGVudHJlcHJpc2UgZXN0IHBlcsOndWUgcGFyIGxlIHB1YmxpYy4gVW5lIGlkZW50aXTDqSB2aXN1ZWxsZSBmb3J0ZSBldCBjb2jDqXJlbnRlIHBldXQgYWlkZXIgw6AgcmVuZm9yY2VyIGxhIHJlY29ubmFpc3NhbmNlIGRlIGxhIG1hcnF1ZSwgw6Agw6l0YWJsaXIgbGEgY3LDqWRpYmlsaXTDqSBldCDDoCBkaWZmw6lyZW5jaWVyIGzigJllbnRyZXByaXNlIGRlIHNlcyBjb25jdXJyZW50cy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdmYXE1JyxcclxuICAgIHRpdGxlOiAnUG91cnF1b2kgZXN0LWNlIGltcG9ydGFudCBkZSBjcsOpZXIgdW4gc2l0ZSB3ZWIgPycsXHJcbiAgICBjb250ZW51OlxyXG4gICAgICAnTGEgY3LDqWF0aW9uIGTigJl1biBzaXRlIHdlYiBlc3QgaW1wb3J0YW50ZSBjYXIgZWxsZSBvZmZyZSDDoCB1bmUgZW50cmVwcmlzZSB1bmUgcHLDqXNlbmNlIGVuIGxpZ25lLCBjZSBxdWkgZXN0IGNydWNpYWwgZGFucyBsZSBtb25kZSBudW3DqXJpcXVlIGTigJlhdWpvdXJk4oCZaHVpLiBVbiBzaXRlIHdlYiBwZXV0IGFpZGVyIMOgIGF0dGVpbmRyZSB1biBwdWJsaWMgcGx1cyBsYXJnZSwgw6AgcHJvbW91dm9pciBsZXMgcHJvZHVpdHMgb3Ugc2VydmljZXMgZGUgbOKAmWVudHJlcHJpc2UgZXQgw6Agw6l0YWJsaXIgdW5lIGNyw6lkaWJpbGl0w6kuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnZmFxNicsXHJcbiAgICB0aXRsZTogJ1BvdXJxdW9pIGVzdC1jZSBpbXBvcnRhbnQgZGUgZ8OpcmVyIGxlcyByw6lzZWF1eCBzb2NpYXV4ID8nLFxyXG4gICAgY29udGVudTpcclxuICAgICAgJ0xhIGdlc3Rpb24gZGVzIHLDqXNlYXV4IHNvY2lhdXggZXN0IGltcG9ydGFudGUgY2FyIGVsbGUgcGVybWV0IMOgIHVuZSBlbnRyZXByaXNlIGTigJlpbnRlcmFnaXIgZGlyZWN0ZW1lbnQgYXZlYyBzb24gcHVibGljLCBkZSByZW5mb3JjZXIgbOKAmWVuZ2FnZW1lbnQgZXQgZGUgc3VydmVpbGxlciBsZXMgY29tbWVudGFpcmVzIGV0IGxlcyBvcGluaW9ucyBkZXMgY2xpZW50cy4gQ2VsYSBwZXV0IGNvbmR1aXJlIMOgIHVuZSBtZWlsbGV1cmUgc2F0aXNmYWN0aW9uIGRlIGxhIGNsaWVudMOobGUgZXQgw6AgdW5lIGFtw6lsaW9yYXRpb24gZGUgbGEgcsOpcHV0YXRpb24gZGUgbGEgbWFycXVlLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2ZhcTcnLFxyXG4gICAgdGl0bGU6XHJcbiAgICAgICdQb3VycXVvaSBlc3QtY2UgaW1wb3J0YW50IGRlIG1lbmVyIHVuZSBjYW1wYWduZSBwdWJsaWNpdGFpcmUgPycsXHJcbiAgICBjb250ZW51OlxyXG4gICAgICAnTGVzIGNhbXBhZ25lcyBwdWJsaWNpdGFpcmVzIHNvbnQgaW1wb3J0YW50ZXMgY2FyIGVsbGVzIHBlcm1ldHRlbnQgw6AgdW5lIGVudHJlcHJpc2UgZGUgcHJvbW91dm9pciBzZXMgcHJvZHVpdHMgb3Ugc2VydmljZXMgw6AgdW4gcHVibGljIGNpYmxlLiBVbmUgY2FtcGFnbmUgcHVibGljaXRhaXJlIGVmZmljYWNlIHBldXQgYXVnbWVudGVyIGxhIG5vdG9yacOpdMOpIGRlIGxhIG1hcnF1ZSwgc3RpbXVsZXIgbGVzIHZlbnRlcyBldCBhbcOpbGlvcmVyIGxhIHBhcnQgZGUgbWFyY2jDqS4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdmYXE4JyxcclxuICAgIHRpdGxlOlxyXG4gICAgICAnUG91cnF1b2kgZXN0LWNlIGltcG9ydGFudCBkZSBmYWlyZSBkdSBjb21tdW5pdHkgbWFuYWdlbWVudCA/JyxcclxuICAgIGNvbnRlbnU6XHJcbiAgICAgICdMZSBjb21tdW5pdHkgbWFuYWdlbWVudCBlc3QgaW1wb3J0YW50IGNhciBpbCBwZXJtZXQgw6AgdW5lIGVudHJlcHJpc2UgZGUgZ8OpcmVyIGV0IGTigJllbmdhZ2VyIHVuZSBjb21tdW5hdXTDqSBlbiBsaWduZSBhdXRvdXIgZGUgc2EgbWFycXVlIG91IGRlIHNvbiBwcm9kdWl0LiBDZWxhIHBldXQgY29uZHVpcmUgw6AgdW5lIHBsdXMgZ3JhbmRlIGZpZMOpbGl0w6kgw6AgbGEgbWFycXVlLCDDoCB1bmUgbWVpbGxldXJlIHNhdGlzZmFjdGlvbiBkZSBsYSBjbGllbnTDqGxlIGV0IMOgIHVuZSBhdWdtZW50YXRpb24gZGUgbOKAmWVuZ2FnZW1lbnQgZGVzIHV0aWxpc2F0ZXVycy4nLFxyXG4gIH0sXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZhcSgpIHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAvLyBPdXZyZSBsJ8OpbMOpbWVudCBjbGlxdcOpL0Zlcm1lIGwnw6lsw6ltZW50IHNpIG91dmVydFxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9IChpZCkgPT4ge1xyXG4gICAgaWYgKG9wZW4gPT09IGlkKSB7XHJcbiAgICAgIHNldE9wZW4obnVsbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRPcGVuKGlkKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHNlY3Rpb25cclxuICAgICAgICBpZD1cImZhcVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0YWJsZXR0ZTpoLWF1dG8gYmctcHJpbWFyeSB3LWZ1bGwgbXQtMTBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtdGl0bGVGb250IGZvbnQtYm9sZCB0ZXh0LTN4bCB1cHBlcmNhc2UgcHQtNCBwYi04XCI+XHJcbiAgICAgICAgICBGQVFcclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIHtmYXFzLm1hcCgoZmFxKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17ZmFxLmlkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB3LWZ1bGwgbWItNFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoM1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrT3BlbihmYXEuaWQpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcSBqdXN0aWZ5LWJldHdlZW4gZm9udC10aXRsZUZvbnQgZm9udC1ib2xkIGJnLXNlY29uZGFyeSByb3VuZGVkLXQtbGcgdy1mdWxsXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtmYXEudGl0bGV9XHJcbiAgICAgICAgICAgICAge29wZW4gPT09IGZhcS5pZCA/IChcclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4tc2xvdyBoLTYgdy02XCJcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2xvZ28vY2hldnJvbl91cC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvIGNoZXZyb24gdXBcIlxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkxvZ28gcG91ciBmZXJtZXIgbGEgcsOpcG9uc2VcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjR9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluLXNsb3dcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nby9jaGV2cm9uX2Rvd24uc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiTG9nbyBjaGV2cm9uIGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkxvZ28gcG91ciB2b2lyIGxhIHLDqXBvbnNlXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezI1fVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMS8yIHRhYmxldHRlOnctNC82IG1vYmlsZTp3LTQvNSBib3JkZXIgcm91bmRlZC1iLWxnIGZhcS1jb250ZW50IG92ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwICR7XHJcbiAgICAgICAgICAgICAgICBvcGVuID09PSBmYXEuaWRcclxuICAgICAgICAgICAgICAgICAgPyAnb3BhY2l0eS0xMDAgbWF4LWgtZnVsbCB0cmFuc2l0aW9uLW1heC1oIGR1cmF0aW9uLTUwMCdcclxuICAgICAgICAgICAgICAgICAgOiAnb3BhY2l0eS0wIG1heC1oLTAgdHJhbnNpdGlvbi1tYXgtaCBkdXJhdGlvbi0zMDAnXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1iLWxnIHAtNCAke1xyXG4gICAgICAgICAgICAgICAgICBvcGVuICE9PSBmYXEuaWQgJiYgJ2hpZGRlbidcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtmYXEuY29udGVudX1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG15LTEyXCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPVwiL0NvbnRhY3RcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdGEgbW9iaWxlOnNjYWxlLTkwIG1vYmlsZTpob3ZlcjpzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWb3VzIG4nYXZleiBwYXMgdHJvdXbDqSB2b3RyZSByw6lwb25zZSwgY2xpcXVleiBpY2lcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTGluayIsImZhcXMiLCJpZCIsInRpdGxlIiwiY29udGVudSIsIkZhcSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xpY2tPcGVuIiwiZGl2Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwiZmFxIiwiaDMiLCJvbkNsaWNrIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Faq/Faq.jsx\n"));

/***/ })

});