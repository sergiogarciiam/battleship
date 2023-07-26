/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/app.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/app.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* GENERAL */
.page {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
}

/* GAMEBOARD */
.gameBoard {
  position: relative;
  display: flex;
  width: 550px;
  flex-wrap: wrap;
}

.cell {
  position: relative;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  cursor: pointer;
}

.cell:hover {
  opacity: 0.7;
}

.color {
  background-color: blue;
}

.hit {
  background-color: red;
}

.miss {
  background-color: gray;
}

/* FINISH */
.finish-menu {
  position: absolute;
  width: 500px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #111;
  z-index: 1;
}

/* POSITION */
.ship-position {
  position: absolute;
  display: none;
  background-color: blue;
}

.cell:hover > .ship-position {
  display: inline;
}

.horizontal {
  height: 50px;
}

.vertical {
  width: 50px;
}

.carrier.horizontal {
  width: 259px;
  color: rgb(166, 87, 87);
}

.carrier.vertical {
  height: 259px;
  color: rgb(166, 87, 87);
}

.battleship.horizontal {
  width: 209px;
  color: rgb(166, 148, 87);
}

.battleship.vertical {
  height: 209px;
  color: rgb(166, 148, 87);
}

.cruiser.horizontal {
  width: 159px;
  color: rgb(115, 166, 87);
}

.cruiser.vertical {
  height: 159px;
  color: rgb(115, 166, 87);
}

.submarine.horizontal {
  width: 159px;
  color: rgb(87, 152, 166);
}

.submarine.vertical {
  height: 159px;
  color: rgb(87, 152, 166);
}

.destroyer.horizontal {
  width: 109px;
  color: rgb(132, 87, 166);
}

.destroyer.vertical {
  height: 109px;
  color: rgb(132, 87, 166);
}

/* UTILITY */
.blocker {
  position: absolute;
  width: 100%;
  height: 100%;
}

.hide {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/app.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;;EAEnB,SAAS;AACX;;AAEA,cAAc;AACd;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA,WAAW;AACX;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;;EAEvB,sBAAsB;EACtB,UAAU;AACZ;;AAEA,aAAa;AACb;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA,YAAY;AACZ;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;AACf","sourcesContent":["/* GENERAL */\n.page {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  gap: 20px;\n}\n\n/* GAMEBOARD */\n.gameBoard {\n  position: relative;\n  display: flex;\n  width: 550px;\n  flex-wrap: wrap;\n}\n\n.cell {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n.cell:hover {\n  opacity: 0.7;\n}\n\n.color {\n  background-color: blue;\n}\n\n.hit {\n  background-color: red;\n}\n\n.miss {\n  background-color: gray;\n}\n\n/* FINISH */\n.finish-menu {\n  position: absolute;\n  width: 500px;\n  height: 500px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  background-color: #111;\n  z-index: 1;\n}\n\n/* POSITION */\n.ship-position {\n  position: absolute;\n  display: none;\n  background-color: blue;\n}\n\n.cell:hover > .ship-position {\n  display: inline;\n}\n\n.horizontal {\n  height: 50px;\n}\n\n.vertical {\n  width: 50px;\n}\n\n.carrier.horizontal {\n  width: 259px;\n  color: rgb(166, 87, 87);\n}\n\n.carrier.vertical {\n  height: 259px;\n  color: rgb(166, 87, 87);\n}\n\n.battleship.horizontal {\n  width: 209px;\n  color: rgb(166, 148, 87);\n}\n\n.battleship.vertical {\n  height: 209px;\n  color: rgb(166, 148, 87);\n}\n\n.cruiser.horizontal {\n  width: 159px;\n  color: rgb(115, 166, 87);\n}\n\n.cruiser.vertical {\n  height: 159px;\n  color: rgb(115, 166, 87);\n}\n\n.submarine.horizontal {\n  width: 159px;\n  color: rgb(87, 152, 166);\n}\n\n.submarine.vertical {\n  height: 159px;\n  color: rgb(87, 152, 166);\n}\n\n.destroyer.horizontal {\n  width: 109px;\n  color: rgb(132, 87, 166);\n}\n\n.destroyer.vertical {\n  height: 109px;\n  color: rgb(132, 87, 166);\n}\n\n/* UTILITY */\n.blocker {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/mainMenu.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/mainMenu.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.main-menu {
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.main-menu > h1 {
  font-size: 100px;
}

.main-menu__buttons-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/mainMenu.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX","sourcesContent":[".main-menu {\n  margin-top: 5%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.main-menu > h1 {\n  font-size: 100px;\n}\n\n.main-menu__buttons-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles/app.css":
/*!***********************************!*\
  !*** ./src/assets/styles/app.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/app.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/styles/mainMenu.css":
/*!****************************************!*\
  !*** ./src/assets/styles/mainMenu.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mainMenu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./mainMenu.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/mainMenu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mainMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mainMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mainMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mainMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/blocker.js":
/*!***********************************!*\
  !*** ./src/components/blocker.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockerComponent: () => (/* binding */ blockerComponent)
/* harmony export */ });
const blockerComponent = (() => {
  const setUp = (isTurn) => {
    const blocker = document.createElement("div");
    blocker.classList.add("blocker");

    if (!isTurn) blocker.classList.add("hide");

    return blocker;
  };

  return { setUp };
})();


/***/ }),

/***/ "./src/components/finishMenu.js":
/*!**************************************!*\
  !*** ./src/components/finishMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   finishMenuComponent: () => (/* binding */ finishMenuComponent)
/* harmony export */ });
/* harmony import */ var _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/gameLoop */ "./src/controllers/gameLoop.js");
/* harmony import */ var _mainMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainMenu */ "./src/components/mainMenu.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "./src/components/page.js");




const finishMenuComponent = (() => {
  const setUp = (player) => {
    const finishMenu = document.createElement("div");
    const title = document.createElement("h3");
    const playAgainButton = document.createElement("button");
    const mainMenuButton = document.createElement("button");

    finishMenu.classList.add("finish-menu");
    finishMenu.classList.add("hide");

    title.textContent = "";
    playAgainButton.textContent = "Play Again";
    mainMenuButton.textContent = "Main Menu";

    playAgainButton.addEventListener("click", playAgain);
    mainMenuButton.addEventListener("click", goBackMainMenu);

    finishMenu.appendChild(title);
    finishMenu.appendChild(playAgainButton);
    finishMenu.appendChild(mainMenuButton);

    return finishMenu;
  };

  function playAgain(event) {
    event.target.parentNode.classList.add("hide");
    _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.setUpShipsChooseMenu();
  }

  function goBackMainMenu(event) {
    event.target.parentNode.classList.add("hide");
    _page__WEBPACK_IMPORTED_MODULE_2__.pageComponent.showMainMenu();
  }

  return { setUp };
})();


/***/ }),

/***/ "./src/components/gameboard.js":
/*!*************************************!*\
  !*** ./src/components/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameBoardComponent: () => (/* binding */ gameBoardComponent)
/* harmony export */ });
/* harmony import */ var _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/gameLoop */ "./src/controllers/gameLoop.js");
/* harmony import */ var _blocker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocker */ "./src/components/blocker.js");



const gameBoardComponent = (() => {
  let myBoard = null;
  let myPlayer = null;

  const setUp = (player) => {
    myPlayer = player;
    myBoard = player.board;

    const gameBoard = document.createElement("div");
    gameBoard.classList.add("gameBoard");
    gameBoard.dataset.player = "" + player.number;

    let isShip = false;
    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {
        const element = myBoard.board[row][column];
        gameBoard.appendChild(createCell(row, column, element));
      }
    }

    gameBoard.appendChild(_blocker__WEBPACK_IMPORTED_MODULE_1__.blockerComponent.setUp(myPlayer.isTurn));

    return gameBoard;
  };

  function createCell(row, column, element) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.row = row;
    cell.dataset.column = column;

    if (
      myPlayer.type !== "bot" &&
      typeof element === "object" &&
      !myPlayer.isTurn
    ) {
      cell.classList.add("ship");
    } else if (
      myPlayer.type !== "bot" &&
      typeof element === "object" &&
      myPlayer.isTurn
    ) {
      cell.classList.add("ship");
      cell.classList.add("color");
    }

    if (element === -1) {
      cell.classList.add("miss");
      cell.style.cursor = "default";
    } else if (element === 1) {
      cell.classList.add("hit");
      cell.style.cursor = "default";
    } else {
      cell.addEventListener("click", attack);
    }

    return cell;
  }

  function attack(event) {
    const target = event.target;
    const enemy = target.parentNode.dataset.player;

    _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.attack(enemy, target.dataset.row, target.dataset.column);
  }

  const changeCellColor = (isHit, number, row, column) => {
    const board = document.querySelector(`[data-player="${number}"]`);
    const cell = board.querySelector(
      `[data-row="${row}"][data-column="${column}"]`
    );

    if (isHit) {
      cell.classList.add("hit");
    } else {
      cell.classList.add("miss");
    }

    cell.removeEventListener("click", attack);
    cell.style.cursor = "default";
  };

  return { setUp, changeCellColor };
})();


