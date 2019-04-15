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

/***/ "./src/Client/active-todos.js":
/*!************************************!*\
  !*** ./src/Client/active-todos.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ActiveTodos; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ \"./src/Client/todoList.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\nfunction ActiveTodos(_ref) {\n  var todos = _ref.todos,\n      props = _objectWithoutProperties(_ref, [\"todos\"]);\n\n  var filteredTodos = todos.filter(function (todo) {\n    return !todo.completed;\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _extends({\n    todos: filteredTodos\n  }, props));\n}\n\n//# sourceURL=webpack:///./src/Client/active-todos.js?");

/***/ }),

/***/ "./src/Client/all-todos.js":
/*!*********************************!*\
  !*** ./src/Client/all-todos.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AllTodos; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ \"./src/Client/todoList.js\");\n\n\nfunction AllTodos(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], props);\n}\n\n//# sourceURL=webpack:///./src/Client/all-todos.js?");

/***/ }),

/***/ "./src/Client/app.js":
/*!***************************!*\
  !*** ./src/Client/app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/Client/footer.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/Client/utils.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar ENTER_KEY = 13;\n\nvar TodoApp =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(TodoApp, _React$Component);\n\n  function TodoApp(props) {\n    var _this;\n\n    _classCallCheck(this, TodoApp);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoApp).call(this, props));\n    _this.state = {\n      editing: null,\n      newTodo: '',\n      todos: props.todos\n    };\n    return _this;\n  }\n\n  _createClass(TodoApp, [{\n    key: \"handleChange\",\n    value: function handleChange(event) {\n      this.setState({\n        newTodo: event.target.value\n      });\n    }\n  }, {\n    key: \"handleNewTodoKeyDown\",\n    value: function handleNewTodoKeyDown(event) {\n      if (event.keyCode !== ENTER_KEY) {\n        return;\n      }\n\n      event.preventDefault();\n      var val = this.state.newTodo.trim();\n\n      if (val) {\n        this.setState({\n          todos: this.state.todos.concat({\n            id: _utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].uuid(),\n            title: val,\n            completed: false\n          }),\n          newTodo: ''\n        });\n      }\n    }\n  }, {\n    key: \"toggleAll\",\n    value: function toggleAll(event) {\n      var checked = event.target.checked;\n      this.setState({\n        todos: this.state.todos.map(function (todo) {\n          return Object.assign({}, todo, {\n            completed: checked\n          });\n        })\n      });\n    }\n  }, {\n    key: \"toggle\",\n    value: function toggle(todoToToggle) {\n      this.setState({\n        todos: this.state.todos.map(function (todo) {\n          if (todo === todoToToggle) {\n            return Object.assign({}, todo, {\n              completed: !todo.completed\n            });\n          }\n\n          return todo;\n        })\n      });\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy(passedTodo) {\n      this.setState({\n        todos: this.state.todos.filter(function (todo) {\n          return todo !== passedTodo;\n        })\n      });\n    }\n  }, {\n    key: \"edit\",\n    value: function edit(todo) {\n      this.setState({\n        editing: todo.id\n      });\n    }\n  }, {\n    key: \"save\",\n    value: function save(todoToSave, text) {\n      this.setState({\n        todos: this.state.todos.map(function (todo) {\n          if (todo === todoToSave) {\n            return Object.assign({}, todo, {\n              title: text\n            });\n          }\n\n          return todo;\n        }),\n        editing: null\n      });\n    }\n  }, {\n    key: \"cancel\",\n    value: function cancel() {\n      this.setState({\n        editing: null\n      });\n    }\n  }, {\n    key: \"clearCompleted\",\n    value: function clearCompleted() {\n      this.setState({\n        todos: this.state.todos.filter(function (todo) {\n          return !todo.completed;\n        })\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var footer;\n      var main;\n      var todos = this.state.todos;\n      var activeTodoCount = todos.reduce(function (accum, todo) {\n        return todo.completed ? accum : accum + 1;\n      }, 0);\n      var completedCount = todos.length - activeTodoCount;\n\n      if (activeTodoCount || completedCount) {\n        footer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          count: activeTodoCount,\n          completedCount: completedCount,\n          nowShowing: this.props.location.pathname,\n          onClearCompleted: function onClearCompleted() {\n            _this2.clearCompleted();\n          }\n        });\n      }\n\n      if (todos.length) {\n        main = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n          className: \"main\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n          className: \"toggle-all\",\n          type: \"checkbox\",\n          onChange: this.toggleAll,\n          checked: activeTodoCount === 0\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n          className: \"todo-list\"\n        }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(this.props.route.routes, {\n          todos: todos,\n          onToggle: function onToggle(todo) {\n            _this2.toggle(todo);\n          },\n          onDestroy: function onDestroy(todo) {\n            _this2.destroy(todo);\n          },\n          onEdit: function onEdit(todo) {\n            _this2.edit(todo);\n          },\n          editing: function editing(todo) {\n            return _this2.state.editing === todo.id;\n          },\n          onSave: function onSave(todo, text) {\n            _this2.save(todo, text);\n          },\n          onCancel: function onCancel() {\n            return _this2.cancel();\n          }\n        })));\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n        className: \"header\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"todos\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        className: \"new-todo\",\n        placeholder: \"What needs to be done?\",\n        value: this.state.newTodo,\n        onKeyDown: function onKeyDown(event) {\n          _this2.handleNewTodoKeyDown(event);\n        },\n        onChange: function onChange(event) {\n          _this2.handleChange(event);\n        },\n        autoFocus: true\n      })), main, footer);\n    }\n  }]);\n\n  return TodoApp;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoApp);\n\n//# sourceURL=webpack:///./src/Client/app.js?");

/***/ }),

