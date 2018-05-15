webpackJsonp([27],{

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupWalletModule", function() { return BackupWalletModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backup_wallet__ = __webpack_require__(1254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__backup_wallet__["a" /* BackupWalletPage */]
];
var BackupWalletModule = /** @class */ (function () {
    function BackupWalletModule() {
    }
    BackupWalletModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__backup_wallet__["a" /* BackupWalletPage */])
            ],
            declarations: COMPONENTS,
            entryComponents: COMPONENTS
        })
    ], BackupWalletModule);
    return BackupWalletModule;
}());

//# sourceMappingURL=backup-wallet.module.js.map

/***/ }),

/***/ 1254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackupWalletPage; });
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


var BackupWalletPage = /** @class */ (function () {
    function BackupWalletPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BackupWalletPage.prototype.openHome = function () {
        this.navCtrl.setRoot('Tabs');
    };
    BackupWalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-backup-wallet',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\create-wallet\backup-wallet\backup-wallet.html"*/'<ion-content class="backup-wallet">\n\n\n\n	<h1>{{ \'CW.BACKUP.title\' | translate }}</h1>\n\n\n\n	<div class="backup-wallet__content">\n\n		<img class="backup-wallet__success-icon" src="assets/imgs/icon-success.png" alt="">\n\n		{{ \'CW.BACKUP.notes\' | translate }}\n\n	</div>\n\n\n\n	<div class="backup-wallet__button">\n\n		<button class="otcgo-button--colour" ion-button round full block (click)="openHome()">\n\n			{{ \'CW.BACKUP.enter\' | translate }}\n\n		</button>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\create-wallet\backup-wallet\backup-wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], BackupWalletPage);
    return BackupWalletPage;
}());

//# sourceMappingURL=backup-wallet.js.map

/***/ })

});
//# sourceMappingURL=27.js.map