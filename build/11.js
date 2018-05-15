webpackJsonp([11],{

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_profile_contacts__ = __webpack_require__(1645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts__ = __webpack_require__(1647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContactsPageModule = /** @class */ (function () {
    function ContactsPageModule() {
    }
    ContactsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_1__components_profile_contacts__["a" /* ContactsCards */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* ContactsPage */])
            ]
        })
    ], ContactsPageModule);
    return ContactsPageModule;
}());

//# sourceMappingURL=contacts.module.js.map

/***/ }),

/***/ 1645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contacts_cards__ = __webpack_require__(1646);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contacts_cards__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsCards; });
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

var ContactsCards = /** @class */ (function () {
    function ContactsCards() {
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ContactsCards.prototype, "contacts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ContactsCards.prototype, "isFromProfile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ContactsCards.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ContactsCards.prototype, "remove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ContactsCards.prototype, "select", void 0);
    ContactsCards = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'contacts-cards',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\components\profile\contacts\contacts-cards.html"*/'<ion-card *ngFor="let contact of contacts" (click)="isFromProfile || select.emit(contact.address)">\n\n	<ion-list>\n\n		<ion-item-sliding>\n\n			<ion-item>\n\n				<span class="description">{{ contact.name }} {{ contact.description && \'• \' + contact.description}}</span>\n\n				<p class="address">{{ contact.address }}</p>\n\n			</ion-item>\n\n			<ion-item-options side="right">\n\n				<button ion-button (click)="edit.emit(contact.address)">\n\n					<img src="assets/imgs/icon-contacts_edit.svg">\n\n				</button>\n\n				<button ion-button (click)="remove.emit(contact)">\n\n					<img src="assets/imgs/icon-contacts_remove.svg">\n\n				</button>\n\n			</ion-item-options>\n\n		</ion-item-sliding>\n\n	</ion-list>\n\n</ion-card>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\components\profile\contacts\contacts-cards.html"*/
        })
    ], ContactsCards);
    return ContactsCards;
}());

//# sourceMappingURL=contacts-cards.js.map

/***/ }),

/***/ 1647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ramda__ = __webpack_require__(57);
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







var ContactsPage = /** @class */ (function () {
    function ContactsPage(navCtrl, navParams, alertCtrl, ts, viewCtrl, store) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ts = ts;
        this.viewCtrl = viewCtrl;
        this.store = store;
        this.contacts = this.store.select(__WEBPACK_IMPORTED_MODULE_6__store_selectors__["d" /* ContactsSelectors */].getAll);
    }
    Object.defineProperty(ContactsPage.prototype, "isFromProfile", {
        get: function () {
            // If not define, set to true, else is false
            return typeof this.navParams.get('fromProfile') === 'undefined';
        },
        enumerable: true,
        configurable: true
    });
    ContactsPage.prototype.ngOnInit = function () {
    };
    ContactsPage.prototype.handleContactRemove = function (contact) {
        var _this = this;
        var prefix = 'PROFILE.CONTACTS.';
        var translations = ['remove_title', 'remove_agree', 'remove_disagree'];
        var withPrefixTranslations = Object(__WEBPACK_IMPORTED_MODULE_4_ramda__["o" /* map */])(Object(__WEBPACK_IMPORTED_MODULE_4_ramda__["c" /* concat */])(prefix), translations);
        var mapIndexed = Object(__WEBPACK_IMPORTED_MODULE_4_ramda__["a" /* addIndex */])(__WEBPACK_IMPORTED_MODULE_4_ramda__["o" /* map */]);
        this.ts.get(withPrefixTranslations).subscribe(function (trs) {
            var toObject = function (key, idx) {
                return (_a = {}, _a[translations[idx]] = trs[key], _a);
                var _a;
            };
            var agreeHandler = function () { return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_actions__["d" /* ContactsActions */].Remove(contact)); };
            var entities = Object(__WEBPACK_IMPORTED_MODULE_4_ramda__["b" /* compose */])(__WEBPACK_IMPORTED_MODULE_4_ramda__["r" /* mergeAll */], mapIndexed(toObject))(withPrefixTranslations);
            _this.createPrompt(entities, agreeHandler);
        });
    };
    ContactsPage.prototype.handleContactEdit = function (address) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_actions__["d" /* ContactsActions */].Select(address));
        this.navCtrl.push('EditContact');
    };
    ContactsPage.prototype.handleContactSelect = function (address) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_actions__["h" /* TransactionsActions */].SelectContact(address));
        this.viewCtrl.dismiss();
    };
    ContactsPage.prototype.createPrompt = function (entities, handler) {
        var removePrompt = this.alertCtrl.create({
            title: entities['remove_title'],
            buttons: [
                { text: entities['remove_disagree'] },
                { text: entities['remove_agree'], handler: handler }
            ]
        });
        removePrompt.present();
    };
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacts',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\profile\contacts\contacts.html"*/'<ion-header class="otcgo-header">\n\n	<ion-navbar>\n\n		<ion-title>{{ \'PROFILE.CONTACTS.title\' | translate }}</ion-title>\n\n		<ion-buttons end>\n\n			<button ion-button icon-only clear navPush="EditContact" [navParams]="{ addition: true }">\n\n				<ion-icon name="add"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<contacts-cards\n\n		[contacts]="contacts | async"\n\n		[isFromProfile]="isFromProfile"\n\n		(select)="handleContactSelect($event)"\n\n		(remove)="handleContactRemove($event)"\n\n		(edit)="handleContactEdit($event)"></contacts-cards>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\profile\contacts\contacts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ })

});
//# sourceMappingURL=11.js.map