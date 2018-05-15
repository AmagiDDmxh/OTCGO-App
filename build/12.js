webpackJsonp([12],{

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function() { return OnboardingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__onboarding__ = __webpack_require__(1593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OnboardingPageModule = /** @class */ (function () {
    function OnboardingPageModule() {
    }
    OnboardingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__onboarding__["a" /* OnboardingPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__onboarding__["a" /* OnboardingPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_1__onboarding__["a" /* OnboardingPage */]]
        })
    ], OnboardingPageModule);
    return OnboardingPageModule;
}());

//# sourceMappingURL=onboarding.module.js.map

/***/ }),

/***/ 1145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PossessionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_actions__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_selectors__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PossessionsPage = /** @class */ (function () {
    function PossessionsPage(navCtrl, notificationProvider, lp, store) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.notificationProvider = notificationProvider;
        this.lp = lp;
        this.store = store;
        this.account = this.store.select(__WEBPACK_IMPORTED_MODULE_6__store_selectors__["j" /* WalletSelectors */].getAccount);
        this.amount = this.store.select(__WEBPACK_IMPORTED_MODULE_6__store_selectors__["f" /* PricesSelectors */].getDefaultAccountAmount);
        this.baseCurrency = this.store.select(__WEBPACK_IMPORTED_MODULE_6__store_selectors__["g" /* SettingsSelectors */].getCurrency);
        this._displayZero = true;
        this.ionViewCanEnter = function () { return _this.exits; };
    }
    Object.defineProperty(PossessionsPage.prototype, "displayZero", {
        get: function () { return this._displayZero; },
        set: function (val) {
            this.updateBalances(val);
            this._displayZero = val;
        },
        enumerable: true,
        configurable: true
    });
    PossessionsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.updateBalances();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_actions__["e" /* MarketsActions */].Load());
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_actions__["b" /* BalancesActions */].Load());
        this.store.select(__WEBPACK_IMPORTED_MODULE_6__store_selectors__["b" /* BalancesSelectors */].getLoading).subscribe(function (loading) { return _this.lp.emit(loading); });
        this.store.select(__WEBPACK_IMPORTED_MODULE_6__store_selectors__["b" /* BalancesSelectors */].getError).subscribe(function (error) { return error && _this.notificationProvider.emit({ message: error }); });
        this.store.select(__WEBPACK_IMPORTED_MODULE_6__store_selectors__["j" /* WalletSelectors */].getExits).subscribe(function (exits) { return _this.exits = exits; });
    };
    PossessionsPage.prototype.updateBalances = function (displayZero) {
        if (displayZero === void 0) { displayZero = true; }
        this.balances = displayZero
            ? this.store.select(__WEBPACK_IMPORTED_MODULE_6__store_selectors__["b" /* BalancesSelectors */].getDefaultEntities)
            : this.store.select(__WEBPACK_IMPORTED_MODULE_6__store_selectors__["b" /* BalancesSelectors */].getDefaultNonZeroEntities);
    };
    PossessionsPage.prototype.doRefresh = function (refresher) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_actions__["b" /* BalancesActions */].Load());
        this.store
            .select(__WEBPACK_IMPORTED_MODULE_6__store_selectors__["b" /* BalancesSelectors */].getLoading)
            .subscribe(function (loading) { return !loading && refresher.complete(); });
    };
    PossessionsPage.prototype.handleBalanceSelect = function (symbol) {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_actions__["b" /* BalancesActions */].Select(symbol));
        this.selectedBalanceSubscriber = this.store.select(__WEBPACK_IMPORTED_MODULE_6__store_selectors__["b" /* BalancesSelectors */].getSelectedBalance)
            .take(1)
            .subscribe(function (selectedBalance) {
            selectedBalance && _this.navCtrl.push('PossessionDetail');
        });
    };
    PossessionsPage.prototype.handleDisplayZeroClick = function (bool) {
        this.displayZero = bool;
    };
    PossessionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-possessions',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\possessions\possessions.html"*/'<ion-content class="possessions-content">\n\n\n\n	<ion-refresher (ionRefresh)="doRefresh($event)">\n\n		<ion-refresher-content></ion-refresher-content>\n\n	</ion-refresher>\n\n\n\n	<possessions-info [account]="account | async"></possessions-info>\n\n\n\n	<possessions-list [balances]="balances | async"\n\n	                  [amount]="amount | async"\n\n	                  [baseCurrency]="baseCurrency | async"\n\n	                  [displayZero]="displayZero"\n\n	                  (select)="handleBalanceSelect($event)"\n\n	                  (displayZeroClick)="handleDisplayZeroClick($event)">\n\n	</possessions-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\possessions\possessions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["f" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["e" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], PossessionsPage);
    return PossessionsPage;
}());

//# sourceMappingURL=possessions.js.map

/***/ }),

/***/ 1593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__possessions_possessions__ = __webpack_require__(1145);
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




var OnboardingPage = /** @class */ (function () {
    function OnboardingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.skipMsg = 'Skip';
        this.state = 'x';
    }
    OnboardingPage.prototype.slideMoved = function () {
        this.state =
            this.slides.getActiveIndex() >= this.slides.getPreviousIndex()
                ? 'rightSwipe'
                : 'leftSwipe';
    };
    OnboardingPage.prototype.animationDone = function () {
        this.state = 'x';
    };
    OnboardingPage.prototype.skip = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__possessions_possessions__["a" /* PossessionsPage */])];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__possessions_possessions__["a" /* PossessionsPage */])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OnboardingPage.prototype.slideChanged = function () {
        if (this.slides.isEnd()) {
            this.skipMsg = 'Alright! I got it';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], OnboardingPage.prototype, "slides", void 0);
    OnboardingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-onboarding',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\onboarding\onboarding.html"*/'<ion-content>\n\n  <ion-slides pager (ionSlideDidChange)="slideChanged()" (ionSlideDrag)="slideMoved()">\n\n    <ion-slide>\n\n      <div class="diag" style="background: url(\'assets/imgs/whitebg.svg\') no-repeat;">\n\n        <ion-icon name="analytics"></ion-icon>\n\n      </div>\n\n      <div [@bounce]="state">\n\n        <h2>track your routine</h2>\n\n        <p>whether it\'s sets, reps, weight used, you can track it all with our intuitive interface.</p>\n\n      </div>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <div class="diag" style="background: url(\'assets/imgs/whitebg.svg\') no-repeat">\n\n        <ion-icon ios="ios-trophy" md="md-trophy" color="primary"></ion-icon>\n\n      </div>\n\n      <div [@bounce]="state">\n\n        <h2>set personal goals</h2>\n\n        <p>we\'re all in the gym for a reason: goals. set goals for diet and fitness.</p>\n\n      </div>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <div class="diag" style="background: url(\'assets/imgs/whitebg.svg\') no-repeat">\n\n        <ion-icon ios="ios-chatboxes" md="md-chatboxes" color="primary"></ion-icon>\n\n      </div>\n\n      <div [@bounce]="state">\n\n        <h2>chat with others</h2>\n\n        <p>inspire and help each other reach fitness and diet goals.</p>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <button id="skip" (click)="skip()">{{ skipMsg }}</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\onboarding\onboarding.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('bounce', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({
                        transform: 'translateX(0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('* => rightSwipe', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('700ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(-65px)', offset: 0.3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(0)', offset: 1 })
                    ]))),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('* => leftSwipe', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('700ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(65px)', offset: 0.3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(0)', offset: 1 })
                    ])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], OnboardingPage);
    return OnboardingPage;
}());

//# sourceMappingURL=onboarding.js.map

/***/ })

});
//# sourceMappingURL=12.js.map