/***/ "./src/Client/client.js":
/*!******************************!*\
  !*** ./src/Client/client.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return render2; });\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"core-js/modules/es6.promise\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"core-js/modules/es6.array.iterator\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ \"./src/Client/routes.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers */ \"./src/Client/helpers.js\");\n\n // import React from 'react'\n// import { hydrate } from 'react-dom'\n// import App from '../Shared/application'\n// import { BrowserRouter } from 'react-router-dom'\n// const element = document.getElementById('app')\n// hydrate(\n//   <BrowserRouter>\n//     <App />\n//   </BrowserRouter>,\n//   element\n// )\n\n\n\n\n\n\n\nvar routeConfig = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__[\"convertCustomRouteConfig\"])(_routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n\nif (typeof window !== 'undefined') {\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_7__[\"ensureReady\"])(routeConfig).then(function () {\n    var props = JSON.parse(document.getElementById('props').dataset.props); // eslint-disable-line\n    // prettier-ignore\n\n    Object(react_dom__WEBPACK_IMPORTED_MODULE_3__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_5__[\"renderRoutes\"])(routeConfig, props)), document.getElementsByClassName('todoapp')[0] // eslint-disable-line\n    );\n  });\n}\n\nfunction render2(location, props) {\n  return Object(_helpers__WEBPACK_IMPORTED_MODULE_7__[\"ensureReady\"])(routeConfig, location).then(function () {\n    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n      context: {},\n      location: location\n    }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_5__[\"renderRoutes\"])(routeConfig, props));\n  });\n}\n\n//# sourceURL=webpack:///./src/Client/client.js?");

/***/ }),

/***/ "./src/Client/completed-todos.js":
/*!***************************************!*\
  !*** ./src/Client/completed-todos.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ActiveTodos; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ \"./src/Client/todoList.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\nfunction ActiveTodos(_ref) {\n  var todos = _ref.todos,\n      props = _objectWithoutProperties(_ref, [\"todos\"]);\n\n  var filteredTodos = todos.filter(function (todo) {\n    return todo.completed;\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _extends({\n    todos: filteredTodos\n  }, props));\n}\n\n//# sourceURL=webpack:///./src/Client/completed-todos.js?");

/***/ }),

/***/ "./src/Client/enums.js":
/*!*****************************!*\
  !*** ./src/Client/enums.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  ALL_TODOS: '/all',\n  ACTIVE_TODOS: '/active',\n  COMPLETED_TODOS: '/completed'\n});\n\n//# sourceURL=webpack:///./src/Client/enums.js?");

/***/ }),

