webpackJsonp([23],{

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimsPageModule", function() { return ClaimsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__claims__ = __webpack_require__(1642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ClaimsPageModule = /** @class */ (function () {
    function ClaimsPageModule() {
    }
    ClaimsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__claims__["a" /* ClaimsPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__claims__["a" /* ClaimsPage */]),
            ]
        })
    ], ClaimsPageModule);
    return ClaimsPageModule;
}());

//# sourceMappingURL=claims.module.js.map

/***/ }),

/***/ 1642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__claims_provider__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_actions__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_selectors__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__libs_neon__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__libs_neon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__libs_neon__);
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








var decrypt = __WEBPACK_IMPORTED_MODULE_7__libs_neon__["wallet"].decrypt, getPrivateKeyFromWIF = __WEBPACK_IMPORTED_MODULE_7__libs_neon__["wallet"].getPrivateKeyFromWIF;
var ClaimsPage = /** @class */ (function () {
    function ClaimsPage(claimsProvider, accountProvider, alertCtrl, store, loadingCtrl) {
        this.claimsProvider = claimsProvider;
        this.accountProvider = accountProvider;
        this.alertCtrl = alertCtrl;
        this.store = store;
        this.loadingCtrl = loadingCtrl;
        this.account = this.accountProvider.defaultAccount;
    }
    ClaimsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_actions__["c" /* ClaimsActions */].Load());
        this.store.select(__WEBPACK_IMPORTED_MODULE_6__store_selectors__["c" /* ClaimsSelectors */].getEntities).subscribe(function (claims) {
            if (claims)
                _this.availableGas = (Number(claims.available) + Number(claims.unavailable)).toFixed(8);
        });
    };
    ClaimsPage.prototype.doClaim = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var prompt = this.alertCtrl.create({
            title: '输入密码',
            message: '输入您的密码！',
            inputs: [{ name: 'passphrase', placeholder: '密码', type: 'password' }],
            buttons: [
                { text: '取消' },
                {
                    text: '确认',
                    handler: function (_a) {
                        var passphrase = _a.passphrase;
                        if (passphrase === '' || passphrase.length < 4)
                            return false;
                        loading.present().then(function () { return __awaiter(_this, void 0, void 0, function () {
                            var pr, result, e_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 4, , 7]);
                                        pr = getPrivateKeyFromWIF(decrypt(this.account.encrypted, passphrase));
                                        return [4 /*yield*/, loading.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, prompt.dismiss()];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.claimsProvider.doClaims(pr)];
                                    case 3:
                                        result = _a.sent();
                                        result && this.showPrompt('提取成功！');
                                        return [3 /*break*/, 7];
                                    case 4:
                                        e_1 = _a.sent();
                                        return [4 /*yield*/, loading.dismiss()];
                                    case 5:
                                        _a.sent();
                                        return [4 /*yield*/, prompt.dismiss()];
                                    case 6:
                                        _a.sent();
                                        this.showPrompt(e_1.message || e_1);
                                        console.log(e_1);
                                        return [3 /*break*/, 7];
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                }
            ]
        });
        prompt.present();
    };
    ClaimsPage.prototype.showPrompt = function (msg) {
        var message = msg.message || msg;
        this.alertCtrl.create({ message: message }).present();
    };
    ClaimsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-claims',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\profile\claims\claims.html"*/'<ion-header class="otcgo-header">\n\n	<ion-navbar>\n\n		<ion-title>\n\n			{{ \'PROFILE.CLAIMS.title\' | translate}}\n\n		</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="claims">\n\n	<div class="claims__background">\n\n		<!--<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="1.12015in" height="1.18516in" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 0.111047 0.117492">\n\n			<defs>\n\n				<style type="text/css">\n\n\n\n					.fil2 {\n\n						fill: white;\n\n						filter: url(#dropshadow);\n\n					}\n\n\n\n					.fil0 {\n\n						fill: #1F1A17;\n\n						fill-rule: nonzero;\n\n						fill-opacity: 0.101961;\n\n						filter: url(#dropshadow);\n\n					}\n\n\n\n					.fil1 {\n\n						fill: url(#id0);\n\n						fill-rule: nonzero;\n\n						filter: url(#dropshadow);\n\n					}\n\n\n\n				</style>\n\n				<linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="-3.90297e-007" y1="0.0559886" x2="0.109927" y2="0.0559886">\n\n					<stop offset="0" style="stop-color:#F8C300"/>\n\n					<stop offset="1" style="stop-color:#E77817"/>\n\n				</linearGradient>\n\n				<filter id="dropshadow" height="130%">\n\n					<feGaussianBlur in="SourceAlpha" stdDeviation="3"/> &lt;!&ndash; stdDeviation is how much to blur &ndash;&gt;\n\n					<feOffset dx="2" dy="2" result="offsetblur"/> &lt;!&ndash; how much to offset &ndash;&gt;\n\n					<feComponentTransfer>\n\n						<feFuncA type="linear" slope="0.5"/> &lt;!&ndash; slope is the opacity of the shadow &ndash;&gt;\n\n					</feComponentTransfer>\n\n					<feMerge>\n\n						<feMergeNode/> &lt;!&ndash; this contains the offset blurred image &ndash;&gt;\n\n						<feMergeNode in="SourceGraphic"/> &lt;!&ndash; this contains the element that the filter is applied to &ndash;&gt;\n\n					</feMerge>\n\n				</filter>\n\n			</defs>\n\n\n\n			<g id="loop-group">\n\n				<path filter="url(#dropshadow)" class="fil0" d="M0.0560799 0.0010218c0.0151759,0 0.0289187,0.00615382 0.0388658,0.0161013 0.00994712,0.00994712 0.0161013,0.0236891 0.0161013,0.038865 0,0.0151759 -0.00615421,0.0289187 -0.0161013,0.0388658 -0.00994712,0.00994712 -0.0236899,0.0161013 -0.0388658,0.0161013 -0.0151759,0 -0.0289183,-0.00615421 -0.0388654,-0.0161013 -0.00994712,-0.00994712 -0.0161013,-0.0236899 -0.0161013,-0.0388658 0,-0.0151759 0.00615421,-0.0289179 0.0161013,-0.038865 0.00994712,-0.00994751 0.0236895,-0.0161013 0.0388654,-0.0161013zm0.0330898 0.0218769c-0.00846867,-0.00846867 -0.0201694,-0.0137084 -0.0330898,-0.0137084 -0.0129204,0 -0.0246204,0.00523974 -0.0330894,0.0137084 -0.00846906,0.00846906 -0.0137084,0.020169 -0.0137084,0.0330894 0,0.0129208 0.00523935,0.0246211 0.0137084,0.0330898 0.00846906,0.00846906 0.020169,0.0137084 0.0330894,0.0137084 0.0129204,0 0.0246211,-0.00523935 0.0330898,-0.0137084 0.00846906,-0.00846867 0.0137084,-0.020169 0.0137084,-0.0330898 0,-0.0129204 -0.00523935,-0.0246204 -0.0137084,-0.0330894z"/>\n\n\n\n				<path class="fil1" d="M0.0559882 0.101765c0.0028199,0 0.00510626,0.00228636 0.00510626,0.00510626 0,0.0028199 -0.00228636,0.00510626 -0.00510626,0.00510626 -0.0154577,0 -0.029455,-0.00626857 -0.0395875,-0.0164007 -0.0101325,-0.0101325 -0.0164011,-0.0241305 -0.0164011,-0.0395883 0,-0.0154577 0.00626857,-0.029455 0.0164011,-0.0395875 0.0101325,-0.0101325 0.0241297,-0.0164011 0.0395875,-0.0164011 0.01215,0 0.0234022,0.00387682 0.0325848,0.0104608 0.00941866,0.00675293 0.0166575,0.0163667 0.0204512,0.0275749 0.000903148,0.00266573 -0.000525731,0.0055594 -0.00319146,0.00646254 -0.00266534,0.000903148 -0.0055594,-0.000526121 -0.00646254,-0.00319146 -0.00309818,-0.00915404 -0.00902446,-0.0170166 -0.016741,-0.022549 -0.00750113,-0.0053783 -0.0167004,-0.00854517 -0.0266409,-0.00854517 -0.0126386,0 -0.0240833,0.00512539 -0.032367,0.0134091 -0.00828367,0.00828367 -0.0134091,0.0197284 -0.0134091,0.032367 0,0.012639 0.00512539,0.0240841 0.0134091,0.0323678 0.00828367,0.00828367 0.0197284,0.0134087 0.032367,0.0134087z"/>\n\n				<path class="fil2" d="M0.0560803 0.0975345c0.00551022,0 0.00997873,0.00446851 0.00997873,0.00997834 0,0.00551022 -0.00446851,0.00997873 -0.00997873,0.00997873 -0.00550983,0 -0.00997834,-0.00446851 -0.00997834,-0.00997873 0,-0.00550983 0.00446851,-0.00997834 0.00997834,-0.00997834z"/>\n\n			</g>\n\n\n\n		</svg>-->\n\n\n\n		<div class="claims__svg-text"\n\n		     text-center>\n\n			<p>{{ \'PROFILE.CLAIMS.available\' | translate }}</p>\n\n			<p class="title">{{ availableGas }} GAS</p>\n\n		</div>\n\n\n\n\n\n		<button ion-button round full clear class="claims__button otcgo-button" (click)="doClaim()">\n\n			{{ \'PROFILE.CLAIMS.do_claims\' | translate }}\n\n		</button>\n\n	</div>\n\n\n\n	<!--<div class="claims__history">\n\n		<ion-list-header>\n\n			<ion-row>\n\n				<ion-col col-3 text-left>名称</ion-col>\n\n				<ion-col text-right>时间</ion-col>\n\n				<ion-col col-4 text-right>数量</ion-col>\n\n			</ion-row>\n\n		</ion-list-header>\n\n\n\n		<ion-list class="">\n\n\n\n		</ion-list>\n\n	</div>-->\n\n</ion-content>'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\profile\claims\claims.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__claims_provider__["a" /* ClaimsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], ClaimsPage);
    return ClaimsPage;
}());

//# sourceMappingURL=claims.js.map

/***/ })

});
//# sourceMappingURL=23.js.map