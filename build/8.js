webpackJsonp([8],{

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportWalletModule", function() { return ImportWalletModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__import_wallet__ = __webpack_require__(1652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login__ = __webpack_require__(1103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ImportWalletModule = /** @class */ (function () {
    function ImportWalletModule() {
    }
    ImportWalletModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__import_wallet__["a" /* ImportWallet */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_login__["a" /* LoginFormModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__import_wallet__["a" /* ImportWallet */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], ImportWalletModule);
    return ImportWalletModule;
}());

//# sourceMappingURL=import-wallet.module.js.map

/***/ }),

/***/ 1067:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_validator__ = __webpack_require__(1104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utils__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginForm = /** @class */ (function () {
    function LoginForm(fb, ts, alertCtrl) {
        var _this = this;
        this.fb = fb;
        this.ts = ts;
        this.alertCtrl = alertCtrl;
        this.onPrivateKey = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onOldWallet = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onNEP5 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onWIF = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isWIFKey = true;
        this.isOldWallet = false;
        this.translationPrefix = 'LOGIN.';
        this.showPrompt = function (msg) { return _this.alertCtrl.create({ title: msg }).present(); };
    }
    Object.defineProperty(LoginForm.prototype, "wif", {
        get: function () { return this.loginForm.get('wif'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginForm.prototype, "passphrase", {
        get: function () { return this.loginForm.get('passphrase'); },
        enumerable: true,
        configurable: true
    });
    LoginForm.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            wif: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__login_validator__["a" /* WIFValidator */]], __WEBPACK_IMPORTED_MODULE_4__login_validator__["b" /* asyncWIFValidator */]],
            passphrase: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(4)]]
        });
        this.getTranslations();
    };
    LoginForm.prototype.getTranslations = function () {
        var _this = this;
        var texts = ['import_long', 'import_short'];
        var translations = texts.map(function (text) { return _this.translationPrefix + text; });
        this.ts.get(translations).subscribe(function (trs) {
            _this.importTextLong = trs[translations[0]];
            _this.importTextShort = trs[translations[1]];
        });
        this.importText = this.importTextShort;
    };
    LoginForm.prototype.switchImportBox = function (fileInput) {
        this.isWIFKey = false;
        this.importText = this.importTextLong;
        if (window.navigator && !this.wif.value)
            fileInput.click();
    };
    LoginForm.prototype.switchWIFKeyBox = function () {
        this.isWIFKey = true;
        this.importText = this.importTextShort;
    };
    LoginForm.prototype.fileChange = function (file) {
        if (/.json$/.test(file.name)) {
            var reader = new FileReader();
            var ng_1 = this;
            // In the onload function `this` is reference to reader itself
            reader.onload = function () {
                try {
                    var JSONFile = JSON.parse(this.result);
                    if (Object(__WEBPACK_IMPORTED_MODULE_5__shared_utils__["g" /* isOldWallet */])(JSONFile)) {
                        ng_1.file = JSONFile;
                        ng_1.isOldWallet = true;
                        ng_1.importText = file.name;
                        return;
                    }
                    else if (Object(__WEBPACK_IMPORTED_MODULE_5__shared_utils__["i" /* isWallet */])(JSONFile)) {
                        ng_1.file = JSONFile;
                        ng_1.isOldWallet = false;
                        ng_1.importText = file.name;
                        return;
                    }
                    throw new Error();
                }
                catch (e) {
                    console.log('file change error', e);
                    ng_1.showPrompt('Invalid wallet file');
                }
            };
            reader.readAsText(file);
            return;
        }
        console.log('invalid file', file);
        return this.showPrompt('Invalid wallet file');
    };
    LoginForm.prototype.login = function (_a) {
        var controls = _a.controls, value = _a.value;
        var _b = this, file = _b.file, isWIFKey = _b.isWIFKey;
        var wifControl = controls.wif, passphraseControl = controls.passphrase;
        var wifValue = value.wif, passphraseValue = value.passphrase;
        if (file && !this.isOldWallet) {
            wifControl.setValue('');
            passphraseControl.setValue('');
        }
        if (wifValue && isWIFKey && !passphraseValue) {
            if (wifControl.invalid && wifValue !== 'test')
                return;
            return this.onWIF.emit(wifValue);
        }
        else if (file && !isWIFKey && !wifValue) {
            if (Object(__WEBPACK_IMPORTED_MODULE_5__shared_utils__["g" /* isOldWallet */])(file)) {
                if (!passphraseControl.valid)
                    return;
                return this.onOldWallet.emit({ oldWallet: file, passphrase: passphraseValue });
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_5__shared_utils__["i" /* isWallet */])(file)) {
                return this.onNEP5.emit(file);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LoginForm.prototype, "tip", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], LoginForm.prototype, "onPrivateKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], LoginForm.prototype, "onOldWallet", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], LoginForm.prototype, "onNEP5", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], LoginForm.prototype, "onWIF", void 0);
    LoginForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login-form',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\components\login\login-form.html"*/'<form [formGroup]="loginForm" (submit)="login(loginForm)">\n\n	<ion-label class="login__error">\n\n		<h5 *ngIf="wif.invalid && (wif.dirty || wif.touched) && wif.errors.invalidWIF">\n\n			{{ \'LOGIN.wif_error\' | translate }}\n\n		</h5>\n\n	</ion-label>\n\n\n\n	<ion-row class="login__wif-section">\n\n		<ion-col>\n\n			<ion-item class="login__wif-input rounded">\n\n				<ion-input type="text" placeholder="{{ \'LOGIN.wif_placeholder\' | translate }}" formControlName="wif"></ion-input>\n\n			</ion-item>\n\n\n\n			<button\n\n				class="login__import-button"\n\n				type="button"\n\n				[class.is-active]="!isWIFKey"\n\n				(click)="switchImportBox(fileInput)">\n\n				<span *ngIf="!isWIFKey">{{ importText }}</span>\n\n				<img src="assets/imgs/icon-login_file.svg" alt="" class="icon">\n\n			</button>\n\n\n\n			<input accept="application/json, text/plain, .json" type="file" id="fileInput" hidden #fileInput (change)="fileChange(fileInput.files[0])">\n\n\n\n			<button\n\n				class="login__wif-switcher"\n\n				type="button"\n\n				*ngIf="!isWIFKey"\n\n				(click)="switchWIFKeyBox()">\n\n				<img src="assets/imgs/icon-login_WIF.svg" alt="" class="icon">\n\n			</button>\n\n		</ion-col>\n\n	</ion-row>\n\n\n\n	<ion-row class="login__password-section" *ngIf="isOldWallet && !isWIFKey">\n\n		<ion-col>\n\n			<ion-item class="login__password-input">\n\n				<ion-input type="password" placeholder="{{ \'LOGIN.password\' | translate }}" formControlName="passphrase" required></ion-input>\n\n			</ion-item>\n\n		</ion-col>\n\n	</ion-row>\n\n\n\n	<ion-row>\n\n		<ion-col>\n\n			<button\n\n				ion-button round block outline\n\n				[disabled]="loginForm.valid"\n\n				class="login__button"\n\n				type="submit">{{ \'LOGIN.\' + tip | translate }}</button>\n\n		</ion-col>\n\n	</ion-row>\n\n</form>'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\components\login\login-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], LoginForm);
    return LoginForm;
}());