/***/ "./src/Client/footer.js":
/*!******************************!*\
  !*** ./src/Client/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/Client/utils.js\");\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums */ \"./src/Client/enums.js\");\n\n\n\n\n\nfunction Footer(props) {\n  var activeTodoWord = _utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pluralize(props.count, 'item');\n  var nowShowing = props.nowShowing;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n    className: \"footer\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"todo-count\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, props.count), \" \", activeTodoWord, \" left\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"filters\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/all\",\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({\n      selected: nowShowing !== _enums__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ACTIVE_TODOS && nowShowing !== _enums__WEBPACK_IMPORTED_MODULE_4__[\"default\"].COMPLETED_TODOS\n    })\n  }, \"All\")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/active\",\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({\n      selected: nowShowing === _enums__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ACTIVE_TODOS\n    })\n  }, \"Active\")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/completed\",\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({\n      selected: nowShowing === _enums__WEBPACK_IMPORTED_MODULE_4__[\"default\"].COMPLETED_TODOS\n    })\n  }, \"Completed\"))), props.completedCount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"clear-completed\",\n    onClick: props.onClearCompleted\n  }, \"Clear completed\") : null);\n}\n\n//# sourceURL=webpack:///./src/Client/footer.js?");

/***/ }),

/***/ "./src/Client/helpers.js":
/*!*******************************!*\
  !*** ./src/Client/helpers.js ***!
  \*******************************/
/*! exports provided: generateAsyncRouteComponent, ensureReady, convertCustomRouteConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateAsyncRouteComponent\", function() { return generateAsyncRouteComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureReady\", function() { return ensureReady; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertCustomRouteConfig\", function() { return convertCustomRouteConfig; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n/**\n * Returns a new React component, ready to be instantiated.\n * Note the closure here protecting Component, and providing a unique\n * instance of Component to the static implementation of `load`.\n */\n\nfunction generateAsyncRouteComponent(_ref) {\n  var loader = _ref.loader,\n      Placeholder = _ref.Placeholder;\n  var Component = null;\n  return (\n    /*#__PURE__*/\n    function (_React$Component) {\n      _inherits(AsyncRouteComponent, _React$Component);\n\n      _createClass(AsyncRouteComponent, null, [{\n        key: \"load\",\n\n        /**\n         * Static so that you can call load against an uninstantiated version of\n         * this component. This should only be called one time outside of the\n         * normal render path.\n         */\n        value: function load() {\n          return loader().then(function (ResolvedComponent) {\n            Component = ResolvedComponent[\"default\"] || ResolvedComponent;\n          });\n        }\n      }]);\n\n      function AsyncRouteComponent() {\n        var _this;\n\n        _classCallCheck(this, AsyncRouteComponent);\n\n        _this = _possibleConstructorReturn(this, _getPrototypeOf(AsyncRouteComponent).call(this));\n        _this.updateState = _this.updateState.bind(_assertThisInitialized(_this));\n        _this.state = {\n          Component: Component\n        };\n        return _this;\n      }\n\n      _createClass(AsyncRouteComponent, [{\n        key: \"componentWillMount\",\n        value: function componentWillMount() {\n          AsyncRouteComponent.load().then(this.updateState);\n        }\n      }, {\n        key: \"updateState\",\n        value: function updateState() {\n          // Only update state if we don't already have a reference to the\n          // component, this prevent unnecessary renders.\n          if (this.state.Component !== Component) {\n            this.setState({\n              Component: Component\n            });\n          }\n        }\n      }, {\n        key: \"render\",\n        value: function render() {\n          var ComponentFromState = this.state.Component;\n\n          if (ComponentFromState) {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComponentFromState, this.props);\n          }\n\n          if (Placeholder) {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Placeholder, this.props);\n          }\n\n          return null;\n        }\n      }]);\n\n      return AsyncRouteComponent;\n    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)\n  );\n}\n/**\n * First match the routes via react-router-config's `matchRoutes` function.\n * Then iterate over all of the matched routes, if they've got a load function\n * call it.\n *\n * This helps us to make sure all the async code is loaded before rendering.\n */\n\nfunction ensureReady(routeConfig, providedLocation) {\n  // prettier-ignore\n  var matches = Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"matchRoutes\"])(routeConfig, providedLocation || location.pathname); // prettier-ignore\n\n  return Promise.all(matches.map(function (match) {\n    var component = match.route.component;\n\n    if (component && component.load) {\n      return component.load();\n    }\n\n    return undefined;\n  }));\n}\nfunction convertCustomRouteConfig(customRouteConfig, parentRoute) {\n  return customRouteConfig.map(function (route) {\n    if (typeof route.path === 'function') {\n      var _pathResult = route.path(parentRoute || '').replace('//', '/'); // prettier-ignore\n\n\n      return {\n        path: _pathResult,\n        component: route.component,\n        exact: route.exact,\n        routes: route.routes ? convertCustomRouteConfig(route.routes, _pathResult) : []\n      };\n    }\n\n    var pathResult = \"\".concat(parentRoute).concat(route.path); // prettier-ignore\n\n    return {\n      path: pathResult,\n      component: route.component,\n      exact: route.exact,\n      routes: route.routes ? convertCustomRouteConfig(route.routes, pathResult) : []\n    };\n  });\n}\n\n//# sourceURL=webpack:///./src/Client/helpers.js?");

/***/ }),

/***/ "./src/Client/routes.js":
/*!******************************!*\
  !*** ./src/Client/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/Client/app.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/Client/helpers.js\");\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj[\"default\"] = obj; return newObj; } }\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  component: _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  path: function path(parentRoute) {\n    return \"\".concat(parentRoute, \"/\");\n  },\n  routes: [{\n    path: function path(parentRoute) {\n      return \"\".concat(parentRoute, \"/\");\n    },\n    exact: true,\n    component: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"generateAsyncRouteComponent\"])({\n      loader: function loader() {\n        return Promise.resolve().then(function () {\n          return _interopRequireWildcard(__webpack_require__(/*! ./all-todos */ \"./src/Client/all-todos.js\"));\n        });\n      }\n    })\n  }, {\n    path: function path(parentRoute) {\n      return \"\".concat(parentRoute, \"/all\");\n    },\n    component: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"generateAsyncRouteComponent\"])({\n      loader: function loader() {\n        return Promise.resolve().then(function () {\n          return _interopRequireWildcard(__webpack_require__(/*! ./all-todos */ \"./src/Client/all-todos.js\"));\n        });\n      }\n    })\n  }, {\n    path: function path(parentRoute) {\n      return \"\".concat(parentRoute, \"/active\");\n    },\n    component: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"generateAsyncRouteComponent\"])({\n      loader: function loader() {\n        return Promise.resolve().then(function () {\n          return _interopRequireWildcard(__webpack_require__(/*! ./active-todos */ \"./src/Client/active-todos.js\"));\n        });\n      }\n    })\n  }, {\n    path: function path(parentRoute) {\n      return \"\".concat(parentRoute, \"/completed\");\n    },\n    component: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"generateAsyncRouteComponent\"])({\n      loader: function loader() {\n        return Promise.resolve().then(function () {\n          return _interopRequireWildcard(__webpack_require__(/*! ./completed-todos */ \"./src/Client/completed-todos.js\"));\n        });\n      }\n    })\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/Client/routes.js?");

/***/ }),

