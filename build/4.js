webpackJsonp([4],{

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportSuccessPageModule", function() { return ImportSuccessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__import_success__ = __webpack_require__(1654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImportSuccessPageModule = /** @class */ (function () {
    function ImportSuccessPageModule() {
    }
    ImportSuccessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__import_success__["a" /* ImportSuccessPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__import_success__["a" /* ImportSuccessPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_1__import_success__["a" /* ImportSuccessPage */]]
        })
    ], ImportSuccessPageModule);
    return ImportSuccessPageModule;
}());

//# sourceMappingURL=import-success.module.js.map

/***/ }),

/***/ 1081:
/***/ (function(module, exports) {

//# sourceMappingURL=typings.js.map

/***/ }),

/***/ 1101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manage_wallet_cards__ = __webpack_require__(1157);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__manage_wallet_cards__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manage_wallet_card__ = __webpack_require__(1158);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__manage_wallet_card__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageWalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_clipboard__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_profile_manage_wallet__ = __webpack_require__(1101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_actions__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_selectors__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ManageWalletPage = /** @class */ (function () {
    function ManageWalletPage(alertCtrl, walletProvider, clipBoard, loadingCtrl, modalCtrl, elementRef, np, store) {
        this.alertCtrl = alertCtrl;
        this.walletProvider = walletProvider;
        this.clipBoard = clipBoard;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.elementRef = elementRef;
        this.np = np;
        this.store = store;
        // accounts = this.accountProvider.accounts
        this.translationPrefix = 'PROFILE.MANAGE_WALLET.';
        this.accounts = this.store.select(__WEBPACK_IMPORTED_MODULE_7__store_selectors__["j" /* WalletSelectors */].getAccounts);
        this.currency = this.store.select(__WEBPACK_IMPORTED_MODULE_7__store_selectors__["g" /* SettingsSelectors */].getCurrency);
        this.amounts = this.store.select(__WEBPACK_IMPORTED_MODULE_7__store_selectors__["f" /* PricesSelectors */].getAmounts);
        this.gasAmounts = this.store.select(__WEBPACK_IMPORTED_MODULE_7__store_selectors__["f" /* PricesSelectors */].getGASAmounts);
    }
    Object.defineProperty(ManageWalletPage.prototype, "marginTop", {
        get: function () {
            return parseInt(this.elementRef.nativeElement.querySelector('.scroll-content').style.marginTop) / 2 + 'px';
        },
        enumerable: true,
        configurable: true
    });
    ManageWalletPage.prototype.handleSetDefaultAccount = function (account) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_actions__["i" /* WalletActions */].SetDefaultAccount(account));
    };
    ManageWalletPage.prototype.handleSaveAccount = function (account) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_actions__["i" /* WalletActions */].ChangeAccountLabel(account));
        this.np.notifyTranslation(this.translationPrefix + 'save_success');
    };
    ManageWalletPage.prototype.handleRemoveAccount = function (account) {
        // this.store.dispatch(new WalletActions.RemoveAccount(account))
        var _a = this.cards.slides.container.querySelector('.card'), offsetHeight = _a.offsetHeight, offsetWidth = _a.offsetWidth;
        var marginTop = this.marginTop;
        this.openModal({ account: account, offsetHeight: offsetHeight, offsetWidth: offsetWidth, marginTop: marginTop });
    };
    ManageWalletPage.prototype.openModal = function (data) {
        this.modalCtrl.create('RemoveAccountModal', data, { cssClass: 'sea-card' }).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('cards'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__components_profile_manage_wallet__["b" /* ManageWalletCards */])
    ], ManageWalletPage.prototype, "cards", void 0);
    ManageWalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-manage-wallet',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\profile\manage-wallet\manage-wallet.html"*/'<ion-header class="otcgo-header manage-wallet">\n\n    <ion-navbar>\n\n        <ion-title>{{ \'PROFILE.MANAGE_WALLET.title\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only clear navPush="AddWallet">\n\n                <ion-icon name="add"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="mw">\n\n    <manage-wallet-cards\n\n        #cards\n\n        [accounts]="accounts | async"\n\n        [currency]="currency | async"\n\n        [amounts]="amounts | async"\n\n        [gasAmounts]="gasAmounts | async"\n\n        (onSaveAccount)="handleSaveAccount($event)"\n\n        (onRemoveAccount)="handleRemoveAccount($event)"\n\n        (onSetDefaultAccount)="handleSetDefaultAccount($event)"\n\n    ></manage-wallet-cards>\n\n</ion-content>'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\profile\manage-wallet\manage-wallet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["i" /* WalletProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["f" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], ManageWalletPage);
    return ManageWalletPage;
}());

//# sourceMappingURL=manage-wallet.js.map

/***/ }),

/***/ 1157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageWalletCards; });
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


