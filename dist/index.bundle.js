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
.main-menu__gameBoard,
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
`, "",{"version":3,"sources":["webpack://./src/assets/styles/app.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;AACA;;EAEE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;;EAEvB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B","sourcesContent":[".page {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  gap: 200px;\n}\n.main-menu__gameBoard,\n.gameBoard {\n  position: relative;\n  display: flex;\n  width: 550px;\n  flex-wrap: wrap;\n}\n\n.cell {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n.cell:hover {\n  opacity: 0.7;\n}\n\n.ship {\n  background-color: blue;\n}\n\n.hit {\n  background-color: red;\n}\n\n.miss {\n  background-color: gray;\n}\n\n.blocker {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.finish-menu {\n  position: absolute;\n  width: 500px;\n  height: 500px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  background-color: #111;\n}\n\n.hide {\n  display: none;\n}\n\n.ship-position {\n  position: absolute;\n  display: none;\n  background-color: blue;\n}\n\n.cell:hover > .ship-position {\n  display: inline;\n}\n\n.horizontal {\n  height: 50px;\n}\n\n.vertical {\n  width: 50px;\n}\n\n.carrier.horizontal {\n  width: 259px;\n  color: rgb(166, 87, 87);\n}\n\n.carrier.vertical {\n  height: 259px;\n  color: rgb(166, 87, 87);\n}\n\n.battleship.horizontal {\n  width: 209px;\n  color: rgb(166, 148, 87);\n}\n\n.battleship.vertical {\n  height: 209px;\n  color: rgb(166, 148, 87);\n}\n\n.cruiser.horizontal {\n  width: 159px;\n  color: rgb(115, 166, 87);\n}\n\n.cruiser.vertical {\n  height: 159px;\n  color: rgb(115, 166, 87);\n}\n\n.submarine.horizontal {\n  width: 159px;\n  color: rgb(87, 152, 166);\n}\n\n.submarine.vertical {\n  height: 159px;\n  color: rgb(87, 152, 166);\n}\n\n.destroyer.horizontal {\n  width: 109px;\n  color: rgb(132, 87, 166);\n}\n\n.destroyer.vertical {\n  height: 109px;\n  color: rgb(132, 87, 166);\n}\n"],"sourceRoot":""}]);
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


const finishMenuComponent = (() => {
  const setUp = (player) => {
    const finishMenu = document.createElement("div");
    const title = document.createElement("h3");
    const button = document.createElement("button");

    finishMenu.classList.add("finish-menu");
    finishMenu.classList.add("hide");

    title.textContent = "";
    button.textContent = "Play Again";

    button.addEventListener("click", playAgain);

    finishMenu.appendChild(title);
    finishMenu.appendChild(button);

    return finishMenu;
  };

  function playAgain(event) {
    event.target.parentNode.classList.add("hide");
    _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.setUpNewGame();
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
  let myPlayer1 = null;
  let myPlayer2 = null;
  let actualShip = "carrier";
  let isHorizontal = true;

  const setUp = (player1, player2) => {
    const mainMenu = document.createElement("div");
    mainMenu.classList.add("main-menu");

    myPlayer1 = player1;
    myPlayer2 = player2;

    mainMenu.appendChild(createButton());
    mainMenu.appendChild(createGameBoard());

    return mainMenu;
  };

  function createButton() {
    const button = document.createElement("button");
    button.textContent = "Rotate";
    button.addEventListener("click", rotateShip);
    return button;
  }

  function createGameBoard() {
    const gameBoard = document.createElement("div");
    const myBoard = myPlayer1.board.board;
    gameBoard.classList.add("main-menu__gameBoard");

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
    shipPosition.classList.add("horizontal");
    shipPosition.classList.add(actualShip);

    cell.dataset.row = row;
    cell.dataset.column = column;

    cell.addEventListener("click", addShip);

    cell.appendChild(shipPosition);

    if (isShip) cell.classList.add("ship");

    return cell;
  }

  function addShip(e) {
    const mainMenu = document.querySelector(".main-menu");
    const row = +e.target.parentNode.dataset.row;
    const column = +e.target.parentNode.dataset.column;

    const isPlaced = myPlayer1.board.placeShip(
      row,
      column,
      actualShip,
      isHorizontal
    );
    console.log(isPlaced);

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
      _controllers_gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop.setUpNewGame();
      return;
    }

    mainMenu.childNodes[1].remove();
    mainMenu.appendChild(createGameBoard());
  }

  function rotateShip() {
    const shipsPosition = document.querySelectorAll(".ship-position");
    shipsPosition.forEach((ship) => {
      ship.classList.toggle("vertical");
      ship.classList.toggle("horizontal");
    });

    isHorizontal = isHorizontal ? false : true;
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




const pageComponent = (() => {
  const setUp = (player1, player2) => {
    const page = document.createElement("div");
    page.classList.add("page");

    page.appendChild(_mainMenu__WEBPACK_IMPORTED_MODULE_2__.mainMenu.setUp(player1, player2));
    //page.appendChild(gameBoardComponent.setUp(player1));
    //page.appendChild(gameBoardComponent.setUp(player2));
    page.appendChild(_finishMenu__WEBPACK_IMPORTED_MODULE_0__.finishMenuComponent.setUp());

    return page;
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
  let player1 = null;
  let player2 = null;

  const setUpMainMenu = () => {
    const gameBoard1 = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard();
    const gameBoard2 = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard();

    player1 = new _factories_player__WEBPACK_IMPORTED_MODULE_0__.Player(0, "human", gameBoard1);
    player2 = new _factories_player__WEBPACK_IMPORTED_MODULE_0__.Player(1, "bot", gameBoard2);

    player2.board.generateRandomBoard();

    cleanNode(document.body);
    document.body.appendChild(_components_page__WEBPACK_IMPORTED_MODULE_2__.pageComponent.setUp(player1, player2));
  };

  const setUpNewGame = () => {
    const page = document.querySelector(".page");
    cleanNode(page);
    page.appendChild(_components_gameboard__WEBPACK_IMPORTED_MODULE_3__.gameBoardComponent.setUp(player1));
    page.appendChild(_components_gameboard__WEBPACK_IMPORTED_MODULE_3__.gameBoardComponent.setUp(player2));
  };

  const attack = (row, column) => {
    _components_gameboard__WEBPACK_IMPORTED_MODULE_3__.gameBoardComponent.changeCellColor(
      player2.board.receiveAttack(row, column),
      player2.number,
      row,
      column
    );

    if (player2.board.isGameOver()) showFinishMenu();
    else attackBot();
  };

  function attackBot() {
    const aiCoord = player2.getCoordinates(player1.board.board);

    _components_gameboard__WEBPACK_IMPORTED_MODULE_3__.gameBoardComponent.changeCellColor(
      player1.board.receiveAttack(aiCoord[0], aiCoord[1]),
      player1.number,
      aiCoord[0],
      aiCoord[1]
    );

    if (player1.board.isGameOver()) showFinishMenu();
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

  return { setUpMainMenu, setUpNewGame, attack };
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

  getCoordinates(board) {
    let boardPossibleHits = [];

    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {
        if (board[row][column] !== 1 && board[row][column] !== -1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvRk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0JBQXNCLFVBQVU7QUFDaEMsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNqQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBa0Q7QUFDakI7O0FBRWpDLDJEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzljYzUiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvYmxvY2tlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZmluaXNoTWVudS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9tYWluTWVudS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXJzL2dhbWVMb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDIwMHB4O1xufVxuLm1haW4tbWVudV9fZ2FtZUJvYXJkLFxuLmdhbWVCb2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDU1MHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jZWxsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2VsbDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cbi5ibG9ja2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZmluaXNoLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGlwLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uY2VsbDpob3ZlciA+IC5zaGlwLXBvc2l0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uaG9yaXpvbnRhbCB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnZlcnRpY2FsIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5jYXJyaWVyLmhvcml6b250YWwge1xuICB3aWR0aDogMjU5cHg7XG4gIGNvbG9yOiByZ2IoMTY2LCA4NywgODcpO1xufVxuXG4uY2Fycmllci52ZXJ0aWNhbCB7XG4gIGhlaWdodDogMjU5cHg7XG4gIGNvbG9yOiByZ2IoMTY2LCA4NywgODcpO1xufVxuXG4uYmF0dGxlc2hpcC5ob3Jpem9udGFsIHtcbiAgd2lkdGg6IDIwOXB4O1xuICBjb2xvcjogcmdiKDE2NiwgMTQ4LCA4Nyk7XG59XG5cbi5iYXR0bGVzaGlwLnZlcnRpY2FsIHtcbiAgaGVpZ2h0OiAyMDlweDtcbiAgY29sb3I6IHJnYigxNjYsIDE0OCwgODcpO1xufVxuXG4uY3J1aXNlci5ob3Jpem9udGFsIHtcbiAgd2lkdGg6IDE1OXB4O1xuICBjb2xvcjogcmdiKDExNSwgMTY2LCA4Nyk7XG59XG5cbi5jcnVpc2VyLnZlcnRpY2FsIHtcbiAgaGVpZ2h0OiAxNTlweDtcbiAgY29sb3I6IHJnYigxMTUsIDE2NiwgODcpO1xufVxuXG4uc3VibWFyaW5lLmhvcml6b250YWwge1xuICB3aWR0aDogMTU5cHg7XG4gIGNvbG9yOiByZ2IoODcsIDE1MiwgMTY2KTtcbn1cblxuLnN1Ym1hcmluZS52ZXJ0aWNhbCB7XG4gIGhlaWdodDogMTU5cHg7XG4gIGNvbG9yOiByZ2IoODcsIDE1MiwgMTY2KTtcbn1cblxuLmRlc3Ryb3llci5ob3Jpem9udGFsIHtcbiAgd2lkdGg6IDEwOXB4O1xuICBjb2xvcjogcmdiKDEzMiwgODcsIDE2Nik7XG59XG5cbi5kZXN0cm95ZXIudmVydGljYWwge1xuICBoZWlnaHQ6IDEwOXB4O1xuICBjb2xvcjogcmdiKDEzMiwgODcsIDE2Nik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTs7RUFFYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7O0VBRXZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMDBweDtcXG59XFxuLm1haW4tbWVudV9fZ2FtZUJvYXJkLFxcbi5nYW1lQm9hcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA1NTBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNlbGwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmJsb2NrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5maW5pc2gtbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2hpcC1wb3NpdGlvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLmNlbGw6aG92ZXIgPiAuc2hpcC1wb3NpdGlvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5ob3Jpem9udGFsIHtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnZlcnRpY2FsIHtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uY2Fycmllci5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiAyNTlweDtcXG4gIGNvbG9yOiByZ2IoMTY2LCA4NywgODcpO1xcbn1cXG5cXG4uY2Fycmllci52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IDI1OXB4O1xcbiAgY29sb3I6IHJnYigxNjYsIDg3LCA4Nyk7XFxufVxcblxcbi5iYXR0bGVzaGlwLmhvcml6b250YWwge1xcbiAgd2lkdGg6IDIwOXB4O1xcbiAgY29sb3I6IHJnYigxNjYsIDE0OCwgODcpO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IDIwOXB4O1xcbiAgY29sb3I6IHJnYigxNjYsIDE0OCwgODcpO1xcbn1cXG5cXG4uY3J1aXNlci5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiAxNTlweDtcXG4gIGNvbG9yOiByZ2IoMTE1LCAxNjYsIDg3KTtcXG59XFxuXFxuLmNydWlzZXIudmVydGljYWwge1xcbiAgaGVpZ2h0OiAxNTlweDtcXG4gIGNvbG9yOiByZ2IoMTE1LCAxNjYsIDg3KTtcXG59XFxuXFxuLnN1Ym1hcmluZS5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiAxNTlweDtcXG4gIGNvbG9yOiByZ2IoODcsIDE1MiwgMTY2KTtcXG59XFxuXFxuLnN1Ym1hcmluZS52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IDE1OXB4O1xcbiAgY29sb3I6IHJnYig4NywgMTUyLCAxNjYpO1xcbn1cXG5cXG4uZGVzdHJveWVyLmhvcml6b250YWwge1xcbiAgd2lkdGg6IDEwOXB4O1xcbiAgY29sb3I6IHJnYigxMzIsIDg3LCAxNjYpO1xcbn1cXG5cXG4uZGVzdHJveWVyLnZlcnRpY2FsIHtcXG4gIGhlaWdodDogMTA5cHg7XFxuICBjb2xvcjogcmdiKDEzMiwgODcsIDE2Nik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBibG9ja2VyQ29tcG9uZW50ID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0VXAgPSAoaXNCb3QpID0+IHtcbiAgICBjb25zdCBibG9ja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBibG9ja2VyLmNsYXNzTGlzdC5hZGQoXCJibG9ja2VyXCIpO1xuXG4gICAgaWYgKGlzQm90KSBibG9ja2VyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgcmV0dXJuIGJsb2NrZXI7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0VXAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBHYW1lTG9vcCB9IGZyb20gXCIuLi9jb250cm9sbGVycy9nYW1lTG9vcFwiO1xuXG5leHBvcnQgY29uc3QgZmluaXNoTWVudUNvbXBvbmVudCA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldFVwID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGZpbmlzaE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBmaW5pc2hNZW51LmNsYXNzTGlzdC5hZGQoXCJmaW5pc2gtbWVudVwiKTtcbiAgICBmaW5pc2hNZW51LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxheSBBZ2FpblwiO1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5QWdhaW4pO1xuXG4gICAgZmluaXNoTWVudS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZmluaXNoTWVudS5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIGZpbmlzaE1lbnU7XG4gIH07XG5cbiAgZnVuY3Rpb24gcGxheUFnYWluKGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgR2FtZUxvb3Auc2V0VXBOZXdHYW1lKCk7XG4gIH1cblxuICByZXR1cm4geyBzZXRVcCB9O1xufSkoKTtcbiIsImltcG9ydCB7IEdhbWVMb29wIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2dhbWVMb29wXCI7XG5pbXBvcnQgeyBibG9ja2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vYmxvY2tlclwiO1xuXG5leHBvcnQgY29uc3QgZ2FtZUJvYXJkQ29tcG9uZW50ID0gKCgpID0+IHtcbiAgbGV0IG15Qm9hcmQgPSBudWxsO1xuXG4gIGNvbnN0IHNldFVwID0gKHBsYXllcikgPT4ge1xuICAgIG15Qm9hcmQgPSBwbGF5ZXIuYm9hcmQ7XG5cbiAgICBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbWVCb2FyZC5jbGFzc0xpc3QuYWRkKFwiZ2FtZUJvYXJkXCIpO1xuICAgIGdhbWVCb2FyZC5kYXRhc2V0LnBsYXllciA9IFwiXCIgKyBwbGF5ZXIubnVtYmVyO1xuXG4gICAgbGV0IGlzU2hpcCA9IGZhbHNlO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMTA7IGNvbHVtbisrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbXlCb2FyZC5ib2FyZFtyb3ddW2NvbHVtbl0gPT0gXCJvYmplY3RcIikgaXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgZ2FtZUJvYXJkLmFwcGVuZENoaWxkKGNyZWF0ZUNlbGwocm93LCBjb2x1bW4sIGlzU2hpcCkpO1xuICAgICAgICBpc1NoaXAgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tlckNvbXBvbmVudC5zZXRVcChwbGF5ZXIudHlwZSA9PT0gXCJib3RcIikpO1xuXG4gICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVDZWxsKHJvdywgY29sdW1uLCBpc1NoaXApIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgIGNlbGwuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgY2VsbC5kYXRhc2V0LmNvbHVtbiA9IGNvbHVtbjtcblxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFjayk7XG5cbiAgICBpZiAoaXNTaGlwKSBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuXG4gICAgcmV0dXJuIGNlbGw7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2soZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgR2FtZUxvb3AuYXR0YWNrKHRhcmdldC5kYXRhc2V0LnJvdywgdGFyZ2V0LmRhdGFzZXQuY29sdW1uKTtcbiAgfVxuXG4gIGNvbnN0IGNoYW5nZUNlbGxDb2xvciA9IChpc0hpdCwgbnVtYmVyLCByb3csIGNvbHVtbikgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGxheWVyPVwiJHtudW1iZXJ9XCJdYCk7XG4gICAgY29uc3QgY2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sdW1uPVwiJHtjb2x1bW59XCJdYFxuICAgICk7XG5cbiAgICBpZiAoaXNIaXQpIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICB9XG5cbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2spO1xuICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0VXAsIGNoYW5nZUNlbGxDb2xvciB9O1xufSkoKTtcbiIsImltcG9ydCB7IEdhbWVMb29wIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2dhbWVMb29wXCI7XG5cbmV4cG9ydCBjb25zdCBtYWluTWVudSA9ICgoKSA9PiB7XG4gIGxldCBteVBsYXllcjEgPSBudWxsO1xuICBsZXQgbXlQbGF5ZXIyID0gbnVsbDtcbiAgbGV0IGFjdHVhbFNoaXAgPSBcImNhcnJpZXJcIjtcbiAgbGV0IGlzSG9yaXpvbnRhbCA9IHRydWU7XG5cbiAgY29uc3Qgc2V0VXAgPSAocGxheWVyMSwgcGxheWVyMikgPT4ge1xuICAgIGNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluTWVudS5jbGFzc0xpc3QuYWRkKFwibWFpbi1tZW51XCIpO1xuXG4gICAgbXlQbGF5ZXIxID0gcGxheWVyMTtcbiAgICBteVBsYXllcjIgPSBwbGF5ZXIyO1xuXG4gICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKCkpO1xuICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGNyZWF0ZUdhbWVCb2FyZCgpKTtcblxuICAgIHJldHVybiBtYWluTWVudTtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlJvdGF0ZVwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm90YXRlU2hpcCk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUdhbWVCb2FyZCgpIHtcbiAgICBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG15Qm9hcmQgPSBteVBsYXllcjEuYm9hcmQuYm9hcmQ7XG4gICAgZ2FtZUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJtYWluLW1lbnVfX2dhbWVCb2FyZFwiKTtcblxuICAgIGxldCBpc1NoaXAgPSBmYWxzZTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDEwOyBjb2x1bW4rKykge1xuICAgICAgICBpZiAodHlwZW9mIG15Qm9hcmRbcm93XVtjb2x1bW5dID09IFwib2JqZWN0XCIpIGlzU2hpcCA9IHRydWU7XG4gICAgICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChjcmVhdGVDZWxsKHJvdywgY29sdW1uLCBpc1NoaXApKTtcbiAgICAgICAgaXNTaGlwID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNlbGwocm93LCBjb2x1bW4sIGlzU2hpcCkge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNoaXBQb3NpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuXG4gICAgc2hpcFBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXBvc2l0aW9uXCIpO1xuICAgIHNoaXBQb3NpdGlvbi5jbGFzc0xpc3QuYWRkKFwiaG9yaXpvbnRhbFwiKTtcbiAgICBzaGlwUG9zaXRpb24uY2xhc3NMaXN0LmFkZChhY3R1YWxTaGlwKTtcblxuICAgIGNlbGwuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgY2VsbC5kYXRhc2V0LmNvbHVtbiA9IGNvbHVtbjtcblxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFNoaXApO1xuXG4gICAgY2VsbC5hcHBlbmRDaGlsZChzaGlwUG9zaXRpb24pO1xuXG4gICAgaWYgKGlzU2hpcCkgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcblxuICAgIHJldHVybiBjZWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkU2hpcChlKSB7XG4gICAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWVudVwiKTtcbiAgICBjb25zdCByb3cgPSArZS50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LnJvdztcbiAgICBjb25zdCBjb2x1bW4gPSArZS50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmNvbHVtbjtcblxuICAgIGNvbnN0IGlzUGxhY2VkID0gbXlQbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcChcbiAgICAgIHJvdyxcbiAgICAgIGNvbHVtbixcbiAgICAgIGFjdHVhbFNoaXAsXG4gICAgICBpc0hvcml6b250YWxcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKGlzUGxhY2VkKTtcblxuICAgIGlmICghaXNQbGFjZWQpIHJldHVybjtcblxuICAgIGFjdHVhbFNoaXAgPVxuICAgICAgYWN0dWFsU2hpcCA9PT0gXCJjYXJyaWVyXCJcbiAgICAgICAgPyBcImJhdHRsZXNoaXBcIlxuICAgICAgICA6IGFjdHVhbFNoaXAgPT09IFwiYmF0dGxlc2hpcFwiXG4gICAgICAgID8gXCJjcnVpc2VyXCJcbiAgICAgICAgOiBhY3R1YWxTaGlwID09PSBcImNydWlzZXJcIlxuICAgICAgICA/IFwic3VibWFyaW5lXCJcbiAgICAgICAgOiBhY3R1YWxTaGlwID09PSBcInN1Ym1hcmluZVwiXG4gICAgICAgID8gXCJkZXN0cm95ZXJcIlxuICAgICAgICA6IFwiXCI7XG5cbiAgICBpZiAoYWN0dWFsU2hpcCA9PT0gXCJcIikge1xuICAgICAgR2FtZUxvb3Auc2V0VXBOZXdHYW1lKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWFpbk1lbnUuY2hpbGROb2Rlc1sxXS5yZW1vdmUoKTtcbiAgICBtYWluTWVudS5hcHBlbmRDaGlsZChjcmVhdGVHYW1lQm9hcmQoKSk7XG4gIH1cblxuICBmdW5jdGlvbiByb3RhdGVTaGlwKCkge1xuICAgIGNvbnN0IHNoaXBzUG9zaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAtcG9zaXRpb25cIik7XG4gICAgc2hpcHNQb3NpdGlvbi5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgIHNoaXAuY2xhc3NMaXN0LnRvZ2dsZShcImhvcml6b250YWxcIik7XG4gICAgfSk7XG5cbiAgICBpc0hvcml6b250YWwgPSBpc0hvcml6b250YWwgPyBmYWxzZSA6IHRydWU7XG4gIH1cblxuICByZXR1cm4geyBzZXRVcCB9O1xufSkoKTtcbiIsImltcG9ydCB7IGZpbmlzaE1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9maW5pc2hNZW51XCI7XG5pbXBvcnQgeyBnYW1lQm9hcmRDb21wb25lbnQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IG1haW5NZW51IH0gZnJvbSBcIi4vbWFpbk1lbnVcIjtcblxuZXhwb3J0IGNvbnN0IHBhZ2VDb21wb25lbnQgPSAoKCkgPT4ge1xuICBjb25zdCBzZXRVcCA9IChwbGF5ZXIxLCBwbGF5ZXIyKSA9PiB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGFnZS5jbGFzc0xpc3QuYWRkKFwicGFnZVwiKTtcblxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQobWFpbk1lbnUuc2V0VXAocGxheWVyMSwgcGxheWVyMikpO1xuICAgIC8vcGFnZS5hcHBlbmRDaGlsZChnYW1lQm9hcmRDb21wb25lbnQuc2V0VXAocGxheWVyMSkpO1xuICAgIC8vcGFnZS5hcHBlbmRDaGlsZChnYW1lQm9hcmRDb21wb25lbnQuc2V0VXAocGxheWVyMikpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoZmluaXNoTWVudUNvbXBvbmVudC5zZXRVcCgpKTtcblxuICAgIHJldHVybiBwYWdlO1xuICB9O1xuXG4gIHJldHVybiB7IHNldFVwIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL2ZhY3Rvcmllcy9wbGF5ZXJcIjtcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuLi9mYWN0b3JpZXMvZ2FtZWJvYXJkXCI7XG5cbmltcG9ydCB7IHBhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlXCI7XG5pbXBvcnQgeyBnYW1lQm9hcmRDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lYm9hcmRcIjtcblxuZXhwb3J0IGNvbnN0IEdhbWVMb29wID0gKCgpID0+IHtcbiAgbGV0IHBsYXllcjEgPSBudWxsO1xuICBsZXQgcGxheWVyMiA9IG51bGw7XG5cbiAgY29uc3Qgc2V0VXBNYWluTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lQm9hcmQxID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgIGNvbnN0IGdhbWVCb2FyZDIgPSBuZXcgR2FtZUJvYXJkKCk7XG5cbiAgICBwbGF5ZXIxID0gbmV3IFBsYXllcigwLCBcImh1bWFuXCIsIGdhbWVCb2FyZDEpO1xuICAgIHBsYXllcjIgPSBuZXcgUGxheWVyKDEsIFwiYm90XCIsIGdhbWVCb2FyZDIpO1xuXG4gICAgcGxheWVyMi5ib2FyZC5nZW5lcmF0ZVJhbmRvbUJvYXJkKCk7XG5cbiAgICBjbGVhbk5vZGUoZG9jdW1lbnQuYm9keSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlQ29tcG9uZW50LnNldFVwKHBsYXllcjEsIHBsYXllcjIpKTtcbiAgfTtcblxuICBjb25zdCBzZXRVcE5ld0dhbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZVwiKTtcbiAgICBjbGVhbk5vZGUocGFnZSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChnYW1lQm9hcmRDb21wb25lbnQuc2V0VXAocGxheWVyMSkpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkQ29tcG9uZW50LnNldFVwKHBsYXllcjIpKTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2sgPSAocm93LCBjb2x1bW4pID0+IHtcbiAgICBnYW1lQm9hcmRDb21wb25lbnQuY2hhbmdlQ2VsbENvbG9yKFxuICAgICAgcGxheWVyMi5ib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKSxcbiAgICAgIHBsYXllcjIubnVtYmVyLFxuICAgICAgcm93LFxuICAgICAgY29sdW1uXG4gICAgKTtcblxuICAgIGlmIChwbGF5ZXIyLmJvYXJkLmlzR2FtZU92ZXIoKSkgc2hvd0ZpbmlzaE1lbnUoKTtcbiAgICBlbHNlIGF0dGFja0JvdCgpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGF0dGFja0JvdCgpIHtcbiAgICBjb25zdCBhaUNvb3JkID0gcGxheWVyMi5nZXRDb29yZGluYXRlcyhwbGF5ZXIxLmJvYXJkLmJvYXJkKTtcblxuICAgIGdhbWVCb2FyZENvbXBvbmVudC5jaGFuZ2VDZWxsQ29sb3IoXG4gICAgICBwbGF5ZXIxLmJvYXJkLnJlY2VpdmVBdHRhY2soYWlDb29yZFswXSwgYWlDb29yZFsxXSksXG4gICAgICBwbGF5ZXIxLm51bWJlcixcbiAgICAgIGFpQ29vcmRbMF0sXG4gICAgICBhaUNvb3JkWzFdXG4gICAgKTtcblxuICAgIGlmIChwbGF5ZXIxLmJvYXJkLmlzR2FtZU92ZXIoKSkgc2hvd0ZpbmlzaE1lbnUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dGaW5pc2hNZW51KCkge1xuICAgIGNvbnN0IGZpbmlzaE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbmlzaC1tZW51XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZmluaXNoTWVudS5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XG5cbiAgICBmaW5pc2hNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJHYW1lIE92ZXJcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFuTm9kZShub2RlKSB7XG4gICAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHNldFVwTWFpbk1lbnUsIHNldFVwTmV3R2FtZSwgYXR0YWNrIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgQXJyYXkoMTApLmZpbGwoMCkubWFwKCgpID0+IG5ldyBBcnJheSgxMCkuZmlsbCgwKSk7XG4gIH1cblxuICBwbGFjZVNoaXAocm93LCBjb2x1bW4sIHNoaXBUeXBlLCBpc0hvcml6b250YWwpIHtcbiAgICBjb25zdCB0ZW1wb3JhbEJvYXJkID0gdGhpcy5kZWVwQ29weUJvYXJkKCk7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHNoaXBUeXBlKTtcblxuICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgIGNvbnN0IG1heCA9IGNvbHVtbiArIHNoaXAubGVuZ3RoO1xuICAgICAgaWYgKG1heCA+IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gY29sdW1uOyBpbmRleCA8IG1heDsgaW5kZXgrKykge1xuICAgICAgICBpZiAodHlwZW9mIHRlbXBvcmFsQm9hcmRbcm93XVtpbmRleF0gPT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGVtcG9yYWxCb2FyZFtyb3ddW2luZGV4XSA9IHNoaXA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1heCA9IHJvdyArIHNoaXAubGVuZ3RoO1xuICAgICAgaWYgKG1heCA+IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gcm93OyBpbmRleCA8IG1heDsgaW5kZXgrKykge1xuICAgICAgICBpZiAodHlwZW9mIHRlbXBvcmFsQm9hcmRbaW5kZXhdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGVtcG9yYWxCb2FyZFtpbmRleF1bY29sdW1uXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5ib2FyZCA9IHRlbXBvcmFsQm9hcmQ7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKSB7XG4gICAgbGV0IHRhcmdldCA9IHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dO1xuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRhcmdldC5oaXQoKTtcbiAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dID0gMTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAwKSB7XG4gICAgICB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXSA9IC0xO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlzR2FtZU92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuZmxhdCgpLmV2ZXJ5KChjZWxsKSA9PiB0eXBlb2YgY2VsbCAhPT0gXCJvYmplY3RcIik7XG4gIH1cblxuICBkZWVwQ29weUJvYXJkKCkge1xuICAgIGNvbnN0IG51bVJvd3MgPSB0aGlzLmJvYXJkLmxlbmd0aDtcbiAgICBjb25zdCBudW1Db2xzID0gdGhpcy5ib2FyZFswXS5sZW5ndGg7XG5cbiAgICBjb25zdCB0ZW1wb3JhbEJvYXJkID0gbmV3IEFycmF5KG51bVJvd3MpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUm93czsgaSsrKSB7XG4gICAgICB0ZW1wb3JhbEJvYXJkW2ldID0gbmV3IEFycmF5KG51bUNvbHMpO1xuICAgIH1cblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IG51bVJvd3M7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBudW1Db2xzOyBjb2wrKykge1xuICAgICAgICB0ZW1wb3JhbEJvYXJkW3Jvd11bY29sXSA9IHRoaXMuYm9hcmRbcm93XVtjb2xdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZW1wb3JhbEJvYXJkO1xuICB9XG5cbiAgZ2V0UmFuZG9tSW50KG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKG1heCkpO1xuICB9XG5cbiAgZ2V0UmFuZG9tRGlyZWN0aW9uKCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41OyAvLyBIb3Jpem9udGFsOiB0cnVlLCBWZXJ0aWNhbDogZmFsc2VcbiAgfVxuXG4gIGdlbmVyYXRlUmFuZG9tQm9hcmQoKSB7XG4gICAgbGV0IHR5cGVzU2hpcHMgPSBbXG4gICAgICBcImNhcnJpZXJcIixcbiAgICAgIFwiYmF0dGxlc2hpcFwiLFxuICAgICAgXCJjcnVpc2VyXCIsXG4gICAgICBcInN1Ym1hcmluZVwiLFxuICAgICAgXCJkZXN0cm95ZXJcIixcbiAgICBdO1xuXG4gICAgZm9yIChjb25zdCBzaGlwVHlwZSBvZiB0eXBlc1NoaXBzKSB7XG4gICAgICBsZXQgaXNQbGFjZWQgPSBmYWxzZTtcbiAgICAgIHdoaWxlICghaXNQbGFjZWQpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG4gICAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMuZ2V0UmFuZG9tRGlyZWN0aW9uKCk7XG4gICAgICAgIGlzUGxhY2VkID0gdGhpcy5wbGFjZVNoaXAocm93LCBjb2x1bW4sIHNoaXBUeXBlLCBpc0hvcml6b250YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG51bWJlciwgdHlwZSwgYm9hcmQpIHtcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgfVxuXG4gIGdldENvb3JkaW5hdGVzKGJvYXJkKSB7XG4gICAgbGV0IGJvYXJkUG9zc2libGVIaXRzID0gW107XG5cbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDEwOyBjb2x1bW4rKykge1xuICAgICAgICBpZiAoYm9hcmRbcm93XVtjb2x1bW5dICE9PSAxICYmIGJvYXJkW3Jvd11bY29sdW1uXSAhPT0gLTEpIHtcbiAgICAgICAgICBib2FyZFBvc3NpYmxlSGl0cy5wdXNoKFtyb3csIGNvbHVtbl0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJhbmRvbU9wdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkUG9zc2libGVIaXRzLmxlbmd0aCk7XG5cbiAgICByZXR1cm4gYm9hcmRQb3NzaWJsZUhpdHNbcmFuZG9tT3B0aW9uXTtcbiAgfVxuXG4gIGdldEhvcml6b250YWwoKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHRoaXMuX2xlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoRnJvbVR5cGUodHlwZSk7XG4gICAgdGhpcy5faGl0cyA9IDA7XG4gICAgdGhpcy5faXNTdW5rID0gZmFsc2U7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5faGl0cyArPSAxO1xuICAgIGlmICh0aGlzLl9oaXRzID49IHRoaXMuX2xlbmd0aCkgdGhpcy5faXNTdW5rID0gdHJ1ZTtcbiAgfVxuXG4gIGdldExlbmd0aEZyb21UeXBlKHR5cGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FycmllcjogNSxcbiAgICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgICBjcnVpc2VyOiAzLFxuICAgICAgc3VibWFyaW5lOiAzLFxuICAgICAgZGVzdHJveWVyOiAyLFxuICAgIH1bdHlwZV07XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG4gIH1cblxuICBnZXQgaGl0cygpIHtcbiAgICByZXR1cm4gdGhpcy5faGl0cztcbiAgfVxuXG4gIGdldCBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU3VuaztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgR2FtZUxvb3AgfSBmcm9tIFwiLi9jb250cm9sbGVycy9nYW1lTG9vcFwiO1xuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGVzL2FwcC5jc3NcIjtcblxuR2FtZUxvb3Auc2V0VXBNYWluTWVudSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9