//# sourceMappingURL=login-form.js.map

/***/ }),

/***/ 1103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_form__ = __webpack_require__(1067);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_form_module__ = __webpack_require__(1105);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__login_form_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = asyncWIFValidator;
/* harmony export (immutable) */ __webpack_exports__["a"] = WIFValidator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils__ = __webpack_require__(102);



function asyncWIFValidator(wifCtrl) {
    return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].create(function (obs) {
        return wifCtrl
            .valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["debounceTime"])(250), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["map"])(function (value) { return value.trim(); }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["map"])(function (value) {
            if (value && Object(__WEBPACK_IMPORTED_MODULE_2__shared_utils__["h" /* isWIF */])(value)) {
                return null;
            }
            throw new Error('invalidWIF');
        }))
            .subscribe(function (_) { return obs.next(null); }, function (error) {
            obs.next((_a = {}, _a[error.message] = true, _a));
            obs.complete();
            var _a;
        });
    });
}
function WIFValidator(wifCtrl) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__shared_utils__["h" /* isWIF */])(wifCtrl.value) ? null : { invalidWIF: true };
}
//# sourceMappingURL=login.validator.js.map

/***/ }),

/***/ 1105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_form__ = __webpack_require__(1067);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var COMPONENTS = [__WEBPACK_IMPORTED_MODULE_3__login_form__["a" /* LoginForm */]];
// TODO(Amagi): Using IonicModule may be become a huge cost right there, Optimize later
var LoginFormModule = /** @class */ (function () {
    function LoginFormModule() {
    }
    LoginFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: COMPONENTS,
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: COMPONENTS
        })
    ], LoginFormModule);
    return LoginFormModule;
}());

//# sourceMappingURL=login-form.module.js.map

/***/ }),

/***/ 1652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportWallet; });
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


var ImportWallet = /** @class */ (function () {
    function ImportWallet(navCtrl) {
        this.navCtrl = navCtrl;
        this.prefix = 'PROFILE.MANAGE_WALLET.IMPORT_WALLET.';
    }
    ImportWallet.prototype.importWIF = function (wifValue) {
        console.log('via wif', wifValue);
    };
    ImportWallet.prototype.importNEP5 = function (file) {
        console.log('via file', file);
    };
    ImportWallet.prototype.importOldWallet = function (_a) {
        var oldWallet = _a.oldWallet, passphrase = _a.passphrase;
        console.log('via old w', oldWallet, passphrase);
    };
    ImportWallet = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-import-wallet',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\profile\manage-wallet\add-wallet\import-file\import-wallet.html"*/'<ion-header class="otcgo-header otcgo-header--bl">\n\n    <ion-navbar>\n\n        <ion-title>{{ prefix + \'title\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="login">\n\n\n\n    <div class="login__container">\n\n        <login-form\n\n            tip="import_wallet"\n\n            (onNEP5)="importNEP5($event)"\n\n            (onOldWallet)="importOldWallet($event)"\n\n            (onWIF)="importWIF($event)"></login-form>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\profile\manage-wallet\add-wallet\import-file\import-wallet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ImportWallet);
    return ImportWallet;
}());

//# sourceMappingURL=import-wallet.js.map

/***/ })

});
//# sourceMappingURL=8.js.map