var ManageWalletCards = /** @class */ (function () {
    function ManageWalletCards() {
        this.firstIn = true;
        this.gasAmounts = [];
        this.amounts = [];
        this.onSaveAccount = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onSetDefaultAccount = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onRemoveAccount = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    Object.defineProperty(ManageWalletCards.prototype, "showRemoveIcon", {
        get: function () { return this.accounts.length > 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageWalletCards.prototype, "accounts", {
        get: function () { return this._accounts; },
        set: function (val) {
            if (!this.firstIn && this.isDeletionOrAddition(val))
                this.slides.slideTo(val && val.length - 1 || 0, 250);
            this._accounts = val;
            this.firstIn = false;
        },
        enumerable: true,
        configurable: true
    });
    ManageWalletCards.prototype.isDeletionOrAddition = function (accounts) { return accounts.length !== this._accounts.length; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ManageWalletCards.prototype, "currency", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ManageWalletCards.prototype, "gasAmounts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ManageWalletCards.prototype, "amounts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ManageWalletCards.prototype, "onSaveAccount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ManageWalletCards.prototype, "onSetDefaultAccount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ManageWalletCards.prototype, "onRemoveAccount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], ManageWalletCards.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ManageWalletCards.prototype, "accounts", null);
    ManageWalletCards = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'manage-wallet-cards',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\components\profile\manage-wallet\manage-wallet-cards.html"*/'<ion-slides [pager]="true" class="sea-card">\n\n	<manage-wallet-card\n\n		*ngFor="let account of accounts; index as i"\n\n		[showClose]="showRemoveIcon"\n\n	    [account]="account"\n\n		[oCurrency]="currency"\n\n		[gas]="gasAmounts[i] || 1"\n\n		[amount]="amounts[i] || 0"\n\n		(onSave)="onSaveAccount.emit($event)"\n\n		(onRemove)="onRemoveAccount.emit($event)"\n\n		(onSetDefault)="onSetDefaultAccount.emit($event)">\n\n	</manage-wallet-card>\n\n</ion-slides>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\components\profile\manage-wallet\manage-wallet-cards.html"*/
        })
    ], ManageWalletCards);
    return ManageWalletCards;
}());

//# sourceMappingURL=manage-wallet-cards.js.map

/***/ }),

