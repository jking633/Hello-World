(window["webpackJsonpnike"] = window["webpackJsonpnike"] || []).push([["npm.tiny-warning"],{

/***/ "LUQC":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar isProduction = \"development\" === 'production';\nfunction warning(condition, message) {\n  if (!isProduction) {\n    if (condition) {\n      return;\n    }\n\n    var text = \"Warning: \" + message;\n\n    if (typeof console !== 'undefined') {\n      console.warn(text);\n    }\n\n    try {\n      throw Error(text);\n    } catch (x) {}\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (warning);\n\n\n//# sourceURL=webpack://nike/./node_modules/tiny-warning/dist/tiny-warning.esm.js?");

/***/ })

}]);