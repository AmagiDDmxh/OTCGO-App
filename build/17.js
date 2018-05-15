webpackJsonp([17],{

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservationModePageModule", function() { return ObservationModePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__observation_mode__ = __webpack_require__(1655);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ObservationModePageModule = /** @class */ (function () {
    function ObservationModePageModule() {
    }
    ObservationModePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__observation_mode__["a" /* ObservationModePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__observation_mode__["a" /* ObservationModePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__observation_mode__["a" /* ObservationModePage */]]
        })
    ], ObservationModePageModule);
    return ObservationModePageModule;
}());

//# sourceMappingURL=observation-mode.module.js.map

/***/ }),

/***/ 1655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservationModePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ObservationModePage = /** @class */ (function () {
    function ObservationModePage() {
        this.translationPrefix = 'PROFILE.MANAGE_WALLET.ADD_WALLET.';
    }
    ObservationModePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-observation',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\profile\manage-wallet\add-wallet\observation-mode\observation-mode.html"*/'<ion-header class="otcgo-header otcgo-header--bl">\n\n\n\n    <ion-navbar>\n\n        <ion-title>{{ 	translationPrefix + \'title\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="login">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\profile\manage-wallet\add-wallet\observation-mode\observation-mode.html"*/,
        })
    ], ObservationModePage);
    return ObservationModePage;
}());

//# sourceMappingURL=observation-mode.js.map

/***/ })

});
//# sourceMappingURL=17.js.map