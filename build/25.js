webpackJsonp([25],{

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageModule", function() { return DiscoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discover__ = __webpack_require__(1255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DiscoverPageModule = /** @class */ (function () {
    function DiscoverPageModule() {
    }
    DiscoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__discover__["a" /* DiscoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__discover__["a" /* DiscoverPage */]),
            ],
        })
    ], DiscoverPageModule);
    return DiscoverPageModule;
}());

//# sourceMappingURL=discover.module.js.map

/***/ }),

/***/ 1255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverPage; });
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


var DiscoverPage = /** @class */ (function () {
    function DiscoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DiscoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-discover',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\discover\discover.html"*/'<!--\n\n  Generated template for the DiscoverPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>discover</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content class="discover-content">\n\n    <ion-card class="card-info">\n\n        <div class="card-title">发现</div>\n\n        <div class="card-subtitle">探索区块链的新鲜事</div>\n\n    </ion-card>\n\n\n\n    <ion-card class="card-list">\n\n        <ion-list>\n\n            <ion-item class="item-blockchain">\n\n                <div class="blockchain-text">区块</div>\n\n                <ion-icon name="search" item-end>\n\n                </ion-icon>\n\n            </ion-item>\n\n            <ion-item class="item-blue">\n\n                <ion-icon name=\'ios-ionic-outline\' item-start></ion-icon>\n\n                <div class="item-text">应用</div>\n\n                <ion-icon name="ios-arrow-dropright-outline" item-end>\n\n                </ion-icon>\n\n            </ion-item>\n\n            <ion-item class="item-blue">\n\n                <ion-icon name=\'ios-ionic-outline\' item-start></ion-icon>\n\n                <div class="item-text">资讯</div>\n\n                <ion-icon name="ios-arrow-dropright-outline" item-end>\n\n                </ion-icon>\n\n            </ion-item>\n\n            <ion-item class="item-blue">\n\n                <ion-icon name=\'ios-ionic-outline\' item-start></ion-icon>\n\n                <div class="item-text">聊天室</div>\n\n                <ion-icon name="ios-arrow-dropright-outline" item-end>\n\n                </ion-icon>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\discover\discover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DiscoverPage);
    return DiscoverPage;
}());

//# sourceMappingURL=discover.js.map

/***/ })

});
//# sourceMappingURL=25.js.map