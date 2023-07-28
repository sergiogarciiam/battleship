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

  --ship: #439e49;
  --hit: #9e4343;
  --miss: #949494;
}

* {
  padding: 0;
  margin: 0;
}

body {
  padding: 20px;
  color: var(--main-color);
  height: 100%;
  background: linear-gradient(
    90deg,
    var(--background-color),
    var(--second-color)
  );
  background-size: 200% 200%;
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
`, "",{"version":3,"sources":["webpack://./src/assets/styles/app.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,oBAAoB;;EAEpB,eAAe;EACf,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,YAAY;EACZ;;;;GAIC;EACD,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;EACnC,0BAA0B;;EAE1B,iBAAiB;EACjB,iBAAiB;;EAEjB,kBAAkB;;EAElB,mBAAmB;EACnB,YAAY;;EAEZ,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;AACvB;;AAEA,YAAY;AACZ;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA,eAAe;AACf;EACE;IACE,eAAe;EACjB;AACF","sourcesContent":["/* GENERAL */\n:root {\n  --background-color: #43789e;\n  --main-color: #fff;\n  --second-color: #222;\n\n  --ship: #439e49;\n  --hit: #9e4343;\n  --miss: #949494;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  padding: 20px;\n  color: var(--main-color);\n  height: 100%;\n  background: linear-gradient(\n    90deg,\n    var(--background-color),\n    var(--second-color)\n  );\n  background-size: 200% 200%;\n}\n\n.page {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.title {\n  font-size: 4rem;\n  font-weight: bold;\n  margin-bottom: 50px;\n}\n\nbutton {\n  background-color: var(--main-color);\n  color: var(--second-color);\n\n  font-size: 1.1rem;\n  font-weight: bold;\n\n  padding: 10px 50px;\n\n  border-radius: 20px;\n  border: none;\n\n  cursor: pointer;\n  transition: transform 300ms;\n}\n\nbutton:hover {\n  transform: scale(1.1);\n}\n\n/* UTILITY */\n.blocker {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.hide {\n  display: none;\n}\n\n/* RESPONSIVE */\n@media screen and (max-width: 1000px) {\n  .title {\n    font-size: 2rem;\n  }\n}\n"],"sourceRoot":""}]);
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
  transition: transform 300ms;
}

.main-menu > a:hover {
  transform: scale(1.1);
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
`, "",{"version":3,"sources":["webpack://./src/assets/styles/menus.css"],"names":[],"mappings":"AAAA,cAAc;AACd;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;AACvB;;AAEA,gBAAgB;AAChB;;EAEE,kBAAkB;;EAElB,YAAY;EACZ,aAAa;EACb,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;;EAET,mBAAmB;EACnB,qCAAqC;;EAErC,UAAU;AACZ;;AAEA;;EAEE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA,eAAe;AACf;EACE;;IAEE,YAAY;IACZ,aAAa;EACf;;EAEA;;IAEE,eAAe;EACjB;AACF","sourcesContent":["/* MAIN MENU */\n.main-menu {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n\n.main-menu > a {\n  font-size: 1.5rem;\n  color: var(--main-color);\n  align-self: center;\n  margin-top: 50px;\n  transition: transform 300ms;\n}\n\n.main-menu > a:hover {\n  transform: scale(1.1);\n}\n\n/* OTHER MENUS */\n.surrender-menu,\n.finish-menu {\n  position: absolute;\n\n  width: 400px;\n  height: 300px;\n  padding: 20px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n\n  border-radius: 20px;\n  background-color: var(--second-color);\n\n  z-index: 1;\n}\n\n.surrender-menu > h3,\n.finish-menu > h3 {\n  font-size: 4rem;\n  font-weight: bold;\n  margin-bottom: 50px;\n}\n\n/* RESPONSIVE */\n@media screen and (max-width: 600px) {\n  .surrender-menu,\n  .finish-menu {\n    width: 300px;\n    height: 300px;\n  }\n\n  .surrender-menu > h3,\n  .finish-menu > h3 {\n    font-size: 3rem;\n  }\n}\n"],"sourceRoot":""}]);
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
  width: 239px;
}

.carrier.vertical {
  height: 239px;
}

.battleship.horizontal {
  width: 189px;
}

.battleship.vertical {
  height: 189px;
}

.cruiser.horizontal {
  width: 145px;
}

.cruiser.vertical {
  height: 145px;
}

.submarine.horizontal {
  width: 145px;
}

.submarine.vertical {
  height: 145px;
}

.destroyer.horizontal {
  width: 95px;
}

.destroyer.vertical {
  height: 95px;
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
    width: 135px;
  }

  .carrier.vertical {
    height: 135px;
  }

  .battleship.horizontal {
    width: 110px;
  }

  .battleship.vertical {
    height: 110px;
  }

  .cruiser.horizontal {
    width: 83px;
  }

  .cruiser.vertical {
    height: 83px;
  }

  .submarine.horizontal {
    width: 83px;
  }

  .submarine.vertical {
    height: 83px;
  }

  .destroyer.horizontal {
    width: 55px;
  }

  .destroyer.vertical {
    height: 55px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/shipsChooseMenu.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,qCAAqC;EACrC,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA,eAAe;AACf;EACE;IACE,YAAY;EACd;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;AACF","sourcesContent":[".ships-choose-menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n\n.ship-position {\n  position: absolute;\n  display: none;\n  background-color: var(--ship);\n}\n\n.gameBoard {\n  position: relative;\n  display: flex;\n  width: 550px;\n  flex-wrap: wrap;\n}\n\n.cell {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  border: 1px solid var(--second-color);\n  cursor: pointer;\n  transition: transform 300ms;\n}\n\n.cell:hover {\n  transform: scale(1.1);\n}\n\n.cell:hover > .ship-position {\n  display: inline;\n}\n\n.horizontal {\n  height: 50px;\n}\n\n.vertical {\n  width: 50px;\n}\n\n.carrier.horizontal {\n  width: 239px;\n}\n\n.carrier.vertical {\n  height: 239px;\n}\n\n.battleship.horizontal {\n  width: 189px;\n}\n\n.battleship.vertical {\n  height: 189px;\n}\n\n.cruiser.horizontal {\n  width: 145px;\n}\n\n.cruiser.vertical {\n  height: 145px;\n}\n\n.submarine.horizontal {\n  width: 145px;\n}\n\n.submarine.vertical {\n  height: 145px;\n}\n\n.destroyer.horizontal {\n  width: 95px;\n}\n\n.destroyer.vertical {\n  height: 95px;\n}\n\n/* RESPONSIVE */\n@media screen and (max-width: 600px) {\n  .gameBoard {\n    width: 300px;\n  }\n\n  .cell {\n    width: 28px;\n    height: 28px;\n  }\n\n  .horizontal {\n    height: 28px;\n  }\n\n  .vertical {\n    width: 28px;\n  }\n\n  .carrier.horizontal {\n    width: 135px;\n  }\n\n  .carrier.vertical {\n    height: 135px;\n  }\n\n  .battleship.horizontal {\n    width: 110px;\n  }\n\n  .battleship.vertical {\n    height: 110px;\n  }\n\n  .cruiser.horizontal {\n    width: 83px;\n  }\n\n  .cruiser.vertical {\n    height: 83px;\n  }\n\n  .submarine.horizontal {\n    width: 83px;\n  }\n\n  .submarine.vertical {\n    height: 83px;\n  }\n\n  .destroyer.horizontal {\n    width: 55px;\n  }\n\n  .destroyer.vertical {\n    height: 55px;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _blocker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocker */ "./src/components/blocker.js");
/* harmony import */ var _finishMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finishMenu */ "./src/components/finishMenu.js");
/* harmony import */ var _gameMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameMenu */ "./src/components/gameMenu.js");
/* harmony import */ var _mainMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainMenu */ "./src/components/mainMenu.js");
/* harmony import */ var _passDeviceMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./passDeviceMenu */ "./src/components/passDeviceMenu.js");
/* harmony import */ var _shipsChooseMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipsChooseMenu */ "./src/components/shipsChooseMenu.js");
/* harmony import */ var _surrenderMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./surrenderMenu */ "./src/components/surrenderMenu.js");








