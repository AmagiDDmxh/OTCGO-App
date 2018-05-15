webpackJsonp([10],{

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriesModule", function() { return HistoriesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__histories__ = __webpack_require__(1648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_profile_histories__ = __webpack_require__(1649);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HistoriesModule = /** @class */ (function () {
    function HistoriesModule() {
    }
    HistoriesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__histories__["a" /* Histories */]),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__histories__["a" /* Histories */],
                __WEBPACK_IMPORTED_MODULE_4__components_profile_histories__["a" /* HistoriesCards */]
            ]
        })
    ], HistoriesModule);
    return HistoriesModule;
}());

//# sourceMappingURL=histories.module.js.map

/***/ }),

/***/ 1648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Histories; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_selectors__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_actions__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Histories = /** @class */ (function () {
    function Histories(store, lp, navCtrl) {
        this.store = store;
        this.lp = lp;
        this.navCtrl = navCtrl;
        this.histories = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store_selectors__["h" /* TransactionHistorySelectors */].getEntities);
    }
    Histories.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_actions__["g" /* TransactionHistoryActions */].Load());
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__store_selectors__["h" /* TransactionHistorySelectors */].getLoading)
            .subscribe(function (bool) { return _this.lp.emit(bool); });
    };
    Histories.prototype.handleHistorySelect = function (txid) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_actions__["g" /* TransactionHistoryActions */].Select(txid));
        this.navCtrl.push('HistoryDetail');
    };
    Histories = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-histories',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\profile\histories\histories.html"*/'<ion-content parallax-header>\n\n	<ion-header class="otcgo-header">\n\n		<ion-navbar>\n\n			<ion-title>{{ \'PROFILE.HISTORIES.title\' | translate }}</ion-title>\n\n		</ion-navbar>\n\n	</ion-header>\n\n\n\n	<ion-list-header class="histories__header">\n\n		<ion-row>\n\n			<ion-col col-3 text-left>{{ \'PROFILE.HISTORIES.name\' | translate }}</ion-col>\n\n			<ion-col text-right>{{ \'PROFILE.HISTORIES.time_operation\' | translate }}</ion-col>\n\n			<ion-col col-4 text-right>{{ \'PROFILE.HISTORIES.amount\'| translate }}</ion-col>\n\n		</ion-row>\n\n	</ion-list-header>\n\n\n\n	<histories-cards\n\n		[histories]="histories | async"\n\n		(select)="handleHistorySelect($event)"\n\n	></histories-cards>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\profile\histories\histories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["e" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]])
    ], Histories);
    return Histories;
}());

//# sourceMappingURL=histories.js.map

/***/ }),

/***/ 1649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__histories_cards__ = __webpack_require__(1650);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__histories_cards__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriesCards; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoriesCards = /** @class */ (function () {
    function HistoriesCards() {
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.translationPrefix = 'POSSESSIONS.DETAILS.';
        this.splitBySpace = Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["A" /* split */])(' ');
        this.getDate = Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["b" /* compose */])(__WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* head */], this.splitBySpace);
        this.getTime = Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["b" /* compose */])(__WEBPACK_IMPORTED_MODULE_1_ramda__["m" /* last */], this.splitBySpace);
    }
    HistoriesCards.prototype.computeNumber = function (value) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["w" /* prop */])('length')(Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["u" /* nth */])(1)(Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["A" /* split */])('.', value))) > 4
            ? Number(value).toFixed(4)
            : value;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], HistoriesCards.prototype, "histories", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HistoriesCards.prototype, "select", void 0);
    HistoriesCards = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'histories-cards',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\components\profile\histories\histories-cards.html"*/'<ion-card *ngFor="let history of histories" (click)="select.emit(history.txid)">\n\n	<ion-list>\n\n		<button ion-item icon-right ion-row detail-none>\n\n			<ion-col item-start col-3>{{ history.symbol }}</ion-col>\n\n			<div text-right class="time-operation" ion-col>\n\n				<span>{{ getDate(history.time) }}</span>\n\n				<p>{{ getTime(history.time) }} {{ (translationPrefix + history.operation) | translate }}</p>\n\n			</div>\n\n			<ion-col item-end col-4 text-right>\n\n				{{ computeNumber(history.value) }}\n\n			</ion-col>\n\n		</button>\n\n	</ion-list>\n\n</ion-card>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\components\profile\histories\histories-cards.html"*/
        })
    ], HistoriesCards);
    return HistoriesCards;
}());

//# sourceMappingURL=histories-cards.js.map

/***/ })

});
//# sourceMappingURL=10.js.map