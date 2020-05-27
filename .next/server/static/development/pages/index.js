module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/components.js":
/*!**********************************!*\
  !*** ./components/components.js ***!
  \**********************************/
/*! exports provided: default, Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HeroBanner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Skill\", function() { return Skill; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/nathanluu/portfolio/components/components.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction HeroBanner(props) {\n  return __jsx(\"div\", {\n    className: \"hero-backdrop leading-relaxed text-gray-800 p-10 md:p-16\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 2,\n      columnNumber: 12\n    }\n  }, __jsx(\"div\", {\n    className: \"w-full mb-8 md:mb-0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"md:float-right mb-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 17\n    }\n  }, __jsx(\"button\", {\n    className: \"mini-button mr-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 21\n    }\n  }, __jsx(\"i\", {\n    className: \"fab fa-github text-xl mt-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 25\n    }\n  })), __jsx(\"button\", {\n    className: \"mini-button mr-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 21\n    }\n  }, __jsx(\"i\", {\n    className: \"fab fa-twitter text-xl mt-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 25\n    }\n  })), __jsx(\"button\", {\n    className: \"mini-button mr-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 21\n    }\n  }, __jsx(\"i\", {\n    className: \"fab fa-linkedin-in text-xl mt-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 25\n    }\n  }))))), __jsx(\"h1\", {\n    className: \"text-xl\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, props.h1), __jsx(\"div\", {\n    className: \"text-5xl font-bold leading-snug\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, props.h2), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, props.h3)), __jsx(\"p\", {\n    className: \"max-w-lg mt-5 text-lg text-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, props.paragraph));\n}\nfunction Skill(props) {\n  return __jsx(\"div\", {\n    className: \"text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    className: \"w-32 h-32 mx-auto\",\n    style: {\n      borderRadius: '36px'\n    },\n    src: props.img,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(\"h4\", {\n    className: \"font-semibold text-xl text-gray-800 mt-4 mt-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, props.title));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbXBvbmVudHMuanM/MzNkZSJdLCJuYW1lcyI6WyJIZXJvQmFubmVyIiwicHJvcHMiLCJoMSIsImgyIiwiaDMiLCJwYXJhZ3JhcGgiLCJTa2lsbCIsImJvcmRlclJhZGl1cyIsImltZyIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFlLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3RDLFNBQU87QUFBSyxhQUFTLEVBQUMsMERBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNIO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsYUFBUyxFQUFDLGtCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsNEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSTtBQUFRLGFBQVMsRUFBQyxrQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLDZCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLEVBT0k7QUFBUSxhQUFTLEVBQUMsa0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxpQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FQSixDQURKLENBREosQ0FERyxFQWdCSDtBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUJBLEtBQUssQ0FBQ0MsRUFBL0IsQ0FoQkcsRUFpQkg7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQkQsS0FBSyxDQUFDRSxFQUF4QixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLRixLQUFLLENBQUNHLEVBQVgsQ0FGSixDQWpCRyxFQXFCSDtBQUFHLGFBQVMsRUFBQyxxQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9ESCxLQUFLLENBQUNJLFNBQTFELENBckJHLENBQVA7QUF1Qkg7QUFFTSxTQUFTQyxLQUFULENBQWVMLEtBQWYsRUFBc0I7QUFDekIsU0FBUTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSjtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFtQyxTQUFLLEVBQUU7QUFBQ00sa0JBQVksRUFBRTtBQUFmLEtBQTFDO0FBQWtFLE9BQUcsRUFBRU4sS0FBSyxDQUFDTyxHQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREksRUFFSjtBQUFJLGFBQVMsRUFBQywrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStEUCxLQUFLLENBQUNRLEtBQXJFLENBRkksQ0FBUjtBQUtIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb21wb25lbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVyb0Jhbm5lcihwcm9wcykge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYmFja2Ryb3AgbGVhZGluZy1yZWxheGVkIHRleHQtZ3JheS04MDAgcC0xMCBtZDpwLTE2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTggbWQ6bWItMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmbG9hdC1yaWdodCBtYi00XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtaW5pLWJ1dHRvbiBtci00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViIHRleHQteGwgbXQtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWluaS1idXR0b24gbXItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXIgdGV4dC14bCBtdC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtaW5pLWJ1dHRvbiBtci00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW4taW4gdGV4dC14bCBtdC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGxcIj57cHJvcHMuaDF9PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgbGVhZGluZy1zbnVnXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiXCI+e3Byb3BzLmgyfTwvaDI+XG4gICAgICAgICAgICA8aDM+e3Byb3BzLmgzfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy1sZyBtdC01IHRleHQtbGcgdGV4dC1ncmF5LTcwMFwiPntwcm9wcy5wYXJhZ3JhcGh9PC9wPlxuICAgIDwvZGl2PlxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2tpbGwocHJvcHMpIHtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTMyIGgtMzIgbXgtYXV0b1wiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnMzZweCd9fSBzcmM9e3Byb3BzLmltZ30vPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXhsIHRleHQtZ3JheS04MDAgbXQtNCBtdC04XCI+e3Byb3BzLnRpdGxlfTwvaDQ+XG4gICAgPC9kaXY+KTtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/components.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components */ \"./components/components.js\");\nvar _jsxFileName = \"/Users/nathanluu/portfolio/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => __jsx(\"div\", {\n  className: \"max-w-5xl mx-auto\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }\n}, __jsx(_components_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  h1: \"Hi, my name is\",\n  h2: \"Nathan Luu.\",\n  h3: \"I build stuff for the web.\",\n  paragraph: \"I'm a high school senior from San Diego, CA who will be studying computer science at Brown University in the fall. I love designing and developing performant, user-centric websites and apps.\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }\n}), __jsx(\"h3\", {\n  className: \"section-heading ml-8 lg:ml-0\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }\n}, \"Skills\"), __jsx(\"div\", {\n  className: \"skills-backdrop p-8 md:p-16\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }\n}, __jsx(\"div\", {\n  className: \"grid grid-cols-2 md:grid-cols-3 gap-16\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 13\n  }\n}, __jsx(_components_components__WEBPACK_IMPORTED_MODULE_2__[\"Skill\"], {\n  img: \"/frontend.png\",\n  title: \"Frontend\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 17\n  }\n}), __jsx(_components_components__WEBPACK_IMPORTED_MODULE_2__[\"Skill\"], {\n  img: \"/backend.png\",\n  title: \"Backend\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 17\n  }\n}), __jsx(_components_components__WEBPACK_IMPORTED_MODULE_2__[\"Skill\"], {\n  img: \"/ui_design.png\",\n  title: \"UI Design\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 17\n  }\n}), __jsx(_components_components__WEBPACK_IMPORTED_MODULE_2__[\"Skill\"], {\n  img: \"/ios_development.png\",\n  title: \"iOS Development\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 17\n  }\n}), __jsx(_components_components__WEBPACK_IMPORTED_MODULE_2__[\"Skill\"], {\n  img: \"/ui_design.png\",\n  title: \"Backend\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 17\n  }\n}), __jsx(_components_components__WEBPACK_IMPORTED_MODULE_2__[\"Skill\"], {\n  img: \"/frontend.png\",\n  title: \"Customer Service\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 17\n  }\n})))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxxRUFDWDtBQUFLLFdBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0ksTUFBQyw4REFBRDtBQUFZLElBQUUsRUFBQyxnQkFBZjtBQUFnQyxJQUFFLEVBQUMsYUFBbkM7QUFBaUQsSUFBRSxFQUFDLDRCQUFwRDtBQUFpRixXQUFTLEVBQUMsZ01BQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFESixFQUdJO0FBQUksV0FBUyxFQUFDLDhCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixFQUlJO0FBQUssV0FBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFLLFdBQVMsRUFBQyx3Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0ksTUFBQyw0REFBRDtBQUFPLEtBQUcsRUFBQyxlQUFYO0FBQTJCLE9BQUssRUFBQyxVQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREosRUFFSSxNQUFDLDREQUFEO0FBQU8sS0FBRyxFQUFDLGNBQVg7QUFBMEIsT0FBSyxFQUFDLFNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGSixFQUdJLE1BQUMsNERBQUQ7QUFBTyxLQUFHLEVBQUMsZ0JBQVg7QUFBNEIsT0FBSyxFQUFDLFdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFISixFQU1JLE1BQUMsNERBQUQ7QUFBTyxLQUFHLEVBQUMsc0JBQVg7QUFBa0MsT0FBSyxFQUFDLGlCQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTkosRUFPSSxNQUFDLDREQUFEO0FBQU8sS0FBRyxFQUFDLGdCQUFYO0FBQTRCLE9BQUssRUFBQyxTQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUEosRUFRSSxNQUFDLDREQUFEO0FBQU8sS0FBRyxFQUFDLGVBQVg7QUFBMkIsT0FBSyxFQUFDLGtCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUkosQ0FESixDQUpKLENBREoiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBIZXJvQmFubmVyLCB7U2tpbGx9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbXBvbmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNXhsIG14LWF1dG9cIj5cbiAgICAgICAgPEhlcm9CYW5uZXIgaDE9XCJIaSwgbXkgbmFtZSBpc1wiIGgyPVwiTmF0aGFuIEx1dS5cIiBoMz1cIkkgYnVpbGQgc3R1ZmYgZm9yIHRoZSB3ZWIuXCIgcGFyYWdyYXBoPVwiSSdtIGEgaGlnaCBzY2hvb2wgc2VuaW9yIGZyb20gU2FuIERpZWdvLCBDQSB3aG8gd2lsbCBiZSBzdHVkeWluZyBjb21wdXRlciBzY2llbmNlIGF0IEJyb3duIFVuaXZlcnNpdHkgaW4gdGhlIGZhbGwuIEkgbG92ZSBkZXNpZ25pbmcgYW5kIGRldmVsb3BpbmcgcGVyZm9ybWFudCwgdXNlci1jZW50cmljIHdlYnNpdGVzIGFuZCBhcHBzLlwiLz5cblxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkaW5nIG1sLTggbGc6bWwtMFwiPlNraWxsczwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzLWJhY2tkcm9wIHAtOCBtZDpwLTE2XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTE2XCI+XG4gICAgICAgICAgICAgICAgPFNraWxsIGltZz1cIi9mcm9udGVuZC5wbmdcIiB0aXRsZT1cIkZyb250ZW5kXCIvPlxuICAgICAgICAgICAgICAgIDxTa2lsbCBpbWc9XCIvYmFja2VuZC5wbmdcIiB0aXRsZT1cIkJhY2tlbmRcIi8+XG4gICAgICAgICAgICAgICAgPFNraWxsIGltZz1cIi91aV9kZXNpZ24ucG5nXCIgdGl0bGU9XCJVSSBEZXNpZ25cIi8+XG5cblxuICAgICAgICAgICAgICAgIDxTa2lsbCBpbWc9XCIvaW9zX2RldmVsb3BtZW50LnBuZ1wiIHRpdGxlPVwiaU9TIERldmVsb3BtZW50XCIvPlxuICAgICAgICAgICAgICAgIDxTa2lsbCBpbWc9XCIvdWlfZGVzaWduLnBuZ1wiIHRpdGxlPVwiQmFja2VuZFwiLz5cbiAgICAgICAgICAgICAgICA8U2tpbGwgaW1nPVwiL2Zyb250ZW5kLnBuZ1wiIHRpdGxlPVwiQ3VzdG9tZXIgU2VydmljZVwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nathanluu/portfolio/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });