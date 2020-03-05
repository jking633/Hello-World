module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/API/index.js":
/*!**************************!*\
  !*** ./src/API/index.js ***!
  \**************************/
/*! exports provided: fetchPopularRepos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPopularRepos\", function() { return fetchPopularRepos; });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\nfunction fetchPopularRepos(){var language=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'all';var encodedURI=encodeURI(\"https://api.github.com/search/repositories?q=stars:>1+language:\".concat(language,\"&sort=stars&order=desc&type=Repositories\"));return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(encodedURI).then(function(data){return data.json();}).then(function(repos){return repos.items;})[\"catch\"](function(error){console.warn(error);return null;});}\n\n//# sourceURL=webpack:///./src/API/index.js?");

/***/ }),

/***/ "./src/Helpers/index.js":
/*!******************************!*\
  !*** ./src/Helpers/index.js ***!
  \******************************/
/*! exports provided: generateAsyncRouteComponent, ensureReady, convertCustomRouteConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateAsyncRouteComponent\", function() { return generateAsyncRouteComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureReady\", function() { return ensureReady; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertCustomRouteConfig\", function() { return convertCustomRouteConfig; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_7__);\n/**\n * Returns a new React component, ready to be instantiated.\n * Note the closure here protecting Component, and providing a unique\n * instance of Component to the static implementation of `load`.\n */function generateAsyncRouteComponent(_ref){var loader=_ref.loader,Placeholder=_ref.Placeholder;var Component=null;return(/*#__PURE__*/function(_React$Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(AsyncRouteComponent,_React$Component);_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(AsyncRouteComponent,null,[{key:\"load\",/**\n     * Static so that you can call load against an uninstantiated version of\n     * this component. This should only be called one time outside of the\n     * normal render path.\n     */value:function load(){return loader().then(function(ResolvedComponent){Component=ResolvedComponent[\"default\"]||ResolvedComponent;});}}]);function AsyncRouteComponent(){var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,AsyncRouteComponent);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(AsyncRouteComponent).call(this));_this.updateState=_this.updateState.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));_this.state={Component:Component};return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(AsyncRouteComponent,[{key:\"componentWillMount\",value:function componentWillMount(){AsyncRouteComponent.load().then(this.updateState);}},{key:\"updateState\",value:function updateState(){// Only update state if we don't already have a reference to the\n// component, this prevent unnecessary renders.\nif(this.state.Component!==Component){this.setState({Component:Component});}}},{key:\"render\",value:function render(){var ComponentFromState=this.state.Component;if(ComponentFromState){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ComponentFromState,this.props);}if(Placeholder){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Placeholder,this.props);}return null;}}]);return AsyncRouteComponent;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component));}/**\n * First match the routes via react-router-config's `matchRoutes` function.\n * Then iterate over all of the matched routes, if they've got a load function\n * call it.\n *\n * This helps us to make sure all the async code is loaded before rendering.\n */function ensureReady(routeConfig,providedLocation){// prettier-ignore\nvar matches=Object(react_router_config__WEBPACK_IMPORTED_MODULE_7__[\"matchRoutes\"])(routeConfig,providedLocation||location.pathname);// prettier-ignore\nreturn Promise.all(matches.map(function(match){var component=match.route.component;if(component&&component.load){return component.load();}return undefined;}));}function convertCustomRouteConfig(customRouteConfig,parentRoute){return customRouteConfig.map(function(route){if(typeof route.path==='function'){var _pathResult=route.path(parentRoute||'').replace('//','/');// prettier-ignore\nreturn{path:_pathResult,component:route.component,exact:route.exact,routes:route.routes?convertCustomRouteConfig(route.routes,_pathResult):[]};}var pathResult=\"\".concat(parentRoute).concat(route.path);// prettier-ignore\nreturn{path:pathResult,component:route.component,exact:route.exact,routes:route.routes?convertCustomRouteConfig(route.routes,pathResult):[]};});}\n\n//# sourceURL=webpack:///./src/Helpers/index.js?");

/***/ }),

/***/ "./src/Routes/index.js":
/*!*****************************!*\
  !*** ./src/Routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"@babel/runtime/helpers/interopRequireWildcard\");\n/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Helpers */ \"./src/Helpers/index.js\");\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../API */ \"./src/API/index.js\");\n/* harmony import */ var _Todo_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Todo/app */ \"./src/Todo/app.js\");\n// Select App\n// import App from '../Github/app'\n// \n// import Home from '../Shared/home'\n// import Grid from '../Shared/grid'\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{path:function path(parentRoute){return\"\".concat(parentRoute,\"/\");},// component: import(/* webpackChunkName: \"index\" */ '../Todo/app'),\ncomponent:_Todo_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"],routes:[// {\n//   path: parentRoute => `${parentRoute}/`,\n//   exact: true,\n//   component: generateAsyncRouteComponent({\n//     loader: () => import(/* webpackChunkName: \"Home\" */ '../Shared/home'),\n//   }),\n// },\n// {\n//   path: parentRoute => `${parentRoute}/popular/:id`,\n//   component: Grid, // try import() here to get a named chunk and track it\n//   // component: generateAsyncRouteComponent({\n//   //   loader: () => import(/* webpackChunkName: \"Grid\" */ '../Shared/grid'),\n//   // }),\n//   fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop()),\n// },\n{path:function path(parentRoute){return\"\".concat(parentRoute,\"/\");},exact:true,component:Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__[\"generateAsyncRouteComponent\"])({loader:function loader(){return Promise.resolve().then(function(){return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(__webpack_require__(/*! ../Todo/all-todos */ \"./src/Todo/all-todos.js\"));});}})},{path:function path(parentRoute){return\"\".concat(parentRoute,\"/all\");},component:Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__[\"generateAsyncRouteComponent\"])({loader:function loader(){return Promise.resolve().then(function(){return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(__webpack_require__(/*! ../Todo/all-todos */ \"./src/Todo/all-todos.js\"));});}})},{path:function path(parentRoute){return\"\".concat(parentRoute,\"/active\");},component:Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__[\"generateAsyncRouteComponent\"])({loader:function loader(){return Promise.resolve().then(function(){return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(__webpack_require__(/*! ../Todo/active-todos */ \"./src/Todo/active-todos.js\"));});}})},{path:function path(parentRoute){return\"\".concat(parentRoute,\"/completed\");},component:Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__[\"generateAsyncRouteComponent\"])({loader:function loader(){return Promise.resolve().then(function(){return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(__webpack_require__(/*! ../Todo/completed-todos */ \"./src/Todo/completed-todos.js\"));});}})}]}]);\n\n//# sourceURL=webpack:///./src/Routes/index.js?");

/***/ }),

/***/ "./src/Shared/entry.js":
/*!*****************************!*\
  !*** ./src/Shared/entry.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return render2; });\n/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"@babel/runtime/helpers/interopRequireWildcard\");\n/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Routes */ \"./src/Routes/index.js\");\n/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Helpers */ \"./src/Helpers/index.js\");\nvar routeConfig=Object(_Helpers__WEBPACK_IMPORTED_MODULE_6__[\"convertCustomRouteConfig\"])(_Routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);// Hot-reloading\nif(false){}if(typeof window!=='undefined'){Object(_Helpers__WEBPACK_IMPORTED_MODULE_6__[\"ensureReady\"])(routeConfig).then(function(){var props=JSON.parse(document.getElementById('props').dataset.props);// eslint-disable-line\nvar element=document.getElementsByClassName('todoapp')[0];if('fetch'in window&&'Intl'in window&&'URL'in window&&'Map'in window&&'forEach'in NodeList.prototype&&'startsWith'in String.prototype&&'endsWith'in String.prototype&&'includes'in String.prototype&&'includes'in Array.prototype&&'assign'in Object&&'entries'in Object&&'keys'in Object){Object(react_dom__WEBPACK_IMPORTED_MODULE_2__[\"hydrate\"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"],null,Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(routeConfig,props)),element);}else{Promise.resolve().then(function(){return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(__webpack_require__(/*! ../Shared/polyfills */ \"./src/Shared/polyfills.js\"));}).then(Object(react_dom__WEBPACK_IMPORTED_MODULE_2__[\"hydrate\"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"],null,Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(routeConfig,props)),element));}});}function render2(location,props){return Object(_Helpers__WEBPACK_IMPORTED_MODULE_6__[\"ensureReady\"])(routeConfig,location).then(function(){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"StaticRouter\"],{context:{},location:location},Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(routeConfig,props));});}\n\n//# sourceURL=webpack:///./src/Shared/entry.js?");

/***/ }),

