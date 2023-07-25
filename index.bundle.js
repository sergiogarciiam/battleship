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
___CSS_LOADER_EXPORT___.push([module.id, `.page {
  position: relative;
  display: flex;
  justify-content: center;
  gap: 200px;
}
.ships-choose-menu__gameBoard,
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

.ship {
  background-color: blue;
}

.hit {
  background-color: red;
}

.miss {
  background-color: gray;
}

.blocker {
  position: absolute;
  width: 100%;
  height: 100%;
}

.finish-menu {
  position: absolute;
  width: 500px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #111;
}

.hide {
  display: none;
}

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
`, "",{"version":3,"sources":["webpack://./src/assets/styles/app.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;AACA;;EAEE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;;EAEvB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B","sourcesContent":[".page {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  gap: 200px;\n}\n.ships-choose-menu__gameBoard,\n.gameBoard {\n  position: relative;\n  display: flex;\n  width: 550px;\n  flex-wrap: wrap;\n}\n\n.cell {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n.cell:hover {\n  opacity: 0.7;\n}\n\n.ship {\n  background-color: blue;\n}\n\n.hit {\n  background-color: red;\n}\n\n.miss {\n  background-color: gray;\n}\n\n.blocker {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.finish-menu {\n  position: absolute;\n  width: 500px;\n  height: 500px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  background-color: #111;\n}\n\n.hide {\n  display: none;\n}\n\n.ship-position {\n  position: absolute;\n  display: none;\n  background-color: blue;\n}\n\n.cell:hover > .ship-position {\n  display: inline;\n}\n\n.horizontal {\n  height: 50px;\n}\n\n.vertical {\n  width: 50px;\n}\n\n.carrier.horizontal {\n  width: 259px;\n  color: rgb(166, 87, 87);\n}\n\n.carrier.vertical {\n  height: 259px;\n  color: rgb(166, 87, 87);\n}\n\n.battleship.horizontal {\n  width: 209px;\n  color: rgb(166, 148, 87);\n}\n\n.battleship.vertical {\n  height: 209px;\n  color: rgb(166, 148, 87);\n}\n\n.cruiser.horizontal {\n  width: 159px;\n  color: rgb(115, 166, 87);\n}\n\n.cruiser.vertical {\n  height: 159px;\n  color: rgb(115, 166, 87);\n}\n\n.submarine.horizontal {\n  width: 159px;\n  color: rgb(87, 152, 166);\n}\n\n.submarine.vertical {\n  height: 159px;\n  color: rgb(87, 152, 166);\n}\n\n.destroyer.horizontal {\n  width: 109px;\n  color: rgb(132, 87, 166);\n}\n\n.destroyer.vertical {\n  height: 109px;\n  color: rgb(132, 87, 166);\n}\n"],"sourceRoot":""}]);
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
  const setUp = (isBot) => {
    const blocker = document.createElement("div");
    blocker.classList.add("blocker");

    if (isBot) blocker.classList.add("hide");

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
    _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.setUpMainMenu();
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

  const setUp = (player) => {
    myBoard = player.board;

    const gameBoard = document.createElement("div");
    gameBoard.classList.add("gameBoard");
    gameBoard.dataset.player = "" + player.number;

    let isShip = false;
    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {
        if (typeof myBoard.board[row][column] == "object") isShip = true;
        gameBoard.appendChild(createCell(row, column, isShip));
        isShip = false;
      }
    }

    gameBoard.appendChild(_blocker__WEBPACK_IMPORTED_MODULE_1__.blockerComponent.setUp(player.type === "bot"));

    return gameBoard;
  };

  function createCell(row, column, isShip) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.row = row;
    cell.dataset.column = column;

    cell.addEventListener("click", attack);

    if (isShip) cell.classList.add("ship");

    return cell;
  }

  function attack(event) {
    const target = event.target;
    _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.attack(target.dataset.row, target.dataset.column);
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
    const mainMenu = document.createElement("div");
    const title = document.createElement("h1");
    const buttonsContainer = document.createElement("div");
    const singlePlayerButton = document.createElement("button");
    const multiPlayerButton = document.createElement("button");

    mainMenu.classList.add("main-menu");

    title.textContent = "Battleships";
    singlePlayerButton.textContent = "Human vs Bot";
    multiPlayerButton.textContent = "Human vs Human";

    singlePlayerButton.addEventListener("click", startSingleGame);
    multiPlayerButton.addEventListener("click", startMultiplayerGame);

    buttonsContainer.appendChild(singlePlayerButton);
    buttonsContainer.appendChild(multiPlayerButton);

    mainMenu.appendChild(title);
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
/* harmony import */ var _mainMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainMenu */ "./src/components/mainMenu.js");



