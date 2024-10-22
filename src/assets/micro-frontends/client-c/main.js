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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/angular/angular.js":
/*!*****************************************!*\
  !*** ./node_modules/angular/angular.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/angular/index.js":
/*!***************************************!*\
  !*** ./node_modules/angular/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./angular */ \"./node_modules/angular/angular.js\");\nmodule.exports = angular;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYW5ndWxhci9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmd1bGFyL2luZGV4LmpzPzI4N2MiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi9hbmd1bGFyJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/angular/index.js\n");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar angular = __importStar(__webpack_require__(/*! angular */ \"./node_modules/angular/index.js\"));\r\nvar bookings_component_1 = __webpack_require__(/*! ./bookings.component */ \"./src/bookings.component.ts\");\r\nexports.default = angular\r\n    .module('app', [])\r\n    .component('bookings', bookings_component_1.bookingsComponent)\r\n    .config(function ($locationProvider) {\r\n    $locationProvider.hashPrefix('');\r\n})\r\n    .name;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCB7IGJvb2tpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9ib29raW5ncy5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhclxyXG4gICAgICAgICAgICAgICAgLm1vZHVsZSgnYXBwJywgW10pXHJcbiAgICAgICAgICAgICAgICAuY29tcG9uZW50KCdib29raW5ncycsIGJvb2tpbmdzQ29tcG9uZW50KVxyXG4gICAgICAgICAgICAgICAgLmNvbmZpZygoJGxvY2F0aW9uUHJvdmlkZXI6IGFuZ3VsYXIuSUxvY2F0aW9uUHJvdmlkZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5oYXNoUHJlZml4KCcnKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAubmFtZTtcclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/bookings.component.ts":
/*!***********************************!*\
  !*** ./src/bookings.component.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.bookingsComponent = {\r\n    controller: ['$scope', '$location', function ($scope, $location) {\r\n            var that = this;\r\n            this.title = 'Your Bookings';\r\n            this.bookings = [\r\n                { id: '4711', from: 'Graz', to: 'New York', date: new Date() },\r\n                { id: '4712', from: 'New York', to: 'Graz', date: new Date() }\r\n            ];\r\n            this.select = function (b) {\r\n                var data = {\r\n                    domainEvent: 'booking-selected',\r\n                    booking: b\r\n                };\r\n            };\r\n        }],\r\n    template: \"\\n    <div style=\\\"border: dashed 5px gray; padding: 10px;\\\">\\n\\n        <div style=\\\"margin-bottom:10px;\\\">\\n            <img src=\\\"assets/img/angularjs.png\\\" height=\\\"50\\\">\\n        </div>\\n\\n        <div class=\\\"card\\\">\\n\\n            <div class=\\\"header\\\">\\n                <h2 class=\\\"title\\\">{{$ctrl.title}}</h2>\\n            </div>\\n            <div class=\\\"content\\\">\\n    \\n                <ul ng-repeat=\\\"b in $ctrl.bookings\\\" class=\\\"list-group\\\">\\n                    <li class=\\\"list-group-item\\\">\\n                        <a ng-click=\\\"$ctrl.select(b)\\\">{{b.id}}, {{b.from}} - {{b.to}}, {{b.date | date:'short'}}</a>\\n                    </li>\\n                </ul>\\n\\n            </div>\\n        </div>\\n    </div>        \\n    \"\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYm9va2luZ3MuY29tcG9uZW50LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb2tpbmdzLmNvbXBvbmVudC50cz80OTRmIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY29uc3QgYm9va2luZ3NDb21wb25lbnQ6IGFuZ3VsYXIuSUNvbXBvbmVudE9wdGlvbnMgPSB7XHJcbiAgICBjb250cm9sbGVyOiBbJyRzY29wZScsICckbG9jYXRpb24nLCBmdW5jdGlvbigkc2NvcGU6IGFuZ3VsYXIuSVNjb3BlLCAkbG9jYXRpb246IGFuZ3VsYXIuSUxvY2F0aW9uU2VydmljZSkge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnRpdGxlID0gJ1lvdXIgQm9va2luZ3MnO1xyXG5cclxuICAgICAgICB0aGlzLmJvb2tpbmdzID0gW1xyXG4gICAgICAgICAgICB7IGlkOiAnNDcxMScsIGZyb206ICdHcmF6JywgdG86ICdOZXcgWW9yaycsIGRhdGU6IG5ldyBEYXRlKCkgfSxcclxuICAgICAgICAgICAgeyBpZDogJzQ3MTInLCBmcm9tOiAnTmV3IFlvcmsnLCB0bzogJ0dyYXonLCBkYXRlOiBuZXcgRGF0ZSgpIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdCA9IGZ1bmN0aW9uKGIpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGRvbWFpbkV2ZW50OiAnYm9va2luZy1zZWxlY3RlZCcsXHJcbiAgICAgICAgICAgICAgICBib29raW5nOiBiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfV0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBzdHlsZT1cImJvcmRlcjogZGFzaGVkIDVweCBncmF5OyBwYWRkaW5nOiAxMHB4O1wiPlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLWJvdHRvbToxMHB4O1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvYW5ndWxhcmpzLnBuZ1wiIGhlaWdodD1cIjUwXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPnt7JGN0cmwudGl0bGV9fTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICA8dWwgbmctcmVwZWF0PVwiYiBpbiAkY3RybC5ib29raW5nc1wiIGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBuZy1jbGljaz1cIiRjdHJsLnNlbGVjdChiKVwiPnt7Yi5pZH19LCB7e2IuZnJvbX19IC0ge3tiLnRvfX0sIHt7Yi5kYXRlIHwgZGF0ZTonc2hvcnQnfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PiAgICAgICAgXHJcbiAgICBgXHJcbn07Il0sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBd0JBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/bookings.component.ts\n");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar angular = __importStar(__webpack_require__(/*! angular */ \"./node_modules/angular/index.js\"));\r\nvar app_1 = __importDefault(__webpack_require__(/*! ./app */ \"./src/app.ts\"));\r\nvar comp = document.getElementsByTagName('client-c')[0];\r\ncomp.innerHTML = '<bookings></bookings>';\r\nangular.bootstrap(document.body, [app_1.default]);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzP2NkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IGFwcE1vZHVsZSBmcm9tICcuL2FwcCc7XHJcblxyXG5jb25zdCBjb21wID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NsaWVudC1jJylbMF07XHJcbmNvbXAuaW5uZXJIVE1MID0gJzxib29raW5ncz48L2Jvb2tpbmdzPic7XHJcbmFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LmJvZHksIFthcHBNb2R1bGVdKTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.ts\n");

/***/ })

/******/ });