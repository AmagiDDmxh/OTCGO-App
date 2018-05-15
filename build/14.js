webpackJsonp([14],{

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(1667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 1667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage(trs) {
        this.trs = trs;
        this.selectedIndex = 0;
        this.balancesTitle = 'possessions';
        this.marketsTitle = 'markets';
        this.discoverTitle = 'discover';
        this.profileTitle = 'profile';
        this.tabs = [
            { root: 'Possessions', title: this.balancesTitle, icon: 'balances', enabled: true },
            { root: 'Markets', title: this.marketsTitle, icon: 'markets', enabled: true },
            { root: 'Discover', title: this.discoverTitle, icon: 'discover', enabled: false },
            { root: 'Profile', title: this.profileTitle, icon: 'profile', enabled: true }
        ];
    }
    TabsPage.prototype.selectTab = function () {
        var _this = this;
        var selectedTab = this.tabRef.getSelected();
        this.tabRef.getAllChildNavs().forEach(function (tab) {
            _this.trs.get('TABS').subscribe(function (TBAS) { return tab.tabTitle = (tab === selectedTab)
                ? ''
                : TBAS[_this[tab.tabIcon + 'Title']]; });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('ionTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\tabs\tabs.html"*/'<ion-tabs class="otcgo-tabs" #ionTabs [selectedIndex]="selectedIndex">\n\n    <ion-tab\n\n      *ngFor="let tab of tabs; index as i"\n\n      tabsHighlight\n\n      [root]="tab.root"\n\n      [tabTitle]="tab.title"\n\n      [tabIcon]="tab.icon"\n\n      [enabled]="tab.enabled"\n\n      (ionSelect)="selectTab($event)"\n\n    ></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=14.js.map