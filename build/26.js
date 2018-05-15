webpackJsonp([26],{

/***/ 1009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWalletPageModule", function() { return CreateWalletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_wallet__ = __webpack_require__(1258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__create_wallet__["a" /* CreateWalletPage */]
];
var CreateWalletPageModule = /** @class */ (function () {
    function CreateWalletPageModule() {
    }
    CreateWalletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: COMPONENTS,
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_wallet__["a" /* CreateWalletPage */]),
            ],
            exports: COMPONENTS
        })
    ], CreateWalletPageModule);
    return CreateWalletPageModule;
}());

//# sourceMappingURL=create-wallet.module.js.map

/***/ }),

/***/ 1258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateWalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libs_neon__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libs_neon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__libs_neon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_actions__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_selectors__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateWalletPage = /** @class */ (function () {
    function CreateWalletPage(navCtrl, store, np, lp) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.np = np;
        this.lp = lp;
        this.protocolAgreement = false;
    }
    CreateWalletPage.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_6__store_selectors__["a" /* AuthSelectors */].getLoading).subscribe(function (bool) { return _this.lp.emit(bool); });
        this.store.select(__WEBPACK_IMPORTED_MODULE_6__store_selectors__["a" /* AuthSelectors */].getError).subscribe(function (err) { return _this.np.emit({ message: err }); });
    };
    Object.defineProperty(CreateWalletPage.prototype, "disabledButton", {
        get: function () {
            if (this.wif)
                return !this.passphrase1 || !this.passphrase2 ||
                    (this.passphrase1 !== this.passphrase2) ||
                    !this.name ||
                    !this.protocolAgreement || !this.wif;
            return !this.passphrase1 || !this.passphrase2 ||
                (this.passphrase1 !== this.passphrase2) ||
                !this.name ||
                !this.protocolAgreement;
        },
        enumerable: true,
        configurable: true
    });
    CreateWalletPage.prototype.createWallet = function () {
        if (this.passphrase1 && !this.validatePassphraseStrength(this.passphrase1))
            return this.np.emit({ message: 'Password too short' });
        if (this.passphrase1 !== this.passphrase2)
            return;
        if (this.wif && !__WEBPACK_IMPORTED_MODULE_3__libs_neon__["wallet"].isWIF(this.wif))
            return this.np.emit({ message: 'WIF format wrong' });
        var dispatchOption = {
            wif: this.wif,
            label: this.name,
            passphrase: this.passphrase1
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_actions__["a" /* AuthActions */].CreateWallet(dispatchOption));
    };
    CreateWalletPage.prototype.validatePassphraseStrength = function (passphrase) {
        return passphrase.length >= 4;
    };
    CreateWalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-wallet',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\create-wallet\create-wallet.html"*/'<ion-content class="cw" padding>\n\n\n\n	<div class="title">\n\n		<ion-label>\n\n			<h2>{{ \'CW.title\' | translate }}</h2>\n\n		</ion-label>\n\n	</div>\n\n\n\n	<!-- CW stand for create-wallet -->\n\n	<div class="cw__form-field">\n\n		<ion-item class="cw-name">\n\n			<ion-input placeholder="{{ \'CW.name\' | translate }}" required type="text" [(ngModel)]="name"></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item class="cw-wif">\n\n			<ion-input placeholder="{{ \'CW.wif\' | translate }}" type="text" [(ngModel)]="wif"></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item class="cw-pwd">\n\n			<ion-input placeholder="{{ \'CW.passphrase\' | translate }}" required type="password" [(ngModel)]="passphrase1"></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item class="cw-pwd">\n\n			<ion-input placeholder="{{ \'CW.passphrase_confirm\' | translate }}" required type="password" [(ngModel)]="passphrase2"></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item class="cw-protocol">\n\n			<ion-label>{{ \'CW.agreement_prefix\' | translate }} <span class="blue">{{ \'CW.agreement_text\' | translate }}</span></ion-label>\n\n			<ion-checkbox color="blue" [(ngModel)]="protocolAgreement"></ion-checkbox>\n\n		</ion-item>\n\n	</div>\n\n\n\n	<div class="cw__actions">\n\n		<div class="cw-button">\n\n			<button ion-button round full block [disabled]="disabledButton" (click)="createWallet()">\n\n				{{ \'CW.create_wallet\' | translate }}\n\n			</button>\n\n		</div>\n\n\n\n		<div class="cw-button-white">\n\n			<button (click)="navCtrl.setRoot(\'Login\')" ion-button round full block clear>\n\n				{{ \'CW.tip\' | translate }}\n\n			</button>\n\n		</div>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\create-wallet\create-wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["f" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["e" /* LoadingProvider */]])
    ], CreateWalletPage);
    return CreateWalletPage;
}());

//# sourceMappingURL=create-wallet.js.map

/***/ })

});
//# sourceMappingURL=26.js.map