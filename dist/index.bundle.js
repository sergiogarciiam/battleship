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
:root {
  --background-color: #43789e;
  --main-color: #fff;
  --second-color: #222;

  --ship: blue;
  --hit: red;
  --miss: gray;
}

* {
  padding: 0;
  margin: 0;
}

body {
  padding: 20px;
  background: var(--background-color);
  color: var(--main-color);
}

.page {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 50px;
}

button {
  background-color: var(--main-color);
  color: var(--second-color);

  font-size: 1.1rem;
  font-weight: bold;

  padding: 10px 50px;

  border-radius: 20px;
  border: none;

  cursor: pointer;
  transition: transform 300ms;
}

button:hover {
  transform: scale(1.1);
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

/* RESPONSIVE */

@media screen and (max-width: 1000px) {
  .title {
    font-size: 3rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/app.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,oBAAoB;;EAEpB,YAAY;EACZ,UAAU;EACV,YAAY;AACd;;AAEA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;EACnC,0BAA0B;;EAE1B,iBAAiB;EACjB,iBAAiB;;EAEjB,kBAAkB;;EAElB,mBAAmB;EACnB,YAAY;;EAEZ,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;AACvB;;AAEA,YAAY;AACZ;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA,eAAe;;AAEf;EACE;IACE,eAAe;EACjB;AACF","sourcesContent":["/* GENERAL */\n:root {\n  --background-color: #43789e;\n  --main-color: #fff;\n  --second-color: #222;\n\n  --ship: blue;\n  --hit: red;\n  --miss: gray;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  padding: 20px;\n  background: var(--background-color);\n  color: var(--main-color);\n}\n\n.page {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.title {\n  font-size: 4rem;\n  font-weight: bold;\n  margin-bottom: 50px;\n}\n\nbutton {\n  background-color: var(--main-color);\n  color: var(--second-color);\n\n  font-size: 1.1rem;\n  font-weight: bold;\n\n  padding: 10px 50px;\n\n  border-radius: 20px;\n  border: none;\n\n  cursor: pointer;\n  transition: transform 300ms;\n}\n\nbutton:hover {\n  transform: scale(1.1);\n}\n\n/* UTILITY */\n.blocker {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.hide {\n  display: none;\n}\n\n/* RESPONSIVE */\n\n@media screen and (max-width: 1000px) {\n  .title {\n    font-size: 3rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/gameMenu.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/gameMenu.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.gameboards-container {
  display: flex;
  justify-content: center;
  gap: 100px;
}

.color {
  background-color: var(--ship);
}

.hit {
  background-color: var(--hit);
}

.miss {
  background-color: var(--miss);
}

@media screen and (max-width: 1200px) {
  .gameboards-container {
    flex-direction: column;
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/gameMenu.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF","sourcesContent":[".gameboards-container {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n.color {\n  background-color: var(--ship);\n}\n\n.hit {\n  background-color: var(--hit);\n}\n\n.miss {\n  background-color: var(--miss);\n}\n\n@media screen and (max-width: 1200px) {\n  .gameboards-container {\n    flex-direction: column;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/menus.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/menus.css ***!
  \***************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* MAIN MENU */
.main-menu {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.main-menu > a {
  font-size: 1.5rem;
  color: var(--main-color);
  align-self: center;
  margin-top: 50px;
}

/* OTHER MENUS */
.surrender-menu,
.finish-menu {
  position: absolute;

  width: 400px;
  height: 300px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  border-radius: 20px;
  background-color: var(--second-color);

  z-index: 1;
}

.surrender-menu > h3,
.finish-menu > h3 {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 50px;
}

@media screen and (max-width: 600px) {
  .surrender-menu,
  .finish-menu {
    width: 300px;
    height: 300px;
  }

  .surrender-menu > h3,
  .finish-menu > h3 {
    font-size: 3rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/menus.css"],"names":[],"mappings":"AAAA,cAAc;AACd;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,gBAAgB;AAChB;;EAEE,kBAAkB;;EAElB,YAAY;EACZ,aAAa;EACb,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;;EAET,mBAAmB;EACnB,qCAAqC;;EAErC,UAAU;AACZ;;AAEA;;EAEE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE;;IAEE,YAAY;IACZ,aAAa;EACf;;EAEA;;IAEE,eAAe;EACjB;AACF","sourcesContent":["/* MAIN MENU */\n.main-menu {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n\n.main-menu > a {\n  font-size: 1.5rem;\n  color: var(--main-color);\n  align-self: center;\n  margin-top: 50px;\n}\n\n/* OTHER MENUS */\n.surrender-menu,\n.finish-menu {\n  position: absolute;\n\n  width: 400px;\n  height: 300px;\n  padding: 20px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n\n  border-radius: 20px;\n  background-color: var(--second-color);\n\n  z-index: 1;\n}\n\n.surrender-menu > h3,\n.finish-menu > h3 {\n  font-size: 4rem;\n  font-weight: bold;\n  margin-bottom: 50px;\n}\n\n@media screen and (max-width: 600px) {\n  .surrender-menu,\n  .finish-menu {\n    width: 300px;\n    height: 300px;\n  }\n\n  .surrender-menu > h3,\n  .finish-menu > h3 {\n    font-size: 3rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/shipsChooseMenu.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/shipsChooseMenu.css ***!
  \*************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.ships-choose-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

.ship-position {
  position: absolute;
  display: none;
  background-color: var(--ship);
}

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
  border: 1px solid var(--second-color);
  cursor: pointer;
  transition: transform 300ms;
}

.cell:hover {
  transform: scale(1.1);
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
}

.carrier.vertical {
  height: 259px;
}

.battleship.horizontal {
  width: 209px;
}

.battleship.vertical {
  height: 209px;
}

.cruiser.horizontal {
  width: 159px;
}

.cruiser.vertical {
  height: 159px;
}

.submarine.horizontal {
  width: 159px;
}

.submarine.vertical {
  height: 159px;
}

.destroyer.horizontal {
  width: 109px;
}

.destroyer.vertical {
  height: 109px;
}

@media screen and (max-width: 600px) {
  .gameBoard {
    width: 300px;
  }

  .cell {
    width: 28px;
    height: 28px;
  }

  .horizontal {
    height: 28px;
  }

  .vertical {
    width: 28px;
  }

  .carrier.horizontal {
    width: 149px;
  }

  .carrier.vertical {
    height: 149px;
  }

  .battleship.horizontal {
    width: 121px;
  }

  .battleship.vertical {
    height: 121px;
  }

  .cruiser.horizontal {
    width: 93px;
  }

  .cruiser.vertical {
    height: 93px;
  }

  .submarine.horizontal {
    width: 93px;
  }

  .submarine.vertical {
    height: 93px;
  }

  .destroyer.horizontal {
    width: 65px;
  }

  .destroyer.vertical {
    height: 65px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/shipsChooseMenu.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,qCAAqC;EACrC,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;AACF","sourcesContent":[".ships-choose-menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n\n.ship-position {\n  position: absolute;\n  display: none;\n  background-color: var(--ship);\n}\n\n.gameBoard {\n  position: relative;\n  display: flex;\n  width: 550px;\n  flex-wrap: wrap;\n}\n\n.cell {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  border: 1px solid var(--second-color);\n  cursor: pointer;\n  transition: transform 300ms;\n}\n\n.cell:hover {\n  transform: scale(1.1);\n}\n\n.cell:hover > .ship-position {\n  display: inline;\n}\n\n.horizontal {\n  height: 50px;\n}\n\n.vertical {\n  width: 50px;\n}\n\n.carrier.horizontal {\n  width: 259px;\n}\n\n.carrier.vertical {\n  height: 259px;\n}\n\n.battleship.horizontal {\n  width: 209px;\n}\n\n.battleship.vertical {\n  height: 209px;\n}\n\n.cruiser.horizontal {\n  width: 159px;\n}\n\n.cruiser.vertical {\n  height: 159px;\n}\n\n.submarine.horizontal {\n  width: 159px;\n}\n\n.submarine.vertical {\n  height: 159px;\n}\n\n.destroyer.horizontal {\n  width: 109px;\n}\n\n.destroyer.vertical {\n  height: 109px;\n}\n\n@media screen and (max-width: 600px) {\n  .gameBoard {\n    width: 300px;\n  }\n\n  .cell {\n    width: 28px;\n    height: 28px;\n  }\n\n  .horizontal {\n    height: 28px;\n  }\n\n  .vertical {\n    width: 28px;\n  }\n\n  .carrier.horizontal {\n    width: 149px;\n  }\n\n  .carrier.vertical {\n    height: 149px;\n  }\n\n  .battleship.horizontal {\n    width: 121px;\n  }\n\n  .battleship.vertical {\n    height: 121px;\n  }\n\n  .cruiser.horizontal {\n    width: 93px;\n  }\n\n  .cruiser.vertical {\n    height: 93px;\n  }\n\n  .submarine.horizontal {\n    width: 93px;\n  }\n\n  .submarine.vertical {\n    height: 93px;\n  }\n\n  .destroyer.horizontal {\n    width: 65px;\n  }\n\n  .destroyer.vertical {\n    height: 65px;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/styles/gameMenu.css":
/*!****************************************!*\
  !*** ./src/assets/styles/gameMenu.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameMenu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./gameMenu.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/gameMenu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gameMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gameMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/styles/menus.css":
/*!*************************************!*\
  !*** ./src/assets/styles/menus.css ***!
  \*************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menus_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./menus.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/menus.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menus_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menus_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menus_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menus_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/styles/shipsChooseMenu.css":
/*!***********************************************!*\
  !*** ./src/assets/styles/shipsChooseMenu.css ***!
  \***********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shipsChooseMenu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./shipsChooseMenu.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/shipsChooseMenu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_shipsChooseMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_shipsChooseMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_shipsChooseMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_shipsChooseMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/components/page.js");



const finishMenuComponent = (() => {
  const setUp = () => {
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
    _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.resetPlayers();
    _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.setUpShipsChooseMenu();
  }

  function goBackMainMenu(event) {
    event.target.parentNode.classList.add("hide");
    _page__WEBPACK_IMPORTED_MODULE_1__.pageComponent.showMainMenu();
  }

  return { setUp };
})();


/***/ }),

/***/ "./src/components/gameMenu.js":
/*!************************************!*\
  !*** ./src/components/gameMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameMenu: () => (/* binding */ gameMenu)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/components/gameboard.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/components/page.js");



const gameMenu = (() => {
  const setUp = (players) => {
    const gameMenu = document.createElement("main");
    const gameBoardsContainer = document.createElement("div");
    const surrenderButton = document.createElement("button");

    gameMenu.classList.add("game-menu");
    gameBoardsContainer.classList.add("gameboards-container");

    surrenderButton.textContent = "Surrender";
    surrenderButton.addEventListener("click", _page__WEBPACK_IMPORTED_MODULE_1__.pageComponent.showSurrenderMenu);

    gameBoardsContainer.appendChild(_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameBoardComponent.setUp(players[0]));
    gameBoardsContainer.appendChild(_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameBoardComponent.setUp(players[1]));

    gameMenu.appendChild(gameBoardsContainer);
    gameMenu.appendChild(surrenderButton);

    return gameMenu;
  };

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
    const singlePlayerButton = document.createElement("button");
    const multiPlayerButton = document.createElement("button");

    mainMenu.classList.add("main-menu");

    singlePlayerButton.textContent = "Human vs Bot";
    multiPlayerButton.textContent = "Human vs Human";

    singlePlayerButton.addEventListener("click", startSingleGame);
    multiPlayerButton.addEventListener("click", startMultiplayerGame);

    mainMenu.appendChild(singlePlayerButton);
    mainMenu.appendChild(multiPlayerButton);
    mainMenu.appendChild(createLink());

    return mainMenu;
  };

  function createLink() {
    const link = document.createElement("a");

    link.textContent = "Sergio García";
    link.href = "https://github.com/sergiogarciiam";
    link.target = "__blank";

    return link;
  }

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
/* harmony import */ var _gameMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameMenu */ "./src/components/gameMenu.js");
/* harmony import */ var _mainMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainMenu */ "./src/components/mainMenu.js");
/* harmony import */ var _passDeviceMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passDeviceMenu */ "./src/components/passDeviceMenu.js");
/* harmony import */ var _shipsChooseMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shipsChooseMenu */ "./src/components/shipsChooseMenu.js");
/* harmony import */ var _surrenderMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./surrenderMenu */ "./src/components/surrenderMenu.js");







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
    page.appendChild(_surrenderMenu__WEBPACK_IMPORTED_MODULE_5__.surrenderMenuComponent.setUp());

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
    let main = document.querySelector("main");
    main.remove();

    const playerTurn = players[0].isTurn
      ? players[0].number
      : players[1].number;

    title.textContent = `Player ${playerTurn + 1}: choose one cell`;

    page.appendChild(_gameMenu__WEBPACK_IMPORTED_MODULE_1__.gameMenu.setUp(players));
  };

  const showSurrenderMenu = () => {
    const blockers = document.querySelectorAll(".blocker");
    const surrenderMenu = document.querySelector(".surrender-menu");

    blockers.forEach((blocker) => blocker.classList.remove("hide"));
    surrenderMenu.classList.remove("hide");
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
    showSurrenderMenu,
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

/***/ "./src/components/surrenderMenu.js":
/*!*****************************************!*\
  !*** ./src/components/surrenderMenu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   surrenderMenuComponent: () => (/* binding */ surrenderMenuComponent)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/components/page.js");


const surrenderMenuComponent = (() => {
  const setUp = () => {
    const surrenderMenu = document.createElement("div");
    const title = document.createElement("h3");
    const confirmButton = document.createElement("button");
    const backGameButton = document.createElement("button");

    surrenderMenu.classList.add("surrender-menu");
    surrenderMenu.classList.add("hide");

    title.textContent = "Are you sure?";
    confirmButton.textContent = "Yes!";
    backGameButton.textContent = "Nop";

    confirmButton.addEventListener("click", goBackMainMenu);
    backGameButton.addEventListener("click", hideMenu);

    surrenderMenu.appendChild(title);
    surrenderMenu.appendChild(confirmButton);
    surrenderMenu.appendChild(backGameButton);

    return surrenderMenu;
  };

  function hideMenu(event) {
    event.target.parentNode.classList.add("hide");
  }

  function goBackMainMenu(event) {
    event.target.parentNode.classList.add("hide");
    _page__WEBPACK_IMPORTED_MODULE_0__.pageComponent.showMainMenu();
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
    players = [];
    players.push(new _factories_player__WEBPACK_IMPORTED_MODULE_0__.Player(0, typePlayer1, new _factories_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard(), true));
    players.push(new _factories_player__WEBPACK_IMPORTED_MODULE_0__.Player(1, typePlayer2, new _factories_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard(), false));
  };

  const resetPlayers = () => {
    players[0].board = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard();
    players[1].board = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard();
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

    if (players[enemy].board.isGameOver()) endGame();

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

    if (players[0].board.isGameOver()) endGame();
  }

  function endGame() {
    const blockers = document.querySelectorAll(".blocker");
    blockers.forEach((blocker) => blocker.classList.remove("hide"));
    _components_page__WEBPACK_IMPORTED_MODULE_2__.pageComponent.showFinishMenu();
  }

  return {
    setUp,
    setUpPlayers,
    resetPlayers,
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
/* harmony import */ var _assets_styles_menus_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles/menus.css */ "./src/assets/styles/menus.css");
/* harmony import */ var _assets_styles_shipsChooseMenu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles/shipsChooseMenu.css */ "./src/assets/styles/shipsChooseMenu.css");
/* harmony import */ var _assets_styles_gameMenu_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/styles/gameMenu.css */ "./src/assets/styles/gameMenu.css");
/* harmony import */ var _assets_styles_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/styles/app.css */ "./src/assets/styles/app.css");







_controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.setUp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FrRDs7QUFFZjtBQUNVO0FBQ1A7QUFDTDs7QUFFakMsMkRBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZXMvZ2FtZU1lbnUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlcy9tZW51cy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGVzL3NoaXBzQ2hvb3NlTWVudS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzljYzUiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGVzL2dhbWVNZW51LmNzcz80MDdmIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlcy9tZW51cy5jc3M/YzhjZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZXMvc2hpcHNDaG9vc2VNZW51LmNzcz84NTVkIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2Jsb2NrZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2ZpbmlzaE1lbnUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVNZW51LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL21haW5NZW51LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9wYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9wYXNzRGV2aWNlTWVudS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvc2hpcHNDaG9vc2VNZW51LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9zdXJyZW5kZXJNZW51LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlcnMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBHRU5FUkFMICovXG46cm9vdCB7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzQzNzg5ZTtcbiAgLS1tYWluLWNvbG9yOiAjZmZmO1xuICAtLXNlY29uZC1jb2xvcjogIzIyMjtcblxuICAtLXNoaXA6IGJsdWU7XG4gIC0taGl0OiByZWQ7XG4gIC0tbWlzczogZ3JheTtcbn1cblxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi5wYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcblxuICBwYWRkaW5nOiAxMHB4IDUwcHg7XG5cbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xufVxuXG5idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi8qIFVUSUxJVFkgKi9cbi5ibG9ja2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFJFU1BPTlNJVkUgKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsWUFBWTtBQUNaO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixvQkFBb0I7O0VBRXBCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDBCQUEwQjs7RUFFMUIsaUJBQWlCO0VBQ2pCLGlCQUFpQjs7RUFFakIsa0JBQWtCOztFQUVsQixtQkFBbUI7RUFDbkIsWUFBWTs7RUFFWixlQUFlO0VBQ2YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLFlBQVk7QUFDWjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLGVBQWU7O0FBRWY7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHRU5FUkFMICovXFxuOnJvb3Qge1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjNDM3ODllO1xcbiAgLS1tYWluLWNvbG9yOiAjZmZmO1xcbiAgLS1zZWNvbmQtY29sb3I6ICMyMjI7XFxuXFxuICAtLXNoaXA6IGJsdWU7XFxuICAtLWhpdDogcmVkO1xcbiAgLS1taXNzOiBncmF5O1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG4ucGFnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuXFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgcGFkZGluZzogMTBweCA1MHB4O1xcblxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLyogVVRJTElUWSAqL1xcbi5ibG9ja2VyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBSRVNQT05TSVZFICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmdhbWVib2FyZHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTAwcHg7XG59XG5cbi5jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0KTtcbn1cblxuLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5nYW1lYm9hcmRzLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9nYW1lTWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWVib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTAwcHg7XFxufVxcblxcbi5jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAuZ2FtZWJvYXJkcy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIE1BSU4gTUVOVSAqL1xuLm1haW4tbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNTBweDtcbn1cblxuLm1haW4tbWVudSA+IGEge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi8qIE9USEVSIE1FTlVTICovXG4uc3VycmVuZGVyLW1lbnUsXG4uZmluaXNoLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcblxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuXG4gIHotaW5kZXg6IDE7XG59XG5cbi5zdXJyZW5kZXItbWVudSA+IGgzLFxuLmZpbmlzaC1tZW51ID4gaDMge1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc3VycmVuZGVyLW1lbnUsXG4gIC5maW5pc2gtbWVudSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cblxuICAuc3VycmVuZGVyLW1lbnUgPiBoMyxcbiAgLmZpbmlzaC1tZW51ID4gaDMge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9tZW51cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYztBQUNkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUEsZ0JBQWdCO0FBQ2hCOztFQUVFLGtCQUFrQjs7RUFFbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhOztFQUViLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7O0VBRVQsbUJBQW1CO0VBQ25CLHFDQUFxQzs7RUFFckMsVUFBVTtBQUNaOztBQUVBOztFQUVFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7O0lBRUUsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTUFJTiBNRU5VICovXFxuLm1haW4tbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLm1haW4tbWVudSA+IGEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4vKiBPVEhFUiBNRU5VUyAqL1xcbi5zdXJyZW5kZXItbWVudSxcXG4uZmluaXNoLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG5cXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5zdXJyZW5kZXItbWVudSA+IGgzLFxcbi5maW5pc2gtbWVudSA+IGgzIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5zdXJyZW5kZXItbWVudSxcXG4gIC5maW5pc2gtbWVudSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG5cXG4gIC5zdXJyZW5kZXItbWVudSA+IGgzLFxcbiAgLmZpbmlzaC1tZW51ID4gaDMge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNoaXBzLWNob29zZS1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1MHB4O1xufVxuXG4uc2hpcC1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XG59XG5cbi5nYW1lQm9hcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1NTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2VsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XG59XG5cbi5jZWxsOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uY2VsbDpob3ZlciA+IC5zaGlwLXBvc2l0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uaG9yaXpvbnRhbCB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnZlcnRpY2FsIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5jYXJyaWVyLmhvcml6b250YWwge1xuICB3aWR0aDogMjU5cHg7XG59XG5cbi5jYXJyaWVyLnZlcnRpY2FsIHtcbiAgaGVpZ2h0OiAyNTlweDtcbn1cblxuLmJhdHRsZXNoaXAuaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAyMDlweDtcbn1cblxuLmJhdHRsZXNoaXAudmVydGljYWwge1xuICBoZWlnaHQ6IDIwOXB4O1xufVxuXG4uY3J1aXNlci5ob3Jpem9udGFsIHtcbiAgd2lkdGg6IDE1OXB4O1xufVxuXG4uY3J1aXNlci52ZXJ0aWNhbCB7XG4gIGhlaWdodDogMTU5cHg7XG59XG5cbi5zdWJtYXJpbmUuaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxNTlweDtcbn1cblxuLnN1Ym1hcmluZS52ZXJ0aWNhbCB7XG4gIGhlaWdodDogMTU5cHg7XG59XG5cbi5kZXN0cm95ZXIuaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxMDlweDtcbn1cblxuLmRlc3Ryb3llci52ZXJ0aWNhbCB7XG4gIGhlaWdodDogMTA5cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5nYW1lQm9hcmQge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIC5jZWxsIHtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gIH1cblxuICAuaG9yaXpvbnRhbCB7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICB9XG5cbiAgLnZlcnRpY2FsIHtcbiAgICB3aWR0aDogMjhweDtcbiAgfVxuXG4gIC5jYXJyaWVyLmhvcml6b250YWwge1xuICAgIHdpZHRoOiAxNDlweDtcbiAgfVxuXG4gIC5jYXJyaWVyLnZlcnRpY2FsIHtcbiAgICBoZWlnaHQ6IDE0OXB4O1xuICB9XG5cbiAgLmJhdHRsZXNoaXAuaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IDEyMXB4O1xuICB9XG5cbiAgLmJhdHRsZXNoaXAudmVydGljYWwge1xuICAgIGhlaWdodDogMTIxcHg7XG4gIH1cblxuICAuY3J1aXNlci5ob3Jpem9udGFsIHtcbiAgICB3aWR0aDogOTNweDtcbiAgfVxuXG4gIC5jcnVpc2VyLnZlcnRpY2FsIHtcbiAgICBoZWlnaHQ6IDkzcHg7XG4gIH1cblxuICAuc3VibWFyaW5lLmhvcml6b250YWwge1xuICAgIHdpZHRoOiA5M3B4O1xuICB9XG5cbiAgLnN1Ym1hcmluZS52ZXJ0aWNhbCB7XG4gICAgaGVpZ2h0OiA5M3B4O1xuICB9XG5cbiAgLmRlc3Ryb3llci5ob3Jpem9udGFsIHtcbiAgICB3aWR0aDogNjVweDtcbiAgfVxuXG4gIC5kZXN0cm95ZXIudmVydGljYWwge1xuICAgIGhlaWdodDogNjVweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9zaGlwc0Nob29zZU1lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNoaXBzLWNob29zZS1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLnNoaXAtcG9zaXRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xcbn1cXG5cXG4uZ2FtZUJvYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNTUwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jZWxsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uY2VsbDpob3ZlciA+IC5zaGlwLXBvc2l0aW9uIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmhvcml6b250YWwge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4udmVydGljYWwge1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5jYXJyaWVyLmhvcml6b250YWwge1xcbiAgd2lkdGg6IDI1OXB4O1xcbn1cXG5cXG4uY2Fycmllci52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IDI1OXB4O1xcbn1cXG5cXG4uYmF0dGxlc2hpcC5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiAyMDlweDtcXG59XFxuXFxuLmJhdHRsZXNoaXAudmVydGljYWwge1xcbiAgaGVpZ2h0OiAyMDlweDtcXG59XFxuXFxuLmNydWlzZXIuaG9yaXpvbnRhbCB7XFxuICB3aWR0aDogMTU5cHg7XFxufVxcblxcbi5jcnVpc2VyLnZlcnRpY2FsIHtcXG4gIGhlaWdodDogMTU5cHg7XFxufVxcblxcbi5zdWJtYXJpbmUuaG9yaXpvbnRhbCB7XFxuICB3aWR0aDogMTU5cHg7XFxufVxcblxcbi5zdWJtYXJpbmUudmVydGljYWwge1xcbiAgaGVpZ2h0OiAxNTlweDtcXG59XFxuXFxuLmRlc3Ryb3llci5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiAxMDlweDtcXG59XFxuXFxuLmRlc3Ryb3llci52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IDEwOXB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmdhbWVCb2FyZCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG5cXG4gIC5jZWxsIHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gIH1cXG5cXG4gIC5ob3Jpem9udGFsIHtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgfVxcblxcbiAgLnZlcnRpY2FsIHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICB9XFxuXFxuICAuY2Fycmllci5ob3Jpem9udGFsIHtcXG4gICAgd2lkdGg6IDE0OXB4O1xcbiAgfVxcblxcbiAgLmNhcnJpZXIudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDE0OXB4O1xcbiAgfVxcblxcbiAgLmJhdHRsZXNoaXAuaG9yaXpvbnRhbCB7XFxuICAgIHdpZHRoOiAxMjFweDtcXG4gIH1cXG5cXG4gIC5iYXR0bGVzaGlwLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiAxMjFweDtcXG4gIH1cXG5cXG4gIC5jcnVpc2VyLmhvcml6b250YWwge1xcbiAgICB3aWR0aDogOTNweDtcXG4gIH1cXG5cXG4gIC5jcnVpc2VyLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA5M3B4O1xcbiAgfVxcblxcbiAgLnN1Ym1hcmluZS5ob3Jpem9udGFsIHtcXG4gICAgd2lkdGg6IDkzcHg7XFxuICB9XFxuXFxuICAuc3VibWFyaW5lLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA5M3B4O1xcbiAgfVxcblxcbiAgLmRlc3Ryb3llci5ob3Jpem9udGFsIHtcXG4gICAgd2lkdGg6IDY1cHg7XFxuICB9XFxuXFxuICAuZGVzdHJveWVyLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVNZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZU1lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBzQ2hvb3NlTWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBzQ2hvb3NlTWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBibG9ja2VyQ29tcG9uZW50ID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0VXAgPSAoaXNUdXJuKSA9PiB7XG4gICAgY29uc3QgYmxvY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmxvY2tlci5jbGFzc0xpc3QuYWRkKFwiYmxvY2tlclwiKTtcblxuICAgIGlmICghaXNUdXJuKSBibG9ja2VyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgcmV0dXJuIGJsb2NrZXI7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0VXAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBHYW1lTG9vcCB9IGZyb20gXCIuLi9jb250cm9sbGVycy9nYW1lTG9vcFwiO1xuaW1wb3J0IHsgcGFnZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IGZpbmlzaE1lbnVDb21wb25lbnQgPSAoKCkgPT4ge1xuICBjb25zdCBzZXRVcCA9ICgpID0+IHtcbiAgICBjb25zdCBmaW5pc2hNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IG1haW5NZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGZpbmlzaE1lbnUuY2xhc3NMaXN0LmFkZChcImZpbmlzaC1tZW51XCIpO1xuICAgIGZpbmlzaE1lbnUuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcGxheUFnYWluQnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGF5IEFnYWluXCI7XG4gICAgbWFpbk1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1haW4gTWVudVwiO1xuXG4gICAgcGxheUFnYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5QWdhaW4pO1xuICAgIG1haW5NZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb0JhY2tNYWluTWVudSk7XG5cbiAgICBmaW5pc2hNZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBmaW5pc2hNZW51LmFwcGVuZENoaWxkKHBsYXlBZ2FpbkJ1dHRvbik7XG4gICAgZmluaXNoTWVudS5hcHBlbmRDaGlsZChtYWluTWVudUJ1dHRvbik7XG5cbiAgICByZXR1cm4gZmluaXNoTWVudTtcbiAgfTtcblxuICBmdW5jdGlvbiBwbGF5QWdhaW4oZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBHYW1lTG9vcC5yZXNldFBsYXllcnMoKTtcbiAgICBHYW1lTG9vcC5zZXRVcFNoaXBzQ2hvb3NlTWVudSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrTWFpbk1lbnUoZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBwYWdlQ29tcG9uZW50LnNob3dNYWluTWVudSgpO1xuICB9XG5cbiAgcmV0dXJuIHsgc2V0VXAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBnYW1lQm9hcmRDb21wb25lbnQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IHBhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBnYW1lTWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKHBsYXllcnMpID0+IHtcbiAgICBjb25zdCBnYW1lTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIGNvbnN0IGdhbWVCb2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN1cnJlbmRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBnYW1lTWVudS5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1tZW51XCIpO1xuICAgIGdhbWVCb2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdhbWVib2FyZHMtY29udGFpbmVyXCIpO1xuXG4gICAgc3VycmVuZGVyQnV0dG9uLnRleHRDb250ZW50ID0gXCJTdXJyZW5kZXJcIjtcbiAgICBzdXJyZW5kZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBhZ2VDb21wb25lbnQuc2hvd1N1cnJlbmRlck1lbnUpO1xuXG4gICAgZ2FtZUJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lQm9hcmRDb21wb25lbnQuc2V0VXAocGxheWVyc1swXSkpO1xuICAgIGdhbWVCb2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkQ29tcG9uZW50LnNldFVwKHBsYXllcnNbMV0pKTtcblxuICAgIGdhbWVNZW51LmFwcGVuZENoaWxkKGdhbWVCb2FyZHNDb250YWluZXIpO1xuICAgIGdhbWVNZW51LmFwcGVuZENoaWxkKHN1cnJlbmRlckJ1dHRvbik7XG5cbiAgICByZXR1cm4gZ2FtZU1lbnU7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0VXAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBHYW1lTG9vcCB9IGZyb20gXCIuLi9jb250cm9sbGVycy9nYW1lTG9vcFwiO1xuaW1wb3J0IHsgYmxvY2tlckNvbXBvbmVudCB9IGZyb20gXCIuL2Jsb2NrZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdhbWVCb2FyZENvbXBvbmVudCA9ICgoKSA9PiB7XG4gIGxldCBteUJvYXJkID0gbnVsbDtcbiAgbGV0IG15UGxheWVyID0gbnVsbDtcblxuICBjb25zdCBzZXRVcCA9IChwbGF5ZXIpID0+IHtcbiAgICBteVBsYXllciA9IHBsYXllcjtcbiAgICBteUJvYXJkID0gcGxheWVyLmJvYXJkO1xuXG4gICAgY29uc3QgZ2FtZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYW1lQm9hcmQuY2xhc3NMaXN0LmFkZChcImdhbWVCb2FyZFwiKTtcbiAgICBnYW1lQm9hcmQuZGF0YXNldC5wbGF5ZXIgPSBcIlwiICsgcGxheWVyLm51bWJlcjtcblxuICAgIGxldCBpc1NoaXAgPSBmYWxzZTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDEwOyBjb2x1bW4rKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbXlCb2FyZC5ib2FyZFtyb3ddW2NvbHVtbl07XG4gICAgICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChjcmVhdGVDZWxsKHJvdywgY29sdW1uLCBlbGVtZW50KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrZXJDb21wb25lbnQuc2V0VXAobXlQbGF5ZXIuaXNUdXJuKSk7XG5cbiAgICByZXR1cm4gZ2FtZUJvYXJkO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNlbGwocm93LCBjb2x1bW4sIGVsZW1lbnQpIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgIGNlbGwuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgY2VsbC5kYXRhc2V0LmNvbHVtbiA9IGNvbHVtbjtcblxuICAgIGlmIChcbiAgICAgIG15UGxheWVyLnR5cGUgIT09IFwiYm90XCIgJiZcbiAgICAgIHR5cGVvZiBlbGVtZW50ID09PSBcIm9iamVjdFwiICYmXG4gICAgICAhbXlQbGF5ZXIuaXNUdXJuXG4gICAgKSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBteVBsYXllci50eXBlICE9PSBcImJvdFwiICYmXG4gICAgICB0eXBlb2YgZWxlbWVudCA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgbXlQbGF5ZXIuaXNUdXJuXG4gICAgKSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY29sb3JcIik7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQgPT09IC0xKSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgY2VsbC5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IDEpIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNlbGw7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2soZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgZW5lbXkgPSB0YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LnBsYXllcjtcblxuICAgIEdhbWVMb29wLmF0dGFjayhlbmVteSwgdGFyZ2V0LmRhdGFzZXQucm93LCB0YXJnZXQuZGF0YXNldC5jb2x1bW4pO1xuICB9XG5cbiAgY29uc3QgY2hhbmdlQ2VsbENvbG9yID0gKGlzSGl0LCBudW1iZXIsIHJvdywgY29sdW1uKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wbGF5ZXI9XCIke251bWJlcn1cIl1gKTtcbiAgICBjb25zdCBjZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2x1bW49XCIke2NvbHVtbn1cIl1gXG4gICAgKTtcblxuICAgIGlmIChpc0hpdCkge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgIH1cblxuICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFjayk7XG4gICAgY2VsbC5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgfTtcblxuICByZXR1cm4geyBzZXRVcCwgY2hhbmdlQ2VsbENvbG9yIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgR2FtZUxvb3AgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvZ2FtZUxvb3BcIjtcblxuZXhwb3J0IGNvbnN0IG1haW5NZW51ID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0VXAgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjb25zdCBzaW5nbGVQbGF5ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IG11bHRpUGxheWVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIG1haW5NZW51LmNsYXNzTGlzdC5hZGQoXCJtYWluLW1lbnVcIik7XG5cbiAgICBzaW5nbGVQbGF5ZXJCdXR0b24udGV4dENvbnRlbnQgPSBcIkh1bWFuIHZzIEJvdFwiO1xuICAgIG11bHRpUGxheWVyQnV0dG9uLnRleHRDb250ZW50ID0gXCJIdW1hbiB2cyBIdW1hblwiO1xuXG4gICAgc2luZ2xlUGxheWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydFNpbmdsZUdhbWUpO1xuICAgIG11bHRpUGxheWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydE11bHRpcGxheWVyR2FtZSk7XG5cbiAgICBtYWluTWVudS5hcHBlbmRDaGlsZChzaW5nbGVQbGF5ZXJCdXR0b24pO1xuICAgIG1haW5NZW51LmFwcGVuZENoaWxkKG11bHRpUGxheWVyQnV0dG9uKTtcbiAgICBtYWluTWVudS5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKCkpO1xuXG4gICAgcmV0dXJuIG1haW5NZW51O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUxpbmsoKSB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gICAgbGluay50ZXh0Q29udGVudCA9IFwiU2VyZ2lvIEdhcmPDrWFcIjtcbiAgICBsaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9zZXJnaW9nYXJjaWlhbVwiO1xuICAgIGxpbmsudGFyZ2V0ID0gXCJfX2JsYW5rXCI7XG5cbiAgICByZXR1cm4gbGluaztcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0U2luZ2xlR2FtZSgpIHtcbiAgICBHYW1lTG9vcC5zZXRVcFBsYXllcnMoXCJodW1hblwiLCBcImJvdFwiKTtcbiAgICBHYW1lTG9vcC5zZXRVcFNoaXBzQ2hvb3NlTWVudSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRNdWx0aXBsYXllckdhbWUoKSB7XG4gICAgR2FtZUxvb3Auc2V0VXBQbGF5ZXJzKFwiaHVtYW5cIiwgXCJodW1hblwiKTtcbiAgICBHYW1lTG9vcC5zZXRVcFNoaXBzQ2hvb3NlTWVudSgpO1xuICB9XG5cbiAgcmV0dXJuIHsgc2V0VXAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBmaW5pc2hNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vZmluaXNoTWVudVwiO1xuaW1wb3J0IHsgZ2FtZU1lbnUgfSBmcm9tIFwiLi9nYW1lTWVudVwiO1xuaW1wb3J0IHsgbWFpbk1lbnUgfSBmcm9tIFwiLi9tYWluTWVudVwiO1xuaW1wb3J0IHsgcGFzc0RldmljZU1lbnUgfSBmcm9tIFwiLi9wYXNzRGV2aWNlTWVudVwiO1xuaW1wb3J0IHsgc2hpcHNDaG9vc2VNZW51IH0gZnJvbSBcIi4vc2hpcHNDaG9vc2VNZW51XCI7XG5pbXBvcnQgeyBzdXJyZW5kZXJNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vc3VycmVuZGVyTWVudVwiO1xuXG5leHBvcnQgY29uc3QgcGFnZUNvbXBvbmVudCA9ICgoKSA9PiB7XG4gIGxldCBwYWdlID0gbnVsbDtcbiAgbGV0IHRpdGxlID0gbnVsbDtcblxuICBjb25zdCBzZXRVcCA9ICgpID0+IHtcbiAgICBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuICAgIHBhZ2UuY2xhc3NMaXN0LmFkZChcInBhZ2VcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXBzXCI7XG5cbiAgICBwYWdlLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKG1haW5NZW51LnNldFVwKCkpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoZmluaXNoTWVudUNvbXBvbmVudC5zZXRVcCgpKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKHN1cnJlbmRlck1lbnVDb21wb25lbnQuc2V0VXAoKSk7XG5cbiAgICByZXR1cm4gcGFnZTtcbiAgfTtcblxuICBjb25zdCBzaG93TWFpbk1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXBzXCI7XG4gICAgbWFpbi5yZW1vdmUoKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKG1haW5NZW51LnNldFVwKCkpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dDaG9vc2VTaGlwc01lbnUgPSAocGxheWVyKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgUGxheWVyICR7cGxheWVyLm51bWJlciArIDF9OiBjaG9vc2UgeW91ciBzaGlwc2A7XG4gICAgbWFpbi5yZW1vdmUoKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKHNoaXBzQ2hvb3NlTWVudS5zZXRVcChwbGF5ZXIpKTtcbiAgfTtcblxuICBjb25zdCBzaG93UGFzc0RldmljZU1lbnUgPSAocGxheWVyKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlBhc3MgdGhlIGRldmljZVwiO1xuICAgIG1haW4ucmVtb3ZlKCk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChwYXNzRGV2aWNlTWVudS5zZXRVcChwbGF5ZXIpKTtcbiAgfTtcblxuICBjb25zdCBzaG93R2FtZUJvYXJkcyA9IChwbGF5ZXJzKSA9PiB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBtYWluLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgcGxheWVyVHVybiA9IHBsYXllcnNbMF0uaXNUdXJuXG4gICAgICA/IHBsYXllcnNbMF0ubnVtYmVyXG4gICAgICA6IHBsYXllcnNbMV0ubnVtYmVyO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgUGxheWVyICR7cGxheWVyVHVybiArIDF9OiBjaG9vc2Ugb25lIGNlbGxgO1xuXG4gICAgcGFnZS5hcHBlbmRDaGlsZChnYW1lTWVudS5zZXRVcChwbGF5ZXJzKSk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1N1cnJlbmRlck1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgYmxvY2tlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrZXJcIik7XG4gICAgY29uc3Qgc3VycmVuZGVyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VycmVuZGVyLW1lbnVcIik7XG5cbiAgICBibG9ja2Vycy5mb3JFYWNoKChibG9ja2VyKSA9PiBibG9ja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcbiAgICBzdXJyZW5kZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dGaW5pc2hNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZpbmlzaE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbmlzaC1tZW51XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZmluaXNoTWVudS5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XG5cbiAgICBmaW5pc2hNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJHYW1lIE92ZXJcIjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldFVwLFxuICAgIHNob3dNYWluTWVudSxcbiAgICBzaG93Q2hvb3NlU2hpcHNNZW51LFxuICAgIHNob3dQYXNzRGV2aWNlTWVudSxcbiAgICBzaG93R2FtZUJvYXJkcyxcbiAgICBzaG93U3VycmVuZGVyTWVudSxcbiAgICBzaG93RmluaXNoTWVudSxcbiAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBwYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZVwiO1xuXG5leHBvcnQgY29uc3QgcGFzc0RldmljZU1lbnUgPSAoKCkgPT4ge1xuICBsZXQgbXlQbGF5ZXIgPSBudWxsO1xuXG4gIGNvbnN0IHNldFVwID0gKHBsYXllcikgPT4ge1xuICAgIG15UGxheWVyID0gcGxheWVyO1xuXG4gICAgY29uc3QgcGFzc0RldmljZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgcGFzc0RldmljZU1lbnUuY2xhc3NMaXN0LmFkZChcInBhc3MtZGV2aWNlLW1lbnVcIik7XG5cbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIk5leHQgVHVyblwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVBhc3NEZXZpY2VNZW51KTtcblxuICAgIHBhc3NEZXZpY2VNZW51LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4gcGFzc0RldmljZU1lbnU7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGlkZVBhc3NEZXZpY2VNZW51KCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShteVBsYXllcikpIHBhZ2VDb21wb25lbnQuc2hvd0Nob29zZVNoaXBzTWVudShteVBsYXllcik7XG4gICAgZWxzZSBwYWdlQ29tcG9uZW50LnNob3dHYW1lQm9hcmRzKG15UGxheWVyKTtcbiAgfVxuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgR2FtZUxvb3AgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvZ2FtZUxvb3BcIjtcblxuZXhwb3J0IGNvbnN0IHNoaXBzQ2hvb3NlTWVudSA9ICgoKSA9PiB7XG4gIGxldCBteVBsYXllciA9IG51bGw7XG4gIGxldCBhY3R1YWxTaGlwID0gXCJcIjtcbiAgbGV0IG9yaWVudGF0aW9uID0gXCJcIjtcblxuICBjb25zdCBzZXRVcCA9IChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBzaGlwc0Nob29zZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBzaGlwc0Nob29zZU1lbnUuY2xhc3NMaXN0LmFkZChcInNoaXBzLWNob29zZS1tZW51XCIpO1xuXG4gICAgbXlQbGF5ZXIgPSBwbGF5ZXI7XG4gICAgYWN0dWFsU2hpcCA9IFwiY2FycmllclwiO1xuICAgIG9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XG5cbiAgICBzaGlwc0Nob29zZU1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKCkpO1xuICAgIHNoaXBzQ2hvb3NlTWVudS5hcHBlbmRDaGlsZChjcmVhdGVHYW1lQm9hcmQoKSk7XG5cbiAgICByZXR1cm4gc2hpcHNDaG9vc2VNZW51O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbigpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUm90YXRlXCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb3RhdGVTaGlwKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlR2FtZUJvYXJkKCkge1xuICAgIGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbXlCb2FyZCA9IG15UGxheWVyLmJvYXJkLmJvYXJkO1xuICAgIGdhbWVCb2FyZC5jbGFzc0xpc3QuYWRkKFwiZ2FtZUJvYXJkXCIpO1xuXG4gICAgbGV0IGlzU2hpcCA9IGZhbHNlO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMTA7IGNvbHVtbisrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbXlCb2FyZFtyb3ddW2NvbHVtbl0gPT0gXCJvYmplY3RcIikgaXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgZ2FtZUJvYXJkLmFwcGVuZENoaWxkKGNyZWF0ZUNlbGwocm93LCBjb2x1bW4sIGlzU2hpcCkpO1xuICAgICAgICBpc1NoaXAgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ2FtZUJvYXJkO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2VsbChyb3csIGNvbHVtbiwgaXNTaGlwKSB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc2hpcFBvc2l0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG5cbiAgICBzaGlwUG9zaXRpb24uY2xhc3NMaXN0LmFkZChcInNoaXAtcG9zaXRpb25cIik7XG5cbiAgICBzaGlwUG9zaXRpb24uY2xhc3NMaXN0LmFkZChvcmllbnRhdGlvbik7XG4gICAgc2hpcFBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoYWN0dWFsU2hpcCk7XG5cbiAgICBjZWxsLmRhdGFzZXQucm93ID0gcm93O1xuICAgIGNlbGwuZGF0YXNldC5jb2x1bW4gPSBjb2x1bW47XG5cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRTaGlwKTtcblxuICAgIGNlbGwuYXBwZW5kQ2hpbGQoc2hpcFBvc2l0aW9uKTtcblxuICAgIGlmIChpc1NoaXApIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjb2xvclwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2VsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFNoaXAoZSkge1xuICAgIGNvbnN0IHNoaXBzQ2hvb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHMtY2hvb3NlLW1lbnVcIik7XG4gICAgY29uc3Qgcm93ID0gK2UudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5yb3c7XG4gICAgY29uc3QgY29sdW1uID0gK2UudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5jb2x1bW47XG5cbiAgICBjb25zdCBpc1BsYWNlZCA9IG15UGxheWVyLmJvYXJkLnBsYWNlU2hpcChcbiAgICAgIHJvdyxcbiAgICAgIGNvbHVtbixcbiAgICAgIGFjdHVhbFNoaXAsXG4gICAgICBvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCJcbiAgICApO1xuXG4gICAgaWYgKCFpc1BsYWNlZCkgcmV0dXJuO1xuXG4gICAgYWN0dWFsU2hpcCA9XG4gICAgICBhY3R1YWxTaGlwID09PSBcImNhcnJpZXJcIlxuICAgICAgICA/IFwiYmF0dGxlc2hpcFwiXG4gICAgICAgIDogYWN0dWFsU2hpcCA9PT0gXCJiYXR0bGVzaGlwXCJcbiAgICAgICAgPyBcImNydWlzZXJcIlxuICAgICAgICA6IGFjdHVhbFNoaXAgPT09IFwiY3J1aXNlclwiXG4gICAgICAgID8gXCJzdWJtYXJpbmVcIlxuICAgICAgICA6IGFjdHVhbFNoaXAgPT09IFwic3VibWFyaW5lXCJcbiAgICAgICAgPyBcImRlc3Ryb3llclwiXG4gICAgICAgIDogXCJcIjtcblxuICAgIGlmIChhY3R1YWxTaGlwID09PSBcIlwiKSB7XG4gICAgICBHYW1lTG9vcC5zZXRVcFNoaXBzQ2hvb3NlTWVudShteVBsYXllci5udW1iZXIgKyAxKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaGlwc0Nob29zZU1lbnUuY2hpbGROb2Rlc1sxXS5yZW1vdmUoKTtcbiAgICBzaGlwc0Nob29zZU1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlR2FtZUJvYXJkKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcm90YXRlU2hpcCgpIHtcbiAgICBjb25zdCBzaGlwc1Bvc2l0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLXBvc2l0aW9uXCIpO1xuICAgIHNoaXBzUG9zaXRpb24uZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5jbGFzc0xpc3QudG9nZ2xlKFwidmVydGljYWxcIik7XG4gICAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJob3Jpem9udGFsXCIpO1xuICAgIH0pO1xuXG4gICAgb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbiAgfVxuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgcGFnZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IHN1cnJlbmRlck1lbnVDb21wb25lbnQgPSAoKCkgPT4ge1xuICBjb25zdCBzZXRVcCA9ICgpID0+IHtcbiAgICBjb25zdCBzdXJyZW5kZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBiYWNrR2FtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBzdXJyZW5kZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJzdXJyZW5kZXItbWVudVwiKTtcbiAgICBzdXJyZW5kZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkFyZSB5b3Ugc3VyZT9cIjtcbiAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gXCJZZXMhXCI7XG4gICAgYmFja0dhbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIk5vcFwiO1xuXG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29CYWNrTWFpbk1lbnUpO1xuICAgIGJhY2tHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlTWVudSk7XG5cbiAgICBzdXJyZW5kZXJNZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBzdXJyZW5kZXJNZW51LmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuICAgIHN1cnJlbmRlck1lbnUuYXBwZW5kQ2hpbGQoYmFja0dhbWVCdXR0b24pO1xuXG4gICAgcmV0dXJuIHN1cnJlbmRlck1lbnU7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGlkZU1lbnUoZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFja01haW5NZW51KGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgcGFnZUNvbXBvbmVudC5zaG93TWFpbk1lbnUoKTtcbiAgfVxuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL2ZhY3Rvcmllcy9wbGF5ZXJcIjtcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuLi9mYWN0b3JpZXMvZ2FtZWJvYXJkXCI7XG5cbmltcG9ydCB7IHBhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlXCI7XG5pbXBvcnQgeyBnYW1lQm9hcmRDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lYm9hcmRcIjtcblxuZXhwb3J0IGNvbnN0IEdhbWVMb29wID0gKCgpID0+IHtcbiAgbGV0IHBsYXllcnMgPSBbXTtcblxuICBjb25zdCBzZXRVcCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VDb21wb25lbnQuc2V0VXAoKSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0VXBQbGF5ZXJzID0gKHR5cGVQbGF5ZXIxLCB0eXBlUGxheWVyMikgPT4ge1xuICAgIHBsYXllcnMgPSBbXTtcbiAgICBwbGF5ZXJzLnB1c2gobmV3IFBsYXllcigwLCB0eXBlUGxheWVyMSwgbmV3IEdhbWVCb2FyZCgpLCB0cnVlKSk7XG4gICAgcGxheWVycy5wdXNoKG5ldyBQbGF5ZXIoMSwgdHlwZVBsYXllcjIsIG5ldyBHYW1lQm9hcmQoKSwgZmFsc2UpKTtcbiAgfTtcblxuICBjb25zdCByZXNldFBsYXllcnMgPSAoKSA9PiB7XG4gICAgcGxheWVyc1swXS5ib2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICBwbGF5ZXJzWzFdLmJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICB9O1xuXG4gIGNvbnN0IHNldFVwU2hpcHNDaG9vc2VNZW51ID0gKG51bWJlciA9IDApID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJzW251bWJlcl07XG5cbiAgICBpZiAobnVtYmVyID09PSAyKSB7XG4gICAgICBwYWdlQ29tcG9uZW50LnNob3dHYW1lQm9hcmRzKHBsYXllcnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwbGF5ZXIudHlwZSA9PT0gXCJodW1hblwiKSB7XG4gICAgICBwYWdlQ29tcG9uZW50LnNob3dQYXNzRGV2aWNlTWVudShwbGF5ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXIuYm9hcmQuZ2VuZXJhdGVSYW5kb21Cb2FyZCgpO1xuICAgICAgcGFnZUNvbXBvbmVudC5zaG93R2FtZUJvYXJkcyhwbGF5ZXJzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrID0gKGVuZW15LCByb3csIGNvbHVtbikgPT4ge1xuICAgIGdhbWVCb2FyZENvbXBvbmVudC5jaGFuZ2VDZWxsQ29sb3IoXG4gICAgICBwbGF5ZXJzW2VuZW15XS5ib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKSxcbiAgICAgIHBsYXllcnNbZW5lbXldLm51bWJlcixcbiAgICAgIHJvdyxcbiAgICAgIGNvbHVtblxuICAgICk7XG5cbiAgICBpZiAocGxheWVyc1tlbmVteV0uYm9hcmQuaXNHYW1lT3ZlcigpKSBlbmRHYW1lKCk7XG5cbiAgICBpZiAocGxheWVyc1sxXS50eXBlID09PSBcImh1bWFuXCIpIHtcbiAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGxheWVyPVwiJHtlbmVteX1cIl1gKTtcbiAgICAgIGNvbnN0IGJsb2NrZXIgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFwiLmJsb2NrZXJcIik7XG4gICAgICBibG9ja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuXG4gICAgICBwbGF5ZXJzWzBdLmlzVHVybiA9IHBsYXllcnNbMF0uaXNUdXJuID8gZmFsc2UgOiB0cnVlO1xuICAgICAgcGxheWVyc1sxXS5pc1R1cm4gPSBwbGF5ZXJzWzFdLmlzVHVybiA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiBwYWdlQ29tcG9uZW50LnNob3dQYXNzRGV2aWNlTWVudShwbGF5ZXJzKSwgODAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0YWNrQm90KCk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGF0dGFja0JvdCgpIHtcbiAgICBjb25zdCBhaUNvb3JkID0gcGxheWVyc1sxXS5nZXRDb29yZGluYXRlcyhwbGF5ZXJzWzBdLmJvYXJkLmJvYXJkKTtcblxuICAgIGdhbWVCb2FyZENvbXBvbmVudC5jaGFuZ2VDZWxsQ29sb3IoXG4gICAgICBwbGF5ZXJzWzBdLmJvYXJkLnJlY2VpdmVBdHRhY2soYWlDb29yZFswXSwgYWlDb29yZFsxXSksXG4gICAgICBwbGF5ZXJzWzBdLm51bWJlcixcbiAgICAgIGFpQ29vcmRbMF0sXG4gICAgICBhaUNvb3JkWzFdXG4gICAgKTtcblxuICAgIGlmIChwbGF5ZXJzWzBdLmJvYXJkLmlzR2FtZU92ZXIoKSkgZW5kR2FtZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5kR2FtZSgpIHtcbiAgICBjb25zdCBibG9ja2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tlclwiKTtcbiAgICBibG9ja2Vycy5mb3JFYWNoKChibG9ja2VyKSA9PiBibG9ja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcbiAgICBwYWdlQ29tcG9uZW50LnNob3dGaW5pc2hNZW51KCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNldFVwLFxuICAgIHNldFVwUGxheWVycyxcbiAgICByZXNldFBsYXllcnMsXG4gICAgc2V0VXBTaGlwc0Nob29zZU1lbnUsXG4gICAgYXR0YWNrLFxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEFycmF5KDEwKS5maWxsKDApLm1hcCgoKSA9PiBuZXcgQXJyYXkoMTApLmZpbGwoMCkpO1xuICB9XG5cbiAgcGxhY2VTaGlwKHJvdywgY29sdW1uLCBzaGlwVHlwZSwgaXNIb3Jpem9udGFsKSB7XG4gICAgY29uc3QgdGVtcG9yYWxCb2FyZCA9IHRoaXMuZGVlcENvcHlCb2FyZCgpO1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChzaGlwVHlwZSk7XG5cbiAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICBjb25zdCBtYXggPSBjb2x1bW4gKyBzaGlwLmxlbmd0aDtcbiAgICAgIGlmIChtYXggPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IGNvbHVtbjsgaW5kZXggPCBtYXg7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wb3JhbEJvYXJkW3Jvd11baW5kZXhdID09PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRlbXBvcmFsQm9hcmRbcm93XVtpbmRleF0gPSBzaGlwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXggPSByb3cgKyBzaGlwLmxlbmd0aDtcbiAgICAgIGlmIChtYXggPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IHJvdzsgaW5kZXggPCBtYXg7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wb3JhbEJvYXJkW2luZGV4XVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRlbXBvcmFsQm9hcmRbaW5kZXhdW2NvbHVtbl0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYm9hcmQgPSB0ZW1wb3JhbEJvYXJkO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbikge1xuICAgIGxldCB0YXJnZXQgPSB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXTtcblxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB0YXJnZXQuaGl0KCk7XG4gICAgICB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXSA9IDE7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gMCkge1xuICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0gPSAtMTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpc0dhbWVPdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmJvYXJkLmZsYXQoKS5ldmVyeSgoY2VsbCkgPT4gdHlwZW9mIGNlbGwgIT09IFwib2JqZWN0XCIpO1xuICB9XG5cbiAgZ2VuZXJhdGVSYW5kb21Cb2FyZCgpIHtcbiAgICBsZXQgdHlwZXNTaGlwcyA9IFtcbiAgICAgIFwiY2FycmllclwiLFxuICAgICAgXCJiYXR0bGVzaGlwXCIsXG4gICAgICBcImNydWlzZXJcIixcbiAgICAgIFwic3VibWFyaW5lXCIsXG4gICAgICBcImRlc3Ryb3llclwiLFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IHNoaXBUeXBlIG9mIHR5cGVzU2hpcHMpIHtcbiAgICAgIGxldCBpc1BsYWNlZCA9IGZhbHNlO1xuICAgICAgd2hpbGUgKCFpc1BsYWNlZCkge1xuICAgICAgICBjb25zdCByb3cgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcbiAgICAgICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy5nZXRSYW5kb21EaXJlY3Rpb24oKTtcbiAgICAgICAgaXNQbGFjZWQgPSB0aGlzLnBsYWNlU2hpcChyb3csIGNvbHVtbiwgc2hpcFR5cGUsIGlzSG9yaXpvbnRhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVlcENvcHlCb2FyZCgpIHtcbiAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5ib2FyZC5sZW5ndGg7XG4gICAgY29uc3QgbnVtQ29scyA9IHRoaXMuYm9hcmRbMF0ubGVuZ3RoO1xuXG4gICAgY29uc3QgdGVtcG9yYWxCb2FyZCA9IG5ldyBBcnJheShudW1Sb3dzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvd3M7IGkrKykge1xuICAgICAgdGVtcG9yYWxCb2FyZFtpXSA9IG5ldyBBcnJheShudW1Db2xzKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBudW1Sb3dzOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbnVtQ29sczsgY29sKyspIHtcbiAgICAgICAgdGVtcG9yYWxCb2FyZFtyb3ddW2NvbF0gPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcG9yYWxCb2FyZDtcbiAgfVxuXG4gIGdldFJhbmRvbUludChtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKTtcbiAgfVxuXG4gIGdldFJhbmRvbURpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA8IDAuNTsgLy8gSG9yaXpvbnRhbDogdHJ1ZSwgVmVydGljYWw6IGZhbHNlXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihudW1iZXIsIHR5cGUsIGJvYXJkLCBpc1R1cm4pIHtcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICB0aGlzLmlzVHVybiA9IGlzVHVybjtcbiAgfVxuXG4gIGdldENvb3JkaW5hdGVzKGVuZW15Qm9hcmQpIHtcbiAgICBsZXQgYm9hcmRQb3NzaWJsZUhpdHMgPSBbXTtcblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMTA7IGNvbHVtbisrKSB7XG4gICAgICAgIGlmIChlbmVteUJvYXJkW3Jvd11bY29sdW1uXSA9PT0gMSkge1xuICAgICAgICAgIGNvbnN0IGJldHRlckNvb3JkaW5hdGVzID0gdGhpcy5nZXRCZXR0ZXJDb29yZGluYXRlcyhcbiAgICAgICAgICAgIGVuZW15Qm9hcmQsXG4gICAgICAgICAgICByb3csXG4gICAgICAgICAgICBjb2x1bW5cbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChiZXR0ZXJDb29yZGluYXRlcyAhPT0gbnVsbCkgcmV0dXJuIGJldHRlckNvb3JkaW5hdGVzO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGVuZW15Qm9hcmRbcm93XVtjb2x1bW5dICE9PSAxICYmXG4gICAgICAgICAgZW5lbXlCb2FyZFtyb3ddW2NvbHVtbl0gIT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIGJvYXJkUG9zc2libGVIaXRzLnB1c2goW3JvdywgY29sdW1uXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcmFuZG9tT3B0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRQb3NzaWJsZUhpdHMubGVuZ3RoKTtcblxuICAgIHJldHVybiBib2FyZFBvc3NpYmxlSGl0c1tyYW5kb21PcHRpb25dO1xuICB9XG5cbiAgZ2V0SG9yaXpvbnRhbCgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA8IDAuNTtcbiAgfVxuXG4gIGdldEJldHRlckNvb3JkaW5hdGVzKGVuZW15Qm9hcmQsIHJvdywgY29sdW1uKSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZTEgPSByb3cgKyAxICE9PSAxMCA/IGVuZW15Qm9hcmRbcm93ICsgMV1bY29sdW1uXSA6IDE7XG4gICAgY29uc3QgY29vcmRpbmF0ZTIgPSByb3cgLSAxICE9PSAtMSA/IGVuZW15Qm9hcmRbcm93IC0gMV1bY29sdW1uXSA6IDE7XG4gICAgY29uc3QgY29vcmRpbmF0ZTMgPSBjb2x1bW4gKyAxICE9PSAxMCA/IGVuZW15Qm9hcmRbcm93XVtjb2x1bW4gKyAxXSA6IDE7XG4gICAgY29uc3QgY29vcmRpbmF0ZTQgPSBjb2x1bW4gLSAxICE9PSAtMSA/IGVuZW15Qm9hcmRbcm93XVtjb2x1bW4gLSAxXSA6IDE7XG5cbiAgICBpZiAoY29vcmRpbmF0ZTEgIT09IDEgJiYgY29vcmRpbmF0ZTEgIT09IC0xKSByZXR1cm4gW3JvdyArIDEsIGNvbHVtbl07XG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZTIgIT09IDEgJiYgY29vcmRpbmF0ZTIgIT09IC0xKSByZXR1cm4gW3JvdyAtIDEsIGNvbHVtbl07XG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZTMgIT09IDEgJiYgY29vcmRpbmF0ZTMgIT09IC0xKSByZXR1cm4gW3JvdywgY29sdW1uICsgMV07XG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZTQgIT09IDEgJiYgY29vcmRpbmF0ZTQgIT09IC0xKSByZXR1cm4gW3JvdywgY29sdW1uIC0gMV07XG4gICAgZWxzZSByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy5fbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGhGcm9tVHlwZSh0eXBlKTtcbiAgICB0aGlzLl9oaXRzID0gMDtcbiAgICB0aGlzLl9pc1N1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLl9oaXRzICs9IDE7XG4gICAgaWYgKHRoaXMuX2hpdHMgPj0gdGhpcy5fbGVuZ3RoKSB0aGlzLl9pc1N1bmsgPSB0cnVlO1xuICB9XG5cbiAgZ2V0TGVuZ3RoRnJvbVR5cGUodHlwZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXJyaWVyOiA1LFxuICAgICAgYmF0dGxlc2hpcDogNCxcbiAgICAgIGNydWlzZXI6IDMsXG4gICAgICBzdWJtYXJpbmU6IDMsXG4gICAgICBkZXN0cm95ZXI6IDIsXG4gICAgfVt0eXBlXTtcbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcbiAgfVxuXG4gIGdldCBoaXRzKCkge1xuICAgIHJldHVybiB0aGlzLl9oaXRzO1xuICB9XG5cbiAgZ2V0IGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTdW5rO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBHYW1lTG9vcCB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL2dhbWVMb29wXCI7XG5cbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy9tZW51cy5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy9zaGlwc0Nob29zZU1lbnUuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZXMvZ2FtZU1lbnUuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZXMvYXBwLmNzc1wiO1xuXG5HYW1lTG9vcC5zZXRVcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9