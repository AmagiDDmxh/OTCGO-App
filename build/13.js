webpackJsonp([13],{

/***/ 1004:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendModalModule", function() { return SendModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__send_modal__ = __webpack_require__(1082);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__send_modal__["a" /* SendModalComponent */]
];
var SendModalModule = /** @class */ (function () {
    function SendModalModule() {
    }
    SendModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: COMPONENTS,
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__send_modal__["a" /* SendModalComponent */]),
            ],
            exports: COMPONENTS
        })
    ], SendModalModule);
    return SendModalModule;
}());

//# sourceMappingURL=send-modal.module.js.map

/***/ }),

/***/ 1082:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__send_modal_validators__ = __webpack_require__(1102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_utils__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__send_modal_provider__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_actions__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_selectors__ = __webpack_require__(101);
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











var SendModalComponent = /** @class */ (function () {
    function SendModalComponent(viewCtrl, navCtrl, barcodeScanner, notificationProvider, alertCtrl, loadingCtrl, sendModalProvider, store, fb) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.notificationProvider = notificationProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.sendModalProvider = sendModalProvider;
        this.store = store;
        this.fb = fb;
        this.translationPrefix = 'POSSESSIONS.SEND_MODAL.';
        this.store.select(__WEBPACK_IMPORTED_MODULE_10__store_selectors__["b" /* BalancesSelectors */].getSelectedBalance).subscribe(function (selectedBalance) { return _this.selectedBalance = selectedBalance; });
        this.formGroup = this.fb.group({
            address: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__send_modal_validators__["a" /* addressValidator */]]],
            passphrase: ['', this.w ? [] : __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            amount: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, Object(__WEBPACK_IMPORTED_MODULE_5__send_modal_validators__["b" /* amountValidator */])(this.selectedBalance.amount)]],
            label: [''],
        });
    }
    Object.defineProperty(SendModalComponent.prototype, "toAddress", {
        get: function () { return this.formGroup.get('address'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendModalComponent.prototype, "passphrase", {
        get: function () { return this.formGroup.get('passphrase'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendModalComponent.prototype, "amount", {
        get: function () { return this.formGroup.get('amount'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendModalComponent.prototype, "label", {
        get: function () { return this.formGroup.get('label'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendModalComponent.prototype, "w", {
        get: function () {
            try {
                return this.sendModalProvider.account && this.sendModalProvider.account.WIF;
            }
            catch (e) {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    SendModalComponent.prototype.ngOnInit = function () {
    };
    SendModalComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_10__store_selectors__["i" /* TransactionsSelectors */].getSelectedAddress).take(1).subscribe(function (address) { return _this.toAddress.setValue(address); });
    };
    SendModalComponent.prototype.ionViewDidLeave = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_9__store_actions__["h" /* TransactionsActions */].CleanSelectedContact());
    };
    SendModalComponent.prototype.handleClose = function () {
        this.viewCtrl.dismiss();
        this.formGroup.reset();
    };
    /**
     * Address must be check validity and required
     * @if address && isAddress(address)
     * @then passphrase been use for signature the wallet file is require
     * @then amount is required and translate to big num
     * @optional Label
     **/
    SendModalComponent.prototype.transfer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.toAddress.markAsTouched();
                        this.passphrase.markAsTouched();
                        this.amount.markAsTouched();
                        if (!this.formGroup.valid ||
                            !this.toAddress.valid ||
                            !this.amount.valid ||
                            !this.passphrase.valid) {
                            return [2 /*return*/];
                        }
                        loading = this.loadingCtrl.create();
                        return [4 /*yield*/, loading.present()];
                    case 1:
                        _a.sent();
                        this.sendModalProvider
                            .decrypt(this.passphrase.value)
                            .then(function (pr) { return __awaiter(_this, void 0, void 0, function () {
                            var result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.sendModalProvider.doSendAsset({
                                            dests: this.toAddress.value,
                                            amounts: this.amount.value,
                                            assetId: this.selectedBalance.hash
                                        }, pr)];
                                    case 1:
                                        result = _a.sent();
                                        if (!result) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.handleClose()];
                                    case 2:
                                        _a.sent();
                                        this.notificationProvider.emit({ message: '转账成功' });
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })
                            .catch(function (err) {
                            if (err.message)
                                return _this.showPrompt({ message: err.message, title: '错误' });
                            _this.showPrompt({ message: err, title: '错误' });
                        })
                            .then(function (_) {
                            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_9__store_actions__["b" /* BalancesActions */].Load());
                            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_9__store_actions__["h" /* TransactionsActions */].CleanSelectedContact());
                            loading.dismissAll();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SendModalComponent.prototype.showPrompt = function (config) {
        var prompt = this.alertCtrl.create(config);
        prompt.present();
    };
    SendModalComponent.prototype.handleScanClick = function () {
        var _this = this;
        this.barcodeScanner.scan()
            .then(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_6__shared_utils__["e" /* isAddress */])(data.text) && _this.toAddress.setValue(data.text); })
            .catch(function (err) { return _this.notificationProvider.emit({ message: err }); });
    };
    SendModalComponent.prototype.handleContactClick = function () {
        this.navCtrl.push('Contacts', { fromProfile: false });
    };
    SendModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'send-modal',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\components\modals\send-modal\send-modal.html"*/'<ion-content padding class="send-modal__content" fixed>\n\n	<div class="content-header">\n\n		<button ion-button icon-only clear (click)="handleClose()" float-end>\n\n			<ion-icon name=\'close\'></ion-icon>\n\n		</button>\n\n	</div>\n\n\n\n	<form class="container" [formGroup]="formGroup" #sendDir="ngForm" (submit)="transfer()">\n\n		<h5>{{ translationPrefix + \'title\' | translate }}</h5>\n\n\n\n		<ion-item class="round">\n\n			<ion-input placeholder="{{ translationPrefix + \'address\' | translate }}" formControlName="address" required></ion-input>\n\n			<ion-icon item-end *ngIf="toAddress.valid" name="checkmark" style="color: #3094d6;"></ion-icon>\n\n			<ion-icon item-end *ngIf="toAddress.invalid && (toAddress.dirty || toAddress.touched) && toAddress.errors.invalidAddress" name="close" style="color: red;"></ion-icon>\n\n		</ion-item>\n\n\n\n		<div class="tooltips">\n\n			<div class="icon" (click)="handleScanClick()">\n\n				<img src="assets/imgs/icon-send-modal_scan.svg">\n\n			</div>\n\n			<div class="icon" (click)="handleContactClick()">\n\n				<img src="assets/imgs/icon-send-modal_contact.svg">\n\n			</div>\n\n		</div>\n\n\n\n		<ion-item class="round" *ngIf="!w">\n\n			<ion-input placeholder="{{ translationPrefix + \'password\' | translate }}" type="password" formControlName="passphrase" required></ion-input>\n\n			<ion-icon item-end *ngIf="passphrase.valid" name="checkmark" style="color: #3094d6;"></ion-icon>\n\n			<ion-icon item-end *ngIf="passphrase.invalid && (passphrase.dirty || passphrase.touched)" name="close" style="color: red;"></ion-icon>\n\n		</ion-item>\n\n\n\n		<!--<ion-item class="checkbox">\n\n			<ion-label>记住密码</ion-label>\n\n			<ion-checkbox formControlName="rememberPassphrase" type="password"></ion-checkbox>\n\n		</ion-item>-->\n\n\n\n		<ion-item class="round">\n\n			<ion-input\n\n				type="number" placeholder="{{ translationPrefix + \'amount\' | translate }}" formControlName="amount"\n\n				[value]="amount.value"\n\n				[max]="selectedBalance.amount"\n\n				required></ion-input>\n\n			<ion-icon item-end *ngIf="amount.valid" name="checkmark" style="color: #3094d6;"></ion-icon>\n\n			<ion-icon item-end *ngIf="amount.invalid && (amount.dirty || amount.touched) && amount.errors.invalidAmount" name="close" style="color: red;"></ion-icon>\n\n		</ion-item>\n\n\n\n		<ion-list class="amount-range">\n\n			<ion-range step="1" min="0" [max]="selectedBalance.amount"\n\n			           formControlName="amount">\n\n				<ion-label range-left>0</ion-label>\n\n				<ion-label range-right>{{ selectedBalance.amount }}</ion-label>\n\n			</ion-range>\n\n		</ion-list>\n\n\n\n		<!--<ion-item class="round">\n\n			<ion-input placeholder="{{ translationPrefix + \'label\' | translate }}" formControlName="label"></ion-input>\n\n		</ion-item>-->\n\n\n\n		<div class="spacer"></div>\n\n\n\n		<button ion-button round full class="otcgo-button--colour" type="submit">{{ translationPrefix + \'transfer\' | translate }}</button>\n\n	</form>\n\n</ion-content>'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\components\modals\send-modal\send-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_8__providers__["f" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__send_modal_provider__["a" /* SendModalProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], SendModalComponent);
    return SendModalComponent;
}());

//# sourceMappingURL=send-modal.js.map

/***/ }),

/***/ 1102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addressValidator;
/* harmony export (immutable) */ __webpack_exports__["b"] = amountValidator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_utils__ = __webpack_require__(102);

function addressValidator(addressCtrl) {
    var value = addressCtrl.value;
    return (!value || !Object(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["e" /* isAddress */])(value))
        ? { invalidAddress: true }
        : null;
}
function amountValidator(maxValue) {
    return function (amountCtrl) {
        var value = amountCtrl.value;
        if (!value || value <= 0 || value > maxValue) {
            return { invalidAmount: true };
        }
        return null;
    };
}
//# sourceMappingURL=send-modal.validators.js.map

/***/ })

});
//# sourceMappingURL=13.js.map