/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ (() => {

eval("\n\nvar start = performance.now();\n\nwindow.onload = function () {\n  var end = performance.now();\n  console.log(\"Page chargée en \" + Math.round(end - start) / 1000 + \" secondes\");\n};\n\nwindow.addEventListener(\"scroll\", updateNav);\nfetch(\"assets/html/modals.html\").then(function (response) {\n  return response.text();\n}).then(function (data) {\n  document.body.innerHTML += data;\n});\n\nfunction updateNav() {\n  var presentation = document.getElementById('presentation');\n  var skills = document.getElementById('skills');\n  var career = document.getElementById('career');\n  var portfolio = document.getElementById('portfolio');\n  var contact = document.getElementById('contact');\n  var nav = document.getElementById('navigation');\n\n  if (presentation.getBoundingClientRect().bottom > window.innerWidth / 7 * -1) {\n    removeColors(nav);\n    nav.classList.add(\"bg-primary\");\n    nav.classList.add(\"navbar-dark\");\n    removeActiveLink();\n    document.getElementById('presentation-link').classList.add(\"active\");\n  } else if (skills.getBoundingClientRect().bottom > window.innerWidth / 7 * -1) {\n    removeColors(nav);\n    nav.classList.add(\"bg-body\");\n    nav.classList.add(\"navbar-light\");\n    removeActiveLink();\n    document.getElementById('skills-link').classList.add(\"active\");\n  } else if (career.getBoundingClientRect().bottom > window.innerWidth / 7 * -1) {\n    removeColors(nav);\n    nav.classList.add(\"bg-danger\");\n    nav.classList.add(\"navbar-dark\");\n    removeActiveLink();\n    document.getElementById('career-link').classList.add(\"active\");\n  } else if (portfolio.getBoundingClientRect().bottom > window.innerWidth / 7 * -1) {\n    removeColors(nav);\n    nav.classList.add(\"bg-body\");\n    nav.classList.add(\"navbar-light\");\n    removeActiveLink();\n    document.getElementById('portfolio-link').classList.add(\"active\");\n  } else {\n    removeColors(nav);\n    nav.classList.add(\"bg-dark\");\n    nav.classList.add(\"navbar-dark\");\n    removeActiveLink();\n    document.getElementById('contact-link').classList.add(\"active\");\n  }\n}\n\nfunction removeColors(e) {\n  e.classList.remove(\"bg-primary\");\n  e.classList.remove(\"bg-secondary\");\n  e.classList.remove(\"bg-danger\");\n  e.classList.remove(\"bg-light\");\n  e.classList.remove(\"bg-dark\");\n  e.classList.remove(\"bg-white\");\n  e.classList.remove(\"bg-body\");\n  e.classList.remove(\"text-primary\");\n  e.classList.remove(\"text-secondary\");\n  e.classList.remove(\"text-dark\");\n  e.classList.remove(\"text-light\");\n  e.classList.remove(\"text-body\");\n  e.classList.remove(\"text-white\");\n  e.classList.remove(\"text-muted\");\n  e.classList.remove(\"navbar-light\");\n  e.classList.remove(\"navbar-dark\");\n}\n\nfunction removeActiveLink() {\n  var actives = document.querySelectorAll('.active');\n  [].forEach.call(actives, function (e) {\n    e.classList.remove(\"active\");\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYm91dC1tZS8uL3NyYy90cy9tYWluLnRzPzY0ZjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBWixFQUFaOztBQUNBLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFlBQUs7QUFDakIsTUFBSSxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQVosRUFBVjtBQUNBLFNBQU8sQ0FBQyxHQUFSLENBQVkscUJBQXFCLElBQUksQ0FBQyxLQUFMLENBQVcsR0FBRyxHQUFDLEtBQWYsSUFBc0IsSUFBM0MsR0FBa0QsV0FBOUQ7QUFDSCxDQUhEOztBQUlBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxTQUFsQztBQUNBLEtBQUssQ0FBQyx5QkFBRCxDQUFMLENBQ0ssSUFETCxDQUNVLGtCQUFRLEVBQUc7QUFDYixTQUFPLFFBQVEsQ0FBQyxJQUFULEVBQVA7QUFDSCxDQUhMLEVBSUssSUFKTCxDQUlVLGNBQUksRUFBRztBQUNULFVBQVEsQ0FBQyxJQUFULENBQWMsU0FBZCxJQUEyQixJQUEzQjtBQUNILENBTkw7O0FBUUEsU0FBUyxTQUFULEdBQWtCO0FBQ2QsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBckI7QUFDQSxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBQ0EsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFdBQXhCLENBQWxCO0FBQ0EsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBaEI7QUFDQSxNQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixZQUF4QixDQUFWOztBQUVBLE1BQUksWUFBWSxDQUFDLHFCQUFiLEdBQXFDLE1BQXJDLEdB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QixXQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixZQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixXQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixZQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixZQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixjQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixhQUFuQjtBQUNIOztBQUVELFNBQVMsZ0JBQVQsR0FBeUI7QUFDckIsTUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLFNBQTFCLENBQWQ7QUFDQSxLQUFHLE9BQUgsQ0FBVyxJQUFYLENBQWdCLE9BQWhCLEVBQXlCLFVBQVUsQ0FBVixFQUFvQjtBQUN6QyxLQUFDLENBQUMsU0FBRixDQUFZLE1BQVosQ0FBbUIsUUFBbkI7QUFDSCxHQUZEO0FBR0giLCJmaWxlIjoiLi9zcmMvdHMvbWFpbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG53aW5kb3cub25sb2FkID0gKCkgPT57XHJcbiAgICBsZXQgZW5kID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlBhZ2UgY2hhcmfDqWUgZW4gXCIgKyBNYXRoLnJvdW5kKGVuZC1zdGFydCkvMTAwMCArIFwiIHNlY29uZGVzXCIpO1xyXG59XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZU5hdik7XHJcbmZldGNoKFwiYXNzZXRzL2h0bWwvbW9kYWxzLmh0bWxcIilcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gZGF0YTtcclxuICAgIH0pO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlTmF2KCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlc2VudGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXNlbnRhdGlvbicpO1xyXG4gICAgY29uc3Qgc2tpbGxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NraWxscycpO1xyXG4gICAgY29uc3QgY2FyZWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmVlcicpO1xyXG4gICAgY29uc3QgcG9ydGZvbGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcnRmb2xpbycpO1xyXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XHJcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmlnYXRpb24nKTtcclxuXHJcbiAgICBpZiAocHJlc2VudGF0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+ICh3aW5kb3cuaW5uZXJXaWR0aC83KSAqIC0xKSB7XHJcbiAgICAgICAgcmVtb3ZlQ29sb3JzKG5hdik7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJiZy1wcmltYXJ5XCIpO1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWRhcmtcIik7XHJcbiAgICAgICAgcmVtb3ZlQWN0aXZlTGluaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzZW50YXRpb24tbGluaycpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9IGVsc2UgaWYgKHNraWxscy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPiAod2luZG93LmlubmVyV2lkdGggLyA3KSAqIC0xKSB7XHJcbiAgICAgICAgcmVtb3ZlQ29sb3JzKG5hdik7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJiZy1ib2R5XCIpO1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWxpZ2h0XCIpO1xyXG4gICAgICAgIHJlbW92ZUFjdGl2ZUxpbmsoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2tpbGxzLWxpbmsnKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfSBlbHNlIGlmIChjYXJlZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tID4gKHdpbmRvdy5pbm5lcldpZHRoIC8gNykgKiAtMSkge1xyXG4gICAgICAgIHJlbW92ZUNvbG9ycyhuYXYpO1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwiYmctZGFuZ2VyXCIpO1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWRhcmtcIik7XHJcbiAgICAgICAgcmVtb3ZlQWN0aXZlTGluaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJlZXItbGluaycpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9IGVsc2UgaWYgKHBvcnRmb2xpby5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPiAod2luZG93LmlubmVyV2lkdGggLyA3KSAqIC0xKSB7XHJcbiAgICAgICAgcmVtb3ZlQ29sb3JzKG5hdik7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJiZy1ib2R5XCIpO1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWxpZ2h0XCIpO1xyXG4gICAgICAgIHJlbW92ZUFjdGl2ZUxpbmsoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9ydGZvbGlvLWxpbmsnKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZW1vdmVDb2xvcnMobmF2KTtcclxuICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZChcImJnLWRhcmtcIik7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItZGFya1wiKTtcclxuICAgICAgICByZW1vdmVBY3RpdmVMaW5rKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtbGluaycpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNvbG9ycyhlOiBFbGVtZW50KTp2b2lkIHtcclxuICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLXByaW1hcnlcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1zZWNvbmRhcnlcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1kYW5nZXJcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1saWdodFwiKTtcclxuICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWRhcmtcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy13aGl0ZVwiKTtcclxuICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWJvZHlcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXByaW1hcnlcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXNlY29uZGFyeVwiKTtcclxuICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtZGFya1wiKTtcclxuICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtbGlnaHRcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWJvZHlcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXdoaXRlXCIpO1xyXG4gICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1tdXRlZFwiKTtcclxuICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1saWdodFwiKTtcclxuICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1kYXJrXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBY3RpdmVMaW5rKCk6dm9pZCB7XHJcbiAgICBsZXQgYWN0aXZlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3RpdmUnKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChhY3RpdmVzLCBmdW5jdGlvbiAoZTogRWxlbWVudCkge1xyXG4gICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/main.ts\n");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYm91dC1tZS8uL3NyYy9zYXNzL21haW4uc2Nzcz85ZTRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSIsImZpbGUiOiIuL3NyYy9zYXNzL21haW4uc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sass/main.scss\n");

/***/ }),

/***/ "./src/sass/bootstrap/bootstrap.scss":
/*!*******************************************!*\
  !*** ./src/sass/bootstrap/bootstrap.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYm91dC1tZS8uL3NyYy9zYXNzL2Jvb3RzdHJhcC9ib290c3RyYXAuc2Nzcz9iOGNjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSIsImZpbGUiOiIuL3NyYy9zYXNzL2Jvb3RzdHJhcC9ib290c3RyYXAuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sass/bootstrap/bootstrap.scss\n");

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
/******/ 			"assets/css/bootstrap": 0,
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkabout_me"] = self["webpackChunkabout_me"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/css/bootstrap","assets/css/main"], () => (__webpack_require__("./src/ts/main.ts")))
/******/ 	__webpack_require__.O(undefined, ["assets/css/bootstrap","assets/css/main"], () => (__webpack_require__("./src/sass/main.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/bootstrap","assets/css/main"], () => (__webpack_require__("./src/sass/bootstrap/bootstrap.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;