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

eval("\n\nvar darkmode;\n\n(function (darkmode) {\n  darkmode[darkmode[\"auto\"] = 0] = \"auto\";\n  darkmode[darkmode[\"enabled\"] = 1] = \"enabled\";\n  darkmode[darkmode[\"disabled\"] = -1] = \"disabled\";\n})(darkmode || (darkmode = {}));\n\nvar start = performance.now();\n\nwindow.onload = function () {\n  var end = performance.now();\n  var colorThemeSwitcher = document.getElementById(\"colorThemeSwitcher\");\n  changeTheme(colorThemeSwitcher);\n  window.addEventListener(\"scroll\", updateNav);\n  colorThemeSwitcher.addEventListener(\"click\", function () {\n    changeTheme(colorThemeSwitcher);\n  });\n  console.log(\"Page chargée en \" + Math.round(end - start) / 1000 + \" secondes\");\n};\n\nvar DEBUG = true;\nfetch(\"assets/html/modals.html\").then(function (response) {\n  return response.text();\n}).then(function (data) {\n  document.body.innerHTML += data;\n});\nvar darkPref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;\n\nfunction getDarkmode(value) {\n  console.log(\"value : \" + value);\n\n  switch (Number(value)) {\n    case darkmode.enabled:\n      if (DEBUG) console.log(\"get darkmode : \" + darkmode.enabled);\n      return darkmode.enabled;\n\n    case darkmode.disabled:\n      if (DEBUG) console.log(\"get darkmode : \" + darkmode.disabled);\n      return darkmode.disabled;\n\n    default:\n      if (DEBUG) console.log(\"get darkmode : \" + darkmode.auto);\n      return darkmode.auto;\n  }\n}\n\nfunction setDarkmode(e) {\n  currentTheme = e;\n  localStorage.removeItem(\"theme\");\n  localStorage.setItem(\"theme\", String(previousDarkmode(e)));\n  if (DEBUG) console.log(\"set local storage and theme : \" + e);\n}\n\nfunction previousDarkmode(d) {\n  switch (d) {\n    case darkmode.auto:\n      return darkmode.disabled;\n\n    case darkmode.enabled:\n      return darkmode.auto;\n\n    case darkmode.disabled:\n      return darkmode.enabled;\n\n    default:\n      return null;\n  }\n}\n\nfunction nextDarkmode(d) {\n  switch (d) {\n    case darkmode.auto:\n      return darkmode.enabled;\n\n    case darkmode.enabled:\n      return darkmode.disabled;\n\n    case darkmode.disabled:\n      return darkmode.auto;\n\n    default:\n      return null;\n  }\n}\n\nvar currentTheme;\nvar localTheme = false;\n\nif (localStorage.getItem(\"theme\")) {\n  if (DEBUG) console.log(\"local storage not null (\" + localStorage.getItem(\"theme\") + \")\");\n  localTheme = true;\n  currentTheme = getDarkmode(localStorage.getItem(\"theme\"));\n} else {\n  if (DEBUG) console.log(\"local storage null (\" + localStorage.getItem(\"theme\") + \")\");\n  currentTheme = darkmode.auto;\n}\n\nfunction updateDarkmodeButton(e) {\n  switch (currentTheme) {\n    case darkmode.auto:\n      e.innerHTML = '🌗';\n      if (DEBUG) console.log(\"darkmode : Auto\");\n      break;\n\n    case darkmode.enabled:\n      e.innerHTML = '🌙';\n      if (DEBUG) console.log(\"darkmode : Dark\");\n      break;\n\n    default:\n      e.innerHTML = '☀️';\n      if (DEBUG) console.log(\"darkmode : Light\");\n      break;\n  }\n}\n\nfunction changeTheme(e) {\n  var classes = document.querySelectorAll(\".darkmode-auto, .darkmode-enabled, .darkmode-disabled\");\n  removeDarkmodeClass(classes);\n  addDarkmodeClass(classes);\n  updateNav();\n  updateDarkmodeButton(e);\n}\n\nfunction removeDarkmodeClass(a) {\n  [].forEach.call(a, function (e) {\n    e.classList.remove(\"darkmode-auto\");\n    e.classList.remove(\"darkmode-enabled\");\n    e.classList.remove(\"darkmode-disabled\");\n  });\n}\n\nfunction addDarkmodeClass(a) {\n  switch (currentTheme) {\n    case darkmode.auto:\n      [].forEach.call(a, function (e) {\n        e.classList.add(\"darkmode-enabled\");\n      });\n      setDarkmode(darkmode.enabled);\n      break;\n\n    case darkmode.enabled:\n      [].forEach.call(a, function (e) {\n        e.classList.add(\"darkmode-disabled\");\n      });\n      setDarkmode(darkmode.disabled);\n      break;\n\n    case darkmode.disabled:\n      [].forEach.call(a, function (e) {\n        e.classList.add(\"darkmode-auto\");\n      });\n      setDarkmode(darkmode.auto);\n      break;\n  }\n}\n\nfunction updateNav() {\n  darkPref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;\n  var presentation = document.getElementById('presentation');\n  var skills = document.getElementById('skills');\n  var career = document.getElementById('career');\n  var portfolio = document.getElementById('portfolio');\n  var contact = document.getElementById('contact');\n  var nav = document.getElementById('navigation');\n\n  if (presentation.getBoundingClientRect().bottom > window.innerWidth / 7 * -1) {\n    removeColors(nav);\n    nav.classList.add(\"bg-blue\");\n    nav.classList.add(\"navbar-dark\");\n    removeActiveLink();\n    document.getElementById('presentation-link').classList.add(\"active\");\n  } else if (skills.getBoundingClientRect().bottom > window.innerWidth / 7 * -1) {\n    removeColors(nav);\n    if (currentTheme === darkmode.auto && darkPref || currentTheme === darkmode.enabled) nav.classList.add(\"bg-dark\");else nav.classList.add(\"bg-light\");\n    if (currentTheme === darkmode.auto && darkPref || currentTheme === darkmode.enabled) nav.classList.add(\"navbar-dark\");else nav.classList.add(\"navbar-light\");\n    removeActiveLink();\n    document.getElementById('skills-link').classList.add(\"active\");\n  } else if (career.getBoundingClientRect().bottom > window.innerWidth / 7 * -1) {\n    removeColors(nav);\n    nav.classList.add(\"bg-red\");\n    nav.classList.add(\"navbar-dark\");\n    removeActiveLink();\n    document.getElementById('career-link').classList.add(\"active\");\n  } else if (portfolio.getBoundingClientRect().bottom > window.innerWidth / 7 * -1) {\n    removeColors(nav);\n    if (currentTheme === darkmode.auto && darkPref || currentTheme === darkmode.enabled) nav.classList.add(\"bg-dark\");else nav.classList.add(\"bg-light\");\n    if (currentTheme === darkmode.auto && darkPref || currentTheme === darkmode.enabled) nav.classList.add(\"navbar-dark\");else nav.classList.add(\"navbar-light\");\n    removeActiveLink();\n    document.getElementById('portfolio-link').classList.add(\"active\");\n  } else {\n    removeColors(nav);\n    nav.classList.add(\"bg-gray-900\");\n    nav.classList.add(\"navbar-dark\");\n    removeActiveLink();\n    document.getElementById('contact-link').classList.add(\"active\");\n  }\n}\n\nfunction removeColors(e) {\n  e.classList.remove(\"bg-blue\");\n  e.classList.remove(\"bg-red\");\n  e.classList.remove(\"bg-gray-900\");\n  e.classList.remove(\"bg-primary\");\n  e.classList.remove(\"bg-secondary\");\n  e.classList.remove(\"bg-danger\");\n  e.classList.remove(\"bg-light\");\n  e.classList.remove(\"bg-dark\");\n  e.classList.remove(\"bg-white\");\n  e.classList.remove(\"bg-body\");\n  e.classList.remove(\"text-primary\");\n  e.classList.remove(\"text-secondary\");\n  e.classList.remove(\"text-dark\");\n  e.classList.remove(\"text-light\");\n  e.classList.remove(\"text-white\");\n  e.classList.remove(\"text-muted\");\n  e.classList.remove(\"navbar-light\");\n  e.classList.remove(\"navbar-dark\");\n}\n\nfunction removeActiveLink() {\n  var actives = document.querySelectorAll('.active');\n  [].forEach.call(actives, function (e) {\n    e.classList.remove(\"active\");\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQW1CLFlBQW5CO0FBQ0EsR0FBQyxDQUFDLFNBQUYsQ0FBWSxNQUFaLENBQW1CLGNBQW5CO0FBQ0EsR0FBQyxDQUFDLFNBQUYsQ0FBWSxNQUFaLENBQW1CLFdBQW5CO0FBQ0EsR0FBQyxDQUFDLFNBQUYsQ0FBWSxNQUFaLENBQW1CLFVBQW5CO0FBQ0EsR0FBQyxDQUFDLFNBQUYsQ0FBWSxNQUFaLENBQW1CLFNBQW5CO0FBQ0EsR0FBQyxDQUFDLFNBQUYsQ0FBWSxNQUFaLENBQW1CLFVBQW5CO0FBQ0EsR0FBQyxDQUFDLFNBQUYsQ0FBWSxNQUFaLENBQW1CLFNBQW5CO0FBQ0EsR0FBQyxDQUFDLFNBQUYsQ0FBWSxNQUFaLENBQW1CLGNBQW5CO0FBQ0EsR0FBQyxDQUFDLFNBQUYsQ0FBWSxNQUFaLENBQW1CLGdCQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixXQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixZQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixZQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixZQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixjQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixhQUFuQjtBQUNIOztBQUVELFNBQVMsZ0JBQVQsR0FBeUI7QUFDckIsTUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLFNBQTFCLENBQWQ7QUFDQSxLQUFHLE9BQUgsQ0FBVyxJQUFYLENBQWdCLE9BQWhCLEVBQXlCLFVBQVUsQ0FBVixFQUFvQjtBQUN6QyxLQUFDLENBQUMsU0FBRixDQUFZLE1BQVosQ0FBbUIsUUFBbkI7QUFDSCxHQUZEO0FBR0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYm91dC1tZS8uL3NyYy90cy9tYWluLnRzPzY0ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiZW51bSBkYXJrbW9kZSB7XHJcbiAgICBhdXRvID0gMCxcclxuICAgIGVuYWJsZWQgPSAxLFxyXG4gICAgZGlzYWJsZWQgPSAtMVxyXG59XHJcblxyXG5sZXQgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGxldCBlbmQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIGxldCBjb2xvclRoZW1lU3dpdGNoZXI6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3JUaGVtZVN3aXRjaGVyXCIpO1xyXG4gICAgY2hhbmdlVGhlbWUoY29sb3JUaGVtZVN3aXRjaGVyKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZU5hdik7XHJcbiAgICBjb2xvclRoZW1lU3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VUaGVtZShjb2xvclRoZW1lU3dpdGNoZXIpIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJQYWdlIGNoYXJnw6llIGVuIFwiICsgTWF0aC5yb3VuZChlbmQtc3RhcnQpLzEwMDAgKyBcIiBzZWNvbmRlc1wiKTtcclxufVxyXG5cclxubGV0IERFQlVHOmJvb2xlYW4gPSB0cnVlO1xyXG5mZXRjaChcImFzc2V0cy9odG1sL21vZGFscy5odG1sXCIpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKVxyXG4gICAgfSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MICs9IGRhdGE7XHJcbiAgICB9KTtcclxuXHJcbmxldCBkYXJrUHJlZjogYm9vbGVhbiA9IHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcclxuXHJcbmZ1bmN0aW9uIGdldERhcmttb2RlKHZhbHVlOlN0cmluZyk6IGRhcmttb2Rle1xyXG4gICAgY29uc29sZS5sb2coXCJ2YWx1ZSA6IFwiICsgdmFsdWUpO1xyXG4gICAgc3dpdGNoKE51bWJlcih2YWx1ZSkpe1xyXG4gICAgICAgIGNhc2UgZGFya21vZGUuZW5hYmxlZDpcclxuICAgICAgICAgICAgaWYoREVCVUcpIGNvbnNvbGUubG9nKFwiZ2V0IGRhcmttb2RlIDogXCIgKyBkYXJrbW9kZS5lbmFibGVkKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhcmttb2RlLmVuYWJsZWQ7XHJcbiAgICAgICAgY2FzZSBkYXJrbW9kZS5kaXNhYmxlZDpcclxuICAgICAgICAgICAgaWYoREVCVUcpIGNvbnNvbGUubG9nKFwiZ2V0IGRhcmttb2RlIDogXCIgKyBkYXJrbW9kZS5kaXNhYmxlZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXJrbW9kZS5kaXNhYmxlZDtcclxuICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgaWYoREVCVUcpIGNvbnNvbGUubG9nKFwiZ2V0IGRhcmttb2RlIDogXCIgKyBkYXJrbW9kZS5hdXRvKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhcmttb2RlLmF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERhcmttb2RlKGU6YW55KTogdm9pZCB7XHJcbiAgICBjdXJyZW50VGhlbWUgPSBlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0aGVtZVwiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgU3RyaW5nKHByZXZpb3VzRGFya21vZGUoZSkpKTtcclxuICAgIGlmKERFQlVHKWNvbnNvbGUubG9nKFwic2V0IGxvY2FsIHN0b3JhZ2UgYW5kIHRoZW1lIDogXCIgKyBlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJldmlvdXNEYXJrbW9kZShkOiBkYXJrbW9kZSk6IGRhcmttb2Rle1xyXG4gICAgc3dpdGNoKGQpe1xyXG4gICAgICAgIGNhc2UgZGFya21vZGUuYXV0bzogcmV0dXJuIGRhcmttb2RlLmRpc2FibGVkO1xyXG4gICAgICAgIGNhc2UgZGFya21vZGUuZW5hYmxlZDogcmV0dXJuIGRhcmttb2RlLmF1dG87XHJcbiAgICAgICAgY2FzZSBkYXJrbW9kZS5kaXNhYmxlZDogcmV0dXJuIGRhcmttb2RlLmVuYWJsZWQ7XHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHREYXJrbW9kZShkOiBkYXJrbW9kZSk6IGRhcmttb2Rle1xyXG4gICAgc3dpdGNoKGQpe1xyXG4gICAgICAgIGNhc2UgZGFya21vZGUuYXV0bzogcmV0dXJuIGRhcmttb2RlLmVuYWJsZWQ7XHJcbiAgICAgICAgY2FzZSBkYXJrbW9kZS5lbmFibGVkOiByZXR1cm4gZGFya21vZGUuZGlzYWJsZWQ7XHJcbiAgICAgICAgY2FzZSBkYXJrbW9kZS5kaXNhYmxlZDogcmV0dXJuIGRhcmttb2RlLmF1dG87XHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBjdXJyZW50VGhlbWU6IGRhcmttb2RlO1xyXG5sZXQgbG9jYWxUaGVtZTpib29sZWFuID0gZmFsc2U7XHJcbmlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikpIHtcclxuICAgIGlmKERFQlVHKWNvbnNvbGUubG9nKFwibG9jYWwgc3RvcmFnZSBub3QgbnVsbCAoXCIrIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikrXCIpXCIpO1xyXG4gICAgbG9jYWxUaGVtZSA9IHRydWU7XHJcbiAgICBjdXJyZW50VGhlbWUgPSBnZXREYXJrbW9kZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpKTtcclxufVxyXG5lbHNlIHtcclxuICAgIGlmKERFQlVHKWNvbnNvbGUubG9nKFwibG9jYWwgc3RvcmFnZSBudWxsIChcIisgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKStcIilcIik7XHJcbiAgICBjdXJyZW50VGhlbWUgPSBkYXJrbW9kZS5hdXRvO1xyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZURhcmttb2RlQnV0dG9uKGU6YW55KTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGN1cnJlbnRUaGVtZSkge1xyXG4gICAgICAgIGNhc2UgZGFya21vZGUuYXV0bzpcclxuICAgICAgICAgICAgZS5pbm5lckhUTUwgPSAn8J+Mlyc7XHJcbiAgICAgICAgICAgIGlmKERFQlVHKWNvbnNvbGUubG9nKFwiZGFya21vZGUgOiBBdXRvXCIpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZGFya21vZGUuZW5hYmxlZDpcclxuICAgICAgICAgICAgZS5pbm5lckhUTUwgPSAn8J+MmSc7XHJcbiAgICAgICAgICAgIGlmKERFQlVHKWNvbnNvbGUubG9nKFwiZGFya21vZGUgOiBEYXJrXCIpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGUuaW5uZXJIVE1MID0gJ+KYgO+4jyc7XHJcbiAgICAgICAgICAgIGlmKERFQlVHKWNvbnNvbGUubG9nKFwiZGFya21vZGUgOiBMaWdodFwiKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlVGhlbWUoZTogYW55KTogdm9pZCB7XHJcbiAgICBsZXQgY2xhc3NlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFya21vZGUtYXV0bywgLmRhcmttb2RlLWVuYWJsZWQsIC5kYXJrbW9kZS1kaXNhYmxlZFwiKTtcclxuICAgIHJlbW92ZURhcmttb2RlQ2xhc3MoY2xhc3Nlcyk7XHJcbiAgICBhZGREYXJrbW9kZUNsYXNzKGNsYXNzZXMpO1xyXG4gICAgdXBkYXRlTmF2KCk7XHJcbiAgICB1cGRhdGVEYXJrbW9kZUJ1dHRvbihlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRGFya21vZGVDbGFzcyhhOiBhbnkpOiB2b2lkIHtcclxuICAgIFtdLmZvckVhY2guY2FsbChhLCBmdW5jdGlvbiAoZTogRWxlbWVudCkge1xyXG4gICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImRhcmttb2RlLWF1dG9cIik7XHJcbiAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya21vZGUtZW5hYmxlZFwiKTtcclxuICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrbW9kZS1kaXNhYmxlZFwiKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGREYXJrbW9kZUNsYXNzKGE6IGFueSk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChjdXJyZW50VGhlbWUpIHtcclxuICAgICAgICBjYXNlIGRhcmttb2RlLmF1dG86XHJcbiAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbChhLCBmdW5jdGlvbiAoZTogRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiZGFya21vZGUtZW5hYmxlZFwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldERhcmttb2RlKGRhcmttb2RlLmVuYWJsZWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGRhcmttb2RlLmVuYWJsZWQ6XHJcbiAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbChhLCBmdW5jdGlvbiAoZTogRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiZGFya21vZGUtZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXREYXJrbW9kZShkYXJrbW9kZS5kaXNhYmxlZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZGFya21vZGUuZGlzYWJsZWQ6XHJcbiAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbChhLCBmdW5jdGlvbiAoZTogRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiZGFya21vZGUtYXV0b1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldERhcmttb2RlKGRhcmttb2RlLmF1dG8pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTmF2KCk6IHZvaWQge1xyXG4gICAgZGFya1ByZWYgPSB3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXM7XHJcbiAgICBjb25zdCBwcmVzZW50YXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc2VudGF0aW9uJyk7XHJcbiAgICBjb25zdCBza2lsbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2tpbGxzJyk7XHJcbiAgICBjb25zdCBjYXJlZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZWVyJyk7XHJcbiAgICBjb25zdCBwb3J0Zm9saW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9ydGZvbGlvJyk7XHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcclxuICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2aWdhdGlvbicpO1xyXG5cclxuICAgIGlmIChwcmVzZW50YXRpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tID4gKHdpbmRvdy5pbm5lcldpZHRoIC8gNykgKiAtMSkge1xyXG4gICAgICAgIHJlbW92ZUNvbG9ycyhuYXYpO1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwiYmctYmx1ZVwiKTtcclxuICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1kYXJrXCIpO1xyXG4gICAgICAgIHJlbW92ZUFjdGl2ZUxpbmsoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc2VudGF0aW9uLWxpbmsnKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfSBlbHNlIGlmIChza2lsbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tID4gKHdpbmRvdy5pbm5lcldpZHRoIC8gNykgKiAtMSkge1xyXG4gICAgICAgIHJlbW92ZUNvbG9ycyhuYXYpO1xyXG4gICAgICAgIGlmICgoY3VycmVudFRoZW1lID09PSBkYXJrbW9kZS5hdXRvICYmIGRhcmtQcmVmKSB8fCBjdXJyZW50VGhlbWUgPT09IGRhcmttb2RlLmVuYWJsZWQpIG5hdi5jbGFzc0xpc3QuYWRkKFwiYmctZGFya1wiKTtcclxuICAgICAgICBlbHNlIG5hdi5jbGFzc0xpc3QuYWRkKFwiYmctbGlnaHRcIik7XHJcbiAgICAgICAgaWYgKChjdXJyZW50VGhlbWUgPT09IGRhcmttb2RlLmF1dG8gJiYgZGFya1ByZWYpIHx8IGN1cnJlbnRUaGVtZSA9PT0gZGFya21vZGUuZW5hYmxlZCkgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItZGFya1wiKTtcclxuICAgICAgICBlbHNlIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWxpZ2h0XCIpO1xyXG4gICAgICAgIHJlbW92ZUFjdGl2ZUxpbmsoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2tpbGxzLWxpbmsnKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfSBlbHNlIGlmIChjYXJlZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tID4gKHdpbmRvdy5pbm5lcldpZHRoIC8gNykgKiAtMSkge1xyXG4gICAgICAgIHJlbW92ZUNvbG9ycyhuYXYpO1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwiYmctcmVkXCIpO1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWRhcmtcIik7XHJcbiAgICAgICAgcmVtb3ZlQWN0aXZlTGluaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJlZXItbGluaycpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9IGVsc2UgaWYgKHBvcnRmb2xpby5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPiAod2luZG93LmlubmVyV2lkdGggLyA3KSAqIC0xKSB7XHJcbiAgICAgICAgcmVtb3ZlQ29sb3JzKG5hdik7XHJcbiAgICAgICAgaWYgKChjdXJyZW50VGhlbWUgPT09IGRhcmttb2RlLmF1dG8gJiYgZGFya1ByZWYpIHx8IGN1cnJlbnRUaGVtZSA9PT0gZGFya21vZGUuZW5hYmxlZCkgbmF2LmNsYXNzTGlzdC5hZGQoXCJiZy1kYXJrXCIpO1xyXG4gICAgICAgIGVsc2UgbmF2LmNsYXNzTGlzdC5hZGQoXCJiZy1saWdodFwiKTtcclxuICAgICAgICBpZiAoKGN1cnJlbnRUaGVtZSA9PT0gZGFya21vZGUuYXV0byAmJiBkYXJrUHJlZikgfHwgY3VycmVudFRoZW1lID09PSBkYXJrbW9kZS5lbmFibGVkKSBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1kYXJrXCIpO1xyXG4gICAgICAgIGVsc2UgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItbGlnaHRcIik7XHJcbiAgICAgICAgcmVtb3ZlQWN0aXZlTGluaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3J0Zm9saW8tbGluaycpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlbW92ZUNvbG9ycyhuYXYpO1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwiYmctZ3JheS05MDBcIik7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItZGFya1wiKTtcclxuICAgICAgICByZW1vdmVBY3RpdmVMaW5rKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtbGluaycpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNvbG9ycyhlOiBFbGVtZW50KTogdm9pZCB7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1ibHVlXCIpO1xyXG4gICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctcmVkXCIpO1xyXG4gICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZ3JheS05MDBcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1wcmltYXJ5XCIpO1xyXG4gICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctc2Vjb25kYXJ5XCIpO1xyXG4gICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZGFuZ2VyXCIpO1xyXG4gICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctbGlnaHRcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1kYXJrXCIpO1xyXG4gICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctd2hpdGVcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1ib2R5XCIpO1xyXG4gICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1wcmltYXJ5XCIpO1xyXG4gICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1zZWNvbmRhcnlcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWRhcmtcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWxpZ2h0XCIpO1xyXG4gICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC13aGl0ZVwiKTtcclxuICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtbXV0ZWRcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItbGlnaHRcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItZGFya1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlTGluaygpOiB2b2lkIHtcclxuICAgIGxldCBhY3RpdmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGFjdGl2ZXMsIGZ1bmN0aW9uIChlOiBFbGVtZW50KSB7XHJcbiAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/main.ts\n");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Fzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWJvdXQtbWUvLi9zcmMvc2Fzcy9tYWluLnNjc3M/OWU0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sass/main.scss\n");

/***/ }),

/***/ "./src/sass/bootstrap/bootstrap.scss":
/*!*******************************************!*\
  !*** ./src/sass/bootstrap/bootstrap.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Fzcy9ib290c3RyYXAvYm9vdHN0cmFwLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWJvdXQtbWUvLi9zcmMvc2Fzcy9ib290c3RyYXAvYm9vdHN0cmFwLnNjc3M/YjhjYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sass/bootstrap/bootstrap.scss\n");

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
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
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