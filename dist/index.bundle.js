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
    font-size: 2rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/app.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,oBAAoB;;EAEpB,YAAY;EACZ,UAAU;EACV,YAAY;AACd;;AAEA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;EACnC,0BAA0B;;EAE1B,iBAAiB;EACjB,iBAAiB;;EAEjB,kBAAkB;;EAElB,mBAAmB;EACnB,YAAY;;EAEZ,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;AACvB;;AAEA,YAAY;AACZ;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA,eAAe;AACf;EACE;IACE,eAAe;EACjB;AACF","sourcesContent":["/* GENERAL */\n:root {\n  --background-color: #43789e;\n  --main-color: #fff;\n  --second-color: #222;\n\n  --ship: blue;\n  --hit: red;\n  --miss: gray;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  padding: 20px;\n  background: var(--background-color);\n  color: var(--main-color);\n}\n\n.page {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.title {\n  font-size: 4rem;\n  font-weight: bold;\n  margin-bottom: 50px;\n}\n\nbutton {\n  background-color: var(--main-color);\n  color: var(--second-color);\n\n  font-size: 1.1rem;\n  font-weight: bold;\n\n  padding: 10px 50px;\n\n  border-radius: 20px;\n  border: none;\n\n  cursor: pointer;\n  transition: transform 300ms;\n}\n\nbutton:hover {\n  transform: scale(1.1);\n}\n\n/* UTILITY */\n.blocker {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.hide {\n  display: none;\n}\n\n/* RESPONSIVE */\n@media screen and (max-width: 1000px) {\n  .title {\n    font-size: 2rem;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `.game-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

.gameboards-container {
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

/* RESPONSIVE */
@media screen and (max-width: 1200px) {
  .gameboards-container {
    flex-direction: column;
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/gameMenu.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA,eAAe;AACf;EACE;IACE,sBAAsB;EACxB;AACF","sourcesContent":[".game-menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n\n.gameboards-container {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n.color {\n  background-color: var(--ship);\n}\n\n.hit {\n  background-color: var(--hit);\n}\n\n.miss {\n  background-color: var(--miss);\n}\n\n/* RESPONSIVE */\n@media screen and (max-width: 1200px) {\n  .gameboards-container {\n    flex-direction: column;\n  }\n}\n"],"sourceRoot":""}]);
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

/* RESPONSIVE */
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
`, "",{"version":3,"sources":["webpack://./src/assets/styles/menus.css"],"names":[],"mappings":"AAAA,cAAc;AACd;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,gBAAgB;AAChB;;EAEE,kBAAkB;;EAElB,YAAY;EACZ,aAAa;EACb,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;;EAET,mBAAmB;EACnB,qCAAqC;;EAErC,UAAU;AACZ;;AAEA;;EAEE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA,eAAe;AACf;EACE;;IAEE,YAAY;IACZ,aAAa;EACf;;EAEA;;IAEE,eAAe;EACjB;AACF","sourcesContent":["/* MAIN MENU */\n.main-menu {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n\n.main-menu > a {\n  font-size: 1.5rem;\n  color: var(--main-color);\n  align-self: center;\n  margin-top: 50px;\n}\n\n/* OTHER MENUS */\n.surrender-menu,\n.finish-menu {\n  position: absolute;\n\n  width: 400px;\n  height: 300px;\n  padding: 20px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n\n  border-radius: 20px;\n  background-color: var(--second-color);\n\n  z-index: 1;\n}\n\n.surrender-menu > h3,\n.finish-menu > h3 {\n  font-size: 4rem;\n  font-weight: bold;\n  margin-bottom: 50px;\n}\n\n/* RESPONSIVE */\n@media screen and (max-width: 600px) {\n  .surrender-menu,\n  .finish-menu {\n    width: 300px;\n    height: 300px;\n  }\n\n  .surrender-menu > h3,\n  .finish-menu > h3 {\n    font-size: 3rem;\n  }\n}\n"],"sourceRoot":""}]);
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

/* RESPONSIVE */
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
`, "",{"version":3,"sources":["webpack://./src/assets/styles/shipsChooseMenu.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,qCAAqC;EACrC,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA,eAAe;AACf;EACE;IACE,YAAY;EACd;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;AACF","sourcesContent":[".ships-choose-menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n\n.ship-position {\n  position: absolute;\n  display: none;\n  background-color: var(--ship);\n}\n\n.gameBoard {\n  position: relative;\n  display: flex;\n  width: 550px;\n  flex-wrap: wrap;\n}\n\n.cell {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  border: 1px solid var(--second-color);\n  cursor: pointer;\n  transition: transform 300ms;\n}\n\n.cell:hover {\n  transform: scale(1.1);\n}\n\n.cell:hover > .ship-position {\n  display: inline;\n}\n\n.horizontal {\n  height: 50px;\n}\n\n.vertical {\n  width: 50px;\n}\n\n.carrier.horizontal {\n  width: 259px;\n}\n\n.carrier.vertical {\n  height: 259px;\n}\n\n.battleship.horizontal {\n  width: 209px;\n}\n\n.battleship.vertical {\n  height: 209px;\n}\n\n.cruiser.horizontal {\n  width: 159px;\n}\n\n.cruiser.vertical {\n  height: 159px;\n}\n\n.submarine.horizontal {\n  width: 159px;\n}\n\n.submarine.vertical {\n  height: 159px;\n}\n\n.destroyer.horizontal {\n  width: 109px;\n}\n\n.destroyer.vertical {\n  height: 109px;\n}\n\n/* RESPONSIVE */\n@media screen and (max-width: 600px) {\n  .gameBoard {\n    width: 300px;\n  }\n\n  .cell {\n    width: 28px;\n    height: 28px;\n  }\n\n  .horizontal {\n    height: 28px;\n  }\n\n  .vertical {\n    width: 28px;\n  }\n\n  .carrier.horizontal {\n    width: 149px;\n  }\n\n  .carrier.vertical {\n    height: 149px;\n  }\n\n  .battleship.horizontal {\n    width: 121px;\n  }\n\n  .battleship.vertical {\n    height: 121px;\n  }\n\n  .cruiser.horizontal {\n    width: 93px;\n  }\n\n  .cruiser.vertical {\n    height: 93px;\n  }\n\n  .submarine.horizontal {\n    width: 93px;\n  }\n\n  .submarine.vertical {\n    height: 93px;\n  }\n\n  .destroyer.horizontal {\n    width: 65px;\n  }\n\n  .destroyer.vertical {\n    height: 65px;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   finishMenu: () => (/* binding */ finishMenu)
/* harmony export */ });
/* harmony import */ var _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/gameLoop */ "./src/controllers/gameLoop.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/components/page.js");



const finishMenu = (() => {
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

  // PRIVATE FUNCTIONS
  const playAgain = (event) => {
    event.target.parentNode.classList.add("hide");
    _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.resetPlayers();
    _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.setUpShipsChooseMenu();
  };

  const goBackMainMenu = (event) => {
    event.target.parentNode.classList.add("hide");
    _page__WEBPACK_IMPORTED_MODULE_1__.pageComponent.showMainMenu();
  };

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
  let currentBoard = null;
  let currentPlayer = null;

  const setUp = (player) => {
    currentPlayer = player;
    currentBoard = player.board;

    const gameBoard = document.createElement("div");
    gameBoard.classList.add("gameBoard");
    gameBoard.dataset.player = "" + player.number;

    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {
        const element = currentBoard.board[row][column];
        gameBoard.appendChild(createCell(row, column, element));
      }
    }

    gameBoard.appendChild(_blocker__WEBPACK_IMPORTED_MODULE_1__.blockerComponent.setUp(currentPlayer.isTurn));

    return gameBoard;
  };

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

  // PRIVATE FUNCTIONS
  const createCell = (row, column, element) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.row = row;
    cell.dataset.column = column;

    if (
      currentPlayer.type !== "bot" &&
      typeof element === "object" &&
      !currentPlayer.isTurn
    ) {
      cell.classList.add("ship");
    } else if (
      currentPlayer.type !== "bot" &&
      typeof element === "object" &&
      currentPlayer.isTurn
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
  };

  const attack = (event) => {
    const target = event.target;
    const enemy = target.parentNode.dataset.player;
    _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.attack(enemy, target.dataset.row, target.dataset.column);
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

  // PRIVATE FUNCTIONS
  const createLink = () => {
    const link = document.createElement("a");

    link.textContent = "Sergio García";
    link.href = "https://github.com/sergiogarciiam";
    link.target = "__blank";

    return link;
  };

  const startSingleGame = () => {
    _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.initializePlayers("human", "bot");
    _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.setUpShipsChooseMenu();
  };

  function startMultiplayerGame() {
    _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.initializePlayers("human", "human");
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
  let pageElement = null;
  let titleElement = null;

  const setUp = () => {
    createPageElement();
    pageElement.appendChild(_mainMenu__WEBPACK_IMPORTED_MODULE_2__.mainMenu.setUp());
    pageElement.appendChild(_finishMenu__WEBPACK_IMPORTED_MODULE_0__.finishMenu.setUp());
    pageElement.appendChild(_surrenderMenu__WEBPACK_IMPORTED_MODULE_5__.surrenderMenu.setUp());

    return pageElement;
  };

  const showMainMenu = () => {
    removePreviousContent();
    titleElement.textContent = "Battleships";
    pageElement.appendChild(_mainMenu__WEBPACK_IMPORTED_MODULE_2__.mainMenu.setUp());
  };

  const showChooseShipsMenu = (player) => {
    removePreviousContent();
    titleElement.textContent = `Player ${player.number + 1}: choose your ships`;
    pageElement.appendChild(_shipsChooseMenu__WEBPACK_IMPORTED_MODULE_4__.shipsChooseMenu.setUp(player));
  };

  const showPassDeviceMenu = (player) => {
    removePreviousContent();
    titleElement.textContent = "Pass the device";
    pageElement.appendChild(_passDeviceMenu__WEBPACK_IMPORTED_MODULE_3__.passDeviceMenu.setUp(player));
  };

  const showGameBoards = (players) => {
    removePreviousContent();
    const playerTurn = players[0].isTurn
      ? players[0].number
      : players[1].number;
    titleElement.textContent = `Player ${playerTurn + 1}: choose one cell`;
    pageElement.appendChild(_gameMenu__WEBPACK_IMPORTED_MODULE_1__.gameMenu.setUp(players));
  };

  const showSurrenderMenu = () => {
    const surrenderMenu = document.querySelector(".surrender-menu");
    surrenderMenu.classList.remove("hide");
  };

  const showFinishMenu = (winnerNumber) => {
    const finishMenu = document.querySelector(".finish-menu");
    const title = finishMenu.querySelector("h3");

    finishMenu.classList.remove("hide");
    title.textContent = `Player ${winnerNumber + 1} won!`;
  };

  // PRIVATE FUNCTIONS
  const createPageElement = () => {
    pageElement = document.createElement("div");
    pageElement.classList.add("page");

    titleElement = document.createElement("h1");
    titleElement.classList.add("title");
    titleElement.textContent = "Battleships";

    pageElement.appendChild(titleElement);
    return pageElement;
  };

  const removePreviousContent = () => {
    const mainElement = document.querySelector("main");
    mainElement.remove();
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
  let currentPlayer = null;

  const setUp = (player) => {
    currentPlayer = player;

    const passDeviceMenu = document.createElement("main");
    const button = document.createElement("button");

    passDeviceMenu.classList.add("pass-device-menu");

    button.textContent = "Next Turn";
    button.addEventListener("click", hidePassDeviceMenu);

    passDeviceMenu.appendChild(button);

    return passDeviceMenu;
  };

  const hidePassDeviceMenu = () => {
    if (Array.isArray(currentPlayer)) {
      _page__WEBPACK_IMPORTED_MODULE_0__.pageComponent.showGameBoards(currentPlayer);
    } else {
      _page__WEBPACK_IMPORTED_MODULE_0__.pageComponent.showChooseShipsMenu(currentPlayer);
    }
  };

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
  let currentPlayer = null;
  let currentShip = "";
  let currentOrientation = "horizontal";

  const setUp = (player) => {
    currentPlayer = player;
    currentShip = "carrier";

    const shipsChooseMenu = document.createElement("main");
    shipsChooseMenu.classList.add("ships-choose-menu");

    shipsChooseMenu.appendChild(createButton());
    shipsChooseMenu.appendChild(createGameBoard());

    return shipsChooseMenu;
  };

  // PRIVATE FUNCTIONS
  const createButton = () => {
    const button = document.createElement("button");
    button.textContent = "Rotate";
    button.addEventListener("click", rotateShip);
    return button;
  };

  const createGameBoard = () => {
    const gameBoard = document.createElement("div");
    const playerBoard = currentPlayer.board.board;
    gameBoard.classList.add("gameBoard");

    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {
        const isShip = typeof playerBoard[row][column] === "object";
        gameBoard.appendChild(createCell(row, column, isShip));
      }
    }

    return gameBoard;
  };

  const createCell = (row, column, isShip) => {
    const cell = document.createElement("div");
    const shipPosition = document.createElement("div");

    cell.classList.add("cell");
    shipPosition.classList.add("ship-position");
    shipPosition.classList.add(currentOrientation);
    shipPosition.classList.add(currentShip);

    cell.dataset.row = row;
    cell.dataset.column = column;
    cell.addEventListener("click", addShip);

    cell.appendChild(shipPosition);

    if (isShip) {
      cell.classList.add("ship");
      cell.classList.add("color");
    }

    return cell;
  };

  const addShip = (e) => {
    const shipsChooseMenu = document.querySelector(".ships-choose-menu");
    const row = +e.target.parentNode.dataset.row;
    const column = +e.target.parentNode.dataset.column;

    const isPlaced = currentPlayer.board.placeShip(
      row,
      column,
      currentShip,
      currentOrientation === "horizontal"
    );

    if (!isPlaced) return;

    switch (currentShip) {
      case "carrier":
        currentShip = "battleship";
        break;
      case "battleship":
        currentShip = "cruiser";
        break;
      case "cruiser":
        currentShip = "submarine";
        break;
      case "submarine":
        currentShip = "destroyer";
        break;
      case "destroyer":
        currentShip = "";
        break;
    }

    if (currentShip === "") {
      _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.setUpShipsChooseMenu(currentPlayer.number + 1);
      return;
    }

    shipsChooseMenu.childNodes[1].remove();
    shipsChooseMenu.appendChild(createGameBoard());
  };

  const rotateShip = () => {
    const shipsPosition = document.querySelectorAll(".ship-position");
    shipsPosition.forEach((ship) => {
      ship.classList.toggle("vertical");
      ship.classList.toggle("horizontal");
    });

    currentOrientation =
      currentOrientation === "horizontal" ? "vertical" : "horizontal";
  };

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
/* harmony export */   surrenderMenu: () => (/* binding */ surrenderMenu)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/components/page.js");


const surrenderMenu = (() => {
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

  // PRIVATE FUNCTIONS
  const hideMenu = (event) => {
    event.target.parentNode.classList.add("hide");
  };

  const goBackMainMenu = (event) => {
    event.target.parentNode.classList.add("hide");
    _page__WEBPACK_IMPORTED_MODULE_0__.pageComponent.showMainMenu();
  };

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

  const initializePlayers = (typePlayer1, typePlayer2) => {
    players = [
      new _factories_player__WEBPACK_IMPORTED_MODULE_0__.Player(0, typePlayer1, new _factories_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard(), true),
      new _factories_player__WEBPACK_IMPORTED_MODULE_0__.Player(1, typePlayer2, new _factories_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard(), false),
    ];
  };

  const resetPlayers = () => {
    players.forEach((player) => (player.board = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard()));
  };

  const setUpShipsChooseMenu = (currentPlayerNumber = 0) => {
    const currentPlayer = players[currentPlayerNumber];

    if (currentPlayerNumber === 2) {
      _components_page__WEBPACK_IMPORTED_MODULE_2__.pageComponent.showGameBoards(players);
      return;
    }

    if (currentPlayer.type === "human") {
      _components_page__WEBPACK_IMPORTED_MODULE_2__.pageComponent.showPassDeviceMenu(currentPlayer);
    } else {
      currentPlayer.board.generateRandomBoard();
      _components_page__WEBPACK_IMPORTED_MODULE_2__.pageComponent.showGameBoards(players);
    }
  };

  const attack = (enemy, row, column) => {
    const attackedPlayer = players[enemy];
    const isHit = attackedPlayer.board.receiveAttack(row, column);

    _components_gameboard__WEBPACK_IMPORTED_MODULE_3__.gameBoardComponent.changeCellColor(
      isHit,
      attackedPlayer.number,
      row,
      column
    );

    if (attackedPlayer.board.isGameOver()) endGame(attackedPlayer.number);
    else nextTurn(enemy);
  };

  // PRIVATE FUNCTIONS

  const nextTurn = (enemy) => {
    if (players[1].type === "human") {
      const board = document.querySelector(`[data-player="${enemy}"]`);
      const blocker = board.querySelector(".blocker");
      blocker.classList.remove("hide");

      players[0].isTurn = !players[0].isTurn;
      players[1].isTurn = !players[1].isTurn;
      setTimeout(() => _components_page__WEBPACK_IMPORTED_MODULE_2__.pageComponent.showPassDeviceMenu(players), 800);
    } else {
      attackBot();
    }
  };

  const attackBot = () => {
    const aiCoord = players[1].getCoordinates(players[0].board.board);
    const isHit = players[0].board.receiveAttack(aiCoord[0], aiCoord[1]);

    _components_gameboard__WEBPACK_IMPORTED_MODULE_3__.gameBoardComponent.changeCellColor(
      isHit,
      players[0].number,
      aiCoord[0],
      aiCoord[1]
    );

    if (players[0].board.isGameOver()) endGame(0); // because the looser in player, always 0
  };

  const endGame = (looserNumber) => {
    const blockers = document.querySelectorAll(".blocker");
    const winnerNumber = looserNumber === 0 ? 1 : 0;

    blockers.forEach((blocker) => blocker.classList.remove("hide"));
    _components_page__WEBPACK_IMPORTED_MODULE_2__.pageComponent.showFinishMenu(winnerNumber);
  };

  return {
    setUp,
    initializePlayers,
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

  // PRIVATE FUNCTIONS
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

  // PRIVATE FUNCTIONS
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
    this.length = this.getLengthFromType(type);
    this.hits = 0;
    this.isSunk = false;
  }

  hit() {
    this.hits += 1;
    if (this.hits >= this.length) this.isSunk = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3R0FBd0csVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0s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eEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7VUNyQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0Q7O0FBRWY7QUFDVTtBQUNQO0FBQ0w7O0FBRWpDLDJEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGVzL2dhbWVNZW51LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWVudXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlcy9zaGlwc0Nob29zZU1lbnUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz85Y2M1Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlcy9nYW1lTWVudS5jc3M/NDA3ZiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWVudXMuY3NzP2M4Y2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGVzL3NoaXBzQ2hvb3NlTWVudS5jc3M/ODU1ZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9ibG9ja2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9maW5pc2hNZW51LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lTWVudS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9tYWluTWVudS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvcGFzc0RldmljZU1lbnUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3NoaXBzQ2hvb3NlTWVudS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvc3VycmVuZGVyTWVudS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXJzL2dhbWVMb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogR0VORVJBTCAqL1xuOnJvb3Qge1xuICAtLWJhY2tncm91bmQtY29sb3I6ICM0Mzc4OWU7XG4gIC0tbWFpbi1jb2xvcjogI2ZmZjtcbiAgLS1zZWNvbmQtY29sb3I6ICMyMjI7XG5cbiAgLS1zaGlwOiBibHVlO1xuICAtLWhpdDogcmVkO1xuICAtLW1pc3M6IGdyYXk7XG59XG5cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4ucGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcblxuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgcGFkZGluZzogMTBweCA1MHB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4vKiBVVElMSVRZICovXG4uYmxvY2tlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBSRVNQT05TSVZFICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxZQUFZO0FBQ1o7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLG9CQUFvQjs7RUFFcEIsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsMEJBQTBCOztFQUUxQixpQkFBaUI7RUFDakIsaUJBQWlCOztFQUVqQixrQkFBa0I7O0VBRWxCLG1CQUFtQjtFQUNuQixZQUFZOztFQUVaLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsWUFBWTtBQUNaO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsZUFBZTtBQUNmO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR0VORVJBTCAqL1xcbjpyb290IHtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzQzNzg5ZTtcXG4gIC0tbWFpbi1jb2xvcjogI2ZmZjtcXG4gIC0tc2Vjb25kLWNvbG9yOiAjMjIyO1xcblxcbiAgLS1zaGlwOiBibHVlO1xcbiAgLS1oaXQ6IHJlZDtcXG4gIC0tbWlzczogZ3JheTtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLnBhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcblxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gIHBhZGRpbmc6IDEwcHggNTBweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi8qIFVUSUxJVFkgKi9cXG4uYmxvY2tlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogUkVTUE9OU0lWRSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5nYW1lLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDUwcHg7XG59XG5cbi5nYW1lYm9hcmRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwMHB4O1xufVxuXG4uY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcbn1cblxuLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdCk7XG59XG5cbi5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XG59XG5cbi8qIFJFU1BPTlNJVkUgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuZ2FtZWJvYXJkcy1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvZ2FtZU1lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUEsZUFBZTtBQUNmO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ2FtZS1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLmdhbWVib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTAwcHg7XFxufVxcblxcbi5jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcXG59XFxuXFxuLyogUkVTUE9OU0lWRSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgLmdhbWVib2FyZHMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBNQUlOIE1FTlUgKi9cbi5tYWluLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDUwcHg7XG59XG5cbi5tYWluLW1lbnUgPiBhIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4vKiBPVEhFUiBNRU5VUyAqL1xuLnN1cnJlbmRlci1tZW51LFxuLmZpbmlzaC1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcGFkZGluZzogMjBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG5cbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcblxuICB6LWluZGV4OiAxO1xufVxuXG4uc3VycmVuZGVyLW1lbnUgPiBoMyxcbi5maW5pc2gtbWVudSA+IGgzIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLyogUkVTUE9OU0lWRSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnN1cnJlbmRlci1tZW51LFxuICAuZmluaXNoLW1lbnUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG5cbiAgLnN1cnJlbmRlci1tZW51ID4gaDMsXG4gIC5maW5pc2gtbWVudSA+IGgzIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWVudXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7QUFDZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBLGdCQUFnQjtBQUNoQjs7RUFFRSxrQkFBa0I7O0VBRWxCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTs7RUFFYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTOztFQUVULG1CQUFtQjtFQUNuQixxQ0FBcUM7O0VBRXJDLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRTs7SUFFRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBOztJQUVFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBNQUlOIE1FTlUgKi9cXG4ubWFpbi1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ubWFpbi1tZW51ID4gYSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi8qIE9USEVSIE1FTlVTICovXFxuLnN1cnJlbmRlci1tZW51LFxcbi5maW5pc2gtbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcblxcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnN1cnJlbmRlci1tZW51ID4gaDMsXFxuLmZpbmlzaC1tZW51ID4gaDMge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4vKiBSRVNQT05TSVZFICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5zdXJyZW5kZXItbWVudSxcXG4gIC5maW5pc2gtbWVudSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG5cXG4gIC5zdXJyZW5kZXItbWVudSA+IGgzLFxcbiAgLmZpbmlzaC1tZW51ID4gaDMge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNoaXBzLWNob29zZS1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1MHB4O1xufVxuXG4uc2hpcC1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XG59XG5cbi5nYW1lQm9hcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1NTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2VsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XG59XG5cbi5jZWxsOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uY2VsbDpob3ZlciA+IC5zaGlwLXBvc2l0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uaG9yaXpvbnRhbCB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnZlcnRpY2FsIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5jYXJyaWVyLmhvcml6b250YWwge1xuICB3aWR0aDogMjU5cHg7XG59XG5cbi5jYXJyaWVyLnZlcnRpY2FsIHtcbiAgaGVpZ2h0OiAyNTlweDtcbn1cblxuLmJhdHRsZXNoaXAuaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAyMDlweDtcbn1cblxuLmJhdHRsZXNoaXAudmVydGljYWwge1xuICBoZWlnaHQ6IDIwOXB4O1xufVxuXG4uY3J1aXNlci5ob3Jpem9udGFsIHtcbiAgd2lkdGg6IDE1OXB4O1xufVxuXG4uY3J1aXNlci52ZXJ0aWNhbCB7XG4gIGhlaWdodDogMTU5cHg7XG59XG5cbi5zdWJtYXJpbmUuaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxNTlweDtcbn1cblxuLnN1Ym1hcmluZS52ZXJ0aWNhbCB7XG4gIGhlaWdodDogMTU5cHg7XG59XG5cbi5kZXN0cm95ZXIuaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxMDlweDtcbn1cblxuLmRlc3Ryb3llci52ZXJ0aWNhbCB7XG4gIGhlaWdodDogMTA5cHg7XG59XG5cbi8qIFJFU1BPTlNJVkUgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5nYW1lQm9hcmQge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIC5jZWxsIHtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gIH1cblxuICAuaG9yaXpvbnRhbCB7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICB9XG5cbiAgLnZlcnRpY2FsIHtcbiAgICB3aWR0aDogMjhweDtcbiAgfVxuXG4gIC5jYXJyaWVyLmhvcml6b250YWwge1xuICAgIHdpZHRoOiAxNDlweDtcbiAgfVxuXG4gIC5jYXJyaWVyLnZlcnRpY2FsIHtcbiAgICBoZWlnaHQ6IDE0OXB4O1xuICB9XG5cbiAgLmJhdHRsZXNoaXAuaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IDEyMXB4O1xuICB9XG5cbiAgLmJhdHRsZXNoaXAudmVydGljYWwge1xuICAgIGhlaWdodDogMTIxcHg7XG4gIH1cblxuICAuY3J1aXNlci5ob3Jpem9udGFsIHtcbiAgICB3aWR0aDogOTNweDtcbiAgfVxuXG4gIC5jcnVpc2VyLnZlcnRpY2FsIHtcbiAgICBoZWlnaHQ6IDkzcHg7XG4gIH1cblxuICAuc3VibWFyaW5lLmhvcml6b250YWwge1xuICAgIHdpZHRoOiA5M3B4O1xuICB9XG5cbiAgLnN1Ym1hcmluZS52ZXJ0aWNhbCB7XG4gICAgaGVpZ2h0OiA5M3B4O1xuICB9XG5cbiAgLmRlc3Ryb3llci5ob3Jpem9udGFsIHtcbiAgICB3aWR0aDogNjVweDtcbiAgfVxuXG4gIC5kZXN0cm95ZXIudmVydGljYWwge1xuICAgIGhlaWdodDogNjVweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9zaGlwc0Nob29zZU1lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLGVBQWU7QUFDZjtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zaGlwcy1jaG9vc2UtbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi5zaGlwLXBvc2l0aW9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcXG59XFxuXFxuLmdhbWVCb2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDU1MHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZC1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XFxufVxcblxcbi5jZWxsOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmNlbGw6aG92ZXIgPiAuc2hpcC1wb3NpdGlvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5ob3Jpem9udGFsIHtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnZlcnRpY2FsIHtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uY2Fycmllci5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiAyNTlweDtcXG59XFxuXFxuLmNhcnJpZXIudmVydGljYWwge1xcbiAgaGVpZ2h0OiAyNTlweDtcXG59XFxuXFxuLmJhdHRsZXNoaXAuaG9yaXpvbnRhbCB7XFxuICB3aWR0aDogMjA5cHg7XFxufVxcblxcbi5iYXR0bGVzaGlwLnZlcnRpY2FsIHtcXG4gIGhlaWdodDogMjA5cHg7XFxufVxcblxcbi5jcnVpc2VyLmhvcml6b250YWwge1xcbiAgd2lkdGg6IDE1OXB4O1xcbn1cXG5cXG4uY3J1aXNlci52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IDE1OXB4O1xcbn1cXG5cXG4uc3VibWFyaW5lLmhvcml6b250YWwge1xcbiAgd2lkdGg6IDE1OXB4O1xcbn1cXG5cXG4uc3VibWFyaW5lLnZlcnRpY2FsIHtcXG4gIGhlaWdodDogMTU5cHg7XFxufVxcblxcbi5kZXN0cm95ZXIuaG9yaXpvbnRhbCB7XFxuICB3aWR0aDogMTA5cHg7XFxufVxcblxcbi5kZXN0cm95ZXIudmVydGljYWwge1xcbiAgaGVpZ2h0OiAxMDlweDtcXG59XFxuXFxuLyogUkVTUE9OU0lWRSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZ2FtZUJvYXJkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcblxcbiAgLmNlbGwge1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgfVxcblxcbiAgLmhvcml6b250YWwge1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICB9XFxuXFxuICAudmVydGljYWwge1xcbiAgICB3aWR0aDogMjhweDtcXG4gIH1cXG5cXG4gIC5jYXJyaWVyLmhvcml6b250YWwge1xcbiAgICB3aWR0aDogMTQ5cHg7XFxuICB9XFxuXFxuICAuY2Fycmllci52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogMTQ5cHg7XFxuICB9XFxuXFxuICAuYmF0dGxlc2hpcC5ob3Jpem9udGFsIHtcXG4gICAgd2lkdGg6IDEyMXB4O1xcbiAgfVxcblxcbiAgLmJhdHRsZXNoaXAudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDEyMXB4O1xcbiAgfVxcblxcbiAgLmNydWlzZXIuaG9yaXpvbnRhbCB7XFxuICAgIHdpZHRoOiA5M3B4O1xcbiAgfVxcblxcbiAgLmNydWlzZXIudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDkzcHg7XFxuICB9XFxuXFxuICAuc3VibWFyaW5lLmhvcml6b250YWwge1xcbiAgICB3aWR0aDogOTNweDtcXG4gIH1cXG5cXG4gIC5zdWJtYXJpbmUudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDkzcHg7XFxuICB9XFxuXFxuICAuZGVzdHJveWVyLmhvcml6b250YWwge1xcbiAgICB3aWR0aDogNjVweDtcXG4gIH1cXG5cXG4gIC5kZXN0cm95ZXIudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDY1cHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZU1lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lTWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51cy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcHNDaG9vc2VNZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcHNDaG9vc2VNZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGJsb2NrZXJDb21wb25lbnQgPSAoKCkgPT4ge1xuICBjb25zdCBzZXRVcCA9IChpc1R1cm4pID0+IHtcbiAgICBjb25zdCBibG9ja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBibG9ja2VyLmNsYXNzTGlzdC5hZGQoXCJibG9ja2VyXCIpO1xuXG4gICAgaWYgKCFpc1R1cm4pIGJsb2NrZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgICByZXR1cm4gYmxvY2tlcjtcbiAgfTtcblxuICByZXR1cm4geyBzZXRVcCB9O1xufSkoKTtcbiIsImltcG9ydCB7IEdhbWVMb29wIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2dhbWVMb29wXCI7XG5pbXBvcnQgeyBwYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZVwiO1xuXG5leHBvcnQgY29uc3QgZmluaXNoTWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKCkgPT4ge1xuICAgIGNvbnN0IGZpbmlzaE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgbWFpbk1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgZmluaXNoTWVudS5jbGFzc0xpc3QuYWRkKFwiZmluaXNoLW1lbnVcIik7XG4gICAgZmluaXNoTWVudS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBwbGF5QWdhaW5CdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXkgQWdhaW5cIjtcbiAgICBtYWluTWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTWFpbiBNZW51XCI7XG5cbiAgICBwbGF5QWdhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXlBZ2Fpbik7XG4gICAgbWFpbk1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvQmFja01haW5NZW51KTtcblxuICAgIGZpbmlzaE1lbnUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGZpbmlzaE1lbnUuYXBwZW5kQ2hpbGQocGxheUFnYWluQnV0dG9uKTtcbiAgICBmaW5pc2hNZW51LmFwcGVuZENoaWxkKG1haW5NZW51QnV0dG9uKTtcblxuICAgIHJldHVybiBmaW5pc2hNZW51O1xuICB9O1xuXG4gIC8vIFBSSVZBVEUgRlVOQ1RJT05TXG4gIGNvbnN0IHBsYXlBZ2FpbiA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIEdhbWVMb29wLnJlc2V0UGxheWVycygpO1xuICAgIEdhbWVMb29wLnNldFVwU2hpcHNDaG9vc2VNZW51KCk7XG4gIH07XG5cbiAgY29uc3QgZ29CYWNrTWFpbk1lbnUgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBwYWdlQ29tcG9uZW50LnNob3dNYWluTWVudSgpO1xuICB9O1xuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgZ2FtZUJvYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBwYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZVwiO1xuXG5leHBvcnQgY29uc3QgZ2FtZU1lbnUgPSAoKCkgPT4ge1xuICBjb25zdCBzZXRVcCA9IChwbGF5ZXJzKSA9PiB7XG4gICAgY29uc3QgZ2FtZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjb25zdCBnYW1lQm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdXJyZW5kZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgZ2FtZU1lbnUuY2xhc3NMaXN0LmFkZChcImdhbWUtbWVudVwiKTtcbiAgICBnYW1lQm9hcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmRzLWNvbnRhaW5lclwiKTtcblxuICAgIHN1cnJlbmRlckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VycmVuZGVyXCI7XG4gICAgc3VycmVuZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwYWdlQ29tcG9uZW50LnNob3dTdXJyZW5kZXJNZW51KTtcblxuICAgIGdhbWVCb2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkQ29tcG9uZW50LnNldFVwKHBsYXllcnNbMF0pKTtcbiAgICBnYW1lQm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVCb2FyZENvbXBvbmVudC5zZXRVcChwbGF5ZXJzWzFdKSk7XG5cbiAgICBnYW1lTWVudS5hcHBlbmRDaGlsZChnYW1lQm9hcmRzQ29udGFpbmVyKTtcbiAgICBnYW1lTWVudS5hcHBlbmRDaGlsZChzdXJyZW5kZXJCdXR0b24pO1xuXG4gICAgcmV0dXJuIGdhbWVNZW51O1xuICB9O1xuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgR2FtZUxvb3AgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvZ2FtZUxvb3BcIjtcbmltcG9ydCB7IGJsb2NrZXJDb21wb25lbnQgfSBmcm9tIFwiLi9ibG9ja2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnYW1lQm9hcmRDb21wb25lbnQgPSAoKCkgPT4ge1xuICBsZXQgY3VycmVudEJvYXJkID0gbnVsbDtcbiAgbGV0IGN1cnJlbnRQbGF5ZXIgPSBudWxsO1xuXG4gIGNvbnN0IHNldFVwID0gKHBsYXllcikgPT4ge1xuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXI7XG4gICAgY3VycmVudEJvYXJkID0gcGxheWVyLmJvYXJkO1xuXG4gICAgY29uc3QgZ2FtZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYW1lQm9hcmQuY2xhc3NMaXN0LmFkZChcImdhbWVCb2FyZFwiKTtcbiAgICBnYW1lQm9hcmQuZGF0YXNldC5wbGF5ZXIgPSBcIlwiICsgcGxheWVyLm51bWJlcjtcblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMTA7IGNvbHVtbisrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjdXJyZW50Qm9hcmQuYm9hcmRbcm93XVtjb2x1bW5dO1xuICAgICAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoY3JlYXRlQ2VsbChyb3csIGNvbHVtbiwgZWxlbWVudCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChibG9ja2VyQ29tcG9uZW50LnNldFVwKGN1cnJlbnRQbGF5ZXIuaXNUdXJuKSk7XG5cbiAgICByZXR1cm4gZ2FtZUJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUNlbGxDb2xvciA9IChpc0hpdCwgbnVtYmVyLCByb3csIGNvbHVtbikgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGxheWVyPVwiJHtudW1iZXJ9XCJdYCk7XG4gICAgY29uc3QgY2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sdW1uPVwiJHtjb2x1bW59XCJdYFxuICAgICk7XG5cbiAgICBpZiAoaXNIaXQpIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICB9XG5cbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2spO1xuICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gIH07XG5cbiAgLy8gUFJJVkFURSBGVU5DVElPTlNcbiAgY29uc3QgY3JlYXRlQ2VsbCA9IChyb3csIGNvbHVtbiwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgY2VsbC5kYXRhc2V0LnJvdyA9IHJvdztcbiAgICBjZWxsLmRhdGFzZXQuY29sdW1uID0gY29sdW1uO1xuXG4gICAgaWYgKFxuICAgICAgY3VycmVudFBsYXllci50eXBlICE9PSBcImJvdFwiICYmXG4gICAgICB0eXBlb2YgZWxlbWVudCA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgIWN1cnJlbnRQbGF5ZXIuaXNUdXJuXG4gICAgKSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50UGxheWVyLnR5cGUgIT09IFwiYm90XCIgJiZcbiAgICAgIHR5cGVvZiBlbGVtZW50ID09PSBcIm9iamVjdFwiICYmXG4gICAgICBjdXJyZW50UGxheWVyLmlzVHVyblxuICAgICkge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNvbG9yXCIpO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50ID09PSAtMSkge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSAxKSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICBjZWxsLnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBjZWxsO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFjayA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBlbmVteSA9IHRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQucGxheWVyO1xuICAgIEdhbWVMb29wLmF0dGFjayhlbmVteSwgdGFyZ2V0LmRhdGFzZXQucm93LCB0YXJnZXQuZGF0YXNldC5jb2x1bW4pO1xuICB9O1xuXG4gIHJldHVybiB7IHNldFVwLCBjaGFuZ2VDZWxsQ29sb3IgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBHYW1lTG9vcCB9IGZyb20gXCIuLi9jb250cm9sbGVycy9nYW1lTG9vcFwiO1xuXG5leHBvcnQgY29uc3QgbWFpbk1lbnUgPSAoKCkgPT4ge1xuICBjb25zdCBzZXRVcCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIGNvbnN0IHNpbmdsZVBsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgbXVsdGlQbGF5ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZChcIm1haW4tbWVudVwiKTtcblxuICAgIHNpbmdsZVBsYXllckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSHVtYW4gdnMgQm90XCI7XG4gICAgbXVsdGlQbGF5ZXJCdXR0b24udGV4dENvbnRlbnQgPSBcIkh1bWFuIHZzIEh1bWFuXCI7XG5cbiAgICBzaW5nbGVQbGF5ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0U2luZ2xlR2FtZSk7XG4gICAgbXVsdGlQbGF5ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0TXVsdGlwbGF5ZXJHYW1lKTtcblxuICAgIG1haW5NZW51LmFwcGVuZENoaWxkKHNpbmdsZVBsYXllckJ1dHRvbik7XG4gICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQobXVsdGlQbGF5ZXJCdXR0b24pO1xuICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGNyZWF0ZUxpbmsoKSk7XG5cbiAgICByZXR1cm4gbWFpbk1lbnU7XG4gIH07XG5cbiAgLy8gUFJJVkFURSBGVU5DVElPTlNcbiAgY29uc3QgY3JlYXRlTGluayA9ICgpID0+IHtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgICBsaW5rLnRleHRDb250ZW50ID0gXCJTZXJnaW8gR2FyY8OtYVwiO1xuICAgIGxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL3Nlcmdpb2dhcmNpaWFtXCI7XG4gICAgbGluay50YXJnZXQgPSBcIl9fYmxhbmtcIjtcblxuICAgIHJldHVybiBsaW5rO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0U2luZ2xlR2FtZSA9ICgpID0+IHtcbiAgICBHYW1lTG9vcC5pbml0aWFsaXplUGxheWVycyhcImh1bWFuXCIsIFwiYm90XCIpO1xuICAgIEdhbWVMb29wLnNldFVwU2hpcHNDaG9vc2VNZW51KCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc3RhcnRNdWx0aXBsYXllckdhbWUoKSB7XG4gICAgR2FtZUxvb3AuaW5pdGlhbGl6ZVBsYXllcnMoXCJodW1hblwiLCBcImh1bWFuXCIpO1xuICAgIEdhbWVMb29wLnNldFVwU2hpcHNDaG9vc2VNZW51KCk7XG4gIH1cblxuICByZXR1cm4geyBzZXRVcCB9O1xufSkoKTtcbiIsImltcG9ydCB7IGZpbmlzaE1lbnUgfSBmcm9tIFwiLi9maW5pc2hNZW51XCI7XG5pbXBvcnQgeyBnYW1lTWVudSB9IGZyb20gXCIuL2dhbWVNZW51XCI7XG5pbXBvcnQgeyBtYWluTWVudSB9IGZyb20gXCIuL21haW5NZW51XCI7XG5pbXBvcnQgeyBwYXNzRGV2aWNlTWVudSB9IGZyb20gXCIuL3Bhc3NEZXZpY2VNZW51XCI7XG5pbXBvcnQgeyBzaGlwc0Nob29zZU1lbnUgfSBmcm9tIFwiLi9zaGlwc0Nob29zZU1lbnVcIjtcbmltcG9ydCB7IHN1cnJlbmRlck1lbnUgfSBmcm9tIFwiLi9zdXJyZW5kZXJNZW51XCI7XG5cbmV4cG9ydCBjb25zdCBwYWdlQ29tcG9uZW50ID0gKCgpID0+IHtcbiAgbGV0IHBhZ2VFbGVtZW50ID0gbnVsbDtcbiAgbGV0IHRpdGxlRWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc2V0VXAgPSAoKSA9PiB7XG4gICAgY3JlYXRlUGFnZUVsZW1lbnQoKTtcbiAgICBwYWdlRWxlbWVudC5hcHBlbmRDaGlsZChtYWluTWVudS5zZXRVcCgpKTtcbiAgICBwYWdlRWxlbWVudC5hcHBlbmRDaGlsZChmaW5pc2hNZW51LnNldFVwKCkpO1xuICAgIHBhZ2VFbGVtZW50LmFwcGVuZENoaWxkKHN1cnJlbmRlck1lbnUuc2V0VXAoKSk7XG5cbiAgICByZXR1cm4gcGFnZUVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3Qgc2hvd01haW5NZW51ID0gKCkgPT4ge1xuICAgIHJlbW92ZVByZXZpb3VzQ29udGVudCgpO1xuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcHNcIjtcbiAgICBwYWdlRWxlbWVudC5hcHBlbmRDaGlsZChtYWluTWVudS5zZXRVcCgpKTtcbiAgfTtcblxuICBjb25zdCBzaG93Q2hvb3NlU2hpcHNNZW51ID0gKHBsYXllcikgPT4ge1xuICAgIHJlbW92ZVByZXZpb3VzQ29udGVudCgpO1xuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IGBQbGF5ZXIgJHtwbGF5ZXIubnVtYmVyICsgMX06IGNob29zZSB5b3VyIHNoaXBzYDtcbiAgICBwYWdlRWxlbWVudC5hcHBlbmRDaGlsZChzaGlwc0Nob29zZU1lbnUuc2V0VXAocGxheWVyKSk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1Bhc3NEZXZpY2VNZW51ID0gKHBsYXllcikgPT4ge1xuICAgIHJlbW92ZVByZXZpb3VzQ29udGVudCgpO1xuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IFwiUGFzcyB0aGUgZGV2aWNlXCI7XG4gICAgcGFnZUVsZW1lbnQuYXBwZW5kQ2hpbGQocGFzc0RldmljZU1lbnUuc2V0VXAocGxheWVyKSk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0dhbWVCb2FyZHMgPSAocGxheWVycykgPT4ge1xuICAgIHJlbW92ZVByZXZpb3VzQ29udGVudCgpO1xuICAgIGNvbnN0IHBsYXllclR1cm4gPSBwbGF5ZXJzWzBdLmlzVHVyblxuICAgICAgPyBwbGF5ZXJzWzBdLm51bWJlclxuICAgICAgOiBwbGF5ZXJzWzFdLm51bWJlcjtcbiAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgUGxheWVyICR7cGxheWVyVHVybiArIDF9OiBjaG9vc2Ugb25lIGNlbGxgO1xuICAgIHBhZ2VFbGVtZW50LmFwcGVuZENoaWxkKGdhbWVNZW51LnNldFVwKHBsYXllcnMpKTtcbiAgfTtcblxuICBjb25zdCBzaG93U3VycmVuZGVyTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBzdXJyZW5kZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdXJyZW5kZXItbWVudVwiKTtcbiAgICBzdXJyZW5kZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dGaW5pc2hNZW51ID0gKHdpbm5lck51bWJlcikgPT4ge1xuICAgIGNvbnN0IGZpbmlzaE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbmlzaC1tZW51XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZmluaXNoTWVudS5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XG5cbiAgICBmaW5pc2hNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYFBsYXllciAke3dpbm5lck51bWJlciArIDF9IHdvbiFgO1xuICB9O1xuXG4gIC8vIFBSSVZBVEUgRlVOQ1RJT05TXG4gIGNvbnN0IGNyZWF0ZVBhZ2VFbGVtZW50ID0gKCkgPT4ge1xuICAgIHBhZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicGFnZVwiKTtcblxuICAgIHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcHNcIjtcblxuICAgIHBhZ2VFbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgcmV0dXJuIHBhZ2VFbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByZXZpb3VzQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIG1haW5FbGVtZW50LnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0VXAsXG4gICAgc2hvd01haW5NZW51LFxuICAgIHNob3dDaG9vc2VTaGlwc01lbnUsXG4gICAgc2hvd1Bhc3NEZXZpY2VNZW51LFxuICAgIHNob3dHYW1lQm9hcmRzLFxuICAgIHNob3dTdXJyZW5kZXJNZW51LFxuICAgIHNob3dGaW5pc2hNZW51LFxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IHBhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBwYXNzRGV2aWNlTWVudSA9ICgoKSA9PiB7XG4gIGxldCBjdXJyZW50UGxheWVyID0gbnVsbDtcblxuICBjb25zdCBzZXRVcCA9IChwbGF5ZXIpID0+IHtcbiAgICBjdXJyZW50UGxheWVyID0gcGxheWVyO1xuXG4gICAgY29uc3QgcGFzc0RldmljZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgcGFzc0RldmljZU1lbnUuY2xhc3NMaXN0LmFkZChcInBhc3MtZGV2aWNlLW1lbnVcIik7XG5cbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIk5leHQgVHVyblwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVBhc3NEZXZpY2VNZW51KTtcblxuICAgIHBhc3NEZXZpY2VNZW51LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4gcGFzc0RldmljZU1lbnU7XG4gIH07XG5cbiAgY29uc3QgaGlkZVBhc3NEZXZpY2VNZW51ID0gKCkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRQbGF5ZXIpKSB7XG4gICAgICBwYWdlQ29tcG9uZW50LnNob3dHYW1lQm9hcmRzKGN1cnJlbnRQbGF5ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWdlQ29tcG9uZW50LnNob3dDaG9vc2VTaGlwc01lbnUoY3VycmVudFBsYXllcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgR2FtZUxvb3AgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvZ2FtZUxvb3BcIjtcblxuZXhwb3J0IGNvbnN0IHNoaXBzQ2hvb3NlTWVudSA9ICgoKSA9PiB7XG4gIGxldCBjdXJyZW50UGxheWVyID0gbnVsbDtcbiAgbGV0IGN1cnJlbnRTaGlwID0gXCJcIjtcbiAgbGV0IGN1cnJlbnRPcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuXG4gIGNvbnN0IHNldFVwID0gKHBsYXllcikgPT4ge1xuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXI7XG4gICAgY3VycmVudFNoaXAgPSBcImNhcnJpZXJcIjtcblxuICAgIGNvbnN0IHNoaXBzQ2hvb3NlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIHNoaXBzQ2hvb3NlTWVudS5jbGFzc0xpc3QuYWRkKFwic2hpcHMtY2hvb3NlLW1lbnVcIik7XG5cbiAgICBzaGlwc0Nob29zZU1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKCkpO1xuICAgIHNoaXBzQ2hvb3NlTWVudS5hcHBlbmRDaGlsZChjcmVhdGVHYW1lQm9hcmQoKSk7XG5cbiAgICByZXR1cm4gc2hpcHNDaG9vc2VNZW51O1xuICB9O1xuXG4gIC8vIFBSSVZBVEUgRlVOQ1RJT05TXG4gIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUm90YXRlXCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb3RhdGVTaGlwKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gY3VycmVudFBsYXllci5ib2FyZC5ib2FyZDtcbiAgICBnYW1lQm9hcmQuY2xhc3NMaXN0LmFkZChcImdhbWVCb2FyZFwiKTtcblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMTA7IGNvbHVtbisrKSB7XG4gICAgICAgIGNvbnN0IGlzU2hpcCA9IHR5cGVvZiBwbGF5ZXJCb2FyZFtyb3ddW2NvbHVtbl0gPT09IFwib2JqZWN0XCI7XG4gICAgICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChjcmVhdGVDZWxsKHJvdywgY29sdW1uLCBpc1NoaXApKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ2FtZUJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNlbGwgPSAocm93LCBjb2x1bW4sIGlzU2hpcCkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNoaXBQb3NpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgIHNoaXBQb3NpdGlvbi5jbGFzc0xpc3QuYWRkKFwic2hpcC1wb3NpdGlvblwiKTtcbiAgICBzaGlwUG9zaXRpb24uY2xhc3NMaXN0LmFkZChjdXJyZW50T3JpZW50YXRpb24pO1xuICAgIHNoaXBQb3NpdGlvbi5jbGFzc0xpc3QuYWRkKGN1cnJlbnRTaGlwKTtcblxuICAgIGNlbGwuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgY2VsbC5kYXRhc2V0LmNvbHVtbiA9IGNvbHVtbjtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRTaGlwKTtcblxuICAgIGNlbGwuYXBwZW5kQ2hpbGQoc2hpcFBvc2l0aW9uKTtcblxuICAgIGlmIChpc1NoaXApIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjb2xvclwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2VsbDtcbiAgfTtcblxuICBjb25zdCBhZGRTaGlwID0gKGUpID0+IHtcbiAgICBjb25zdCBzaGlwc0Nob29zZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzLWNob29zZS1tZW51XCIpO1xuICAgIGNvbnN0IHJvdyA9ICtlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQucm93O1xuICAgIGNvbnN0IGNvbHVtbiA9ICtlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuY29sdW1uO1xuXG4gICAgY29uc3QgaXNQbGFjZWQgPSBjdXJyZW50UGxheWVyLmJvYXJkLnBsYWNlU2hpcChcbiAgICAgIHJvdyxcbiAgICAgIGNvbHVtbixcbiAgICAgIGN1cnJlbnRTaGlwLFxuICAgICAgY3VycmVudE9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIlxuICAgICk7XG5cbiAgICBpZiAoIWlzUGxhY2VkKSByZXR1cm47XG5cbiAgICBzd2l0Y2ggKGN1cnJlbnRTaGlwKSB7XG4gICAgICBjYXNlIFwiY2FycmllclwiOlxuICAgICAgICBjdXJyZW50U2hpcCA9IFwiYmF0dGxlc2hpcFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJiYXR0bGVzaGlwXCI6XG4gICAgICAgIGN1cnJlbnRTaGlwID0gXCJjcnVpc2VyXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImNydWlzZXJcIjpcbiAgICAgICAgY3VycmVudFNoaXAgPSBcInN1Ym1hcmluZVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzdWJtYXJpbmVcIjpcbiAgICAgICAgY3VycmVudFNoaXAgPSBcImRlc3Ryb3llclwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkZXN0cm95ZXJcIjpcbiAgICAgICAgY3VycmVudFNoaXAgPSBcIlwiO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFNoaXAgPT09IFwiXCIpIHtcbiAgICAgIEdhbWVMb29wLnNldFVwU2hpcHNDaG9vc2VNZW51KGN1cnJlbnRQbGF5ZXIubnVtYmVyICsgMSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2hpcHNDaG9vc2VNZW51LmNoaWxkTm9kZXNbMV0ucmVtb3ZlKCk7XG4gICAgc2hpcHNDaG9vc2VNZW51LmFwcGVuZENoaWxkKGNyZWF0ZUdhbWVCb2FyZCgpKTtcbiAgfTtcblxuICBjb25zdCByb3RhdGVTaGlwID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzUG9zaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAtcG9zaXRpb25cIik7XG4gICAgc2hpcHNQb3NpdGlvbi5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgIHNoaXAuY2xhc3NMaXN0LnRvZ2dsZShcImhvcml6b250YWxcIik7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50T3JpZW50YXRpb24gPVxuICAgICAgY3VycmVudE9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICB9O1xuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgcGFnZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IHN1cnJlbmRlck1lbnUgPSAoKCkgPT4ge1xuICBjb25zdCBzZXRVcCA9ICgpID0+IHtcbiAgICBjb25zdCBzdXJyZW5kZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBiYWNrR2FtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBzdXJyZW5kZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJzdXJyZW5kZXItbWVudVwiKTtcbiAgICBzdXJyZW5kZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkFyZSB5b3Ugc3VyZT9cIjtcbiAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gXCJZZXMhXCI7XG4gICAgYmFja0dhbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIk5vcFwiO1xuXG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29CYWNrTWFpbk1lbnUpO1xuICAgIGJhY2tHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlTWVudSk7XG5cbiAgICBzdXJyZW5kZXJNZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBzdXJyZW5kZXJNZW51LmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuICAgIHN1cnJlbmRlck1lbnUuYXBwZW5kQ2hpbGQoYmFja0dhbWVCdXR0b24pO1xuXG4gICAgcmV0dXJuIHN1cnJlbmRlck1lbnU7XG4gIH07XG5cbiAgLy8gUFJJVkFURSBGVU5DVElPTlNcbiAgY29uc3QgaGlkZU1lbnUgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgfTtcblxuICBjb25zdCBnb0JhY2tNYWluTWVudSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIHBhZ2VDb21wb25lbnQuc2hvd01haW5NZW51KCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0VXAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vZmFjdG9yaWVzL3BsYXllclwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4uL2ZhY3Rvcmllcy9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IHBhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlXCI7XG5pbXBvcnQgeyBnYW1lQm9hcmRDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lYm9hcmRcIjtcblxuZXhwb3J0IGNvbnN0IEdhbWVMb29wID0gKCgpID0+IHtcbiAgbGV0IHBsYXllcnMgPSBbXTtcblxuICBjb25zdCBzZXRVcCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VDb21wb25lbnQuc2V0VXAoKSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbGl6ZVBsYXllcnMgPSAodHlwZVBsYXllcjEsIHR5cGVQbGF5ZXIyKSA9PiB7XG4gICAgcGxheWVycyA9IFtcbiAgICAgIG5ldyBQbGF5ZXIoMCwgdHlwZVBsYXllcjEsIG5ldyBHYW1lQm9hcmQoKSwgdHJ1ZSksXG4gICAgICBuZXcgUGxheWVyKDEsIHR5cGVQbGF5ZXIyLCBuZXcgR2FtZUJvYXJkKCksIGZhbHNlKSxcbiAgICBdO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0UGxheWVycyA9ICgpID0+IHtcbiAgICBwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4gKHBsYXllci5ib2FyZCA9IG5ldyBHYW1lQm9hcmQoKSkpO1xuICB9O1xuXG4gIGNvbnN0IHNldFVwU2hpcHNDaG9vc2VNZW51ID0gKGN1cnJlbnRQbGF5ZXJOdW1iZXIgPSAwKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IHBsYXllcnNbY3VycmVudFBsYXllck51bWJlcl07XG5cbiAgICBpZiAoY3VycmVudFBsYXllck51bWJlciA9PT0gMikge1xuICAgICAgcGFnZUNvbXBvbmVudC5zaG93R2FtZUJvYXJkcyhwbGF5ZXJzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFBsYXllci50eXBlID09PSBcImh1bWFuXCIpIHtcbiAgICAgIHBhZ2VDb21wb25lbnQuc2hvd1Bhc3NEZXZpY2VNZW51KGN1cnJlbnRQbGF5ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50UGxheWVyLmJvYXJkLmdlbmVyYXRlUmFuZG9tQm9hcmQoKTtcbiAgICAgIHBhZ2VDb21wb25lbnQuc2hvd0dhbWVCb2FyZHMocGxheWVycyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGF0dGFjayA9IChlbmVteSwgcm93LCBjb2x1bW4pID0+IHtcbiAgICBjb25zdCBhdHRhY2tlZFBsYXllciA9IHBsYXllcnNbZW5lbXldO1xuICAgIGNvbnN0IGlzSGl0ID0gYXR0YWNrZWRQbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbik7XG5cbiAgICBnYW1lQm9hcmRDb21wb25lbnQuY2hhbmdlQ2VsbENvbG9yKFxuICAgICAgaXNIaXQsXG4gICAgICBhdHRhY2tlZFBsYXllci5udW1iZXIsXG4gICAgICByb3csXG4gICAgICBjb2x1bW5cbiAgICApO1xuXG4gICAgaWYgKGF0dGFja2VkUGxheWVyLmJvYXJkLmlzR2FtZU92ZXIoKSkgZW5kR2FtZShhdHRhY2tlZFBsYXllci5udW1iZXIpO1xuICAgIGVsc2UgbmV4dFR1cm4oZW5lbXkpO1xuICB9O1xuXG4gIC8vIFBSSVZBVEUgRlVOQ1RJT05TXG5cbiAgY29uc3QgbmV4dFR1cm4gPSAoZW5lbXkpID0+IHtcbiAgICBpZiAocGxheWVyc1sxXS50eXBlID09PSBcImh1bWFuXCIpIHtcbiAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGxheWVyPVwiJHtlbmVteX1cIl1gKTtcbiAgICAgIGNvbnN0IGJsb2NrZXIgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFwiLmJsb2NrZXJcIik7XG4gICAgICBibG9ja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuXG4gICAgICBwbGF5ZXJzWzBdLmlzVHVybiA9ICFwbGF5ZXJzWzBdLmlzVHVybjtcbiAgICAgIHBsYXllcnNbMV0uaXNUdXJuID0gIXBsYXllcnNbMV0uaXNUdXJuO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBwYWdlQ29tcG9uZW50LnNob3dQYXNzRGV2aWNlTWVudShwbGF5ZXJzKSwgODAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0YWNrQm90KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGF0dGFja0JvdCA9ICgpID0+IHtcbiAgICBjb25zdCBhaUNvb3JkID0gcGxheWVyc1sxXS5nZXRDb29yZGluYXRlcyhwbGF5ZXJzWzBdLmJvYXJkLmJvYXJkKTtcbiAgICBjb25zdCBpc0hpdCA9IHBsYXllcnNbMF0uYm9hcmQucmVjZWl2ZUF0dGFjayhhaUNvb3JkWzBdLCBhaUNvb3JkWzFdKTtcblxuICAgIGdhbWVCb2FyZENvbXBvbmVudC5jaGFuZ2VDZWxsQ29sb3IoXG4gICAgICBpc0hpdCxcbiAgICAgIHBsYXllcnNbMF0ubnVtYmVyLFxuICAgICAgYWlDb29yZFswXSxcbiAgICAgIGFpQ29vcmRbMV1cbiAgICApO1xuXG4gICAgaWYgKHBsYXllcnNbMF0uYm9hcmQuaXNHYW1lT3ZlcigpKSBlbmRHYW1lKDApOyAvLyBiZWNhdXNlIHRoZSBsb29zZXIgaW4gcGxheWVyLCBhbHdheXMgMFxuICB9O1xuXG4gIGNvbnN0IGVuZEdhbWUgPSAobG9vc2VyTnVtYmVyKSA9PiB7XG4gICAgY29uc3QgYmxvY2tlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrZXJcIik7XG4gICAgY29uc3Qgd2lubmVyTnVtYmVyID0gbG9vc2VyTnVtYmVyID09PSAwID8gMSA6IDA7XG5cbiAgICBibG9ja2Vycy5mb3JFYWNoKChibG9ja2VyKSA9PiBibG9ja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcbiAgICBwYWdlQ29tcG9uZW50LnNob3dGaW5pc2hNZW51KHdpbm5lck51bWJlcik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRVcCxcbiAgICBpbml0aWFsaXplUGxheWVycyxcbiAgICByZXNldFBsYXllcnMsXG4gICAgc2V0VXBTaGlwc0Nob29zZU1lbnUsXG4gICAgYXR0YWNrLFxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEFycmF5KDEwKS5maWxsKDApLm1hcCgoKSA9PiBuZXcgQXJyYXkoMTApLmZpbGwoMCkpO1xuICB9XG5cbiAgcGxhY2VTaGlwKHJvdywgY29sdW1uLCBzaGlwVHlwZSwgaXNIb3Jpem9udGFsKSB7XG4gICAgY29uc3QgdGVtcG9yYWxCb2FyZCA9IHRoaXMuZGVlcENvcHlCb2FyZCgpO1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChzaGlwVHlwZSk7XG5cbiAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICBjb25zdCBtYXggPSBjb2x1bW4gKyBzaGlwLmxlbmd0aDtcbiAgICAgIGlmIChtYXggPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IGNvbHVtbjsgaW5kZXggPCBtYXg7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wb3JhbEJvYXJkW3Jvd11baW5kZXhdID09PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRlbXBvcmFsQm9hcmRbcm93XVtpbmRleF0gPSBzaGlwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXggPSByb3cgKyBzaGlwLmxlbmd0aDtcbiAgICAgIGlmIChtYXggPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IHJvdzsgaW5kZXggPCBtYXg7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wb3JhbEJvYXJkW2luZGV4XVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRlbXBvcmFsQm9hcmRbaW5kZXhdW2NvbHVtbl0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYm9hcmQgPSB0ZW1wb3JhbEJvYXJkO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbikge1xuICAgIGxldCB0YXJnZXQgPSB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXTtcblxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB0YXJnZXQuaGl0KCk7XG4gICAgICB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXSA9IDE7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gMCkge1xuICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0gPSAtMTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpc0dhbWVPdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmJvYXJkLmZsYXQoKS5ldmVyeSgoY2VsbCkgPT4gdHlwZW9mIGNlbGwgIT09IFwib2JqZWN0XCIpO1xuICB9XG5cbiAgZ2VuZXJhdGVSYW5kb21Cb2FyZCgpIHtcbiAgICBsZXQgdHlwZXNTaGlwcyA9IFtcbiAgICAgIFwiY2FycmllclwiLFxuICAgICAgXCJiYXR0bGVzaGlwXCIsXG4gICAgICBcImNydWlzZXJcIixcbiAgICAgIFwic3VibWFyaW5lXCIsXG4gICAgICBcImRlc3Ryb3llclwiLFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IHNoaXBUeXBlIG9mIHR5cGVzU2hpcHMpIHtcbiAgICAgIGxldCBpc1BsYWNlZCA9IGZhbHNlO1xuICAgICAgd2hpbGUgKCFpc1BsYWNlZCkge1xuICAgICAgICBjb25zdCByb3cgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcbiAgICAgICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy5nZXRSYW5kb21EaXJlY3Rpb24oKTtcbiAgICAgICAgaXNQbGFjZWQgPSB0aGlzLnBsYWNlU2hpcChyb3csIGNvbHVtbiwgc2hpcFR5cGUsIGlzSG9yaXpvbnRhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUFJJVkFURSBGVU5DVElPTlNcbiAgZGVlcENvcHlCb2FyZCgpIHtcbiAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5ib2FyZC5sZW5ndGg7XG4gICAgY29uc3QgbnVtQ29scyA9IHRoaXMuYm9hcmRbMF0ubGVuZ3RoO1xuXG4gICAgY29uc3QgdGVtcG9yYWxCb2FyZCA9IG5ldyBBcnJheShudW1Sb3dzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvd3M7IGkrKykge1xuICAgICAgdGVtcG9yYWxCb2FyZFtpXSA9IG5ldyBBcnJheShudW1Db2xzKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBudW1Sb3dzOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbnVtQ29sczsgY29sKyspIHtcbiAgICAgICAgdGVtcG9yYWxCb2FyZFtyb3ddW2NvbF0gPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcG9yYWxCb2FyZDtcbiAgfVxuXG4gIGdldFJhbmRvbUludChtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKTtcbiAgfVxuXG4gIGdldFJhbmRvbURpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA8IDAuNTsgLy8gSG9yaXpvbnRhbDogdHJ1ZSwgVmVydGljYWw6IGZhbHNlXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihudW1iZXIsIHR5cGUsIGJvYXJkLCBpc1R1cm4pIHtcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICB0aGlzLmlzVHVybiA9IGlzVHVybjtcbiAgfVxuXG4gIGdldENvb3JkaW5hdGVzKGVuZW15Qm9hcmQpIHtcbiAgICBsZXQgYm9hcmRQb3NzaWJsZUhpdHMgPSBbXTtcblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMTA7IGNvbHVtbisrKSB7XG4gICAgICAgIGlmIChlbmVteUJvYXJkW3Jvd11bY29sdW1uXSA9PT0gMSkge1xuICAgICAgICAgIGNvbnN0IGJldHRlckNvb3JkaW5hdGVzID0gdGhpcy5nZXRCZXR0ZXJDb29yZGluYXRlcyhcbiAgICAgICAgICAgIGVuZW15Qm9hcmQsXG4gICAgICAgICAgICByb3csXG4gICAgICAgICAgICBjb2x1bW5cbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChiZXR0ZXJDb29yZGluYXRlcyAhPT0gbnVsbCkgcmV0dXJuIGJldHRlckNvb3JkaW5hdGVzO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGVuZW15Qm9hcmRbcm93XVtjb2x1bW5dICE9PSAxICYmXG4gICAgICAgICAgZW5lbXlCb2FyZFtyb3ddW2NvbHVtbl0gIT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIGJvYXJkUG9zc2libGVIaXRzLnB1c2goW3JvdywgY29sdW1uXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcmFuZG9tT3B0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRQb3NzaWJsZUhpdHMubGVuZ3RoKTtcblxuICAgIHJldHVybiBib2FyZFBvc3NpYmxlSGl0c1tyYW5kb21PcHRpb25dO1xuICB9XG5cbiAgLy8gUFJJVkFURSBGVU5DVElPTlNcbiAgZ2V0SG9yaXpvbnRhbCgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA8IDAuNTtcbiAgfVxuXG4gIGdldEJldHRlckNvb3JkaW5hdGVzKGVuZW15Qm9hcmQsIHJvdywgY29sdW1uKSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZTEgPSByb3cgKyAxICE9PSAxMCA/IGVuZW15Qm9hcmRbcm93ICsgMV1bY29sdW1uXSA6IDE7XG4gICAgY29uc3QgY29vcmRpbmF0ZTIgPSByb3cgLSAxICE9PSAtMSA/IGVuZW15Qm9hcmRbcm93IC0gMV1bY29sdW1uXSA6IDE7XG4gICAgY29uc3QgY29vcmRpbmF0ZTMgPSBjb2x1bW4gKyAxICE9PSAxMCA/IGVuZW15Qm9hcmRbcm93XVtjb2x1bW4gKyAxXSA6IDE7XG4gICAgY29uc3QgY29vcmRpbmF0ZTQgPSBjb2x1bW4gLSAxICE9PSAtMSA/IGVuZW15Qm9hcmRbcm93XVtjb2x1bW4gLSAxXSA6IDE7XG5cbiAgICBpZiAoY29vcmRpbmF0ZTEgIT09IDEgJiYgY29vcmRpbmF0ZTEgIT09IC0xKSByZXR1cm4gW3JvdyArIDEsIGNvbHVtbl07XG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZTIgIT09IDEgJiYgY29vcmRpbmF0ZTIgIT09IC0xKSByZXR1cm4gW3JvdyAtIDEsIGNvbHVtbl07XG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZTMgIT09IDEgJiYgY29vcmRpbmF0ZTMgIT09IC0xKSByZXR1cm4gW3JvdywgY29sdW1uICsgMV07XG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZTQgIT09IDEgJiYgY29vcmRpbmF0ZTQgIT09IC0xKSByZXR1cm4gW3JvdywgY29sdW1uIC0gMV07XG4gICAgZWxzZSByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLmdldExlbmd0aEZyb21UeXBlKHR5cGUpO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5pc1N1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICBpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKSB0aGlzLmlzU3VuayA9IHRydWU7XG4gIH1cblxuICBnZXRMZW5ndGhGcm9tVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcnJpZXI6IDUsXG4gICAgICBiYXR0bGVzaGlwOiA0LFxuICAgICAgY3J1aXNlcjogMyxcbiAgICAgIHN1Ym1hcmluZTogMyxcbiAgICAgIGRlc3Ryb3llcjogMixcbiAgICB9W3R5cGVdO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBHYW1lTG9vcCB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL2dhbWVMb29wXCI7XG5cbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy9tZW51cy5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy9zaGlwc0Nob29zZU1lbnUuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZXMvZ2FtZU1lbnUuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZXMvYXBwLmNzc1wiO1xuXG5HYW1lTG9vcC5zZXRVcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9