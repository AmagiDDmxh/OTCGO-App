webpackJsonp([9],{

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(1662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_profile_profile_round_menu__ = __webpack_require__(1663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_nav__ = __webpack_require__(1664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_feature_list__ = __webpack_require__(1665);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
    __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_nav__["a" /* ProfileNavComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_profile_profile_round_menu__["a" /* ProfileRoundMenuComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_feature_list__["a" /* ProfileFeatureListComponent */]
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: COMPONENTS,
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 1662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_selectors__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, store) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.avatar = 'assets/imgs/icon-avatar.svg';
        this.menus = [
            { icon: 'notification', page: 'Notification', enabled: false },
            { icon: 'setting', page: 'Settings' },
            { icon: 'helpcentre', page: 'Helpcentre', enabled: false }
        ];
        this.navs = [
            {
                icon: 'manage-wallet',
                page: 'ManageWallet',
                translation: 'manage_wallet',
                enabled: true,
            },
            {
                icon: 'contacts',
                page: 'Contacts',
                translation: 'contacts',
                enabled: true,
            },
            {
                icon: 'tx-history',
                page: 'Histories',
                translation: 'histories',
                enabled: true,
            }
        ];
        this.handleImageError = function () { return _this.avatar = ''; };
        store.select(__WEBPACK_IMPORTED_MODULE_3__store_selectors__["j" /* WalletSelectors */].getAccount).take(1).subscribe(function (account) { return _this.account = account; });
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\profile\profile.html"*/'<ion-content class="card-background-page">\n\n    <ion-card class="card-info">\n\n        <div class="card-avatar">\n\n	        <img *ngIf="avatar" [src]="avatar" (error)="handleImageError($event)">\n\n        </div>\n\n        <div class="card-title">{{ account.label }}</div>\n\n    </ion-card>\n\n\n\n	<profile-round-menu [menus]="menus"></profile-round-menu>\n\n\n\n	<profile-nav [navs]="navs"></profile-nav>\n\n\n\n    <profile-feature-list></profile-feature-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 1663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRoundMenuComponent; });
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


var ProfileRoundMenuComponent = /** @class */ (function () {
    function ProfileRoundMenuComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Object.defineProperty(ProfileRoundMenuComponent.prototype, "menus", {
        get: function () {
            return this._menus;
        },
        set: function (items) {
            this._menus = items.map(function (item) {
                if (typeof item.enabled === 'undefined')
                    item.enabled = true;
                return item;
            });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Array])
    ], ProfileRoundMenuComponent.prototype, "menus", null);
    ProfileRoundMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'profile-round-menu',
            template: "\n\t  <ion-card class=\"card-circle-menu\">\n\t\t  <div *ngFor=\"let menu of menus\"\n\t\t       class=\"card-circle-menu__icon\"\n\t\t       [class.unavailable]=\"!menu.enabled\"\n\t\t       (click)=\"menu.enabled && navCtrl.push(menu.page)\">\n\t\t\t  <img [src]=\"'assets/imgs/icon-profile_' + menu.icon + '.svg'\">\n\t\t  </div>\n\t  </ion-card>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ProfileRoundMenuComponent);
    return ProfileRoundMenuComponent;
}());

//# sourceMappingURL=profile-round-menu.js.map

/***/ }),

/***/ 1664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileNavComponent; });
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


var ProfileNavComponent = /** @class */ (function () {
    function ProfileNavComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfileNavComponent.prototype.handleNavClick = function (item) {
        item.enabled && this.navCtrl.push(item.page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProfileNavComponent.prototype, "navs", void 0);
    ProfileNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'profile-nav',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\components\profile\profile-nav.html"*/'<ion-card class="card-nav">\n\n	<div\n\n		class="nav-item"\n\n		*ngFor="let nav of navs"\n\n		(click)="handleNavClick(nav)">\n\n		<img class="card-img"\n\n		     [src]="\'assets/imgs/icon-profile_\' + nav?.icon + \'.svg\'">\n\n		<span class="card-title">\n\n			{{ \'PROFILE.\' + nav.translation | translate }}\n\n		</span>\n\n	</div>\n\n\n\n	<!--<div class="nav-item" (click)="navCtrl.push(\'Contacts\')">\n\n		<img class="card-img" src="assets/imgs/icon-profile_contacts.svg" alt="">\n\n		<span class="card-title">{{ \'PROFILE.contacts\' | translate }}</span>\n\n	</div>\n\n\n\n	<div class="nav-item">\n\n		<img class="card-img" src="assets/imgs/icon-profile_tx-history.svg" alt="">\n\n		<span class="card-title">{{ \'PROFILE.histories\' | translate }}</span>\n\n	</div>-->\n\n</ion-card>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\components\profile\profile-nav.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ProfileNavComponent);
    return ProfileNavComponent;
}());

//# sourceMappingURL=profile-nav.js.map

/***/ }),

/***/ 1665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileFeatureListComponent; });
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


var ProfileFeatureListComponent = /** @class */ (function () {
    function ProfileFeatureListComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfileFeatureListComponent.prototype.logout = function () {
        this.navCtrl.setRoot('Login');
    };
    ProfileFeatureListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'profile-feature-list',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\components\profile\profile-feature-list.html"*/'<ion-card class="card-features">\n	<ion-list>\n		<!--<button ion-item icon-right>\n			<span>最近一笔转入</span>\n			<div class="trade-info">\n				<p class="trade-date">2018/01/01</p>\n				<p class="trade-time">20:00 PM 转入</p>\n			</div>\n			<ion-icon md="ios-arrow-forward-outline" ios="none" item-end></ion-icon>\n		</button>-->\n		<button ion-item icon-right (click)="navCtrl.push(\'Claims\')">\n			{{ \'PROFILE.claims\' | translate }}\n			<ion-icon md="ios-arrow-forward-outline" ios="none" item-end></ion-icon>\n		</button>\n		<!-- <button ion-item icon-right>\n           智能合约\n           <ion-icon md="ios-arrow-forward-outline" ios="none" item-end></ion-icon>\n           </button> -->\n	</ion-list>\n</ion-card>\n<!--<ion-card>\n	<button ion-item (click)="logout()">\n		{{ \'PROFILE.logout\' | translate }}\n	</button>\n</ion-card>-->\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\components\profile\profile-feature-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ProfileFeatureListComponent);
    return ProfileFeatureListComponent;
}());

//# sourceMappingURL=profile-feature-list.js.map

/***/ })

});
//# sourceMappingURL=9.js.map