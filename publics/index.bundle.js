/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.hello {\\r\\n  color: purple;\\r\\n}\\r\\n\\r\\n /* Leaflet */\\r\\n #tileMapId {\\r\\n   height: 225px;\\r\\n\\r\\n  }\\r\\n\\r\\n\\r\\n#aqiDivId {\\r\\n  background-color: grey;\\r\\n  height: 150px;\\r\\n  width: 150px;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n#getPosButton2 {\\r\\n\\r\\n\\r\\n}\\r\\n\\r\\n#info-container {\\r\\n  position: relative;\\r\\n  top: -60px;\\r\\n}\\r\\n\\r\\n#exploreMap {\\r\\n  height: 450px;\\r\\n }\\r\\n\\r\\n/* #exploreTileId {\\r\\n  background-color: grey;\\r\\n  height: 40px;\\r\\n  width: 40px;\\r\\n} */\\r\\n.leaflet-popup-content-wrapper .leaflet-popup-content {\\r\\n  margin: 4px;\\r\\n  z-index: -1000;\\r\\n}\\r\\n\\r\\n#exploreAqiId {\\r\\n  color: white;\\r\\n  border-radius: 5px;\\r\\n  text-align: center;\\r\\n  pointer-events: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://air-quality-meter/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://air-quality-meter/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://air-quality-meter/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://air-quality-meter/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://air-quality-meter/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://air-quality-meter/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://air-quality-meter/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://air-quality-meter/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://air-quality-meter/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\r\n\r\nlet cityData;\r\nlet exploreData;\r\n\r\n//-------------------- initialisation with ip-based data ---------------------\r\nasync function getDataFromIp(cityName) {\r\n  try {\r\n    let response = await fetch(`https://api.waqi.info/feed/here/?token=${\"fe97b410940d30e3b873d6f3a802bc48f31d2f50\"}`);\r\n    let cityDataTemporary = await response.json();\r\n    if (cityDataTemporary.status == \"error\") throw cityDataTemporary;\r\n    cityData = cityDataTemporary;\r\n    updateInfo();\r\n    tileMap.setView(cityData.data.city.geo, 11);\r\n  } catch (err) {\r\n    if (err.status == \"error\" && err.data == \"Over quota\") {\r\n      alert(\"Server sovvracarico di richieste, attendere un istante e riprovare\");\r\n    } else if (err.status == \"error\" && err.data == \"Invalid key\") {\r\n      alert(\"Chiave API invalida, contattare amministratore del sito web\");\r\n    } else {\r\n      alert(\"Si è verificato un errore: \" + err.name + \": \" + err.message);\r\n    }\r\n  }\r\n};\r\n\r\ngetDataFromIp();\r\n\r\n// ----------------------- search city from input field-----------------------\r\nasync function getDataFromInput(cityName) {\r\n  try {\r\n    let response = await fetch(`https://api.waqi.info/feed/${cityName}/?token=${\"fe97b410940d30e3b873d6f3a802bc48f31d2f50\"}`);\r\n    let cityDataTemporary = await response.json();\r\n    if (cityDataTemporary.status == \"error\") throw cityDataTemporary;\r\n    cityData = cityDataTemporary;\r\n    updateInfo();\r\n    tileMap.setView(cityData.data.city.geo, 11);\r\n  } catch (err) {\r\n\r\n    if (err.status == \"error\" && err.data == \"Over quota\") {\r\n      alert(\"Server sovvracarico di richieste, attendere un istante e riprovare\");\r\n    } else if (err.status == \"error\" && err.data == \"Invalid key\") {\r\n      alert(\"Chiave API invalida, contattare amministratore del sito web\");\r\n    } else if (err.status == \"error\" && err.data == \"Unknown station\") {\r\n      alert(\"Città sconosciuta, prego inserire un altro\");\r\n    } else {\r\n      alert(\"Si è verificato un errore: \" + err.name + \": \" + err.message);\r\n    }\r\n  }\r\n};\r\n\r\ncityInput.addEventListener(\"keydown\", (event) => {\r\n  if (event.keyCode === 13) {\r\n    getDataFromInput(event.target.value);\r\n    event.target.value = \"\";\r\n  }\r\n});\r\n\r\n// ----------------------- search city by Leaflet latlng -------------------------\r\nasync function getDataFromLatlng(event) {\r\n  let lat = event.latlng.lat;\r\n  let lng = event.latlng.lng;\r\n  try {\r\n    let response = await fetch(`https://api.waqi.info/feed/geo:${lat};${lng}/?token=${\"fe97b410940d30e3b873d6f3a802bc48f31d2f50\"}`);\r\n    let cityDataTemporary = await response.json();\r\n    console.log(cityDataTemporary);\r\n    if (cityDataTemporary.status == \"error\") throw cityDataTemporary;\r\n    cityData = cityDataTemporary;\r\n    updateInfo();\r\n    updateTileMap();\r\n\r\n  } catch (err) {\r\n    if (err.status == \"error\" && err.data == \"Over quota\") {\r\n      alert(\"Server sovvracarico di richieste, attendere un istante e riprovare\");\r\n    } else if (err.status == \"error\" && err.data == \"Invalid key\") {\r\n      alert(\"Chiave API invalida, contattare amministratore del sito web\");\r\n    } else if (err.status == \"error\" && err.data == \"Unknown station\") {\r\n      alert(\"Città sconosciuta, prego inserire un altro\");\r\n    } else {\r\n      alert(\"Si è verificato un errore: \" + err.name + \": \" + err.message);\r\n    }\r\n  }\r\n};\r\n\r\n// -------------------------search from gelocalisation------------------------\r\nvar options = {\r\n  enableHighAccuracy: true,\r\n  timeout: 5000,\r\n  maximumAge: 0\r\n};\r\n\r\nasync function getPosAppruved(pos) {\r\n  try {\r\n    let crd = pos.coords;\r\n    let response = await fetch(`https://api.waqi.info/feed/geo:${crd.latitude};${crd.longitude}/?token=${\"fe97b410940d30e3b873d6f3a802bc48f31d2f50\"}`);\r\n    let cityDataTemporary = await response.json();\r\n    if (cityDataTemporary.status == \"error\") throw cityDataTemporary;\r\n    cityData = cityDataTemporary;\r\n    updateInfo();\r\n    tileMap.setView(cityData.data.city.geo, 11);\r\n  } catch (err) {\r\n    if (err.status == \"error\" && err.data == \"Over quota\") {\r\n      alert(\"Server sovvracarico di richieste, attendere un istante e riprovare\");\r\n    } else if (err.status == \"error\" && err.data == \"Invalid key\") {\r\n      alert(\"Chiave API invalida, contattare amministratore del sito web\");\r\n    } else {\r\n      alert(\"Si è verificato un errore: \" + err.name + \": \" + err.message);\r\n    }\r\n  }\r\n};\r\n\r\nfunction getPosDenied(err) {\r\n  alert(\"Errore accesso a posizione attuale. Prego riprovare.\");\r\n}\r\n\r\ngetPosButton.onclick = () => navigator.geolocation.getCurrentPosition(getPosAppruved, getPosDenied, options);\r\ngetPosButton2.onclick = () => navigator.geolocation.getCurrentPosition(getPosAppruved, getPosDenied, options);\r\n\r\n// ------------------------------update function-----------------------------\r\nfunction updateInfo() {\r\n  cityNameId.textContent = cityData.data.city.name;\r\n  cityTimeId.textContent = cityData.data.time.s;\r\n  aqiId.textContent = cityData.data.aqi;\r\n\r\n  if(cityData.data.aqi <= 50){\r\n    aqiDivId.style.backgroundColor = \"green\";\r\n    aqiDescriptionId.textContent = \"Molto basso\";\r\n  }\r\n  else if (cityData.data.aqi > 50 && cityData.data.aqi <=100){\r\n    aqiDivId.style.backgroundColor = \"#FDD64B\";\r\n    aqiDescriptionId.textContent = \"Basso\";\r\n  }\r\n  else if (cityData.data.aqi > 100 && cityData.data.aqi <=150){\r\n    aqiDivId.style.backgroundColor = \"orange\";\r\n    aqiDescriptionId.textContent = \"Medio\";\r\n  }\r\n  else if (cityData.data.aqi > 150 && cityData.data.aqi <=200){\r\n    aqiDivId.style.backgroundColor = \"red\";\r\n    aqiDescriptionId.textContent = \"Alto\";\r\n  }\r\n  else if (cityData.data.aqi > 200 && cityData.data.aqi <=300){\r\n    aqiDivId.style.backgroundColor = \"purple\";\r\n    aqiDescriptionId.textContent = \"Molto alto\";\r\n  }\r\n  else if(cityData.data.aqi > 300){\r\n    aqiDivId.style.backgroundColor = \"maroon\";\r\n    aqiDescriptionId.textContent = \"Estremamente nocivo\";\r\n  };\r\n};\r\n\r\n// -------------------------------leaflet Maps--------------------------------\r\nvar tileMap = L.map('tileMapId').setView([0, 0], 1);\r\nL.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {\r\n  maxZoom: 18,\r\n  id: 'mapbox/navigation-day-v1',\r\n  tileSize: 512,\r\n  zoomOffset: -1,\r\n  accessToken: \"pk.eyJ1IjoiYXppemciLCJhIjoiY2tzdWNnaXZyMWR3czJ3bzM0N2ZhNGdvMiJ9.8eHAq7av2Sp7cIUcIZLFrw\"\r\n}).addTo(tileMap);\r\n\r\nvar marker = L.marker();\r\n\r\nfunction updateTileMap(){\r\n  tileMap.setView(cityData.data.city.geo, 11);\r\n  marker\r\n        .setLatLng(cityData.data.city.geo)\r\n        .addTo(tileMap);\r\n};\r\n\r\ntileMap.on('click', getDataFromLatlng);\r\n\r\n\r\n//----------------------exploreMap---------------------------------\r\nvar exploreMap = L.map('exploreMap').setView([0, 0], 10);\r\nL.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {\r\n  maxZoom: 18,\r\n  id: 'mapbox/navigation-day-v1',\r\n  tileSize: 512,\r\n  zoomOffset: -1,\r\n  accessToken: \"pk.eyJ1IjoiYXppemciLCJhIjoiY2tzdWNnaXZyMWR3czJ3bzM0N2ZhNGdvMiJ9.8eHAq7av2Sp7cIUcIZLFrw\"\r\n}).addTo(exploreMap);\r\n\r\n\r\nasync function getExploreMapData(event){\r\n  let bounds = event.target.getBounds();\r\n  let lat1 = bounds._northEast.lat;\r\n  let lng1 = bounds._northEast.lng;\r\n  let lat2 = bounds._southWest.lat;\r\n  let lng2 = bounds._southWest.lng;\r\n\r\n  console.log(lat1);\r\n  try {\r\n    let response = await fetch(`https://api.waqi.info/map/bounds/?latlng=${lat1},${lng1},${lat2},${lng2}&token=${\"fe97b410940d30e3b873d6f3a802bc48f31d2f50\"}`);\r\n    let exploreTemporaryData = await response.json();\r\n    console.log(exploreTemporaryData.data);\r\n    if (exploreTemporaryData.status == \"error\") throw exploreTemporaryData;\r\n    exploreData = exploreTemporaryData;\r\n    updateExploreMap();\r\n  } catch (err) {\r\n    if (err.status == \"error\" && err.data == \"Over quota\") {\r\n      alert(\"Server sovvracarico di richieste, attendere un istante e riprovare\");\r\n    } else if (err.status == \"error\" && err.data == \"Invalid key\") {\r\n      alert(\"Chiave API invalida, contattare amministratore del sito web\");\r\n    } else {\r\n      alert(\"Si è verificato un errore: \" + err.name + \": \" + err.message);\r\n    }\r\n  }\r\n};\r\n\r\nexploreMap.on('moveend', getExploreMapData);\r\n\r\nvar layerGroup = L.layerGroup().addTo(exploreMap);\r\n\r\nfunction updateExploreMap(){\r\n  layerGroup.clearLayers();\r\n  exploreData.data.forEach((station, index) => {\r\n\r\n    if (index < 80) { // data limitation for better performance\r\n      let aqiPopup = L.popup({\r\n        autoPan: false,\r\n        closeButton: false,\r\n        closeOnClick: false\r\n      });\r\n      aqiPopup\r\n        .setLatLng([station.lat, station.lon])\r\n        .setContent(`\r\n            <div id=\"exploreAqiId\" style=\"background-color: ${getColor()}\">\r\n              <h4>${station.aqi}</h4>\r\n            </div>\r\n          `)\r\n        .addTo(layerGroup);\r\n    };\r\n          function getColor() {\r\n            if (station.aqi <= 50) {\r\n              return \"green\";\r\n            } else if (station.aqi > 50 && station.aqi <= 100) {\r\n              return \"#FDD64B\";\r\n            } else if (station.aqi > 100 && station.aqi <= 150) {\r\n              return \"orange\";\r\n            } else if (station.aqi > 150 && station.aqi <= 200) {\r\n              return \"red\";\r\n            } else if (station.aqi > 200 && station.aqi <= 300) {\r\n              return \"purple\";\r\n            } else if (station.aqi > 300) {\r\n              return \"maroon\";\r\n            } else {\r\n              return \"grey\";\r\n            }\r\n          }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://air-quality-meter/./src/js/main.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;