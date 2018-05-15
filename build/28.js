webpackJsonp([28],{

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageWalletRemoveModalModule", function() { return ManageWalletRemoveModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__remove_account_modal__ = __webpack_require__(1253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ManageWalletRemoveModalModule = /** @class */ (function () {
    function ManageWalletRemoveModalModule() {
    }
    ManageWalletRemoveModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__remove_account_modal__["a" /* RemoveAccountModal */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__remove_account_modal__["a" /* RemoveAccountModal */]]
        })
    ], ManageWalletRemoveModalModule);
    return ManageWalletRemoveModalModule;
}());

//# sourceMappingURL=remove-account-modal.module.js.map

/***/ }),

/***/ 1253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveAccountModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_actions__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* TODO: The path is working there with RootState */
var RemoveAccountModal = /** @class */ (function () {
    function RemoveAccountModal(navParams, viewCtrl, store) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.store = store;
    }
    RemoveAccountModal.prototype.ngOnInit = function () { };
    Object.defineProperty(RemoveAccountModal.prototype, "width", {
        get: function () {
            return this.navParams.get('offsetWidth') + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoveAccountModal.prototype, "height", {
        get: function () {
            return this.navParams.get('offsetHeight') + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoveAccountModal.prototype, "account", {
        get: function () {
            return this.navParams.get('account');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoveAccountModal.prototype, "marginTop", {
        get: function () {
            return this.navParams.get('marginTop');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoveAccountModal.prototype, "label", {
        get: function () {
            return this.account.label;
        },
        enumerable: true,
        configurable: true
    });
    RemoveAccountModal.prototype.handleCloseClick = function () {
        this.viewCtrl.dismiss();
    };
    RemoveAccountModal.prototype.handleConfirmClick = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_actions__["i" /* WalletActions */].RemoveAccount(this.account));
        this.handleCloseClick();
    };
    RemoveAccountModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'remove-account-modal',
            template: "\n\t  <ion-slides [style.marginTop]=\"marginTop\">\n\t\t  <ion-slide>\n\t\t\t  <div class=\"card\"\n\t\t\t       [style.height]=\"height\"\n\t\t\t       [style.width]=\"width\">\n\t\t\t\t  <div class=\"close\">\n\t\t\t\t\t\t\t<div class=\"icon\"\n\t\t\t\t\t\t\t\t\t (click)=\"handleCloseClick()\">\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"close\"></ion-icon>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t  <div class=\"rm-header\">\n\t\t\t\t\t\t{{ 'PROFILE.MANAGE_WALLET.REMOVE_ACCOUNT.title' | translate }}\n\t\t\t\t\t</div>\n\n\t\t\t\t  <div class=\"rm-content\">\n\t\t\t\t\t  {{ 'PROFILE.MANAGE_WALLET.REMOVE_ACCOUNT.tips_prefix' | translate }}\n\t\t\t\t\t  <span>{{ label }}</span>\n\t\t\t\t\t  {{ 'PROFILE.MANAGE_WALLET.REMOVE_ACCOUNT.tips_suffix' | translate }}\n\t\t\t\t  </div>\n\n\t\t\t\t  <!--<div class=\"rm-passphrase\">\n\t\t\t\t\t\t\t<ion-input class=\"rm-passphrase__input\"\n\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"{{ 'PROFILE.MANAGE_WALLET.REMOVE_ACCOUNT.input' | translate }}\"\n\t\t\t\t\t\t\t\t\t\t\t\t type=\"password\"\n\t\t\t\t\t\t\t\t\t\t\t\t [(ngModel)]=\"passphrase\"></ion-input>\n\t\t\t\t\t</div>-->\n\n\t\t\t\t  <div class=\"rm-confirm\">\n\t\t\t\t\t  <button ion-button\n\t\t\t\t\t          class=\"otcgo-button--colour\"\n\t\t\t\t\t          block\n\t\t\t\t\t          round\n\t\t\t\t\t          (click)=\"handleConfirmClick()\">\n\t\t\t\t\t\t  {{ 'PROFILE.MANAGE_WALLET.REMOVE_ACCOUNT.confirm' | translate }}\n\t\t\t\t\t  </button>\n\t\t\t\t  </div>\t\t\t\t\t\n\t\t\t  </div>\n\t\t  </ion-slide>\n\t  </ion-slides>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], RemoveAccountModal);
    return RemoveAccountModal;
}());

//# sourceMappingURL=remove-account-modal.js.map

/***/ })

});
//# sourceMappingURL=28.js.map