/***/ "./src/Shared/polyfills.js":
/*!*********************************!*\
  !*** ./src/Shared/polyfills.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! whatwg-fetch */ \"whatwg-fetch\");__webpack_require__(/*! intl */ \"intl\");__webpack_require__(/*! url-polyfill */ \"url-polyfill\");__webpack_require__(/*! core-js/web/dom-collections */ \"core-js/web/dom-collections\");__webpack_require__(/*! core-js/es6/map */ \"core-js/es6/map\");__webpack_require__(/*! core-js/es6/string */ \"core-js/es6/string\");__webpack_require__(/*! core-js/es6/array */ \"core-js/es6/array\");__webpack_require__(/*! core-js/es6/object */ \"core-js/es6/object\");\n\n//# sourceURL=webpack:///./src/Shared/polyfills.js?");

/***/ }),

/***/ "./src/Todo/active-todos.js":
/*!**********************************!*\
  !*** ./src/Todo/active-todos.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ActiveTodos; });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"@babel/runtime/helpers/extends\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"@babel/runtime/helpers/objectWithoutProperties\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoList */ \"./src/Todo/todoList.js\");\nfunction ActiveTodos(_ref){var todos=_ref.todos,props=_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref,[\"todos\"]);var filteredTodos=todos.filter(function(todo){return!todo.completed;});return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_todoList__WEBPACK_IMPORTED_MODULE_3__[\"default\"],_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({todos:filteredTodos},props));}\n\n//# sourceURL=webpack:///./src/Todo/active-todos.js?");

