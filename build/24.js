webpackJsonp([24],{

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketsPageModule", function() { return MarketsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__markets__ = __webpack_require__(1592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__markets__["a" /* MarketsPage */]
];
var MarketsPageModule = /** @class */ (function () {
    function MarketsPageModule() {
    }
    MarketsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: COMPONENTS,
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__markets__["a" /* MarketsPage */]),
            ],
            exports: COMPONENTS
        })
    ], MarketsPageModule);
    return MarketsPageModule;
}());

//# sourceMappingURL=markets.module.js.map

/***/ }),

/***/ 1592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_actions__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_selectors__ = __webpack_require__(101);
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






var MarketsPage = /** @class */ (function () {
    function MarketsPage(navCtrl, navParams, priceProvider, np, lp, store) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.priceProvider = priceProvider;
        this.np = np;
        this.lp = lp;
        this.store = store;
    }
    MarketsPage.prototype.ngOnInit = function () {
        this.initData();
    };
    MarketsPage.prototype.initData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.store.select(__WEBPACK_IMPORTED_MODULE_5__store_selectors__["e" /* MarketsSelectors */].getError).subscribe(function (error) { return _this.np.emit({ message: error }); });
                this.store.select(__WEBPACK_IMPORTED_MODULE_5__store_selectors__["e" /* MarketsSelectors */].getLoading).subscribe(function (loading) { return _this.lp.emit(loading); });
                this.store.select(__WEBPACK_IMPORTED_MODULE_5__store_selectors__["e" /* MarketsSelectors */].getEntities).subscribe(function (markets) { return _this.coins = markets; });
                this.store.select(__WEBPACK_IMPORTED_MODULE_5__store_selectors__["g" /* SettingsSelectors */].getCurrency).subscribe(function (currency) { return _this.oCurrency = currency; });
                this.store.select(__WEBPACK_IMPORTED_MODULE_5__store_selectors__["f" /* PricesSelectors */].getEntities).subscribe(function (prices) { return _this.GASPrice = prices['GAS'] || 1; });
                return [2 /*return*/];
            });
        });
    };
    MarketsPage.prototype.doRefresh = function (refresher) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store_actions__["e" /* MarketsActions */].Load());
        /*this.priceProvider.getExchangeRates()
                .then(res => this.exchangeRates = res['rates'])
                .catch(error => this.np.emit({ message: error }))*/
        this.store.select(__WEBPACK_IMPORTED_MODULE_5__store_selectors__["e" /* MarketsSelectors */].getLoading).subscribe(function (loading) { return !loading && refresher.complete(); });
    };
    MarketsPage.prototype.handleCoinClick = function (coin) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store_actions__["e" /* MarketsActions */].Select(coin.symbol));
        this.navCtrl.push('MarketDetail', { coin: coin, perGas: this.GASPrice / coin.currentPrice });
    };
    MarketsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-markets',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\markets\markets.html"*/'<ion-header class="otcgo-header">\n\n	<ion-navbar>\n\n		<ion-title>{{ \'MARKETS.title\' | translate }}</ion-title>\n\n\n\n		<!--<ion-buttons end>\n\n			<button ion-button round icon-only> <ion-icon name="add"></ion-icon> </button>\n\n		</ion-buttons>-->\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list-header class="markets__header">\n\n		<ion-row>\n\n			<ion-col col-3 text-left>{{ \'MARKETS.name\' | translate }}</ion-col>\n\n			<ion-col text-right>{{ \'MARKETS.price\' | translate }}</ion-col>\n\n			<ion-col col-4 text-right>{{ \'MARKETS.change\'| translate }}</ion-col>\n\n		</ion-row>\n\n	</ion-list-header>\n\n\n\n	<ion-refresher (ionRefresh)="doRefresh($event)">\n\n		<ion-refresher-content></ion-refresher-content>\n\n	</ion-refresher>\n\n\n\n\n\n	<ion-card class="markets__card" *ngFor="let coin of coins" (click)="handleCoinClick(coin)">\n\n		<ion-list>\n\n			<button ion-row ion-item detail-none>\n\n				<ion-col col-3 item-start>\n\n					<p class="markets__symbol">{{ coin.symbol }}</p>\n\n				</ion-col>\n\n\n\n				<ion-label text-right>\n\n					<p class="markets__current-price">{{ coin.currentPrice | currency:oCurrency.toUpperCase():\'symbol-narrow\':\'1.1-5\'\n\n					                                  }}</p>\n\n					{{ (GASPrice / coin.currentPrice) | number:\'1.1-4\' }}<span class="markets__conversion-rate">/GAS</span>\n\n				</ion-label>\n\n\n\n				<ion-col col-4 item-end text-right>\n\n					<p [ngClass]="{\n\n			          \'markets__green\': coin.percent_change_24h && !coin.percent_change_24h.includes(\'-\'),\n\n			          \'markets__red\': coin.percent_change_24h && coin.percent_change_24h.includes(\'-\')\n\n			        }" class="markets__fall-or">\n\n						{{ coin.percent_change_24h || \'None\' }}{{ coin.percent_change_24h ? \'%\' : \'\' }}\n\n					</p>\n\n				</ion-col>\n\n			</button>\n\n		</ion-list>\n\n\n\n	</ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\markets\markets.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["g" /* PriceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["f" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["e" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], MarketsPage);
    return MarketsPage;
}());

//# sourceMappingURL=markets.js.map

/***/ })

});
//# sourceMappingURL=24.js.map