const pageComponent = (() => {
  let pageElement = null;
  let titleElement = null;

  const setUp = () => {
    createPageElement();
    pageElement.appendChild(_mainMenu__WEBPACK_IMPORTED_MODULE_3__.mainMenu.setUp());
    pageElement.appendChild(_finishMenu__WEBPACK_IMPORTED_MODULE_1__.finishMenu.setUp());
    pageElement.appendChild(_surrenderMenu__WEBPACK_IMPORTED_MODULE_6__.surrenderMenu.setUp());

    return pageElement;
  };

  const showMainMenu = () => {
    removePreviousContent();
    titleElement.textContent = "Battleships";
    pageElement.appendChild(_mainMenu__WEBPACK_IMPORTED_MODULE_3__.mainMenu.setUp());
  };

  const showChooseShipsMenu = (player) => {
    removePreviousContent();
    titleElement.textContent = `Player ${player.number + 1}: choose your ships`;
    pageElement.appendChild(_shipsChooseMenu__WEBPACK_IMPORTED_MODULE_5__.shipsChooseMenu.setUp(player));
  };

  const showPassDeviceMenu = (player) => {
    removePreviousContent();
    titleElement.textContent = "Pass the device";
    pageElement.appendChild(_passDeviceMenu__WEBPACK_IMPORTED_MODULE_4__.passDeviceMenu.setUp(player));
  };

  const showGameBoards = (players) => {
    removePreviousContent();
    const playerTurn = players[0].isTurn
      ? players[0].number
      : players[1].number;
    titleElement.textContent = `Player ${playerTurn + 1}: choose one cell`;
    pageElement.appendChild(_gameMenu__WEBPACK_IMPORTED_MODULE_2__.gameMenu.setUp(players));
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
    } else if (currentPlayerNumber === 0) {
      _components_page__WEBPACK_IMPORTED_MODULE_2__.pageComponent.showChooseShipsMenu(currentPlayer);
    } else if (currentPlayer.type === "human") {
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
      const surrenderMenu = document.querySelector(".surrender-menu");

      blocker.classList.remove("hide");
      surrenderMenu.classList.add("hide");

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
    this.type = type;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlHQUFpRyxLQUFLLFlBQVksYUFBYSxjQUFjLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsYUFBYSxjQUFjLGNBQWMsYUFBYSxZQUFZLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSwrQ0FBK0MsZ0NBQWdDLHVCQUF1Qix5QkFBeUIsc0JBQXNCLG1CQUFtQixvQkFBb0IsR0FBRyxPQUFPLGVBQWUsY0FBYyxHQUFHLFVBQVUsa0JBQWtCLDZCQUE2QixpQkFBaUIseUdBQXlHLCtCQUErQixHQUFHLFdBQVcsdUJBQXVCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixHQUFHLFlBQVksb0JBQW9CLHNCQUFzQix3QkFBd0IsR0FBRyxZQUFZLHdDQUF3QywrQkFBK0Isd0JBQXdCLHNCQUFzQix5QkFBeUIsMEJBQTBCLGlCQUFpQixzQkFBc0IsZ0NBQWdDLEdBQUcsa0JBQWtCLDBCQUEwQixHQUFHLDZCQUE2Qix1QkFBdUIsZ0JBQWdCLGlCQUFpQixHQUFHLFdBQVcsa0JBQWtCLEdBQUcsNkRBQTZELFlBQVksc0JBQXNCLEtBQUssR0FBRyxxQkFBcUI7QUFDLzBEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RnZDO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlHQUFpRyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxxQ0FBcUMsa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyxHQUFHLDJCQUEyQixrQkFBa0IsNEJBQTRCLGVBQWUsR0FBRyxZQUFZLGtDQUFrQyxHQUFHLFVBQVUsaUNBQWlDLEdBQUcsV0FBVyxrQ0FBa0MsR0FBRyw2REFBNkQsMkJBQTJCLDZCQUE2QixLQUFLLEdBQUcscUJBQXFCO0FBQzd5QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEN2QztBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxtR0FBbUcsS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxPQUFPLGFBQWEsV0FBVyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLGNBQWMsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxzREFBc0Qsa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcsb0JBQW9CLHNCQUFzQiw2QkFBNkIsdUJBQXVCLHFCQUFxQixnQ0FBZ0MsR0FBRywwQkFBMEIsMEJBQTBCLEdBQUcsdURBQXVELHVCQUF1QixtQkFBbUIsa0JBQWtCLGtCQUFrQixvQkFBb0IsMkJBQTJCLHdCQUF3QixjQUFjLDBCQUEwQiwwQ0FBMEMsaUJBQWlCLEdBQUcsOENBQThDLG9CQUFvQixzQkFBc0Isd0JBQXdCLEdBQUcsNERBQTRELHNDQUFzQyxtQkFBbUIsb0JBQW9CLEtBQUssa0RBQWtELHNCQUFzQixLQUFLLEdBQUcscUJBQXFCO0FBQ2wrQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEV2QztBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdHQUF3RyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVB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QUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0JBQXNCLFVBQVU7QUFDaEMsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcERPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7VUN0QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0Q7O0FBRWY7QUFDVTtBQUNQO0FBQ0w7O0FBRWpDLDJEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGVzL2dhbWVNZW51LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWVudXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlcy9zaGlwc0Nob29zZU1lbnUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz85Y2M1Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlcy9nYW1lTWVudS5jc3M/NDA3ZiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWVudXMuY3NzP2M4Y2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGVzL3NoaXBzQ2hvb3NlTWVudS5jc3M/ODU1ZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9ibG9ja2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9maW5pc2hNZW51LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lTWVudS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9tYWluTWVudS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvcGFzc0RldmljZU1lbnUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3NoaXBzQ2hvb3NlTWVudS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvc3VycmVuZGVyTWVudS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXJzL2dhbWVMb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogR0VORVJBTCAqL1xuOnJvb3Qge1xuICAtLWJhY2tncm91bmQtY29sb3I6ICM0Mzc4OWU7XG4gIC0tbWFpbi1jb2xvcjogI2ZmZjtcbiAgLS1zZWNvbmQtY29sb3I6ICMyMjI7XG5cbiAgLS1zaGlwOiAjNDM5ZTQ5O1xuICAtLWhpdDogIzllNDM0MztcbiAgLS1taXNzOiAjOTQ5NDk0O1xufVxuXG4qIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICA5MGRlZyxcbiAgICB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSxcbiAgICB2YXIoLS1zZWNvbmQtY29sb3IpXG4gICk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAyMDAlO1xufVxuXG4ucGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcblxuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgcGFkZGluZzogMTBweCA1MHB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4vKiBVVElMSVRZICovXG4uYmxvY2tlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBSRVNQT05TSVZFICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxZQUFZO0FBQ1o7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLG9CQUFvQjs7RUFFcEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaOzs7O0dBSUM7RUFDRCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsMEJBQTBCOztFQUUxQixpQkFBaUI7RUFDakIsaUJBQWlCOztFQUVqQixrQkFBa0I7O0VBRWxCLG1CQUFtQjtFQUNuQixZQUFZOztFQUVaLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsWUFBWTtBQUNaO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsZUFBZTtBQUNmO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR0VORVJBTCAqL1xcbjpyb290IHtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzQzNzg5ZTtcXG4gIC0tbWFpbi1jb2xvcjogI2ZmZjtcXG4gIC0tc2Vjb25kLWNvbG9yOiAjMjIyO1xcblxcbiAgLS1zaGlwOiAjNDM5ZTQ5O1xcbiAgLS1oaXQ6ICM5ZTQzNDM7XFxuICAtLW1pc3M6ICM5NDk0OTQ7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICA5MGRlZyxcXG4gICAgdmFyKC0tYmFja2dyb3VuZC1jb2xvciksXFxuICAgIHZhcigtLXNlY29uZC1jb2xvcilcXG4gICk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMjAwJTtcXG59XFxuXFxuLnBhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcblxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gIHBhZGRpbmc6IDEwcHggNTBweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi8qIFVUSUxJVFkgKi9cXG4uYmxvY2tlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogUkVTUE9OU0lWRSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5nYW1lLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDUwcHg7XG59XG5cbi5nYW1lYm9hcmRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwMHB4O1xufVxuXG4uY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcbn1cblxuLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdCk7XG59XG5cbi5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XG59XG5cbi8qIFJFU1BPTlNJVkUgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuZ2FtZWJvYXJkcy1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvZ2FtZU1lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUEsZUFBZTtBQUNmO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ2FtZS1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLmdhbWVib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTAwcHg7XFxufVxcblxcbi5jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcXG59XFxuXFxuLyogUkVTUE9OU0lWRSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgLmdhbWVib2FyZHMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBNQUlOIE1FTlUgKi9cbi5tYWluLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDUwcHg7XG59XG5cbi5tYWluLW1lbnUgPiBhIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XG59XG5cbi5tYWluLW1lbnUgPiBhOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4vKiBPVEhFUiBNRU5VUyAqL1xuLnN1cnJlbmRlci1tZW51LFxuLmZpbmlzaC1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcGFkZGluZzogMjBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG5cbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcblxuICB6LWluZGV4OiAxO1xufVxuXG4uc3VycmVuZGVyLW1lbnUgPiBoMyxcbi5maW5pc2gtbWVudSA+IGgzIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLyogUkVTUE9OU0lWRSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnN1cnJlbmRlci1tZW51LFxuICAuZmluaXNoLW1lbnUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG5cbiAgLnN1cnJlbmRlci1tZW51ID4gaDMsXG4gIC5maW5pc2gtbWVudSA+IGgzIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWVudXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7QUFDZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxnQkFBZ0I7QUFDaEI7O0VBRUUsa0JBQWtCOztFQUVsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7O0VBRWIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUzs7RUFFVCxtQkFBbUI7RUFDbkIscUNBQXFDOztFQUVyQyxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUEsZUFBZTtBQUNmO0VBQ0U7O0lBRUUsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTUFJTiBNRU5VICovXFxuLm1haW4tbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLm1haW4tbWVudSA+IGEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xcbn1cXG5cXG4ubWFpbi1tZW51ID4gYTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi8qIE9USEVSIE1FTlVTICovXFxuLnN1cnJlbmRlci1tZW51LFxcbi5maW5pc2gtbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcblxcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnN1cnJlbmRlci1tZW51ID4gaDMsXFxuLmZpbmlzaC1tZW51ID4gaDMge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4vKiBSRVNQT05TSVZFICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5zdXJyZW5kZXItbWVudSxcXG4gIC5maW5pc2gtbWVudSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG5cXG4gIC5zdXJyZW5kZXItbWVudSA+IGgzLFxcbiAgLmZpbmlzaC1tZW51ID4gaDMge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNoaXBzLWNob29zZS1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1MHB4O1xufVxuXG4uc2hpcC1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XG59XG5cbi5nYW1lQm9hcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1NTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2VsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XG59XG5cbi5jZWxsOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uY2VsbDpob3ZlciA+IC5zaGlwLXBvc2l0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uaG9yaXpvbnRhbCB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnZlcnRpY2FsIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5jYXJyaWVyLmhvcml6b250YWwge1xuICB3aWR0aDogMjM5cHg7XG59XG5cbi5jYXJyaWVyLnZlcnRpY2FsIHtcbiAgaGVpZ2h0OiAyMzlweDtcbn1cblxuLmJhdHRsZXNoaXAuaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxODlweDtcbn1cblxuLmJhdHRsZXNoaXAudmVydGljYWwge1xuICBoZWlnaHQ6IDE4OXB4O1xufVxuXG4uY3J1aXNlci5ob3Jpem9udGFsIHtcbiAgd2lkdGg6IDE0NXB4O1xufVxuXG4uY3J1aXNlci52ZXJ0aWNhbCB7XG4gIGhlaWdodDogMTQ1cHg7XG59XG5cbi5zdWJtYXJpbmUuaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxNDVweDtcbn1cblxuLnN1Ym1hcmluZS52ZXJ0aWNhbCB7XG4gIGhlaWdodDogMTQ1cHg7XG59XG5cbi5kZXN0cm95ZXIuaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiA5NXB4O1xufVxuXG4uZGVzdHJveWVyLnZlcnRpY2FsIHtcbiAgaGVpZ2h0OiA5NXB4O1xufVxuXG4vKiBSRVNQT05TSVZFICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZ2FtZUJvYXJkIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cblxuICAuY2VsbCB7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICB9XG5cbiAgLmhvcml6b250YWwge1xuICAgIGhlaWdodDogMjhweDtcbiAgfVxuXG4gIC52ZXJ0aWNhbCB7XG4gICAgd2lkdGg6IDI4cHg7XG4gIH1cblxuICAuY2Fycmllci5ob3Jpem9udGFsIHtcbiAgICB3aWR0aDogMTM1cHg7XG4gIH1cblxuICAuY2Fycmllci52ZXJ0aWNhbCB7XG4gICAgaGVpZ2h0OiAxMzVweDtcbiAgfVxuXG4gIC5iYXR0bGVzaGlwLmhvcml6b250YWwge1xuICAgIHdpZHRoOiAxMTBweDtcbiAgfVxuXG4gIC5iYXR0bGVzaGlwLnZlcnRpY2FsIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG5cbiAgLmNydWlzZXIuaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IDgzcHg7XG4gIH1cblxuICAuY3J1aXNlci52ZXJ0aWNhbCB7XG4gICAgaGVpZ2h0OiA4M3B4O1xuICB9XG5cbiAgLnN1Ym1hcmluZS5ob3Jpem9udGFsIHtcbiAgICB3aWR0aDogODNweDtcbiAgfVxuXG4gIC5zdWJtYXJpbmUudmVydGljYWwge1xuICAgIGhlaWdodDogODNweDtcbiAgfVxuXG4gIC5kZXN0cm95ZXIuaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IDU1cHg7XG4gIH1cblxuICAuZGVzdHJveWVyLnZlcnRpY2FsIHtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvc2hpcHNDaG9vc2VNZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxlQUFlO0FBQ2Y7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2hpcHMtY2hvb3NlLW1lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uc2hpcC1wb3NpdGlvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XFxufVxcblxcbi5nYW1lQm9hcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA1NTBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNlbGwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5jZWxsOmhvdmVyID4gLnNoaXAtcG9zaXRpb24ge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi52ZXJ0aWNhbCB7XFxuICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmNhcnJpZXIuaG9yaXpvbnRhbCB7XFxuICB3aWR0aDogMjM5cHg7XFxufVxcblxcbi5jYXJyaWVyLnZlcnRpY2FsIHtcXG4gIGhlaWdodDogMjM5cHg7XFxufVxcblxcbi5iYXR0bGVzaGlwLmhvcml6b250YWwge1xcbiAgd2lkdGg6IDE4OXB4O1xcbn1cXG5cXG4uYmF0dGxlc2hpcC52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IDE4OXB4O1xcbn1cXG5cXG4uY3J1aXNlci5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiAxNDVweDtcXG59XFxuXFxuLmNydWlzZXIudmVydGljYWwge1xcbiAgaGVpZ2h0OiAxNDVweDtcXG59XFxuXFxuLnN1Ym1hcmluZS5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiAxNDVweDtcXG59XFxuXFxuLnN1Ym1hcmluZS52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IDE0NXB4O1xcbn1cXG5cXG4uZGVzdHJveWVyLmhvcml6b250YWwge1xcbiAgd2lkdGg6IDk1cHg7XFxufVxcblxcbi5kZXN0cm95ZXIudmVydGljYWwge1xcbiAgaGVpZ2h0OiA5NXB4O1xcbn1cXG5cXG4vKiBSRVNQT05TSVZFICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5nYW1lQm9hcmQge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxuXFxuICAuY2VsbCB7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICB9XFxuXFxuICAuaG9yaXpvbnRhbCB7XFxuICAgIGhlaWdodDogMjhweDtcXG4gIH1cXG5cXG4gIC52ZXJ0aWNhbCB7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgfVxcblxcbiAgLmNhcnJpZXIuaG9yaXpvbnRhbCB7XFxuICAgIHdpZHRoOiAxMzVweDtcXG4gIH1cXG5cXG4gIC5jYXJyaWVyLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiAxMzVweDtcXG4gIH1cXG5cXG4gIC5iYXR0bGVzaGlwLmhvcml6b250YWwge1xcbiAgICB3aWR0aDogMTEwcHg7XFxuICB9XFxuXFxuICAuYmF0dGxlc2hpcC52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogMTEwcHg7XFxuICB9XFxuXFxuICAuY3J1aXNlci5ob3Jpem9udGFsIHtcXG4gICAgd2lkdGg6IDgzcHg7XFxuICB9XFxuXFxuICAuY3J1aXNlci52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogODNweDtcXG4gIH1cXG5cXG4gIC5zdWJtYXJpbmUuaG9yaXpvbnRhbCB7XFxuICAgIHdpZHRoOiA4M3B4O1xcbiAgfVxcblxcbiAgLnN1Ym1hcmluZS52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogODNweDtcXG4gIH1cXG5cXG4gIC5kZXN0cm95ZXIuaG9yaXpvbnRhbCB7XFxuICAgIHdpZHRoOiA1NXB4O1xcbiAgfVxcblxcbiAgLmRlc3Ryb3llci52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogNTVweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lTWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVNZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51cy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwc0Nob29zZU1lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwc0Nob29zZU1lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgYmxvY2tlckNvbXBvbmVudCA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKGlzVHVybikgPT4ge1xuICAgIGNvbnN0IGJsb2NrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJsb2NrZXIuY2xhc3NMaXN0LmFkZChcImJsb2NrZXJcIik7XG5cbiAgICBpZiAoIWlzVHVybikgYmxvY2tlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICAgIHJldHVybiBibG9ja2VyO1xuICB9O1xuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgR2FtZUxvb3AgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvZ2FtZUxvb3BcIjtcbmltcG9ydCB7IHBhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBmaW5pc2hNZW51ID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0VXAgPSAoKSA9PiB7XG4gICAgY29uc3QgZmluaXNoTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBtYWluTWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBmaW5pc2hNZW51LmNsYXNzTGlzdC5hZGQoXCJmaW5pc2gtbWVudVwiKTtcbiAgICBmaW5pc2hNZW51LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHBsYXlBZ2FpbkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxheSBBZ2FpblwiO1xuICAgIG1haW5NZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNYWluIE1lbnVcIjtcblxuICAgIHBsYXlBZ2FpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheUFnYWluKTtcbiAgICBtYWluTWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29CYWNrTWFpbk1lbnUpO1xuXG4gICAgZmluaXNoTWVudS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZmluaXNoTWVudS5hcHBlbmRDaGlsZChwbGF5QWdhaW5CdXR0b24pO1xuICAgIGZpbmlzaE1lbnUuYXBwZW5kQ2hpbGQobWFpbk1lbnVCdXR0b24pO1xuXG4gICAgcmV0dXJuIGZpbmlzaE1lbnU7XG4gIH07XG5cbiAgLy8gUFJJVkFURSBGVU5DVElPTlNcbiAgY29uc3QgcGxheUFnYWluID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgR2FtZUxvb3AucmVzZXRQbGF5ZXJzKCk7XG4gICAgR2FtZUxvb3Auc2V0VXBTaGlwc0Nob29zZU1lbnUoKTtcbiAgfTtcblxuICBjb25zdCBnb0JhY2tNYWluTWVudSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIHBhZ2VDb21wb25lbnQuc2hvd01haW5NZW51KCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0VXAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBnYW1lQm9hcmRDb21wb25lbnQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IHBhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBnYW1lTWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKHBsYXllcnMpID0+IHtcbiAgICBjb25zdCBnYW1lTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIGNvbnN0IGdhbWVCb2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN1cnJlbmRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBnYW1lTWVudS5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1tZW51XCIpO1xuICAgIGdhbWVCb2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdhbWVib2FyZHMtY29udGFpbmVyXCIpO1xuXG4gICAgc3VycmVuZGVyQnV0dG9uLnRleHRDb250ZW50ID0gXCJTdXJyZW5kZXJcIjtcbiAgICBzdXJyZW5kZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBhZ2VDb21wb25lbnQuc2hvd1N1cnJlbmRlck1lbnUpO1xuXG4gICAgZ2FtZUJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lQm9hcmRDb21wb25lbnQuc2V0VXAocGxheWVyc1swXSkpO1xuICAgIGdhbWVCb2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkQ29tcG9uZW50LnNldFVwKHBsYXllcnNbMV0pKTtcblxuICAgIGdhbWVNZW51LmFwcGVuZENoaWxkKGdhbWVCb2FyZHNDb250YWluZXIpO1xuICAgIGdhbWVNZW51LmFwcGVuZENoaWxkKHN1cnJlbmRlckJ1dHRvbik7XG5cbiAgICByZXR1cm4gZ2FtZU1lbnU7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0VXAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBHYW1lTG9vcCB9IGZyb20gXCIuLi9jb250cm9sbGVycy9nYW1lTG9vcFwiO1xuaW1wb3J0IHsgYmxvY2tlckNvbXBvbmVudCB9IGZyb20gXCIuL2Jsb2NrZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdhbWVCb2FyZENvbXBvbmVudCA9ICgoKSA9PiB7XG4gIGxldCBjdXJyZW50Qm9hcmQgPSBudWxsO1xuICBsZXQgY3VycmVudFBsYXllciA9IG51bGw7XG5cbiAgY29uc3Qgc2V0VXAgPSAocGxheWVyKSA9PiB7XG4gICAgY3VycmVudFBsYXllciA9IHBsYXllcjtcbiAgICBjdXJyZW50Qm9hcmQgPSBwbGF5ZXIuYm9hcmQ7XG5cbiAgICBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbWVCb2FyZC5jbGFzc0xpc3QuYWRkKFwiZ2FtZUJvYXJkXCIpO1xuICAgIGdhbWVCb2FyZC5kYXRhc2V0LnBsYXllciA9IFwiXCIgKyBwbGF5ZXIubnVtYmVyO1xuXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCAxMDsgY29sdW1uKyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGN1cnJlbnRCb2FyZC5ib2FyZFtyb3ddW2NvbHVtbl07XG4gICAgICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChjcmVhdGVDZWxsKHJvdywgY29sdW1uLCBlbGVtZW50KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrZXJDb21wb25lbnQuc2V0VXAoY3VycmVudFBsYXllci5pc1R1cm4pKTtcblxuICAgIHJldHVybiBnYW1lQm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQ2VsbENvbG9yID0gKGlzSGl0LCBudW1iZXIsIHJvdywgY29sdW1uKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wbGF5ZXI9XCIke251bWJlcn1cIl1gKTtcbiAgICBjb25zdCBjZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2x1bW49XCIke2NvbHVtbn1cIl1gXG4gICAgKTtcblxuICAgIGlmIChpc0hpdCkge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgIH1cblxuICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFjayk7XG4gICAgY2VsbC5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgfTtcblxuICAvLyBQUklWQVRFIEZVTkNUSU9OU1xuICBjb25zdCBjcmVhdGVDZWxsID0gKHJvdywgY29sdW1uLCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICBjZWxsLmRhdGFzZXQucm93ID0gcm93O1xuICAgIGNlbGwuZGF0YXNldC5jb2x1bW4gPSBjb2x1bW47XG5cbiAgICBpZiAoXG4gICAgICBjdXJyZW50UGxheWVyLnR5cGUgIT09IFwiYm90XCIgJiZcbiAgICAgIHR5cGVvZiBlbGVtZW50ID09PSBcIm9iamVjdFwiICYmXG4gICAgICAhY3VycmVudFBsYXllci5pc1R1cm5cbiAgICApIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnRQbGF5ZXIudHlwZSAhPT0gXCJib3RcIiAmJlxuICAgICAgdHlwZW9mIGVsZW1lbnQgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIGN1cnJlbnRQbGF5ZXIuaXNUdXJuXG4gICAgKSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY29sb3JcIik7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQgPT09IC0xKSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgY2VsbC5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IDEpIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNlbGw7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGVuZW15ID0gdGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5wbGF5ZXI7XG4gICAgR2FtZUxvb3AuYXR0YWNrKGVuZW15LCB0YXJnZXQuZGF0YXNldC5yb3csIHRhcmdldC5kYXRhc2V0LmNvbHVtbik7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0VXAsIGNoYW5nZUNlbGxDb2xvciB9O1xufSkoKTtcbiIsImltcG9ydCB7IEdhbWVMb29wIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2dhbWVMb29wXCI7XG5cbmV4cG9ydCBjb25zdCBtYWluTWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgY29uc3Qgc2luZ2xlUGxheWVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBtdWx0aVBsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBtYWluTWVudS5jbGFzc0xpc3QuYWRkKFwibWFpbi1tZW51XCIpO1xuXG4gICAgc2luZ2xlUGxheWVyQnV0dG9uLnRleHRDb250ZW50ID0gXCJIdW1hbiB2cyBCb3RcIjtcbiAgICBtdWx0aVBsYXllckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSHVtYW4gdnMgSHVtYW5cIjtcblxuICAgIHNpbmdsZVBsYXllckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRTaW5nbGVHYW1lKTtcbiAgICBtdWx0aVBsYXllckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRNdWx0aXBsYXllckdhbWUpO1xuXG4gICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoc2luZ2xlUGxheWVyQnV0dG9uKTtcbiAgICBtYWluTWVudS5hcHBlbmRDaGlsZChtdWx0aVBsYXllckJ1dHRvbik7XG4gICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTGluaygpKTtcblxuICAgIHJldHVybiBtYWluTWVudTtcbiAgfTtcblxuICAvLyBQUklWQVRFIEZVTkNUSU9OU1xuICBjb25zdCBjcmVhdGVMaW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgIGxpbmsudGV4dENvbnRlbnQgPSBcIlNlcmdpbyBHYXJjw61hXCI7XG4gICAgbGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vc2VyZ2lvZ2FyY2lpYW1cIjtcbiAgICBsaW5rLnRhcmdldCA9IFwiX19ibGFua1wiO1xuXG4gICAgcmV0dXJuIGxpbms7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRTaW5nbGVHYW1lID0gKCkgPT4ge1xuICAgIEdhbWVMb29wLmluaXRpYWxpemVQbGF5ZXJzKFwiaHVtYW5cIiwgXCJib3RcIik7XG4gICAgR2FtZUxvb3Auc2V0VXBTaGlwc0Nob29zZU1lbnUoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBzdGFydE11bHRpcGxheWVyR2FtZSgpIHtcbiAgICBHYW1lTG9vcC5pbml0aWFsaXplUGxheWVycyhcImh1bWFuXCIsIFwiaHVtYW5cIik7XG4gICAgR2FtZUxvb3Auc2V0VXBTaGlwc0Nob29zZU1lbnUoKTtcbiAgfVxuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgYmxvY2tlckNvbXBvbmVudCB9IGZyb20gXCIuL2Jsb2NrZXJcIjtcbmltcG9ydCB7IGZpbmlzaE1lbnUgfSBmcm9tIFwiLi9maW5pc2hNZW51XCI7XG5pbXBvcnQgeyBnYW1lTWVudSB9IGZyb20gXCIuL2dhbWVNZW51XCI7XG5pbXBvcnQgeyBtYWluTWVudSB9IGZyb20gXCIuL21haW5NZW51XCI7XG5pbXBvcnQgeyBwYXNzRGV2aWNlTWVudSB9IGZyb20gXCIuL3Bhc3NEZXZpY2VNZW51XCI7XG5pbXBvcnQgeyBzaGlwc0Nob29zZU1lbnUgfSBmcm9tIFwiLi9zaGlwc0Nob29zZU1lbnVcIjtcbmltcG9ydCB7IHN1cnJlbmRlck1lbnUgfSBmcm9tIFwiLi9zdXJyZW5kZXJNZW51XCI7XG5cbmV4cG9ydCBjb25zdCBwYWdlQ29tcG9uZW50ID0gKCgpID0+IHtcbiAgbGV0IHBhZ2VFbGVtZW50ID0gbnVsbDtcbiAgbGV0IHRpdGxlRWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc2V0VXAgPSAoKSA9PiB7XG4gICAgY3JlYXRlUGFnZUVsZW1lbnQoKTtcbiAgICBwYWdlRWxlbWVudC5hcHBlbmRDaGlsZChtYWluTWVudS5zZXRVcCgpKTtcbiAgICBwYWdlRWxlbWVudC5hcHBlbmRDaGlsZChmaW5pc2hNZW51LnNldFVwKCkpO1xuICAgIHBhZ2VFbGVtZW50LmFwcGVuZENoaWxkKHN1cnJlbmRlck1lbnUuc2V0VXAoKSk7XG5cbiAgICByZXR1cm4gcGFnZUVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3Qgc2hvd01haW5NZW51ID0gKCkgPT4ge1xuICAgIHJlbW92ZVByZXZpb3VzQ29udGVudCgpO1xuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcHNcIjtcbiAgICBwYWdlRWxlbWVudC5hcHBlbmRDaGlsZChtYWluTWVudS5zZXRVcCgpKTtcbiAgfTtcblxuICBjb25zdCBzaG93Q2hvb3NlU2hpcHNNZW51ID0gKHBsYXllcikgPT4ge1xuICAgIHJlbW92ZVByZXZpb3VzQ29udGVudCgpO1xuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IGBQbGF5ZXIgJHtwbGF5ZXIubnVtYmVyICsgMX06IGNob29zZSB5b3VyIHNoaXBzYDtcbiAgICBwYWdlRWxlbWVudC5hcHBlbmRDaGlsZChzaGlwc0Nob29zZU1lbnUuc2V0VXAocGxheWVyKSk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1Bhc3NEZXZpY2VNZW51ID0gKHBsYXllcikgPT4ge1xuICAgIHJlbW92ZVByZXZpb3VzQ29udGVudCgpO1xuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IFwiUGFzcyB0aGUgZGV2aWNlXCI7XG4gICAgcGFnZUVsZW1lbnQuYXBwZW5kQ2hpbGQocGFzc0RldmljZU1lbnUuc2V0VXAocGxheWVyKSk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0dhbWVCb2FyZHMgPSAocGxheWVycykgPT4ge1xuICAgIHJlbW92ZVByZXZpb3VzQ29udGVudCgpO1xuICAgIGNvbnN0IHBsYXllclR1cm4gPSBwbGF5ZXJzWzBdLmlzVHVyblxuICAgICAgPyBwbGF5ZXJzWzBdLm51bWJlclxuICAgICAgOiBwbGF5ZXJzWzFdLm51bWJlcjtcbiAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgUGxheWVyICR7cGxheWVyVHVybiArIDF9OiBjaG9vc2Ugb25lIGNlbGxgO1xuICAgIHBhZ2VFbGVtZW50LmFwcGVuZENoaWxkKGdhbWVNZW51LnNldFVwKHBsYXllcnMpKTtcbiAgfTtcblxuICBjb25zdCBzaG93U3VycmVuZGVyTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBzdXJyZW5kZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdXJyZW5kZXItbWVudVwiKTtcbiAgICBzdXJyZW5kZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dGaW5pc2hNZW51ID0gKHdpbm5lck51bWJlcikgPT4ge1xuICAgIGNvbnN0IGZpbmlzaE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbmlzaC1tZW51XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZmluaXNoTWVudS5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XG5cbiAgICBmaW5pc2hNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYFBsYXllciAke3dpbm5lck51bWJlciArIDF9IHdvbiFgO1xuICB9O1xuXG4gIC8vIFBSSVZBVEUgRlVOQ1RJT05TXG4gIGNvbnN0IGNyZWF0ZVBhZ2VFbGVtZW50ID0gKCkgPT4ge1xuICAgIHBhZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicGFnZVwiKTtcblxuICAgIHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcHNcIjtcblxuICAgIHBhZ2VFbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgcmV0dXJuIHBhZ2VFbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByZXZpb3VzQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIG1haW5FbGVtZW50LnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0VXAsXG4gICAgc2hvd01haW5NZW51LFxuICAgIHNob3dDaG9vc2VTaGlwc01lbnUsXG4gICAgc2hvd1Bhc3NEZXZpY2VNZW51LFxuICAgIHNob3dHYW1lQm9hcmRzLFxuICAgIHNob3dTdXJyZW5kZXJNZW51LFxuICAgIHNob3dGaW5pc2hNZW51LFxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IHBhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBwYXNzRGV2aWNlTWVudSA9ICgoKSA9PiB7XG4gIGxldCBjdXJyZW50UGxheWVyID0gbnVsbDtcblxuICBjb25zdCBzZXRVcCA9IChwbGF5ZXIpID0+IHtcbiAgICBjdXJyZW50UGxheWVyID0gcGxheWVyO1xuXG4gICAgY29uc3QgcGFzc0RldmljZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgcGFzc0RldmljZU1lbnUuY2xhc3NMaXN0LmFkZChcInBhc3MtZGV2aWNlLW1lbnVcIik7XG5cbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIk5leHQgVHVyblwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVBhc3NEZXZpY2VNZW51KTtcblxuICAgIHBhc3NEZXZpY2VNZW51LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4gcGFzc0RldmljZU1lbnU7XG4gIH07XG5cbiAgY29uc3QgaGlkZVBhc3NEZXZpY2VNZW51ID0gKCkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRQbGF5ZXIpKSB7XG4gICAgICBwYWdlQ29tcG9uZW50LnNob3dHYW1lQm9hcmRzKGN1cnJlbnRQbGF5ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWdlQ29tcG9uZW50LnNob3dDaG9vc2VTaGlwc01lbnUoY3VycmVudFBsYXllcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgR2FtZUxvb3AgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvZ2FtZUxvb3BcIjtcblxuZXhwb3J0IGNvbnN0IHNoaXBzQ2hvb3NlTWVudSA9ICgoKSA9PiB7XG4gIGxldCBjdXJyZW50UGxheWVyID0gbnVsbDtcbiAgbGV0IGN1cnJlbnRTaGlwID0gXCJcIjtcbiAgbGV0IGN1cnJlbnRPcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuXG4gIGNvbnN0IHNldFVwID0gKHBsYXllcikgPT4ge1xuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXI7XG4gICAgY3VycmVudFNoaXAgPSBcImNhcnJpZXJcIjtcblxuICAgIGNvbnN0IHNoaXBzQ2hvb3NlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIHNoaXBzQ2hvb3NlTWVudS5jbGFzc0xpc3QuYWRkKFwic2hpcHMtY2hvb3NlLW1lbnVcIik7XG5cbiAgICBzaGlwc0Nob29zZU1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKCkpO1xuICAgIHNoaXBzQ2hvb3NlTWVudS5hcHBlbmRDaGlsZChjcmVhdGVHYW1lQm9hcmQoKSk7XG5cbiAgICByZXR1cm4gc2hpcHNDaG9vc2VNZW51O1xuICB9O1xuXG4gIC8vIFBSSVZBVEUgRlVOQ1RJT05TXG4gIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUm90YXRlXCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb3RhdGVTaGlwKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gY3VycmVudFBsYXllci5ib2FyZC5ib2FyZDtcbiAgICBnYW1lQm9hcmQuY2xhc3NMaXN0LmFkZChcImdhbWVCb2FyZFwiKTtcblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMTA7IGNvbHVtbisrKSB7XG4gICAgICAgIGNvbnN0IGlzU2hpcCA9IHR5cGVvZiBwbGF5ZXJCb2FyZFtyb3ddW2NvbHVtbl0gPT09IFwib2JqZWN0XCI7XG4gICAgICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChjcmVhdGVDZWxsKHJvdywgY29sdW1uLCBpc1NoaXApKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ2FtZUJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNlbGwgPSAocm93LCBjb2x1bW4sIGlzU2hpcCkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNoaXBQb3NpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgIHNoaXBQb3NpdGlvbi5jbGFzc0xpc3QuYWRkKFwic2hpcC1wb3NpdGlvblwiKTtcbiAgICBzaGlwUG9zaXRpb24uY2xhc3NMaXN0LmFkZChjdXJyZW50T3JpZW50YXRpb24pO1xuICAgIHNoaXBQb3NpdGlvbi5jbGFzc0xpc3QuYWRkKGN1cnJlbnRTaGlwKTtcblxuICAgIGNlbGwuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgY2VsbC5kYXRhc2V0LmNvbHVtbiA9IGNvbHVtbjtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRTaGlwKTtcblxuICAgIGNlbGwuYXBwZW5kQ2hpbGQoc2hpcFBvc2l0aW9uKTtcblxuICAgIGlmIChpc1NoaXApIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjb2xvclwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2VsbDtcbiAgfTtcblxuICBjb25zdCBhZGRTaGlwID0gKGUpID0+IHtcbiAgICBjb25zdCBzaGlwc0Nob29zZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzLWNob29zZS1tZW51XCIpO1xuICAgIGNvbnN0IHJvdyA9ICtlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQucm93O1xuICAgIGNvbnN0IGNvbHVtbiA9ICtlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuY29sdW1uO1xuXG4gICAgY29uc3QgaXNQbGFjZWQgPSBjdXJyZW50UGxheWVyLmJvYXJkLnBsYWNlU2hpcChcbiAgICAgIHJvdyxcbiAgICAgIGNvbHVtbixcbiAgICAgIGN1cnJlbnRTaGlwLFxuICAgICAgY3VycmVudE9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIlxuICAgICk7XG5cbiAgICBpZiAoIWlzUGxhY2VkKSByZXR1cm47XG5cbiAgICBzd2l0Y2ggKGN1cnJlbnRTaGlwKSB7XG4gICAgICBjYXNlIFwiY2FycmllclwiOlxuICAgICAgICBjdXJyZW50U2hpcCA9IFwiYmF0dGxlc2hpcFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJiYXR0bGVzaGlwXCI6XG4gICAgICAgIGN1cnJlbnRTaGlwID0gXCJjcnVpc2VyXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImNydWlzZXJcIjpcbiAgICAgICAgY3VycmVudFNoaXAgPSBcInN1Ym1hcmluZVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzdWJtYXJpbmVcIjpcbiAgICAgICAgY3VycmVudFNoaXAgPSBcImRlc3Ryb3llclwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkZXN0cm95ZXJcIjpcbiAgICAgICAgY3VycmVudFNoaXAgPSBcIlwiO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFNoaXAgPT09IFwiXCIpIHtcbiAgICAgIEdhbWVMb29wLnNldFVwU2hpcHNDaG9vc2VNZW51KGN1cnJlbnRQbGF5ZXIubnVtYmVyICsgMSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2hpcHNDaG9vc2VNZW51LmNoaWxkTm9kZXNbMV0ucmVtb3ZlKCk7XG4gICAgc2hpcHNDaG9vc2VNZW51LmFwcGVuZENoaWxkKGNyZWF0ZUdhbWVCb2FyZCgpKTtcbiAgfTtcblxuICBjb25zdCByb3RhdGVTaGlwID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzUG9zaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAtcG9zaXRpb25cIik7XG4gICAgc2hpcHNQb3NpdGlvbi5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgIHNoaXAuY2xhc3NMaXN0LnRvZ2dsZShcImhvcml6b250YWxcIik7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50T3JpZW50YXRpb24gPVxuICAgICAgY3VycmVudE9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICB9O1xuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgcGFnZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IHN1cnJlbmRlck1lbnUgPSAoKCkgPT4ge1xuICBjb25zdCBzZXRVcCA9ICgpID0+IHtcbiAgICBjb25zdCBzdXJyZW5kZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBiYWNrR2FtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBzdXJyZW5kZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJzdXJyZW5kZXItbWVudVwiKTtcbiAgICBzdXJyZW5kZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkFyZSB5b3Ugc3VyZT9cIjtcbiAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gXCJZZXMhXCI7XG4gICAgYmFja0dhbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIk5vcFwiO1xuXG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29CYWNrTWFpbk1lbnUpO1xuICAgIGJhY2tHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlTWVudSk7XG5cbiAgICBzdXJyZW5kZXJNZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBzdXJyZW5kZXJNZW51LmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuICAgIHN1cnJlbmRlck1lbnUuYXBwZW5kQ2hpbGQoYmFja0dhbWVCdXR0b24pO1xuXG4gICAgcmV0dXJuIHN1cnJlbmRlck1lbnU7XG4gIH07XG5cbiAgLy8gUFJJVkFURSBGVU5DVElPTlNcbiAgY29uc3QgaGlkZU1lbnUgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgfTtcblxuICBjb25zdCBnb0JhY2tNYWluTWVudSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIHBhZ2VDb21wb25lbnQuc2hvd01haW5NZW51KCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0VXAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vZmFjdG9yaWVzL3BsYXllclwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4uL2ZhY3Rvcmllcy9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IHBhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlXCI7XG5pbXBvcnQgeyBnYW1lQm9hcmRDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lYm9hcmRcIjtcblxuZXhwb3J0IGNvbnN0IEdhbWVMb29wID0gKCgpID0+IHtcbiAgbGV0IHBsYXllcnMgPSBbXTtcblxuICBjb25zdCBzZXRVcCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VDb21wb25lbnQuc2V0VXAoKSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbGl6ZVBsYXllcnMgPSAodHlwZVBsYXllcjEsIHR5cGVQbGF5ZXIyKSA9PiB7XG4gICAgcGxheWVycyA9IFtcbiAgICAgIG5ldyBQbGF5ZXIoMCwgdHlwZVBsYXllcjEsIG5ldyBHYW1lQm9hcmQoKSwgdHJ1ZSksXG4gICAgICBuZXcgUGxheWVyKDEsIHR5cGVQbGF5ZXIyLCBuZXcgR2FtZUJvYXJkKCksIGZhbHNlKSxcbiAgICBdO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0UGxheWVycyA9ICgpID0+IHtcbiAgICBwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4gKHBsYXllci5ib2FyZCA9IG5ldyBHYW1lQm9hcmQoKSkpO1xuICB9O1xuXG4gIGNvbnN0IHNldFVwU2hpcHNDaG9vc2VNZW51ID0gKGN1cnJlbnRQbGF5ZXJOdW1iZXIgPSAwKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IHBsYXllcnNbY3VycmVudFBsYXllck51bWJlcl07XG5cbiAgICBpZiAoY3VycmVudFBsYXllck51bWJlciA9PT0gMikge1xuICAgICAgcGFnZUNvbXBvbmVudC5zaG93R2FtZUJvYXJkcyhwbGF5ZXJzKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQbGF5ZXJOdW1iZXIgPT09IDApIHtcbiAgICAgIHBhZ2VDb21wb25lbnQuc2hvd0Nob29zZVNoaXBzTWVudShjdXJyZW50UGxheWVyKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQbGF5ZXIudHlwZSA9PT0gXCJodW1hblwiKSB7XG4gICAgICBwYWdlQ29tcG9uZW50LnNob3dQYXNzRGV2aWNlTWVudShjdXJyZW50UGxheWVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudFBsYXllci5ib2FyZC5nZW5lcmF0ZVJhbmRvbUJvYXJkKCk7XG4gICAgICBwYWdlQ29tcG9uZW50LnNob3dHYW1lQm9hcmRzKHBsYXllcnMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhdHRhY2sgPSAoZW5lbXksIHJvdywgY29sdW1uKSA9PiB7XG4gICAgY29uc3QgYXR0YWNrZWRQbGF5ZXIgPSBwbGF5ZXJzW2VuZW15XTtcbiAgICBjb25zdCBpc0hpdCA9IGF0dGFja2VkUGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4pO1xuXG4gICAgZ2FtZUJvYXJkQ29tcG9uZW50LmNoYW5nZUNlbGxDb2xvcihcbiAgICAgIGlzSGl0LFxuICAgICAgYXR0YWNrZWRQbGF5ZXIubnVtYmVyLFxuICAgICAgcm93LFxuICAgICAgY29sdW1uXG4gICAgKTtcblxuICAgIGlmIChhdHRhY2tlZFBsYXllci5ib2FyZC5pc0dhbWVPdmVyKCkpIGVuZEdhbWUoYXR0YWNrZWRQbGF5ZXIubnVtYmVyKTtcbiAgICBlbHNlIG5leHRUdXJuKGVuZW15KTtcbiAgfTtcblxuICAvLyBQUklWQVRFIEZVTkNUSU9OU1xuICBjb25zdCBuZXh0VHVybiA9IChlbmVteSkgPT4ge1xuICAgIGlmIChwbGF5ZXJzWzFdLnR5cGUgPT09IFwiaHVtYW5cIikge1xuICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wbGF5ZXI9XCIke2VuZW15fVwiXWApO1xuICAgICAgY29uc3QgYmxvY2tlciA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuYmxvY2tlclwiKTtcbiAgICAgIGNvbnN0IHN1cnJlbmRlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1cnJlbmRlci1tZW51XCIpO1xuXG4gICAgICBibG9ja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgc3VycmVuZGVyTWVudS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICAgICAgcGxheWVyc1swXS5pc1R1cm4gPSAhcGxheWVyc1swXS5pc1R1cm47XG4gICAgICBwbGF5ZXJzWzFdLmlzVHVybiA9ICFwbGF5ZXJzWzFdLmlzVHVybjtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcGFnZUNvbXBvbmVudC5zaG93UGFzc0RldmljZU1lbnUocGxheWVycyksIDgwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF0dGFja0JvdCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhdHRhY2tCb3QgPSAoKSA9PiB7XG4gICAgY29uc3QgYWlDb29yZCA9IHBsYXllcnNbMV0uZ2V0Q29vcmRpbmF0ZXMocGxheWVyc1swXS5ib2FyZC5ib2FyZCk7XG4gICAgY29uc3QgaXNIaXQgPSBwbGF5ZXJzWzBdLmJvYXJkLnJlY2VpdmVBdHRhY2soYWlDb29yZFswXSwgYWlDb29yZFsxXSk7XG5cbiAgICBnYW1lQm9hcmRDb21wb25lbnQuY2hhbmdlQ2VsbENvbG9yKFxuICAgICAgaXNIaXQsXG4gICAgICBwbGF5ZXJzWzBdLm51bWJlcixcbiAgICAgIGFpQ29vcmRbMF0sXG4gICAgICBhaUNvb3JkWzFdXG4gICAgKTtcblxuICAgIGlmIChwbGF5ZXJzWzBdLmJvYXJkLmlzR2FtZU92ZXIoKSkgZW5kR2FtZSgwKTsgLy8gYmVjYXVzZSB0aGUgbG9vc2VyIGluIHBsYXllciwgYWx3YXlzIDBcbiAgfTtcblxuICBjb25zdCBlbmRHYW1lID0gKGxvb3Nlck51bWJlcikgPT4ge1xuICAgIGNvbnN0IGJsb2NrZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja2VyXCIpO1xuICAgIGNvbnN0IHdpbm5lck51bWJlciA9IGxvb3Nlck51bWJlciA9PT0gMCA/IDEgOiAwO1xuXG4gICAgYmxvY2tlcnMuZm9yRWFjaCgoYmxvY2tlcikgPT4gYmxvY2tlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSk7XG4gICAgcGFnZUNvbXBvbmVudC5zaG93RmluaXNoTWVudSh3aW5uZXJOdW1iZXIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0VXAsXG4gICAgaW5pdGlhbGl6ZVBsYXllcnMsXG4gICAgcmVzZXRQbGF5ZXJzLFxuICAgIHNldFVwU2hpcHNDaG9vc2VNZW51LFxuICAgIGF0dGFjayxcbiAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBBcnJheSgxMCkuZmlsbCgwKS5tYXAoKCkgPT4gbmV3IEFycmF5KDEwKS5maWxsKDApKTtcbiAgfVxuXG4gIHBsYWNlU2hpcChyb3csIGNvbHVtbiwgc2hpcFR5cGUsIGlzSG9yaXpvbnRhbCkge1xuICAgIGNvbnN0IHRlbXBvcmFsQm9hcmQgPSB0aGlzLmRlZXBDb3B5Qm9hcmQoKTtcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoc2hpcFR5cGUpO1xuXG4gICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgY29uc3QgbWF4ID0gY29sdW1uICsgc2hpcC5sZW5ndGg7XG4gICAgICBpZiAobWF4ID4gMTApIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSBjb2x1bW47IGluZGV4IDwgbWF4OyBpbmRleCsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGVtcG9yYWxCb2FyZFtyb3ddW2luZGV4XSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0ZW1wb3JhbEJvYXJkW3Jvd11baW5kZXhdID0gc2hpcDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWF4ID0gcm93ICsgc2hpcC5sZW5ndGg7XG4gICAgICBpZiAobWF4ID4gMTApIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSByb3c7IGluZGV4IDwgbWF4OyBpbmRleCsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGVtcG9yYWxCb2FyZFtpbmRleF1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0ZW1wb3JhbEJvYXJkW2luZGV4XVtjb2x1bW5dID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmJvYXJkID0gdGVtcG9yYWxCb2FyZDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4pIHtcbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl07XG5cbiAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgdGFyZ2V0LmhpdCgpO1xuICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0gPSAxO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09IDApIHtcbiAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dID0gLTE7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaXNHYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5ib2FyZC5mbGF0KCkuZXZlcnkoKGNlbGwpID0+IHR5cGVvZiBjZWxsICE9PSBcIm9iamVjdFwiKTtcbiAgfVxuXG4gIGdlbmVyYXRlUmFuZG9tQm9hcmQoKSB7XG4gICAgbGV0IHR5cGVzU2hpcHMgPSBbXG4gICAgICBcImNhcnJpZXJcIixcbiAgICAgIFwiYmF0dGxlc2hpcFwiLFxuICAgICAgXCJjcnVpc2VyXCIsXG4gICAgICBcInN1Ym1hcmluZVwiLFxuICAgICAgXCJkZXN0cm95ZXJcIixcbiAgICBdO1xuXG4gICAgZm9yIChjb25zdCBzaGlwVHlwZSBvZiB0eXBlc1NoaXBzKSB7XG4gICAgICBsZXQgaXNQbGFjZWQgPSBmYWxzZTtcbiAgICAgIHdoaWxlICghaXNQbGFjZWQpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG4gICAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMuZ2V0UmFuZG9tRGlyZWN0aW9uKCk7XG4gICAgICAgIGlzUGxhY2VkID0gdGhpcy5wbGFjZVNoaXAocm93LCBjb2x1bW4sIHNoaXBUeXBlLCBpc0hvcml6b250YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFBSSVZBVEUgRlVOQ1RJT05TXG4gIGRlZXBDb3B5Qm9hcmQoKSB7XG4gICAgY29uc3QgbnVtUm93cyA9IHRoaXMuYm9hcmQubGVuZ3RoO1xuICAgIGNvbnN0IG51bUNvbHMgPSB0aGlzLmJvYXJkWzBdLmxlbmd0aDtcblxuICAgIGNvbnN0IHRlbXBvcmFsQm9hcmQgPSBuZXcgQXJyYXkobnVtUm93cyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Sb3dzOyBpKyspIHtcbiAgICAgIHRlbXBvcmFsQm9hcmRbaV0gPSBuZXcgQXJyYXkobnVtQ29scyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbnVtUm93czsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG51bUNvbHM7IGNvbCsrKSB7XG4gICAgICAgIHRlbXBvcmFsQm9hcmRbcm93XVtjb2xdID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBvcmFsQm9hcmQ7XG4gIH1cblxuICBnZXRSYW5kb21JbnQobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSk7XG4gIH1cblxuICBnZXRSYW5kb21EaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjU7IC8vIEhvcml6b250YWw6IHRydWUsIFZlcnRpY2FsOiBmYWxzZVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobnVtYmVyLCB0eXBlLCBib2FyZCwgaXNUdXJuKSB7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgdGhpcy5pc1R1cm4gPSBpc1R1cm47XG4gIH1cblxuICBnZXRDb29yZGluYXRlcyhlbmVteUJvYXJkKSB7XG4gICAgbGV0IGJvYXJkUG9zc2libGVIaXRzID0gW107XG5cbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDEwOyBjb2x1bW4rKykge1xuICAgICAgICBpZiAoZW5lbXlCb2FyZFtyb3ddW2NvbHVtbl0gPT09IDEpIHtcbiAgICAgICAgICBjb25zdCBiZXR0ZXJDb29yZGluYXRlcyA9IHRoaXMuZ2V0QmV0dGVyQ29vcmRpbmF0ZXMoXG4gICAgICAgICAgICBlbmVteUJvYXJkLFxuICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgY29sdW1uXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChiZXR0ZXJDb29yZGluYXRlcyAhPT0gbnVsbCkgcmV0dXJuIGJldHRlckNvb3JkaW5hdGVzO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGVuZW15Qm9hcmRbcm93XVtjb2x1bW5dICE9PSAxICYmXG4gICAgICAgICAgZW5lbXlCb2FyZFtyb3ddW2NvbHVtbl0gIT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIGJvYXJkUG9zc2libGVIaXRzLnB1c2goW3JvdywgY29sdW1uXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcmFuZG9tT3B0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRQb3NzaWJsZUhpdHMubGVuZ3RoKTtcblxuICAgIHJldHVybiBib2FyZFBvc3NpYmxlSGl0c1tyYW5kb21PcHRpb25dO1xuICB9XG5cbiAgLy8gUFJJVkFURSBGVU5DVElPTlNcbiAgZ2V0SG9yaXpvbnRhbCgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA8IDAuNTtcbiAgfVxuXG4gIGdldEJldHRlckNvb3JkaW5hdGVzKGVuZW15Qm9hcmQsIHJvdywgY29sdW1uKSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZTEgPSByb3cgKyAxICE9PSAxMCA/IGVuZW15Qm9hcmRbcm93ICsgMV1bY29sdW1uXSA6IDE7XG4gICAgY29uc3QgY29vcmRpbmF0ZTIgPSByb3cgLSAxICE9PSAtMSA/IGVuZW15Qm9hcmRbcm93IC0gMV1bY29sdW1uXSA6IDE7XG4gICAgY29uc3QgY29vcmRpbmF0ZTMgPSBjb2x1bW4gKyAxICE9PSAxMCA/IGVuZW15Qm9hcmRbcm93XVtjb2x1bW4gKyAxXSA6IDE7XG4gICAgY29uc3QgY29vcmRpbmF0ZTQgPSBjb2x1bW4gLSAxICE9PSAtMSA/IGVuZW15Qm9hcmRbcm93XVtjb2x1bW4gLSAxXSA6IDE7XG5cbiAgICBpZiAoY29vcmRpbmF0ZTEgIT09IDEgJiYgY29vcmRpbmF0ZTEgIT09IC0xKSByZXR1cm4gW3JvdyArIDEsIGNvbHVtbl07XG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZTIgIT09IDEgJiYgY29vcmRpbmF0ZTIgIT09IC0xKSByZXR1cm4gW3JvdyAtIDEsIGNvbHVtbl07XG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZTMgIT09IDEgJiYgY29vcmRpbmF0ZTMgIT09IC0xKSByZXR1cm4gW3JvdywgY29sdW1uICsgMV07XG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZTQgIT09IDEgJiYgY29vcmRpbmF0ZTQgIT09IC0xKSByZXR1cm4gW3JvdywgY29sdW1uIC0gMV07XG4gICAgZWxzZSByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoRnJvbVR5cGUodHlwZSk7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgICB0aGlzLmlzU3VuayA9IGZhbHNlO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIGlmICh0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGgpIHRoaXMuaXNTdW5rID0gdHJ1ZTtcbiAgfVxuXG4gIGdldExlbmd0aEZyb21UeXBlKHR5cGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FycmllcjogNSxcbiAgICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgICBjcnVpc2VyOiAzLFxuICAgICAgc3VibWFyaW5lOiAzLFxuICAgICAgZGVzdHJveWVyOiAyLFxuICAgIH1bdHlwZV07XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IEdhbWVMb29wIH0gZnJvbSBcIi4vY29udHJvbGxlcnMvZ2FtZUxvb3BcIjtcblxuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGVzL21lbnVzLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGVzL3NoaXBzQ2hvb3NlTWVudS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy9nYW1lTWVudS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzXCI7XG5cbkdhbWVMb29wLnNldFVwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=