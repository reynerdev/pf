module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./public/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("PVTQ");

// EXTERNAL MODULE: ./public/css/animate.min.css
var animate_min = __webpack_require__("FAzj");

// EXTERNAL MODULE: ./public/css/boxicons.min.css
var boxicons_min = __webpack_require__("cYzS");

// EXTERNAL MODULE: ./public/css/flaticon.css
var flaticon = __webpack_require__("2sAp");

// EXTERNAL MODULE: ./node_modules/react-modal-video/css/modal-video.min.css
var modal_video_min = __webpack_require__("HP2+");

// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__("5Buo");

// EXTERNAL MODULE: ./public/css/style.css
var style = __webpack_require__("znoa");

// EXTERNAL MODULE: ./public/css/responsive.css
var responsive = __webpack_require__("B5sv");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/_App/GoTop.js




const GoTop = ({
  scrollStepInPx,
  delayInMs
}) => {
  const [thePosition, setThePosition] = external_react_default.a.useState(false);
  const timeoutRef = external_react_default.a.useRef(null);
  external_react_default.a.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }

    window.scroll(0, window.pageYOffset - scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, delayInMs);
  };

  const renderGoTopIcon = () => {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `go-top ${thePosition ? 'active' : ''}`,
      onClick: scrollToTop,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
        className: "bx bxs-up-arrow-alt"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
        className: "bx bxs-up-arrow-alt"
      })]
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_default.a.Fragment, {
    children: renderGoTopIcon()
  });
};

/* harmony default export */ var _App_GoTop = (GoTop);
// CONCATENATED MODULE: ./components/_App/Preloader.js




const Preloader = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "loader",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "d-table",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "d-table-cell",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "preloader__wrapper",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "preloader__circle",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "preloader__circle-line preloader__circle-line--1"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "preloader__circle-line preloader__circle-line--2"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "preloader__circle-line preloader__circle-line--3"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "preloader__circle-line preloader__circle-line--4"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "preloader__circle-line preloader__circle-line--5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "preloader__circle-line preloader__circle-line--6"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "preloader__circle-line preloader__circle-line--7"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "preloader__circle-line preloader__circle-line--8"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "preloader__circle-line preloader__circle-line--9"
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ var _App_Preloader = (Preloader);
// CONCATENATED MODULE: ./components/_App/Layout.js







const Layout = ({
  children
}) => {
  // Preloader
  const [loader, setLoader] = external_react_default.a.useState(true);
  external_react_default.a.useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Reyner portafolio template"
      })
    }), children, loader ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(_App_Preloader, {}) : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])(_App_GoTop, {
      scrollStepInPx: "100",
      delayInMs: "10.50"
    })]
  });
};

/* harmony default export */ var _App_Layout = (Layout);
// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(_App_Layout, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
  });
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "2sAp":
/***/ (function(module, exports) {



/***/ }),

/***/ "5Buo":
/***/ (function(module, exports) {



/***/ }),

/***/ "B5sv":
/***/ (function(module, exports) {



/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FAzj":
/***/ (function(module, exports) {



/***/ }),

/***/ "HP2+":
/***/ (function(module, exports) {



/***/ }),

/***/ "PVTQ":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cYzS":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "znoa":
/***/ (function(module, exports) {



/***/ })

/******/ });