/***/ }),

/***/ "./src/components/mainMenu.js":
/*!************************************!*\
  !*** ./src/components/mainMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainMenu: () => (/* binding */ mainMenu)
/* harmony export */ });
/* harmony import */ var _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/gameLoop */ "./src/controllers/gameLoop.js");


const mainMenu = (() => {
  const setUp = () => {
    const mainMenu = document.createElement("main");
    const buttonsContainer = document.createElement("div");
    const singlePlayerButton = document.createElement("button");
    const multiPlayerButton = document.createElement("button");

    mainMenu.classList.add("main-menu");
    buttonsContainer.classList.add("main-menu__buttons-container");

    singlePlayerButton.textContent = "Human vs Bot";
    multiPlayerButton.textContent = "Human vs Human";

    singlePlayerButton.addEventListener("click", startSingleGame);
    multiPlayerButton.addEventListener("click", startMultiplayerGame);

    buttonsContainer.appendChild(singlePlayerButton);
    buttonsContainer.appendChild(multiPlayerButton);

    mainMenu.appendChild(buttonsContainer);

    return mainMenu;
  };

  function startSingleGame() {
    _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.setUpPlayers("human", "bot");
    _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.setUpShipsChooseMenu();
  }

  function startMultiplayerGame() {
    _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.setUpPlayers("human", "human");
    _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.setUpShipsChooseMenu();
  }

  return { setUp };
})();


/***/ }),

/***/ "./src/components/page.js":
/*!********************************!*\
  !*** ./src/components/page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pageComponent: () => (/* binding */ pageComponent)
/* harmony export */ });
/* harmony import */ var _finishMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finishMenu */ "./src/components/finishMenu.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/components/gameboard.js");
/* harmony import */ var _mainMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainMenu */ "./src/components/mainMenu.js");
/* harmony import */ var _passDeviceMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passDeviceMenu */ "./src/components/passDeviceMenu.js");
/* harmony import */ var _shipsChooseMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shipsChooseMenu */ "./src/components/shipsChooseMenu.js");






const pageComponent = (() => {
  let page = null;
  let title = null;

  const setUp = () => {
    page = document.createElement("div");
    title = document.createElement("h1");

    page.classList.add("page");
    title.classList.add("title");

    title.textContent = "Battleships";

    page.appendChild(title);
    page.appendChild(_mainMenu__WEBPACK_IMPORTED_MODULE_2__.mainMenu.setUp());
    page.appendChild(_finishMenu__WEBPACK_IMPORTED_MODULE_0__.finishMenuComponent.setUp());

    return page;
  };

  const showMainMenu = () => {
    const main = document.querySelector("main");

    title.textContent = "Battleships";
    main.remove();
    page.appendChild(_mainMenu__WEBPACK_IMPORTED_MODULE_2__.mainMenu.setUp());
  };

  const showChooseShipsMenu = (player) => {
    const main = document.querySelector("main");

    title.textContent = `Player ${player.number + 1}: choose your ships`;
    main.remove();
    page.appendChild(_shipsChooseMenu__WEBPACK_IMPORTED_MODULE_4__.shipsChooseMenu.setUp(player));
  };

  const showPassDeviceMenu = (player) => {
    const main = document.querySelector("main");

    title.textContent = "Pass the device";
    main.remove();
    page.appendChild(_passDeviceMenu__WEBPACK_IMPORTED_MODULE_3__.passDeviceMenu.setUp(player));
  };

  const showGameBoards = (players) => {
    const playerTurn = players[0].isTurn
      ? players[0].number
      : players[1].number;

    let main = document.querySelector("main");
    main.remove();

    title.textContent = `Player ${playerTurn + 1}: choose one cell`;

    main = document.createElement("main");
    main.appendChild(_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameBoardComponent.setUp(players[0]));
    main.appendChild(_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameBoardComponent.setUp(players[1]));

    page.appendChild(main);
  };

  const showFinishMenu = () => {
    const finishMenu = document.querySelector(".finish-menu");
    const title = finishMenu.querySelector("h3");

    finishMenu.classList.remove("hide");
    title.textContent = "Game Over";
  };

  return {
    setUp,
    showMainMenu,
    showChooseShipsMenu,
    showPassDeviceMenu,
    showGameBoards,
    showFinishMenu,
  };
})();


/***/ }),

/***/ "./src/components/passDeviceMenu.js":
/*!******************************************!*\
  !*** ./src/components/passDeviceMenu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   passDeviceMenu: () => (/* binding */ passDeviceMenu)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/components/page.js");


const passDeviceMenu = (() => {
  let myPlayer = null;

  const setUp = (player) => {
    myPlayer = player;

    const passDeviceMenu = document.createElement("main");
    const button = document.createElement("button");

    passDeviceMenu.classList.add("pass-device-menu");

    button.textContent = "Next Turn";
    button.addEventListener("click", hidePassDeviceMenu);

    passDeviceMenu.appendChild(button);

    return passDeviceMenu;
  };

  function hidePassDeviceMenu() {
    if (!Array.isArray(myPlayer)) _page__WEBPACK_IMPORTED_MODULE_0__.pageComponent.showChooseShipsMenu(myPlayer);
    else _page__WEBPACK_IMPORTED_MODULE_0__.pageComponent.showGameBoards(myPlayer);
  }

  return { setUp };
})();


/***/ }),

/***/ "./src/components/shipsChooseMenu.js":
/*!*******************************************!*\
  !*** ./src/components/shipsChooseMenu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shipsChooseMenu: () => (/* binding */ shipsChooseMenu)
/* harmony export */ });
/* harmony import */ var _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/gameLoop */ "./src/controllers/gameLoop.js");


const shipsChooseMenu = (() => {
  let myPlayer = null;
  let actualShip = "";
  let orientation = "";

  const setUp = (player) => {
    const shipsChooseMenu = document.createElement("main");
    shipsChooseMenu.classList.add("ships-choose-menu");

    myPlayer = player;
    actualShip = "carrier";
    orientation = "horizontal";

    shipsChooseMenu.appendChild(createButton());
    shipsChooseMenu.appendChild(createGameBoard());

    return shipsChooseMenu;
  };

  function createButton() {
    const button = document.createElement("button");
    button.textContent = "Rotate";
    button.addEventListener("click", rotateShip);
    return button;
  }

  function createGameBoard() {
    const gameBoard = document.createElement("div");
    const myBoard = myPlayer.board.board;
    gameBoard.classList.add("gameBoard");

    let isShip = false;
    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {
        if (typeof myBoard[row][column] == "object") isShip = true;
        gameBoard.appendChild(createCell(row, column, isShip));
        isShip = false;
      }
    }

    return gameBoard;
  }

  function createCell(row, column, isShip) {
    const cell = document.createElement("div");
    const shipPosition = document.createElement("div");

    cell.classList.add("cell");

    shipPosition.classList.add("ship-position");

    shipPosition.classList.add(orientation);
    shipPosition.classList.add(actualShip);

    cell.dataset.row = row;
    cell.dataset.column = column;

    cell.addEventListener("click", addShip);

    cell.appendChild(shipPosition);

    if (isShip) {
      cell.classList.add("ship");
      cell.classList.add("color");
    }

    return cell;
  }

  function addShip(e) {
    const shipsChooseMenu = document.querySelector(".ships-choose-menu");
    const row = +e.target.parentNode.dataset.row;
    const column = +e.target.parentNode.dataset.column;

    const isPlaced = myPlayer.board.placeShip(
      row,
      column,
      actualShip,
      orientation === "horizontal"
    );

    if (!isPlaced) return;

    actualShip =
      actualShip === "carrier"
        ? "battleship"
        : actualShip === "battleship"
        ? "cruiser"
        : actualShip === "cruiser"
        ? "submarine"
        : actualShip === "submarine"
        ? "destroyer"
        : "";

    if (actualShip === "") {
      _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.setUpShipsChooseMenu(myPlayer.number + 1);
      return;
    }

    shipsChooseMenu.childNodes[1].remove();
    shipsChooseMenu.appendChild(createGameBoard());
  }

  function rotateShip() {
    const shipsPosition = document.querySelectorAll(".ship-position");
    shipsPosition.forEach((ship) => {
      ship.classList.toggle("vertical");
      ship.classList.toggle("horizontal");
    });

    orientation = orientation === "horizontal" ? "vertical" : "horizontal";
  }

  return { setUp };
})();


