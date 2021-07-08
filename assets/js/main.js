/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ (() => {



var metas = document.getElementsByTagName('meta');
var isDarkMode = false;
window.addEventListener("scroll", updateNav);
document.getElementById('darkButton').addEventListener("click", toggleDarkMode);
document.getElementById('realised').innerText += getMeta("author");

function updateNav() {
  var presentation = document.getElementById('presentation');
  var skills = document.getElementById('skills');
  var career = document.getElementById('career');
  var portfolio = document.getElementById('portfolio');
  var contact = document.getElementById('contact');
  var nav = document.getElementById('navigation');

  if (presentation.getBoundingClientRect().bottom > window.innerWidth / 7 * -1) {
    removeColors(nav);
    nav.classList.add("bg-primary");
    nav.classList.add("navbar-dark");
    removeActiveLink();
    document.getElementById('presentation-link').classList.add("active");
  } else if (skills.getBoundingClientRect().bottom > window.innerWidth / 7 * -1) {
    removeColors(nav);
    nav.classList.add("bg-body");
    nav.classList.add("navbar-light");
    removeActiveLink();
    document.getElementById('skills-link').classList.add("active");
  } else if (career.getBoundingClientRect().bottom > window.innerWidth / 7 * -1) {
    removeColors(nav);
    nav.classList.add("bg-danger");
    nav.classList.add("navbar-dark");
    removeActiveLink();
    document.getElementById('career-link').classList.add("active");
  } else if (portfolio.getBoundingClientRect().bottom > window.innerWidth / 7 * -1) {
    removeColors(nav);
    nav.classList.add("bg-body");
    nav.classList.add("navbar-light");
    removeActiveLink();
    document.getElementById('portfolio-link').classList.add("active");
  } else {
    removeColors(nav);
    nav.classList.add("bg-dark");
    nav.classList.add("navbar-dark");
    removeActiveLink();
    document.getElementById('contact-link').classList.add("active");
  }
}

function removeColors(e) {
  e.classList.remove("bg-primary");
  e.classList.remove("bg-secondary");
  e.classList.remove("bg-danger");
  e.classList.remove("bg-light");
  e.classList.remove("bg-dark");
  e.classList.remove("bg-white");
  e.classList.remove("bg-body");
  e.classList.remove("text-primary");
  e.classList.remove("text-secondary");
  e.classList.remove("text-dark");
  e.classList.remove("text-light");
  e.classList.remove("text-body");
  e.classList.remove("text-white");
  e.classList.remove("text-muted");
  e.classList.remove("navbar-light");
  e.classList.remove("navbar-dark");
}

function removeActiveLink() {
  var actives = document.querySelectorAll('.active');
  [].forEach.call(actives, function (e) {
    e.classList.remove("active");
  });
}

function toggleDarkMode() {
  var light = document.getElementById('light-style');
  var dark = document.getElementById('dark-style');

  if (!isDarkMode) {
    light.setAttribute("disabled", "true");
    dark.setAttribute("media", "(prefers-color-scheme: light)");
    isDarkMode = true;
  } else {
    light.setAttribute("disabled", "false");
    dark.setAttribute("media", "(prefers-color-scheme: dark)");
    isDarkMode = false;
  }
}

function getMeta(metaName) {
  var metas = document.getElementsByTagName('meta');

  for (var i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === metaName) {
      return metas[i].getAttribute('content');
    }
  }

  return '';
}

/***/ }),

/***/ "./src/sass/main.sass":
/*!****************************!*\
  !*** ./src/sass/main.sass ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/js/main": 0,
/******/ 			"assets/css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/css/main"], () => (__webpack_require__("./src/ts/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/main"], () => (__webpack_require__("./src/sass/main.sass")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;