/***/ }),

/***/ "./src/Todo/all-todos.js":
/*!*******************************!*\
  !*** ./src/Todo/all-todos.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AllTodos; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ \"./src/Todo/todoList.js\");\nfunction AllTodos(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"],props);}\n\n//# sourceURL=webpack:///./src/Todo/all-todos.js?");

/***/ }),

/***/ "./src/Todo/app.js":
/*!*************************!*\
  !*** ./src/Todo/app.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer */ \"./src/Todo/footer.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Utils */ \"./src/Utils/index.js\");\nvar ENTER_KEY=13;var Todo=/*#__PURE__*/function(_React$Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Todo,_React$Component);function Todo(props){var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Todo);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Todo).call(this,props));_this.state={editing:null,newTodo:'',todos:props.todos};return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Todo,[{key:\"handleChange\",value:function handleChange(event){this.setState({newTodo:event.target.value});}},{key:\"handleNewTodoKeyDown\",value:function handleNewTodoKeyDown(event){if(event.keyCode!==ENTER_KEY){return;}event.preventDefault();var val=this.state.newTodo.trim();if(val){this.setState({todos:this.state.todos.concat({id:Object(_Utils__WEBPACK_IMPORTED_MODULE_9__[\"uuid\"])(),title:val,completed:false}),newTodo:''});}}},{key:\"toggleAll\",value:function toggleAll(event){var checked=event.target.checked;this.setState({todos:this.state.todos.map(function(todo){return Object.assign({},todo,{completed:checked});})});}},{key:\"toggle\",value:function toggle(todoToToggle){this.setState({todos:this.state.todos.map(function(todo){if(todo===todoToToggle){return Object.assign({},todo,{completed:!todo.completed});}return todo;})});}},{key:\"destroy\",value:function destroy(passedTodo){this.setState({todos:this.state.todos.filter(function(todo){return todo!==passedTodo;})});}},{key:\"edit\",value:function edit(todo){this.setState({editing:todo.id});}},{key:\"save\",value:function save(todoToSave,text){this.setState({todos:this.state.todos.map(function(todo){if(todo===todoToSave){return Object.assign({},todo,{title:text});}return todo;}),editing:null});}},{key:\"cancel\",value:function cancel(){this.setState({editing:null});}},{key:\"clearCompleted\",value:function clearCompleted(){this.setState({todos:this.state.todos.filter(function(todo){return!todo.completed;})});}},{key:\"render\",value:function render(){var _this2=this;var footer;var main;var todos=this.state.todos;var activeTodoCount=todos.reduce(function(accum,todo){return todo.completed?accum:accum+1;},0);var completedCount=todos.length-activeTodoCount;if(activeTodoCount||completedCount){// import(/* webpackChunkName: \"TodoFooter\" */ './footer').then(TodoFooter => {\n//   return footer = (\n//     <TodoFooter\n//       count={activeTodoCount}\n//       completedCount={completedCount}\n//       nowShowing={this.props.location.pathname}\n//       onClearCompleted={() => {\n//         this.clearCompleted()\n//       }}\n//     />\n//   )\n// })\nfooter=react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{count:activeTodoCount,completedCount:completedCount,nowShowing:this.props.location.pathname,onClearCompleted:function onClearCompleted(){_this2.clearCompleted();}});}if(todos.length){main=react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"section\",{className:\"main\"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"input\",{className:\"toggle-all\",type:\"checkbox\",onChange:this.toggleAll,checked:activeTodoCount===0}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"ul\",{className:\"todo-list\"},Object(react_router_config__WEBPACK_IMPORTED_MODULE_7__[\"renderRoutes\"])(this.props.route.routes,{todos:todos,onToggle:function onToggle(todo){_this2.toggle(todo);},onDestroy:function onDestroy(todo){_this2.destroy(todo);},onEdit:function onEdit(todo){_this2.edit(todo);},editing:function editing(todo){return _this2.state.editing===todo.id;},onSave:function onSave(todo,text){_this2.save(todo,text);},onCancel:function onCancel(){return _this2.cancel();}})));}return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"header\",{className:\"header\"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"h1\",null,\"todos\"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"input\",{className:\"new-todo\",placeholder:\"What needs to be done?\",value:this.state.newTodo,onKeyDown:function onKeyDown(event){_this2.handleNewTodoKeyDown(event);},onChange:function onChange(event){_this2.handleChange(event);},autoFocus:true})),main,footer);}}]);return Todo;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__[\"hot\"])(Todo));\n\n//# sourceURL=webpack:///./src/Todo/app.js?");