/***/ "./src/Client/todoItem.js":
/*!********************************!*\
  !*** ./src/Client/todoItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TodoItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar ESCAPE_KEY = 27;\nvar ENTER_KEY = 13;\n\nvar TodoItem =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(TodoItem, _React$Component);\n\n  function TodoItem(props) {\n    var _this;\n\n    _classCallCheck(this, TodoItem);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoItem).call(this, props));\n    _this.state = {\n      editText: props.todo.title\n    };\n    _this.handleEdit = _this.handleEdit.bind(_assertThisInitialized(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));\n    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n  /**\n   * This is a completely optional performance enhancement that you can\n   * implement on any React component. If you were to delete this method\n   * the app would still work correctly (and still be very performant!), we\n   * just use it as an example of how little code it takes to get an order\n   * of magnitude performance improvement.\n   */\n\n\n  _createClass(TodoItem, [{\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate(nextProps, nextState) {\n      return nextProps.todo !== this.props.todo || nextProps.editing !== this.props.editing || nextState.editText !== this.state.editText;\n    }\n    /**\n     * Safely manipulate the DOM after updating the state when invoking\n     * `this.props.onEdit()` in the `handleEdit` method above.\n     * For more info refer to notes at https://facebook.github.io/react/docs/component-api.html#setstate\n     * and https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate\n     */\n\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if (!prevProps.editing && this.props.editing) {\n        var node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.refs.editField);\n        node.focus();\n        node.setSelectionRange(node.value.length, node.value.length);\n      }\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit() {\n      var val = this.state.editText.trim();\n\n      if (val) {\n        this.props.onSave(val);\n        this.setState({\n          editText: val\n        });\n      } else {\n        this.props.onDestroy();\n      }\n    }\n  }, {\n    key: \"handleEdit\",\n    value: function handleEdit() {\n      this.props.onEdit();\n      this.setState({\n        editText: this.props.todo.title\n      });\n    }\n  }, {\n    key: \"handleKeyDown\",\n    value: function handleKeyDown(event) {\n      if (event.which === ESCAPE_KEY) {\n        this.setState({\n          editText: this.props.todo.title\n        });\n        this.props.onCancel(event);\n      } else if (event.which === ENTER_KEY) {\n        this.handleSubmit(event);\n      }\n    }\n  }, {\n    key: \"handleChange\",\n    value: function handleChange(event) {\n      if (this.props.editing) {\n        this.setState({\n          editText: event.target.value\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({\n          completed: this.props.todo.completed,\n          editing: this.props.editing\n        })\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"view\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        className: \"toggle\",\n        type: \"checkbox\",\n        checked: this.props.todo.completed,\n        onChange: this.props.onToggle\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        onDoubleClick: this.handleEdit\n      }, this.props.todo.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"destroy\",\n        onClick: this.props.onDestroy\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        ref: \"editField\",\n        className: \"edit\",\n        value: this.state.editText,\n        onBlur: this.handleSubmit,\n        onChange: this.handleChange,\n        onKeyDown: this.handleKeyDown\n      }));\n    }\n  }]);\n\n  return TodoItem;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/Client/todoItem.js?");

/***/ }),