const pageComponent = (() => {
  const setUp = () => {
    const page = document.createElement("div");
    page.classList.add("page");

    page.appendChild(_mainMenu__WEBPACK_IMPORTED_MODULE_1__.mainMenu.setUp());
    page.appendChild(_finishMenu__WEBPACK_IMPORTED_MODULE_0__.finishMenuComponent.setUp());

    return page;
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
  let myPlayer = null;
  let actualShip = "";
  let orientation = "";

  const setUp = (player) => {
    const shipsChooseMenu = document.createElement("div");
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
    gameBoard.classList.add("ships-choose-menu__gameBoard");

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

    if (isShip) cell.classList.add("ship");

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
/* harmony import */ var _components_shipsChooseMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shipsChooseMenu */ "./src/components/shipsChooseMenu.js");







const GameLoop = (() => {
  let players = [];

  const setUpMainMenu = () => {
    cleanNode(document.body);
    document.body.appendChild(_components_page__WEBPACK_IMPORTED_MODULE_2__.pageComponent.setUp());
  };

  const setUpPlayers = (typePlayer1, typePlayer2) => {
    const gameBoard1 = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard();
    const gameBoard2 = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard();

    players = [];

    players.push(new _factories_player__WEBPACK_IMPORTED_MODULE_0__.Player(0, typePlayer1, gameBoard1));
    players.push(new _factories_player__WEBPACK_IMPORTED_MODULE_0__.Player(1, typePlayer2, gameBoard2));
  };

  const setUpShipsChooseMenu = (number = 0) => {
    const page = document.querySelector(".page");
    const player = players[number];

    if (number === 2) setUpGameBoards();
    else if (player.type === "human") {
      cleanPage();
      page.appendChild(_components_shipsChooseMenu__WEBPACK_IMPORTED_MODULE_4__.shipsChooseMenu.setUp(player));
    } else {
      player.board.generateRandomBoard();
      setUpGameBoards();
    }
  };

  const setUpGameBoards = () => {
    const page = document.querySelector(".page");
    const shipsChoose = document.querySelector(".ships-choose-menu");

    shipsChoose.remove();

    page.appendChild(_components_gameboard__WEBPACK_IMPORTED_MODULE_3__.gameBoardComponent.setUp(players[0]));
    page.appendChild(_components_gameboard__WEBPACK_IMPORTED_MODULE_3__.gameBoardComponent.setUp(players[1]));
  };

  const attack = (row, column) => {
    _components_gameboard__WEBPACK_IMPORTED_MODULE_3__.gameBoardComponent.changeCellColor(
      players[1].board.receiveAttack(row, column),
      players[1].number,
      row,
      column
    );

    if (players[1].board.isGameOver()) showFinishMenu();
    else attackBot();
  };

  function attackBot() {
    const aiCoord = players[1].getCoordinates(players[0].board.board);

    _components_gameboard__WEBPACK_IMPORTED_MODULE_3__.gameBoardComponent.changeCellColor(
      players[0].board.receiveAttack(aiCoord[0], aiCoord[1]),
      players[0].number,
      aiCoord[0],
      aiCoord[1]
    );

    if (players[0].board.isGameOver()) showFinishMenu();
  }

  function showFinishMenu() {
    const finishMenu = document.querySelector(".finish-menu");
    const title = finishMenu.querySelector("h3");

    finishMenu.classList.remove("hide");
    title.textContent = "Game Over";
  }

  function cleanNode(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  function cleanPage() {
    const mainMenu = document.querySelector(".main-menu");
    const gameBoards = document.querySelectorAll(".gameBoard");
    const shipsChoose = document.querySelector(".ships-choose-menu");

    if (shipsChoose !== null) shipsChoose.remove();
    if (gameBoards !== null)
      gameBoards.forEach((gameBoard) => gameBoard.remove());

    if (mainMenu !== null) mainMenu.remove();
  }

  return {
    setUpMainMenu,
    setUpPlayers,
    setUpShipsChooseMenu,
    setUpGameBoards,
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
  constructor(number, type, board) {
    this.number = number;
    this.type = type;
    this.board = board;
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
/* harmony import */ var _assets_styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles/app.css */ "./src/assets/styles/app.css");



_controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.setUpMainMenu();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDakNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQWtEO0FBQ2pCOztBQUVqQywyREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz85Y2M1Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2Jsb2NrZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2ZpbmlzaE1lbnUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvbWFpbk1lbnUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3NoaXBzQ2hvb3NlTWVudS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXJzL2dhbWVMb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDIwMHB4O1xufVxuLnNoaXBzLWNob29zZS1tZW51X19nYW1lQm9hcmQsXG4uZ2FtZUJvYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTUwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNlbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jZWxsOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuLmJsb2NrZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5maW5pc2gtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNoaXAtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5jZWxsOmhvdmVyID4gLnNoaXAtcG9zaXRpb24ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5ob3Jpem9udGFsIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4udmVydGljYWwge1xuICB3aWR0aDogNTBweDtcbn1cblxuLmNhcnJpZXIuaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAyNTlweDtcbiAgY29sb3I6IHJnYigxNjYsIDg3LCA4Nyk7XG59XG5cbi5jYXJyaWVyLnZlcnRpY2FsIHtcbiAgaGVpZ2h0OiAyNTlweDtcbiAgY29sb3I6IHJnYigxNjYsIDg3LCA4Nyk7XG59XG5cbi5iYXR0bGVzaGlwLmhvcml6b250YWwge1xuICB3aWR0aDogMjA5cHg7XG4gIGNvbG9yOiByZ2IoMTY2LCAxNDgsIDg3KTtcbn1cblxuLmJhdHRsZXNoaXAudmVydGljYWwge1xuICBoZWlnaHQ6IDIwOXB4O1xuICBjb2xvcjogcmdiKDE2NiwgMTQ4LCA4Nyk7XG59XG5cbi5jcnVpc2VyLmhvcml6b250YWwge1xuICB3aWR0aDogMTU5cHg7XG4gIGNvbG9yOiByZ2IoMTE1LCAxNjYsIDg3KTtcbn1cblxuLmNydWlzZXIudmVydGljYWwge1xuICBoZWlnaHQ6IDE1OXB4O1xuICBjb2xvcjogcmdiKDExNSwgMTY2LCA4Nyk7XG59XG5cbi5zdWJtYXJpbmUuaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxNTlweDtcbiAgY29sb3I6IHJnYig4NywgMTUyLCAxNjYpO1xufVxuXG4uc3VibWFyaW5lLnZlcnRpY2FsIHtcbiAgaGVpZ2h0OiAxNTlweDtcbiAgY29sb3I6IHJnYig4NywgMTUyLCAxNjYpO1xufVxuXG4uZGVzdHJveWVyLmhvcml6b250YWwge1xuICB3aWR0aDogMTA5cHg7XG4gIGNvbG9yOiByZ2IoMTMyLCA4NywgMTY2KTtcbn1cblxuLmRlc3Ryb3llci52ZXJ0aWNhbCB7XG4gIGhlaWdodDogMTA5cHg7XG4gIGNvbG9yOiByZ2IoMTMyLCA4NywgMTY2KTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhOztFQUViLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7RUFFdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucGFnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwMHB4O1xcbn1cXG4uc2hpcHMtY2hvb3NlLW1lbnVfX2dhbWVCb2FyZCxcXG4uZ2FtZUJvYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNTUwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jZWxsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jZWxsOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5ibG9ja2VyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZmluaXNoLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNoaXAtcG9zaXRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5jZWxsOmhvdmVyID4gLnNoaXAtcG9zaXRpb24ge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi52ZXJ0aWNhbCB7XFxuICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmNhcnJpZXIuaG9yaXpvbnRhbCB7XFxuICB3aWR0aDogMjU5cHg7XFxuICBjb2xvcjogcmdiKDE2NiwgODcsIDg3KTtcXG59XFxuXFxuLmNhcnJpZXIudmVydGljYWwge1xcbiAgaGVpZ2h0OiAyNTlweDtcXG4gIGNvbG9yOiByZ2IoMTY2LCA4NywgODcpO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiAyMDlweDtcXG4gIGNvbG9yOiByZ2IoMTY2LCAxNDgsIDg3KTtcXG59XFxuXFxuLmJhdHRsZXNoaXAudmVydGljYWwge1xcbiAgaGVpZ2h0OiAyMDlweDtcXG4gIGNvbG9yOiByZ2IoMTY2LCAxNDgsIDg3KTtcXG59XFxuXFxuLmNydWlzZXIuaG9yaXpvbnRhbCB7XFxuICB3aWR0aDogMTU5cHg7XFxuICBjb2xvcjogcmdiKDExNSwgMTY2LCA4Nyk7XFxufVxcblxcbi5jcnVpc2VyLnZlcnRpY2FsIHtcXG4gIGhlaWdodDogMTU5cHg7XFxuICBjb2xvcjogcmdiKDExNSwgMTY2LCA4Nyk7XFxufVxcblxcbi5zdWJtYXJpbmUuaG9yaXpvbnRhbCB7XFxuICB3aWR0aDogMTU5cHg7XFxuICBjb2xvcjogcmdiKDg3LCAxNTIsIDE2Nik7XFxufVxcblxcbi5zdWJtYXJpbmUudmVydGljYWwge1xcbiAgaGVpZ2h0OiAxNTlweDtcXG4gIGNvbG9yOiByZ2IoODcsIDE1MiwgMTY2KTtcXG59XFxuXFxuLmRlc3Ryb3llci5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiAxMDlweDtcXG4gIGNvbG9yOiByZ2IoMTMyLCA4NywgMTY2KTtcXG59XFxuXFxuLmRlc3Ryb3llci52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IDEwOXB4O1xcbiAgY29sb3I6IHJnYigxMzIsIDg3LCAxNjYpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgYmxvY2tlckNvbXBvbmVudCA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKGlzQm90KSA9PiB7XG4gICAgY29uc3QgYmxvY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmxvY2tlci5jbGFzc0xpc3QuYWRkKFwiYmxvY2tlclwiKTtcblxuICAgIGlmIChpc0JvdCkgYmxvY2tlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICAgIHJldHVybiBibG9ja2VyO1xuICB9O1xuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgR2FtZUxvb3AgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvZ2FtZUxvb3BcIjtcbmltcG9ydCB7IG1haW5NZW51IH0gZnJvbSBcIi4vbWFpbk1lbnVcIjtcblxuZXhwb3J0IGNvbnN0IGZpbmlzaE1lbnVDb21wb25lbnQgPSAoKCkgPT4ge1xuICBjb25zdCBzZXRVcCA9IChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBmaW5pc2hNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IG1haW5NZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGZpbmlzaE1lbnUuY2xhc3NMaXN0LmFkZChcImZpbmlzaC1tZW51XCIpO1xuICAgIGZpbmlzaE1lbnUuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcGxheUFnYWluQnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGF5IEFnYWluXCI7XG4gICAgbWFpbk1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1haW4gTWVudVwiO1xuXG4gICAgcGxheUFnYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5QWdhaW4pO1xuICAgIG1haW5NZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb0JhY2tNYWluTWVudSk7XG5cbiAgICBmaW5pc2hNZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBmaW5pc2hNZW51LmFwcGVuZENoaWxkKHBsYXlBZ2FpbkJ1dHRvbik7XG4gICAgZmluaXNoTWVudS5hcHBlbmRDaGlsZChtYWluTWVudUJ1dHRvbik7XG5cbiAgICByZXR1cm4gZmluaXNoTWVudTtcbiAgfTtcblxuICBmdW5jdGlvbiBwbGF5QWdhaW4oZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBHYW1lTG9vcC5zZXRVcFNoaXBzQ2hvb3NlTWVudSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrTWFpbk1lbnUoZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBHYW1lTG9vcC5zZXRVcE1haW5NZW51KCk7XG4gIH1cblxuICByZXR1cm4geyBzZXRVcCB9O1xufSkoKTtcbiIsImltcG9ydCB7IEdhbWVMb29wIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2dhbWVMb29wXCI7XG5pbXBvcnQgeyBibG9ja2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vYmxvY2tlclwiO1xuXG5leHBvcnQgY29uc3QgZ2FtZUJvYXJkQ29tcG9uZW50ID0gKCgpID0+IHtcbiAgbGV0IG15Qm9hcmQgPSBudWxsO1xuXG4gIGNvbnN0IHNldFVwID0gKHBsYXllcikgPT4ge1xuICAgIG15Qm9hcmQgPSBwbGF5ZXIuYm9hcmQ7XG5cbiAgICBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbWVCb2FyZC5jbGFzc0xpc3QuYWRkKFwiZ2FtZUJvYXJkXCIpO1xuICAgIGdhbWVCb2FyZC5kYXRhc2V0LnBsYXllciA9IFwiXCIgKyBwbGF5ZXIubnVtYmVyO1xuXG4gICAgbGV0IGlzU2hpcCA9IGZhbHNlO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMTA7IGNvbHVtbisrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbXlCb2FyZC5ib2FyZFtyb3ddW2NvbHVtbl0gPT0gXCJvYmplY3RcIikgaXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgZ2FtZUJvYXJkLmFwcGVuZENoaWxkKGNyZWF0ZUNlbGwocm93LCBjb2x1bW4sIGlzU2hpcCkpO1xuICAgICAgICBpc1NoaXAgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tlckNvbXBvbmVudC5zZXRVcChwbGF5ZXIudHlwZSA9PT0gXCJib3RcIikpO1xuXG4gICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVDZWxsKHJvdywgY29sdW1uLCBpc1NoaXApIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgIGNlbGwuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgY2VsbC5kYXRhc2V0LmNvbHVtbiA9IGNvbHVtbjtcblxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFjayk7XG5cbiAgICBpZiAoaXNTaGlwKSBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuXG4gICAgcmV0dXJuIGNlbGw7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2soZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgR2FtZUxvb3AuYXR0YWNrKHRhcmdldC5kYXRhc2V0LnJvdywgdGFyZ2V0LmRhdGFzZXQuY29sdW1uKTtcbiAgfVxuXG4gIGNvbnN0IGNoYW5nZUNlbGxDb2xvciA9IChpc0hpdCwgbnVtYmVyLCByb3csIGNvbHVtbikgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGxheWVyPVwiJHtudW1iZXJ9XCJdYCk7XG4gICAgY29uc3QgY2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sdW1uPVwiJHtjb2x1bW59XCJdYFxuICAgICk7XG5cbiAgICBpZiAoaXNIaXQpIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICB9XG5cbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2spO1xuICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0VXAsIGNoYW5nZUNlbGxDb2xvciB9O1xufSkoKTtcbiIsImltcG9ydCB7IEdhbWVMb29wIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2dhbWVMb29wXCI7XG5cbmV4cG9ydCBjb25zdCBtYWluTWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzaW5nbGVQbGF5ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IG11bHRpUGxheWVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIG1haW5NZW51LmNsYXNzTGlzdC5hZGQoXCJtYWluLW1lbnVcIik7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcHNcIjtcbiAgICBzaW5nbGVQbGF5ZXJCdXR0b24udGV4dENvbnRlbnQgPSBcIkh1bWFuIHZzIEJvdFwiO1xuICAgIG11bHRpUGxheWVyQnV0dG9uLnRleHRDb250ZW50ID0gXCJIdW1hbiB2cyBIdW1hblwiO1xuXG4gICAgc2luZ2xlUGxheWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydFNpbmdsZUdhbWUpO1xuICAgIG11bHRpUGxheWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydE11bHRpcGxheWVyR2FtZSk7XG5cbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpbmdsZVBsYXllckJ1dHRvbik7XG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtdWx0aVBsYXllckJ1dHRvbik7XG5cbiAgICBtYWluTWVudS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gbWFpbk1lbnU7XG4gIH07XG5cbiAgZnVuY3Rpb24gc3RhcnRTaW5nbGVHYW1lKCkge1xuICAgIEdhbWVMb29wLnNldFVwUGxheWVycyhcImh1bWFuXCIsIFwiYm90XCIpO1xuICAgIEdhbWVMb29wLnNldFVwU2hpcHNDaG9vc2VNZW51KCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydE11bHRpcGxheWVyR2FtZSgpIHtcbiAgICBHYW1lTG9vcC5zZXRVcFBsYXllcnMoXCJodW1hblwiLCBcImh1bWFuXCIpO1xuICAgIEdhbWVMb29wLnNldFVwU2hpcHNDaG9vc2VNZW51KCk7XG4gIH1cblxuICByZXR1cm4geyBzZXRVcCB9O1xufSkoKTtcbiIsImltcG9ydCB7IGZpbmlzaE1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9maW5pc2hNZW51XCI7XG5pbXBvcnQgeyBtYWluTWVudSB9IGZyb20gXCIuL21haW5NZW51XCI7XG5cbmV4cG9ydCBjb25zdCBwYWdlQ29tcG9uZW50ID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0VXAgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGFnZS5jbGFzc0xpc3QuYWRkKFwicGFnZVwiKTtcblxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQobWFpbk1lbnUuc2V0VXAoKSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChmaW5pc2hNZW51Q29tcG9uZW50LnNldFVwKCkpO1xuXG4gICAgcmV0dXJuIHBhZ2U7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0VXAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBHYW1lTG9vcCB9IGZyb20gXCIuLi9jb250cm9sbGVycy9nYW1lTG9vcFwiO1xuXG5leHBvcnQgY29uc3Qgc2hpcHNDaG9vc2VNZW51ID0gKCgpID0+IHtcbiAgbGV0IG15UGxheWVyID0gbnVsbDtcbiAgbGV0IGFjdHVhbFNoaXAgPSBcIlwiO1xuICBsZXQgb3JpZW50YXRpb24gPSBcIlwiO1xuXG4gIGNvbnN0IHNldFVwID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHNoaXBzQ2hvb3NlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2hpcHNDaG9vc2VNZW51LmNsYXNzTGlzdC5hZGQoXCJzaGlwcy1jaG9vc2UtbWVudVwiKTtcblxuICAgIG15UGxheWVyID0gcGxheWVyO1xuICAgIGFjdHVhbFNoaXAgPSBcImNhcnJpZXJcIjtcbiAgICBvcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuXG4gICAgc2hpcHNDaG9vc2VNZW51LmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbigpKTtcbiAgICBzaGlwc0Nob29zZU1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlR2FtZUJvYXJkKCkpO1xuXG4gICAgcmV0dXJuIHNoaXBzQ2hvb3NlTWVudTtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlJvdGF0ZVwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm90YXRlU2hpcCk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUdhbWVCb2FyZCgpIHtcbiAgICBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG15Qm9hcmQgPSBteVBsYXllci5ib2FyZC5ib2FyZDtcbiAgICBnYW1lQm9hcmQuY2xhc3NMaXN0LmFkZChcInNoaXBzLWNob29zZS1tZW51X19nYW1lQm9hcmRcIik7XG5cbiAgICBsZXQgaXNTaGlwID0gZmFsc2U7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCAxMDsgY29sdW1uKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBteUJvYXJkW3Jvd11bY29sdW1uXSA9PSBcIm9iamVjdFwiKSBpc1NoaXAgPSB0cnVlO1xuICAgICAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoY3JlYXRlQ2VsbChyb3csIGNvbHVtbiwgaXNTaGlwKSk7XG4gICAgICAgIGlzU2hpcCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBnYW1lQm9hcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDZWxsKHJvdywgY29sdW1uLCBpc1NoaXApIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzaGlwUG9zaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcblxuICAgIHNoaXBQb3NpdGlvbi5jbGFzc0xpc3QuYWRkKFwic2hpcC1wb3NpdGlvblwiKTtcblxuICAgIHNoaXBQb3NpdGlvbi5jbGFzc0xpc3QuYWRkKG9yaWVudGF0aW9uKTtcbiAgICBzaGlwUG9zaXRpb24uY2xhc3NMaXN0LmFkZChhY3R1YWxTaGlwKTtcblxuICAgIGNlbGwuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgY2VsbC5kYXRhc2V0LmNvbHVtbiA9IGNvbHVtbjtcblxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFNoaXApO1xuXG4gICAgY2VsbC5hcHBlbmRDaGlsZChzaGlwUG9zaXRpb24pO1xuXG4gICAgaWYgKGlzU2hpcCkgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcblxuICAgIHJldHVybiBjZWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkU2hpcChlKSB7XG4gICAgY29uc3Qgc2hpcHNDaG9vc2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwcy1jaG9vc2UtbWVudVwiKTtcbiAgICBjb25zdCByb3cgPSArZS50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LnJvdztcbiAgICBjb25zdCBjb2x1bW4gPSArZS50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmNvbHVtbjtcblxuICAgIGNvbnN0IGlzUGxhY2VkID0gbXlQbGF5ZXIuYm9hcmQucGxhY2VTaGlwKFxuICAgICAgcm93LFxuICAgICAgY29sdW1uLFxuICAgICAgYWN0dWFsU2hpcCxcbiAgICAgIG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIlxuICAgICk7XG5cbiAgICBpZiAoIWlzUGxhY2VkKSByZXR1cm47XG5cbiAgICBhY3R1YWxTaGlwID1cbiAgICAgIGFjdHVhbFNoaXAgPT09IFwiY2FycmllclwiXG4gICAgICAgID8gXCJiYXR0bGVzaGlwXCJcbiAgICAgICAgOiBhY3R1YWxTaGlwID09PSBcImJhdHRsZXNoaXBcIlxuICAgICAgICA/IFwiY3J1aXNlclwiXG4gICAgICAgIDogYWN0dWFsU2hpcCA9PT0gXCJjcnVpc2VyXCJcbiAgICAgICAgPyBcInN1Ym1hcmluZVwiXG4gICAgICAgIDogYWN0dWFsU2hpcCA9PT0gXCJzdWJtYXJpbmVcIlxuICAgICAgICA/IFwiZGVzdHJveWVyXCJcbiAgICAgICAgOiBcIlwiO1xuXG4gICAgaWYgKGFjdHVhbFNoaXAgPT09IFwiXCIpIHtcbiAgICAgIEdhbWVMb29wLnNldFVwU2hpcHNDaG9vc2VNZW51KG15UGxheWVyLm51bWJlciArIDEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNoaXBzQ2hvb3NlTWVudS5jaGlsZE5vZGVzWzFdLnJlbW92ZSgpO1xuICAgIHNoaXBzQ2hvb3NlTWVudS5hcHBlbmRDaGlsZChjcmVhdGVHYW1lQm9hcmQoKSk7XG4gIH1cblxuICBmdW5jdGlvbiByb3RhdGVTaGlwKCkge1xuICAgIGNvbnN0IHNoaXBzUG9zaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAtcG9zaXRpb25cIik7XG4gICAgc2hpcHNQb3NpdGlvbi5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgIHNoaXAuY2xhc3NMaXN0LnRvZ2dsZShcImhvcml6b250YWxcIik7XG4gICAgfSk7XG5cbiAgICBvcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICB9XG5cbiAgcmV0dXJuIHsgc2V0VXAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vZmFjdG9yaWVzL3BsYXllclwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4uL2ZhY3Rvcmllcy9nYW1lYm9hcmRcIjtcblxuaW1wb3J0IHsgcGFnZUNvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VcIjtcbmltcG9ydCB7IGdhbWVCb2FyZENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgc2hpcHNDaG9vc2VNZW51IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hpcHNDaG9vc2VNZW51XCI7XG5cbmV4cG9ydCBjb25zdCBHYW1lTG9vcCA9ICgoKSA9PiB7XG4gIGxldCBwbGF5ZXJzID0gW107XG5cbiAgY29uc3Qgc2V0VXBNYWluTWVudSA9ICgpID0+IHtcbiAgICBjbGVhbk5vZGUoZG9jdW1lbnQuYm9keSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlQ29tcG9uZW50LnNldFVwKCkpO1xuICB9O1xuXG4gIGNvbnN0IHNldFVwUGxheWVycyA9ICh0eXBlUGxheWVyMSwgdHlwZVBsYXllcjIpID0+IHtcbiAgICBjb25zdCBnYW1lQm9hcmQxID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgIGNvbnN0IGdhbWVCb2FyZDIgPSBuZXcgR2FtZUJvYXJkKCk7XG5cbiAgICBwbGF5ZXJzID0gW107XG5cbiAgICBwbGF5ZXJzLnB1c2gobmV3IFBsYXllcigwLCB0eXBlUGxheWVyMSwgZ2FtZUJvYXJkMSkpO1xuICAgIHBsYXllcnMucHVzaChuZXcgUGxheWVyKDEsIHR5cGVQbGF5ZXIyLCBnYW1lQm9hcmQyKSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0VXBTaGlwc0Nob29zZU1lbnUgPSAobnVtYmVyID0gMCkgPT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VcIik7XG4gICAgY29uc3QgcGxheWVyID0gcGxheWVyc1tudW1iZXJdO1xuXG4gICAgaWYgKG51bWJlciA9PT0gMikgc2V0VXBHYW1lQm9hcmRzKCk7XG4gICAgZWxzZSBpZiAocGxheWVyLnR5cGUgPT09IFwiaHVtYW5cIikge1xuICAgICAgY2xlYW5QYWdlKCk7XG4gICAgICBwYWdlLmFwcGVuZENoaWxkKHNoaXBzQ2hvb3NlTWVudS5zZXRVcChwbGF5ZXIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyLmJvYXJkLmdlbmVyYXRlUmFuZG9tQm9hcmQoKTtcbiAgICAgIHNldFVwR2FtZUJvYXJkcygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRVcEdhbWVCb2FyZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZVwiKTtcbiAgICBjb25zdCBzaGlwc0Nob29zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHMtY2hvb3NlLW1lbnVcIik7XG5cbiAgICBzaGlwc0Nob29zZS5yZW1vdmUoKTtcblxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkQ29tcG9uZW50LnNldFVwKHBsYXllcnNbMF0pKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGdhbWVCb2FyZENvbXBvbmVudC5zZXRVcChwbGF5ZXJzWzFdKSk7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrID0gKHJvdywgY29sdW1uKSA9PiB7XG4gICAgZ2FtZUJvYXJkQ29tcG9uZW50LmNoYW5nZUNlbGxDb2xvcihcbiAgICAgIHBsYXllcnNbMV0uYm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbiksXG4gICAgICBwbGF5ZXJzWzFdLm51bWJlcixcbiAgICAgIHJvdyxcbiAgICAgIGNvbHVtblxuICAgICk7XG5cbiAgICBpZiAocGxheWVyc1sxXS5ib2FyZC5pc0dhbWVPdmVyKCkpIHNob3dGaW5pc2hNZW51KCk7XG4gICAgZWxzZSBhdHRhY2tCb3QoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBhdHRhY2tCb3QoKSB7XG4gICAgY29uc3QgYWlDb29yZCA9IHBsYXllcnNbMV0uZ2V0Q29vcmRpbmF0ZXMocGxheWVyc1swXS5ib2FyZC5ib2FyZCk7XG5cbiAgICBnYW1lQm9hcmRDb21wb25lbnQuY2hhbmdlQ2VsbENvbG9yKFxuICAgICAgcGxheWVyc1swXS5ib2FyZC5yZWNlaXZlQXR0YWNrKGFpQ29vcmRbMF0sIGFpQ29vcmRbMV0pLFxuICAgICAgcGxheWVyc1swXS5udW1iZXIsXG4gICAgICBhaUNvb3JkWzBdLFxuICAgICAgYWlDb29yZFsxXVxuICAgICk7XG5cbiAgICBpZiAocGxheWVyc1swXS5ib2FyZC5pc0dhbWVPdmVyKCkpIHNob3dGaW5pc2hNZW51KCk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93RmluaXNoTWVudSgpIHtcbiAgICBjb25zdCBmaW5pc2hNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maW5pc2gtbWVudVwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGZpbmlzaE1lbnUucXVlcnlTZWxlY3RvcihcImgzXCIpO1xuXG4gICAgZmluaXNoTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiR2FtZSBPdmVyXCI7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbk5vZGUobm9kZSkge1xuICAgIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhblBhZ2UoKSB7XG4gICAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWVudVwiKTtcbiAgICBjb25zdCBnYW1lQm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lQm9hcmRcIik7XG4gICAgY29uc3Qgc2hpcHNDaG9vc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzLWNob29zZS1tZW51XCIpO1xuXG4gICAgaWYgKHNoaXBzQ2hvb3NlICE9PSBudWxsKSBzaGlwc0Nob29zZS5yZW1vdmUoKTtcbiAgICBpZiAoZ2FtZUJvYXJkcyAhPT0gbnVsbClcbiAgICAgIGdhbWVCb2FyZHMuZm9yRWFjaCgoZ2FtZUJvYXJkKSA9PiBnYW1lQm9hcmQucmVtb3ZlKCkpO1xuXG4gICAgaWYgKG1haW5NZW51ICE9PSBudWxsKSBtYWluTWVudS5yZW1vdmUoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2V0VXBNYWluTWVudSxcbiAgICBzZXRVcFBsYXllcnMsXG4gICAgc2V0VXBTaGlwc0Nob29zZU1lbnUsXG4gICAgc2V0VXBHYW1lQm9hcmRzLFxuICAgIGF0dGFjayxcbiAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBBcnJheSgxMCkuZmlsbCgwKS5tYXAoKCkgPT4gbmV3IEFycmF5KDEwKS5maWxsKDApKTtcbiAgfVxuXG4gIHBsYWNlU2hpcChyb3csIGNvbHVtbiwgc2hpcFR5cGUsIGlzSG9yaXpvbnRhbCkge1xuICAgIGNvbnN0IHRlbXBvcmFsQm9hcmQgPSB0aGlzLmRlZXBDb3B5Qm9hcmQoKTtcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoc2hpcFR5cGUpO1xuXG4gICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgY29uc3QgbWF4ID0gY29sdW1uICsgc2hpcC5sZW5ndGg7XG4gICAgICBpZiAobWF4ID4gMTApIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSBjb2x1bW47IGluZGV4IDwgbWF4OyBpbmRleCsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGVtcG9yYWxCb2FyZFtyb3ddW2luZGV4XSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0ZW1wb3JhbEJvYXJkW3Jvd11baW5kZXhdID0gc2hpcDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWF4ID0gcm93ICsgc2hpcC5sZW5ndGg7XG4gICAgICBpZiAobWF4ID4gMTApIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSByb3c7IGluZGV4IDwgbWF4OyBpbmRleCsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGVtcG9yYWxCb2FyZFtpbmRleF1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0ZW1wb3JhbEJvYXJkW2luZGV4XVtjb2x1bW5dID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmJvYXJkID0gdGVtcG9yYWxCb2FyZDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4pIHtcbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl07XG5cbiAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgdGFyZ2V0LmhpdCgpO1xuICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0gPSAxO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09IDApIHtcbiAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dID0gLTE7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaXNHYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5ib2FyZC5mbGF0KCkuZXZlcnkoKGNlbGwpID0+IHR5cGVvZiBjZWxsICE9PSBcIm9iamVjdFwiKTtcbiAgfVxuXG4gIGdlbmVyYXRlUmFuZG9tQm9hcmQoKSB7XG4gICAgbGV0IHR5cGVzU2hpcHMgPSBbXG4gICAgICBcImNhcnJpZXJcIixcbiAgICAgIFwiYmF0dGxlc2hpcFwiLFxuICAgICAgXCJjcnVpc2VyXCIsXG4gICAgICBcInN1Ym1hcmluZVwiLFxuICAgICAgXCJkZXN0cm95ZXJcIixcbiAgICBdO1xuXG4gICAgZm9yIChjb25zdCBzaGlwVHlwZSBvZiB0eXBlc1NoaXBzKSB7XG4gICAgICBsZXQgaXNQbGFjZWQgPSBmYWxzZTtcbiAgICAgIHdoaWxlICghaXNQbGFjZWQpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG4gICAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMuZ2V0UmFuZG9tRGlyZWN0aW9uKCk7XG4gICAgICAgIGlzUGxhY2VkID0gdGhpcy5wbGFjZVNoaXAocm93LCBjb2x1bW4sIHNoaXBUeXBlLCBpc0hvcml6b250YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlZXBDb3B5Qm9hcmQoKSB7XG4gICAgY29uc3QgbnVtUm93cyA9IHRoaXMuYm9hcmQubGVuZ3RoO1xuICAgIGNvbnN0IG51bUNvbHMgPSB0aGlzLmJvYXJkWzBdLmxlbmd0aDtcblxuICAgIGNvbnN0IHRlbXBvcmFsQm9hcmQgPSBuZXcgQXJyYXkobnVtUm93cyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Sb3dzOyBpKyspIHtcbiAgICAgIHRlbXBvcmFsQm9hcmRbaV0gPSBuZXcgQXJyYXkobnVtQ29scyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbnVtUm93czsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG51bUNvbHM7IGNvbCsrKSB7XG4gICAgICAgIHRlbXBvcmFsQm9hcmRbcm93XVtjb2xdID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBvcmFsQm9hcmQ7XG4gIH1cblxuICBnZXRSYW5kb21JbnQobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSk7XG4gIH1cblxuICBnZXRSYW5kb21EaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjU7IC8vIEhvcml6b250YWw6IHRydWUsIFZlcnRpY2FsOiBmYWxzZVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobnVtYmVyLCB0eXBlLCBib2FyZCkge1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuICB9XG5cbiAgZ2V0Q29vcmRpbmF0ZXMoZW5lbXlCb2FyZCkge1xuICAgIGxldCBib2FyZFBvc3NpYmxlSGl0cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCAxMDsgY29sdW1uKyspIHtcbiAgICAgICAgaWYgKGVuZW15Qm9hcmRbcm93XVtjb2x1bW5dID09PSAxKSB7XG4gICAgICAgICAgY29uc3QgYmV0dGVyQ29vcmRpbmF0ZXMgPSB0aGlzLmdldEJldHRlckNvb3JkaW5hdGVzKFxuICAgICAgICAgICAgZW5lbXlCb2FyZCxcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgIGNvbHVtblxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGJldHRlckNvb3JkaW5hdGVzICE9PSBudWxsKSByZXR1cm4gYmV0dGVyQ29vcmRpbmF0ZXM7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgZW5lbXlCb2FyZFtyb3ddW2NvbHVtbl0gIT09IDEgJiZcbiAgICAgICAgICBlbmVteUJvYXJkW3Jvd11bY29sdW1uXSAhPT0gLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgYm9hcmRQb3NzaWJsZUhpdHMucHVzaChbcm93LCBjb2x1bW5dKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCByYW5kb21PcHRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFBvc3NpYmxlSGl0cy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIGJvYXJkUG9zc2libGVIaXRzW3JhbmRvbU9wdGlvbl07XG4gIH1cblxuICBnZXRIb3Jpem9udGFsKCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41O1xuICB9XG5cbiAgZ2V0QmV0dGVyQ29vcmRpbmF0ZXMoZW5lbXlCb2FyZCwgcm93LCBjb2x1bW4pIHtcbiAgICBjb25zdCBjb29yZGluYXRlMSA9IHJvdyArIDEgIT09IDEwID8gZW5lbXlCb2FyZFtyb3cgKyAxXVtjb2x1bW5dIDogMTtcbiAgICBjb25zdCBjb29yZGluYXRlMiA9IHJvdyAtIDEgIT09IC0xID8gZW5lbXlCb2FyZFtyb3cgLSAxXVtjb2x1bW5dIDogMTtcbiAgICBjb25zdCBjb29yZGluYXRlMyA9IGNvbHVtbiArIDEgIT09IDEwID8gZW5lbXlCb2FyZFtyb3ddW2NvbHVtbiArIDFdIDogMTtcbiAgICBjb25zdCBjb29yZGluYXRlNCA9IGNvbHVtbiAtIDEgIT09IC0xID8gZW5lbXlCb2FyZFtyb3ddW2NvbHVtbiAtIDFdIDogMTtcblxuICAgIGlmIChjb29yZGluYXRlMSAhPT0gMSAmJiBjb29yZGluYXRlMSAhPT0gLTEpIHJldHVybiBbcm93ICsgMSwgY29sdW1uXTtcbiAgICBlbHNlIGlmIChjb29yZGluYXRlMiAhPT0gMSAmJiBjb29yZGluYXRlMiAhPT0gLTEpIHJldHVybiBbcm93IC0gMSwgY29sdW1uXTtcbiAgICBlbHNlIGlmIChjb29yZGluYXRlMyAhPT0gMSAmJiBjb29yZGluYXRlMyAhPT0gLTEpIHJldHVybiBbcm93LCBjb2x1bW4gKyAxXTtcbiAgICBlbHNlIGlmIChjb29yZGluYXRlNCAhPT0gMSAmJiBjb29yZGluYXRlNCAhPT0gLTEpIHJldHVybiBbcm93LCBjb2x1bW4gLSAxXTtcbiAgICBlbHNlIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICB0aGlzLl9sZW5ndGggPSB0aGlzLmdldExlbmd0aEZyb21UeXBlKHR5cGUpO1xuICAgIHRoaXMuX2hpdHMgPSAwO1xuICAgIHRoaXMuX2lzU3VuayA9IGZhbHNlO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuX2hpdHMgKz0gMTtcbiAgICBpZiAodGhpcy5faGl0cyA+PSB0aGlzLl9sZW5ndGgpIHRoaXMuX2lzU3VuayA9IHRydWU7XG4gIH1cblxuICBnZXRMZW5ndGhGcm9tVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcnJpZXI6IDUsXG4gICAgICBiYXR0bGVzaGlwOiA0LFxuICAgICAgY3J1aXNlcjogMyxcbiAgICAgIHN1Ym1hcmluZTogMyxcbiAgICAgIGRlc3Ryb3llcjogMixcbiAgICB9W3R5cGVdO1xuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xuICB9XG5cbiAgZ2V0IGhpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hpdHM7XG4gIH1cblxuICBnZXQgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1N1bms7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IEdhbWVMb29wIH0gZnJvbSBcIi4vY29udHJvbGxlcnMvZ2FtZUxvb3BcIjtcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzXCI7XG5cbkdhbWVMb29wLnNldFVwTWFpbk1lbnUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==