/***/ }),

/***/ "./src/Todo/completed-todos.js":
/*!*************************************!*\
  !*** ./src/Todo/completed-todos.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ActiveTodos; });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"@babel/runtime/helpers/extends\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"@babel/runtime/helpers/objectWithoutProperties\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoList */ \"./src/Todo/todoList.js\");\nfunction ActiveTodos(_ref){var todos=_ref.todos,props=_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref,[\"todos\"]);var filteredTodos=todos.filter(function(todo){return todo.completed;});return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_todoList__WEBPACK_IMPORTED_MODULE_3__[\"default\"],_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({todos:filteredTodos},props));}\n\n//# sourceURL=webpack:///./src/Todo/completed-todos.js?");

/***/ }),

/***/ "./src/Todo/enums.js":
/*!***************************!*\
  !*** ./src/Todo/enums.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ALL_TODOS:'/all',ACTIVE_TODOS:'/active',COMPLETED_TODOS:'/completed'});\n\n//# sourceURL=webpack:///./src/Todo/enums.js?");

/***/ }),

/***/ "./src/Todo/footer.js":
/*!****************************!*\
  !*** ./src/Todo/footer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils */ \"./src/Utils/index.js\");\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums */ \"./src/Todo/enums.js\");\nfunction Footer(props){var activeTodoWord=Object(_Utils__WEBPACK_IMPORTED_MODULE_3__[\"pluralize\"])(props.count,'item');var nowShowing=props.nowShowing;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\",{className:\"footer\"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"todo-count\"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\",null,props.count),\" \",activeTodoWord,\" left\"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\",{className:\"filters\"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],{to:\"/all\",className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({selected:nowShowing!==_enums__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ACTIVE_TODOS&&nowShowing!==_enums__WEBPACK_IMPORTED_MODULE_4__[\"default\"].COMPLETED_TODOS})},\"All\")),' ',react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],{to:\"/active\",className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({selected:nowShowing===_enums__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ACTIVE_TODOS})},\"Active\")),' ',react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],{to:\"/completed\",className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({selected:nowShowing===_enums__WEBPACK_IMPORTED_MODULE_4__[\"default\"].COMPLETED_TODOS})},\"Completed\"))),props.completedCount?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\",{className:\"clear-completed\",onClick:props.onClearCompleted},\"Clear completed\"):null);}\n\n//# sourceURL=webpack:///./src/Todo/footer.js?");

/***/ }),