/***/ "./src/Client/todoList.js":
/*!********************************!*\
  !*** ./src/Client/todoList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TodoList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoItem */ \"./src/Client/todoItem.js\");\n\n\nfunction TodoList(props) {\n  var todoItems = props.todos.map(function (todo) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      key: todo.id,\n      todo: todo,\n      onToggle: function onToggle() {\n        props.onToggle(todo);\n      },\n      onDestroy: function onDestroy() {\n        props.onDestroy(todo);\n      },\n      onEdit: function onEdit() {\n        props.onEdit(todo);\n      },\n      editing: props.editing(todo),\n      onSave: function onSave(text) {\n        props.onSave(todo, text);\n      },\n      onCancel: function onCancel() {\n        props.onCancel();\n      }\n    });\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, todoItems);\n}\n\n//# sourceURL=webpack:///./src/Client/todoList.js?");

/***/ }),

/***/ "./src/Client/utils.js":
/*!*****************************!*\
  !*** ./src/Client/utils.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* global localStorage */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  uuid: function uuid() {\n    function s4() {\n      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);\n    }\n\n    return \"\".concat(s4()).concat(s4(), \"-\").concat(s4(), \"-\").concat(s4(), \"-\").concat(s4(), \"-\").concat(s4()).concat(s4()).concat(s4());\n  },\n  pluralize: function pluralize(count, word) {\n    return count === 1 ? word : \"\".concat(word, \"s\");\n  },\n  store: function store(namespace, data) {\n    if (typeof window !== 'undefined') {\n      if (data) {\n        return localStorage.setItem(namespace, JSON.stringify(data));\n      }\n\n      var store = localStorage.getItem(namespace);\n      return store && JSON.parse(store) || [];\n    }\n\n    return [];\n  }\n});\n\n//# sourceURL=webpack:///./src/Client/utils.js?");

/***/ }),

/***/ 0:
/*!***************************************************************************************************!*\
  !*** multi core-js/modules/es6.promise core-js/modules/es6.array.iterator ./src/Client/client.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/modules/es6.promise */\"core-js/modules/es6.promise\");\n__webpack_require__(/*! core-js/modules/es6.array.iterator */\"core-js/modules/es6.array.iterator\");\nmodule.exports = __webpack_require__(/*! ./src/Client/client.js */\"./src/Client/client.js\");\n\n\n//# sourceURL=webpack:///multi_core-js/modules/es6.promise_core-js/modules/es6.array.iterator_./src/Client/client.js?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

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

/***/ })

/******/ });