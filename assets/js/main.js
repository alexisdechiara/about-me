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

eval("\n\nvar darkmode;\n\n(function (darkmode) {\n  darkmode[darkmode[\"auto\"] = 0] = \"auto\";\n  darkmode[darkmode[\"enabled\"] = 1] = \"enabled\";\n  darkmode[darkmode[\"disabled\"] = -1] = \"disabled\";\n})(darkmode || (darkmode = {}));\n\nvar start = performance.now();\n\nwindow.onload = function () {\n  var end = performance.now();\n  var colorThemeSwitcher = document.getElementById(\"colorThemeSwitcher\");\n  changeTheme(colorThemeSwitcher);\n  window.addEventListener(\"scroll\", updateNav);\n  colorThemeSwitcher.addEventListener(\"click\", function () {\n    changeTheme(colorThemeSwitcher);\n  });\n  console.log(\"Page chargée en \" + Math.round(end - start) / 1000 + \" secondes\");\n};\n\nvar DEBUG = false;\nfetch(\"assets/html/modals.html\").then(function (response) {\n  return response.text();\n}).then(function (data) {\n  document.body.innerHTML += data;\n});\nvar darkPref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;\n\nfunction getDarkmode(value) {\n  if (DEBUG) console.log(\"value : \" + value);\n\n  switch (Number(value)) {\n    case darkmode.enabled:\n      if (DEBUG) console.log(\"get darkmode : \" + darkmode.enabled);\n      return darkmode.enabled;\n\n    case darkmode.disabled:\n      if (DEBUG) console.log(\"get darkmode : \" + darkmode.disabled);\n      return darkmode.disabled;\n\n    default:\n      if (DEBUG) console.log(\"get darkmode : \" + darkmode.auto);\n      return darkmode.auto;\n  }\n}\n\nfunction setDarkmode(e) {\n  currentTheme = e;\n  localStorage.removeItem(\"theme\");\n  localStorage.setItem(\"theme\", String(previousDarkmode(e)));\n  if (DEBUG) console.log(\"set local storage and theme : \" + e);\n}\n\nfunction previousDarkmode(d) {\n  switch (d) {\n    case darkmode.auto:\n      return darkmode.disabled;\n\n    case darkmode.enabled:\n      return darkmode.auto;\n\n    case darkmode.disabled:\n      return darkmode.enabled;\n\n    default:\n      return null;\n  }\n}\n\nfunction nextDarkmode(d) {\n  switch (d) {\n    case darkmode.auto:\n      return darkmode.enabled;\n\n    case darkmode.enabled:\n      return darkmode.disabled;\n\n    case darkmode.disabled:\n      return darkmode.auto;\n\n    default:\n      return null;\n  }\n}\n\nvar currentTheme;\n\nif (localStorage.getItem(\"theme\")) {\n  if (DEBUG) console.log(\"local storage not null (\" + localStorage.getItem(\"theme\") + \")\");\n  currentTheme = getDarkmode(localStorage.getItem(\"theme\"));\n} else {\n  if (DEBUG) console.log(\"local storage null (\" + localStorage.getItem(\"theme\") + \")\");\n  currentTheme = darkmode.disabled;\n}\n\nfunction updateDarkmodeButton(e) {\n  switch (currentTheme) {\n    case darkmode.auto:\n      e.innerHTML = '🌗';\n      if (DEBUG) console.log(\"darkmode : Auto\");\n      break;\n\n    case darkmode.enabled:\n      e.innerHTML = '🌙';\n      if (DEBUG) console.log(\"darkmode : Dark\");\n      break;\n\n    default:\n      e.innerHTML = '☀️';\n      if (DEBUG) console.log(\"darkmode : Light\");\n      break;\n  }\n}\n\nfunction changeTheme(e) {\n  var classes = document.querySelectorAll(\".darkmode-auto, .darkmode-enabled, .darkmode-disabled\");\n  removeDarkmodeClass(classes);\n  addDarkmodeClass(classes);\n  updateNav();\n  updateDarkmodeButton(e);\n}\n\nfunction removeDarkmodeClass(a) {\n  [].forEach.call(a, function (e) {\n    e.classList.remove(\"darkmode-auto\");\n    e.classList.remove(\"darkmode-enabled\");\n    e.classList.remove(\"darkmode-disabled\");\n  });\n}\n\nfunction addDarkmodeClass(a) {\n  switch (currentTheme) {\n    case darkmode.auto:\n      [].forEach.call(a, function (e) {\n        e.classList.add(\"darkmode-enabled\");\n      });\n      setDarkmode(darkmode.enabled);\n      break;\n\n    case darkmode.enabled:\n      [].forEach.call(a, function (e) {\n        e.classList.add(\"darkmode-disabled\");\n      });\n      setDarkmode(darkmode.disabled);\n      break;\n\n    case darkmode.disabled:\n      [].forEach.call(a, function (e) {\n        e.classList.add(\"darkmode-auto\");\n      });\n      setDarkmode(darkmode.auto);\n      break;\n  }\n}\n\nfunction updateNav() {\n  darkPref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;\n  var presentation = document.getElementById('presentation');\n  var skills = document.getElementById('skills');\n  var career = document.getElementById('career');\n  var portfolio = document.getElementById('portfolio');\n  var contact = document.getElementById('contact');\n  var nav = document.getElementById('navigation');\n\n  if (presentation.getBoundingClientRect().bottom > window.innerWidth / 7 * -1) {\n    removeColors(nav);\n    nav.classList.add(\"bg-blue\");\n    nav.classList.add(\"navbar-dark\");\n    removeActiveLink();\n    document.getElementById('presentation-link').classList.add(\"active\");\n  } else if (skills.getBoundingClientRect().bottom > window.innerWidth / 7 * -1) {\n    removeColors(nav);\n    if (currentTheme === darkmode.auto && darkPref || currentTheme === darkmode.enabled) nav.classList.add(\"bg-dark\");else nav.classList.add(\"bg-light\");\n    if (currentTheme === darkmode.auto && darkPref || currentTheme === darkmode.enabled) nav.classList.add(\"navbar-dark\");else nav.classList.add(\"navbar-light\");\n    removeActiveLink();\n    document.getElementById('skills-link').classList.add(\"active\");\n  } else if (career.getBoundingClientRect().bottom > window.innerWidth / 7 * -1) {\n    removeColors(nav);\n    nav.classList.add(\"bg-red\");\n    nav.classList.add(\"navbar-dark\");\n    removeActiveLink();\n    document.getElementById('career-link').classList.add(\"active\");\n  } else if (portfolio.getBoundingClientRect().bottom > window.innerWidth / 7 * -1) {\n    removeColors(nav);\n    if (currentTheme === darkmode.auto && darkPref || currentTheme === darkmode.enabled) nav.classList.add(\"bg-dark\");else nav.classList.add(\"bg-light\");\n    if (currentTheme === darkmode.auto && darkPref || currentTheme === darkmode.enabled) nav.classList.add(\"navbar-dark\");else nav.classList.add(\"navbar-light\");\n    removeActiveLink();\n    document.getElementById('portfolio-link').classList.add(\"active\");\n  } else {\n    removeColors(nav);\n    nav.classList.add(\"bg-gray-900\");\n    nav.classList.add(\"navbar-dark\");\n    removeActiveLink();\n    document.getElementById('contact-link').classList.add(\"active\");\n  }\n}\n\nfunction removeColors(e) {\n  e.classList.remove(\"bg-blue\");\n  e.classList.remove(\"bg-red\");\n  e.classList.remove(\"bg-gray-900\");\n  e.classList.remove(\"bg-primary\");\n  e.classList.remove(\"bg-secondary\");\n  e.classList.remove(\"bg-danger\");\n  e.classList.remove(\"bg-light\");\n  e.classList.remove(\"bg-dark\");\n  e.classList.remove(\"bg-white\");\n  e.classList.remove(\"bg-body\");\n  e.classList.remove(\"text-primary\");\n  e.classList.remove(\"text-secondary\");\n  e.classList.remove(\"text-dark\");\n  e.classList.remove(\"text-light\");\n  e.classList.remove(\"text-white\");\n  e.classList.remove(\"text-muted\");\n  e.classList.remove(\"navbar-light\");\n  e.classList.remove(\"navbar-dark\");\n}\n\nfunction removeActiveLink() {\n  var actives = document.querySelectorAll('.active');\n  [].forEach.call(actives, function (e) {\n    e.classList.remove(\"active\");\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYm91dC1tZS8uL3NyYy90cy9tYWluLnRzPzY0ZjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFLLFFBQUw7O0FBQUEsV0FBSyxRQUFMLEVBQWE7QUFDVDtBQUNBO0FBQ0E7QUFDSCxDQUpELEVBQUssUUFBUSxLQUFSLFFBQVEsTUFBYjs7QUFNQSxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBWixFQUFaOztBQUNBLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFlBQUs7QUFDakIsTUFBSSxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQVosRUFBVjtBQUNBLE1BQUksa0JBQWtCLEdBQVEsUUFBUSxDQUFDLGNBQVQsQ0FBd0Isb0JBQXhCLENBQTlCO0FBQ0EsYUFBVyxDQUFDLGtCQUFELENBQVg7QUFDQSxRQUFNLENBQUMsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsU0FBbEM7QUFDQSxvQkFBa0IsQ0FBQyxnQkFBbkIsQ0FBb0MsT0FBcEMsRUFBNkMsWUFBSztBQUFFLGVBQVcsQ0FBQyxrQkFBRCxDQUFYO0FBQWlDLEdBQXJGO0FBQ0EsU0FBTyxDQUFDLEdBQVIsQ0FBWSxxQkFBcUIsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFHLEdBQUMsS0FBZixJQUFzQixJQUEzQyxHQUFrRCxXQUE5RDtBQUNILENBUEQ7O0FBU0EsSUFBSSxLQUFLLEdBQVcsS0FBcEI7QUFDQSxLQUFLLENBQUMseUJBQUQsQ0FBTCxDQUNLLElBREwsQ0FDVSxrQkFBUSxFQUFHO0FBQ2IsU0FBTyxRQUFRLENBQUMsSUFBVCxFQUFQO0FBQ0gsQ0FITCxFQUlLLElBSkwsQ0FJVSxjQUFJLEVBQUc7QUFDVCxVQUFRLENBQUMsSUFBVCxDQUFjLFNBQWQsSUFBMkIsSUFBM0I7QUFDSCxDQU5MO0FBUUEsSUFBSSxRQUFRLEdBQVksTUFBTSxDQUFDLFVBQVAsSUFBcUIsTUFBTSxDQUFDLFVBQVAsQ0FBa0IsOEJBQWxCLEVBQWtELE9BQS9GOztBQUVBLFNBQVMsV0FBVCxD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WSxNQUFaLENBQW1CLFlBQW5CO0FBQ0EsR0FBQyxDQUFDLFNBQUYsQ0FBWSxNQUFaLENBQW1CLGNBQW5CO0FBQ0EsR0FBQyxDQUFDLFNBQUYsQ0FBWSxNQUFaLENBQW1CLFdBQW5CO0FBQ0EsR0FBQyxDQUFDLFNBQUYsQ0FBWSxNQUFaLENBQW1CLFVBQW5CO0FBQ0EsR0FBQyxDQUFDLFNBQUYsQ0FBWSxNQUFaLENBQW1CLFNBQW5CO0FBQ0EsR0FBQyxDQUFDLFNBQUYsQ0FBWSxNQUFaLENBQW1CLFVBQW5CO0FBQ0EsR0FBQyxDQUFDLFNBQUYsQ0FBWSxNQUFaLENBQW1CLFNBQW5CO0FBQ0EsR0FBQyxDQUFDLFNBQUYsQ0FBWSxNQUFaLENBQW1CLGNBQW5CO0FBQ0EsR0FBQyxDQUFDLFNBQUYsQ0FBWSxNQUFaLENBQW1CLGdCQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixXQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixZQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixZQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixZQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixjQUFuQjtBQUNBLEdBQUMsQ0FBQyxTQUFGLENBQVksTUFBWixDQUFtQixhQUFuQjtBQUNIOztBQUVELFNBQVMsZ0JBQVQsR0FBeUI7QUFDckIsTUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLFNBQTFCLENBQWQ7QUFDQSxLQUFHLE9BQUgsQ0FBVyxJQUFYLENBQWdCLE9BQWhCLEVBQXlCLFVBQVUsQ0FBVixFQUFvQjtBQUN6QyxLQUFDLENBQUMsU0FBRixDQUFZLE1BQVosQ0FBbUIsUUFBbkI7QUFDSCxHQUZEO0FBR0giLCJmaWxlIjoiLi9zcmMvdHMvbWFpbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImVudW0gZGFya21vZGUge1xyXG4gICAgYXV0byA9IDAsXHJcbiAgICBlbmFibGVkID0gMSxcclxuICAgIGRpc2FibGVkID0gLTFcclxufVxyXG5cclxubGV0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBsZXQgZW5kID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICBsZXQgY29sb3JUaGVtZVN3aXRjaGVyOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yVGhlbWVTd2l0Y2hlclwiKTtcclxuICAgIGNoYW5nZVRoZW1lKGNvbG9yVGhlbWVTd2l0Y2hlcik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB1cGRhdGVOYXYpO1xyXG4gICAgY29sb3JUaGVtZVN3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7Y2hhbmdlVGhlbWUoY29sb3JUaGVtZVN3aXRjaGVyKSB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiUGFnZSBjaGFyZ8OpZSBlbiBcIiArIE1hdGgucm91bmQoZW5kLXN0YXJ0KS8xMDAwICsgXCIgc2Vjb25kZXNcIik7XHJcbn1cclxuXHJcbmxldCBERUJVRzpib29sZWFuID0gZmFsc2U7XHJcbmZldGNoKFwiYXNzZXRzL2h0bWwvbW9kYWxzLmh0bWxcIilcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gZGF0YTtcclxuICAgIH0pO1xyXG5cclxubGV0IGRhcmtQcmVmOiBib29sZWFuID0gd2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzO1xyXG5cclxuZnVuY3Rpb24gZ2V0RGFya21vZGUodmFsdWU6U3RyaW5nKTogZGFya21vZGV7XHJcbiAgICBpZihERUJVRyljb25zb2xlLmxvZyhcInZhbHVlIDogXCIgKyB2YWx1ZSk7XHJcbiAgICBzd2l0Y2goTnVtYmVyKHZhbHVlKSl7XHJcbiAgICAgICAgY2FzZSBkYXJrbW9kZS5lbmFibGVkOlxyXG4gICAgICAgICAgICBpZihERUJVRykgY29uc29sZS5sb2coXCJnZXQgZGFya21vZGUgOiBcIiArIGRhcmttb2RlLmVuYWJsZWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGFya21vZGUuZW5hYmxlZDtcclxuICAgICAgICBjYXNlIGRhcmttb2RlLmRpc2FibGVkOlxyXG4gICAgICAgICAgICBpZihERUJVRykgY29uc29sZS5sb2coXCJnZXQgZGFya21vZGUgOiBcIiArIGRhcmttb2RlLmRpc2FibGVkKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhcmttb2RlLmRpc2FibGVkO1xyXG4gICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICBpZihERUJVRykgY29uc29sZS5sb2coXCJnZXQgZGFya21vZGUgOiBcIiArIGRhcmttb2RlLmF1dG8pO1xyXG4gICAgICAgICAgICByZXR1cm4gZGFya21vZGUuYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGFya21vZGUoZTphbnkpOiB2b2lkIHtcclxuICAgIGN1cnJlbnRUaGVtZSA9IGU7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRoZW1lXCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBTdHJpbmcocHJldmlvdXNEYXJrbW9kZShlKSkpO1xyXG4gICAgaWYoREVCVUcpY29uc29sZS5sb2coXCJzZXQgbG9jYWwgc3RvcmFnZSBhbmQgdGhlbWUgOiBcIiArIGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmV2aW91c0Rhcmttb2RlKGQ6IGRhcmttb2RlKTogZGFya21vZGV7XHJcbiAgICBzd2l0Y2goZCl7XHJcbiAgICAgICAgY2FzZSBkYXJrbW9kZS5hdXRvOiByZXR1cm4gZGFya21vZGUuZGlzYWJsZWQ7XHJcbiAgICAgICAgY2FzZSBkYXJrbW9kZS5lbmFibGVkOiByZXR1cm4gZGFya21vZGUuYXV0bztcclxuICAgICAgICBjYXNlIGRhcmttb2RlLmRpc2FibGVkOiByZXR1cm4gZGFya21vZGUuZW5hYmxlZDtcclxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dERhcmttb2RlKGQ6IGRhcmttb2RlKTogZGFya21vZGV7XHJcbiAgICBzd2l0Y2goZCl7XHJcbiAgICAgICAgY2FzZSBkYXJrbW9kZS5hdXRvOiByZXR1cm4gZGFya21vZGUuZW5hYmxlZDtcclxuICAgICAgICBjYXNlIGRhcmttb2RlLmVuYWJsZWQ6IHJldHVybiBkYXJrbW9kZS5kaXNhYmxlZDtcclxuICAgICAgICBjYXNlIGRhcmttb2RlLmRpc2FibGVkOiByZXR1cm4gZGFya21vZGUuYXV0bztcclxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGN1cnJlbnRUaGVtZTogZGFya21vZGU7XHJcbmlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikpIHtcclxuICAgIGlmKERFQlVHKWNvbnNvbGUubG9nKFwibG9jYWwgc3RvcmFnZSBub3QgbnVsbCAoXCIrIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikrXCIpXCIpO1xyXG4gICAgY3VycmVudFRoZW1lID0gZ2V0RGFya21vZGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSk7XHJcbn1cclxuZWxzZSB7XHJcbiAgICBpZihERUJVRyljb25zb2xlLmxvZyhcImxvY2FsIHN0b3JhZ2UgbnVsbCAoXCIrIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikrXCIpXCIpO1xyXG4gICAgY3VycmVudFRoZW1lID0gZGFya21vZGUuZGlzYWJsZWQ7XHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlRGFya21vZGVCdXR0b24oZTphbnkpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAoY3VycmVudFRoZW1lKSB7XHJcbiAgICAgICAgY2FzZSBkYXJrbW9kZS5hdXRvOlxyXG4gICAgICAgICAgICBlLmlubmVySFRNTCA9ICfwn4yXJztcclxuICAgICAgICAgICAgaWYoREVCVUcpY29uc29sZS5sb2coXCJkYXJrbW9kZSA6IEF1dG9cIilcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBkYXJrbW9kZS5lbmFibGVkOlxyXG4gICAgICAgICAgICBlLmlubmVySFRNTCA9ICfwn4yZJztcclxuICAgICAgICAgICAgaWYoREVCVUcpY29uc29sZS5sb2coXCJkYXJrbW9kZSA6IERhcmtcIilcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgZS5pbm5lckhUTUwgPSAn4piA77iPJztcclxuICAgICAgICAgICAgaWYoREVCVUcpY29uc29sZS5sb2coXCJkYXJrbW9kZSA6IExpZ2h0XCIpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VUaGVtZShlOiBhbnkpOiB2b2lkIHtcclxuICAgIGxldCBjbGFzc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXJrbW9kZS1hdXRvLCAuZGFya21vZGUtZW5hYmxlZCwgLmRhcmttb2RlLWRpc2FibGVkXCIpO1xyXG4gICAgcmVtb3ZlRGFya21vZGVDbGFzcyhjbGFzc2VzKTtcclxuICAgIGFkZERhcmttb2RlQ2xhc3MoY2xhc3Nlcyk7XHJcbiAgICB1cGRhdGVOYXYoKTtcclxuICAgIHVwZGF0ZURhcmttb2RlQnV0dG9uKGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVEYXJrbW9kZUNsYXNzKGE6IGFueSk6IHZvaWQge1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGEsIGZ1bmN0aW9uIChlOiBFbGVtZW50KSB7XHJcbiAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya21vZGUtYXV0b1wiKTtcclxuICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrbW9kZS1lbmFibGVkXCIpO1xyXG4gICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImRhcmttb2RlLWRpc2FibGVkXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZERhcmttb2RlQ2xhc3MoYTogYW55KTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGN1cnJlbnRUaGVtZSkge1xyXG4gICAgICAgIGNhc2UgZGFya21vZGUuYXV0bzpcclxuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGEsIGZ1bmN0aW9uIChlOiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJkYXJrbW9kZS1lbmFibGVkXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0RGFya21vZGUoZGFya21vZGUuZW5hYmxlZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZGFya21vZGUuZW5hYmxlZDpcclxuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGEsIGZ1bmN0aW9uIChlOiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJkYXJrbW9kZS1kaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldERhcmttb2RlKGRhcmttb2RlLmRpc2FibGVkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBkYXJrbW9kZS5kaXNhYmxlZDpcclxuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGEsIGZ1bmN0aW9uIChlOiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJkYXJrbW9kZS1hdXRvXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0RGFya21vZGUoZGFya21vZGUuYXV0byk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVOYXYoKTogdm9pZCB7XHJcbiAgICBkYXJrUHJlZiA9IHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcclxuICAgIGNvbnN0IHByZXNlbnRhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzZW50YXRpb24nKTtcclxuICAgIGNvbnN0IHNraWxscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza2lsbHMnKTtcclxuICAgIGNvbnN0IGNhcmVlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJlZXInKTtcclxuICAgIGNvbnN0IHBvcnRmb2xpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3J0Zm9saW8nKTtcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xyXG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZpZ2F0aW9uJyk7XHJcblxyXG4gICAgaWYgKHByZXNlbnRhdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPiAod2luZG93LmlubmVyV2lkdGggLyA3KSAqIC0xKSB7XHJcbiAgICAgICAgcmVtb3ZlQ29sb3JzKG5hdik7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJiZy1ibHVlXCIpO1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWRhcmtcIik7XHJcbiAgICAgICAgcmVtb3ZlQWN0aXZlTGluaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzZW50YXRpb24tbGluaycpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9IGVsc2UgaWYgKHNraWxscy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPiAod2luZG93LmlubmVyV2lkdGggLyA3KSAqIC0xKSB7XHJcbiAgICAgICAgcmVtb3ZlQ29sb3JzKG5hdik7XHJcbiAgICAgICAgaWYgKChjdXJyZW50VGhlbWUgPT09IGRhcmttb2RlLmF1dG8gJiYgZGFya1ByZWYpIHx8IGN1cnJlbnRUaGVtZSA9PT0gZGFya21vZGUuZW5hYmxlZCkgbmF2LmNsYXNzTGlzdC5hZGQoXCJiZy1kYXJrXCIpO1xyXG4gICAgICAgIGVsc2UgbmF2LmNsYXNzTGlzdC5hZGQoXCJiZy1saWdodFwiKTtcclxuICAgICAgICBpZiAoKGN1cnJlbnRUaGVtZSA9PT0gZGFya21vZGUuYXV0byAmJiBkYXJrUHJlZikgfHwgY3VycmVudFRoZW1lID09PSBkYXJrbW9kZS5lbmFibGVkKSBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1kYXJrXCIpO1xyXG4gICAgICAgIGVsc2UgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItbGlnaHRcIik7XHJcbiAgICAgICAgcmVtb3ZlQWN0aXZlTGluaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza2lsbHMtbGluaycpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9IGVsc2UgaWYgKGNhcmVlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPiAod2luZG93LmlubmVyV2lkdGggLyA3KSAqIC0xKSB7XHJcbiAgICAgICAgcmVtb3ZlQ29sb3JzKG5hdik7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJiZy1yZWRcIik7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItZGFya1wiKTtcclxuICAgICAgICByZW1vdmVBY3RpdmVMaW5rKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmVlci1saW5rJykuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSBpZiAocG9ydGZvbGlvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDcpICogLTEpIHtcclxuICAgICAgICByZW1vdmVDb2xvcnMobmF2KTtcclxuICAgICAgICBpZiAoKGN1cnJlbnRUaGVtZSA9PT0gZGFya21vZGUuYXV0byAmJiBkYXJrUHJlZikgfHwgY3VycmVudFRoZW1lID09PSBkYXJrbW9kZS5lbmFibGVkKSBuYXYuY2xhc3NMaXN0LmFkZChcImJnLWRhcmtcIik7XHJcbiAgICAgICAgZWxzZSBuYXYuY2xhc3NMaXN0LmFkZChcImJnLWxpZ2h0XCIpO1xyXG4gICAgICAgIGlmICgoY3VycmVudFRoZW1lID09PSBkYXJrbW9kZS5hdXRvICYmIGRhcmtQcmVmKSB8fCBjdXJyZW50VGhlbWUgPT09IGRhcmttb2RlLmVuYWJsZWQpIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWRhcmtcIik7XHJcbiAgICAgICAgZWxzZSBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1saWdodFwiKTtcclxuICAgICAgICByZW1vdmVBY3RpdmVMaW5rKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcnRmb2xpby1saW5rJykuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVtb3ZlQ29sb3JzKG5hdik7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJiZy1ncmF5LTkwMFwiKTtcclxuICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1kYXJrXCIpO1xyXG4gICAgICAgIHJlbW92ZUFjdGl2ZUxpbmsoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1saW5rJykuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ29sb3JzKGU6IEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWJsdWVcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1yZWRcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1ncmF5LTkwMFwiKTtcclxuICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLXByaW1hcnlcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1zZWNvbmRhcnlcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1kYW5nZXJcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1saWdodFwiKTtcclxuICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWRhcmtcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy13aGl0ZVwiKTtcclxuICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWJvZHlcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXByaW1hcnlcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXNlY29uZGFyeVwiKTtcclxuICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtZGFya1wiKTtcclxuICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtbGlnaHRcIik7XHJcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXdoaXRlXCIpO1xyXG4gICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1tdXRlZFwiKTtcclxuICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1saWdodFwiKTtcclxuICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1kYXJrXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBY3RpdmVMaW5rKCk6IHZvaWQge1xyXG4gICAgbGV0IGFjdGl2ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlJyk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoYWN0aXZlcywgZnVuY3Rpb24gKGU6IEVsZW1lbnQpIHtcclxuICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/main.ts\n");

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