/***/ "./src/Todo/todoItem.js":
/*!******************************!*\
  !*** ./src/Todo/todoItem.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TodoItem; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);\nvar ESCAPE_KEY=27;var ENTER_KEY=13;var TodoItem=/*#__PURE__*/function(_React$Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TodoItem,_React$Component);function TodoItem(props){var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,TodoItem);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TodoItem).call(this,props));_this.state={editText:props.todo.title};_this.handleEdit=_this.handleEdit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));_this.handleSubmit=_this.handleSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));_this.handleKeyDown=_this.handleKeyDown.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));_this.handleChange=_this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));return _this;}/**\n   * This is a completely optional performance enhancement that you can\n   * implement on any React component. If you were to delete this method\n   * the app would still work correctly (and still be very performant!), we\n   * just use it as an example of how little code it takes to get an order\n   * of magnitude performance improvement.\n   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TodoItem,[{key:\"shouldComponentUpdate\",value:function shouldComponentUpdate(nextProps,nextState){return nextProps.todo!==this.props.todo||nextProps.editing!==this.props.editing||nextState.editText!==this.state.editText;}/**\n   * Safely manipulate the DOM after updating the state when invoking\n   * `this.props.onEdit()` in the `handleEdit` method above.\n   * For more info refer to notes at https://facebook.github.io/react/docs/component-api.html#setstate\n   * and https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate\n   */},{key:\"componentDidUpdate\",value:function componentDidUpdate(prevProps){if(!prevProps.editing&&this.props.editing){var node=react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(this.refs.editField);node.focus();node.setSelectionRange(node.value.length,node.value.length);}}},{key:\"handleSubmit\",value:function handleSubmit(){var val=this.state.editText.trim();if(val){this.props.onSave(val);this.setState({editText:val});}else{this.props.onDestroy();}}},{key:\"handleEdit\",value:function handleEdit(){this.props.onEdit();this.setState({editText:this.props.todo.title});}},{key:\"handleKeyDown\",value:function handleKeyDown(event){if(event.which===ESCAPE_KEY){this.setState({editText:this.props.todo.title});this.props.onCancel(event);}else if(event.which===ENTER_KEY){this.handleSubmit(event);}}},{key:\"handleChange\",value:function handleChange(event){if(this.props.editing){this.setState({editText:event.target.value});}}},{key:\"render\",value:function render(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"li\",{className:classnames__WEBPACK_IMPORTED_MODULE_8___default()({completed:this.props.todo.completed,editing:this.props.editing})},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\",{className:\"view\"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"input\",{className:\"toggle\",type:\"checkbox\",checked:this.props.todo.completed,onChange:this.props.onToggle}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"label\",{onDoubleClick:this.handleEdit},this.props.todo.title),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"button\",{className:\"destroy\",onClick:this.props.onDestroy})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"input\",{ref:\"editField\",className:\"edit\",value:this.state.editText,onBlur:this.handleSubmit,onChange:this.handleChange,onKeyDown:this.handleKeyDown}));}}]);return TodoItem;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n//# sourceURL=webpack:///./src/Todo/todoItem.js?");

/***/ }),

/***/ "./src/Todo/todoList.js":
/*!******************************!*\
  !*** ./src/Todo/todoList.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TodoList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoItem */ \"./src/Todo/todoItem.js\");\nfunction TodoList(props){var todoItems=props.todos.map(function(todo){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"],{key:todo.id,todo:todo,onToggle:function onToggle(){props.onToggle(todo);},onDestroy:function onDestroy(){props.onDestroy(todo);},onEdit:function onEdit(){props.onEdit(todo);},editing:props.editing(todo),onSave:function onSave(text){props.onSave(todo,text);},onCancel:function onCancel(){props.onCancel();}});});return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",null,todoItems);}\n\n//# sourceURL=webpack:///./src/Todo/todoList.js?");

/***/ }),

/***/ "./src/Utils/index.js":
/*!****************************!*\
  !*** ./src/Utils/index.js ***!
  \****************************/