/***/ }),

/***/ "./src/controllers/gameLoop.js":
/*!*************************************!*\
  !*** ./src/controllers/gameLoop.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameLoop: () => (/* binding */ GameLoop)
/* harmony export */ });
/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/player */ "./src/factories/player.js");
/* harmony import */ var _factories_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/gameboard */ "./src/factories/gameboard.js");
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/page */ "./src/components/page.js");
/* harmony import */ var _components_gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/gameboard */ "./src/components/gameboard.js");






const GameLoop = (() => {
  let players = [];

  const setUp = () => {
    document.body.appendChild(_components_page__WEBPACK_IMPORTED_MODULE_2__.pageComponent.setUp());
  };

  const setUpPlayers = (typePlayer1, typePlayer2) => {
    const gameBoard1 = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard();
    const gameBoard2 = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard();

    players = [];

    players.push(new _factories_player__WEBPACK_IMPORTED_MODULE_0__.Player(0, typePlayer1, gameBoard1, true));
    players.push(new _factories_player__WEBPACK_IMPORTED_MODULE_0__.Player(1, typePlayer2, gameBoard2, false));
  };

  const setUpShipsChooseMenu = (number = 0) => {
    const player = players[number];

    if (number === 2) {
      _components_page__WEBPACK_IMPORTED_MODULE_2__.pageComponent.showGameBoards(players);
      return;
    }

    if (player.type === "human") {
      _components_page__WEBPACK_IMPORTED_MODULE_2__.pageComponent.showPassDeviceMenu(player);
    } else {
      player.board.generateRandomBoard();
      _components_page__WEBPACK_IMPORTED_MODULE_2__.pageComponent.showGameBoards(players);
    }
  };

  const attack = (enemy, row, column) => {
    _components_gameboard__WEBPACK_IMPORTED_MODULE_3__.gameBoardComponent.changeCellColor(
      players[enemy].board.receiveAttack(row, column),
      players[enemy].number,
      row,
      column
    );

    if (players[enemy].board.isGameOver()) _components_page__WEBPACK_IMPORTED_MODULE_2__.pageComponent.showFinishMenu();

    if (players[1].type === "human") {
      const board = document.querySelector(`[data-player="${enemy}"]`);
      const blocker = board.querySelector(".blocker");
      blocker.classList.remove("hide");

      players[0].isTurn = players[0].isTurn ? false : true;
      players[1].isTurn = players[1].isTurn ? false : true;

      setTimeout(() => _components_page__WEBPACK_IMPORTED_MODULE_2__.pageComponent.showPassDeviceMenu(players), 800);
    } else {
      attackBot();
    }
  };

  function attackBot() {
    const aiCoord = players[1].getCoordinates(players[0].board.board);

    _components_gameboard__WEBPACK_IMPORTED_MODULE_3__.gameBoardComponent.changeCellColor(
      players[0].board.receiveAttack(aiCoord[0], aiCoord[1]),
      players[0].number,
      aiCoord[0],
      aiCoord[1]
    );

    if (players[0].board.isGameOver()) _components_page__WEBPACK_IMPORTED_MODULE_2__.pageComponent.showFinishMenu();
  }

  return {
    setUp,
    setUpPlayers,
    setUpShipsChooseMenu,
    attack,
  };
})();


/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/factories/ship.js");


class GameBoard {
  constructor() {
    this.board = new Array(10).fill(0).map(() => new Array(10).fill(0));
  }

  placeShip(row, column, shipType, isHorizontal) {
    const temporalBoard = this.deepCopyBoard();
    const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(shipType);

    if (isHorizontal) {
      const max = column + ship.length;
      if (max > 10) return false;

      for (let index = column; index < max; index++) {
        if (typeof temporalBoard[row][index] === "object") return false;
        temporalBoard[row][index] = ship;
      }
    } else {
      const max = row + ship.length;
      if (max > 10) return false;

      for (let index = row; index < max; index++) {
        if (typeof temporalBoard[index][column] === "object") return false;
        temporalBoard[index][column] = ship;
      }
    }

    this.board = temporalBoard;
    return true;
  }

  receiveAttack(row, column) {
    let target = this.board[row][column];

    if (typeof target === "object") {
      target.hit();
      this.board[row][column] = 1;
      return true;
    } else if (target === 0) {
      this.board[row][column] = -1;
      return false;
    }
  }

  isGameOver() {
    return this.board.flat().every((cell) => typeof cell !== "object");
  }

  generateRandomBoard() {
    let typesShips = [
      "carrier",
      "battleship",
      "cruiser",
      "submarine",
      "destroyer",
    ];

    for (const shipType of typesShips) {
      let isPlaced = false;
      while (!isPlaced) {
        const row = this.getRandomInt(10);
        const column = this.getRandomInt(10);
        const isHorizontal = this.getRandomDirection();
        isPlaced = this.placeShip(row, column, shipType, isHorizontal);
      }
    }
  }

  deepCopyBoard() {
    const numRows = this.board.length;
    const numCols = this.board[0].length;

    const temporalBoard = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
      temporalBoard[i] = new Array(numCols);
    }

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        temporalBoard[row][col] = this.board[row][col];
      }
    }

    return temporalBoard;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandomDirection() {
    return Math.random() < 0.5; // Horizontal: true, Vertical: false
  }
}


/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
class Player {
  constructor(number, type, board, isTurn) {
    this.number = number;
    this.type = type;
    this.board = board;
    this.isTurn = isTurn;
  }

  getCoordinates(enemyBoard) {
    let boardPossibleHits = [];

    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {
        if (enemyBoard[row][column] === 1) {
          const betterCoordinates = this.getBetterCoordinates(
            enemyBoard,
            row,
            column
          );
          if (betterCoordinates !== null) return betterCoordinates;
        } else if (
          enemyBoard[row][column] !== 1 &&
          enemyBoard[row][column] !== -1
        ) {
          boardPossibleHits.push([row, column]);
        }
      }
    }

    let randomOption = Math.floor(Math.random() * boardPossibleHits.length);

    return boardPossibleHits[randomOption];
  }

  getHorizontal() {
    return Math.random() < 0.5;
  }

  getBetterCoordinates(enemyBoard, row, column) {
    const coordinate1 = row + 1 !== 10 ? enemyBoard[row + 1][column] : 1;
    const coordinate2 = row - 1 !== -1 ? enemyBoard[row - 1][column] : 1;
    const coordinate3 = column + 1 !== 10 ? enemyBoard[row][column + 1] : 1;
    const coordinate4 = column - 1 !== -1 ? enemyBoard[row][column - 1] : 1;

    if (coordinate1 !== 1 && coordinate1 !== -1) return [row + 1, column];
    else if (coordinate2 !== 1 && coordinate2 !== -1) return [row - 1, column];
    else if (coordinate3 !== 1 && coordinate3 !== -1) return [row, column + 1];
    else if (coordinate4 !== 1 && coordinate4 !== -1) return [row, column - 1];
    else return null;
  }
}