/***/ 1158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageWalletCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_clipboard__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_neon__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_neon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__libs_neon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_typings__ = __webpack_require__(1081);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_typings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__shared_typings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_copy_to_clipboard__ = __webpack_require__(1159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_copy_to_clipboard__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ManageWalletCard = /** @class */ (function () {
    function ManageWalletCard(alertCtrl, clipBoard, loadingCtrl, np, platform, el) {
        this.alertCtrl = alertCtrl;
        this.clipBoard = clipBoard;
        this.loadingCtrl = loadingCtrl;
        this.np = np;
        this.platform = platform;
        this.el = el;
        this.tempLabel = '';
        this.baseAlertOptions = {
            cssClass: 'mw__exports-actions--box',
            message: '注意，导出 私钥 或 WIF 并使用是一件非常危险的事情，建议使用加密私钥（EncryptedKey）代替',
            inputs: [{ name: 'passphrase', placeholder: '钱包密码', type: 'password' }],
            buttons: [{ text: '取消' }]
        };
        this.translationPrefix = 'PROFILE.MANAGE_WALLET.';
        this.onSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onSetDefault = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    Object.defineProperty(ManageWalletCard.prototype, "label", {
        get: function () { return this.account.label; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageWalletCard.prototype, "isDefault", {
        get: function () { return this.account.isDefault; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageWalletCard.prototype, "labelTop", {
        get: function () {
            var height = this.el.nativeElement.querySelector('.mw__label').clientHeight;
            return "-" + height + "px";
        },
        enumerable: true,
        configurable: true
    });
    ManageWalletCard.prototype.handleWIFClick = function (account) { this.showWIFKeyBox(account); };
    ManageWalletCard.prototype.handleEncryptedClick = function (account) {
        try {
            this.showKeyBox({ title: 'EncryptedKey', message: account.encrypted });
        }
        catch (e) {
            this.np.emit(e);
        }
    };
    ManageWalletCard.prototype.handleSaveClick = function (account) {
        if (this.tempLabel) {
            var acct = new __WEBPACK_IMPORTED_MODULE_4__libs_neon__["wallet"].Account(account);
            acct.label = this.tempLabel;
            this.onSave.emit(acct);
            this.tempLabel = '';
        }
    };
    ManageWalletCard.prototype.showWIFKeyBox = function (account) {
        var _this = this;
        try {
            if (account.WIF)
                return this.showKeyBox({ title: 'WIF', message: account.WIF });
        }
        catch (e) {
            var commonLoading_1 = this.loadingCtrl.create();
            var alertOptions = Object.assign({}, this.baseAlertOptions, {
                title: '导出WIF',
                buttons: this.baseAlertOptions.buttons.concat([
                    {
                        text: '确认',
                        handler: function (_a) {
                            var passphrase = _a.passphrase;
                            return passphrase &&
                                passphrase.length >= 4 &&
                                _this.parsePassphrase(account.encrypted, passphrase, commonLoading_1, 'wif');
                        }
                    }
                ])
            });
            this.alertCtrl.create(alertOptions).present();
        }
    };
    ManageWalletCard.prototype.showKeyBox = function (_a) {
        var _this = this;
        var title = _a.title, message = _a.message;
        var handler = function () {
            if (_this.platform.is('mobileweb') || _this.platform.is('core')) {
                var state = __WEBPACK_IMPORTED_MODULE_6_copy_to_clipboard__(message) ? 'success' : 'fail';
                return _this.np.emit("copy " + state + "!");
            }
            _this.clipBoard.copy(message).then(function () { return _this.np.emit('copy success'); });
        };
        this.alertCtrl.create({
            title: title, message: message, cssClass: 'mw__exports-actions--key',
            buttons: [{ text: '取消' }, { text: '复制', handler: handler }]
        }).present();
    };
    ManageWalletCard.prototype.parsePassphrase = function (encryptedKey, passphrase, commonLoading, type) {
        return __awaiter(this, void 0, void 0, function () {
            var wif, account, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, commonLoading.present()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 6]);
                        wif = __WEBPACK_IMPORTED_MODULE_4__libs_neon__["wallet"].decrypt(encryptedKey, passphrase);
                        account = new __WEBPACK_IMPORTED_MODULE_4__libs_neon__["wallet"].Account(wif);
                        return [4 /*yield*/, commonLoading.dismiss()];
                    case 3:
                        _a.sent();
                        if (type === 'privateKey')
                            return [2 /*return*/, this.showKeyBox({ title: '私钥', message: account['privateKey'] })];
                        return [2 /*return*/, this.showKeyBox({ title: 'WIF', message: account['WIF'] })];
                    case 4:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.handleError(commonLoading)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ManageWalletCard.prototype.handleError = function (loading) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.dismiss()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.alertCtrl.create({
                                title: '提示',
                                message: '密码错误',
                                buttons: ['OK']
                            }).present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Leave this three for later feature */
    ManageWalletCard.prototype.handleOpenLocationClick = function () { };
    ManageWalletCard.prototype.handlePrivateKeyClick = function (account) {
        this.showPrivateKeyBox(account);
    };
    ManageWalletCard.prototype.showPrivateKeyBox = function (account) {
        var _this = this;
        var commonLoading = this.loadingCtrl.create();
        var handler = function (_a) {
            var passphrase = _a.passphrase;
            if (!passphrase || passphrase.length < 4)
                return false;
            _this.parsePassphrase(account.encrypted, passphrase, commonLoading, 'privateKey');
        };
        var alertOptions = Object.assign({}, this.baseAlertOptions, {
            title: '导出私钥',
            buttons: this.baseAlertOptions.buttons.concat([{ text: '确认', handler: handler }])
        });
        this.alertCtrl.create(alertOptions).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_typings__["Account"])
    ], ManageWalletCard.prototype, "account", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ManageWalletCard.prototype, "oCurrency", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], ManageWalletCard.prototype, "amount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], ManageWalletCard.prototype, "gas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ManageWalletCard.prototype, "showClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ManageWalletCard.prototype, "onSave", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ManageWalletCard.prototype, "onRemove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ManageWalletCard.prototype, "onSetDefault", void 0);
    ManageWalletCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'manage-wallet-card',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\components\profile\manage-wallet\manage-wallet-card.html"*/'<ion-slide>\n\n	<div class="card">\n\n		<div class="mw__label" [style.top]="labelTop">\n\n			{{ label }}\n\n		</div>\n\n\n\n		<div class="close" (click)="onRemove.emit(account)" *ngIf="showClose">\n\n			<div class="icon"><ion-icon name="close"></ion-icon></div>\n\n		</div>\n\n\n\n		<div class="mw__header" ion-row>\n\n			<ion-col class="mw__header__left">\n\n				<div class="mw__title">{{ gas | number:\'1.1-2\' }} <span>GAS</span></div>\n\n			</ion-col>\n\n		</div>\n\n\n\n		<div class="mw__header-price" ion-row>\n\n			<ion-col class="mw__subtitle">\n\n				≈ {{ amount | currency:oCurrency.toUpperCase():\'symbol-narrow\':\'1.1-4\' }}\n\n			</ion-col>\n\n		</div>\n\n\n\n		<div class="mw__changes-feature">\n\n			<ion-input class="mw__changes__input"\n\n			           placeholder="{{ \'PROFILE.MANAGE_WALLET.change_name\' | translate }}"\n\n			           [(ngModel)]="tempLabel"></ion-input>\n\n		</div>\n\n\n\n		<div class="mw__exports-feature" *ngIf="!account.lock">\n\n			<h5 text-left>{{ \'PROFILE.MANAGE_WALLET.export\' | translate }}</h5>\n\n			<!--<button ion-button class="otcgo-button&#45;&#45;edge-gray mw__exports" clear block icon-right (click)="handlePrivateKeyClick(account)">\n\n				导出 私钥\n\n				<ion-icon md="ios-arrow-forward-outline" ios="none" item-end></ion-icon>\n\n			</button>-->\n\n\n\n			<button ion-button\n\n			        class="otcgo-button--edge-gray mw__exports"\n\n			        clear\n\n			        block\n\n			        icon-right\n\n			        (click)="handleWIFClick(account)">\n\n				{{ \'PROFILE.MANAGE_WALLET.export_wif\' | translate }}\n\n				<ion-icon md="ios-arrow-forward-outline" ios="none" item-end></ion-icon>\n\n			</button>\n\n\n\n			<button ion-button\n\n			        class="otcgo-button--edge-gray mw__exports"\n\n			        clear\n\n			        block\n\n			        icon-right\n\n			        (click)="handleEncryptedClick(account)">\n\n				{{ \'PROFILE.MANAGE_WALLET.export_key\' | translate }}\n\n				<ion-icon md="ios-arrow-forward-outline" ios="none" item-end></ion-icon>\n\n			</button>\n\n\n\n			<!--<button ion-button\n\n			        class="otcgo-button&#45;&#45;edge-gray mw__exports"\n\n			        clear\n\n			        block\n\n			        icon-right>\n\n				{{ \'PROFILE.MANAGE_WALLET.export_file\' | translate }}\n\n				<ion-icon md="ios-arrow-forward-outline" ios="none" item-end></ion-icon>\n\n			</button>-->\n\n\n\n			<!--<button ion-button\n\n			        class="otcgo-button&#45;&#45;edge-gray mw__exports"\n\n			        clear\n\n			        block\n\n			        icon-right\n\n			        (click)="handleOpenLocationClick()">\n\n				打开钱包文件所在位置\n\n			</button>-->\n\n		</div>\n\n\n\n		<div class="mw__exports-action">\n\n			<button ion-button class="otcgo-button--colour" block round\n\n			        (click)="handleSaveClick(account)">{{ \'PROFILE.MANAGE_WALLET.save\' | translate }}</button>\n\n			<a [class.is-default]="isDefault"\n\n			   (click)="!isDefault && onSetDefault.emit(account)">\n\n				{{ translationPrefix + (isDefault ? \'default\' : \'default_action\') | translate }}</a>\n\n		</div>\n\n	</div>\n\n</ion-slide>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\components\profile\manage-wallet\manage-wallet-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["f" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ManageWalletCard);
    return ManageWalletCard;
}());

//# sourceMappingURL=manage-wallet-card.js.map

/***/ }),

/***/ 1159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(1160);

var defaultMessage = 'Copy to clipboard: #{key}, Enter';

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) { options = {}; }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement('span');
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = 'unset';
    // prevents scrolling to the end of the page
    mark.style.position = 'fixed';
    mark.style.top = 0;
    mark.style.clip = 'rect(0, 0, 0, 0)';
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = 'pre';
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = 'text';
    mark.style.MozUserSelect = 'text';
    mark.style.msUserSelect = 'text';
    mark.style.userSelect = 'text';

    document.body.appendChild(mark);

    range.selectNode(mark);
    selection.addRange(range);

    var successful = document.execCommand('copy');
    if (!successful) {
      throw new Error('copy command was unsuccessful');
    }
    success = true;
  } catch (err) {
    debug && console.error('unable to copy using execCommand: ', err);
    debug && console.warn('trying IE specific stuff');
    try {
      window.clipboardData.setData('text', text);
      success = true;
    } catch (err) {
      debug && console.error('unable to copy using clipboardData: ', err);
      debug && console.error('falling back to prompt');
      message = format('message' in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == 'function') {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 1160:
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ 1654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wallet_wallet_provider__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_wallet__ = __webpack_require__(1156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImportSuccessPage = /** @class */ (function () {
    function ImportSuccessPage(navCtrl, navParams, walletProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.walletProvider = walletProvider;
        this.alertCtrl = alertCtrl;
        this.manageWalletPage = __WEBPACK_IMPORTED_MODULE_3__manage_wallet__["a" /* ManageWalletPage */];
    }
    ImportSuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-import-success',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\profile\manage-wallet\add-wallet\import-success\import-success.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>导入成功</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="imp-suc">\n\n    <ion-card class="card-info">\n\n        <img class="card-avatar" src="assets/imgs/icon-avatar.svg" alt="">\n\n        <div class="card-title">123.json</div>\n\n    </ion-card>\n\n\n\n    <div class="back2mw-button">\n\n        <button ion-button round block clear [disabled]="disabledBtn" (click)="navCtrl.push(manageWalletPage)">回到管理钱包</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\profile\manage-wallet\add-wallet\import-success\import-success.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_wallet_wallet_provider__["a" /* WalletProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ImportSuccessPage);
    return ImportSuccessPage;
}());

//# sourceMappingURL=import-success.js.map

/***/ })

});
//# sourceMappingURL=4.js.map