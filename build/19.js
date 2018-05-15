webpackJsonp([19],{

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWalletPageModule", function() { return AddWalletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_wallet__ = __webpack_require__(1651);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddWalletPageModule = /** @class */ (function () {
    function AddWalletPageModule() {
    }
    AddWalletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__add_wallet__["a" /* AddWalletPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__add_wallet__["a" /* AddWalletPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__add_wallet__["a" /* AddWalletPage */]]
        })
    ], AddWalletPageModule);
    return AddWalletPageModule;
}());

//# sourceMappingURL=add-wallet.module.js.map

/***/ }),

/***/ 1651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddWalletPage = /** @class */ (function () {
    function AddWalletPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.translationPrefix = 'PROFILE.MANAGE_WALLET.ADD_WALLET.';
    }
    AddWalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-wallet',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\profile\manage-wallet\add-wallet\add-wallet.html"*/'<ion-header class="otcgo-header">\n\n    <ion-navbar>\n\n        <ion-title>{{ translationPrefix + \'title\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="aw">\n\n    <ion-card>\n\n        <ion-item detail-push icon-right> <!--(click)="navCtrl.push(\'ImportWallet\')"-->\n\n            {{ translationPrefix + \'import_wallet\' | translate }}\n\n            <ion-icon md="ios-arrow-forward-outline" ios="none" item-end></ion-icon>\n\n        </ion-item>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-item detail-push icon-right> <!--(click)="navCtrl.push(\'ObservationMode\')"-->\n\n            {{ translationPrefix + \'watch_only\' | translate }}\n\n            <ion-icon md="ios-arrow-forward-outline" ios="none" item-end></ion-icon>\n\n        </ion-item>\n\n    </ion-card>\n\n\n\n    <button ion-button round full clear class="otcgo-button">\n\n        {{ translationPrefix + \'create_wallet\' | translate }}\n\n    </button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\profile\manage-wallet\add-wallet\add-wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], AddWalletPage);
    return AddWalletPage;
}());

//# sourceMappingURL=add-wallet.js.map

/***/ })

});
//# sourceMappingURL=19.js.map