/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(type) {
    this._length = this.getLengthFromType(type);
    this._hits = 0;
    this._isSunk = false;
  }

  hit() {
    this._hits += 1;
    if (this._hits >= this._length) this._isSunk = true;
  }

  getLengthFromType(type) {
    return {
      carrier: 5,
      battleship: 4,
      cruiser: 3,
      submarine: 3,
      destroyer: 2,
    }[type];
  }

  get length() {
    return this._length;
  }

  get hits() {
    return this._hits;
  }

  get isSunk() {
    return this._isSunk;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/gameLoop */ "./src/controllers/gameLoop.js");
/* harmony import */ var _assets_styles_mainMenu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles/mainMenu.css */ "./src/assets/styles/mainMenu.css");
/* harmony import */ var _assets_styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles/app.css */ "./src/assets/styles/app.css");





_controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.setUp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDQWtEOztBQUVaO0FBQ0w7O0FBRWpDLDJEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGVzL21haW5NZW51LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGVzL2FwcC5jc3M/OWNjNSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbk1lbnUuY3NzPzA3NTgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvYmxvY2tlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZmluaXNoTWVudS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9tYWluTWVudS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvcGFzc0RldmljZU1lbnUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3NoaXBzQ2hvb3NlTWVudS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXJzL2dhbWVMb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogR0VORVJBTCAqL1xuLnBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGdhcDogMjBweDtcbn1cblxuLyogR0FNRUJPQVJEICovXG4uZ2FtZUJvYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTUwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNlbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jZWxsOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cbi8qIEZJTklTSCAqL1xuLmZpbmlzaC1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbiAgei1pbmRleDogMTtcbn1cblxuLyogUE9TSVRJT04gKi9cbi5zaGlwLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uY2VsbDpob3ZlciA+IC5zaGlwLXBvc2l0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uaG9yaXpvbnRhbCB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnZlcnRpY2FsIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5jYXJyaWVyLmhvcml6b250YWwge1xuICB3aWR0aDogMjU5cHg7XG4gIGNvbG9yOiByZ2IoMTY2LCA4NywgODcpO1xufVxuXG4uY2Fycmllci52ZXJ0aWNhbCB7XG4gIGhlaWdodDogMjU5cHg7XG4gIGNvbG9yOiByZ2IoMTY2LCA4NywgODcpO1xufVxuXG4uYmF0dGxlc2hpcC5ob3Jpem9udGFsIHtcbiAgd2lkdGg6IDIwOXB4O1xuICBjb2xvcjogcmdiKDE2NiwgMTQ4LCA4Nyk7XG59XG5cbi5iYXR0bGVzaGlwLnZlcnRpY2FsIHtcbiAgaGVpZ2h0OiAyMDlweDtcbiAgY29sb3I6IHJnYigxNjYsIDE0OCwgODcpO1xufVxuXG4uY3J1aXNlci5ob3Jpem9udGFsIHtcbiAgd2lkdGg6IDE1OXB4O1xuICBjb2xvcjogcmdiKDExNSwgMTY2LCA4Nyk7XG59XG5cbi5jcnVpc2VyLnZlcnRpY2FsIHtcbiAgaGVpZ2h0OiAxNTlweDtcbiAgY29sb3I6IHJnYigxMTUsIDE2NiwgODcpO1xufVxuXG4uc3VibWFyaW5lLmhvcml6b250YWwge1xuICB3aWR0aDogMTU5cHg7XG4gIGNvbG9yOiByZ2IoODcsIDE1MiwgMTY2KTtcbn1cblxuLnN1Ym1hcmluZS52ZXJ0aWNhbCB7XG4gIGhlaWdodDogMTU5cHg7XG4gIGNvbG9yOiByZ2IoODcsIDE1MiwgMTY2KTtcbn1cblxuLmRlc3Ryb3llci5ob3Jpem9udGFsIHtcbiAgd2lkdGg6IDEwOXB4O1xuICBjb2xvcjogcmdiKDEzMiwgODcsIDE2Nik7XG59XG5cbi5kZXN0cm95ZXIudmVydGljYWwge1xuICBoZWlnaHQ6IDEwOXB4O1xuICBjb2xvcjogcmdiKDEzMiwgODcsIDE2Nik7XG59XG5cbi8qIFVUSUxJVFkgKi9cbi5ibG9ja2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsWUFBWTtBQUNaO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsU0FBUztBQUNYOztBQUVBLGNBQWM7QUFDZDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7O0VBRWIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCOztFQUV2QixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUVBLGFBQWE7QUFDYjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUEsWUFBWTtBQUNaO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR0VORVJBTCAqL1xcbi5wYWdlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4vKiBHQU1FQk9BUkQgKi9cXG4uZ2FtZUJvYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNTUwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jZWxsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jZWxsOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4vKiBGSU5JU0ggKi9cXG4uZmluaXNoLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi8qIFBPU0lUSU9OICovXFxuLnNoaXAtcG9zaXRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5jZWxsOmhvdmVyID4gLnNoaXAtcG9zaXRpb24ge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi52ZXJ0aWNhbCB7XFxuICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmNhcnJpZXIuaG9yaXpvbnRhbCB7XFxuICB3aWR0aDogMjU5cHg7XFxuICBjb2xvcjogcmdiKDE2NiwgODcsIDg3KTtcXG59XFxuXFxuLmNhcnJpZXIudmVydGljYWwge1xcbiAgaGVpZ2h0OiAyNTlweDtcXG4gIGNvbG9yOiByZ2IoMTY2LCA4NywgODcpO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiAyMDlweDtcXG4gIGNvbG9yOiByZ2IoMTY2LCAxNDgsIDg3KTtcXG59XFxuXFxuLmJhdHRsZXNoaXAudmVydGljYWwge1xcbiAgaGVpZ2h0OiAyMDlweDtcXG4gIGNvbG9yOiByZ2IoMTY2LCAxNDgsIDg3KTtcXG59XFxuXFxuLmNydWlzZXIuaG9yaXpvbnRhbCB7XFxuICB3aWR0aDogMTU5cHg7XFxuICBjb2xvcjogcmdiKDExNSwgMTY2LCA4Nyk7XFxufVxcblxcbi5jcnVpc2VyLnZlcnRpY2FsIHtcXG4gIGhlaWdodDogMTU5cHg7XFxuICBjb2xvcjogcmdiKDExNSwgMTY2LCA4Nyk7XFxufVxcblxcbi5zdWJtYXJpbmUuaG9yaXpvbnRhbCB7XFxuICB3aWR0aDogMTU5cHg7XFxuICBjb2xvcjogcmdiKDg3LCAxNTIsIDE2Nik7XFxufVxcblxcbi5zdWJtYXJpbmUudmVydGljYWwge1xcbiAgaGVpZ2h0OiAxNTlweDtcXG4gIGNvbG9yOiByZ2IoODcsIDE1MiwgMTY2KTtcXG59XFxuXFxuLmRlc3Ryb3llci5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiAxMDlweDtcXG4gIGNvbG9yOiByZ2IoMTMyLCA4NywgMTY2KTtcXG59XFxuXFxuLmRlc3Ryb3llci52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IDEwOXB4O1xcbiAgY29sb3I6IHJnYigxMzIsIDg3LCAxNjYpO1xcbn1cXG5cXG4vKiBVVElMSVRZICovXFxuLmJsb2NrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1haW4tbWVudSB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG5cbi5tYWluLW1lbnUgPiBoMSB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG59XG5cbi5tYWluLW1lbnVfX2J1dHRvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9tYWluTWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4tbWVudSB7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWFpbi1tZW51ID4gaDEge1xcbiAgZm9udC1zaXplOiAxMDBweDtcXG59XFxuXFxuLm1haW4tbWVudV9fYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5NZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbk1lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgYmxvY2tlckNvbXBvbmVudCA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKGlzVHVybikgPT4ge1xuICAgIGNvbnN0IGJsb2NrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJsb2NrZXIuY2xhc3NMaXN0LmFkZChcImJsb2NrZXJcIik7XG5cbiAgICBpZiAoIWlzVHVybikgYmxvY2tlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICAgIHJldHVybiBibG9ja2VyO1xuICB9O1xuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgR2FtZUxvb3AgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvZ2FtZUxvb3BcIjtcbmltcG9ydCB7IG1haW5NZW51IH0gZnJvbSBcIi4vbWFpbk1lbnVcIjtcbmltcG9ydCB7IHBhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBmaW5pc2hNZW51Q29tcG9uZW50ID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0VXAgPSAocGxheWVyKSA9PiB7XG4gICAgY29uc3QgZmluaXNoTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBtYWluTWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBmaW5pc2hNZW51LmNsYXNzTGlzdC5hZGQoXCJmaW5pc2gtbWVudVwiKTtcbiAgICBmaW5pc2hNZW51LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHBsYXlBZ2FpbkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxheSBBZ2FpblwiO1xuICAgIG1haW5NZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNYWluIE1lbnVcIjtcblxuICAgIHBsYXlBZ2FpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheUFnYWluKTtcbiAgICBtYWluTWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29CYWNrTWFpbk1lbnUpO1xuXG4gICAgZmluaXNoTWVudS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZmluaXNoTWVudS5hcHBlbmRDaGlsZChwbGF5QWdhaW5CdXR0b24pO1xuICAgIGZpbmlzaE1lbnUuYXBwZW5kQ2hpbGQobWFpbk1lbnVCdXR0b24pO1xuXG4gICAgcmV0dXJuIGZpbmlzaE1lbnU7XG4gIH07XG5cbiAgZnVuY3Rpb24gcGxheUFnYWluKGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgR2FtZUxvb3Auc2V0VXBTaGlwc0Nob29zZU1lbnUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFja01haW5NZW51KGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgcGFnZUNvbXBvbmVudC5zaG93TWFpbk1lbnUoKTtcbiAgfVxuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgR2FtZUxvb3AgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvZ2FtZUxvb3BcIjtcbmltcG9ydCB7IGJsb2NrZXJDb21wb25lbnQgfSBmcm9tIFwiLi9ibG9ja2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnYW1lQm9hcmRDb21wb25lbnQgPSAoKCkgPT4ge1xuICBsZXQgbXlCb2FyZCA9IG51bGw7XG4gIGxldCBteVBsYXllciA9IG51bGw7XG5cbiAgY29uc3Qgc2V0VXAgPSAocGxheWVyKSA9PiB7XG4gICAgbXlQbGF5ZXIgPSBwbGF5ZXI7XG4gICAgbXlCb2FyZCA9IHBsYXllci5ib2FyZDtcblxuICAgIGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2FtZUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJnYW1lQm9hcmRcIik7XG4gICAgZ2FtZUJvYXJkLmRhdGFzZXQucGxheWVyID0gXCJcIiArIHBsYXllci5udW1iZXI7XG5cbiAgICBsZXQgaXNTaGlwID0gZmFsc2U7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCAxMDsgY29sdW1uKyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG15Qm9hcmQuYm9hcmRbcm93XVtjb2x1bW5dO1xuICAgICAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoY3JlYXRlQ2VsbChyb3csIGNvbHVtbiwgZWxlbWVudCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChibG9ja2VyQ29tcG9uZW50LnNldFVwKG15UGxheWVyLmlzVHVybikpO1xuXG4gICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVDZWxsKHJvdywgY29sdW1uLCBlbGVtZW50KSB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICBjZWxsLmRhdGFzZXQucm93ID0gcm93O1xuICAgIGNlbGwuZGF0YXNldC5jb2x1bW4gPSBjb2x1bW47XG5cbiAgICBpZiAoXG4gICAgICBteVBsYXllci50eXBlICE9PSBcImJvdFwiICYmXG4gICAgICB0eXBlb2YgZWxlbWVudCA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgIW15UGxheWVyLmlzVHVyblxuICAgICkge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgbXlQbGF5ZXIudHlwZSAhPT0gXCJib3RcIiAmJlxuICAgICAgdHlwZW9mIGVsZW1lbnQgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIG15UGxheWVyLmlzVHVyblxuICAgICkge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNvbG9yXCIpO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50ID09PSAtMSkge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSAxKSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICBjZWxsLnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBjZWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0YWNrKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGVuZW15ID0gdGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5wbGF5ZXI7XG5cbiAgICBHYW1lTG9vcC5hdHRhY2soZW5lbXksIHRhcmdldC5kYXRhc2V0LnJvdywgdGFyZ2V0LmRhdGFzZXQuY29sdW1uKTtcbiAgfVxuXG4gIGNvbnN0IGNoYW5nZUNlbGxDb2xvciA9IChpc0hpdCwgbnVtYmVyLCByb3csIGNvbHVtbikgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGxheWVyPVwiJHtudW1iZXJ9XCJdYCk7XG4gICAgY29uc3QgY2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sdW1uPVwiJHtjb2x1bW59XCJdYFxuICAgICk7XG5cbiAgICBpZiAoaXNIaXQpIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICB9XG5cbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2spO1xuICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0VXAsIGNoYW5nZUNlbGxDb2xvciB9O1xufSkoKTtcbiIsImltcG9ydCB7IEdhbWVMb29wIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2dhbWVMb29wXCI7XG5cbmV4cG9ydCBjb25zdCBtYWluTWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc2luZ2xlUGxheWVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBtdWx0aVBsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBtYWluTWVudS5jbGFzc0xpc3QuYWRkKFwibWFpbi1tZW51XCIpO1xuICAgIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tbWVudV9fYnV0dG9ucy1jb250YWluZXJcIik7XG5cbiAgICBzaW5nbGVQbGF5ZXJCdXR0b24udGV4dENvbnRlbnQgPSBcIkh1bWFuIHZzIEJvdFwiO1xuICAgIG11bHRpUGxheWVyQnV0dG9uLnRleHRDb250ZW50ID0gXCJIdW1hbiB2cyBIdW1hblwiO1xuXG4gICAgc2luZ2xlUGxheWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydFNpbmdsZUdhbWUpO1xuICAgIG11bHRpUGxheWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydE11bHRpcGxheWVyR2FtZSk7XG5cbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpbmdsZVBsYXllckJ1dHRvbik7XG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtdWx0aVBsYXllckJ1dHRvbik7XG5cbiAgICBtYWluTWVudS5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBtYWluTWVudTtcbiAgfTtcblxuICBmdW5jdGlvbiBzdGFydFNpbmdsZUdhbWUoKSB7XG4gICAgR2FtZUxvb3Auc2V0VXBQbGF5ZXJzKFwiaHVtYW5cIiwgXCJib3RcIik7XG4gICAgR2FtZUxvb3Auc2V0VXBTaGlwc0Nob29zZU1lbnUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0TXVsdGlwbGF5ZXJHYW1lKCkge1xuICAgIEdhbWVMb29wLnNldFVwUGxheWVycyhcImh1bWFuXCIsIFwiaHVtYW5cIik7XG4gICAgR2FtZUxvb3Auc2V0VXBTaGlwc0Nob29zZU1lbnUoKTtcbiAgfVxuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgZmluaXNoTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL2ZpbmlzaE1lbnVcIjtcbmltcG9ydCB7IGdhbWVCb2FyZENvbXBvbmVudCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgbWFpbk1lbnUgfSBmcm9tIFwiLi9tYWluTWVudVwiO1xuaW1wb3J0IHsgcGFzc0RldmljZU1lbnUgfSBmcm9tIFwiLi9wYXNzRGV2aWNlTWVudVwiO1xuaW1wb3J0IHsgc2hpcHNDaG9vc2VNZW51IH0gZnJvbSBcIi4vc2hpcHNDaG9vc2VNZW51XCI7XG5cbmV4cG9ydCBjb25zdCBwYWdlQ29tcG9uZW50ID0gKCgpID0+IHtcbiAgbGV0IHBhZ2UgPSBudWxsO1xuICBsZXQgdGl0bGUgPSBudWxsO1xuXG4gIGNvbnN0IHNldFVwID0gKCkgPT4ge1xuICAgIHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4gICAgcGFnZS5jbGFzc0xpc3QuYWRkKFwicGFnZVwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcHNcIjtcblxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQobWFpbk1lbnUuc2V0VXAoKSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChmaW5pc2hNZW51Q29tcG9uZW50LnNldFVwKCkpO1xuXG4gICAgcmV0dXJuIHBhZ2U7XG4gIH07XG5cbiAgY29uc3Qgc2hvd01haW5NZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJCYXR0bGVzaGlwc1wiO1xuICAgIG1haW4ucmVtb3ZlKCk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChtYWluTWVudS5zZXRVcCgpKTtcbiAgfTtcblxuICBjb25zdCBzaG93Q2hvb3NlU2hpcHNNZW51ID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYFBsYXllciAke3BsYXllci5udW1iZXIgKyAxfTogY2hvb3NlIHlvdXIgc2hpcHNgO1xuICAgIG1haW4ucmVtb3ZlKCk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChzaGlwc0Nob29zZU1lbnUuc2V0VXAocGxheWVyKSk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1Bhc3NEZXZpY2VNZW51ID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJQYXNzIHRoZSBkZXZpY2VcIjtcbiAgICBtYWluLnJlbW92ZSgpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQocGFzc0RldmljZU1lbnUuc2V0VXAocGxheWVyKSk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0dhbWVCb2FyZHMgPSAocGxheWVycykgPT4ge1xuICAgIGNvbnN0IHBsYXllclR1cm4gPSBwbGF5ZXJzWzBdLmlzVHVyblxuICAgICAgPyBwbGF5ZXJzWzBdLm51bWJlclxuICAgICAgOiBwbGF5ZXJzWzFdLm51bWJlcjtcblxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgbWFpbi5yZW1vdmUoKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYFBsYXllciAke3BsYXllclR1cm4gKyAxfTogY2hvb3NlIG9uZSBjZWxsYDtcblxuICAgIG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGdhbWVCb2FyZENvbXBvbmVudC5zZXRVcChwbGF5ZXJzWzBdKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChnYW1lQm9hcmRDb21wb25lbnQuc2V0VXAocGxheWVyc1sxXSkpO1xuXG4gICAgcGFnZS5hcHBlbmRDaGlsZChtYWluKTtcbiAgfTtcblxuICBjb25zdCBzaG93RmluaXNoTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBmaW5pc2hNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maW5pc2gtbWVudVwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGZpbmlzaE1lbnUucXVlcnlTZWxlY3RvcihcImgzXCIpO1xuXG4gICAgZmluaXNoTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiR2FtZSBPdmVyXCI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRVcCxcbiAgICBzaG93TWFpbk1lbnUsXG4gICAgc2hvd0Nob29zZVNoaXBzTWVudSxcbiAgICBzaG93UGFzc0RldmljZU1lbnUsXG4gICAgc2hvd0dhbWVCb2FyZHMsXG4gICAgc2hvd0ZpbmlzaE1lbnUsXG4gIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgcGFnZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IHBhc3NEZXZpY2VNZW51ID0gKCgpID0+IHtcbiAgbGV0IG15UGxheWVyID0gbnVsbDtcblxuICBjb25zdCBzZXRVcCA9IChwbGF5ZXIpID0+IHtcbiAgICBteVBsYXllciA9IHBsYXllcjtcblxuICAgIGNvbnN0IHBhc3NEZXZpY2VNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHBhc3NEZXZpY2VNZW51LmNsYXNzTGlzdC5hZGQoXCJwYXNzLWRldmljZS1tZW51XCIpO1xuXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJOZXh0IFR1cm5cIjtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVQYXNzRGV2aWNlTWVudSk7XG5cbiAgICBwYXNzRGV2aWNlTWVudS5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIHBhc3NEZXZpY2VNZW51O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGhpZGVQYXNzRGV2aWNlTWVudSgpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobXlQbGF5ZXIpKSBwYWdlQ29tcG9uZW50LnNob3dDaG9vc2VTaGlwc01lbnUobXlQbGF5ZXIpO1xuICAgIGVsc2UgcGFnZUNvbXBvbmVudC5zaG93R2FtZUJvYXJkcyhteVBsYXllcik7XG4gIH1cblxuICByZXR1cm4geyBzZXRVcCB9O1xufSkoKTtcbiIsImltcG9ydCB7IEdhbWVMb29wIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2dhbWVMb29wXCI7XG5cbmV4cG9ydCBjb25zdCBzaGlwc0Nob29zZU1lbnUgPSAoKCkgPT4ge1xuICBsZXQgbXlQbGF5ZXIgPSBudWxsO1xuICBsZXQgYWN0dWFsU2hpcCA9IFwiXCI7XG4gIGxldCBvcmllbnRhdGlvbiA9IFwiXCI7XG5cbiAgY29uc3Qgc2V0VXAgPSAocGxheWVyKSA9PiB7XG4gICAgY29uc3Qgc2hpcHNDaG9vc2VNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgc2hpcHNDaG9vc2VNZW51LmNsYXNzTGlzdC5hZGQoXCJzaGlwcy1jaG9vc2UtbWVudVwiKTtcblxuICAgIG15UGxheWVyID0gcGxheWVyO1xuICAgIGFjdHVhbFNoaXAgPSBcImNhcnJpZXJcIjtcbiAgICBvcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuXG4gICAgc2hpcHNDaG9vc2VNZW51LmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbigpKTtcbiAgICBzaGlwc0Nob29zZU1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlR2FtZUJvYXJkKCkpO1xuXG4gICAgcmV0dXJuIHNoaXBzQ2hvb3NlTWVudTtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlJvdGF0ZVwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm90YXRlU2hpcCk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUdhbWVCb2FyZCgpIHtcbiAgICBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG15Qm9hcmQgPSBteVBsYXllci5ib2FyZC5ib2FyZDtcbiAgICBnYW1lQm9hcmQuY2xhc3NMaXN0LmFkZChcImdhbWVCb2FyZFwiKTtcblxuICAgIGxldCBpc1NoaXAgPSBmYWxzZTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDEwOyBjb2x1bW4rKykge1xuICAgICAgICBpZiAodHlwZW9mIG15Qm9hcmRbcm93XVtjb2x1bW5dID09IFwib2JqZWN0XCIpIGlzU2hpcCA9IHRydWU7XG4gICAgICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChjcmVhdGVDZWxsKHJvdywgY29sdW1uLCBpc1NoaXApKTtcbiAgICAgICAgaXNTaGlwID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNlbGwocm93LCBjb2x1bW4sIGlzU2hpcCkge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNoaXBQb3NpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuXG4gICAgc2hpcFBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXBvc2l0aW9uXCIpO1xuXG4gICAgc2hpcFBvc2l0aW9uLmNsYXNzTGlzdC5hZGQob3JpZW50YXRpb24pO1xuICAgIHNoaXBQb3NpdGlvbi5jbGFzc0xpc3QuYWRkKGFjdHVhbFNoaXApO1xuXG4gICAgY2VsbC5kYXRhc2V0LnJvdyA9IHJvdztcbiAgICBjZWxsLmRhdGFzZXQuY29sdW1uID0gY29sdW1uO1xuXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkU2hpcCk7XG5cbiAgICBjZWxsLmFwcGVuZENoaWxkKHNoaXBQb3NpdGlvbik7XG5cbiAgICBpZiAoaXNTaGlwKSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY29sb3JcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNlbGw7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTaGlwKGUpIHtcbiAgICBjb25zdCBzaGlwc0Nob29zZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzLWNob29zZS1tZW51XCIpO1xuICAgIGNvbnN0IHJvdyA9ICtlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQucm93O1xuICAgIGNvbnN0IGNvbHVtbiA9ICtlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuY29sdW1uO1xuXG4gICAgY29uc3QgaXNQbGFjZWQgPSBteVBsYXllci5ib2FyZC5wbGFjZVNoaXAoXG4gICAgICByb3csXG4gICAgICBjb2x1bW4sXG4gICAgICBhY3R1YWxTaGlwLFxuICAgICAgb3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgKTtcblxuICAgIGlmICghaXNQbGFjZWQpIHJldHVybjtcblxuICAgIGFjdHVhbFNoaXAgPVxuICAgICAgYWN0dWFsU2hpcCA9PT0gXCJjYXJyaWVyXCJcbiAgICAgICAgPyBcImJhdHRsZXNoaXBcIlxuICAgICAgICA6IGFjdHVhbFNoaXAgPT09IFwiYmF0dGxlc2hpcFwiXG4gICAgICAgID8gXCJjcnVpc2VyXCJcbiAgICAgICAgOiBhY3R1YWxTaGlwID09PSBcImNydWlzZXJcIlxuICAgICAgICA/IFwic3VibWFyaW5lXCJcbiAgICAgICAgOiBhY3R1YWxTaGlwID09PSBcInN1Ym1hcmluZVwiXG4gICAgICAgID8gXCJkZXN0cm95ZXJcIlxuICAgICAgICA6IFwiXCI7XG5cbiAgICBpZiAoYWN0dWFsU2hpcCA9PT0gXCJcIikge1xuICAgICAgR2FtZUxvb3Auc2V0VXBTaGlwc0Nob29zZU1lbnUobXlQbGF5ZXIubnVtYmVyICsgMSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2hpcHNDaG9vc2VNZW51LmNoaWxkTm9kZXNbMV0ucmVtb3ZlKCk7XG4gICAgc2hpcHNDaG9vc2VNZW51LmFwcGVuZENoaWxkKGNyZWF0ZUdhbWVCb2FyZCgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJvdGF0ZVNoaXAoKSB7XG4gICAgY29uc3Qgc2hpcHNQb3NpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcC1wb3NpdGlvblwiKTtcbiAgICBzaGlwc1Bvc2l0aW9uLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuY2xhc3NMaXN0LnRvZ2dsZShcInZlcnRpY2FsXCIpO1xuICAgICAgc2hpcC5jbGFzc0xpc3QudG9nZ2xlKFwiaG9yaXpvbnRhbFwiKTtcbiAgICB9KTtcblxuICAgIG9yaWVudGF0aW9uID0gb3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG4gIH1cblxuICByZXR1cm4geyBzZXRVcCB9O1xufSkoKTtcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9mYWN0b3JpZXMvcGxheWVyXCI7XG5pbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi4vZmFjdG9yaWVzL2dhbWVib2FyZFwiO1xuXG5pbXBvcnQgeyBwYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnZVwiO1xuaW1wb3J0IHsgZ2FtZUJvYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZWJvYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBHYW1lTG9vcCA9ICgoKSA9PiB7XG4gIGxldCBwbGF5ZXJzID0gW107XG5cbiAgY29uc3Qgc2V0VXAgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlQ29tcG9uZW50LnNldFVwKCkpO1xuICB9O1xuXG4gIGNvbnN0IHNldFVwUGxheWVycyA9ICh0eXBlUGxheWVyMSwgdHlwZVBsYXllcjIpID0+IHtcbiAgICBjb25zdCBnYW1lQm9hcmQxID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgIGNvbnN0IGdhbWVCb2FyZDIgPSBuZXcgR2FtZUJvYXJkKCk7XG5cbiAgICBwbGF5ZXJzID0gW107XG5cbiAgICBwbGF5ZXJzLnB1c2gobmV3IFBsYXllcigwLCB0eXBlUGxheWVyMSwgZ2FtZUJvYXJkMSwgdHJ1ZSkpO1xuICAgIHBsYXllcnMucHVzaChuZXcgUGxheWVyKDEsIHR5cGVQbGF5ZXIyLCBnYW1lQm9hcmQyLCBmYWxzZSkpO1xuICB9O1xuXG4gIGNvbnN0IHNldFVwU2hpcHNDaG9vc2VNZW51ID0gKG51bWJlciA9IDApID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJzW251bWJlcl07XG5cbiAgICBpZiAobnVtYmVyID09PSAyKSB7XG4gICAgICBwYWdlQ29tcG9uZW50LnNob3dHYW1lQm9hcmRzKHBsYXllcnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwbGF5ZXIudHlwZSA9PT0gXCJodW1hblwiKSB7XG4gICAgICBwYWdlQ29tcG9uZW50LnNob3dQYXNzRGV2aWNlTWVudShwbGF5ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXIuYm9hcmQuZ2VuZXJhdGVSYW5kb21Cb2FyZCgpO1xuICAgICAgcGFnZUNvbXBvbmVudC5zaG93R2FtZUJvYXJkcyhwbGF5ZXJzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrID0gKGVuZW15LCByb3csIGNvbHVtbikgPT4ge1xuICAgIGdhbWVCb2FyZENvbXBvbmVudC5jaGFuZ2VDZWxsQ29sb3IoXG4gICAgICBwbGF5ZXJzW2VuZW15XS5ib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKSxcbiAgICAgIHBsYXllcnNbZW5lbXldLm51bWJlcixcbiAgICAgIHJvdyxcbiAgICAgIGNvbHVtblxuICAgICk7XG5cbiAgICBpZiAocGxheWVyc1tlbmVteV0uYm9hcmQuaXNHYW1lT3ZlcigpKSBwYWdlQ29tcG9uZW50LnNob3dGaW5pc2hNZW51KCk7XG5cbiAgICBpZiAocGxheWVyc1sxXS50eXBlID09PSBcImh1bWFuXCIpIHtcbiAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGxheWVyPVwiJHtlbmVteX1cIl1gKTtcbiAgICAgIGNvbnN0IGJsb2NrZXIgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFwiLmJsb2NrZXJcIik7XG4gICAgICBibG9ja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuXG4gICAgICBwbGF5ZXJzWzBdLmlzVHVybiA9IHBsYXllcnNbMF0uaXNUdXJuID8gZmFsc2UgOiB0cnVlO1xuICAgICAgcGxheWVyc1sxXS5pc1R1cm4gPSBwbGF5ZXJzWzFdLmlzVHVybiA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiBwYWdlQ29tcG9uZW50LnNob3dQYXNzRGV2aWNlTWVudShwbGF5ZXJzKSwgODAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0YWNrQm90KCk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGF0dGFja0JvdCgpIHtcbiAgICBjb25zdCBhaUNvb3JkID0gcGxheWVyc1sxXS5nZXRDb29yZGluYXRlcyhwbGF5ZXJzWzBdLmJvYXJkLmJvYXJkKTtcblxuICAgIGdhbWVCb2FyZENvbXBvbmVudC5jaGFuZ2VDZWxsQ29sb3IoXG4gICAgICBwbGF5ZXJzWzBdLmJvYXJkLnJlY2VpdmVBdHRhY2soYWlDb29yZFswXSwgYWlDb29yZFsxXSksXG4gICAgICBwbGF5ZXJzWzBdLm51bWJlcixcbiAgICAgIGFpQ29vcmRbMF0sXG4gICAgICBhaUNvb3JkWzFdXG4gICAgKTtcblxuICAgIGlmIChwbGF5ZXJzWzBdLmJvYXJkLmlzR2FtZU92ZXIoKSkgcGFnZUNvbXBvbmVudC5zaG93RmluaXNoTWVudSgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRVcCxcbiAgICBzZXRVcFBsYXllcnMsXG4gICAgc2V0VXBTaGlwc0Nob29zZU1lbnUsXG4gICAgYXR0YWNrLFxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEFycmF5KDEwKS5maWxsKDApLm1hcCgoKSA9PiBuZXcgQXJyYXkoMTApLmZpbGwoMCkpO1xuICB9XG5cbiAgcGxhY2VTaGlwKHJvdywgY29sdW1uLCBzaGlwVHlwZSwgaXNIb3Jpem9udGFsKSB7XG4gICAgY29uc3QgdGVtcG9yYWxCb2FyZCA9IHRoaXMuZGVlcENvcHlCb2FyZCgpO1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChzaGlwVHlwZSk7XG5cbiAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICBjb25zdCBtYXggPSBjb2x1bW4gKyBzaGlwLmxlbmd0aDtcbiAgICAgIGlmIChtYXggPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IGNvbHVtbjsgaW5kZXggPCBtYXg7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wb3JhbEJvYXJkW3Jvd11baW5kZXhdID09PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRlbXBvcmFsQm9hcmRbcm93XVtpbmRleF0gPSBzaGlwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXggPSByb3cgKyBzaGlwLmxlbmd0aDtcbiAgICAgIGlmIChtYXggPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IHJvdzsgaW5kZXggPCBtYXg7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wb3JhbEJvYXJkW2luZGV4XVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRlbXBvcmFsQm9hcmRbaW5kZXhdW2NvbHVtbl0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYm9hcmQgPSB0ZW1wb3JhbEJvYXJkO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbikge1xuICAgIGxldCB0YXJnZXQgPSB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXTtcblxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB0YXJnZXQuaGl0KCk7XG4gICAgICB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXSA9IDE7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gMCkge1xuICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0gPSAtMTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpc0dhbWVPdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmJvYXJkLmZsYXQoKS5ldmVyeSgoY2VsbCkgPT4gdHlwZW9mIGNlbGwgIT09IFwib2JqZWN0XCIpO1xuICB9XG5cbiAgZ2VuZXJhdGVSYW5kb21Cb2FyZCgpIHtcbiAgICBsZXQgdHlwZXNTaGlwcyA9IFtcbiAgICAgIFwiY2FycmllclwiLFxuICAgICAgXCJiYXR0bGVzaGlwXCIsXG4gICAgICBcImNydWlzZXJcIixcbiAgICAgIFwic3VibWFyaW5lXCIsXG4gICAgICBcImRlc3Ryb3llclwiLFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IHNoaXBUeXBlIG9mIHR5cGVzU2hpcHMpIHtcbiAgICAgIGxldCBpc1BsYWNlZCA9IGZhbHNlO1xuICAgICAgd2hpbGUgKCFpc1BsYWNlZCkge1xuICAgICAgICBjb25zdCByb3cgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcbiAgICAgICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy5nZXRSYW5kb21EaXJlY3Rpb24oKTtcbiAgICAgICAgaXNQbGFjZWQgPSB0aGlzLnBsYWNlU2hpcChyb3csIGNvbHVtbiwgc2hpcFR5cGUsIGlzSG9yaXpvbnRhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVlcENvcHlCb2FyZCgpIHtcbiAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5ib2FyZC5sZW5ndGg7XG4gICAgY29uc3QgbnVtQ29scyA9IHRoaXMuYm9hcmRbMF0ubGVuZ3RoO1xuXG4gICAgY29uc3QgdGVtcG9yYWxCb2FyZCA9IG5ldyBBcnJheShudW1Sb3dzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvd3M7IGkrKykge1xuICAgICAgdGVtcG9yYWxCb2FyZFtpXSA9IG5ldyBBcnJheShudW1Db2xzKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBudW1Sb3dzOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbnVtQ29sczsgY29sKyspIHtcbiAgICAgICAgdGVtcG9yYWxCb2FyZFtyb3ddW2NvbF0gPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcG9yYWxCb2FyZDtcbiAgfVxuXG4gIGdldFJhbmRvbUludChtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKTtcbiAgfVxuXG4gIGdldFJhbmRvbURpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA8IDAuNTsgLy8gSG9yaXpvbnRhbDogdHJ1ZSwgVmVydGljYWw6IGZhbHNlXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihudW1iZXIsIHR5cGUsIGJvYXJkLCBpc1R1cm4pIHtcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICB0aGlzLmlzVHVybiA9IGlzVHVybjtcbiAgfVxuXG4gIGdldENvb3JkaW5hdGVzKGVuZW15Qm9hcmQpIHtcbiAgICBsZXQgYm9hcmRQb3NzaWJsZUhpdHMgPSBbXTtcblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMTA7IGNvbHVtbisrKSB7XG4gICAgICAgIGlmIChlbmVteUJvYXJkW3Jvd11bY29sdW1uXSA9PT0gMSkge1xuICAgICAgICAgIGNvbnN0IGJldHRlckNvb3JkaW5hdGVzID0gdGhpcy5nZXRCZXR0ZXJDb29yZGluYXRlcyhcbiAgICAgICAgICAgIGVuZW15Qm9hcmQsXG4gICAgICAgICAgICByb3csXG4gICAgICAgICAgICBjb2x1bW5cbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChiZXR0ZXJDb29yZGluYXRlcyAhPT0gbnVsbCkgcmV0dXJuIGJldHRlckNvb3JkaW5hdGVzO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGVuZW15Qm9hcmRbcm93XVtjb2x1bW5dICE9PSAxICYmXG4gICAgICAgICAgZW5lbXlCb2FyZFtyb3ddW2NvbHVtbl0gIT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIGJvYXJkUG9zc2libGVIaXRzLnB1c2goW3JvdywgY29sdW1uXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcmFuZG9tT3B0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRQb3NzaWJsZUhpdHMubGVuZ3RoKTtcblxuICAgIHJldHVybiBib2FyZFBvc3NpYmxlSGl0c1tyYW5kb21PcHRpb25dO1xuICB9XG5cbiAgZ2V0SG9yaXpvbnRhbCgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA8IDAuNTtcbiAgfVxuXG4gIGdldEJldHRlckNvb3JkaW5hdGVzKGVuZW15Qm9hcmQsIHJvdywgY29sdW1uKSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZTEgPSByb3cgKyAxICE9PSAxMCA/IGVuZW15Qm9hcmRbcm93ICsgMV1bY29sdW1uXSA6IDE7XG4gICAgY29uc3QgY29vcmRpbmF0ZTIgPSByb3cgLSAxICE9PSAtMSA/IGVuZW15Qm9hcmRbcm93IC0gMV1bY29sdW1uXSA6IDE7XG4gICAgY29uc3QgY29vcmRpbmF0ZTMgPSBjb2x1bW4gKyAxICE9PSAxMCA/IGVuZW15Qm9hcmRbcm93XVtjb2x1bW4gKyAxXSA6IDE7XG4gICAgY29uc3QgY29vcmRpbmF0ZTQgPSBjb2x1bW4gLSAxICE9PSAtMSA/IGVuZW15Qm9hcmRbcm93XVtjb2x1bW4gLSAxXSA6IDE7XG5cbiAgICBpZiAoY29vcmRpbmF0ZTEgIT09IDEgJiYgY29vcmRpbmF0ZTEgIT09IC0xKSByZXR1cm4gW3JvdyArIDEsIGNvbHVtbl07XG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZTIgIT09IDEgJiYgY29vcmRpbmF0ZTIgIT09IC0xKSByZXR1cm4gW3JvdyAtIDEsIGNvbHVtbl07XG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZTMgIT09IDEgJiYgY29vcmRpbmF0ZTMgIT09IC0xKSByZXR1cm4gW3JvdywgY29sdW1uICsgMV07XG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZTQgIT09IDEgJiYgY29vcmRpbmF0ZTQgIT09IC0xKSByZXR1cm4gW3JvdywgY29sdW1uIC0gMV07XG4gICAgZWxzZSByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy5fbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGhGcm9tVHlwZSh0eXBlKTtcbiAgICB0aGlzLl9oaXRzID0gMDtcbiAgICB0aGlzLl9pc1N1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLl9oaXRzICs9IDE7XG4gICAgaWYgKHRoaXMuX2hpdHMgPj0gdGhpcy5fbGVuZ3RoKSB0aGlzLl9pc1N1bmsgPSB0cnVlO1xuICB9XG5cbiAgZ2V0TGVuZ3RoRnJvbVR5cGUodHlwZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXJyaWVyOiA1LFxuICAgICAgYmF0dGxlc2hpcDogNCxcbiAgICAgIGNydWlzZXI6IDMsXG4gICAgICBzdWJtYXJpbmU6IDMsXG4gICAgICBkZXN0cm95ZXI6IDIsXG4gICAgfVt0eXBlXTtcbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcbiAgfVxuXG4gIGdldCBoaXRzKCkge1xuICAgIHJldHVybiB0aGlzLl9oaXRzO1xuICB9XG5cbiAgZ2V0IGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTdW5rO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBHYW1lTG9vcCB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL2dhbWVMb29wXCI7XG5cbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy9tYWluTWVudS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzXCI7XG5cbkdhbWVMb29wLnNldFVwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=