/*! exports provided: isBrowser, buildsTags, uuid, pluralize, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isBrowser\", function() { return isBrowser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildsTags\", function() { return buildsTags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uuid\", function() { return uuid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pluralize\", function() { return pluralize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"@babel/runtime/helpers/typeof\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\nfunction isBrowser(){return!!(typeof window!=='undefined'&&window.document);}function buildsTags(scripts){if(scripts==='undefined'||_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(scripts)!=='object')return;try{var entries=scripts.app.js;// prettier-ignore\nreturn entries.map(function(entry){return\"<script charset='utf-8' async src='\".concat(entry,\"'></script>\");}).join('\\n','');}catch(error){console.error(error);}}function uuid(){function s4(){return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);}return\"\".concat(s4()).concat(s4(),\"-\").concat(s4(),\"-\").concat(s4(),\"-\").concat(s4(),\"-\").concat(s4()).concat(s4()).concat(s4());}function pluralize(count,word){return count===1?word:\"\".concat(word,\"s\");}function store(namespace,data){if(typeof window!=='undefined'){if(data){return localStorage.setItem(namespace,JSON.stringify(data));}var _store=localStorage.getItem(namespace);return _store&&JSON.parse(_store)||[];}return[];}\n\n//# sourceURL=webpack:///./src/Utils/index.js?");

/***/ }),

/***/ 0:
/*!*************************************************************************************************************************!*\
  !*** multi core-js/modules/es6.promise core-js/modules/es6.array.iterator react-hot-loader/patch ./src/Shared/entry.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/modules/es6.promise */\"core-js/modules/es6.promise\");\n__webpack_require__(/*! core-js/modules/es6.array.iterator */\"core-js/modules/es6.array.iterator\");\n__webpack_require__(/*! react-hot-loader/patch */\"react-hot-loader/patch\");\nmodule.exports = __webpack_require__(/*! /Users/jruiz7/development/hello-world-node-blueprint/src/Shared/entry.js */\"./src/Shared/entry.js\");\n\n\n//# sourceURL=webpack:///multi_core-js/modules/es6.promise_core-js/modules/es6.array.iterator_react-hot-loader/patch_./src/Shared/entry.js?");

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/assertThisInitialized\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/assertThisInitialized%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/extends\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/extends%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireWildcard":
/*!****************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireWildcard" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/interopRequireWildcard\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/interopRequireWildcard%22?");

/***/ }),

/***/ "@babel/runtime/helpers/objectWithoutProperties":
/*!*****************************************************************!*\
  !*** external "@babel/runtime/helpers/objectWithoutProperties" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/objectWithoutProperties\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/objectWithoutProperties%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "@babel/runtime/helpers/typeof":
/*!************************************************!*\
  !*** external "@babel/runtime/helpers/typeof" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/typeof\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/typeof%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "core-js/es6/array":
/*!************************************!*\
  !*** external "core-js/es6/array" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/es6/array\");\n\n//# sourceURL=webpack:///external_%22core-js/es6/array%22?");

/***/ }),

/***/ "core-js/es6/map":
/*!**********************************!*\
  !*** external "core-js/es6/map" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/es6/map\");\n\n//# sourceURL=webpack:///external_%22core-js/es6/map%22?");

/***/ }),

/***/ "core-js/es6/object":
/*!*************************************!*\
  !*** external "core-js/es6/object" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/es6/object\");\n\n//# sourceURL=webpack:///external_%22core-js/es6/object%22?");

/***/ }),

/***/ "core-js/es6/string":
/*!*************************************!*\
  !*** external "core-js/es6/string" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/es6/string\");\n\n//# sourceURL=webpack:///external_%22core-js/es6/string%22?");

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.array.iterator\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.array.iterator%22?");

/***/ }),

/***/ "core-js/modules/es6.promise":
/*!**********************************************!*\
  !*** external "core-js/modules/es6.promise" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.promise\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.promise%22?");

/***/ }),

/***/ "core-js/web/dom-collections":
/*!**********************************************!*\
  !*** external "core-js/web/dom-collections" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/web/dom-collections\");\n\n//# sourceURL=webpack:///external_%22core-js/web/dom-collections%22?");

/***/ }),

/***/ "intl":
/*!***********************!*\
  !*** external "intl" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"intl\");\n\n//# sourceURL=webpack:///external_%22intl%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-hot-loader/patch":
/*!*****************************************!*\
  !*** external "react-hot-loader/patch" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/patch\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/patch%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "url-polyfill":
/*!*******************************!*\
  !*** external "url-polyfill" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url-polyfill\");\n\n//# sourceURL=webpack:///external_%22url-polyfill%22?");

/***/ }),

/***/ "whatwg-fetch":
/*!*******************************!*\
  !*** external "whatwg-fetch" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"whatwg-fetch\");\n\n//# sourceURL=webpack:///external_%22whatwg-fetch%22?");

/***/ })

/******/ });