webpackJsonp([20],{

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailModule", function() { return HistoryDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_detail__ = __webpack_require__(1657);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HistoryDetailModule = /** @class */ (function () {
    function HistoryDetailModule() {
    }
    HistoryDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__history_detail__["a" /* HistoryDetail */]),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__history_detail__["a" /* HistoryDetail */],
            ]
        })
    ], HistoryDetailModule);
    return HistoryDetailModule;
}());

//# sourceMappingURL=history-detail.module.js.map

/***/ }),

/***/ 1657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_actions__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_selectors__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ramda__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HistoryDetail = /** @class */ (function () {
    function HistoryDetail(store, lp) {
        this.store = store;
        this.lp = lp;
        this.translationPrefix = 'PROFILE.HISTORIES.DETAIL.';
        this.browserLink = 'http://state.otcgo.cn/traninfo.html?id=';
    }
    Object.defineProperty(HistoryDetail.prototype, "details", {
        get: function () {
            var partialDetail = Object(__WEBPACK_IMPORTED_MODULE_5_ramda__["v" /* pick */])(['blocktime', 'vout'], this.historyDetail || {});
            return Object(__WEBPACK_IMPORTED_MODULE_5_ramda__["q" /* merge */])(partialDetail, this.selectedHistory);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HistoryDetail.prototype, "blockHeight", {
        get: function () { return this.details.blocktime; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HistoryDetail.prototype, "operation", {
        get: function () { return this.details.operation; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HistoryDetail.prototype, "txid", {
        get: function () { return this.details.txid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HistoryDetail.prototype, "amount", {
        get: function () { return this.details.value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HistoryDetail.prototype, "symbol", {
        get: function () { return this.details.symbol; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HistoryDetail.prototype, "time", {
        get: function () { return this.details.time; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HistoryDetail.prototype, "address", {
        get: function () { return this.details.vout && this.details.vout[0].address; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HistoryDetail.prototype, "status", {
        get: function () { return this.details.blocktime ? 'success' : 'pending'; },
        enumerable: true,
        configurable: true
    });
    HistoryDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_actions__["g" /* TransactionHistoryActions */].LoadDetail());
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__store_selectors__["h" /* TransactionHistorySelectors */].getSelectedEntities).subscribe(function (selectedHistory) { return _this.selectedHistory = selectedHistory; });
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__store_selectors__["h" /* TransactionHistorySelectors */].getDetail).subscribe(function (historyDetail) { return _this.historyDetail = historyDetail; });
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__store_selectors__["h" /* TransactionHistorySelectors */].getLoading).subscribe(function (bool) { return _this.lp.emit(bool); });
    };
    HistoryDetail.prototype.handleOpenBrowserClick = function () {
    };
    HistoryDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history-detail',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\profile\histories\history-detail\history-detail.html"*/'<ion-header class="otcgo-header">\n\n	<ion-navbar></ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<div class="history-detail__avatar">\n\n		<img src="{{ \'assets/icon/\' + symbol +\'.png\' }}"\n\n		     onerror="this.src=\'assets/icon/申一币.png\'" />\n\n	</div>\n\n	<div class="history-detail__symbol">\n\n		{{ symbol }}\n\n	</div>\n\n	<div class="history-detail__date-op">\n\n		{{ time }} {{ translationPrefix + \'status_\' + status | translate }}\n\n	</div>\n\n	<ion-grid>\n\n		<ion-row>\n\n			<ion-col>{{ translationPrefix + \'operation\' | translate }}</ion-col>\n\n			<ion-col text-right class="highlight">{{ translationPrefix + \'operation_\' + operation | translate }}</ion-col>\n\n		</ion-row>\n\n\n\n		<ion-row>\n\n			<ion-col>{{ translationPrefix + \'amount\' | translate }}</ion-col>\n\n			<ion-col text-right><span class="highlight">{{ amount }}</span>{{ \' \' + symbol }}</ion-col>\n\n		</ion-row>\n\n\n\n		<ion-row>\n\n			<ion-col>{{ translationPrefix + \'address\' | translate }}</ion-col>\n\n			<ion-col text-right class="extract-text">{{ address }}</ion-col>\n\n		</ion-row>\n\n		<div class="bar"></div>\n\n		<ion-row>\n\n			<ion-col col-2>{{ translationPrefix + \'txid\' | translate }}</ion-col>\n\n			<ion-col text-right class="extract-text" col-10>{{ txid }}</ion-col>\n\n		</ion-row>\n\n\n\n		<ion-row>\n\n			<ion-col>{{ translationPrefix + \'block_height\' | translate }}</ion-col>\n\n			<ion-col text-right class="highlight">{{ blockHeight }}</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n\n\n	<a\n\n		ion-button round full class="otcgo-button--colour history-detail__open-in-browser"\n\n		target="_blank"\n\n		[href]="browserLink + txid">{{ translationPrefix + \'open_in_browser\' | translate }}</a>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\profile\histories\history-detail\history-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["e" /* LoadingProvider */]])
    ], HistoryDetail);
    return HistoryDetail;
}());

//# sourceMappingURL=history-detail.js.map

/***/ })

});
//# sourceMappingURL=20.js.map