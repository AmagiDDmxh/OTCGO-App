webpackJsonp([6],{

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PossessionsPageModule", function() { return PossessionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__possessions__ = __webpack_require__(1145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(1638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_possessions_possessions_info__ = __webpack_require__(1640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_possessions_possessions_list__ = __webpack_require__(1641);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__possessions__["a" /* PossessionsPage */],
    __WEBPACK_IMPORTED_MODULE_5__components_possessions_possessions_info__["a" /* PossessionsInfoComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components_possessions_possessions_list__["a" /* PossessionsListComponent */]
];
var PossessionsPageModule = /** @class */ (function () {
    function PossessionsPageModule() {
    }
    PossessionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__possessions__["a" /* PossessionsPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
            declarations: COMPONENTS
        })
    ], PossessionsPageModule);
    return PossessionsPageModule;
}());

//# sourceMappingURL=possessions.module.js.map

/***/ }),

/***/ 1081:
/***/ (function(module, exports) {

//# sourceMappingURL=typings.js.map

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

/***/ 1638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__address_collapse_address_collapse_pipe__ = __webpack_require__(1639);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PIPES = [
    __WEBPACK_IMPORTED_MODULE_1__address_collapse_address_collapse_pipe__["a" /* AddressCollapsePipe */]
];
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: PIPES,
            exports: PIPES
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 1639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressCollapsePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddressCollapsePipe = /** @class */ (function () {
    function AddressCollapsePipe() {
    }
    AddressCollapsePipe.prototype.transform = function (value) {
        var third = value.length / 3;
        var twoThirds = third * 2;
        return value.substr(0, third) + '...' + value.substr(twoThirds, third + 1);
    };
    AddressCollapsePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'addressCollapse' })
    ], AddressCollapsePipe);
    return AddressCollapsePipe;
}());

//# sourceMappingURL=address-collapse.pipe.js.map

/***/ }),

/***/ 1640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PossessionsInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_typings__ = __webpack_require__(1081);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_typings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__shared_typings__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PossessionsInfoComponent = /** @class */ (function () {
    function PossessionsInfoComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PossessionsInfoComponent.prototype.openQRCode = function () {
        this.navCtrl.push('payment-qrcode', { address: this.account && this.account.address });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_typings__["Account"])
    ], PossessionsInfoComponent.prototype, "account", void 0);
    PossessionsInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'possessions-info',
            template: "\n\t  <ion-card class=\"card-info\">\n\t\t  <div class=\"card-avatar\" (click)=\"openQRCode()\">\n\t\t\t  <img src=\"assets/imgs/icon-qrcode-avatar.svg\" alt=\"\">\n\t\t  </div>\n\t\t  <div class=\"card-title\">{{ account?.address | addressCollapse }}</div>\n\t\t\t<div class=\"bg\"></div>\n\t  </ion-card>\n\t\t<div class=\"card-round\"></div>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], PossessionsInfoComponent);
    return PossessionsInfoComponent;
}());

//# sourceMappingURL=possessions-info.js.map

/***/ }),

/***/ 1641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PossessionsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PossessionsListComponent = /** @class */ (function () {
    function PossessionsListComponent() {
        this.amount = 0.00;
        this.baseCurrency = 'cny';
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.displayZeroClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], PossessionsListComponent.prototype, "balances", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PossessionsListComponent.prototype, "displayZero", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PossessionsListComponent.prototype, "amount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PossessionsListComponent.prototype, "baseCurrency", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], PossessionsListComponent.prototype, "select", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], PossessionsListComponent.prototype, "displayZeroClick", void 0);
    PossessionsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'possessions-list',
            template: "\n\t  <ion-grid class=\"possessions__base-accumulator\">\n\t\t  <ion-row class=\"card-base\">\n\t\t\t  <ion-col col-9>\n\t\t\t\t  <ion-card class=\"possessions__total-balances\">\n\t\t\t\t\t  <ion-row>{{ 'POSSESSIONS.totalBalances' | translate }} {{ baseCurrency.toUpperCase() }}</ion-row>\n\t\t\t\t\t  <ion-row class=\"possessions__volume\">{{ amount | number:'1.1-4' }}</ion-row>\n\t\t\t\t  </ion-card>\n\t\t\t  </ion-col>\n\t\t\t  <ion-col col-3 class=\"possessions__hide-zero\" align-self-end>\n\t\t\t\t  <ion-card (click)=\"displayZeroClick.emit(!displayZero)\">\n\t\t\t\t\t  <img *ngIf=\"displayZero\" src=\"assets/imgs/icon-possessions_hide-zero.svg\" alt=\"\">\n\t\t\t\t\t\t<img *ngIf=\"!displayZero\" src=\"assets/imgs/icon-possessions_hide-zero-on.svg\" alt=\"\">\n\t\t\t\t\t\t<h5>{{ 'POSSESSIONS.displayZero' | translate }}</h5>\n\t\t\t\t  </ion-card>\n\t\t\t  </ion-col>\n\t\t  </ion-row>\n\t  </ion-grid>\n\t  \n\t  <ion-card class=\"card-list\"\n\t            *ngFor=\"let balance of balances\">\n\n\t\t  <ion-item (click)=\"select.emit(balance.symbol)\">\n\t\t\t  <div class=\"possessions__icon\"\n\t\t\t       item-start>\n\t\t\t\t  <img src=\"{{ 'assets/icon/' + balance?.symbol +'.png' }}\"\n\t\t\t\t       onerror=\"this.src='assets/icon/\u7533\u4E00\u5E01.png'\" />\n\t\t\t  </div>\n\n\t\t\t  <p class=\"possessions__symbol\">{{ balance?.symbol }}</p>\n\n\t\t\t  <ion-note item-end>\n\t\t\t\t  {{ balance?.amount | number:'1.1-2' }}\n\t\t\t  </ion-note>\n\t\t  </ion-item>\n\n\t  </ion-card>\n\t"
        })
    ], PossessionsListComponent);
    return PossessionsListComponent;
}());

//# sourceMappingURL=possessions-list.js.map

/***/ })

});
//# sourceMappingURL=6.js.map