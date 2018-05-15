webpackJsonp([22],{

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContactModule", function() { return EditContactModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_contact__ = __webpack_require__(1643);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditContactModule = /** @class */ (function () {
    function EditContactModule() {
    }
    EditContactModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__edit_contact__["a" /* EditContact */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__edit_contact__["a" /* EditContact */]],
        })
    ], EditContactModule);
    return EditContactModule;
}());

//# sourceMappingURL=edit-contact.module.js.map

/***/ }),

/***/ 1643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditContact; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utils__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_actions__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_selectors__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditContact = /** @class */ (function () {
    function EditContact(store, navParams, np, ts) {
        this.store = store;
        this.navParams = navParams;
        this.np = np;
        this.ts = ts;
        this.translationPrefix = 'PROFILE.CONTACTS.EDIT.';
        this.counter = 0;
        this.editMode = false;
    }
    Object.defineProperty(EditContact.prototype, "isAddition", {
        get: function () { return this.navParams.get('addition'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditContact.prototype, "avatar", {
        get: function () { return this.contact && this.contact.avatar; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditContact.prototype, "address", {
        get: function () {
            return this.addressHasChanged ? this._address : this.contact && this.contact.address;
        },
        set: function (val) { this._address = val; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditContact.prototype, "description", {
        get: function () {
            return this.descriptionHasChanged ? this._description : this.contact && this.contact.description;
        },
        set: function (val) { this._description = val; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditContact.prototype, "name", {
        get: function () {
            return this.nameHasChanged ? this._name : this.contact && this.contact.name;
        },
        set: function (val) { this._name = val; },
        enumerable: true,
        configurable: true
    });
    EditContact.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_7__store_selectors__["d" /* ContactsSelectors */].getSelectedContact).subscribe(function (selectedContact) { return _this.contact = selectedContact || {}; });
        this.store.select(__WEBPACK_IMPORTED_MODULE_7__store_selectors__["d" /* ContactsSelectors */].getEntities).subscribe(function (entities) { return _this.contactsEntities = entities || {}; });
    };
    EditContact.prototype.ngOnDestroy = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_actions__["d" /* ContactsActions */].CleanSelect());
    };
    EditContact.prototype.handleUpdateContact = function () {
        var _this = this;
        var _a = this, address = _a.address, name = _a.name, description = _a.description, avatar = _a.avatar;
        if (!Object(__WEBPACK_IMPORTED_MODULE_5__shared_utils__["e" /* isAddress */])(address))
            return this.notifyMsg('address_error');
        if (!name)
            return this.notifyMsg('name_error');
        if (name.trim().length > 8)
            return this.notifyMsg('name_length_error');
        var changes = { address: address, name: name.trim(), description: description, avatar: avatar };
        var isChanged = this.isAddition && address in this.contactsEntities;
        if (isChanged && this.counter === 0) {
            this.counter++;
            this.notifyMsg('update_confirm');
            return setTimeout(function () { return _this.counter = 0; }, 500);
        }
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_actions__["d" /* ContactsActions */].Update({ id: address, changes: changes }));
        this.notifyMsg('update_success');
    };
    EditContact.prototype.notifyMsg = function (suffix) {
        var _this = this;
        return this.ts.get(this.translationPrefix + suffix).take(1).subscribe(function (t) { return _this.np.emit(t); });
    };
    EditContact = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'edit-contact',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\profile\contacts\edit-contact\edit-contact.html"*/'<ion-header class="otcgo-header">\n\n	<ion-navbar></ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="edit-contact__content">\n\n	<div class="edit-contact__background">\n\n		<div class="edit-contact__title">\n\n			<div class="edit-contact__avatar">\n\n				<img *ngIf="avatar" src="{{ avatar }}">\n\n			</div>\n\n\n\n			<div class="edit-contact__name" *ngIf="name && !editMode" (click)="editMode = !editMode">{{ name }}</div>\n\n			<ion-input\n\n				*ngIf="!name || editMode"\n\n				[(ngModel)]="name"\n\n				(ionBlur)="name && (editMode = !editMode)"\n\n				(ionChange)="nameHasChanged = true; editMode = true"\n\n				class="edit-contact__change-name"\n\n				placeholder="{{ translationPrefix + \'name\' | translate }}"></ion-input>\n\n		</div>\n\n	</div>\n\n\n\n	<div class="main-content">\n\n		<ion-input\n\n			[(ngModel)]="address"\n\n			(ionChange)="addressHasChanged = true"\n\n			class="edit-contact__input"\n\n			placeholder="{{ translationPrefix + \'address\' | translate }}"></ion-input>\n\n\n\n		<ion-input\n\n			[(ngModel)]="description"\n\n			(ionChange)="descriptionHasChanged = true"\n\n			class="edit-contact__input"\n\n			placeholder="{{ translationPrefix + \'description\' | translate }}"></ion-input>\n\n\n\n		<button\n\n			ion-button round full class="otcgo-button--colour"\n\n			(click)="handleUpdateContact()">{{ translationPrefix + \'save\' | translate }}</button>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\profile\contacts\edit-contact\edit-contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["f" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], EditContact);
    return EditContact;
}());

//# sourceMappingURL=edit-contact.js.map

/***/ })

});
//# sourceMappingURL=22.js.map