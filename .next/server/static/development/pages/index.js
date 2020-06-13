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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HeroBanner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Skill\", function() { return Skill; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/nathanluu/portfolio/components/components.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction HeroBanner(props) {\n  return __jsx(\"div\", {\n    className: \"hero-backdrop leading-relaxed text-gray-800 p-10 md:p-16\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 2,\n      columnNumber: 12\n    }\n  }, __jsx(\"div\", {\n    className: \"w-full mb-8 md:mb-0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"md:float-right mb-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 17\n    }\n  }, __jsx(\"button\", {\n    className: \"mini-button mr-4\",\n    onClick: () => {\n      location.href = 'https://github.com/nthnluu';\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 21\n    }\n  }, __jsx(\"i\", {\n    className: \"fab fa-github text-xl mt-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 25\n    }\n  })), __jsx(\"button\", {\n    className: \"mini-button mr-4\",\n    onClick: () => {\n      location.href = 'https://twitter.com/nthnluu';\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 21\n    }\n  }, __jsx(\"i\", {\n    className: \"fab fa-twitter text-xl mt-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 25\n    }\n  })), __jsx(\"button\", {\n    className: \"mini-button mr-4\",\n    onClick: () => {\n      location.href = 'https://www.linkedin.com/in/nathan-luu-18a51b68/';\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }, __jsx(\"i\", {\n    className: \"fab fa-linkedin-in text-xl mt-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 25\n    }\n  }))))), __jsx(\"h1\", {\n    className: \"text-xl\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, props.h1), __jsx(\"div\", {\n    className: \"text-5xl font-bold leading-snug\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, props.h2), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, props.h3)), __jsx(\"p\", {\n    className: \"max-w-lg mt-5 text-lg text-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, props.paragraph));\n}\nfunction Skill(props) {\n  return __jsx(\"div\", {\n    className: \"text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    alt: \"\",\n    className: \"w-32 h-32 mx-auto\",\n    style: {\n      borderRadius: '36px'\n    },\n    src: props.img,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }), __jsx(\"h4\", {\n    className: \"font-semibold text-xl text-gray-800 mt-4 mt-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, props.title));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbXBvbmVudHMuanM/MzNkZSJdLCJuYW1lcyI6WyJIZXJvQmFubmVyIiwicHJvcHMiLCJsb2NhdGlvbiIsImhyZWYiLCJoMSIsImgyIiwiaDMiLCJwYXJhZ3JhcGgiLCJTa2lsbCIsImJvcmRlclJhZGl1cyIsImltZyIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFlLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3RDLFNBQU87QUFBSyxhQUFTLEVBQUMsMERBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNIO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsYUFBUyxFQUFDLGtCQUFsQjtBQUFxQyxXQUFPLEVBQUUsTUFBTTtBQUNoREMsY0FBUSxDQUFDQyxJQUFULEdBQWdCLDRCQUFoQjtBQUNILEtBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdJO0FBQUcsYUFBUyxFQUFDLDRCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURKLEVBTUk7QUFBUSxhQUFTLEVBQUMsa0JBQWxCO0FBQXFDLFdBQU8sRUFBRSxNQUFNO0FBQ2hERCxjQUFRLENBQUNDLElBQVQsR0FBZ0IsNkJBQWhCO0FBQ0gsS0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0k7QUFBRyxhQUFTLEVBQUMsNkJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBTkosRUFXSTtBQUFRLGFBQVMsRUFBQyxrQkFBbEI7QUFBcUMsV0FBTyxFQUFFLE1BQU07QUFDaERELGNBQVEsQ0FBQ0MsSUFBVCxHQUFnQixrREFBaEI7QUFDSCxLQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSTtBQUFHLGFBQVMsRUFBQyxpQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FYSixDQURKLENBREosQ0FERyxFQXNCSDtBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUJGLEtBQUssQ0FBQ0csRUFBL0IsQ0F0QkcsRUF1Qkg7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQkgsS0FBSyxDQUFDSSxFQUF4QixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSixLQUFLLENBQUNLLEVBQVgsQ0FGSixDQXZCRyxFQTJCSDtBQUFHLGFBQVMsRUFBQyxxQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9ETCxLQUFLLENBQUNNLFNBQTFELENBM0JHLENBQVA7QUE2Qkg7QUFFTSxTQUFTQyxLQUFULENBQWVQLEtBQWYsRUFBc0I7QUFDekIsU0FBUTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSjtBQUFLLE9BQUcsRUFBQyxFQUFUO0FBQVksYUFBUyxFQUFDLG1CQUF0QjtBQUEwQyxTQUFLLEVBQUU7QUFBQ1Esa0JBQVksRUFBRTtBQUFmLEtBQWpEO0FBQXlFLE9BQUcsRUFBRVIsS0FBSyxDQUFDUyxHQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREksRUFFSjtBQUFJLGFBQVMsRUFBQywrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStEVCxLQUFLLENBQUNVLEtBQXJFLENBRkksQ0FBUjtBQUtIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb21wb25lbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVyb0Jhbm5lcihwcm9wcykge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYmFja2Ryb3AgbGVhZGluZy1yZWxheGVkIHRleHQtZ3JheS04MDAgcC0xMCBtZDpwLTE2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTggbWQ6bWItMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmbG9hdC1yaWdodCBtYi00XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtaW5pLWJ1dHRvbiBtci00XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vbnRobmx1dSc7XG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YiB0ZXh0LXhsIG10LTFcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1pbmktYnV0dG9uIG1yLTRcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vbnRobmx1dSc7XG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXIgdGV4dC14bCBtdC0xXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtaW5pLWJ1dHRvbiBtci00XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbmF0aGFuLWx1dS0xOGE1MWI2OC8nO1xuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbi1pbiB0ZXh0LXhsIG10LTFcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bFwiPntwcm9wcy5oMX08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCBsZWFkaW5nLXNudWdcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJcIj57cHJvcHMuaDJ9PC9oMj5cbiAgICAgICAgICAgIDxoMz57cHJvcHMuaDN9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1heC13LWxnIG10LTUgdGV4dC1sZyB0ZXh0LWdyYXktNzAwXCI+e3Byb3BzLnBhcmFncmFwaH08L3A+XG4gICAgPC9kaXY+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTa2lsbChwcm9wcykge1xuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzTmFtZT1cInctMzIgaC0zMiBteC1hdXRvXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6ICczNnB4J319IHNyYz17cHJvcHMuaW1nfS8+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteGwgdGV4dC1ncmF5LTgwMCBtdC00IG10LThcIj57cHJvcHMudGl0bGV9PC9oND5cbiAgICA8L2Rpdj4pO1xuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/components.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components */ \"./components/components.js\");\nvar _jsxFileName = \"/Users/nathanluu/portfolio/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => __jsx(\"div\", {\n  className: \"max-w-5xl mx-auto\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }\n}, __jsx(_components_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  h1: \"Hi, my name is\",\n  h2: \"Nathan Luu.\",\n  h3: \"I build stuff for the web.\",\n  paragraph: \"I'm a student from San Diego, CA who loves designing and developing performing, user-centric, and accessible websites and apps.\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }\n}), __jsx(\"h3\", {\n  className: \"section-heading ml-8 lg:ml-0\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }\n}, \"Skills\"), __jsx(\"div\", {\n  className: \"skills-backdrop p-8 md:p-16\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }\n}, __jsx(\"div\", {\n  className: \"grid grid-cols-2 md:grid-cols-3 gap-16\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 13\n  }\n}, __jsx(_components_components__WEBPACK_IMPORTED_MODULE_1__[\"Skill\"], {\n  img: \"/frontend.png\",\n  title: \"Frontend\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 17\n  }\n}), __jsx(_components_components__WEBPACK_IMPORTED_MODULE_1__[\"Skill\"], {\n  img: \"/backend.png\",\n  title: \"Backend\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 17\n  }\n}), __jsx(_components_components__WEBPACK_IMPORTED_MODULE_1__[\"Skill\"], {\n  img: \"/ui_design.png\",\n  title: \"UI Design\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 17\n  }\n}), __jsx(_components_components__WEBPACK_IMPORTED_MODULE_1__[\"Skill\"], {\n  img: \"/ios_development.png\",\n  title: \"iOS Development\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 17\n  }\n}), __jsx(_components_components__WEBPACK_IMPORTED_MODULE_1__[\"Skill\"], {\n  img: \"/ui_design.png\",\n  title: \"Backend\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 17\n  }\n}), __jsx(_components_components__WEBPACK_IMPORTED_MODULE_1__[\"Skill\"], {\n  img: \"/frontend.png\",\n  title: \"Customer Service\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 17\n  }\n})))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVlLHFFQUNYO0FBQUssV0FBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSSxNQUFDLDhEQUFEO0FBQVksSUFBRSxFQUFDLGdCQUFmO0FBQWdDLElBQUUsRUFBQyxhQUFuQztBQUFpRCxJQUFFLEVBQUMsNEJBQXBEO0FBQWlGLFdBQVMsRUFBQyxpSUFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURKLEVBR0k7QUFBSSxXQUFTLEVBQUMsOEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLEVBSUk7QUFBSyxXQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNJO0FBQUssV0FBUyxFQUFDLHdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSSxNQUFDLDREQUFEO0FBQU8sS0FBRyxFQUFDLGVBQVg7QUFBMkIsT0FBSyxFQUFDLFVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFESixFQUVJLE1BQUMsNERBQUQ7QUFBTyxLQUFHLEVBQUMsY0FBWDtBQUEwQixPQUFLLEVBQUMsU0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZKLEVBR0ksTUFBQyw0REFBRDtBQUFPLEtBQUcsRUFBQyxnQkFBWDtBQUE0QixPQUFLLEVBQUMsV0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUhKLEVBTUksTUFBQyw0REFBRDtBQUFPLEtBQUcsRUFBQyxzQkFBWDtBQUFrQyxPQUFLLEVBQUMsaUJBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFOSixFQU9JLE1BQUMsNERBQUQ7QUFBTyxLQUFHLEVBQUMsZ0JBQVg7QUFBNEIsT0FBSyxFQUFDLFNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFQSixFQVFJLE1BQUMsNERBQUQ7QUFBTyxLQUFHLEVBQUMsZUFBWDtBQUEyQixPQUFLLEVBQUMsa0JBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFSSixDQURKLENBSkosQ0FESiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlcm9CYW5uZXIsIHtTa2lsbH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy01eGwgbXgtYXV0b1wiPlxuICAgICAgICA8SGVyb0Jhbm5lciBoMT1cIkhpLCBteSBuYW1lIGlzXCIgaDI9XCJOYXRoYW4gTHV1LlwiIGgzPVwiSSBidWlsZCBzdHVmZiBmb3IgdGhlIHdlYi5cIiBwYXJhZ3JhcGg9XCJJJ20gYSBzdHVkZW50IGZyb20gU2FuIERpZWdvLCBDQSB3aG8gbG92ZXMgZGVzaWduaW5nIGFuZCBkZXZlbG9waW5nIHBlcmZvcm1pbmcsIHVzZXItY2VudHJpYywgYW5kIGFjY2Vzc2libGUgd2Vic2l0ZXMgYW5kIGFwcHMuXCIvPlxuXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRpbmcgbWwtOCBsZzptbC0wXCI+U2tpbGxzPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHMtYmFja2Ryb3AgcC04IG1kOnAtMTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBnYXAtMTZcIj5cbiAgICAgICAgICAgICAgICA8U2tpbGwgaW1nPVwiL2Zyb250ZW5kLnBuZ1wiIHRpdGxlPVwiRnJvbnRlbmRcIi8+XG4gICAgICAgICAgICAgICAgPFNraWxsIGltZz1cIi9iYWNrZW5kLnBuZ1wiIHRpdGxlPVwiQmFja2VuZFwiLz5cbiAgICAgICAgICAgICAgICA8U2tpbGwgaW1nPVwiL3VpX2Rlc2lnbi5wbmdcIiB0aXRsZT1cIlVJIERlc2lnblwiLz5cblxuXG4gICAgICAgICAgICAgICAgPFNraWxsIGltZz1cIi9pb3NfZGV2ZWxvcG1lbnQucG5nXCIgdGl0bGU9XCJpT1MgRGV2ZWxvcG1lbnRcIi8+XG4gICAgICAgICAgICAgICAgPFNraWxsIGltZz1cIi91aV9kZXNpZ24ucG5nXCIgdGl0bGU9XCJCYWNrZW5kXCIvPlxuICAgICAgICAgICAgICAgIDxTa2lsbCBpbWc9XCIvZnJvbnRlbmQucG5nXCIgdGl0bGU9XCJDdXN0b21lciBTZXJ2aWNlXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nathanluu/portfolio/pages/index.js */"./pages/index.js");


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