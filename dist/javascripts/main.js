/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascripts/humburger-menu.js":
/*!*******************************************!*\
  !*** ./src/javascripts/humburger-menu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//humburger-menu
var menuBtn = document.querySelector(".header__drawer");
var body = document.querySelector("body");
var overlay = document.querySelector(".header__overlay");
var drawerMenu = document.querySelector(".drawer__menu");
var remove = function remove() {
  menuBtn.classList.remove("active");
  overlay.classList.remove("active");
  //drawerMenu.classList.remove("active");
  body.classList.remove("noscroll");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    //drawerMenu.classList.toggle("active");
    //body.classList.toggle("noscroll");
  });

  overlay.addEventListener("click", function () {
    if (overlay.classList.contains("active")) {
      remove();
    }
  });
});

/***/ }),

/***/ "./src/javascripts/swiper.js":
/*!***********************************!*\
  !*** ./src/javascripts/swiper.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//swiper
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    //spaceBetween: 60,
    loop: true,
    speed: 300,
    centeredSlides: true,
    autoplay: {
      delay: 5000
    },
    // ページネーションが必要なら追加
    breakpoints: {
      768: {
        slidesPerView: 1.1059
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets"
    },
    // ナビボタンが必要なら追加
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    scrollbar: {
      el: ".swiper-scrollbar"
    }
  });
});

/***/ }),

/***/ "./src/stylesheets/main.scss":
/*!***********************************!*\
  !*** ./src/stylesheets/main.scss ***!
  \***********************************/
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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/javascripts/main.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/main.scss */ "./src/stylesheets/main.scss");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper */ "./src/javascripts/swiper.js");
/* harmony import */ var _humburger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./humburger-menu */ "./src/javascripts/humburger-menu.js");



document.addEventListener("DOMContentLoaded", function () {
  (0,_humburger_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_swiper__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // 画面幅測定用
  // function getWindowSize() {
  //   var sW, sH, s;
  //   sW = window.innerWidth;
  //   sH = window.innerHeight;

  //   s = "横幅 = " + sW + " / 高さ = " + sH;

  //   document.getElementById("WinSize").innerHTML = s;
  // }
  // getWindowSize();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map