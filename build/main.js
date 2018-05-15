webpackJsonp([29],{

/***/ 1000:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionHistoryEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_empty__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ramda__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selectors_wallet_selector__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__selectors_balances_selector__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selectors_transaction_history_selector__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_api__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_transaction_history_action__ = __webpack_require__(186);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













// TODO
var TransactionHistoryEffects = /** @class */ (function () {
    function TransactionHistoryEffects(actions$, apiProvider, store$) {
        var _this = this;
        this.actions$ = actions$;
        this.apiProvider = apiProvider;
        this.store$ = store$;
        this.Load$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_12__actions_transaction_history_action__["TransactionHistoryActionTypes"].LOAD), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["withLatestFrom"])(this.store$.select(__WEBPACK_IMPORTED_MODULE_8__selectors_wallet_selector__["getAccount"]), this.store$.select(__WEBPACK_IMPORTED_MODULE_9__selectors_balances_selector__["getSelectedBalance"]), function (_, account, selectedBalance) { return ({
            address: account && account.address,
            asset: selectedBalance && selectedBalance.hash
        }); }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["switchMap"])(function (_a) {
            var address = _a.address, asset = _a.asset;
            if (address === '')
                return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_empty__["empty"])();
            var nextLoad$ = _this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_12__actions_transaction_history_action__["TransactionHistoryActionTypes"].LOAD), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["skip"])(1));
            var options = asset ? { params: { asset: asset } } : {};
            return _this.apiProvider
                .get(__WEBPACK_IMPORTED_MODULE_11__providers_api__["a" /* API_CONSTANTS */].HISTORY + "/" + address, options)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["takeUntil"])(nextLoad$), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["publishLast"])(), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["refCount"])(), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_transaction_history_action__["LoadFail"](error)); }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["mergeMap"])(function (_a) {
                var result = _a.result, error = _a.error;
                return error
                    ? Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_transaction_history_action__["LoadFail"](error))
                    : _this.apiProvider
                        .get("" + __WEBPACK_IMPORTED_MODULE_11__providers_api__["a" /* API_CONSTANTS */].ASSET)
                        .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (asset) {
                        return new __WEBPACK_IMPORTED_MODULE_12__actions_transaction_history_action__["LoadSuccess"](mapTransactionHistory(result, Object(__WEBPACK_IMPORTED_MODULE_7_ramda__["i" /* flatten */])(Object(__WEBPACK_IMPORTED_MODULE_7_ramda__["D" /* values */])(asset))));
                    }));
            }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_transaction_history_action__["LoadFail"](error)); }));
        }));
        this.LoadDetail$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_12__actions_transaction_history_action__["TransactionHistoryActionTypes"].LOAD_DETAIL), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["withLatestFrom"])(this.store$.select(__WEBPACK_IMPORTED_MODULE_10__selectors_transaction_history_selector__["getSelectedTxid"]), function (_, txid) { return txid; }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["concatMap"])(function (txid) {
            var next$ = _this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_12__actions_transaction_history_action__["TransactionHistoryActionTypes"].LOAD_DETAIL), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["skip"])(1));
            return _this.apiProvider.get(__WEBPACK_IMPORTED_MODULE_11__providers_api__["a" /* API_CONSTANTS */].HISTORY_DETAIL + "/" + txid)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["takeUntil"])(next$), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (transaction) { return transaction !== 404 && new __WEBPACK_IMPORTED_MODULE_12__actions_transaction_history_action__["LoadDetailSuccess"](transaction); }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_transaction_history_action__["LoadDetailFail"](error)); }));
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], TransactionHistoryEffects.prototype, "Load$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TransactionHistoryEffects.prototype, "LoadDetail$", void 0);
    TransactionHistoryEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_11__providers_api__["b" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], TransactionHistoryEffects);
    return TransactionHistoryEffects;
}());

// TODO: Move parse Tx to selector section
var mapTransactionHistory = function (histories, asset) {
    return histories.filter(function (history) { return Number(history.value); }).map(function (history) {
        var coin = asset.find(function (c) { return c.id === history.asset || "0x" + c.id === history.asset; });
        var name = coin.name || 'none';
        var sym = Array.isArray(name) ? name[0].name : name;
        var symbol = sym === '小蚁股' ? 'NEO'
            : sym === '小蚁币' ? 'GAS'
                : sym;
        return __assign({}, history, { symbol: symbol });
    });
};
//const parseTxx = compose(rMap())
//# sourceMappingURL=transaction-history.effect.js.map

/***/ }),

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_settings_action__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_constants__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SettingsEffects = /** @class */ (function () {
    /*@Effect()
    Save$ = this.actions$.pipe()*/
    function SettingsEffects(actions$, fileStorage, ts) {
        var _this = this;
        this.actions$ = actions$;
        this.fileStorage = fileStorage;
        this.ts = ts;
        this.Load$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_7__actions_settings_action__["SettingsActionTypes"].LOAD), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function () { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__["fromPromise"])(_this.fileStorage.checkFile(__WEBPACK_IMPORTED_MODULE_8__shared_constants__["k" /* OTCGO_SETTING_FILE_NAME */])); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["switchMap"])(function (exits) {
            return exits
                ? Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__["fromPromise"])(_this.fileStorage.read(__WEBPACK_IMPORTED_MODULE_8__shared_constants__["k" /* OTCGO_SETTING_FILE_NAME */]))
                    .map(function (file) { return new __WEBPACK_IMPORTED_MODULE_7__actions_settings_action__["LoadSuccess"](JSON.parse(file)); }) // If file exits, read the file
                : Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_7__actions_settings_action__["LoadSuccess"](__WEBPACK_IMPORTED_MODULE_8__shared_constants__["f" /* DEFAULT_SETTING */]));
        } // if don't, setting up with default
        ), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_7__actions_settings_action__["LoadFail"](error)); }));
        this.ChangeLanguage$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_7__actions_settings_action__["SettingsActionTypes"].CHANGE_LANGUAGE), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (action) { return action.payload; }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["tap"])(function (locale) { return _this.ts.use(locale); }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], SettingsEffects.prototype, "Load$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], SettingsEffects.prototype, "ChangeLanguage$", void 0);
    SettingsEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_6__providers__["d" /* FileStorageProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], SettingsEffects);
    return SettingsEffects;
}());

//# sourceMappingURL=settings.effect.js.map

/***/ }),

/***/ 1002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_contacts_action__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectors_contacts_selector__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_wallet_action__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContactsEffects = /** @class */ (function () {
    function ContactsEffects(actions$, store) {
        this.actions$ = actions$;
        this.store = store;
        this.load$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_5__actions_contacts_action__["ContactsActionTypes"].LOAD), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (action) { return new __WEBPACK_IMPORTED_MODULE_5__actions_contacts_action__["LoadSuccess"](action.payload); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_5__actions_contacts_action__["LoadFail"](error)); }));
        this.update$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_5__actions_contacts_action__["ContactsActionTypes"].UPDATE), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["withLatestFrom"])(this.store.select(__WEBPACK_IMPORTED_MODULE_6__selectors_contacts_selector__["getAll"]), function (_, contacts) { return contacts; }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (contacts) {
            var value = { contacts: contacts };
            var payload = { key: 'extra', value: value };
            return new __WEBPACK_IMPORTED_MODULE_7__actions_wallet_action__["Update"](payload);
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_5__actions_contacts_action__["LoadFail"](error)); }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ContactsEffects.prototype, "load$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ContactsEffects.prototype, "update$", void 0);
    ContactsEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], ContactsEffects);
    return ContactsEffects;
}());

//# sourceMappingURL=contacts.effect.js.map

/***/ }),

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_claims_action__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectors_wallet_selector__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClaimsEffects = /** @class */ (function () {
    function ClaimsEffects(actions$, store$, api) {
        var _this = this;
        this.actions$ = actions$;
        this.store$ = store$;
        this.api = api;
        this.Load$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_claims_action__["ClaimsActionTypes"].LOAD)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["withLatestFrom"])(this.store$.select(__WEBPACK_IMPORTED_MODULE_7__selectors_wallet_selector__["getAccount"]), function (_, account) { return account.address; }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["concatMap"])(function (address) {
            return _this.api.get(__WEBPACK_IMPORTED_MODULE_5__providers__["a" /* API_CONSTANTS */].GAS + "/" + address)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (res) { return new __WEBPACK_IMPORTED_MODULE_4__actions_claims_action__["LoadSuccess"](res); }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_4__actions_claims_action__["LoadFail"](error)); }));
        }));
        this.DoClaims$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_claims_action__["ClaimsActionTypes"].DO_CLAIM)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["pluck"])('payload'), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["withLatestFrom"])(this.store$.select(__WEBPACK_IMPORTED_MODULE_7__selectors_wallet_selector__["getAccount"]), function (passphrase, account) { return ({ passphrase: passphrase, account: account }); }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["concatMap"])(function (_a) {
            var passphrase = _a.passphrase, account = _a.account;
            return _this.api.get('');
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ClaimsEffects.prototype, "Load$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ClaimsEffects.prototype, "DoClaims$", void 0);
    ClaimsEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_5__providers__["c" /* ApiProvider */]])
    ], ClaimsEffects);
    return ClaimsEffects;
}());

//# sourceMappingURL=claims.effect.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prices_selector__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markets_selector__ = __webpack_require__(935);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_selector__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_selector__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__balances_selector__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transaction_history_selector__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_selector__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contacts_selector__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transactions_selector__ = __webpack_require__(939);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__claims_selector__ = __webpack_require__(940);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__prices_selector__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__markets_selector__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__wallet_selector__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__auth_selector__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__balances_selector__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__transaction_history_selector__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__settings_selector__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__contacts_selector__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__transactions_selector__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_9__claims_selector__; });











//# sourceMappingURL=index.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isEmpty; });
/* harmony export (immutable) */ __webpack_exports__["c"] = getBrowserLanguage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__debug__ = __webpack_require__(619);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallet_utils__ = __webpack_require__(620);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__wallet_utils__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__wallet_utils__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__wallet_utils__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__wallet_utils__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__wallet_utils__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__wallet_utils__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__wallet_utils__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__wallet_utils__["h"]; });


var isEmpty = function (array) { return Array.isArray(array) && array.length === 0; };
function getBrowserLanguage() {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
        return undefined;
    }
    var browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
    browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
    if (browserLang.indexOf('-') !== -1) {
        browserLang = browserLang.split('-')[0];
    }
    if (browserLang.indexOf('_') !== -1) {
        browserLang = browserLang.split('_')[0];
    }
    return browserLang;
}
// There only have two language is available, so..
// export const getDefaultCurrency = () => getBrowserLanguage() === 'en' ? 'usd' : 'cny'
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancesActionTypes", function() { return BalancesActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Load", function() { return Load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuccess", function() { return LoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFail", function() { return LoadFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanSelectedCoin", function() { return CleanSelectedCoin; });
var BalancesActionTypes;
(function (BalancesActionTypes) {
    BalancesActionTypes["LOAD"] = "[Balances] Load";
    BalancesActionTypes["LOAD_FAIL"] = "[Balances] Load Error";
    BalancesActionTypes["LOAD_SUCCESS"] = "[Balances] Load Success";
    BalancesActionTypes["SELECT"] = "[Balances] Select";
    BalancesActionTypes["CLEAN_SELECTED_COIN"] = "[Balances] Clean Selected Coin";
})(BalancesActionTypes || (BalancesActionTypes = {}));
var Load = /** @class */ (function () {
    function Load() {
        this.type = BalancesActionTypes.LOAD;
    }
    return Load;
}());

var LoadSuccess = /** @class */ (function () {
    function LoadSuccess(payload) {
        this.payload = payload;
        this.type = BalancesActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccess;
}());

var LoadFail = /** @class */ (function () {
    function LoadFail(payload) {
        this.payload = payload;
        this.type = BalancesActionTypes.LOAD_FAIL;
    }
    return LoadFail;
}());

var Select = /** @class */ (function () {
    function Select(payload) {
        this.payload = payload;
        this.type = BalancesActionTypes.SELECT;
    }
    return Select;
}());

var CleanSelectedCoin = /** @class */ (function () {
    function CleanSelectedCoin() {
        this.type = BalancesActionTypes.CLEAN_SELECTED_COIN;
    }
    return CleanSelectedCoin;
}());

//# sourceMappingURL=balances.action.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletActionTypes", function() { return WalletActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Load", function() { return Load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFail", function() { return LoadFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuccess", function() { return LoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccounts", function() { return AddAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccountsFail", function() { return AddAccountsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccountsSuccess", function() { return AddAccountsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccount", function() { return AddAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccountFail", function() { return AddAccountFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccountSuccess", function() { return AddAccountSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveAccount", function() { return RemoveAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveAccountFail", function() { return RemoveAccountFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveAccountSuccess", function() { return RemoveAccountSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeAccountLabel", function() { return ChangeAccountLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetDefaultAccount", function() { return SetDefaultAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return Update; });
var WalletActionTypes;
(function (WalletActionTypes) {
    WalletActionTypes["LOAD"] = "[Wallet] Load";
    WalletActionTypes["LOAD_FAIL"] = "[Wallet] Load Fail";
    WalletActionTypes["LOAD_SUCCESS"] = "[Wallet] Load Success";
    WalletActionTypes["ADD_ACCOUNT"] = "[Wallet] Add Account";
    WalletActionTypes["ADD_ACCOUNT_FAIL"] = "[Wallet] Add Account Fail";
    WalletActionTypes["ADD_ACCOUNT_SUCCESS"] = "[Wallet] Add Account Success";
    WalletActionTypes["ADD_ACCOUNTS"] = "[Wallet] Add Accounts";
    WalletActionTypes["ADD_ACCOUNTS_FAIL"] = "[Wallet] Add Accounts Fail";
    WalletActionTypes["ADD_ACCOUNTS_SUCCESS"] = "[Wallet] Add Accounts Success";
    WalletActionTypes["REMOVE_ACCOUNT"] = "[Wallet] Remove Account";
    WalletActionTypes["REMOVE_ACCOUNT_FAIL"] = "[Wallet] Remove Account Fail";
    WalletActionTypes["REMOVE_ACCOUNT_SUCCESS"] = "[Wallet] Remove Account Success";
    WalletActionTypes["CHANGE_ACCOUNT_LABEL"] = "[Wallet] Change Account Label";
    WalletActionTypes["SET_DEFAULT_ACCOUNT"] = "[Wallet] Set Default Account";
    WalletActionTypes["SAVE_WALLET"] = "[Wallet] Save Wallet";
    WalletActionTypes["UPDATE_WALLET"] = "[Wallet] Update";
})(WalletActionTypes || (WalletActionTypes = {}));
var Load = /** @class */ (function () {
    function Load() {
        this.type = WalletActionTypes.LOAD;
    }
    return Load;
}());

var LoadFail = /** @class */ (function () {
    function LoadFail(payload) {
        this.payload = payload;
        this.type = WalletActionTypes.LOAD_FAIL;
    }
    return LoadFail;
}());

var LoadSuccess = /** @class */ (function () {
    function LoadSuccess(payload) {
        this.payload = payload;
        this.type = WalletActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccess;
}());

var AddAccounts = /** @class */ (function () {
    function AddAccounts(payload) {
        this.payload = payload;
        this.type = WalletActionTypes.ADD_ACCOUNTS;
    }
    return AddAccounts;
}());

var AddAccountsFail = /** @class */ (function () {
    function AddAccountsFail(payload) {
        this.payload = payload;
        this.type = WalletActionTypes.ADD_ACCOUNTS_FAIL;
    }
    return AddAccountsFail;
}());

var AddAccountsSuccess = /** @class */ (function () {
    function AddAccountsSuccess() {
        this.type = WalletActionTypes.ADD_ACCOUNTS_SUCCESS;
    }
    return AddAccountsSuccess;
}());

var AddAccount = /** @class */ (function () {
    function AddAccount(payload) {
        this.payload = payload;
        this.type = WalletActionTypes.ADD_ACCOUNT;
    }
    return AddAccount;
}());

var AddAccountFail = /** @class */ (function () {
    function AddAccountFail(payload) {
        this.payload = payload;
        this.type = WalletActionTypes.ADD_ACCOUNT_FAIL;
    }
    return AddAccountFail;
}());

var AddAccountSuccess = /** @class */ (function () {
    function AddAccountSuccess(payload) {
        this.payload = payload;
        this.type = WalletActionTypes.ADD_ACCOUNT_SUCCESS;
    }
    return AddAccountSuccess;
}());

var RemoveAccount = /** @class */ (function () {
    function RemoveAccount(payload) {
        this.payload = payload;
        this.type = WalletActionTypes.REMOVE_ACCOUNT;
    }
    return RemoveAccount;
}());

var RemoveAccountFail = /** @class */ (function () {
    function RemoveAccountFail(payload) {
        this.payload = payload;
        this.type = WalletActionTypes.REMOVE_ACCOUNT_FAIL;
    }
    return RemoveAccountFail;
}());

var RemoveAccountSuccess = /** @class */ (function () {
    function RemoveAccountSuccess() {
        this.type = WalletActionTypes.REMOVE_ACCOUNT_SUCCESS;
    }
    return RemoveAccountSuccess;
}());

var ChangeAccountLabel = /** @class */ (function () {
    function ChangeAccountLabel(payload) {
        this.payload = payload;
        this.type = WalletActionTypes.CHANGE_ACCOUNT_LABEL;
    }
    return ChangeAccountLabel;
}());

var SetDefaultAccount = /** @class */ (function () {
    function SetDefaultAccount(payload) {
        this.payload = payload;
        this.type = WalletActionTypes.SET_DEFAULT_ACCOUNT;
    }
    return SetDefaultAccount;
}());

var Update = /** @class */ (function () {
    function Update(payload) {
        this.payload = payload;
        this.type = WalletActionTypes.UPDATE_WALLET;
    }
    return Update;
}());

//# sourceMappingURL=wallet.action.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFail", function() { return LoginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginOldWallet", function() { return LoginOldWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginOldWalletFail", function() { return LoginOldWalletFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginOldWalletSuccess", function() { return LoginOldWalletSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginWif", function() { return LoginWif; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginWifFail", function() { return LoginWifFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginWifSuccess", function() { return LoginWifSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLedger", function() { return LoginLedger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLedgerFail", function() { return LoginLedgerFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLedgerSuccess", function() { return LoginLedgerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginNeoDun", function() { return LoginNeoDun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginNeoDunFail", function() { return LoginNeoDunFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginNeoDunSuccess", function() { return LoginNeoDunSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWallet", function() { return CreateWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWalletFail", function() { return CreateWalletFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWalletSuccess", function() { return CreateWalletSuccess; });
// Data Definition
//  - Login means login with nep5 wallet
//  - LoginOldWallet means login with old wallet
//  - LoginWIF means login with Wif
//  - LoginLedger means login with nano Ledger wallet
//  - LoginNeoDun means login with Neo Dun wallet
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["LOGIN"] = "[Auth] Login";
    AuthActionTypes["LOGIN_FAIL"] = "[Auth] Login Fail";
    AuthActionTypes["LOGIN_SUCCESS"] = "[Auth] Login Success";
    AuthActionTypes["LOGIN_OLD_WALLET"] = "[Auth] Login Old Wallet";
    AuthActionTypes["LOGIN_OLD_WALLET_FAIL"] = "[Auth] Login Old Wallet Fail";
    AuthActionTypes["LOGIN_OLD_WALLET_SUCCESS"] = "[Auth] Login Old Wallet Success";
    AuthActionTypes["LOGIN_WIF"] = "[Auth] Login WIF";
    AuthActionTypes["LOGIN_WIF_FAIL"] = "[Auth] Login WIF Fail";
    AuthActionTypes["LOGIN_WIF_SUCCESS"] = "[Auth] Login WIF Success";
    AuthActionTypes["LOGIN_LEDGER"] = "[Auth] Login Ledger";
    AuthActionTypes["LOGIN_LEDGER_FAIL"] = "[Auth] Login  LedgerFail";
    AuthActionTypes["LOGIN_LEDGER_SUCCESS"] = "[Auth] Login  LedgerSuccess";
    AuthActionTypes["LOGIN_NEO_DUN"] = "[Auth] Login NEO DUN";
    AuthActionTypes["LOGIN_NEO_DUN_FAIL"] = "[Auth] Login NEO DUN Fail";
    AuthActionTypes["LOGIN_NEO_DUN_SUCCESS"] = "[Auth] Login NEO DUN Success";
    AuthActionTypes["CREATE_WALLET"] = "[Auth] Create Wallet";
    AuthActionTypes["CREATE_WALLET_FAIL"] = "[Auth] Create Wallet Fail";
    AuthActionTypes["CREATE_WALLET_SUCCESS"] = "[Auth] Create Wallet Success";
})(AuthActionTypes || (AuthActionTypes = {}));
var Login = /** @class */ (function () {
    function Login(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN;
    }
    return Login;
}());

var LoginFail = /** @class */ (function () {
    function LoginFail(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_FAIL;
    }
    return LoginFail;
}());

var LoginSuccess = /** @class */ (function () {
    function LoginSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_SUCCESS;
    }
    return LoginSuccess;
}());

var LoginOldWallet = /** @class */ (function () {
    function LoginOldWallet(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_OLD_WALLET;
    }
    return LoginOldWallet;
}());

var LoginOldWalletFail = /** @class */ (function () {
    function LoginOldWalletFail(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_OLD_WALLET_FAIL;
    }
    return LoginOldWalletFail;
}());

var LoginOldWalletSuccess = /** @class */ (function () {
    function LoginOldWalletSuccess() {
        this.type = AuthActionTypes.LOGIN_OLD_WALLET_SUCCESS;
    }
    return LoginOldWalletSuccess;
}());

var LoginWif = /** @class */ (function () {
    function LoginWif(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_WIF;
    }
    return LoginWif;
}());

var LoginWifFail = /** @class */ (function () {
    function LoginWifFail(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_WIF_FAIL;
    }
    return LoginWifFail;
}());

var LoginWifSuccess = /** @class */ (function () {
    function LoginWifSuccess() {
        this.type = AuthActionTypes.LOGIN_WIF_SUCCESS;
    }
    return LoginWifSuccess;
}());

var LoginLedger = /** @class */ (function () {
    function LoginLedger() {
        this.type = AuthActionTypes.LOGIN_LEDGER;
    }
    return LoginLedger;
}());

var LoginLedgerFail = /** @class */ (function () {
    function LoginLedgerFail(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_LEDGER_FAIL;
    }
    return LoginLedgerFail;
}());

var LoginLedgerSuccess = /** @class */ (function () {
    function LoginLedgerSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_LEDGER_SUCCESS;
    }
    return LoginLedgerSuccess;
}());

var LoginNeoDun = /** @class */ (function () {
    function LoginNeoDun() {
        this.type = AuthActionTypes.LOGIN_NEO_DUN;
    }
    return LoginNeoDun;
}());

var LoginNeoDunFail = /** @class */ (function () {
    function LoginNeoDunFail(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_NEO_DUN_FAIL;
    }
    return LoginNeoDunFail;
}());

var LoginNeoDunSuccess = /** @class */ (function () {
    function LoginNeoDunSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_NEO_DUN_SUCCESS;
    }
    return LoginNeoDunSuccess;
}());

var CreateWallet = /** @class */ (function () {
    function CreateWallet(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.CREATE_WALLET;
    }
    return CreateWallet;
}());

var CreateWalletFail = /** @class */ (function () {
    function CreateWalletFail(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.CREATE_WALLET_FAIL;
    }
    return CreateWalletFail;
}());

var CreateWalletSuccess = /** @class */ (function () {
    function CreateWalletSuccess() {
        this.type = AuthActionTypes.CREATE_WALLET_SUCCESS;
    }
    return CreateWalletSuccess;
}());

//# sourceMappingURL=auth.action.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsActionTypes", function() { return ContactsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Load", function() { return Load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFail", function() { return LoadFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuccess", function() { return LoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Remove", function() { return Remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFail", function() { return RemoveFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveSuccess", function() { return RemoveSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanSelect", function() { return CleanSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return Update; });
var ContactsActionTypes;
(function (ContactsActionTypes) {
    ContactsActionTypes["LOAD"] = "[Contacts] Load Contacts";
    ContactsActionTypes["LOAD_FAIL"] = "[Contacts] Load Contacts Fail";
    ContactsActionTypes["LOAD_SUCCESS"] = "[Contacts] Load Contacts Success";
    ContactsActionTypes["REMOVE"] = "[Contacts] Remove Contacts";
    ContactsActionTypes["REMOVE_FAIL"] = "[Contacts] Remove Contacts Fail";
    ContactsActionTypes["REMOVE_SUCCESS"] = "[Contacts] Remove Contacts Success";
    ContactsActionTypes["UPDATE"] = "[Contacts] Update Contacts";
    ContactsActionTypes["SELECT"] = "[Contacts] Select Contacts";
    ContactsActionTypes["CLEAN_SELECT"] = "[Contacts] Clean Select";
})(ContactsActionTypes || (ContactsActionTypes = {}));
var Load = /** @class */ (function () {
    function Load(payload) {
        this.payload = payload;
        this.type = ContactsActionTypes.LOAD;
    }
    return Load;
}());

var LoadFail = /** @class */ (function () {
    function LoadFail(payload) {
        this.payload = payload;
        this.type = ContactsActionTypes.LOAD_FAIL;
    }
    return LoadFail;
}());

var LoadSuccess = /** @class */ (function () {
    function LoadSuccess(payload) {
        this.payload = payload;
        this.type = ContactsActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccess;
}());

var Remove = /** @class */ (function () {
    function Remove(payload) {
        this.payload = payload;
        this.type = ContactsActionTypes.REMOVE;
    }
    return Remove;
}());

var RemoveFail = /** @class */ (function () {
    function RemoveFail(payload) {
        this.payload = payload;
        this.type = ContactsActionTypes.REMOVE_FAIL;
    }
    return RemoveFail;
}());

var RemoveSuccess = /** @class */ (function () {
    function RemoveSuccess(payload) {
        this.payload = payload;
        this.type = ContactsActionTypes.REMOVE_SUCCESS;
    }
    return RemoveSuccess;
}());

var Select = /** @class */ (function () {
    function Select(payload) {
        this.payload = payload;
        this.type = ContactsActionTypes.SELECT;
    }
    return Select;
}());

var CleanSelect = /** @class */ (function () {
    function CleanSelect() {
        this.type = ContactsActionTypes.CLEAN_SELECT;
    }
    return CleanSelect;
}());

var Update = /** @class */ (function () {
    function Update(payload) {
        this.payload = payload;
        this.type = ContactsActionTypes.UPDATE;
    }
    return Update;
}());

//# sourceMappingURL=contacts.action.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedBalanceSymbol", function() { return getSelectedBalanceSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNonZeroEntities", function() { return getNonZeroEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntitiesByAddress", function() { return getEntitiesByAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultEntities", function() { return getDefaultEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultNonZeroEntities", function() { return getDefaultNonZeroEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedBalance", function() { return getSelectedBalance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallet_selector__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda__ = __webpack_require__(57);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var getState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createFeatureSelector */])('balances');
var getEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.entities; });
var getError = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.error; });
var getLoading = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.loading; });
var getSelectedBalanceSymbol = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.selectedBalanceSymbol; });
var getNonZeroEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getEntities, function (entities) { return Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["t" /* not */])(Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["l" /* isEmpty */])(entities)) &&
    Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["C" /* toPairs */])(entities).reduce(function (acc, _a) {
        var address = _a[0], balances = _a[1];
        return (__assign({}, acc, (_b = {}, _b[address] = balances.filter(function (b) { return b.amount > 0; }), _b)));
        var _b;
    }, {}); });
var getEntitiesByAddress = function (address) { return Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getEntities, function (entities) { return address in entities && entities[address]; }); };
var getDefaultEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_1__wallet_selector__["getAccount"], getEntities, function (account, entities) {
    return account && entities && entities[account.address] &&
        !Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["l" /* isEmpty */])(entities[account.address]) &&
        Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["z" /* sort */])(function (a, b) { return b.amount - a.amount; }, entities[account.address]);
});
var getDefaultNonZeroEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getDefaultEntities, function (entities) {
    return entities && !Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["l" /* isEmpty */])(entities) && Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["g" /* filter */])(Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["b" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["n" /* lt */])(0), Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["w" /* prop */])('amount')))(entities);
});
var getSelectedBalance = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getDefaultEntities, getSelectedBalanceSymbol, function (balances, symbol) { return symbol && balances && !Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["l" /* isEmpty */])(balances) && balances.find(function (balance) { return balance.symbol === symbol; }); });
//# sourceMappingURL=balances.selector.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__balances_action__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markets_action__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prices_action__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_action__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wallet_action__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_action__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transaction_history_action__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contacts_action__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transactions_action__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__claims_action__ = __webpack_require__(187);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__balances_action__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__markets_action__; });
/* unused harmony reexport PricesActions */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__settings_action__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__wallet_action__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__auth_action__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__transaction_history_action__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__contacts_action__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__transactions_action__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_9__claims_action__; });











//# sourceMappingURL=index.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketsActionTypes", function() { return MarketsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Load", function() { return Load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuccess", function() { return LoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFail", function() { return LoadFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDetail", function() { return LoadDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDetailSuccess", function() { return LoadDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDetailFail", function() { return LoadDetailFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMarketsLoadTime", function() { return UpdateMarketsLoadTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDetailsLoadTime", function() { return UpdateDetailsLoadTime; });
var MarketsActionTypes;
(function (MarketsActionTypes) {
    MarketsActionTypes["LOAD"] = "[Markets] Load markets";
    MarketsActionTypes["LOAD_SUCCESS"] = "[Markets] Load markets success";
    MarketsActionTypes["LOAD_FAIL"] = "[Markets] Load markets fail";
    MarketsActionTypes["LOAD_DETAIL"] = "[Markets] Load markets detail";
    MarketsActionTypes["LOAD_DETAIL_SUCCESS"] = "[Markets] Load markets detail success";
    MarketsActionTypes["LOAD_DETAIL_FAIL"] = "[Markets] Load markets detail fail";
    MarketsActionTypes["SELECT"] = "[Markets] Select";
    MarketsActionTypes["UPDATE_MARKETS_LOAD_TIME"] = "[Markets] Update Markets Load Time";
    MarketsActionTypes["UPDATE_DETAILS_LOAD_TIME"] = "[Markets] Update Details Load Time";
})(MarketsActionTypes || (MarketsActionTypes = {}));
var Load = /** @class */ (function () {
    function Load() {
        this.type = MarketsActionTypes.LOAD;
    }
    return Load;
}());

var LoadSuccess = /** @class */ (function () {
    function LoadSuccess(payload) {
        this.payload = payload;
        this.type = MarketsActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccess;
}());

var LoadFail = /** @class */ (function () {
    function LoadFail(payload) {
        this.payload = payload;
        this.type = MarketsActionTypes.LOAD_FAIL;
    }
    return LoadFail;
}());

var LoadDetail = /** @class */ (function () {
    function LoadDetail(payload) {
        this.payload = payload;
        this.type = MarketsActionTypes.LOAD_DETAIL;
    }
    return LoadDetail;
}());

var LoadDetailSuccess = /** @class */ (function () {
    function LoadDetailSuccess(payload) {
        this.payload = payload;
        this.type = MarketsActionTypes.LOAD_DETAIL_SUCCESS;
    }
    return LoadDetailSuccess;
}());

var LoadDetailFail = /** @class */ (function () {
    function LoadDetailFail(payload) {
        this.payload = payload;
        this.type = MarketsActionTypes.LOAD_DETAIL_FAIL;
    }
    return LoadDetailFail;
}());

var Select = /** @class */ (function () {
    function Select(payload) {
        this.payload = payload;
        this.type = MarketsActionTypes.SELECT;
    }
    return Select;
}());

var UpdateMarketsLoadTime = /** @class */ (function () {
    function UpdateMarketsLoadTime() {
        this.type = MarketsActionTypes.UPDATE_MARKETS_LOAD_TIME;
    }
    return UpdateMarketsLoadTime;
}());

var UpdateDetailsLoadTime = /** @class */ (function () {
    function UpdateDetailsLoadTime() {
        this.type = MarketsActionTypes.UPDATE_DETAILS_LOAD_TIME;
    }
    return UpdateDetailsLoadTime;
}());

//# sourceMappingURL=markets.action.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PricesActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Load; });
var PricesActionTypes;
(function (PricesActionTypes) {
    PricesActionTypes["LOAD"] = "[Markets] Load prices";
})(PricesActionTypes || (PricesActionTypes = {}));
var Load = /** @class */ (function () {
    function Load(payload) {
        this.payload = payload;
        this.type = PricesActionTypes.LOAD;
    }
    return Load;
}());

//# sourceMappingURL=prices.action.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsActionTypes", function() { return SettingsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Load", function() { return Load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuccess", function() { return LoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFail", function() { return LoadFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLanguage", function() { return ChangeLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeCurrency", function() { return ChangeCurrency; });
var SettingsActionTypes;
(function (SettingsActionTypes) {
    SettingsActionTypes["LOAD"] = "[Settings] Load";
    SettingsActionTypes["LOAD_FAIL"] = "[Settings] Load Fail";
    SettingsActionTypes["LOAD_SUCCESS"] = "[Settings] Load Success";
    SettingsActionTypes["CHANGE_LANGUAGE"] = "[Settings] Change Language";
    SettingsActionTypes["CHANGE_CURRENCY"] = "[Settings] Change Currency";
})(SettingsActionTypes || (SettingsActionTypes = {}));
var Load = /** @class */ (function () {
    function Load() {
        this.type = SettingsActionTypes.LOAD;
    }
    return Load;
}());

var LoadSuccess = /** @class */ (function () {
    function LoadSuccess(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccess;
}());

var LoadFail = /** @class */ (function () {
    function LoadFail(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.LOAD_FAIL;
    }
    return LoadFail;
}());

var ChangeLanguage = /** @class */ (function () {
    function ChangeLanguage(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_LANGUAGE;
    }
    return ChangeLanguage;
}());

var ChangeCurrency = /** @class */ (function () {
    function ChangeCurrency(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_CURRENCY;
    }
    return ChangeCurrency;
}());

//# sourceMappingURL=settings.action.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionHistoryActionTypes", function() { return TransactionHistoryActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Load", function() { return Load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuccess", function() { return LoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFail", function() { return LoadFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDetail", function() { return LoadDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDetailSuccess", function() { return LoadDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDetailFail", function() { return LoadDetailFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
var TransactionHistoryActionTypes;
(function (TransactionHistoryActionTypes) {
    TransactionHistoryActionTypes["LOAD"] = "[Transaction History] Load";
    TransactionHistoryActionTypes["LOAD_FAIL"] = "[Transaction History] Load Fail";
    TransactionHistoryActionTypes["LOAD_SUCCESS"] = "[Transaction History] Load Success";
    TransactionHistoryActionTypes["LOAD_DETAIL"] = "[Transaction History] Load Detail";
    TransactionHistoryActionTypes["LOAD_DETAIL_FAIL"] = "[Transaction History] Load Detail Fail";
    TransactionHistoryActionTypes["LOAD_DETAIL_SUCCESS"] = "[Transaction History] Load Detail Success";
    TransactionHistoryActionTypes["SELECT"] = "[Transaction History] Select History TransactionID";
})(TransactionHistoryActionTypes || (TransactionHistoryActionTypes = {}));
var Load = /** @class */ (function () {
    function Load() {
        this.type = TransactionHistoryActionTypes.LOAD;
    }
    return Load;
}());

var LoadSuccess = /** @class */ (function () {
    function LoadSuccess(payload) {
        this.payload = payload;
        this.type = TransactionHistoryActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccess;
}());

var LoadFail = /** @class */ (function () {
    function LoadFail(payload) {
        this.payload = payload;
        this.type = TransactionHistoryActionTypes.LOAD_FAIL;
    }
    return LoadFail;
}());

var LoadDetail = /** @class */ (function () {
    function LoadDetail() {
        this.type = TransactionHistoryActionTypes.LOAD_DETAIL;
    }
    return LoadDetail;
}());

var LoadDetailSuccess = /** @class */ (function () {
    function LoadDetailSuccess(payload) {
        this.payload = payload;
        this.type = TransactionHistoryActionTypes.LOAD_DETAIL_SUCCESS;
    }
    return LoadDetailSuccess;
}());

var LoadDetailFail = /** @class */ (function () {
    function LoadDetailFail(payload) {
        this.payload = payload;
        this.type = TransactionHistoryActionTypes.LOAD_DETAIL_FAIL;
    }
    return LoadDetailFail;
}());

var Select = /** @class */ (function () {
    function Select(payload) {
        this.payload = payload;
        this.type = TransactionHistoryActionTypes.SELECT;
    }
    return Select;
}());

//# sourceMappingURL=transaction-history.action.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimsActionTypes", function() { return ClaimsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Load", function() { return Load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFail", function() { return LoadFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuccess", function() { return LoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoClaim", function() { return DoClaim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoClaimFail", function() { return DoClaimFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoClaimSuccess", function() { return DoClaimSuccess; });
var ClaimsActionTypes;
(function (ClaimsActionTypes) {
    ClaimsActionTypes["LOAD"] = "[Claims] Load Claims";
    ClaimsActionTypes["LOAD_FAIL"] = "[Claims] Load Claims Fail";
    ClaimsActionTypes["LOAD_SUCCESS"] = "[Claims] Load Claims Success";
    ClaimsActionTypes["DO_CLAIM"] = "[Claims] Do Claims";
    ClaimsActionTypes["DO_CLAIM_FAIL"] = "[Claims] Do Claims Fail";
    ClaimsActionTypes["DO_CLAIM_SUCCESS"] = "[Claims] Do Claims Success";
})(ClaimsActionTypes || (ClaimsActionTypes = {}));
var Load = /** @class */ (function () {
    function Load() {
        this.type = ClaimsActionTypes.LOAD;
    }
    return Load;
}());

var LoadFail = /** @class */ (function () {
    function LoadFail(payload) {
        this.payload = payload;
        this.type = ClaimsActionTypes.LOAD_FAIL;
    }
    return LoadFail;
}());

var LoadSuccess = /** @class */ (function () {
    function LoadSuccess(payload) {
        this.payload = payload;
        this.type = ClaimsActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccess;
}());

var DoClaim = /** @class */ (function () {
    function DoClaim(payload) {
        this.payload = payload;
        this.type = ClaimsActionTypes.DO_CLAIM;
    }
    return DoClaim;
}());

var DoClaimFail = /** @class */ (function () {
    function DoClaimFail(payload) {
        this.payload = payload;
        this.type = ClaimsActionTypes.DO_CLAIM_FAIL;
    }
    return DoClaimFail;
}());

var DoClaimSuccess = /** @class */ (function () {
    function DoClaimSuccess(payload) {
        this.payload = payload;
        this.type = ClaimsActionTypes.DO_CLAIM_SUCCESS;
    }
    return DoClaimSuccess;
}());

//# sourceMappingURL=claims.action.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_consts__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__price_provider__ = __webpack_require__(650);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__price_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_provider__ = __webpack_require__(851);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__api_provider__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_consts__; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
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



var FileStorageProvider = /** @class */ (function () {
    function FileStorageProvider(file, platform) {
        this.file = file;
        this.platform = platform;
        this.androidExternalDirectory = this.file.externalApplicationStorageDirectory;
        this.androidDataDirectory = this.file.dataDirectory;
        this.iosApplicationDirectory = this.file.applicationDirectory;
        this.init();
    }
    FileStorageProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        this.storageDirectory = this.platform.is('android')
                            ? this.androidDataDirectory
                            : this.platform.is('ios')
                                ? this.iosApplicationDirectory
                                : '';
                        console.log();
                        console.log('platform ready:', this.storageDirectory);
                        console.log();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileStorageProvider.prototype.read = function (fileName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.file.readAsText(this.storageDirectory, fileName)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FileStorageProvider.prototype.save = function (fileName, text) {
        return __awaiter(this, void 0, void 0, function () {
            var fileExits, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.checkFile(fileName)];
                    case 1:
                        fileExits = _a.sent();
                        return [4 /*yield*/, this.platform.ready()];
                    case 2:
                        _a.sent();
                        if (!fileExits) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.file.writeExistingFile(this.storageDirectory, fileName, text)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [4 /*yield*/, this.file.writeFile(this.storageDirectory, fileName, text)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6:
                        e_1 = _a.sent();
                        console.log('Error on File Storage save()', e_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    FileStorageProvider.prototype.checkFile = function (fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.file.checkFile(this.storageDirectory, fileName)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_2 = _a.sent();
                        console.log('Error on check file', e_2.message);
                        return [2 /*return*/, Promise.resolve(false)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FileStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */]])
    ], FileStorageProvider);
    return FileStorageProvider;
}());

//# sourceMappingURL=file-storage.provider.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_storage_provider__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_neon__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_neon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__libs_neon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_constants__ = __webpack_require__(55);
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





var WalletProvider = /** @class */ (function () {
    function WalletProvider(fileStorageProvider) {
        this.fileStorageProvider = fileStorageProvider;
    }
    WalletProvider.prototype.checkWalletFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileStorageProvider.checkFile(__WEBPACK_IMPORTED_MODULE_4__shared_constants__["l" /* OTCGO_WALLET_FILE_NAME */])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    WalletProvider.prototype.readWalletFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileStorageProvider.read(__WEBPACK_IMPORTED_MODULE_4__shared_constants__["l" /* OTCGO_WALLET_FILE_NAME */])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    WalletProvider.prototype.saveWalletFile = function (wallet) {
        return __awaiter(this, void 0, void 0, function () {
            var walletTextFile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        walletTextFile = JSON.stringify(wallet);
                        return [4 /*yield*/, this.fileStorageProvider.save(__WEBPACK_IMPORTED_MODULE_4__shared_constants__["l" /* OTCGO_WALLET_FILE_NAME */], walletTextFile)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    WalletProvider.prototype.upgradeToNEP5Account = function (oldWalletJSON, passphrase) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils__["g" /* isOldWallet */])(oldWalletJSON)) {
            throw new Error('Is not an old wallet, Please check again!');
        }
        try {
            return this._upgradeToNEP5Account(oldWalletJSON, passphrase);
        }
        catch (e) {
            // Because the error come from decryption, It looks like 'Malform format...'
            // So we just using 'Incorrect password' instead
            throw new Error('Incorrect password');
        }
    };
    WalletProvider.prototype._upgradeToNEP5Account = function (oldWalletJSON, passphrase) {
        var _a = oldWalletJSON, privateKeyEncrypted = _a.privateKeyEncrypted, publicKey = _a.publicKey;
        var privateKey = Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils__["a" /* decryptPrv */])(privateKeyEncrypted, passphrase);
        var result = Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils__["j" /* verifyKeyPair */])(privateKey, publicKey);
        if (result) {
            var account = new __WEBPACK_IMPORTED_MODULE_2__libs_neon__["wallet"].Account(privateKey);
            account.encrypt(passphrase);
            return account;
        }
        throw new Error('Incorrect Password!');
    };
    WalletProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__file_storage_provider__["a" /* FileStorageProvider */]])
    ], WalletProvider);
    return WalletProvider;
}());

//# sourceMappingURL=wallet.provider.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationProvider = /** @class */ (function () {
    function NotificationProvider(toastCtrl, translateService) {
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.subject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.notification$ = this.subject.asObservable();
        this.debounce = 3000;
        this.subscribeNotification();
    }
    NotificationProvider.prototype.emit = function (options) {
        var nomi = typeof options === 'object' ? options : { message: options };
        this.subject.next(nomi);
    };
    NotificationProvider.prototype.notifyTranslation = function (key, interpolateParams) {
        var _this = this;
        this.translateService.get(key, interpolateParams)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["take"])(1), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["debounceTime"])(this.debounce))
            .subscribe(function (translation) { return _this.emit(translation); });
    };
    NotificationProvider.prototype.subscribeNotification = function () {
        var _this = this;
        this.notification$.subscribe(function (opts) { return _this.showNotification(opts); });
    };
    NotificationProvider.prototype.showNotification = function (opts) {
        var toastOptions = Object.assign(opts, {
            message: opts.message['message'] || opts.message,
            position: 'bottom',
            duration: this.debounce
        });
        var toast = this.toastCtrl.create(toastOptions);
        return toast.present();
    };
    NotificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], NotificationProvider);
    return NotificationProvider;
}());

//# sourceMappingURL=notification.provider.js.map

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 255;

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/modals/remove-account-modal/remove-account-modal.module": [
		1005,
		28
	],
	"../components/modals/send-modal/send-modal.module": [
		1004,
		13
	],
	"../containers/create-wallet/backup-wallet/backup-wallet.module": [
		1006,
		27
	],
	"../containers/create-wallet/create-wallet.module": [
		1009,
		26
	],
	"../containers/discover/discover.module": [
		1007,
		25
	],
	"../containers/login/login.module": [
		1008,
		7
	],
	"../containers/markets/market-detail/market-detail.module": [
		1010,
		0
	],
	"../containers/markets/markets.module": [
		1011,
		24
	],
	"../containers/onboarding/onboarding.module": [
		1012,
		12
	],
	"../containers/possessions/payment-qrcode/payment-qrcode.module": [
		1013,
		2
	],
	"../containers/possessions/possession-detail/possession-detail.module": [
		1014,
		1
	],
	"../containers/possessions/possessions.module": [
		1015,
		6
	],
	"../containers/profile/claims/claims.module": [
		1016,
		23
	],
	"../containers/profile/contacts/contacts.module": [
		1019,
		11
	],
	"../containers/profile/contacts/edit-contact/edit-contact.module": [
		1017,
		22
	],
	"../containers/profile/helpcentre/helpcentre.module": [
		1018,
		21
	],
	"../containers/profile/histories/histories.module": [
		1020,
		10
	],
	"../containers/profile/histories/history-detail/history-detail.module": [
		1028,
		20
	],
	"../containers/profile/manage-wallet/add-wallet/add-wallet.module": [
		1021,
		19
	],
	"../containers/profile/manage-wallet/add-wallet/import-file/import-wallet.module": [
		1022,
		8
	],
	"../containers/profile/manage-wallet/add-wallet/import-private-key/import-private-key.module": [
		1023,
		18
	],
	"../containers/profile/manage-wallet/add-wallet/import-success/import-success.module": [
		1024,
		4
	],
	"../containers/profile/manage-wallet/add-wallet/observation-mode/observation-mode.module": [
		1025,
		17
	],
	"../containers/profile/manage-wallet/manage-wallet.module": [
		1026,
		5
	],
	"../containers/profile/notification/notification.module": [
		1027,
		16
	],
	"../containers/profile/profile.module": [
		1030,
		9
	],
	"../containers/profile/settings/settings.module": [
		1029,
		3
	],
	"../containers/storybook/storybook.module": [
		1031,
		15
	],
	"../containers/tabs/tabs.module": [
		1032,
		14
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 303;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsActionTypes", function() { return TransactionsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Send", function() { return Send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendSuccess", function() { return SendSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFail", function() { return SendFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectContact", function() { return SelectContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanSelectedContact", function() { return CleanSelectedContact; });
var TransactionsActionTypes;
(function (TransactionsActionTypes) {
    TransactionsActionTypes["SEND"] = "[Transaction] Send";
    TransactionsActionTypes["SEND_FAIL"] = "[Transaction] Send Fail";
    TransactionsActionTypes["SEND_SUCCESS"] = "[Transaction] Send Success";
    TransactionsActionTypes["SELECT_CONTACT"] = "[Transaction] Select Contact";
    TransactionsActionTypes["CLEAN_SELECTED_CONTACT"] = "[Transaction] Clean Selected Contact";
})(TransactionsActionTypes || (TransactionsActionTypes = {}));
var Send = /** @class */ (function () {
    function Send() {
        this.type = TransactionsActionTypes.SEND;
    }
    return Send;
}());

var SendSuccess = /** @class */ (function () {
    function SendSuccess(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.SEND_SUCCESS;
    }
    return SendSuccess;
}());

var SendFail = /** @class */ (function () {
    function SendFail(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.SEND_FAIL;
    }
    return SendFail;
}());

var SelectContact = /** @class */ (function () {
    function SelectContact(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.SELECT_CONTACT;
    }
    return SelectContact;
}());

var CleanSelectedContact = /** @class */ (function () {
    function CleanSelectedContact() {
        this.type = TransactionsActionTypes.CLEAN_SELECTED_CONTACT;
    }
    return CleanSelectedContact;
}());

//# sourceMappingURL=transactions.action.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BALANCES", function() { return BALANCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HISTORY", function() { return HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSET", function() { return ASSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HISTORY_DETAIL", function() { return HISTORY_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAS", function() { return GAS; });
var BALANCES = 'address';
var HISTORY = 'history';
var ASSET = 'asset';
var HISTORY_DETAIL = 'transaction';
var GAS = 'claim';
//# sourceMappingURL=api.consts.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_startWith__ = __webpack_require__(930);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_publish__ = __webpack_require__(932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_publish___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_publish__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoadingProvider = /** @class */ (function () {
    function LoadingProvider(loadingCtrl) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.loading$ = this.subject.publish().refCount();
        this.loading$
            .distinctUntilChanged()
            .timeout(3456)
            .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(false); })
            .subscribe(function (boolOrOptions) {
            if (boolOrOptions) {
                _this.loading = _this.loadingCtrl.create();
                return _this.loading.present();
            }
            return _this.loading && _this.loading.dismissAll();
        });
    }
    LoadingProvider.prototype.emit = function (bool) { this.subject.next(bool); };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.provider.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_neon__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_neon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__libs_neon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wallet_wallet_provider__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_selectors__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Account = __WEBPACK_IMPORTED_MODULE_2__libs_neon__["wallet"].Account;
var AccountProvider = /** @class */ (function () {
    function AccountProvider(walletProvider, store) {
        var _this = this;
        this.walletProvider = walletProvider;
        this.store = store;
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__store_selectors__["j" /* WalletSelectors */].getAccounts).subscribe(function (accounts) { return _this.accounts = accounts; });
    }
    Object.defineProperty(AccountProvider.prototype, "defaultAccount", {
        get: function () {
            return this.accounts.find(function (account) { return account.isDefault; });
        },
        enumerable: true,
        configurable: true
    });
    AccountProvider.prototype.getPublicKey = function (encoded) {
        return this.defaultAccount.getPublicKey(encoded);
    };
    AccountProvider.prototype.decrypt = function (passphrase) {
    };
    AccountProvider.prototype.getPrivateKey = function () {
        return this.defaultAccount.privateKey;
    };
    AccountProvider.prototype.getWIF = function (account) {
    };
    AccountProvider.prototype.getAddress = function (account) {
        return account ? (new Account(account)).address : this.defaultAccount.address;
    };
    AccountProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__wallet_wallet_provider__["a" /* WalletProvider */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], AccountProvider);
    return AccountProvider;
}());

//# sourceMappingURL=account.provider.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedTxid", function() { return getSelectedTxid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetail", function() { return getDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntitiesBySelectedSymbol", function() { return getEntitiesBySelectedSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedEntities", function() { return getSelectedEntities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectors_balances_selector__ = __webpack_require__(137);



var getState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createFeatureSelector */])('transaction_history');
var getEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.entities; });
var getError = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.error; });
var getLoading = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.loading; });
var getSelectedTxid = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.selectedTxid; });
var getDetail = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.details; });
var getEntitiesBySelectedSymbol = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getEntities, __WEBPACK_IMPORTED_MODULE_2__selectors_balances_selector__["getSelectedBalanceSymbol"], function (histories, symbol) { return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["g" /* filter */])(Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["b" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["f" /* equals */])(symbol), Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["w" /* prop */])('symbol')), histories); });
var getSelectedEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getEntities, getSelectedTxid, function (entities, txid) { return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["h" /* find */])(Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["b" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["f" /* equals */])(txid), Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["w" /* prop */])('txid')))(entities); });
//# sourceMappingURL=transaction-history.selector.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedAddress", function() { return getSelectedAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddresses", function() { return getAddresses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotal", function() { return getTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedContact", function() { return getSelectedContact; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_contacts_reducer__ = __webpack_require__(400);


var getState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createFeatureSelector */])('contacts');
var getSelectedAddress = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.selectedAddress; });
var getAddresses = (_a = __WEBPACK_IMPORTED_MODULE_1__reducers_contacts_reducer__["a" /* adapter */].getSelectors(getState), _a.selectIds), getEntities = _a.selectEntities, getAll = _a.selectAll, getTotal = _a.selectTotal;
var getSelectedContact = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getEntities, getSelectedAddress, function (entities, address) { return entities && entities[address]; });
var _a;
//# sourceMappingURL=contacts.selector.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_entity__ = __webpack_require__(938);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_contacts_action__ = __webpack_require__(117);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var adapter = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_entity__["a" /* createEntityAdapter */])({ selectId: function (contact) { return contact.address; } });
var initialState = adapter.getInitialState({
    selectedAddress: '',
    loading: false,
    error: ''
});
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_contacts_action__["ContactsActionTypes"].LOAD:
            return __assign({}, state, { loading: true });
        case __WEBPACK_IMPORTED_MODULE_1__actions_contacts_action__["ContactsActionTypes"].LOAD_FAIL:
            return __assign({}, state, { error: action.payload, loading: false });
        case __WEBPACK_IMPORTED_MODULE_1__actions_contacts_action__["ContactsActionTypes"].SELECT:
            return __assign({}, state, { selectedAddress: action.payload });
        case __WEBPACK_IMPORTED_MODULE_1__actions_contacts_action__["ContactsActionTypes"].CLEAN_SELECT:
            return __assign({}, state, { selectedAddress: '' });
        case __WEBPACK_IMPORTED_MODULE_1__actions_contacts_action__["ContactsActionTypes"].LOAD_SUCCESS:
            return adapter.addAll(action.payload, state);
        case __WEBPACK_IMPORTED_MODULE_1__actions_contacts_action__["ContactsActionTypes"].REMOVE:
            return adapter.removeOne(action.payload.address, __assign({}, state, { selectedAddress: state.selectedAddress }));
        case __WEBPACK_IMPORTED_MODULE_1__actions_contacts_action__["ContactsActionTypes"].UPDATE:
            return adapter.upsertOne(action.payload, __assign({}, state, { selectedAddress: state.selectedAddress }));
        default: return state;
    }
};
//# sourceMappingURL=contacts.reducer.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Logger = /** @class */ (function () {
    function Logger(errorHandler) {
        this.errorHandler = errorHandler;
    }
    Logger.prototype.log = function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* dev */]) {
            console.log.apply(console, [value].concat(rest));
        }
    };
    Logger.prototype.error = function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var message = [value].concat(rest).join(' ');
        this.errorHandler.handleError(message);
    };
    Logger.prototype.warn = function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        console.warn.apply(console, [value].concat(rest));
    };
    Logger = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */]])
    ], Logger);
    return Logger;
}());

//# sourceMappingURL=logger.provider.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(191);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallet_wallet_provider__ = __webpack_require__(242);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__wallet_wallet_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_provider__ = __webpack_require__(396);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__loading_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account_provider__ = __webpack_require__(397);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__account_account_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_provider__ = __webpack_require__(243);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__notification_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_storage_provider__ = __webpack_require__(215);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__file_storage_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router__ = __webpack_require__(941);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logger_provider__ = __webpack_require__(401);
/* unused harmony reexport Logger */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Neon=t():e.Neon=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=80)}([function(e,t,r){!function(r,n){e.exports=t=n()}(0,function(){var e=e||function(e,t){var r=Object.create||function(){function e(){}return function(t){var r;return e.prototype=t,r=new e,e.prototype=null,r}}(),n={},i=n.lib={},a=i.Base=function(){return{extend:function(e){var t=r(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),o=i.WordArray=a.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=void 0!=t?t:4*e.length},toString:function(e){return(e||f).stringify(this)},concat:function(e){var t=this.words,r=e.words,n=this.sigBytes,i=e.sigBytes;if(this.clamp(),n%4)for(var a=0;a<i;a++){var o=r[a>>>2]>>>24-a%4*8&255;t[n+a>>>2]|=o<<24-(n+a)%4*8}else for(var a=0;a<i;a+=4)t[n+a>>>2]=r[a>>>2];return this.sigBytes+=i,this},clamp:function(){var t=this.words,r=this.sigBytes;t[r>>>2]&=4294967295<<32-r%4*8,t.length=e.ceil(r/4)},clone:function(){var e=a.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var r,n=[],i=0;i<t;i+=4){var a=function(t){var t=t,r=987654321,n=4294967295;return function(){r=36969*(65535&r)+(r>>16)&n,t=18e3*(65535&t)+(t>>16)&n;var i=(r<<16)+t&n;return i/=4294967296,(i+=.5)*(e.random()>.5?1:-1)}}(4294967296*(r||e.random()));r=987654071*a(),n.push(4294967296*a()|0)}return new o.init(n,t)}}),s=n.enc={},f=s.Hex={stringify:function(e){for(var t=e.words,r=e.sigBytes,n=[],i=0;i<r;i++){var a=t[i>>>2]>>>24-i%4*8&255;n.push((a>>>4).toString(16)),n.push((15&a).toString(16))}return n.join("")},parse:function(e){for(var t=e.length,r=[],n=0;n<t;n+=2)r[n>>>3]|=parseInt(e.substr(n,2),16)<<24-n%8*4;return new o.init(r,t/2)}},u=s.Latin1={stringify:function(e){for(var t=e.words,r=e.sigBytes,n=[],i=0;i<r;i++){var a=t[i>>>2]>>>24-i%4*8&255;n.push(String.fromCharCode(a))}return n.join("")},parse:function(e){for(var t=e.length,r=[],n=0;n<t;n++)r[n>>>2]|=(255&e.charCodeAt(n))<<24-n%4*8;return new o.init(r,t)}},c=s.Utf8={stringify:function(e){try{return decodeURIComponent(escape(u.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return u.parse(unescape(encodeURIComponent(e)))}},h=i.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=c.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var r=this._data,n=r.words,i=r.sigBytes,a=this.blockSize,s=4*a,f=i/s;f=t?e.ceil(f):e.max((0|f)-this._minBufferSize,0);var u=f*a,c=e.min(4*u,i);if(u){for(var h=0;h<u;h+=a)this._doProcessBlock(n,h);var l=n.splice(0,u);r.sigBytes-=c}return new o.init(l,c)},clone:function(){var e=a.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),l=(i.Hasher=h.extend({cfg:a.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){h.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,r){return new e.init(r).finalize(t)}},_createHmacHelper:function(e){return function(t,r){return new l.HMAC.init(e,r).finalize(t)}}}),n.algo={});return n}(Math);return e})},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Fixed8=t.sha256=t.hash256=t.hash160=t.StringStream=t.ensureHex=t.isHex=t.reverseHex=t.reverseArray=t.hexXor=t.num2VarInt=t.fixed82num=t.num2fixed8=t.num2hexstring=t.int2hex=t.hexstring2str=t.str2hexstring=t.ab2hexstring=t.hexstring2ab=t.str2ab=t.ab2str=void 0;var s=function e(t,r,n){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,n)}if("value"in i)return i.value;var o=i.get;if(void 0!==o)return o.call(n)},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=r(62),h=r(155),l=n(h),d=r(40),p=n(d),b=t.ab2str=function(e){return String.fromCharCode.apply(null,new Uint8Array(e))},v=t.str2ab=function(e){if("string"!=typeof e)throw new Error("str2ab expects a string");for(var t=new Uint8Array(e.length),r=0,n=e.length;r<n;r++)t[r]=e.charCodeAt(r);return t},m=t.hexstring2ab=function(e){if(k(e),!e.length)return new Uint8Array;for(var t=e.length/2,r=new Uint8Array(t),n=0;n<t;n++)r[n]=parseInt(e.substring(0,2),16),e=e.substring(2);return r},g=t.ab2hexstring=function(e){if("object"!==(void 0===e?"undefined":u(e)))throw new Error("ab2hexstring expects an array");for(var t="",r=0;r<e.length;r++){var n=e[r].toString(16);n=0===n.length?"00":1===n.length?"0"+n:n,t+=n}return t},y=(t.str2hexstring=function(e){return g(v(e))},t.hexstring2str=function(e){return b(m(e))},t.int2hex=function(e){if("number"!=typeof e)throw new Error("int2hex expects a number");var t=e.toString(16);return t.length%2?"0"+t:t},t.num2hexstring=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("number"!=typeof e)throw new Error("num must be numeric");if(e<0)throw new RangeError("num is unsigned (>= 0)");if(t%1!=0)throw new Error("size must be a whole integer");if(!Number.isSafeInteger(e))throw new RangeError("num ("+e+") must be a safe integer");t*=2;var n=e.toString(16);return n=n.length%t==0?n:("0".repeat(t)+n).substring(n.length),r&&(n=w(n)),n}),w=(t.num2fixed8=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;if("number"!=typeof e)throw new Error("num must be numeric");if(t%1!=0)throw new Error("size must be a whole integer");return new x(e.toFixed(8)).toReverseHex().slice(0,2*t)},t.fixed82num=function(e){return k(e),""===e?0:x.fromReverseHex(e).toNumber()},t.num2VarInt=function(e){return e<253?y(e):e<=65535?"fd"+y(e,2,!0):e<=4294967295?"fe"+y(e,4,!0):"ff"+y(e,8,!0)},t.hexXor=function(e,t){if(k(e),k(t),e.length!==t.length)throw new Error("strings are disparate lengths");for(var r=[],n=0;n<e.length;n+=2)r.push(parseInt(e.substr(n,2),16)^parseInt(t.substr(n,2),16));return g(r)},t.reverseArray=function(e){if("object"!==(void 0===e?"undefined":u(e))||!e.length)throw new Error("reverseArray expects an array");for(var t=new Uint8Array(e.length),r=0;r<e.length;r++)t[r]=e[e.length-1-r];return t},t.reverseHex=function(e){k(e);for(var t="",r=e.length-2;r>=0;r-=2)t+=e.substr(r,2);return t}),_=/^([0-9A-Fa-f]{2})*$/,S=t.isHex=function(e){try{return _.test(e)}catch(e){return!1}},k=t.ensureHex=function(e){if(!S(e))throw new Error("Expected a hexstring but got "+e)},x=(t.StringStream=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";o(this,e),this.str=t,this.pter=0}return f(e,[{key:"isEmpty",value:function(){return this.pter>=this.str.length}},{key:"read",value:function(e){if(this.isEmpty())throw new Error;var t=this.str.substr(this.pter,2*e);return this.pter+=2*e,t}},{key:"readVarBytes",value:function(){return this.read(this.readVarInt())}},{key:"readVarInt",value:function(){var e=parseInt(this.read(1),16);return 253===e?e=parseInt(w(this.read(2)),16):254===e?e=parseInt(w(this.read(4)),16):255===e&&(e=parseInt(w(this.read(8)),16)),e}}]),e}(),t.hash160=function(e){if("string"!=typeof e)throw new Error("reverseHex expects a string");if(e.length%2!=0)throw new Error("Incorrect Length: "+e);var t=c.enc.Hex.parse(e),r=(0,c.SHA256)(t);return(0,c.RIPEMD160)(r).toString()},t.hash256=function(e){if("string"!=typeof e)throw new Error("reverseHex expects a string");if(e.length%2!=0)throw new Error("Incorrect Length: "+e);var t=c.enc.Hex.parse(e),r=(0,c.SHA256)(t);return(0,c.SHA256)(r).toString()},t.sha256=function(e){if("string"!=typeof e)throw new Error("reverseHex expects a string");if(e.length%2!=0)throw new Error("Incorrect Length: "+e);var t=c.enc.Hex.parse(e);return(0,c.SHA256)(t).toString()},t.Fixed8=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return o(this,t),"number"==typeof e&&(e=e.toFixed(8)),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return a(t,e),f(t,[{key:"toHex",value:function(){var e=this.mul(1e8).round().toString(16);return"0".repeat(16-e.length)+e}},{key:"toReverseHex",value:function(){return w(this.toHex())}},{key:p.default.inspect.custom,value:function(e,t){return this.toFixed(8)}},{key:"ceil",value:function(){return new t(s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"ceil",this).call(this))}},{key:"floor",value:function(){return new t(s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"floor",this).call(this))}},{key:"round",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return new t(s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"round",this).call(this,e,r))}},{key:"div",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.dividedBy(e,t)}},{key:"dividedBy",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return new t(s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"dividedBy",this).call(this,e,r))}},{key:"mul",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.times(e,t)}},{key:"times",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return new t(s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"times",this).call(this,e,r))}},{key:"add",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.plus(e,t)}},{key:"plus",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return new t(s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"plus",this).call(this,e,r))}},{key:"sub",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.minus(e,t)}},{key:"minus",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return new t(s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"minus",this).call(this,e,r))}}],[{key:"fromHex",value:function(e){return new t(e,16).div(1e8)}},{key:"fromReverseHex",value:function(e){return this.fromHex(w(e))}}]),t}(l.default))},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(16))}(0,function(e){e.lib.Cipher||function(t){var r=e,n=r.lib,i=n.Base,a=n.WordArray,o=n.BufferedBlockAlgorithm,s=r.enc,f=(s.Utf8,s.Base64),u=r.algo,c=u.EvpKDF,h=n.Cipher=o.extend({cfg:i.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,r){this.cfg=this.cfg.extend(r),this._xformMode=e,this._key=t,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?k:w}return function(t){return{encrypt:function(r,n,i){return e(n).encrypt(t,r,n,i)},decrypt:function(r,n,i){return e(n).decrypt(t,r,n,i)}}}}()}),l=(n.StreamCipher=h.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),r.mode={}),d=n.BlockCipherMode=i.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),p=l.CBC=function(){function e(e,r,n){var i=this._iv;if(i){var a=i;this._iv=t}else var a=this._prevBlock;for(var o=0;o<n;o++)e[r+o]^=a[o]}var r=d.extend();return r.Encryptor=r.extend({processBlock:function(t,r){var n=this._cipher,i=n.blockSize;e.call(this,t,r,i),n.encryptBlock(t,r),this._prevBlock=t.slice(r,r+i)}}),r.Decryptor=r.extend({processBlock:function(t,r){var n=this._cipher,i=n.blockSize,a=t.slice(r,r+i);n.decryptBlock(t,r),e.call(this,t,r,i),this._prevBlock=a}}),r}(),b=r.pad={},v=b.Pkcs7={pad:function(e,t){for(var r=4*t,n=r-e.sigBytes%r,i=n<<24|n<<16|n<<8|n,o=[],s=0;s<n;s+=4)o.push(i);var f=a.create(o,n);e.concat(f)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},m=(n.BlockCipher=h.extend({cfg:h.cfg.extend({mode:p,padding:v}),reset:function(){h.reset.call(this);var e=this.cfg,t=e.iv,r=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var n=r.createEncryptor;else{var n=r.createDecryptor;this._minBufferSize=1}this._mode&&this._mode.__creator==n?this._mode.init(this,t&&t.words):(this._mode=n.call(r,this,t&&t.words),this._mode.__creator=n)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(!0)}else{var t=this._process(!0);e.unpad(t)}return t},blockSize:4}),n.CipherParams=i.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}})),g=r.format={},y=g.OpenSSL={stringify:function(e){var t=e.ciphertext,r=e.salt;if(r)var n=a.create([1398893684,1701076831]).concat(r).concat(t);else var n=t;return n.toString(f)},parse:function(e){var t=f.parse(e),r=t.words;if(1398893684==r[0]&&1701076831==r[1]){var n=a.create(r.slice(2,4));r.splice(0,4),t.sigBytes-=16}return m.create({ciphertext:t,salt:n})}},w=n.SerializableCipher=i.extend({cfg:i.extend({format:y}),encrypt:function(e,t,r,n){n=this.cfg.extend(n);var i=e.createEncryptor(r,n),a=i.finalize(t),o=i.cfg;return m.create({ciphertext:a,key:r,iv:o.iv,algorithm:e,mode:o.mode,padding:o.padding,blockSize:e.blockSize,formatter:n.format})},decrypt:function(e,t,r,n){return n=this.cfg.extend(n),t=this._parse(t,n.format),e.createDecryptor(r,n).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),_=r.kdf={},S=_.OpenSSL={execute:function(e,t,r,n){n||(n=a.random(8));var i=c.create({keySize:t+r}).compute(e,n),o=a.create(i.words.slice(t),4*r);return i.sigBytes=4*t,m.create({key:i,iv:o,salt:n})}},k=n.PasswordBasedCipher=w.extend({cfg:w.cfg.extend({kdf:S}),encrypt:function(e,t,r,n){n=this.cfg.extend(n);var i=n.kdf.execute(r,e.keySize,e.ivSize);n.iv=i.iv;var a=w.encrypt.call(this,e,t,i.key,n);return a.mixIn(i),a},decrypt:function(e,t,r,n){n=this.cfg.extend(n),t=this._parse(t,n.format);var i=n.kdf.execute(r,e.keySize,e.ivSize,t.salt);return n.iv=i.iv,w.decrypt.call(this,e,t,i.key,n)}})}()})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ADDR_VERSION="17",t.ASSETS={NEO:"NEO",c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b:"NEO",GAS:"GAS","602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7":"GAS"},t.ASSET_ID={NEO:"c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b",GAS:"602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7"},t.CONTRACTS={RPX:"ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9",TEST_RPX:"5b7074e873973a6ed3708862f219a6fbf4d1c411",TEST_LWTF:"d7678dd97c000be3f33e9362e673101bac4ca654",TEST_NXT:"0b6c1f919e95fe61c17a7612aebfaf4fda3a2214",TEST_RHTT4:"f9572c5b119a6b5775a6af07f1cef5d310038f55"},t.TEST_NXT_ADDRESS="AHcLAfnvzzHyuPPULeXrXZ6RK3Hkdvi1qi",t.DEFAULT_RPC={MAIN:"https://seed1.neo.org:10331",TEST:"https://seed1.neo.org:20331"},t.DEFAULT_REQ={jsonrpc:"2.0",method:"getblockcount",params:[],id:1234},t.DEFAULT_SCRYPT={cost:16384,blockSize:8,parallel:8,size:64},t.DEFAULT_WALLET={name:"myWallet",version:"1.0",scrypt:{},accounts:[],extra:null},t.DEFAULT_ACCOUNT_CONTRACT={script:"",parameters:[{name:"signature",type:"Signature"}],deployed:!1},t.NEO_NETWORK={MAIN:"MainNet",TEST:"TestNet"},t.NEP_HEADER="0142",t.NEP_FLAG="e0",t.RPC_VERSION="2.3.2",t.TX_VERSION={CLAIM:0,CONTRACT:0,INVOCATION:1}},function(e,t,r){function n(e,t){for(var r in e)t[r]=e[r]}function i(e,t,r){return o(e,t,r)}var a=r(7),o=a.Buffer;o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?e.exports=a:(n(a,t),t.Buffer=i),n(o,i),i.from=function(e,t,r){if("number"==typeof e)throw new TypeError("Argument must not be a number");return o(e,t,r)},i.alloc=function(e,t,r){if("number"!=typeof e)throw new TypeError("Argument must be a number");var n=o(e);return void 0!==t?"string"==typeof r?n.fill(t,r):n.fill(t):n.fill(0),n},i.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return o(e)},i.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return a.SlowBuffer(e)}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.logger=void 0;var i=r(168),a=n(i),o=r(169),s=n(o);a.default.setDefaultLevel("silent"),a.default.setAll=function(e){Object.keys(a.default.getLoggers()).map(function(t){a.default.getLogger(t).setLevel(e)})};var f=function(e,t){var r=(new Date).toUTCString();return e=e.toUpperCase(),"["+r+"] ("+t+") "+e+": "};t.default=function(e){var t=a.default.getLogger(e);return s.default.apply(t,{format:f}),t};t.logger=a.default},function(e,t,r){"use strict";(function(e){function n(){return a.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(e,t){if(n()<t)throw new RangeError("Invalid typed array length");return a.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t),e.__proto__=a.prototype):(null===e&&(e=new a(t)),e.length=t),e}function a(e,t,r){if(!(a.TYPED_ARRAY_SUPPORT||this instanceof a))return new a(e,t,r);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return u(this,e)}return o(this,e,t,r)}function o(e,t,r,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?l(e,t,r,n):"string"==typeof t?c(e,t,r):d(e,t)}function s(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function f(e,t,r,n){return s(t),t<=0?i(e,t):void 0!==r?"string"==typeof n?i(e,t).fill(r,n):i(e,t).fill(r):i(e,t)}function u(e,t){if(s(t),e=i(e,t<0?0:0|p(t)),!a.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function c(e,t,r){if("string"==typeof r&&""!==r||(r="utf8"),!a.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|v(t,r);e=i(e,n);var o=e.write(t,r);return o!==n&&(e=e.slice(0,o)),e}function h(e,t){var r=t.length<0?0:0|p(t.length);e=i(e,r);for(var n=0;n<r;n+=1)e[n]=255&t[n];return e}function l(e,t,r,n){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return t=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n),a.TYPED_ARRAY_SUPPORT?(e=t,e.__proto__=a.prototype):e=h(e,t),e}function d(e,t){if(a.isBuffer(t)){var r=0|p(t.length);return e=i(e,r),0===e.length?e:(t.copy(e,0,0,r),e)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||Z(t.length)?i(e,0):h(e,t);if("Buffer"===t.type&&$(t.data))return h(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function p(e){if(e>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|e}function b(e){return+e!=e&&(e=0),a.alloc(+e)}function v(e,t){if(a.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return K(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return W(e).length;default:if(n)return K(e).length;t=(""+t).toLowerCase(),n=!0}}function m(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,t>>>=0,r<=t)return"";for(e||(e="utf8");;)switch(e){case"hex":return B(this,t,r);case"utf8":case"utf-8":return I(this,t,r);case"ascii":return P(this,t,r);case"latin1":case"binary":return R(this,t,r);case"base64":return E(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function g(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function y(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=a.from(t,n)),a.isBuffer(t))return 0===t.length?-1:w(e,t,r,n,i);if("number"==typeof t)return t&=255,a.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):w(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function w(e,t,r,n,i){function a(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}var o=1,s=e.length,f=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;o=2,s/=2,f/=2,r/=2}var u;if(i){var c=-1;for(u=r;u<s;u++)if(a(e,u)===a(t,-1===c?0:u-c)){if(-1===c&&(c=u),u-c+1===f)return c*o}else-1!==c&&(u-=u-c),c=-1}else for(r+f>s&&(r=s-f),u=r;u>=0;u--){for(var h=!0,l=0;l<f;l++)if(a(e,u+l)!==a(t,l)){h=!1;break}if(h)return u}return-1}function _(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var a=t.length;if(a%2!=0)throw new TypeError("Invalid hex string");n>a/2&&(n=a/2);for(var o=0;o<n;++o){var s=parseInt(t.substr(2*o,2),16);if(isNaN(s))return o;e[r+o]=s}return o}function S(e,t,r,n){return X(K(t,e.length-r),e,r,n)}function k(e,t,r,n){return X(Y(t),e,r,n)}function x(e,t,r,n){return k(e,t,r,n)}function A(e,t,r,n){return X(W(t),e,r,n)}function M(e,t,r,n){return X(V(t,e.length-r),e,r,n)}function E(e,t,r){return 0===t&&r===e.length?G.fromByteArray(e):G.fromByteArray(e.slice(t,r))}function I(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var a=e[i],o=null,s=a>239?4:a>223?3:a>191?2:1;if(i+s<=r){var f,u,c,h;switch(s){case 1:a<128&&(o=a);break;case 2:f=e[i+1],128==(192&f)&&(h=(31&a)<<6|63&f)>127&&(o=h);break;case 3:f=e[i+1],u=e[i+2],128==(192&f)&&128==(192&u)&&(h=(15&a)<<12|(63&f)<<6|63&u)>2047&&(h<55296||h>57343)&&(o=h);break;case 4:f=e[i+1],u=e[i+2],c=e[i+3],128==(192&f)&&128==(192&u)&&128==(192&c)&&(h=(15&a)<<18|(63&f)<<12|(63&u)<<6|63&c)>65535&&h<1114112&&(o=h)}}null===o?(o=65533,s=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return T(n)}function T(e){var t=e.length;if(t<=J)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=J));return r}function P(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function R(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function B(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",a=t;a<r;++a)i+=q(e[a]);return i}function C(e,t,r){for(var n=e.slice(t,r),i="",a=0;a<n.length;a+=2)i+=String.fromCharCode(n[a]+256*n[a+1]);return i}function O(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function N(e,t,r,n,i,o){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function j(e,t,r,n){t<0&&(t=65535+t+1);for(var i=0,a=Math.min(e.length-r,2);i<a;++i)e[r+i]=(t&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function z(e,t,r,n){t<0&&(t=4294967295+t+1);for(var i=0,a=Math.min(e.length-r,4);i<a;++i)e[r+i]=t>>>8*(n?i:3-i)&255}function L(e,t,r,n,i,a){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function F(e,t,r,n,i){return i||L(e,t,r,4,3.4028234663852886e38,-3.4028234663852886e38),Q.write(e,t,r,n,23,4),r+4}function H(e,t,r,n,i){return i||L(e,t,r,8,1.7976931348623157e308,-1.7976931348623157e308),Q.write(e,t,r,n,52,8),r+8}function U(e){if(e=D(e).replace(ee,""),e.length<2)return"";for(;e.length%4!=0;)e+="=";return e}function D(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function q(e){return e<16?"0"+e.toString(16):e.toString(16)}function K(e,t){t=t||1/0;for(var r,n=e.length,i=null,a=[],o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&a.push(239,191,189);continue}if(o+1===n){(t-=3)>-1&&a.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&a.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;a.push(r)}else if(r<2048){if((t-=2)<0)break;a.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;a.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return a}function Y(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}function V(e,t){for(var r,n,i,a=[],o=0;o<e.length&&!((t-=2)<0);++o)r=e.charCodeAt(o),n=r>>8,i=r%256,a.push(i),a.push(n);return a}function W(e){return G.toByteArray(U(e))}function X(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function Z(e){return e!==e}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var G=r(83),Q=r(84),$=r(48);t.Buffer=a,t.SlowBuffer=b,t.INSPECT_MAX_BYTES=50,a.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=n(),a.poolSize=8192,a._augment=function(e){return e.__proto__=a.prototype,e},a.from=function(e,t,r){return o(null,e,t,r)},a.TYPED_ARRAY_SUPPORT&&(a.prototype.__proto__=Uint8Array.prototype,a.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&a[Symbol.species]===a&&Object.defineProperty(a,Symbol.species,{value:null,configurable:!0})),a.alloc=function(e,t,r){return f(null,e,t,r)},a.allocUnsafe=function(e){return u(null,e)},a.allocUnsafeSlow=function(e){return u(null,e)},a.isBuffer=function(e){return!(null==e||!e._isBuffer)},a.compare=function(e,t){if(!a.isBuffer(e)||!a.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,n=t.length,i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!$(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return a.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=a.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var o=e[r];if(!a.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},a.byteLength=v,a.prototype._isBuffer=!0,a.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)g(this,t,t+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},a.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?I(this,0,e):m.apply(this,arguments)},a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===a.compare(this,e)},a.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(e+=" ... ")),"<Buffer "+e+">"},a.prototype.compare=function(e,t,r,n,i){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;for(var o=i-n,s=r-t,f=Math.min(o,s),u=this.slice(n,i),c=e.slice(t,r),h=0;h<f;++h)if(u[h]!==c[h]){o=u[h],s=c[h];break}return o<s?-1:s<o?1:0},a.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},a.prototype.indexOf=function(e,t,r){return y(this,e,t,r,!0)},a.prototype.lastIndexOf=function(e,t,r){return y(this,e,t,r,!1)},a.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var a=!1;;)switch(n){case"hex":return _(this,e,t,r);case"utf8":case"utf-8":return S(this,e,t,r);case"ascii":return k(this,e,t,r);case"latin1":case"binary":return x(this,e,t,r);case"base64":return A(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return M(this,e,t,r);default:if(a)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),a=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var J=4096;a.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n;if(a.TYPED_ARRAY_SUPPORT)n=this.subarray(e,t),n.__proto__=a.prototype;else{var i=t-e;n=new a(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+e]}return n},a.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||O(e,t,this.length);for(var n=this[e],i=1,a=0;++a<t&&(i*=256);)n+=this[e+a]*i;return n},a.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||O(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},a.prototype.readUInt8=function(e,t){return t||O(e,1,this.length),this[e]},a.prototype.readUInt16LE=function(e,t){return t||O(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUInt16BE=function(e,t){return t||O(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUInt32LE=function(e,t){return t||O(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},a.prototype.readUInt32BE=function(e,t){return t||O(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||O(e,t,this.length);for(var n=this[e],i=1,a=0;++a<t&&(i*=256);)n+=this[e+a]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*t)),n},a.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||O(e,t,this.length);for(var n=t,i=1,a=this[e+--n];n>0&&(i*=256);)a+=this[e+--n]*i;return i*=128,a>=i&&(a-=Math.pow(2,8*t)),a},a.prototype.readInt8=function(e,t){return t||O(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},a.prototype.readInt16LE=function(e,t){t||O(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt16BE=function(e,t){t||O(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt32LE=function(e,t){return t||O(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return t||O(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return t||O(e,4,this.length),Q.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return t||O(e,4,this.length),Q.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return t||O(e,8,this.length),Q.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return t||O(e,8,this.length),Q.read(this,e,!1,52,8)},a.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t|=0,r|=0,!n){N(this,e,t,r,Math.pow(2,8*r)-1,0)}var i=1,a=0;for(this[t]=255&e;++a<r&&(i*=256);)this[t+a]=e/i&255;return t+r},a.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t|=0,r|=0,!n){N(this,e,t,r,Math.pow(2,8*r)-1,0)}var i=r-1,a=1;for(this[t+i]=255&e;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+r},a.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||N(this,e,t,1,255,0),a.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},a.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||N(this,e,t,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):j(this,e,t,!0),t+2},a.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||N(this,e,t,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):j(this,e,t,!1),t+2},a.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||N(this,e,t,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):z(this,e,t,!0),t+4},a.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||N(this,e,t,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):z(this,e,t,!1),t+4},a.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t|=0,!n){var i=Math.pow(2,8*r-1);N(this,e,t,r,i-1,-i)}var a=0,o=1,s=0;for(this[t]=255&e;++a<r&&(o*=256);)e<0&&0===s&&0!==this[t+a-1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+r},a.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t|=0,!n){var i=Math.pow(2,8*r-1);N(this,e,t,r,i-1,-i)}var a=r-1,o=1,s=0;for(this[t+a]=255&e;--a>=0&&(o*=256);)e<0&&0===s&&0!==this[t+a+1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+r},a.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||N(this,e,t,1,127,-128),a.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},a.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||N(this,e,t,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):j(this,e,t,!0),t+2},a.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||N(this,e,t,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):j(this,e,t,!1),t+2},a.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||N(this,e,t,4,2147483647,-2147483648),a.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):z(this,e,t,!0),t+4},a.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||N(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),a.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):z(this,e,t,!1),t+4},a.prototype.writeFloatLE=function(e,t,r){return F(this,e,t,!0,r)},a.prototype.writeFloatBE=function(e,t,r){return F(this,e,t,!1,r)},a.prototype.writeDoubleLE=function(e,t,r){return H(this,e,t,!0,r)},a.prototype.writeDoubleBE=function(e,t,r){return H(this,e,t,!1,r)},a.prototype.copy=function(e,t,r,n){if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i,o=n-r;if(this===e&&r<t&&t<n)for(i=o-1;i>=0;--i)e[i+t]=this[i+r];else if(o<1e3||!a.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)e[i+t]=this[i+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+o),t);return o},a.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===e.length){var i=e.charCodeAt(0);i<256&&(e=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0);var o;if("number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var s=a.isBuffer(e)?e:K(new a(e,n).toString()),f=s.length;for(o=0;o<r-t;++o)this[o+t]=s[o%f]}return this};var ee=/[^+\/0-9A-Za-z-_]/g}).call(t,r(17))},function(e,t,r){"use strict";var n=t;n.version=r(108).version,n.utils=r(109),n.rand=r(111),n.curve=r(26),n.curves=r(117),n.ec=r(125),n.eddsa=r(129)},function(e,t,r){"use strict";function n(e){return"[object Array]"===x.call(e)}function i(e){return"[object ArrayBuffer]"===x.call(e)}function a(e){return"undefined"!=typeof FormData&&e instanceof FormData}function o(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function f(e){return"number"==typeof e}function u(e){return void 0===e}function c(e){return null!==e&&"object"==typeof e}function h(e){return"[object Date]"===x.call(e)}function l(e){return"[object File]"===x.call(e)}function d(e){return"[object Blob]"===x.call(e)}function p(e){return"[object Function]"===x.call(e)}function b(e){return c(e)&&p(e.pipe)}function v(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function m(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function y(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),n(e))for(var r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function w(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=w(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)y(arguments[r],e);return t}function _(e,t,r){return y(t,function(t,n){e[n]=r&&"function"==typeof t?S(t,r):t}),e}var S=r(73),k=r(177),x=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:i,isBuffer:k,isFormData:a,isArrayBufferView:o,isString:s,isNumber:f,isObject:c,isUndefined:u,isDate:h,isFile:l,isBlob:d,isFunction:p,isStream:b,isURLSearchParams:v,isStandardBrowserEnv:g,forEach:y,merge:w,extend:_,trim:m}},function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function i(e){if(c===setTimeout)return setTimeout(e,0);if((c===r||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function a(e){if(h===clearTimeout)return clearTimeout(e);if((h===n||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(e);try{return h(e)}catch(t){try{return h.call(null,e)}catch(t){return h.call(this,e)}}}function o(){b&&d&&(b=!1,d.length?p=d.concat(p):v=-1,p.length&&s())}function s(){if(!b){var e=i(o);b=!0;for(var t=p.length;t;){for(d=p,p=[];++v<t;)d&&d[v].run();v=-1,t=p.length}d=null,b=!1,a(e)}}function f(e,t){this.fun=e,this.array=t}function u(){}var c,h,l=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:r}catch(e){c=r}try{h="function"==typeof clearTimeout?clearTimeout:n}catch(e){h=n}}();var d,p=[],b=!1,v=-1;l.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];p.push(new f(e,t)),1!==p.length||b||i(s)},f.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=u,l.addListener=u,l.once=u,l.off=u,l.removeListener=u,l.removeAllListeners=u,l.emit=u,l.prependListener=u,l.prependOnceListener=u,l.listeners=function(e){return[]},l.binding=function(e){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.Claims=t.Wallet=t.Balance=t.Account=void 0;var a=r(30);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var o=r(65);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var s=r(66);Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})});var f=r(43);Object.keys(f).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}})});var u=i(a),c=i(o),h=i(s),l=r(42),d=n(l),p=r(170),b=n(p),v=r(195),m=n(v),g=r(196),y=n(g);t.default={create:{account:function(e){return new d.default(e)},privateKey:u.generatePrivateKey,signature:u.generateSignature,wallet:function(e){return new m.default(e)}},is:{address:c.isAddress,publicKey:c.isPublicKey,encryptedKey:c.isNEP2,privateKey:c.isPrivateKey,wif:c.isWIF},encrypt:{privateKey:h.encrypt},decrypt:{privateKey:h.decrypt},get:{privateKeyFromWIF:u.getPrivateKeyFromWIF,WIFFromPrivateKey:u.getWIFFromPrivateKey,publicKeyFromPrivateKey:u.getPublicKeyFromPrivateKey,scriptHashFromPublicKey:u.getScriptHashFromPublicKey,addressFromScriptHash:u.getAddressFromScriptHash,scriptHashFromAddress:u.getScriptHashFromAddress}},t.Account=d.default,t.Balance=b.default,t.Wallet=m.default,t.Claims=y.default},function(e,t,r){"use strict";function n(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"==typeof e)if(t){if("hex"===t)for(e=e.replace(/[^a-z0-9]+/gi,""),e.length%2!=0&&(e="0"+e),n=0;n<e.length;n+=2)r.push(parseInt(e[n]+e[n+1],16))}else for(var n=0;n<e.length;n++){var i=e.charCodeAt(n),a=i>>8,o=255&i;a?r.push(a,o):r.push(o)}else for(n=0;n<e.length;n++)r[n]=0|e[n];return r}function i(e){for(var t="",r=0;r<e.length;r++)t+=s(e[r].toString(16));return t}function a(e){return(e>>>24|e>>>8&65280|e<<8&16711680|(255&e)<<24)>>>0}function o(e,t){for(var r="",n=0;n<e.length;n++){var i=e[n];"little"===t&&(i=a(i)),r+=f(i.toString(16))}return r}function s(e){return 1===e.length?"0"+e:e}function f(e){return 7===e.length?"0"+e:6===e.length?"00"+e:5===e.length?"000"+e:4===e.length?"0000"+e:3===e.length?"00000"+e:2===e.length?"000000"+e:1===e.length?"0000000"+e:e}function u(e,t,r,n){var i=r-t;I(i%4==0);for(var a=new Array(i/4),o=0,s=t;o<a.length;o++,s+=4){var f;f="big"===n?e[s]<<24|e[s+1]<<16|e[s+2]<<8|e[s+3]:e[s+3]<<24|e[s+2]<<16|e[s+1]<<8|e[s],a[o]=f>>>0}return a}function c(e,t){for(var r=new Array(4*e.length),n=0,i=0;n<e.length;n++,i+=4){var a=e[n];"big"===t?(r[i]=a>>>24,r[i+1]=a>>>16&255,r[i+2]=a>>>8&255,r[i+3]=255&a):(r[i+3]=a>>>24,r[i+2]=a>>>16&255,r[i+1]=a>>>8&255,r[i]=255&a)}return r}function h(e,t){return e>>>t|e<<32-t}function l(e,t){return e<<t|e>>>32-t}function d(e,t){return e+t>>>0}function p(e,t,r){return e+t+r>>>0}function b(e,t,r,n){return e+t+r+n>>>0}function v(e,t,r,n,i){return e+t+r+n+i>>>0}function m(e,t,r,n){var i=e[t],a=e[t+1],o=n+a>>>0,s=(o<n?1:0)+r+i;e[t]=s>>>0,e[t+1]=o}function g(e,t,r,n){return(t+n>>>0<t?1:0)+e+r>>>0}function y(e,t,r,n){return t+n>>>0}function w(e,t,r,n,i,a,o,s){var f=0,u=t;return u=u+n>>>0,f+=u<t?1:0,u=u+a>>>0,f+=u<a?1:0,u=u+s>>>0,f+=u<s?1:0,e+r+i+o+f>>>0}function _(e,t,r,n,i,a,o,s){return t+n+a+s>>>0}function S(e,t,r,n,i,a,o,s,f,u){var c=0,h=t;return h=h+n>>>0,c+=h<t?1:0,h=h+a>>>0,c+=h<a?1:0,h=h+s>>>0,c+=h<s?1:0,h=h+u>>>0,c+=h<u?1:0,e+r+i+o+f+c>>>0}function k(e,t,r,n,i,a,o,s,f,u){return t+n+a+s+u>>>0}function x(e,t,r){return(t<<32-r|e>>>r)>>>0}function A(e,t,r){return(e<<32-r|t>>>r)>>>0}function M(e,t,r){return e>>>r}function E(e,t,r){return(e<<32-r|t>>>r)>>>0}var I=r(15),T=r(1);t.inherits=T,t.toArray=n,t.toHex=i,t.htonl=a,t.toHex32=o,t.zero2=s,t.zero8=f,t.join32=u,t.split32=c,t.rotr32=h,t.rotl32=l,t.sum32=d,t.sum32_3=p,t.sum32_4=b,t.sum32_5=v,t.sum64=m,t.sum64_hi=g,t.sum64_lo=y,t.sum64_4_hi=w,t.sum64_4_lo=_,t.sum64_5_hi=S,t.sum64_5_lo=k,t.rotr64_hi=x,t.rotr64_lo=A,t.shr64_hi=M,t.shr64_lo=E},function(e,t,r){(function(e){!function(e,t){"use strict";function n(e,t){if(!e)throw new Error(t||"Assertion failed")}function i(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}function a(e,t,r){if(a.isBN(e))return e;this.negative=0,this.words=null,this.length=0,this.red=null,null!==e&&("le"!==t&&"be"!==t||(r=t,t=10),this._init(e||0,t||10,r||"be"))}function o(e,t,r){for(var n=0,i=Math.min(e.length,r),a=t;a<i;a++){var o=e.charCodeAt(a)-48;n<<=4,n|=o>=49&&o<=54?o-49+10:o>=17&&o<=22?o-17+10:15&o}return n}function s(e,t,r,n){for(var i=0,a=Math.min(e.length,r),o=t;o<a;o++){var s=e.charCodeAt(o)-48;i*=n,i+=s>=49?s-49+10:s>=17?s-17+10:s}return i}function f(e){for(var t=new Array(e.bitLength()),r=0;r<t.length;r++){var n=r/26|0,i=r%26;t[r]=(e.words[n]&1<<i)>>>i}return t}function u(e,t,r){r.negative=t.negative^e.negative;var n=e.length+t.length|0;r.length=n,n=n-1|0;var i=0|e.words[0],a=0|t.words[0],o=i*a,s=67108863&o,f=o/67108864|0;r.words[0]=s;for(var u=1;u<n;u++){for(var c=f>>>26,h=67108863&f,l=Math.min(u,t.length-1),d=Math.max(0,u-e.length+1);d<=l;d++){var p=u-d|0;i=0|e.words[p],a=0|t.words[d],o=i*a+h,c+=o/67108864|0,h=67108863&o}r.words[u]=0|h,f=0|c}return 0!==f?r.words[u]=0|f:r.length--,r.strip()}function c(e,t,r){r.negative=t.negative^e.negative,r.length=e.length+t.length;for(var n=0,i=0,a=0;a<r.length-1;a++){var o=i;i=0;for(var s=67108863&n,f=Math.min(a,t.length-1),u=Math.max(0,a-e.length+1);u<=f;u++){var c=a-u,h=0|e.words[c],l=0|t.words[u],d=h*l,p=67108863&d;o=o+(d/67108864|0)|0,p=p+s|0,s=67108863&p,o=o+(p>>>26)|0,i+=o>>>26,o&=67108863}r.words[a]=s,n=o,o=i}return 0!==n?r.words[a]=n:r.length--,r.strip()}function h(e,t,r){return(new l).mulp(e,t,r)}function l(e,t){this.x=e,this.y=t}function d(e,t){this.name=e,this.p=new a(t,16),this.n=this.p.bitLength(),this.k=new a(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function p(){d.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function b(){d.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function v(){d.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function m(){d.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function g(e){if("string"==typeof e){var t=a._prime(e);this.m=t.p,this.prime=t}else n(e.gtn(1),"modulus must be greater than 1"),this.m=e,this.prime=null}function y(e){g.call(this,e),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new a(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}"object"==typeof e?e.exports=a:t.BN=a,a.BN=a,a.wordSize=26;var w;try{w=r(110).Buffer}catch(e){}a.isBN=function(e){return e instanceof a||null!==e&&"object"==typeof e&&e.constructor.wordSize===a.wordSize&&Array.isArray(e.words)},a.max=function(e,t){return e.cmp(t)>0?e:t},a.min=function(e,t){return e.cmp(t)<0?e:t},a.prototype._init=function(e,t,r){if("number"==typeof e)return this._initNumber(e,t,r);if("object"==typeof e)return this._initArray(e,t,r);"hex"===t&&(t=16),n(t===(0|t)&&t>=2&&t<=36),e=e.toString().replace(/\s+/g,"");var i=0;"-"===e[0]&&i++,16===t?this._parseHex(e,i):this._parseBase(e,t,i),"-"===e[0]&&(this.negative=1),this.strip(),"le"===r&&this._initArray(this.toArray(),t,r)},a.prototype._initNumber=function(e,t,r){e<0&&(this.negative=1,e=-e),e<67108864?(this.words=[67108863&e],this.length=1):e<4503599627370496?(this.words=[67108863&e,e/67108864&67108863],this.length=2):(n(e<9007199254740992),this.words=[67108863&e,e/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),t,r)},a.prototype._initArray=function(e,t,r){if(n("number"==typeof e.length),e.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(e.length/3),this.words=new Array(this.length);for(var i=0;i<this.length;i++)this.words[i]=0;var a,o,s=0;if("be"===r)for(i=e.length-1,a=0;i>=0;i-=3)o=e[i]|e[i-1]<<8|e[i-2]<<16,this.words[a]|=o<<s&67108863,this.words[a+1]=o>>>26-s&67108863,(s+=24)>=26&&(s-=26,a++);else if("le"===r)for(i=0,a=0;i<e.length;i+=3)o=e[i]|e[i+1]<<8|e[i+2]<<16,this.words[a]|=o<<s&67108863,this.words[a+1]=o>>>26-s&67108863,(s+=24)>=26&&(s-=26,a++);return this.strip()},a.prototype._parseHex=function(e,t){this.length=Math.ceil((e.length-t)/6),this.words=new Array(this.length);for(var r=0;r<this.length;r++)this.words[r]=0;var n,i,a=0;for(r=e.length-6,n=0;r>=t;r-=6)i=o(e,r,r+6),this.words[n]|=i<<a&67108863,this.words[n+1]|=i>>>26-a&4194303,(a+=24)>=26&&(a-=26,n++);r+6!==t&&(i=o(e,t,r+6),this.words[n]|=i<<a&67108863,this.words[n+1]|=i>>>26-a&4194303),this.strip()},a.prototype._parseBase=function(e,t,r){this.words=[0],this.length=1;for(var n=0,i=1;i<=67108863;i*=t)n++;n--,i=i/t|0;for(var a=e.length-r,o=a%n,f=Math.min(a,a-o)+r,u=0,c=r;c<f;c+=n)u=s(e,c,c+n,t),this.imuln(i),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u);if(0!==o){var h=1;for(u=s(e,c,e.length,t),c=0;c<o;c++)h*=t;this.imuln(h),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u)}},a.prototype.copy=function(e){e.words=new Array(this.length);for(var t=0;t<this.length;t++)e.words[t]=this.words[t];e.length=this.length,e.negative=this.negative,e.red=this.red},a.prototype.clone=function(){var e=new a(null);return this.copy(e),e},a.prototype._expand=function(e){for(;this.length<e;)this.words[this.length++]=0;return this},a.prototype.strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},a.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},a.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var _=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],S=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],k=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];a.prototype.toString=function(e,t){e=e||10,t=0|t||1;var r;if(16===e||"hex"===e){r="";for(var i=0,a=0,o=0;o<this.length;o++){var s=this.words[o],f=(16777215&(s<<i|a)).toString(16);a=s>>>24-i&16777215,r=0!==a||o!==this.length-1?_[6-f.length]+f+r:f+r,i+=2,i>=26&&(i-=26,o--)}for(0!==a&&(r=a.toString(16)+r);r.length%t!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}if(e===(0|e)&&e>=2&&e<=36){var u=S[e],c=k[e];r="";var h=this.clone();for(h.negative=0;!h.isZero();){var l=h.modn(c).toString(e);h=h.idivn(c),r=h.isZero()?l+r:_[u-l.length]+l+r}for(this.isZero()&&(r="0"+r);r.length%t!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}n(!1,"Base should be between 2 and 36")},a.prototype.toNumber=function(){var e=this.words[0];return 2===this.length?e+=67108864*this.words[1]:3===this.length&&1===this.words[2]?e+=4503599627370496+67108864*this.words[1]:this.length>2&&n(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-e:e},a.prototype.toJSON=function(){return this.toString(16)},a.prototype.toBuffer=function(e,t){return n(void 0!==w),this.toArrayLike(w,e,t)},a.prototype.toArray=function(e,t){return this.toArrayLike(Array,e,t)},a.prototype.toArrayLike=function(e,t,r){var i=this.byteLength(),a=r||Math.max(1,i);n(i<=a,"byte array longer than desired length"),n(a>0,"Requested array length <= 0"),this.strip();var o,s,f="le"===t,u=new e(a),c=this.clone();if(f){for(s=0;!c.isZero();s++)o=c.andln(255),c.iushrn(8),u[s]=o;for(;s<a;s++)u[s]=0}else{for(s=0;s<a-i;s++)u[s]=0;for(s=0;!c.isZero();s++)o=c.andln(255),c.iushrn(8),u[a-s-1]=o}return u},Math.clz32?a.prototype._countBits=function(e){return 32-Math.clz32(e)}:a.prototype._countBits=function(e){var t=e,r=0;return t>=4096&&(r+=13,t>>>=13),t>=64&&(r+=7,t>>>=7),t>=8&&(r+=4,t>>>=4),t>=2&&(r+=2,t>>>=2),r+t},a.prototype._zeroBits=function(e){if(0===e)return 26;var t=e,r=0;return 0==(8191&t)&&(r+=13,t>>>=13),0==(127&t)&&(r+=7,t>>>=7),0==(15&t)&&(r+=4,t>>>=4),0==(3&t)&&(r+=2,t>>>=2),0==(1&t)&&r++,r},a.prototype.bitLength=function(){var e=this.words[this.length-1],t=this._countBits(e);return 26*(this.length-1)+t},a.prototype.zeroBits=function(){if(this.isZero())return 0;for(var e=0,t=0;t<this.length;t++){var r=this._zeroBits(this.words[t]);if(e+=r,26!==r)break}return e},a.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},a.prototype.toTwos=function(e){return 0!==this.negative?this.abs().inotn(e).iaddn(1):this.clone()},a.prototype.fromTwos=function(e){return this.testn(e-1)?this.notn(e).iaddn(1).ineg():this.clone()},a.prototype.isNeg=function(){return 0!==this.negative},a.prototype.neg=function(){return this.clone().ineg()},a.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},a.prototype.iuor=function(e){for(;this.length<e.length;)this.words[this.length++]=0;for(var t=0;t<e.length;t++)this.words[t]=this.words[t]|e.words[t];return this.strip()},a.prototype.ior=function(e){return n(0==(this.negative|e.negative)),this.iuor(e)},a.prototype.or=function(e){return this.length>e.length?this.clone().ior(e):e.clone().ior(this)},a.prototype.uor=function(e){return this.length>e.length?this.clone().iuor(e):e.clone().iuor(this)},a.prototype.iuand=function(e){var t;t=this.length>e.length?e:this;for(var r=0;r<t.length;r++)this.words[r]=this.words[r]&e.words[r];return this.length=t.length,this.strip()},a.prototype.iand=function(e){return n(0==(this.negative|e.negative)),this.iuand(e)},a.prototype.and=function(e){return this.length>e.length?this.clone().iand(e):e.clone().iand(this)},a.prototype.uand=function(e){return this.length>e.length?this.clone().iuand(e):e.clone().iuand(this)},a.prototype.iuxor=function(e){var t,r;this.length>e.length?(t=this,r=e):(t=e,r=this);for(var n=0;n<r.length;n++)this.words[n]=t.words[n]^r.words[n];if(this!==t)for(;n<t.length;n++)this.words[n]=t.words[n];return this.length=t.length,this.strip()},a.prototype.ixor=function(e){return n(0==(this.negative|e.negative)),this.iuxor(e)},a.prototype.xor=function(e){return this.length>e.length?this.clone().ixor(e):e.clone().ixor(this)},a.prototype.uxor=function(e){return this.length>e.length?this.clone().iuxor(e):e.clone().iuxor(this)},a.prototype.inotn=function(e){n("number"==typeof e&&e>=0);var t=0|Math.ceil(e/26),r=e%26;this._expand(t),r>0&&t--;for(var i=0;i<t;i++)this.words[i]=67108863&~this.words[i];return r>0&&(this.words[i]=~this.words[i]&67108863>>26-r),this.strip()},a.prototype.notn=function(e){return this.clone().inotn(e)},a.prototype.setn=function(e,t){n("number"==typeof e&&e>=0);var r=e/26|0,i=e%26;return this._expand(r+1),this.words[r]=t?this.words[r]|1<<i:this.words[r]&~(1<<i),this.strip()},a.prototype.iadd=function(e){var t;if(0!==this.negative&&0===e.negative)return this.negative=0,t=this.isub(e),this.negative^=1,this._normSign();if(0===this.negative&&0!==e.negative)return e.negative=0,t=this.isub(e),e.negative=1,t._normSign();var r,n;this.length>e.length?(r=this,n=e):(r=e,n=this);for(var i=0,a=0;a<n.length;a++)t=(0|r.words[a])+(0|n.words[a])+i,this.words[a]=67108863&t,i=t>>>26;for(;0!==i&&a<r.length;a++)t=(0|r.words[a])+i,this.words[a]=67108863&t,i=t>>>26;if(this.length=r.length,0!==i)this.words[this.length]=i,this.length++;else if(r!==this)for(;a<r.length;a++)this.words[a]=r.words[a];return this},a.prototype.add=function(e){var t;return 0!==e.negative&&0===this.negative?(e.negative=0,t=this.sub(e),e.negative^=1,t):0===e.negative&&0!==this.negative?(this.negative=0,t=e.sub(this),this.negative=1,t):this.length>e.length?this.clone().iadd(e):e.clone().iadd(this)},a.prototype.isub=function(e){if(0!==e.negative){e.negative=0;var t=this.iadd(e);return e.negative=1,t._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(e),this.negative=1,this._normSign();var r=this.cmp(e);if(0===r)return this.negative=0,this.length=1,this.words[0]=0,this;var n,i;r>0?(n=this,i=e):(n=e,i=this);for(var a=0,o=0;o<i.length;o++)t=(0|n.words[o])-(0|i.words[o])+a,a=t>>26,this.words[o]=67108863&t;for(;0!==a&&o<n.length;o++)t=(0|n.words[o])+a,a=t>>26,this.words[o]=67108863&t;if(0===a&&o<n.length&&n!==this)for(;o<n.length;o++)this.words[o]=n.words[o];return this.length=Math.max(this.length,o),n!==this&&(this.negative=1),this.strip()},a.prototype.sub=function(e){return this.clone().isub(e)};var x=function(e,t,r){var n,i,a,o=e.words,s=t.words,f=r.words,u=0,c=0|o[0],h=8191&c,l=c>>>13,d=0|o[1],p=8191&d,b=d>>>13,v=0|o[2],m=8191&v,g=v>>>13,y=0|o[3],w=8191&y,_=y>>>13,S=0|o[4],k=8191&S,x=S>>>13,A=0|o[5],M=8191&A,E=A>>>13,I=0|o[6],T=8191&I,P=I>>>13,R=0|o[7],B=8191&R,C=R>>>13,O=0|o[8],N=8191&O,j=O>>>13,z=0|o[9],L=8191&z,F=z>>>13,H=0|s[0],U=8191&H,D=H>>>13,q=0|s[1],K=8191&q,Y=q>>>13,V=0|s[2],W=8191&V,X=V>>>13,Z=0|s[3],G=8191&Z,Q=Z>>>13,$=0|s[4],J=8191&$,ee=$>>>13,te=0|s[5],re=8191&te,ne=te>>>13,ie=0|s[6],ae=8191&ie,oe=ie>>>13,se=0|s[7],fe=8191&se,ue=se>>>13,ce=0|s[8],he=8191&ce,le=ce>>>13,de=0|s[9],pe=8191&de,be=de>>>13;r.negative=e.negative^t.negative,r.length=19,n=Math.imul(h,U),i=Math.imul(h,D),i=i+Math.imul(l,U)|0,a=Math.imul(l,D);var ve=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(ve>>>26)|0,ve&=67108863,n=Math.imul(p,U),i=Math.imul(p,D),i=i+Math.imul(b,U)|0,a=Math.imul(b,D),n=n+Math.imul(h,K)|0,i=i+Math.imul(h,Y)|0,i=i+Math.imul(l,K)|0,a=a+Math.imul(l,Y)|0;var me=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(me>>>26)|0,me&=67108863,n=Math.imul(m,U),i=Math.imul(m,D),i=i+Math.imul(g,U)|0,a=Math.imul(g,D),n=n+Math.imul(p,K)|0,i=i+Math.imul(p,Y)|0,i=i+Math.imul(b,K)|0,a=a+Math.imul(b,Y)|0,n=n+Math.imul(h,W)|0,i=i+Math.imul(h,X)|0,i=i+Math.imul(l,W)|0,a=a+Math.imul(l,X)|0;var ge=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(ge>>>26)|0,ge&=67108863,n=Math.imul(w,U),i=Math.imul(w,D),i=i+Math.imul(_,U)|0,a=Math.imul(_,D),n=n+Math.imul(m,K)|0,i=i+Math.imul(m,Y)|0,i=i+Math.imul(g,K)|0,a=a+Math.imul(g,Y)|0,n=n+Math.imul(p,W)|0,i=i+Math.imul(p,X)|0,i=i+Math.imul(b,W)|0,a=a+Math.imul(b,X)|0,n=n+Math.imul(h,G)|0,i=i+Math.imul(h,Q)|0,i=i+Math.imul(l,G)|0,a=a+Math.imul(l,Q)|0;var ye=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(ye>>>26)|0,ye&=67108863,n=Math.imul(k,U),i=Math.imul(k,D),i=i+Math.imul(x,U)|0,a=Math.imul(x,D),n=n+Math.imul(w,K)|0,i=i+Math.imul(w,Y)|0,i=i+Math.imul(_,K)|0,a=a+Math.imul(_,Y)|0,n=n+Math.imul(m,W)|0,i=i+Math.imul(m,X)|0,i=i+Math.imul(g,W)|0,a=a+Math.imul(g,X)|0,n=n+Math.imul(p,G)|0,i=i+Math.imul(p,Q)|0,i=i+Math.imul(b,G)|0,a=a+Math.imul(b,Q)|0,n=n+Math.imul(h,J)|0,i=i+Math.imul(h,ee)|0,i=i+Math.imul(l,J)|0,a=a+Math.imul(l,ee)|0;var we=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(we>>>26)|0,we&=67108863,n=Math.imul(M,U),i=Math.imul(M,D),i=i+Math.imul(E,U)|0,a=Math.imul(E,D),n=n+Math.imul(k,K)|0,i=i+Math.imul(k,Y)|0,i=i+Math.imul(x,K)|0,a=a+Math.imul(x,Y)|0,n=n+Math.imul(w,W)|0,i=i+Math.imul(w,X)|0,i=i+Math.imul(_,W)|0,a=a+Math.imul(_,X)|0,n=n+Math.imul(m,G)|0,i=i+Math.imul(m,Q)|0,i=i+Math.imul(g,G)|0,a=a+Math.imul(g,Q)|0,n=n+Math.imul(p,J)|0,i=i+Math.imul(p,ee)|0,i=i+Math.imul(b,J)|0,a=a+Math.imul(b,ee)|0,n=n+Math.imul(h,re)|0,i=i+Math.imul(h,ne)|0,i=i+Math.imul(l,re)|0,a=a+Math.imul(l,ne)|0;var _e=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(_e>>>26)|0,_e&=67108863,n=Math.imul(T,U),i=Math.imul(T,D),i=i+Math.imul(P,U)|0,a=Math.imul(P,D),n=n+Math.imul(M,K)|0,i=i+Math.imul(M,Y)|0,i=i+Math.imul(E,K)|0,a=a+Math.imul(E,Y)|0,n=n+Math.imul(k,W)|0,i=i+Math.imul(k,X)|0,i=i+Math.imul(x,W)|0,a=a+Math.imul(x,X)|0,n=n+Math.imul(w,G)|0,i=i+Math.imul(w,Q)|0,i=i+Math.imul(_,G)|0,a=a+Math.imul(_,Q)|0,n=n+Math.imul(m,J)|0,i=i+Math.imul(m,ee)|0,i=i+Math.imul(g,J)|0,a=a+Math.imul(g,ee)|0,n=n+Math.imul(p,re)|0,i=i+Math.imul(p,ne)|0,i=i+Math.imul(b,re)|0,a=a+Math.imul(b,ne)|0,n=n+Math.imul(h,ae)|0,i=i+Math.imul(h,oe)|0,i=i+Math.imul(l,ae)|0,a=a+Math.imul(l,oe)|0;var Se=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(Se>>>26)|0,Se&=67108863,n=Math.imul(B,U),i=Math.imul(B,D),i=i+Math.imul(C,U)|0,a=Math.imul(C,D),n=n+Math.imul(T,K)|0,i=i+Math.imul(T,Y)|0,i=i+Math.imul(P,K)|0,a=a+Math.imul(P,Y)|0,n=n+Math.imul(M,W)|0,i=i+Math.imul(M,X)|0,i=i+Math.imul(E,W)|0,a=a+Math.imul(E,X)|0,n=n+Math.imul(k,G)|0,i=i+Math.imul(k,Q)|0,i=i+Math.imul(x,G)|0,a=a+Math.imul(x,Q)|0,n=n+Math.imul(w,J)|0,i=i+Math.imul(w,ee)|0,i=i+Math.imul(_,J)|0,a=a+Math.imul(_,ee)|0,n=n+Math.imul(m,re)|0,i=i+Math.imul(m,ne)|0,i=i+Math.imul(g,re)|0,a=a+Math.imul(g,ne)|0,n=n+Math.imul(p,ae)|0,i=i+Math.imul(p,oe)|0,i=i+Math.imul(b,ae)|0,a=a+Math.imul(b,oe)|0,n=n+Math.imul(h,fe)|0,i=i+Math.imul(h,ue)|0,i=i+Math.imul(l,fe)|0,a=a+Math.imul(l,ue)|0;var ke=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(ke>>>26)|0,ke&=67108863,n=Math.imul(N,U),i=Math.imul(N,D),i=i+Math.imul(j,U)|0,a=Math.imul(j,D),n=n+Math.imul(B,K)|0,i=i+Math.imul(B,Y)|0,i=i+Math.imul(C,K)|0,a=a+Math.imul(C,Y)|0,n=n+Math.imul(T,W)|0,i=i+Math.imul(T,X)|0,i=i+Math.imul(P,W)|0,a=a+Math.imul(P,X)|0,n=n+Math.imul(M,G)|0,i=i+Math.imul(M,Q)|0,i=i+Math.imul(E,G)|0,a=a+Math.imul(E,Q)|0,n=n+Math.imul(k,J)|0,i=i+Math.imul(k,ee)|0,i=i+Math.imul(x,J)|0,a=a+Math.imul(x,ee)|0,n=n+Math.imul(w,re)|0,i=i+Math.imul(w,ne)|0,i=i+Math.imul(_,re)|0,a=a+Math.imul(_,ne)|0,n=n+Math.imul(m,ae)|0,i=i+Math.imul(m,oe)|0,i=i+Math.imul(g,ae)|0,a=a+Math.imul(g,oe)|0,n=n+Math.imul(p,fe)|0,i=i+Math.imul(p,ue)|0,i=i+Math.imul(b,fe)|0,a=a+Math.imul(b,ue)|0,n=n+Math.imul(h,he)|0,i=i+Math.imul(h,le)|0,i=i+Math.imul(l,he)|0,a=a+Math.imul(l,le)|0;var xe=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(xe>>>26)|0,xe&=67108863,n=Math.imul(L,U),i=Math.imul(L,D),i=i+Math.imul(F,U)|0,a=Math.imul(F,D),n=n+Math.imul(N,K)|0,i=i+Math.imul(N,Y)|0,i=i+Math.imul(j,K)|0,a=a+Math.imul(j,Y)|0,n=n+Math.imul(B,W)|0,i=i+Math.imul(B,X)|0,i=i+Math.imul(C,W)|0,a=a+Math.imul(C,X)|0,n=n+Math.imul(T,G)|0,i=i+Math.imul(T,Q)|0,i=i+Math.imul(P,G)|0,a=a+Math.imul(P,Q)|0,n=n+Math.imul(M,J)|0,i=i+Math.imul(M,ee)|0,i=i+Math.imul(E,J)|0,a=a+Math.imul(E,ee)|0,n=n+Math.imul(k,re)|0,i=i+Math.imul(k,ne)|0,i=i+Math.imul(x,re)|0,a=a+Math.imul(x,ne)|0,n=n+Math.imul(w,ae)|0,i=i+Math.imul(w,oe)|0,i=i+Math.imul(_,ae)|0,a=a+Math.imul(_,oe)|0,n=n+Math.imul(m,fe)|0,i=i+Math.imul(m,ue)|0,i=i+Math.imul(g,fe)|0,a=a+Math.imul(g,ue)|0,n=n+Math.imul(p,he)|0,i=i+Math.imul(p,le)|0,i=i+Math.imul(b,he)|0,a=a+Math.imul(b,le)|0,n=n+Math.imul(h,pe)|0,i=i+Math.imul(h,be)|0,i=i+Math.imul(l,pe)|0,a=a+Math.imul(l,be)|0;var Ae=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(Ae>>>26)|0,Ae&=67108863,n=Math.imul(L,K),i=Math.imul(L,Y),i=i+Math.imul(F,K)|0,a=Math.imul(F,Y),n=n+Math.imul(N,W)|0,i=i+Math.imul(N,X)|0,i=i+Math.imul(j,W)|0,a=a+Math.imul(j,X)|0,n=n+Math.imul(B,G)|0,i=i+Math.imul(B,Q)|0,i=i+Math.imul(C,G)|0,a=a+Math.imul(C,Q)|0,n=n+Math.imul(T,J)|0,i=i+Math.imul(T,ee)|0,i=i+Math.imul(P,J)|0,a=a+Math.imul(P,ee)|0,n=n+Math.imul(M,re)|0,i=i+Math.imul(M,ne)|0,i=i+Math.imul(E,re)|0,a=a+Math.imul(E,ne)|0,n=n+Math.imul(k,ae)|0,i=i+Math.imul(k,oe)|0,i=i+Math.imul(x,ae)|0,a=a+Math.imul(x,oe)|0,n=n+Math.imul(w,fe)|0,i=i+Math.imul(w,ue)|0,i=i+Math.imul(_,fe)|0,a=a+Math.imul(_,ue)|0,n=n+Math.imul(m,he)|0,i=i+Math.imul(m,le)|0,i=i+Math.imul(g,he)|0,a=a+Math.imul(g,le)|0,n=n+Math.imul(p,pe)|0,i=i+Math.imul(p,be)|0,i=i+Math.imul(b,pe)|0,a=a+Math.imul(b,be)|0;var Me=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(Me>>>26)|0,Me&=67108863,n=Math.imul(L,W),i=Math.imul(L,X),i=i+Math.imul(F,W)|0,a=Math.imul(F,X),n=n+Math.imul(N,G)|0,i=i+Math.imul(N,Q)|0,i=i+Math.imul(j,G)|0,a=a+Math.imul(j,Q)|0,n=n+Math.imul(B,J)|0,i=i+Math.imul(B,ee)|0,i=i+Math.imul(C,J)|0,a=a+Math.imul(C,ee)|0,n=n+Math.imul(T,re)|0,i=i+Math.imul(T,ne)|0,i=i+Math.imul(P,re)|0,a=a+Math.imul(P,ne)|0,n=n+Math.imul(M,ae)|0,i=i+Math.imul(M,oe)|0,i=i+Math.imul(E,ae)|0,a=a+Math.imul(E,oe)|0,n=n+Math.imul(k,fe)|0,i=i+Math.imul(k,ue)|0,i=i+Math.imul(x,fe)|0,a=a+Math.imul(x,ue)|0,n=n+Math.imul(w,he)|0,i=i+Math.imul(w,le)|0,i=i+Math.imul(_,he)|0,a=a+Math.imul(_,le)|0,n=n+Math.imul(m,pe)|0,i=i+Math.imul(m,be)|0,i=i+Math.imul(g,pe)|0,a=a+Math.imul(g,be)|0;var Ee=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(Ee>>>26)|0,Ee&=67108863,n=Math.imul(L,G),i=Math.imul(L,Q),i=i+Math.imul(F,G)|0,a=Math.imul(F,Q),n=n+Math.imul(N,J)|0,i=i+Math.imul(N,ee)|0,i=i+Math.imul(j,J)|0,a=a+Math.imul(j,ee)|0,n=n+Math.imul(B,re)|0,i=i+Math.imul(B,ne)|0,i=i+Math.imul(C,re)|0,a=a+Math.imul(C,ne)|0,n=n+Math.imul(T,ae)|0,i=i+Math.imul(T,oe)|0,i=i+Math.imul(P,ae)|0,a=a+Math.imul(P,oe)|0,n=n+Math.imul(M,fe)|0,i=i+Math.imul(M,ue)|0,i=i+Math.imul(E,fe)|0,a=a+Math.imul(E,ue)|0,n=n+Math.imul(k,he)|0,i=i+Math.imul(k,le)|0,i=i+Math.imul(x,he)|0,a=a+Math.imul(x,le)|0,n=n+Math.imul(w,pe)|0,i=i+Math.imul(w,be)|0,i=i+Math.imul(_,pe)|0,a=a+Math.imul(_,be)|0;var Ie=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(Ie>>>26)|0,Ie&=67108863,n=Math.imul(L,J),i=Math.imul(L,ee),i=i+Math.imul(F,J)|0,a=Math.imul(F,ee),n=n+Math.imul(N,re)|0,i=i+Math.imul(N,ne)|0,i=i+Math.imul(j,re)|0,a=a+Math.imul(j,ne)|0,n=n+Math.imul(B,ae)|0,i=i+Math.imul(B,oe)|0,i=i+Math.imul(C,ae)|0,a=a+Math.imul(C,oe)|0,n=n+Math.imul(T,fe)|0,i=i+Math.imul(T,ue)|0,i=i+Math.imul(P,fe)|0,a=a+Math.imul(P,ue)|0,n=n+Math.imul(M,he)|0,i=i+Math.imul(M,le)|0,i=i+Math.imul(E,he)|0,a=a+Math.imul(E,le)|0,n=n+Math.imul(k,pe)|0,i=i+Math.imul(k,be)|0,i=i+Math.imul(x,pe)|0,a=a+Math.imul(x,be)|0;var Te=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(Te>>>26)|0,Te&=67108863,n=Math.imul(L,re),i=Math.imul(L,ne),i=i+Math.imul(F,re)|0,a=Math.imul(F,ne),n=n+Math.imul(N,ae)|0,i=i+Math.imul(N,oe)|0,i=i+Math.imul(j,ae)|0,a=a+Math.imul(j,oe)|0,n=n+Math.imul(B,fe)|0,i=i+Math.imul(B,ue)|0,i=i+Math.imul(C,fe)|0,a=a+Math.imul(C,ue)|0,n=n+Math.imul(T,he)|0,i=i+Math.imul(T,le)|0,i=i+Math.imul(P,he)|0,a=a+Math.imul(P,le)|0,n=n+Math.imul(M,pe)|0,i=i+Math.imul(M,be)|0,i=i+Math.imul(E,pe)|0,a=a+Math.imul(E,be)|0;var Pe=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(Pe>>>26)|0,Pe&=67108863,n=Math.imul(L,ae),i=Math.imul(L,oe),i=i+Math.imul(F,ae)|0,a=Math.imul(F,oe),n=n+Math.imul(N,fe)|0,i=i+Math.imul(N,ue)|0,i=i+Math.imul(j,fe)|0,a=a+Math.imul(j,ue)|0,n=n+Math.imul(B,he)|0,i=i+Math.imul(B,le)|0,i=i+Math.imul(C,he)|0,a=a+Math.imul(C,le)|0,n=n+Math.imul(T,pe)|0,i=i+Math.imul(T,be)|0,i=i+Math.imul(P,pe)|0,a=a+Math.imul(P,be)|0;var Re=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(Re>>>26)|0,Re&=67108863,n=Math.imul(L,fe),i=Math.imul(L,ue),i=i+Math.imul(F,fe)|0,a=Math.imul(F,ue),n=n+Math.imul(N,he)|0,i=i+Math.imul(N,le)|0,i=i+Math.imul(j,he)|0,a=a+Math.imul(j,le)|0,n=n+Math.imul(B,pe)|0,i=i+Math.imul(B,be)|0,i=i+Math.imul(C,pe)|0,a=a+Math.imul(C,be)|0;var Be=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(Be>>>26)|0,Be&=67108863,n=Math.imul(L,he),i=Math.imul(L,le),i=i+Math.imul(F,he)|0,a=Math.imul(F,le),n=n+Math.imul(N,pe)|0,i=i+Math.imul(N,be)|0,i=i+Math.imul(j,pe)|0,a=a+Math.imul(j,be)|0;var Ce=(u+n|0)+((8191&i)<<13)|0;u=(a+(i>>>13)|0)+(Ce>>>26)|0,Ce&=67108863,n=Math.imul(L,pe),i=Math.imul(L,be),i=i+Math.imul(F,pe)|0,a=Math.imul(F,be);var Oe=(u+n|0)+((8191&i)<<13)|0;return u=(a+(i>>>13)|0)+(Oe>>>26)|0,Oe&=67108863,f[0]=ve,f[1]=me,f[2]=ge,f[3]=ye,f[4]=we,f[5]=_e,f[6]=Se,f[7]=ke,f[8]=xe,f[9]=Ae,f[10]=Me,f[11]=Ee,f[12]=Ie,f[13]=Te,f[14]=Pe,f[15]=Re,f[16]=Be,f[17]=Ce,f[18]=Oe,0!==u&&(f[19]=u,r.length++),r};Math.imul||(x=u),a.prototype.mulTo=function(e,t){var r=this.length+e.length;return 10===this.length&&10===e.length?x(this,e,t):r<63?u(this,e,t):r<1024?c(this,e,t):h(this,e,t)},l.prototype.makeRBT=function(e){for(var t=new Array(e),r=a.prototype._countBits(e)-1,n=0;n<e;n++)t[n]=this.revBin(n,r,e);return t},l.prototype.revBin=function(e,t,r){if(0===e||e===r-1)return e;for(var n=0,i=0;i<t;i++)n|=(1&e)<<t-i-1,e>>=1;return n},l.prototype.permute=function(e,t,r,n,i,a){for(var o=0;o<a;o++)n[o]=t[e[o]],i[o]=r[e[o]]},l.prototype.transform=function(e,t,r,n,i,a){this.permute(a,e,t,r,n,i);for(var o=1;o<i;o<<=1)for(var s=o<<1,f=Math.cos(2*Math.PI/s),u=Math.sin(2*Math.PI/s),c=0;c<i;c+=s)for(var h=f,l=u,d=0;d<o;d++){var p=r[c+d],b=n[c+d],v=r[c+d+o],m=n[c+d+o],g=h*v-l*m;m=h*m+l*v,v=g,r[c+d]=p+v,n[c+d]=b+m,r[c+d+o]=p-v,n[c+d+o]=b-m,d!==s&&(g=f*h-u*l,l=f*l+u*h,h=g)}},l.prototype.guessLen13b=function(e,t){var r=1|Math.max(t,e),n=1&r,i=0;for(r=r/2|0;r;r>>>=1)i++;return 1<<i+1+n},l.prototype.conjugate=function(e,t,r){if(!(r<=1))for(var n=0;n<r/2;n++){var i=e[n];e[n]=e[r-n-1],e[r-n-1]=i,i=t[n],t[n]=-t[r-n-1],t[r-n-1]=-i}},l.prototype.normalize13b=function(e,t){for(var r=0,n=0;n<t/2;n++){var i=8192*Math.round(e[2*n+1]/t)+Math.round(e[2*n]/t)+r;e[n]=67108863&i,r=i<67108864?0:i/67108864|0}return e},l.prototype.convert13b=function(e,t,r,i){for(var a=0,o=0;o<t;o++)a+=0|e[o],r[2*o]=8191&a,a>>>=13,r[2*o+1]=8191&a,a>>>=13;for(o=2*t;o<i;++o)r[o]=0;n(0===a),n(0==(-8192&a))},l.prototype.stub=function(e){for(var t=new Array(e),r=0;r<e;r++)t[r]=0;return t},l.prototype.mulp=function(e,t,r){var n=2*this.guessLen13b(e.length,t.length),i=this.makeRBT(n),a=this.stub(n),o=new Array(n),s=new Array(n),f=new Array(n),u=new Array(n),c=new Array(n),h=new Array(n),l=r.words;l.length=n,this.convert13b(e.words,e.length,o,n),this.convert13b(t.words,t.length,u,n),this.transform(o,a,s,f,n,i),this.transform(u,a,c,h,n,i);for(var d=0;d<n;d++){var p=s[d]*c[d]-f[d]*h[d];f[d]=s[d]*h[d]+f[d]*c[d],s[d]=p}return this.conjugate(s,f,n),this.transform(s,f,l,a,n,i),this.conjugate(l,a,n),this.normalize13b(l,n),r.negative=e.negative^t.negative,r.length=e.length+t.length,r.strip()},a.prototype.mul=function(e){var t=new a(null);return t.words=new Array(this.length+e.length),this.mulTo(e,t)},a.prototype.mulf=function(e){var t=new a(null);return t.words=new Array(this.length+e.length),h(this,e,t)},a.prototype.imul=function(e){return this.clone().mulTo(e,this)},a.prototype.imuln=function(e){n("number"==typeof e),n(e<67108864);for(var t=0,r=0;r<this.length;r++){var i=(0|this.words[r])*e,a=(67108863&i)+(67108863&t);t>>=26,t+=i/67108864|0,t+=a>>>26,this.words[r]=67108863&a}return 0!==t&&(this.words[r]=t,this.length++),this},a.prototype.muln=function(e){return this.clone().imuln(e)},a.prototype.sqr=function(){return this.mul(this)},a.prototype.isqr=function(){return this.imul(this.clone())},a.prototype.pow=function(e){var t=f(e);if(0===t.length)return new a(1);for(var r=this,n=0;n<t.length&&0===t[n];n++,r=r.sqr());if(++n<t.length)for(var i=r.sqr();n<t.length;n++,i=i.sqr())0!==t[n]&&(r=r.mul(i));return r},a.prototype.iushln=function(e){n("number"==typeof e&&e>=0);var t,r=e%26,i=(e-r)/26,a=67108863>>>26-r<<26-r;if(0!==r){var o=0;for(t=0;t<this.length;t++){var s=this.words[t]&a,f=(0|this.words[t])-s<<r;this.words[t]=f|o,o=s>>>26-r}o&&(this.words[t]=o,this.length++)}if(0!==i){for(t=this.length-1;t>=0;t--)this.words[t+i]=this.words[t];for(t=0;t<i;t++)this.words[t]=0;this.length+=i}return this.strip()},a.prototype.ishln=function(e){return n(0===this.negative),this.iushln(e)},a.prototype.iushrn=function(e,t,r){n("number"==typeof e&&e>=0);var i;i=t?(t-t%26)/26:0;var a=e%26,o=Math.min((e-a)/26,this.length),s=67108863^67108863>>>a<<a,f=r;if(i-=o,i=Math.max(0,i),f){for(var u=0;u<o;u++)f.words[u]=this.words[u];f.length=o}if(0===o);else if(this.length>o)for(this.length-=o,u=0;u<this.length;u++)this.words[u]=this.words[u+o];else this.words[0]=0,this.length=1;var c=0;for(u=this.length-1;u>=0&&(0!==c||u>=i);u--){var h=0|this.words[u];this.words[u]=c<<26-a|h>>>a,c=h&s}return f&&0!==c&&(f.words[f.length++]=c),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},a.prototype.ishrn=function(e,t,r){return n(0===this.negative),this.iushrn(e,t,r)},a.prototype.shln=function(e){return this.clone().ishln(e)},a.prototype.ushln=function(e){return this.clone().iushln(e)},a.prototype.shrn=function(e){return this.clone().ishrn(e)},a.prototype.ushrn=function(e){return this.clone().iushrn(e)},a.prototype.testn=function(e){n("number"==typeof e&&e>=0);var t=e%26,r=(e-t)/26,i=1<<t;return!(this.length<=r)&&!!(this.words[r]&i)},a.prototype.imaskn=function(e){n("number"==typeof e&&e>=0);var t=e%26,r=(e-t)/26;if(n(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)return this;if(0!==t&&r++,this.length=Math.min(r,this.length),0!==t){var i=67108863^67108863>>>t<<t;this.words[this.length-1]&=i}return this.strip()},a.prototype.maskn=function(e){return this.clone().imaskn(e)},a.prototype.iaddn=function(e){return n("number"==typeof e),n(e<67108864),e<0?this.isubn(-e):0!==this.negative?1===this.length&&(0|this.words[0])<e?(this.words[0]=e-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(e),this.negative=1,this):this._iaddn(e)},a.prototype._iaddn=function(e){this.words[0]+=e;for(var t=0;t<this.length&&this.words[t]>=67108864;t++)this.words[t]-=67108864,t===this.length-1?this.words[t+1]=1:this.words[t+1]++;return this.length=Math.max(this.length,t+1),this},a.prototype.isubn=function(e){if(n("number"==typeof e),n(e<67108864),e<0)return this.iaddn(-e);if(0!==this.negative)return this.negative=0,this.iaddn(e),this.negative=1,this;if(this.words[0]-=e,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var t=0;t<this.length&&this.words[t]<0;t++)this.words[t]+=67108864,this.words[t+1]-=1;return this.strip()},a.prototype.addn=function(e){return this.clone().iaddn(e)},a.prototype.subn=function(e){return this.clone().isubn(e)},a.prototype.iabs=function(){return this.negative=0,this},a.prototype.abs=function(){return this.clone().iabs()},a.prototype._ishlnsubmul=function(e,t,r){var i,a=e.length+r;this._expand(a);var o,s=0;for(i=0;i<e.length;i++){o=(0|this.words[i+r])+s;var f=(0|e.words[i])*t;o-=67108863&f,s=(o>>26)-(f/67108864|0),this.words[i+r]=67108863&o}for(;i<this.length-r;i++)o=(0|this.words[i+r])+s,s=o>>26,this.words[i+r]=67108863&o;if(0===s)return this.strip();for(n(-1===s),s=0,i=0;i<this.length;i++)o=-(0|this.words[i])+s,s=o>>26,this.words[i]=67108863&o;return this.negative=1,this.strip()},a.prototype._wordDiv=function(e,t){var r=this.length-e.length,n=this.clone(),i=e,o=0|i.words[i.length-1];0!==(r=26-this._countBits(o))&&(i=i.ushln(r),n.iushln(r),o=0|i.words[i.length-1]);var s,f=n.length-i.length;if("mod"!==t){s=new a(null),s.length=f+1,s.words=new Array(s.length);for(var u=0;u<s.length;u++)s.words[u]=0}var c=n.clone()._ishlnsubmul(i,1,f);0===c.negative&&(n=c,s&&(s.words[f]=1));for(var h=f-1;h>=0;h--){var l=67108864*(0|n.words[i.length+h])+(0|n.words[i.length+h-1]);for(l=Math.min(l/o|0,67108863),n._ishlnsubmul(i,l,h);0!==n.negative;)l--,n.negative=0,n._ishlnsubmul(i,1,h),n.isZero()||(n.negative^=1);s&&(s.words[h]=l)}return s&&s.strip(),n.strip(),"div"!==t&&0!==r&&n.iushrn(r),{div:s||null,mod:n}},a.prototype.divmod=function(e,t,r){if(n(!e.isZero()),this.isZero())return{div:new a(0),mod:new a(0)};var i,o,s;return 0!==this.negative&&0===e.negative?(s=this.neg().divmod(e,t),"mod"!==t&&(i=s.div.neg()),"div"!==t&&(o=s.mod.neg(),r&&0!==o.negative&&o.iadd(e)),{div:i,mod:o}):0===this.negative&&0!==e.negative?(s=this.divmod(e.neg(),t),"mod"!==t&&(i=s.div.neg()),{div:i,mod:s.mod}):0!=(this.negative&e.negative)?(s=this.neg().divmod(e.neg(),t),"div"!==t&&(o=s.mod.neg(),r&&0!==o.negative&&o.isub(e)),{div:s.div,mod:o}):e.length>this.length||this.cmp(e)<0?{div:new a(0),mod:this}:1===e.length?"div"===t?{div:this.divn(e.words[0]),mod:null}:"mod"===t?{div:null,mod:new a(this.modn(e.words[0]))}:{div:this.divn(e.words[0]),mod:new a(this.modn(e.words[0]))}:this._wordDiv(e,t)},a.prototype.div=function(e){return this.divmod(e,"div",!1).div},a.prototype.mod=function(e){return this.divmod(e,"mod",!1).mod},a.prototype.umod=function(e){return this.divmod(e,"mod",!0).mod},a.prototype.divRound=function(e){var t=this.divmod(e);if(t.mod.isZero())return t.div;var r=0!==t.div.negative?t.mod.isub(e):t.mod,n=e.ushrn(1),i=e.andln(1),a=r.cmp(n);return a<0||1===i&&0===a?t.div:0!==t.div.negative?t.div.isubn(1):t.div.iaddn(1)},a.prototype.modn=function(e){n(e<=67108863);for(var t=(1<<26)%e,r=0,i=this.length-1;i>=0;i--)r=(t*r+(0|this.words[i]))%e;return r},a.prototype.idivn=function(e){n(e<=67108863);for(var t=0,r=this.length-1;r>=0;r--){var i=(0|this.words[r])+67108864*t;this.words[r]=i/e|0,t=i%e}return this.strip()},a.prototype.divn=function(e){return this.clone().idivn(e)},a.prototype.egcd=function(e){n(0===e.negative),n(!e.isZero());var t=this,r=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var i=new a(1),o=new a(0),s=new a(0),f=new a(1),u=0;t.isEven()&&r.isEven();)t.iushrn(1),r.iushrn(1),++u;for(var c=r.clone(),h=t.clone();!t.isZero();){for(var l=0,d=1;0==(t.words[0]&d)&&l<26;++l,d<<=1);if(l>0)for(t.iushrn(l);l-- >0;)(i.isOdd()||o.isOdd())&&(i.iadd(c),o.isub(h)),i.iushrn(1),o.iushrn(1);for(var p=0,b=1;0==(r.words[0]&b)&&p<26;++p,b<<=1);if(p>0)for(r.iushrn(p);p-- >0;)(s.isOdd()||f.isOdd())&&(s.iadd(c),f.isub(h)),s.iushrn(1),f.iushrn(1);t.cmp(r)>=0?(t.isub(r),i.isub(s),o.isub(f)):(r.isub(t),s.isub(i),f.isub(o))}return{a:s,b:f,gcd:r.iushln(u)}},a.prototype._invmp=function(e){n(0===e.negative),n(!e.isZero());var t=this,r=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var i=new a(1),o=new a(0),s=r.clone();t.cmpn(1)>0&&r.cmpn(1)>0;){for(var f=0,u=1;0==(t.words[0]&u)&&f<26;++f,u<<=1);if(f>0)for(t.iushrn(f);f-- >0;)i.isOdd()&&i.iadd(s),i.iushrn(1);for(var c=0,h=1;0==(r.words[0]&h)&&c<26;++c,h<<=1);if(c>0)for(r.iushrn(c);c-- >0;)o.isOdd()&&o.iadd(s),o.iushrn(1);t.cmp(r)>=0?(t.isub(r),i.isub(o)):(r.isub(t),o.isub(i))}var l;return l=0===t.cmpn(1)?i:o,l.cmpn(0)<0&&l.iadd(e),l},a.prototype.gcd=function(e){if(this.isZero())return e.abs();if(e.isZero())return this.abs();var t=this.clone(),r=e.clone();t.negative=0,r.negative=0;for(var n=0;t.isEven()&&r.isEven();n++)t.iushrn(1),r.iushrn(1);for(;;){for(;t.isEven();)t.iushrn(1);for(;r.isEven();)r.iushrn(1);var i=t.cmp(r);if(i<0){var a=t;t=r,r=a}else if(0===i||0===r.cmpn(1))break;t.isub(r)}return r.iushln(n)},a.prototype.invm=function(e){return this.egcd(e).a.umod(e)},a.prototype.isEven=function(){return 0==(1&this.words[0])},a.prototype.isOdd=function(){return 1==(1&this.words[0])},a.prototype.andln=function(e){return this.words[0]&e},a.prototype.bincn=function(e){n("number"==typeof e);var t=e%26,r=(e-t)/26,i=1<<t;if(this.length<=r)return this._expand(r+1),this.words[r]|=i,this;for(var a=i,o=r;0!==a&&o<this.length;o++){var s=0|this.words[o];s+=a,a=s>>>26,s&=67108863,this.words[o]=s}return 0!==a&&(this.words[o]=a,this.length++),this},a.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},a.prototype.cmpn=function(e){var t=e<0;if(0!==this.negative&&!t)return-1;if(0===this.negative&&t)return 1;this.strip();var r;if(this.length>1)r=1;else{t&&(e=-e),n(e<=67108863,"Number is too big");var i=0|this.words[0];r=i===e?0:i<e?-1:1}return 0!==this.negative?0|-r:r},a.prototype.cmp=function(e){if(0!==this.negative&&0===e.negative)return-1;if(0===this.negative&&0!==e.negative)return 1;var t=this.ucmp(e);return 0!==this.negative?0|-t:t},a.prototype.ucmp=function(e){if(this.length>e.length)return 1;if(this.length<e.length)return-1;for(var t=0,r=this.length-1;r>=0;r--){var n=0|this.words[r],i=0|e.words[r];if(n!==i){n<i?t=-1:n>i&&(t=1);break}}return t},a.prototype.gtn=function(e){return 1===this.cmpn(e)},a.prototype.gt=function(e){return 1===this.cmp(e)},a.prototype.gten=function(e){return this.cmpn(e)>=0},a.prototype.gte=function(e){return this.cmp(e)>=0},a.prototype.ltn=function(e){return-1===this.cmpn(e)},a.prototype.lt=function(e){return-1===this.cmp(e)},a.prototype.lten=function(e){return this.cmpn(e)<=0},a.prototype.lte=function(e){return this.cmp(e)<=0},a.prototype.eqn=function(e){return 0===this.cmpn(e)},a.prototype.eq=function(e){return 0===this.cmp(e)},a.red=function(e){return new g(e)},a.prototype.toRed=function(e){return n(!this.red,"Already a number in reduction context"),n(0===this.negative,"red works only with positives"),e.convertTo(this)._forceRed(e)},a.prototype.fromRed=function(){return n(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},a.prototype._forceRed=function(e){return this.red=e,this},a.prototype.forceRed=function(e){return n(!this.red,"Already a number in reduction context"),this._forceRed(e)},a.prototype.redAdd=function(e){return n(this.red,"redAdd works only with red numbers"),this.red.add(this,e)},a.prototype.redIAdd=function(e){return n(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,e)},a.prototype.redSub=function(e){return n(this.red,"redSub works only with red numbers"),this.red.sub(this,e)},a.prototype.redISub=function(e){return n(this.red,"redISub works only with red numbers"),this.red.isub(this,e)},a.prototype.redShl=function(e){return n(this.red,"redShl works only with red numbers"),this.red.shl(this,e)},a.prototype.redMul=function(e){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.mul(this,e)},a.prototype.redIMul=function(e){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.imul(this,e)},a.prototype.redSqr=function(){return n(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},a.prototype.redISqr=function(){return n(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},a.prototype.redSqrt=function(){return n(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},a.prototype.redInvm=function(){return n(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},a.prototype.redNeg=function(){return n(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},a.prototype.redPow=function(e){return n(this.red&&!e.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,e)};var A={k256:null,p224:null,p192:null,p25519:null};d.prototype._tmp=function(){var e=new a(null);return e.words=new Array(Math.ceil(this.n/13)),e},d.prototype.ireduce=function(e){var t,r=e;do{this.split(r,this.tmp),r=this.imulK(r),r=r.iadd(this.tmp),t=r.bitLength()}while(t>this.n);var n=t<this.n?-1:r.ucmp(this.p);return 0===n?(r.words[0]=0,r.length=1):n>0?r.isub(this.p):r.strip(),r},d.prototype.split=function(e,t){e.iushrn(this.n,0,t)},d.prototype.imulK=function(e){return e.imul(this.k)},i(p,d),p.prototype.split=function(e,t){for(var r=Math.min(e.length,9),n=0;n<r;n++)t.words[n]=e.words[n];if(t.length=r,e.length<=9)return e.words[0]=0,void(e.length=1);var i=e.words[9];for(t.words[t.length++]=4194303&i,n=10;n<e.length;n++){var a=0|e.words[n];e.words[n-10]=(4194303&a)<<4|i>>>22,i=a}i>>>=22,e.words[n-10]=i,0===i&&e.length>10?e.length-=10:e.length-=9},p.prototype.imulK=function(e){e.words[e.length]=0,e.words[e.length+1]=0,e.length+=2;for(var t=0,r=0;r<e.length;r++){var n=0|e.words[r];t+=977*n,e.words[r]=67108863&t,t=64*n+(t/67108864|0)}return 0===e.words[e.length-1]&&(e.length--,0===e.words[e.length-1]&&e.length--),e},i(b,d),i(v,d),i(m,d),m.prototype.imulK=function(e){for(var t=0,r=0;r<e.length;r++){var n=19*(0|e.words[r])+t,i=67108863&n;n>>>=26,e.words[r]=i,t=n}return 0!==t&&(e.words[e.length++]=t),e},a._prime=function(e){if(A[e])return A[e];var t;if("k256"===e)t=new p;else if("p224"===e)t=new b;else if("p192"===e)t=new v;else{if("p25519"!==e)throw new Error("Unknown prime "+e);t=new m}return A[e]=t,t},g.prototype._verify1=function(e){n(0===e.negative,"red works only with positives"),n(e.red,"red works only with red numbers")},g.prototype._verify2=function(e,t){n(0==(e.negative|t.negative),"red works only with positives"),n(e.red&&e.red===t.red,"red works only with red numbers")},g.prototype.imod=function(e){return this.prime?this.prime.ireduce(e)._forceRed(this):e.umod(this.m)._forceRed(this)},g.prototype.neg=function(e){return e.isZero()?e.clone():this.m.sub(e)._forceRed(this)},g.prototype.add=function(e,t){this._verify2(e,t);var r=e.add(t);return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},g.prototype.iadd=function(e,t){this._verify2(e,t);var r=e.iadd(t);return r.cmp(this.m)>=0&&r.isub(this.m),r},g.prototype.sub=function(e,t){this._verify2(e,t);var r=e.sub(t);return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},g.prototype.isub=function(e,t){this._verify2(e,t);var r=e.isub(t);return r.cmpn(0)<0&&r.iadd(this.m),r},g.prototype.shl=function(e,t){return this._verify1(e),this.imod(e.ushln(t))},g.prototype.imul=function(e,t){return this._verify2(e,t),this.imod(e.imul(t))},g.prototype.mul=function(e,t){return this._verify2(e,t),this.imod(e.mul(t))},g.prototype.isqr=function(e){return this.imul(e,e.clone())},g.prototype.sqr=function(e){return this.mul(e,e)},g.prototype.sqrt=function(e){if(e.isZero())return e.clone();var t=this.m.andln(3);if(n(t%2==1),3===t){var r=this.m.add(new a(1)).iushrn(2);return this.pow(e,r)}for(var i=this.m.subn(1),o=0;!i.isZero()&&0===i.andln(1);)o++,i.iushrn(1);n(!i.isZero());var s=new a(1).toRed(this),f=s.redNeg(),u=this.m.subn(1).iushrn(1),c=this.m.bitLength();for(c=new a(2*c*c).toRed(this);0!==this.pow(c,u).cmp(f);)c.redIAdd(f);for(var h=this.pow(c,i),l=this.pow(e,i.addn(1).iushrn(1)),d=this.pow(e,i),p=o;0!==d.cmp(s);){for(var b=d,v=0;0!==b.cmp(s);v++)b=b.redSqr();n(v<p);var m=this.pow(h,new a(1).iushln(p-v-1));l=l.redMul(m),h=m.redSqr(),d=d.redMul(h),p=v}return l},g.prototype.invm=function(e){var t=e._invmp(this.m);return 0!==t.negative?(t.negative=0,this.imod(t).redNeg()):this.imod(t)},g.prototype.pow=function(e,t){if(t.isZero())return new a(1).toRed(this);if(0===t.cmpn(1))return e.clone();var r=new Array(16);r[0]=new a(1).toRed(this),r[1]=e;for(var n=2;n<r.length;n++)r[n]=this.mul(r[n-1],e);var i=r[0],o=0,s=0,f=t.bitLength()%26;for(0===f&&(f=26),n=t.length-1;n>=0;n--){for(var u=t.words[n],c=f-1;c>=0;c--){var h=u>>c&1;i!==r[0]&&(i=this.sqr(i)),0!==h||0!==o?(o<<=1,o|=h,(4===++s||0===n&&0===c)&&(i=this.mul(i,r[o]),s=0,o=0)):s=0}f=26}return i},g.prototype.convertTo=function(e){var t=e.umod(this.m);return t===e?t.clone():t},g.prototype.convertFrom=function(e){var t=e.clone();return t.red=null,t},a.mont=function(e){return new y(e)},i(y,g),y.prototype.convertTo=function(e){return this.imod(e.ushln(this.shift))},y.prototype.convertFrom=function(e){var t=this.imod(e.mul(this.rinv));return t.red=null,t},y.prototype.imul=function(e,t){if(e.isZero()||t.isZero())return e.words[0]=0,e.length=1,e;var r=e.imul(t),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),a=i;return i.cmp(this.m)>=0?a=i.isub(this.m):i.cmpn(0)<0&&(a=i.iadd(this.m)),a._forceRed(this)},y.prototype.mul=function(e,t){if(e.isZero()||t.isZero())return new a(0)._forceRed(this);var r=e.mul(t),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),o=i;return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},y.prototype.invm=function(e){return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)}}(void 0===e||e,this)}).call(t,r(57)(e))},function(e,t,r){"use strict";function n(e){if(!(this instanceof n))return new n(e);u.call(this,e),c.call(this,e),e&&!1===e.readable&&(this.readable=!1),e&&!1===e.writable&&(this.writable=!1),this.allowHalfOpen=!0,e&&!1===e.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",i)}function i(){this.allowHalfOpen||this._writableState.ended||o(a,this)}function a(e){e.end()}var o=r(25),s=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};e.exports=n;var f=r(22);f.inherits=r(1);var u=r(51),c=r(33);f.inherits(n,u);for(var h=s(c.prototype),l=0;l<h.length;l++){var d=h[l];n.prototype[d]||(n.prototype[d]=c.prototype[d])}Object.defineProperty(n.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e)}}),n.prototype._destroy=function(e,t){this.push(null),this.end(),o(t,e)}},function(e,t){function r(e,t){if(!e)throw new Error(t||"Assertion failed")}e.exports=r,r.equal=function(e,t,r){if(e!=t)throw new Error(r||"Assertion failed: "+e+" != "+t)}},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(38),r(39))}(0,function(e){return function(){var t=e,r=t.lib,n=r.Base,i=r.WordArray,a=t.algo,o=a.MD5,s=a.EvpKDF=n.extend({cfg:n.extend({keySize:4,hasher:o,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var r=this.cfg,n=r.hasher.create(),a=i.create(),o=a.words,s=r.keySize,f=r.iterations;o.length<s;){u&&n.update(u);var u=n.update(e).finalize(t);n.reset();for(var c=1;c<f;c++)u=n.finalize(u),n.reset();a.concat(u)}return a.sigBytes=4*s,a}});t.EvpKDF=function(e,t,r){return s.create(r).compute(e,t)}}(),e.EvpKDF})},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){function n(e,t){this._block=i.alloc(e),this._finalSize=t,this._blockSize=e,this._len=0}var i=r(5).Buffer;n.prototype.update=function(e,t){"string"==typeof e&&(t=t||"utf8",e=i.from(e,t));for(var r=this._block,n=this._blockSize,a=e.length,o=this._len,s=0;s<a;){for(var f=o%n,u=Math.min(a-s,n-f),c=0;c<u;c++)r[f+c]=e[s+c];o+=u,s+=u,o%n==0&&this._update(r)}return this._len+=a,this},n.prototype.digest=function(e){var t=this._len%this._blockSize;this._block[t]=128,this._block.fill(0,t+1),t>=this._finalSize&&(this._update(this._block),this._block.fill(0));var r=8*this._len;if(r<=4294967295)this._block.writeUInt32BE(r,this._blockSize-4);else{var n=4294967295&r,i=(r-n)/4294967296;this._block.writeUInt32BE(i,this._blockSize-8),this._block.writeUInt32BE(n,this._blockSize-4)}this._update(this._block);var a=this._hash();return e?a.toString(e):a},n.prototype._update=function(){throw new Error("_update must be implemented by subclass")},e.exports=n},function(e,t,r){!function(n,i){e.exports=t=i(r(0))}(0,function(e){return function(){function t(e,t,r){for(var n=[],a=0,o=0;o<t;o++)if(o%4){var s=r[e.charCodeAt(o-1)]<<o%4*2,f=r[e.charCodeAt(o)]>>>6-o%4*2;n[a>>>2]|=(s|f)<<24-a%4*8,a++}return i.create(n,a)}var r=e,n=r.lib,i=n.WordArray,a=r.enc;a.Base64={stringify:function(e){var t=e.words,r=e.sigBytes,n=this._map;e.clamp();for(var i=[],a=0;a<r;a+=3)for(var o=t[a>>>2]>>>24-a%4*8&255,s=t[a+1>>>2]>>>24-(a+1)%4*8&255,f=t[a+2>>>2]>>>24-(a+2)%4*8&255,u=o<<16|s<<8|f,c=0;c<4&&a+.75*c<r;c++)i.push(n.charAt(u>>>6*(3-c)&63));var h=n.charAt(64);if(h)for(;i.length%4;)i.push(h);return i.join("")},parse:function(e){var r=e.length,n=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var a=0;a<n.length;a++)i[n.charCodeAt(a)]=a}var o=n.charAt(64);if(o){var s=e.indexOf(o);-1!==s&&(r=s)}return t(e,r,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),e.enc.Base64})},function(e,t,r){!function(n,i){e.exports=t=i(r(0))}(0,function(e){return function(t){function r(e,t,r,n,i,a,o){var s=e+(t&r|~t&n)+i+o;return(s<<a|s>>>32-a)+t}function n(e,t,r,n,i,a,o){var s=e+(t&n|r&~n)+i+o;return(s<<a|s>>>32-a)+t}function i(e,t,r,n,i,a,o){var s=e+(t^r^n)+i+o;return(s<<a|s>>>32-a)+t}function a(e,t,r,n,i,a,o){var s=e+(r^(t|~n))+i+o;return(s<<a|s>>>32-a)+t}var o=e,s=o.lib,f=s.WordArray,u=s.Hasher,c=o.algo,h=[];!function(){for(var e=0;e<64;e++)h[e]=4294967296*t.abs(t.sin(e+1))|0}();var l=c.MD5=u.extend({_doReset:function(){this._hash=new f.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var o=0;o<16;o++){var s=t+o,f=e[s];e[s]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}var u=this._hash.words,c=e[t+0],l=e[t+1],d=e[t+2],p=e[t+3],b=e[t+4],v=e[t+5],m=e[t+6],g=e[t+7],y=e[t+8],w=e[t+9],_=e[t+10],S=e[t+11],k=e[t+12],x=e[t+13],A=e[t+14],M=e[t+15],E=u[0],I=u[1],T=u[2],P=u[3];E=r(E,I,T,P,c,7,h[0]),P=r(P,E,I,T,l,12,h[1]),T=r(T,P,E,I,d,17,h[2]),I=r(I,T,P,E,p,22,h[3]),E=r(E,I,T,P,b,7,h[4]),P=r(P,E,I,T,v,12,h[5]),T=r(T,P,E,I,m,17,h[6]),I=r(I,T,P,E,g,22,h[7]),E=r(E,I,T,P,y,7,h[8]),P=r(P,E,I,T,w,12,h[9]),T=r(T,P,E,I,_,17,h[10]),I=r(I,T,P,E,S,22,h[11]),E=r(E,I,T,P,k,7,h[12]),P=r(P,E,I,T,x,12,h[13]),T=r(T,P,E,I,A,17,h[14]),I=r(I,T,P,E,M,22,h[15]),E=n(E,I,T,P,l,5,h[16]),P=n(P,E,I,T,m,9,h[17]),T=n(T,P,E,I,S,14,h[18]),I=n(I,T,P,E,c,20,h[19]),E=n(E,I,T,P,v,5,h[20]),P=n(P,E,I,T,_,9,h[21]),T=n(T,P,E,I,M,14,h[22]),I=n(I,T,P,E,b,20,h[23]),E=n(E,I,T,P,w,5,h[24]),P=n(P,E,I,T,A,9,h[25]),T=n(T,P,E,I,p,14,h[26]),I=n(I,T,P,E,y,20,h[27]),E=n(E,I,T,P,x,5,h[28]),P=n(P,E,I,T,d,9,h[29]),T=n(T,P,E,I,g,14,h[30]),I=n(I,T,P,E,k,20,h[31]),E=i(E,I,T,P,v,4,h[32]),P=i(P,E,I,T,y,11,h[33]),T=i(T,P,E,I,S,16,h[34]),I=i(I,T,P,E,A,23,h[35]),E=i(E,I,T,P,l,4,h[36]),P=i(P,E,I,T,b,11,h[37]),T=i(T,P,E,I,g,16,h[38]),I=i(I,T,P,E,_,23,h[39]),E=i(E,I,T,P,x,4,h[40]),P=i(P,E,I,T,c,11,h[41]),T=i(T,P,E,I,p,16,h[42]),I=i(I,T,P,E,m,23,h[43]),E=i(E,I,T,P,w,4,h[44]),P=i(P,E,I,T,k,11,h[45]),T=i(T,P,E,I,M,16,h[46]),I=i(I,T,P,E,d,23,h[47]),E=a(E,I,T,P,c,6,h[48]),P=a(P,E,I,T,g,10,h[49]),T=a(T,P,E,I,A,15,h[50]),I=a(I,T,P,E,v,21,h[51]),E=a(E,I,T,P,k,6,h[52]),P=a(P,E,I,T,p,10,h[53]),T=a(T,P,E,I,_,15,h[54]),I=a(I,T,P,E,l,21,h[55]),E=a(E,I,T,P,y,6,h[56]),P=a(P,E,I,T,M,10,h[57]),T=a(T,P,E,I,m,15,h[58]),I=a(I,T,P,E,x,21,h[59]),E=a(E,I,T,P,b,6,h[60]),P=a(P,E,I,T,S,10,h[61]),T=a(T,P,E,I,d,15,h[62]),I=a(I,T,P,E,w,21,h[63]),u[0]=u[0]+E|0,u[1]=u[1]+I|0,u[2]=u[2]+T|0,u[3]=u[3]+P|0},_doFinalize:function(){var e=this._data,r=e.words,n=8*this._nDataBytes,i=8*e.sigBytes;r[i>>>5]|=128<<24-i%32;var a=t.floor(n/4294967296),o=n;r[15+(i+64>>>9<<4)]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),r[14+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),e.sigBytes=4*(r.length+1),this._process();for(var s=this._hash,f=s.words,u=0;u<4;u++){var c=f[u];f[u]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}return s},clone:function(){var e=u.clone.call(this);return e._hash=this._hash.clone(),e}});o.MD5=u._createHelper(l),o.HmacMD5=u._createHmacHelper(l)}(Math),e.MD5})},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TxAttrUsage=t.Transaction=void 0;var a=r(68);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var o=r(28);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var s=r(44);Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})});var f=r(171),u=i(f),c=n(a),h=n(o),l=n(s),d=r(71),p=i(d),b={tx:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return new(Function.prototype.bind.apply(u.default,[null].concat(t)))},claimTx:u.default.createClaimTx,contractTx:u.default.createContractTx,invocationTx:u.default.createInvocationTx},v={attribute:h.serializeTransactionAttribute,input:h.serializeTransactionInput,output:h.serializeTransactionOutput,script:h.serializeWitness,exclusiveData:l.serializeExclusive,tx:c.serializeTransaction},m={attribute:h.deserializeTransactionAttribute,input:h.deserializeTransactionInput,output:h.deserializeTransactionOutput,script:h.deserializeWitness,exclusiveData:l.deserializeExclusive,tx:c.deserializeTransaction};t.default={create:b,serialize:v,deserialize:m,get:{transactionHash:c.getTransactionHash},sign:{transaction:c.signTransaction}},t.Transaction=u.default,t.TxAttrUsage=p.default},function(e,t,r){(function(e){function r(e){return Array.isArray?Array.isArray(e):"[object Array]"===v(e)}function n(e){return"boolean"==typeof e}function i(e){return null===e}function a(e){return null==e}function o(e){return"number"==typeof e}function s(e){return"string"==typeof e}function f(e){return"symbol"==typeof e}function u(e){return void 0===e}function c(e){return"[object RegExp]"===v(e)}function h(e){return"object"==typeof e&&null!==e}function l(e){return"[object Date]"===v(e)}function d(e){return"[object Error]"===v(e)||e instanceof Error}function p(e){return"function"==typeof e}function b(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function v(e){return Object.prototype.toString.call(e)}t.isArray=r,t.isBoolean=n,t.isNull=i,t.isNullOrUndefined=a,t.isNumber=o,t.isString=s,t.isSymbol=f,t.isUndefined=u,t.isRegExp=c,t.isObject=h,t.isDate=l,t.isError=d,t.isFunction=p,t.isPrimitive=b,t.isBuffer=e.isBuffer}).call(t,r(7).Buffer)},function(e,t,r){"use strict";function n(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}var i=r(12),a=r(15);t.BlockHash=n,n.prototype.update=function(e,t){if(e=i.toArray(e,t),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){e=this.pending;var r=e.length%this._delta8;this.pending=e.slice(e.length-r,e.length),0===this.pending.length&&(this.pending=null),e=i.join32(e,0,e.length-r,this.endian);for(var n=0;n<e.length;n+=this._delta32)this._update(e,n,n+this._delta32)}return this},n.prototype.digest=function(e){return this.update(this._pad()),a(null===this.pending),this._digest(e)},n.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,r=t-(e+this.padLength)%t,n=new Array(r+this.padLength);n[0]=128;for(var i=1;i<r;i++)n[i]=0;if(e<<=3,"big"===this.endian){for(var a=8;a<this.padLength;a++)n[i++]=0;n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=e>>>24&255,n[i++]=e>>>16&255,n[i++]=e>>>8&255,n[i++]=255&e}else for(n[i++]=255&e,n[i++]=e>>>8&255,n[i++]=e>>>16&255,n[i++]=e>>>24&255,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,a=8;a<this.padLength;a++)n[i++]=0;return n}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.queryRPC=t.Query=t.RPCClient=void 0;var i=r(174);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var a=r(175),o=n(a),s=r(72),f=n(s);t.default={create:{rpcClient:function(e){return new o.default(e)},query:function(e){return new f.default(e)}}},t.RPCClient=o.default,t.Query=f.default,t.queryRPC=s.queryRPC},function(e,t,r){"use strict";(function(t){function r(e,r,n,i){if("function"!=typeof e)throw new TypeError('"callback" argument must be a function');var a,o,s=arguments.length;switch(s){case 0:case 1:return t.nextTick(e);case 2:return t.nextTick(function(){e.call(null,r)});case 3:return t.nextTick(function(){e.call(null,r,n)});case 4:return t.nextTick(function(){e.call(null,r,n,i)});default:for(a=new Array(s-1),o=0;o<a.length;)a[o++]=arguments[o];return t.nextTick(function(){e.apply(null,a)})}}!t.version||0===t.version.indexOf("v0.")||0===t.version.indexOf("v1.")&&0!==t.version.indexOf("v1.8.")?e.exports=r:e.exports=t.nextTick}).call(t,r(10))},function(e,t,r){"use strict";var n=t;n.base=r(113),n.short=r(114),n.mont=r(115),n.edwards=r(116)},function(e,t,r){!function(n,i){e.exports=t=i(r(0))}(0,function(e){return function(t){var r=e,n=r.lib,i=n.Base,a=n.WordArray,o=r.x64={};o.Word=i.extend({init:function(e,t){this.high=e,this.low=t}}),o.WordArray=i.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=void 0!=t?t:8*e.length},toX32:function(){for(var e=this.words,t=e.length,r=[],n=0;n<t;n++){var i=e[n];r.push(i.high),r.push(i.low)}return a.create(r,this.sigBytes)},clone:function(){for(var e=i.clone.call(this),t=e.words=this.words.slice(0),r=t.length,n=0;n<r;n++)t[n]=t[n].clone();return e}})}(),e})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deserializeWitness=t.serializeWitness=t.deserializeTransactionAttribute=t.serializeTransactionAttribute=t.createTransactionOutput=t.deserializeTransactionOutput=t.serializeTransactionOutput=t.TransactionOutput=t.deserializeTransactionInput=t.serializeTransactionInput=void 0;var n=r(2),i=r(11),a=r(4);t.serializeTransactionInput=function(e){return(0,n.reverseHex)(e.prevHash)+(0,n.reverseHex)((0,n.num2hexstring)(e.prevIndex,2))},t.deserializeTransactionInput=function(e){return{prevHash:(0,n.reverseHex)(e.read(32)),prevIndex:parseInt((0,n.reverseHex)(e.read(2)),16)}},t.TransactionOutput=function(e){return{assetId:e.assetId,value:new n.Fixed8(e.value),scriptHash:e.scriptHash}},t.serializeTransactionOutput=function(e){var t=new n.Fixed8(e.value).toReverseHex();return(0,n.reverseHex)(e.assetId)+t+(0,n.reverseHex)(e.scriptHash)},t.deserializeTransactionOutput=function(e){return{assetId:(0,n.reverseHex)(e.read(32)),value:n.Fixed8.fromReverseHex(e.read(8)),scriptHash:(0,n.reverseHex)(e.read(20))}},t.createTransactionOutput=function(e,t,r){var o=a.ASSET_ID[e],s=(0,i.getScriptHashFromAddress)(r);return{assetId:o,value:new n.Fixed8(t),scriptHash:s}},t.serializeTransactionAttribute=function(e){if(e.data.length>65535)throw new Error;var t=(0,n.num2hexstring)(e.usage);return 129===e.usage?t+=(0,n.num2hexstring)(e.data.length/2):(144===e.usage||e.usage>=240)&&(t+=(0,n.num2VarInt)(e.data.length/2)),2===e.usage||3===e.usage?t+=e.data.substr(2,64):t+=e.data,t},t.deserializeTransactionAttribute=function(e){var t={usage:parseInt(e.read(1),16)};if(0===t.usage||48===t.usage||t.usage>=161&&t.usage<=175)t.data=e.read(32);else if(2===t.usage||3===t.usage)t.data=(0,n.num2hexstring)(t.usage)+e.read(32);else if(32===t.usage)t.data=e.read(20);else if(129===t.usage)t.data=e.read(parseInt(e.read(1),16));else{if(!(144===t.usage||t.usage>=240))throw new Error;t.data=e.readVarBytes()}return t},t.serializeWitness=function(e){var t=(0,n.num2VarInt)(e.invocationScript.length/2),r=(0,n.num2VarInt)(e.verificationScript.length/2);return t+e.invocationScript+r+e.verificationScript},t.deserializeWitness=function(e){return{invocationScript:e.readVarBytes(),verificationScript:e.readVarBytes()}}},function(e,t,r){e.exports=r(176)},function(e,t,r){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.generateRandomArray=t.generatePrivateKey=t.generateSignature=t.getScriptHashFromAddress=t.getAddressFromScriptHash=t.getScriptHashFromPublicKey=t.getVerificationScriptFromPublicKey=t.getPublicKeyFromPrivateKey=t.getWIFFromPrivateKey=t.getPrivateKeyFromWIF=t.getPublicKeyUnencoded=t.getPublicKeyEncoded=void 0;var i=r(85),a=n(i),o=r(8),s=r(36),f=n(s),u=r(2),c=r(4),h=r(158),l=n(h),d=new o.ec("p256"),p=t.getPublicKeyEncoded=function(e){var t=(0,u.hexstring2ab)(e);return t[64]%2==1?"03"+(0,u.ab2hexstring)(t.slice(1,33)):"02"+(0,u.ab2hexstring)(t.slice(1,33))},b=(t.getPublicKeyUnencoded=function(e){return d.keyFromPublic(e,"hex").getPublic().encode("hex")},t.getPrivateKeyFromWIF=function(e){return(0,u.ab2hexstring)(a.default.decode(e,128).privateKey)},t.getWIFFromPrivateKey=function(t){return a.default.encode(128,e.from(t,"hex"),!0)},t.getPublicKeyFromPrivateKey=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=new o.ec("p256"),n=r.keyFromPrivate(e,"hex"),i=n.getPublic().encode("hex");if(t){return parseInt(i.substr(128,2),16)%2==1?"03"+i.substr(2,64):"02"+i.substr(2,64)}return i},t.getVerificationScriptFromPublicKey=function(e){return"21"+e+"ac"});t.getScriptHashFromPublicKey=function(e){"04"===e.substring(0,2)&&(e=p(e));var t=b(e);return(0,u.reverseHex)((0,u.hash160)(t))},t.getAddressFromScriptHash=function(t){t=(0,u.reverseHex)(t);var r=(0,u.hash256)(c.ADDR_VERSION+t).substr(0,8);return f.default.encode(e.from(c.ADDR_VERSION+t+r,"hex"))},t.getScriptHashFromAddress=function(e){var t=(0,u.ab2hexstring)(f.default.decode(e));return(0,u.reverseHex)(t.substr(2,40))},t.generateSignature=function(t,r){var n=(0,u.sha256)(t),i=e.from(n,"hex"),a=new o.ec("p256"),s=a.sign(i,r,null);return e.concat([s.r.toArrayLike(e,"be",32),s.s.toArrayLike(e,"be",32)]).toString("hex")},t.generatePrivateKey=function(){return(0,u.ab2hexstring)((0,l.default)(32))},t.generateRandomArray=function(e){return(0,l.default)(e)}}).call(t,r(7).Buffer)},function(e,t){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function i(e){return"number"==typeof e}function a(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}e.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!i(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,r,i,s,f,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||a(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}if(r=this._events[e],o(r))return!1;if(n(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),r.apply(this,s)}else if(a(r))for(s=Array.prototype.slice.call(arguments,1),u=r.slice(),i=u.length,f=0;f<i;f++)u[f].apply(this,s);return!0},r.prototype.addListener=function(e,t){var i;if(!n(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(t.listener)?t.listener:t),this._events[e]?a(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,a(this._events[e])&&!this._events[e].warned&&(i=o(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&i>0&&this._events[e].length>i&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function r(){this.removeListener(e,r),i||(i=!0,t.apply(this,arguments))}if(!n(t))throw TypeError("listener must be a function");var i=!1;return r.listener=t,this.on(e,r),this},r.prototype.removeListener=function(e,t){var r,i,o,s;if(!n(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],o=r.length,i=-1,r===t||n(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(a(r)){for(s=o;s-- >0;)if(r[s]===t||r[s].listener&&r[s].listener===t){i=s;break}if(i<0)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],n(r))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(n(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t,r){t=e.exports=r(51),t.Stream=t,t.Readable=t,t.Writable=r(33),t.Duplex=r(14),t.Transform=r(54),t.PassThrough=r(95)},function(e,t,r){"use strict";(function(t,n,i){function a(e){var t=this;this.next=null,this.entry=null,this.finish=function(){E(t,e)}}function o(e){return O.from(e)}function s(e){return O.isBuffer(e)||e instanceof N}function f(){}function u(e,t){T=T||r(14),e=e||{},this.objectMode=!!e.objectMode,t instanceof T&&(this.objectMode=this.objectMode||!!e.writableObjectMode);var n=e.highWaterMark,i=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:i,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var o=!1===e.decodeStrings;this.decodeStrings=!o,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){g(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new a(this)}function c(e){if(T=T||r(14),!(z.call(c,this)||this instanceof T))return new c(e);this._writableState=new u(e,this),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),C.call(this)}function h(e,t){var r=new Error("write after end");e.emit("error",r),I(t,r)}function l(e,t,r,n){var i=!0,a=!1;return null===r?a=new TypeError("May not write null values to stream"):"string"==typeof r||void 0===r||t.objectMode||(a=new TypeError("Invalid non-string/buffer chunk")),a&&(e.emit("error",a),I(n,a),i=!1),i}function d(e,t,r){return e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=O.from(t,r)),t}function p(e,t,r,n,i,a){if(!r){var o=d(t,n,i);n!==o&&(r=!0,i="buffer",n=o)}var s=t.objectMode?1:n.length;t.length+=s;var f=t.length<t.highWaterMark;if(f||(t.needDrain=!0),t.writing||t.corked){var u=t.lastBufferedRequest;t.lastBufferedRequest={chunk:n,encoding:i,isBuf:r,callback:a,next:null},u?u.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else b(e,t,!1,s,n,i,a);return f}function b(e,t,r,n,i,a,o){t.writelen=n,t.writecb=o,t.writing=!0,t.sync=!0,r?e._writev(i,t.onwrite):e._write(i,a,t.onwrite),t.sync=!1}function v(e,t,r,n,i){--t.pendingcb,r?(I(i,n),I(A,e,t),e._writableState.errorEmitted=!0,e.emit("error",n)):(i(n),e._writableState.errorEmitted=!0,e.emit("error",n),A(e,t))}function m(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}function g(e,t){var r=e._writableState,n=r.sync,i=r.writecb;if(m(r),t)v(e,r,n,t,i);else{var a=S(r);a||r.corked||r.bufferProcessing||!r.bufferedRequest||_(e,r),n?P(y,e,r,a,i):y(e,r,a,i)}}function y(e,t,r,n){r||w(e,t),t.pendingcb--,n(),A(e,t)}function w(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}function _(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var n=t.bufferedRequestCount,i=new Array(n),o=t.corkedRequestsFree;o.entry=r;for(var s=0,f=!0;r;)i[s]=r,r.isBuf||(f=!1),r=r.next,s+=1;i.allBuffers=f,b(e,t,!0,t.length,i,"",o.finish),t.pendingcb++,t.lastBufferedRequest=null,o.next?(t.corkedRequestsFree=o.next,o.next=null):t.corkedRequestsFree=new a(t)}else{for(;r;){var u=r.chunk,c=r.encoding,h=r.callback;if(b(e,t,!1,t.objectMode?1:u.length,u,c,h),r=r.next,t.writing)break}null===r&&(t.lastBufferedRequest=null)}t.bufferedRequestCount=0,t.bufferedRequest=r,t.bufferProcessing=!1}function S(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function k(e,t){e._final(function(r){t.pendingcb--,r&&e.emit("error",r),t.prefinished=!0,e.emit("prefinish"),A(e,t)})}function x(e,t){t.prefinished||t.finalCalled||("function"==typeof e._final?(t.pendingcb++,t.finalCalled=!0,I(k,e,t)):(t.prefinished=!0,e.emit("prefinish")))}function A(e,t){var r=S(t);return r&&(x(e,t),0===t.pendingcb&&(t.finished=!0,e.emit("finish"))),r}function M(e,t,r){t.ending=!0,A(e,t),r&&(t.finished?I(r):e.once("finish",r)),t.ended=!0,e.writable=!1}function E(e,t,r){var n=e.entry;for(e.entry=null;n;){var i=n.callback;t.pendingcb--,i(r),n=n.next}t.corkedRequestsFree?t.corkedRequestsFree.next=e:t.corkedRequestsFree=e}var I=r(25);e.exports=c;var T,P=!t.browser&&["v0.10","v0.9."].indexOf(t.version.slice(0,5))>-1?n:I;c.WritableState=u;var R=r(22);R.inherits=r(1);var B={deprecate:r(94)},C=r(52),O=r(5).Buffer,N=i.Uint8Array||function(){},j=r(53);R.inherits(c,C),u.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(u.prototype,"buffer",{get:B.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}();var z;"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(z=Function.prototype[Symbol.hasInstance],Object.defineProperty(c,Symbol.hasInstance,{value:function(e){return!!z.call(this,e)||e&&e._writableState instanceof u}})):z=function(e){return e instanceof this},c.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},c.prototype.write=function(e,t,r){var n=this._writableState,i=!1,a=s(e)&&!n.objectMode;return a&&!O.isBuffer(e)&&(e=o(e)),"function"==typeof t&&(r=t,t=null),a?t="buffer":t||(t=n.defaultEncoding),"function"!=typeof r&&(r=f),n.ended?h(this,r):(a||l(this,n,e,r))&&(n.pendingcb++,i=p(this,n,a,e,t,r)),i},c.prototype.cork=function(){this._writableState.corked++},c.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.finished||e.bufferProcessing||!e.bufferedRequest||_(this,e))},c.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+e);return this._writableState.defaultEncoding=e,this},c.prototype._write=function(e,t,r){r(new Error("_write() is not implemented"))},c.prototype._writev=null,c.prototype.end=function(e,t,r){var n=this._writableState;"function"==typeof e?(r=e,e=null,t=null):"function"==typeof t&&(r=t,t=null),null!==e&&void 0!==e&&this.write(e,t),n.corked&&(n.corked=1,this.uncork()),n.ending||n.finished||M(this,n,r)},Object.defineProperty(c.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),c.prototype.destroy=j.destroy,c.prototype._undestroy=j.undestroy,c.prototype._destroy=function(e,t){this.end(),t(e)}}).call(t,r(10),r(34).setImmediate,r(17))},function(e,t,r){function n(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;t.setTimeout=function(){return new n(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new n(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},r(93),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,r){"use strict";function n(e){if(!e)return"utf8";for(var t;;)switch(e){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return e;default:if(t)return;e=(""+e).toLowerCase(),t=!0}}function i(e){var t=n(e);if("string"!=typeof t&&(g.isEncoding===y||!y(e)))throw new Error("Unknown encoding: "+e);return t||e}function a(e){this.encoding=i(e);var t;switch(this.encoding){case"utf16le":this.text=l,this.end=d,t=4;break;case"utf8":this.fillLast=u,t=4;break;case"base64":this.text=p,this.end=b,t=3;break;default:return this.write=v,void(this.end=m)}this.lastNeed=0,this.lastTotal=0,this.lastChar=g.allocUnsafe(t)}function o(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:-1}function s(e,t,r){var n=t.length-1;if(n<r)return 0;var i=o(t[n]);return i>=0?(i>0&&(e.lastNeed=i-1),i):--n<r?0:(i=o(t[n]))>=0?(i>0&&(e.lastNeed=i-2),i):--n<r?0:(i=o(t[n]),i>=0?(i>0&&(2===i?i=0:e.lastNeed=i-3),i):0)}function f(e,t,r){if(128!=(192&t[0]))return e.lastNeed=0,"�".repeat(r);if(e.lastNeed>1&&t.length>1){if(128!=(192&t[1]))return e.lastNeed=1,"�".repeat(r+1);if(e.lastNeed>2&&t.length>2&&128!=(192&t[2]))return e.lastNeed=2,"�".repeat(r+2)}}function u(e){var t=this.lastTotal-this.lastNeed,r=f(this,e,t);return void 0!==r?r:this.lastNeed<=e.length?(e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(e.copy(this.lastChar,t,0,e.length),void(this.lastNeed-=e.length))}function c(e,t){var r=s(this,e,t);if(!this.lastNeed)return e.toString("utf8",t);this.lastTotal=r;var n=e.length-(r-this.lastNeed);return e.copy(this.lastChar,0,n),e.toString("utf8",t,n)}function h(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+"�".repeat(this.lastTotal-this.lastNeed):t}function l(e,t){if((e.length-t)%2==0){var r=e.toString("utf16le",t);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString("utf16le",t,e.length-1)}function d(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return t+this.lastChar.toString("utf16le",0,r)}return t}function p(e,t){var r=(e.length-t)%3;return 0===r?e.toString("base64",t):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString("base64",t,e.length-r))}function b(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+this.lastChar.toString("base64",0,3-this.lastNeed):t}function v(e){return e.toString(this.encoding)}function m(e){return e&&e.length?this.write(e):""}var g=r(5).Buffer,y=g.isEncoding||function(e){switch((e=""+e)&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};t.StringDecoder=a,a.prototype.write=function(e){if(0===e.length)return"";var t,r;if(this.lastNeed){if(void 0===(t=this.fillLast(e)))return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<e.length?t?t+this.text(e,r):this.text(e,r):t||""},a.prototype.end=h,a.prototype.text=c,a.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length}},function(e,t,r){var n=r(107);e.exports=n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},function(e,t,r){var n=t;n.utils=r(12),n.common=r(23),n.sha=r(118),n.ripemd=r(122),n.hmac=r(123),n.sha1=n.sha.sha1,n.sha256=n.sha.sha256,n.sha224=n.sha.sha224,n.sha384=n.sha.sha384,n.sha512=n.sha.sha512,n.ripemd160=n.ripemd.ripemd160},function(e,t,r){!function(n,i){e.exports=t=i(r(0))}(0,function(e){return function(){var t=e,r=t.lib,n=r.WordArray,i=r.Hasher,a=t.algo,o=[],s=a.SHA1=i.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var r=this._hash.words,n=r[0],i=r[1],a=r[2],s=r[3],f=r[4],u=0;u<80;u++){if(u<16)o[u]=0|e[t+u];else{var c=o[u-3]^o[u-8]^o[u-14]^o[u-16];o[u]=c<<1|c>>>31}var h=(n<<5|n>>>27)+f+o[u];h+=u<20?1518500249+(i&a|~i&s):u<40?1859775393+(i^a^s):u<60?(i&a|i&s|a&s)-1894007588:(i^a^s)-899497514,f=s,s=a,a=i<<30|i>>>2,i=n,n=h}r[0]=r[0]+n|0,r[1]=r[1]+i|0,r[2]=r[2]+a|0,r[3]=r[3]+s|0,r[4]=r[4]+f|0},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,n=8*e.sigBytes;return t[n>>>5]|=128<<24-n%32,t[14+(n+64>>>9<<4)]=Math.floor(r/4294967296),t[15+(n+64>>>9<<4)]=r,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=i.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA1=i._createHelper(s),t.HmacSHA1=i._createHmacHelper(s)}(),e.SHA1})},function(e,t,r){!function(n,i){e.exports=t=i(r(0))}(0,function(e){!function(){var t=e,r=t.lib,n=r.Base,i=t.enc,a=i.Utf8,o=t.algo;o.HMAC=n.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=a.parse(t));var r=e.blockSize,n=4*r;t.sigBytes>n&&(t=e.finalize(t)),t.clamp();for(var i=this._oKey=t.clone(),o=this._iKey=t.clone(),s=i.words,f=o.words,u=0;u<r;u++)s[u]^=1549556828,f[u]^=909522486;i.sigBytes=o.sigBytes=n,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,r=t.finalize(e);return t.reset(),t.finalize(this._oKey.clone().concat(r))}})}()})},function(e,t,r){(function(e,n){function i(e,r){var n={seen:[],stylize:o};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),b(r)?n.showHidden=r:r&&t._extend(n,r),_(n.showHidden)&&(n.showHidden=!1),_(n.depth)&&(n.depth=2),_(n.colors)&&(n.colors=!1),_(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=a),f(n,e,n.depth)}function a(e,t){var r=i.styles[t];return r?"["+i.colors[r][0]+"m"+e+"["+i.colors[r][1]+"m":e}function o(e,t){return e}function s(e){var t={};return e.forEach(function(e,r){t[e]=!0}),t}function f(e,r,n){if(e.customInspect&&r&&M(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,e);return y(i)||(i=f(e,i,n)),i}var a=u(e,r);if(a)return a;var o=Object.keys(r),b=s(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(r)),A(r)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return c(r);if(0===o.length){if(M(r)){var v=r.name?": "+r.name:"";return e.stylize("[Function"+v+"]","special")}if(S(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(x(r))return e.stylize(Date.prototype.toString.call(r),"date");if(A(r))return c(r)}var m="",g=!1,w=["{","}"];if(p(r)&&(g=!0,w=["[","]"]),M(r)){m=" [Function"+(r.name?": "+r.name:"")+"]"}if(S(r)&&(m=" "+RegExp.prototype.toString.call(r)),x(r)&&(m=" "+Date.prototype.toUTCString.call(r)),A(r)&&(m=" "+c(r)),0===o.length&&(!g||0==r.length))return w[0]+m+w[1];if(n<0)return S(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special");e.seen.push(r);var _;return _=g?h(e,r,n,b,o):o.map(function(t){return l(e,r,n,b,t,g)}),e.seen.pop(),d(_,m,w)}function u(e,t){if(_(t))return e.stylize("undefined","undefined");if(y(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return g(t)?e.stylize(""+t,"number"):b(t)?e.stylize(""+t,"boolean"):v(t)?e.stylize("null","null"):void 0}function c(e){return"["+Error.prototype.toString.call(e)+"]"}function h(e,t,r,n,i){for(var a=[],o=0,s=t.length;o<s;++o)R(t,String(o))?a.push(l(e,t,r,n,String(o),!0)):a.push("");return i.forEach(function(i){i.match(/^\d+$/)||a.push(l(e,t,r,n,i,!0))}),a}function l(e,t,r,n,i,a){var o,s,u;if(u=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]},u.get?s=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(s=e.stylize("[Setter]","special")),R(n,i)||(o="["+i+"]"),s||(e.seen.indexOf(u.value)<0?(s=v(r)?f(e,u.value,null):f(e,u.value,r-1),s.indexOf("\n")>-1&&(s=a?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n"))):s=e.stylize("[Circular]","special")),_(o)){if(a&&i.match(/^\d+$/))return s;o=JSON.stringify(""+i),o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"))}return o+": "+s}function d(e,t,r){var n=0;return e.reduce(function(e,t){return n++,t.indexOf("\n")>=0&&n++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1]:r[0]+t+" "+e.join(", ")+" "+r[1]}function p(e){return Array.isArray(e)}function b(e){return"boolean"==typeof e}function v(e){return null===e}function m(e){return null==e}function g(e){return"number"==typeof e}function y(e){return"string"==typeof e}function w(e){return"symbol"==typeof e}function _(e){return void 0===e}function S(e){return k(e)&&"[object RegExp]"===I(e)}function k(e){return"object"==typeof e&&null!==e}function x(e){return k(e)&&"[object Date]"===I(e)}function A(e){return k(e)&&("[object Error]"===I(e)||e instanceof Error)}function M(e){return"function"==typeof e}function E(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function I(e){return Object.prototype.toString.call(e)}function T(e){return e<10?"0"+e.toString(10):e.toString(10)}function P(){var e=new Date,t=[T(e.getHours()),T(e.getMinutes()),T(e.getSeconds())].join(":");return[e.getDate(),N[e.getMonth()],t].join(" ")}function R(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var B=/%[sdj%]/g;t.format=function(e){if(!y(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(i(arguments[r]));return t.join(" ")}for(var r=1,n=arguments,a=n.length,o=String(e).replace(B,function(e){if("%%"===e)return"%";if(r>=a)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}}),s=n[r];r<a;s=n[++r])v(s)||!k(s)?o+=" "+s:o+=" "+i(s);return o},t.deprecate=function(r,i){function a(){if(!o){if(n.throwDeprecation)throw new Error(i);n.traceDeprecation?console.trace(i):console.error(i),o=!0}return r.apply(this,arguments)}if(_(e.process))return function(){return t.deprecate(r,i).apply(this,arguments)};if(!0===n.noDeprecation)return r;var o=!1;return a};var C,O={};t.debuglog=function(e){if(_(C)&&(C=Object({NODE_ENV:"production"}).NODE_DEBUG||""),e=e.toUpperCase(),!O[e])if(new RegExp("\\b"+e+"\\b","i").test(C)){var r=n.pid;O[e]=function(){var n=t.format.apply(t,arguments);console.error("%s %d: %s",e,r,n)}}else O[e]=function(){};return O[e]},t.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=b,t.isNull=v,t.isNullOrUndefined=m,t.isNumber=g,t.isString=y,t.isSymbol=w,t.isUndefined=_,t.isRegExp=S,t.isObject=k,t.isDate=x,t.isError=A,t.isFunction=M,t.isPrimitive=E,t.isBuffer=r(156);var N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];t.log=function(){console.log("%s - %s",P(),t.format.apply(t,arguments))},t.inherits=r(157),t._extend=function(e,t){if(!t||!k(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e}}).call(t,r(17),r(10))},function(e,t){},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(30),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(s),u=r(65),c=r(66),h=r(4),l=r(40),d=n(l),p=r(6),b=n(p),v=(0,b.default)("wallet"),m=function(){function e(t){if(i(this,e),this.extra=null,this.isDefault=!1,this.lock=!1,this.contract=Object.assign({},h.DEFAULT_ACCOUNT_CONTRACT),t)if("object"===(void 0===t?"undefined":a(t)))this._encrypted=t.key,this._address=t.address,this.label=t.label||"",this.extra=t.extra,this.isDefault=t.isDefault||!1,this.lock=t.lock||!1,this.contract=t.contract||Object.assign({},h.DEFAULT_ACCOUNT_CONTRACT);else if((0,u.isPrivateKey)(t))this._privateKey=t;else if((0,u.isPublicKey)(t,!1))this._publicKey=f.getPublicKeyEncoded(t);else if((0,u.isPublicKey)(t,!0))this._publicKey=t;else if((0,u.isAddress)(t))this._address=t;else if((0,u.isWIF)(t))this._privateKey=f.getPrivateKeyFromWIF(t),this._WIF=t;else{if(!(0,u.isNEP2)(t))throw new ReferenceError("Invalid input: "+t);this._encrypted=t}else this._privateKey=f.generatePrivateKey();if(!this.label)try{this.label=this.address}catch(e){this.label=""}this._updateContractScript()}return o(e,[{key:d.default.inspect.custom,value:function(e,t){return"[Account: "+this.label+"]"}},{key:"_updateContractScript",value:function(){try{if(""===this.contract.script){var e=this.publicKey;this.contract.script=f.getVerificationScriptFromPublicKey(e),v.debug("Updated ContractScript for Account: "+this.label)}}catch(e){}}},{key:"getPublicKey",value:function(){if(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])return this.publicKey;var e=this.publicKey;return f.getPublicKeyUnencoded(e)}},{key:"encrypt",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return this._encrypted=(0,c.encrypt)(this.privateKey,e,t),this}},{key:"decrypt",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return this._WIF=(0,c.decrypt)(this.encrypted,e,t),this._updateContractScript(),this}},{key:"export",value:function(){var e=null;if(this._privateKey&&!this._encrypted)throw new Error("Encrypt private key first!");return this._encrypted&&(e=this._encrypted),{address:this.address,label:this.label,isDefault:this.isDefault,lock:this.lock,key:e,contract:this.contract,extra:this.extra}}},{key:Symbol.toStringTag,get:function(){return"Account"}},{key:"encrypted",get:function(){if(this._encrypted)return this._encrypted;throw new Error("No encrypted key found")}},{key:"WIF",get:function(){return this._WIF?this._WIF:(this._WIF=f.getWIFFromPrivateKey(this._privateKey),this._WIF)}},{key:"privateKey",get:function(){if(this._privateKey)return this._privateKey;if(this._WIF)return this._privateKey=f.getPrivateKeyFromWIF(this._WIF),this._privateKey;throw this._encrypted?new ReferenceError("Private Key encrypted!"):new ReferenceError("No Private Key provided!")}},{key:"publicKey",get:function(){return this._publicKey?this._publicKey:(this._publicKey=f.getPublicKeyFromPrivateKey(this.privateKey),this._publicKey)}},{key:"scriptHash",get:function(){return this._scriptHash?this._scriptHash:this._address?(this._scriptHash=f.getScriptHashFromAddress(this.address),this._scriptHash):(this._scriptHash=f.getScriptHashFromPublicKey(this.publicKey),this._scriptHash)}},{key:"address",get:function(){return this._address?this._address:(this._address=f.getAddressFromScriptHash(this.scriptHash),this._address)}}]),e}();t.default=m},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClaimItem=t.Coin=t.AssetBalance=void 0;var n=r(2),i=(t.AssetBalance=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{balance:e.balance?new n.Fixed8(e.balance):new n.Fixed8(0),unspent:e.unspent?e.unspent.map(function(e){return i(e)}):[],spent:e.spent?e.spent.map(function(e){return i(e)}):[],unconfirmed:e.unconfirmed?e.unconfirmed.map(function(e){return i(e)}):[]}},t.Coin=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{index:e.index||0,txid:e.txid||"",value:e.value?new n.Fixed8(e.value):new n.Fixed8(0)}});t.ClaimItem=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{claim:e.claim?new n.Fixed8(e.claim):new n.Fixed8(0),txid:e.txid||"",index:e.index||0,value:e.value||0,start:e.start?new n.Fixed8(e.start):null,end:e.end?new n.Fixed8(e.end):null}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getExclusive=t.deserializeExclusive=t.serializeExclusive=void 0;var n=r(2),i=r(28),a=function(e){for(var t={claims:[]},r=e.readVarInt(),n=0;n<r;n++)t.claims.push((0,i.deserializeTransactionInput)(e));return t},o=function(e){if(2!==e.type)throw new Error;var t=(0,n.num2VarInt)(e.claims.length),r=!0,a=!1,o=void 0;try{for(var s,f=e.claims[Symbol.iterator]();!(r=(s=f.next()).done);r=!0){var u=s.value;t+=(0,i.serializeTransactionInput)(u)}}catch(e){a=!0,o=e}finally{try{!r&&f.return&&f.return()}finally{if(a)throw o}}return t},s=function(e){return Object.assign({claims:[]},{claims:e.claims})},f=function(e){return{}},u=function(e){if(128!==e.type)throw new Error;return""},c=function(e){return{}},h=function(e){return{script:e.readVarBytes(),gas:parseInt(e.str.substr(2,2),2)>=1?(0,n.fixed82num)(e.read(8)):0}},l=function(e){if(209!==e.type)throw new Error;var t=(0,n.num2VarInt)(e.script.length/2);return t+=e.script,e.version>=1&&(t+=(0,n.num2fixed8)(e.gas)),t},d=function(e){return{script:e.script||"",gas:e.gas||0}};t.serializeExclusive={2:o,128:u,209:l},t.deserializeExclusive={2:a,128:f,209:h},t.getExclusive={2:s,128:c,209:d}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ScriptBuilder=t.OpCode=t.ContractParam=void 0;var i=r(172);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var a=r(70),o=n(a),s=r(69),f=n(s),u=r(173),c=n(u),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(i);t.default={create:{contractParam:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return new(Function.prototype.bind.apply(c.default,[null].concat(t)))},script:h.createScript,scriptBuilder:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return new(Function.prototype.bind.apply(f.default,[null].concat(t)))},deployScript:function(){return h.generateDeployScript.apply(h,arguments)}}},t.ContractParam=c.default,t.OpCode=o.default,t.ScriptBuilder=f.default},function(e,t,r){"use strict";(function(t){function n(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i=r(9),a=r(179),o={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(74):void 0!==t&&(e=r(74)),e}(),transformRequest:[function(e,t){return a(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(e){s.headers[e]={}}),i.forEach(["post","put","patch"],function(e){s.headers[e]=i.merge(o)}),e.exports=s}).call(t,r(10))},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.doSendAsset=t.doMintTokens=t.doClaimAllGas=t.getWalletDBHeight=t.getTransactionHistory=t.getRPCEndpoint=t.getMaxClaimAmount=t.getClaims=t.getBalance=t.getAPIEndpoint=t.name=void 0;var i=r(29),a=n(i),o=r(11),s=r(21),f=r(24),u=r(4),c=r(2),h=r(6),l=n(h),d=(0,l.default)("api"),p=(t.name="neonDB",t.getAPIEndpoint=function(e){switch(e){case"MainNet":return"http://api.wallet.cityofzion.io";case"TestNet":return"http://testnet-api.wallet.cityofzion.io";default:return e}}),b=t.getBalance=function(e,t){var r=p(e);return a.default.get(r+"/v2/address/balance/"+t).then(function(r){var n=new o.Balance({net:e,address:r.data.address});return Object.keys(r.data).map(function(e){"net"!==e&&"address"!==e&&n.addAsset(e,r.data[e])}),d.info("Retrieved Balance for "+t+" from neonDB "+e),n})},v=t.getClaims=function(e,t){var r=p(e);return a.default.get(r+"/v2/address/claims/"+t).then(function(r){var n=r.data;return n.claims=n.claims.map(function(e){return{claim:new c.Fixed8(e.claim).div(1e8),index:e.index,txid:e.txid,start:new c.Fixed8(e.start),end:new c.Fixed8(e.end),value:e.value}}),d.info("Retrieved Claims for "+t+" from neonDB "+e),new o.Claims(n)})},m=(t.getMaxClaimAmount=function(e,t){var r=p(e);return a.default.get(r+"/v2/address/claims/"+t).then(function(r){return d.info("Retrieved maximum amount of gas claimable after spending all NEO for "+t+" from neonDB "+e),new c.Fixed8(r.data.total_claim+r.data.total_unspent_claim).div(1e8)})},t.getRPCEndpoint=function(e){var t=p(e);return a.default.get(t+"/v2/network/nodes").then(function(e){var t=e.data.nodes.filter(function(e){return e.status}),r=0,n=[],i=!0,a=!1,o=void 0;try{for(var s,f=t[Symbol.iterator]();!(i=(s=f.next()).done);i=!0){var u=s.value;u.block_height>r?(r=u.block_height,n=[u]):u.block_height===r&&n.push(u)}}catch(e){a=!0,o=e}finally{try{!i&&f.return&&f.return()}finally{if(a)throw o}}return n[Math.floor(Math.random()*n.length)].url})});t.getTransactionHistory=function(e,t){var r=p(e);return a.default.get(r+"/v2/address/history/"+t).then(function(r){return d.info("Retrieved History for "+t+" from neonDB "+e),r.data.history})},t.getWalletDBHeight=function(e){var t=p(e);return a.default.get(t+"/v2/block/height").then(function(e){return parseInt(e.data.block_height)})},t.doClaimAllGas=function(e,t,r){d.warn("doClaimAllGas will be deprecated in favor of claimGas");var n=new o.Account(t),i=m(e),a=v(e,n.address),u=void 0,c=void 0;return Promise.all([i,a]).then(function(e){c=e[0];var t=e[1];if(0===t.length)throw new Error("No claimable gas!");var i=s.Transaction.createClaimTx(n.publicKey,t);return r?r(i,n.publicKey):i.sign(n.privateKey)}).then(function(e){return u=e,f.Query.sendRawTransaction(u).execute(c)}).then(function(e){return!0===e.result?e.txid=u:d.error("Transaction failed: "+u.serialize()),e})},t.doMintTokens=function(e,t,r,n,i,a){d.warn("doMintTokens will be deprecated in favor of doInvoke");var h=new o.Account(r),l=[{assetId:u.ASSET_ID.NEO,value:n,scriptHash:t}],p={operation:"mintTokens",scriptHash:t,args:[]},v=m(e),g=b(e,h.address),y=void 0,w=void 0;return Promise.all([v,g]).then(function(e){w=e[0];var r=e[1],n=[{data:(0,c.reverseHex)(t),usage:s.TxAttrUsage.Script}],o=s.Transaction.createInvocationTx(r,l,p,i,{attributes:n});return a?a(o,h.publicKey):o.sign(h.privateKey)}).then(function(e){return y=e,f.Query.getContractState(t).execute(w)}).then(function(e){var t={invocationScript:"0000",verificationScript:e.result.script};return y.scripts.unshift(t),f.Query.sendRawTransaction(y).execute(w)}).then(function(e){return!0===e.result?e.txid=y.hash:d.error("Transaction failed: "+y.serialize()),e})},t.doSendAsset=function(e,t,r,n,i){d.warn("doSendAsset will be deprecated in favor of sendAsset");var a=new o.Account(r),c=new o.Account(t),h=m(e),l=b(e,a.address),p=Object.keys(n).map(function(e){return{assetId:u.ASSET_ID[e],value:n[e],scriptHash:c.scriptHash}}),v=void 0,g=void 0;return Promise.all([h,l]).then(function(e){g=e[0];var t=e[1],r=s.Transaction.createContractTx(t,p);return i?i(r,a.publicKey):r.sign(a.privateKey)}).then(function(e){return v=e,f.Query.sendRawTransaction(v).execute(g)}).then(function(e){return!0===e.result?e.txid=v.hash:d.error("Transaction failed: "+v.serialize()),e})}},function(e,t){var r={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t,r){"use strict";function n(e){var t=i("sha256").update(e).digest();return i("sha256").update(t).digest()}var i=r(86),a=r(106);e.exports=a(n)},function(e,t,r){function n(){i.call(this)}e.exports=n;var i=r(31).EventEmitter;r(1)(n,i),n.Readable=r(32),n.Writable=r(96),n.Duplex=r(97),n.Transform=r(98),n.PassThrough=r(99),n.Stream=n,n.prototype.pipe=function(e,t){function r(t){e.writable&&!1===e.write(t)&&u.pause&&u.pause()}function n(){u.readable&&u.resume&&u.resume()}function a(){c||(c=!0,e.end())}function o(){c||(c=!0,"function"==typeof e.destroy&&e.destroy())}function s(e){if(f(),0===i.listenerCount(this,"error"))throw e}function f(){u.removeListener("data",r),e.removeListener("drain",n),u.removeListener("end",a),u.removeListener("close",o),u.removeListener("error",s),e.removeListener("error",s),u.removeListener("end",f),u.removeListener("close",f),e.removeListener("close",f)}var u=this;u.on("data",r),e.on("drain",n),e._isStdio||t&&!1===t.end||(u.on("end",a),u.on("close",o));var c=!1;return u.on("error",s),e.on("error",s),u.on("end",f),u.on("close",f),e.on("close",f),e.emit("pipe",u),e}},function(e,t,r){"use strict";(function(t,n){function i(e){return z.from(e)}function a(e){return z.isBuffer(e)||e instanceof L}function o(e,t,r){if("function"==typeof e.prependListener)return e.prependListener(t,r);e._events&&e._events[t]?O(e._events[t])?e._events[t].unshift(r):e._events[t]=[r,e._events[t]]:e.on(t,r)}function s(e,t){C=C||r(14),e=e||{},this.objectMode=!!e.objectMode,t instanceof C&&(this.objectMode=this.objectMode||!!e.readableObjectMode);var n=e.highWaterMark,i=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:i,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new q,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(D||(D=r(35).StringDecoder),this.decoder=new D(e.encoding),this.encoding=e.encoding)}function f(e){if(C=C||r(14),!(this instanceof f))return new f(e);this._readableState=new s(e,this),this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),j.call(this)}function u(e,t,r,n,a){var o=e._readableState;if(null===t)o.reading=!1,b(e,o);else{var s;a||(s=h(o,t)),s?e.emit("error",s):o.objectMode||t&&t.length>0?("string"==typeof t||o.objectMode||Object.getPrototypeOf(t)===z.prototype||(t=i(t)),n?o.endEmitted?e.emit("error",new Error("stream.unshift() after end event")):c(e,o,t,!0):o.ended?e.emit("error",new Error("stream.push() after EOF")):(o.reading=!1,o.decoder&&!r?(t=o.decoder.write(t),o.objectMode||0!==t.length?c(e,o,t,!1):g(e,o)):c(e,o,t,!1))):n||(o.reading=!1)}return l(o)}function c(e,t,r,n){t.flowing&&0===t.length&&!t.sync?(e.emit("data",r),e.read(0)):(t.length+=t.objectMode?1:r.length,n?t.buffer.unshift(r):t.buffer.push(r),t.needReadable&&v(e)),g(e,t)}function h(e,t){var r;return a(t)||"string"==typeof t||void 0===t||e.objectMode||(r=new TypeError("Invalid non-string/buffer chunk")),r}function l(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}function d(e){return e>=V?e=V:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}function p(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!==e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=d(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function b(e,t){if(!t.ended){if(t.decoder){var r=t.decoder.end();r&&r.length&&(t.buffer.push(r),t.length+=t.objectMode?1:r.length)}t.ended=!0,v(e)}}function v(e){var t=e._readableState;t.needReadable=!1,t.emittedReadable||(U("emitReadable",t.flowing),t.emittedReadable=!0,t.sync?B(m,e):m(e))}function m(e){U("emit readable"),e.emit("readable"),x(e)}function g(e,t){t.readingMore||(t.readingMore=!0,B(y,e,t))}function y(e,t){for(var r=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(U("maybeReadMore read 0"),e.read(0),r!==t.length);)r=t.length;t.readingMore=!1}function w(e){return function(){var t=e._readableState;U("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&N(e,"data")&&(t.flowing=!0,x(e))}}function _(e){U("readable nexttick read 0"),e.read(0)}function S(e,t){t.resumeScheduled||(t.resumeScheduled=!0,B(k,e,t))}function k(e,t){t.reading||(U("resume read 0"),e.read(0)),t.resumeScheduled=!1,t.awaitDrain=0,e.emit("resume"),x(e),t.flowing&&!t.reading&&e.read(0)}function x(e){var t=e._readableState;for(U("flow",t.flowing);t.flowing&&null!==e.read(););}function A(e,t){if(0===t.length)return null;var r;return t.objectMode?r=t.buffer.shift():!e||e>=t.length?(r=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.head.data:t.buffer.concat(t.length),t.buffer.clear()):r=M(e,t.buffer,t.decoder),r}function M(e,t,r){var n;return e<t.head.data.length?(n=t.head.data.slice(0,e),t.head.data=t.head.data.slice(e)):n=e===t.head.data.length?t.shift():r?E(e,t):I(e,t),n}function E(e,t){var r=t.head,n=1,i=r.data;for(e-=i.length;r=r.next;){var a=r.data,o=e>a.length?a.length:e;if(o===a.length?i+=a:i+=a.slice(0,e),0===(e-=o)){o===a.length?(++n,r.next?t.head=r.next:t.head=t.tail=null):(t.head=r,r.data=a.slice(o));break}++n}return t.length-=n,i}function I(e,t){var r=z.allocUnsafe(e),n=t.head,i=1;for(n.data.copy(r),e-=n.data.length;n=n.next;){var a=n.data,o=e>a.length?a.length:e;if(a.copy(r,r.length-e,0,o),0===(e-=o)){o===a.length?(++i,n.next?t.head=n.next:t.head=t.tail=null):(t.head=n,n.data=a.slice(o));break}++i}return t.length-=i,r}function T(e){var t=e._readableState;if(t.length>0)throw new Error('"endReadable()" called on non-empty stream');t.endEmitted||(t.ended=!0,B(P,t,e))}function P(e,t){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}function R(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}var B=r(25);e.exports=f;var C,O=r(48);f.ReadableState=s;var N=(r(31).EventEmitter,function(e,t){return e.listeners(t).length}),j=r(52),z=r(5).Buffer,L=t.Uint8Array||function(){},F=r(22);F.inherits=r(1);var H=r(91),U=void 0;U=H&&H.debuglog?H.debuglog("stream"):function(){};var D,q=r(92),K=r(53);F.inherits(f,j);var Y=["error","close","destroy","pause","resume"];Object.defineProperty(f.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}}),f.prototype.destroy=K.destroy,f.prototype._undestroy=K.undestroy,f.prototype._destroy=function(e,t){this.push(null),t(e)},f.prototype.push=function(e,t){var r,n=this._readableState;return n.objectMode?r=!0:"string"==typeof e&&(t=t||n.defaultEncoding,t!==n.encoding&&(e=z.from(e,t),t=""),r=!0),u(this,e,t,!1,r)},f.prototype.unshift=function(e){return u(this,e,null,!0,!1)},f.prototype.isPaused=function(){return!1===this._readableState.flowing},f.prototype.setEncoding=function(e){return D||(D=r(35).StringDecoder),this._readableState.decoder=new D(e),this._readableState.encoding=e,this};var V=8388608;f.prototype.read=function(e){U("read",e),e=parseInt(e,10);var t=this._readableState,r=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return U("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?T(this):v(this),null;if(0===(e=p(e,t))&&t.ended)return 0===t.length&&T(this),null;var n=t.needReadable;U("need readable",n),(0===t.length||t.length-e<t.highWaterMark)&&(n=!0,U("length less than watermark",n)),t.ended||t.reading?(n=!1,U("reading or ended",n)):n&&(U("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=p(r,t)));var i;return i=e>0?A(e,t):null,null===i?(t.needReadable=!0,e=0):t.length-=e,0===t.length&&(t.ended||(t.needReadable=!0),r!==e&&t.ended&&T(this)),null!==i&&this.emit("data",i),i},f.prototype._read=function(e){this.emit("error",new Error("_read() is not implemented"))},f.prototype.pipe=function(e,t){function r(e,t){U("onunpipe"),e===l&&t&&!1===t.hasUnpiped&&(t.hasUnpiped=!0,a())}function i(){U("onend"),e.end()}function a(){U("cleanup"),e.removeListener("close",u),e.removeListener("finish",c),e.removeListener("drain",v),e.removeListener("error",f),e.removeListener("unpipe",r),l.removeListener("end",i),l.removeListener("end",h),l.removeListener("data",s),m=!0,!d.awaitDrain||e._writableState&&!e._writableState.needDrain||v()}function s(t){U("ondata"),g=!1,!1!==e.write(t)||g||((1===d.pipesCount&&d.pipes===e||d.pipesCount>1&&-1!==R(d.pipes,e))&&!m&&(U("false write response, pause",l._readableState.awaitDrain),l._readableState.awaitDrain++,g=!0),l.pause())}function f(t){U("onerror",t),h(),e.removeListener("error",f),0===N(e,"error")&&e.emit("error",t)}function u(){e.removeListener("finish",c),h()}function c(){U("onfinish"),e.removeListener("close",u),h()}function h(){U("unpipe"),l.unpipe(e)}var l=this,d=this._readableState;switch(d.pipesCount){case 0:d.pipes=e;break;case 1:d.pipes=[d.pipes,e];break;default:d.pipes.push(e)}d.pipesCount+=1,U("pipe count=%d opts=%j",d.pipesCount,t);var p=(!t||!1!==t.end)&&e!==n.stdout&&e!==n.stderr,b=p?i:h;d.endEmitted?B(b):l.once("end",b),e.on("unpipe",r);var v=w(l);e.on("drain",v);var m=!1,g=!1;return l.on("data",s),o(e,"error",f),e.once("close",u),e.once("finish",c),e.emit("pipe",l),d.flowing||(U("pipe resume"),l.resume()),e},f.prototype.unpipe=function(e){var t=this._readableState,r={hasUnpiped:!1};if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,r),this);if(!e){var n=t.pipes,i=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var a=0;a<i;a++)n[a].emit("unpipe",this,r);return this}var o=R(t.pipes,e);return-1===o?this:(t.pipes.splice(o,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,r),this)},f.prototype.on=function(e,t){var r=j.prototype.on.call(this,e,t);if("data"===e)!1!==this._readableState.flowing&&this.resume();else if("readable"===e){var n=this._readableState;n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.emittedReadable=!1,n.reading?n.length&&v(this):B(_,this))}return r},f.prototype.addListener=f.prototype.on,f.prototype.resume=function(){var e=this._readableState;return e.flowing||(U("resume"),e.flowing=!0,S(this,e)),this},f.prototype.pause=function(){return U("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(U("pause"),this._readableState.flowing=!1,this.emit("pause")),this},f.prototype.wrap=function(e){var t=this._readableState,r=!1,n=this;e.on("end",function(){if(U("wrapped end"),t.decoder&&!t.ended){var e=t.decoder.end();e&&e.length&&n.push(e)}n.push(null)}),e.on("data",function(i){if(U("wrapped data"),t.decoder&&(i=t.decoder.write(i)),(!t.objectMode||null!==i&&void 0!==i)&&(t.objectMode||i&&i.length)){n.push(i)||(r=!0,e.pause())}});for(var i in e)void 0===this[i]&&"function"==typeof e[i]&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i));for(var a=0;a<Y.length;a++)e.on(Y[a],n.emit.bind(n,Y[a]));return n._read=function(t){U("wrapped _read",t),r&&(r=!1,e.resume())},n},f._fromList=A}).call(t,r(17),r(10))},function(e,t,r){e.exports=r(31).EventEmitter},function(e,t,r){"use strict";function n(e,t){var r=this,n=this._readableState&&this._readableState.destroyed,i=this._writableState&&this._writableState.destroyed;if(n||i)return void(t?t(e):!e||this._writableState&&this._writableState.errorEmitted||o(a,this,e));this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,function(e){!t&&e?(o(a,r,e),r._writableState&&(r._writableState.errorEmitted=!0)):t&&t(e)})}function i(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}function a(e,t){e.emit("error",t)}var o=r(25);e.exports={destroy:n,undestroy:i}},function(e,t,r){"use strict";function n(e){this.afterTransform=function(t,r){return i(e,t,r)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null,this.writeencoding=null}function i(e,t,r){var n=e._transformState;n.transforming=!1;var i=n.writecb;if(!i)return e.emit("error",new Error("write callback called multiple times"));n.writechunk=null,n.writecb=null,null!==r&&void 0!==r&&e.push(r),i(t);var a=e._readableState;a.reading=!1,(a.needReadable||a.length<a.highWaterMark)&&e._read(a.highWaterMark)}function a(e){if(!(this instanceof a))return new a(e);s.call(this,e),this._transformState=new n(this);var t=this;this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.once("prefinish",function(){"function"==typeof this._flush?this._flush(function(e,r){o(t,e,r)}):o(t)})}function o(e,t,r){if(t)return e.emit("error",t);null!==r&&void 0!==r&&e.push(r);var n=e._writableState,i=e._transformState;if(n.length)throw new Error("Calling transform done when ws.length != 0");if(i.transforming)throw new Error("Calling transform done when still transforming");return e.push(null)}e.exports=a;var s=r(14),f=r(22);f.inherits=r(1),f.inherits(a,s),a.prototype.push=function(e,t){return this._transformState.needTransform=!1,s.prototype.push.call(this,e,t)},a.prototype._transform=function(e,t,r){throw new Error("_transform() is not implemented")},a.prototype._write=function(e,t,r){var n=this._transformState;if(n.writecb=r,n.writechunk=e,n.writeencoding=t,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},a.prototype._read=function(e){var t=this._transformState;null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0},a.prototype._destroy=function(e,t){var r=this;s.prototype._destroy.call(this,e,function(e){t(e),r.emit("close")})}},function(e,t,r){function n(){this.init(),this._w=p,h.call(this,64,56)}function i(e,t,r){return r^e&(t^r)}function a(e,t,r){return e&t|r&(e|t)}function o(e){return(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10)}function s(e){return(e>>>6|e<<26)^(e>>>11|e<<21)^(e>>>25|e<<7)}function f(e){return(e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3}function u(e){return(e>>>17|e<<15)^(e>>>19|e<<13)^e>>>10}var c=r(1),h=r(18),l=r(5).Buffer,d=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],p=new Array(64);c(n,h),n.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},n.prototype._update=function(e){for(var t=this._w,r=0|this._a,n=0|this._b,c=0|this._c,h=0|this._d,l=0|this._e,p=0|this._f,b=0|this._g,v=0|this._h,m=0;m<16;++m)t[m]=e.readInt32BE(4*m);for(;m<64;++m)t[m]=u(t[m-2])+t[m-7]+f(t[m-15])+t[m-16]|0;for(var g=0;g<64;++g){var y=v+s(l)+i(l,p,b)+d[g]+t[g]|0,w=o(r)+a(r,n,c)|0;v=b,b=p,p=l,l=h+y|0,h=c,c=n,n=r,r=y+w|0}this._a=r+this._a|0,this._b=n+this._b|0,this._c=c+this._c|0,this._d=h+this._d|0,this._e=l+this._e|0,this._f=p+this._f|0,this._g=b+this._g|0,this._h=v+this._h|0},n.prototype._hash=function(){var e=l.allocUnsafe(32);return e.writeInt32BE(this._a,0),e.writeInt32BE(this._b,4),e.writeInt32BE(this._c,8),e.writeInt32BE(this._d,12),e.writeInt32BE(this._e,16),e.writeInt32BE(this._f,20),e.writeInt32BE(this._g,24),e.writeInt32BE(this._h,28),e},e.exports=n},function(e,t,r){function n(){this.init(),this._w=m,p.call(this,128,112)}function i(e,t,r){return r^e&(t^r)}function a(e,t,r){return e&t|r&(e|t)}function o(e,t){return(e>>>28|t<<4)^(t>>>2|e<<30)^(t>>>7|e<<25)}function s(e,t){return(e>>>14|t<<18)^(e>>>18|t<<14)^(t>>>9|e<<23)}function f(e,t){return(e>>>1|t<<31)^(e>>>8|t<<24)^e>>>7}function u(e,t){return(e>>>1|t<<31)^(e>>>8|t<<24)^(e>>>7|t<<25)}function c(e,t){return(e>>>19|t<<13)^(t>>>29|e<<3)^e>>>6}function h(e,t){return(e>>>19|t<<13)^(t>>>29|e<<3)^(e>>>6|t<<26)}function l(e,t){return e>>>0<t>>>0?1:0}var d=r(1),p=r(18),b=r(5).Buffer,v=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],m=new Array(160);d(n,p),n.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},n.prototype._update=function(e){for(var t=this._w,r=0|this._ah,n=0|this._bh,d=0|this._ch,p=0|this._dh,b=0|this._eh,m=0|this._fh,g=0|this._gh,y=0|this._hh,w=0|this._al,_=0|this._bl,S=0|this._cl,k=0|this._dl,x=0|this._el,A=0|this._fl,M=0|this._gl,E=0|this._hl,I=0;I<32;I+=2)t[I]=e.readInt32BE(4*I),t[I+1]=e.readInt32BE(4*I+4);for(;I<160;I+=2){var T=t[I-30],P=t[I-30+1],R=f(T,P),B=u(P,T);T=t[I-4],P=t[I-4+1];var C=c(T,P),O=h(P,T),N=t[I-14],j=t[I-14+1],z=t[I-32],L=t[I-32+1],F=B+j|0,H=R+N+l(F,B)|0;F=F+O|0,H=H+C+l(F,O)|0,F=F+L|0,H=H+z+l(F,L)|0,t[I]=H,t[I+1]=F}for(var U=0;U<160;U+=2){H=t[U],F=t[U+1];var D=a(r,n,d),q=a(w,_,S),K=o(r,w),Y=o(w,r),V=s(b,x),W=s(x,b),X=v[U],Z=v[U+1],G=i(b,m,g),Q=i(x,A,M),$=E+W|0,J=y+V+l($,E)|0;$=$+Q|0,J=J+G+l($,Q)|0,$=$+Z|0,J=J+X+l($,Z)|0,$=$+F|0,J=J+H+l($,F)|0;var ee=Y+q|0,te=K+D+l(ee,Y)|0;y=g,E=M,g=m,M=A,m=b,A=x,x=k+$|0,b=p+J+l(x,k)|0,p=d,k=S,d=n,S=_,n=r,_=w,w=$+ee|0,r=J+te+l(w,$)|0}this._al=this._al+w|0,this._bl=this._bl+_|0,this._cl=this._cl+S|0,this._dl=this._dl+k|0,this._el=this._el+x|0,this._fl=this._fl+A|0,this._gl=this._gl+M|0,this._hl=this._hl+E|0,this._ah=this._ah+r+l(this._al,w)|0,this._bh=this._bh+n+l(this._bl,_)|0,this._ch=this._ch+d+l(this._cl,S)|0,this._dh=this._dh+p+l(this._dl,k)|0,this._eh=this._eh+b+l(this._el,x)|0,this._fh=this._fh+m+l(this._fl,A)|0,this._gh=this._gh+g+l(this._gl,M)|0,this._hh=this._hh+y+l(this._hl,E)|0},n.prototype._hash=function(){function e(e,r,n){t.writeInt32BE(e,n),t.writeInt32BE(r,n+4)}var t=b.allocUnsafe(64);return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),e(this._gh,this._gl,48),e(this._hh,this._hl,56),t},e.exports=n},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){"use strict";function n(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"!=typeof e){for(var n=0;n<e.length;n++)r[n]=0|e[n];return r}if("hex"===t){e=e.replace(/[^a-z0-9]+/gi,""),e.length%2!=0&&(e="0"+e);for(var n=0;n<e.length;n+=2)r.push(parseInt(e[n]+e[n+1],16))}else for(var n=0;n<e.length;n++){var i=e.charCodeAt(n),a=i>>8,o=255&i;a?r.push(a,o):r.push(o)}return r}function i(e){return 1===e.length?"0"+e:e}function a(e){for(var t="",r=0;r<e.length;r++)t+=i(e[r].toString(16));return t}var o=t;o.toArray=n,o.zero2=i,o.toHex=a,o.encode=function(e,t){return"hex"===t?a(e):e}},function(e,t,r){"use strict";function n(e,t,r,n){return 0===e?i(t,r,n):1===e||3===e?o(t,r,n):2===e?a(t,r,n):void 0}function i(e,t,r){return e&t^~e&r}function a(e,t,r){return e&t^e&r^t&r}function o(e,t,r){return e^t^r}function s(e){return l(e,2)^l(e,13)^l(e,22)}function f(e){return l(e,6)^l(e,11)^l(e,25)}function u(e){return l(e,7)^l(e,18)^e>>>3}function c(e){return l(e,17)^l(e,19)^e>>>10}var h=r(12),l=h.rotr32;t.ft_1=n,t.ch32=i,t.maj32=a,t.p32=o,t.s0_256=s,t.s1_256=f,t.g0_256=u,t.g1_256=c},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;m.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=g,this.W=new Array(64)}var i=r(12),a=r(23),o=r(59),s=r(15),f=i.sum32,u=i.sum32_4,c=i.sum32_5,h=o.ch32,l=o.maj32,d=o.s0_256,p=o.s1_256,b=o.g0_256,v=o.g1_256,m=a.BlockHash,g=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];i.inherits(n,m),e.exports=n,n.blockSize=512,n.outSize=256,n.hmacStrength=192,n.padLength=64,n.prototype._update=function(e,t){for(var r=this.W,n=0;n<16;n++)r[n]=e[t+n];for(;n<r.length;n++)r[n]=u(v(r[n-2]),r[n-7],b(r[n-15]),r[n-16]);var i=this.h[0],a=this.h[1],o=this.h[2],m=this.h[3],g=this.h[4],y=this.h[5],w=this.h[6],_=this.h[7];for(s(this.k.length===r.length),n=0;n<r.length;n++){var S=c(_,p(g),h(g,y,w),this.k[n],r[n]),k=f(d(i),l(i,a,o));_=w,w=y,y=g,g=f(m,S),m=o,o=a,a=i,i=f(S,k)}this.h[0]=f(this.h[0],i),this.h[1]=f(this.h[1],a),this.h[2]=f(this.h[2],o),this.h[3]=f(this.h[3],m),this.h[4]=f(this.h[4],g),this.h[5]=f(this.h[5],y),this.h[6]=f(this.h[6],w),this.h[7]=f(this.h[7],_)},n.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h,"big"):i.split32(this.h,"big")}},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;P.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=R,this.W=new Array(160)}function i(e,t,r,n,i){var a=e&r^~e&i;return a<0&&(a+=4294967296),a}function a(e,t,r,n,i,a){var o=t&n^~t&a;return o<0&&(o+=4294967296),o}function o(e,t,r,n,i){var a=e&r^e&i^r&i;return a<0&&(a+=4294967296),a}function s(e,t,r,n,i,a){var o=t&n^t&a^n&a;return o<0&&(o+=4294967296),o}function f(e,t){var r=y(e,t,28),n=y(t,e,2),i=y(t,e,7),a=r^n^i;return a<0&&(a+=4294967296),a}function u(e,t){var r=w(e,t,28),n=w(t,e,2),i=w(t,e,7),a=r^n^i;return a<0&&(a+=4294967296),a}function c(e,t){var r=y(e,t,14),n=y(e,t,18),i=y(t,e,9),a=r^n^i;return a<0&&(a+=4294967296),a}function h(e,t){var r=w(e,t,14),n=w(e,t,18),i=w(t,e,9),a=r^n^i;return a<0&&(a+=4294967296),a}function l(e,t){var r=y(e,t,1),n=y(e,t,8),i=_(e,t,7),a=r^n^i;return a<0&&(a+=4294967296),a}function d(e,t){var r=w(e,t,1),n=w(e,t,8),i=S(e,t,7),a=r^n^i;return a<0&&(a+=4294967296),a}function p(e,t){var r=y(e,t,19),n=y(t,e,29),i=_(e,t,6),a=r^n^i;return a<0&&(a+=4294967296),a}function b(e,t){var r=w(e,t,19),n=w(t,e,29),i=S(e,t,6),a=r^n^i;return a<0&&(a+=4294967296),a}var v=r(12),m=r(23),g=r(15),y=v.rotr64_hi,w=v.rotr64_lo,_=v.shr64_hi,S=v.shr64_lo,k=v.sum64,x=v.sum64_hi,A=v.sum64_lo,M=v.sum64_4_hi,E=v.sum64_4_lo,I=v.sum64_5_hi,T=v.sum64_5_lo,P=m.BlockHash,R=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];v.inherits(n,P),e.exports=n,n.blockSize=1024,n.outSize=512,n.hmacStrength=192,n.padLength=128,n.prototype._prepareBlock=function(e,t){for(var r=this.W,n=0;n<32;n++)r[n]=e[t+n];for(;n<r.length;n+=2){var i=p(r[n-4],r[n-3]),a=b(r[n-4],r[n-3]),o=r[n-14],s=r[n-13],f=l(r[n-30],r[n-29]),u=d(r[n-30],r[n-29]),c=r[n-32],h=r[n-31];r[n]=M(i,a,o,s,f,u,c,h),r[n+1]=E(i,a,o,s,f,u,c,h)}},n.prototype._update=function(e,t){this._prepareBlock(e,t);var r=this.W,n=this.h[0],l=this.h[1],d=this.h[2],p=this.h[3],b=this.h[4],v=this.h[5],m=this.h[6],y=this.h[7],w=this.h[8],_=this.h[9],S=this.h[10],M=this.h[11],E=this.h[12],P=this.h[13],R=this.h[14],B=this.h[15];g(this.k.length===r.length);for(var C=0;C<r.length;C+=2){var O=R,N=B,j=c(w,_),z=h(w,_),L=i(w,_,S,M,E),F=a(w,_,S,M,E,P),H=this.k[C],U=this.k[C+1],D=r[C],q=r[C+1],K=I(O,N,j,z,L,F,H,U,D,q),Y=T(O,N,j,z,L,F,H,U,D,q);O=f(n,l),N=u(n,l),j=o(n,l,d,p,b),z=s(n,l,d,p,b,v);var V=x(O,N,j,z),W=A(O,N,j,z);R=E,B=P,E=S,P=M,S=w,M=_,w=x(m,y,K,Y),_=A(y,y,K,Y),m=b,y=v,b=d,v=p,d=n,p=l,n=x(K,Y,V,W),l=A(K,Y,V,W)}k(this.h,0,n,l),k(this.h,2,d,p),k(this.h,4,b,v),k(this.h,6,m,y),k(this.h,8,w,_),k(this.h,10,S,M),k(this.h,12,E,P),k(this.h,14,R,B)},n.prototype._digest=function(e){return"hex"===e?v.toHex32(this.h,"big"):v.split32(this.h,"big")}},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(27),r(132),r(133),r(19),r(20),r(38),r(63),r(134),r(64),r(135),r(136),r(137),r(39),r(138),r(16),r(3),r(139),r(140),r(141),r(142),r(143),r(144),r(145),r(146),r(147),r(148),r(149),r(150),r(151),r(152),r(153),r(154))}(0,function(e){return e})},function(e,t,r){!function(n,i){e.exports=t=i(r(0))}(0,function(e){return function(t){var r=e,n=r.lib,i=n.WordArray,a=n.Hasher,o=r.algo,s=[],f=[];!function(){function e(e){return 4294967296*(e-(0|e))|0}for(var r=2,n=0;n<64;)(function(e){for(var r=t.sqrt(e),n=2;n<=r;n++)if(!(e%n))return!1;return!0})(r)&&(n<8&&(s[n]=e(t.pow(r,.5))),f[n]=e(t.pow(r,1/3)),n++),r++}();var u=[],c=o.SHA256=a.extend({_doReset:function(){this._hash=new i.init(s.slice(0))},_doProcessBlock:function(e,t){for(var r=this._hash.words,n=r[0],i=r[1],a=r[2],o=r[3],s=r[4],c=r[5],h=r[6],l=r[7],d=0;d<64;d++){if(d<16)u[d]=0|e[t+d];else{var p=u[d-15],b=(p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3,v=u[d-2],m=(v<<15|v>>>17)^(v<<13|v>>>19)^v>>>10;u[d]=b+u[d-7]+m+u[d-16]}var g=s&c^~s&h,y=n&i^n&a^i&a,w=(n<<30|n>>>2)^(n<<19|n>>>13)^(n<<10|n>>>22),_=(s<<26|s>>>6)^(s<<21|s>>>11)^(s<<7|s>>>25),S=l+_+g+f[d]+u[d],k=w+y;l=h,h=c,c=s,s=o+S|0,o=a,a=i,i=n,n=S+k|0}r[0]=r[0]+n|0,r[1]=r[1]+i|0,r[2]=r[2]+a|0,r[3]=r[3]+o|0,r[4]=r[4]+s|0,r[5]=r[5]+c|0,r[6]=r[6]+h|0,r[7]=r[7]+l|0},_doFinalize:function(){var e=this._data,r=e.words,n=8*this._nDataBytes,i=8*e.sigBytes;return r[i>>>5]|=128<<24-i%32,r[14+(i+64>>>9<<4)]=t.floor(n/4294967296),r[15+(i+64>>>9<<4)]=n,e.sigBytes=4*r.length,this._process(),this._hash},clone:function(){var e=a.clone.call(this);return e._hash=this._hash.clone(),e}});r.SHA256=a._createHelper(c),r.HmacSHA256=a._createHmacHelper(c)}(Math),e.SHA256})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(27))}(0,function(e){return function(){function t(){return o.create.apply(o,arguments)}var r=e,n=r.lib,i=n.Hasher,a=r.x64,o=a.Word,s=a.WordArray,f=r.algo,u=[t(1116352408,3609767458),t(1899447441,602891725),t(3049323471,3964484399),t(3921009573,2173295548),t(961987163,4081628472),t(1508970993,3053834265),t(2453635748,2937671579),t(2870763221,3664609560),t(3624381080,2734883394),t(310598401,1164996542),t(607225278,1323610764),t(1426881987,3590304994),t(1925078388,4068182383),t(2162078206,991336113),t(2614888103,633803317),t(3248222580,3479774868),t(3835390401,2666613458),t(4022224774,944711139),t(264347078,2341262773),t(604807628,2007800933),t(770255983,1495990901),t(1249150122,1856431235),t(1555081692,3175218132),t(1996064986,2198950837),t(2554220882,3999719339),t(2821834349,766784016),t(2952996808,2566594879),t(3210313671,3203337956),t(3336571891,1034457026),t(3584528711,2466948901),t(113926993,3758326383),t(338241895,168717936),t(666307205,1188179964),t(773529912,1546045734),t(1294757372,1522805485),t(1396182291,2643833823),t(1695183700,2343527390),t(1986661051,1014477480),t(2177026350,1206759142),t(2456956037,344077627),t(2730485921,1290863460),t(2820302411,3158454273),t(3259730800,3505952657),t(3345764771,106217008),t(3516065817,3606008344),t(3600352804,1432725776),t(4094571909,1467031594),t(275423344,851169720),t(430227734,3100823752),t(506948616,1363258195),t(659060556,3750685593),t(883997877,3785050280),t(958139571,3318307427),t(1322822218,3812723403),t(1537002063,2003034995),t(1747873779,3602036899),t(1955562222,1575990012),t(2024104815,1125592928),t(2227730452,2716904306),t(2361852424,442776044),t(2428436474,593698344),t(2756734187,3733110249),t(3204031479,2999351573),t(3329325298,3815920427),t(3391569614,3928383900),t(3515267271,566280711),t(3940187606,3454069534),t(4118630271,4000239992),t(116418474,1914138554),t(174292421,2731055270),t(289380356,3203993006),t(460393269,320620315),t(685471733,587496836),t(852142971,1086792851),t(1017036298,365543100),t(1126000580,2618297676),t(1288033470,3409855158),t(1501505948,4234509866),t(1607167915,987167468),t(1816402316,1246189591)],c=[];!function(){for(var e=0;e<80;e++)c[e]=t()}();var h=f.SHA512=i.extend({_doReset:function(){this._hash=new s.init([new o.init(1779033703,4089235720),new o.init(3144134277,2227873595),new o.init(1013904242,4271175723),new o.init(2773480762,1595750129),new o.init(1359893119,2917565137),new o.init(2600822924,725511199),new o.init(528734635,4215389547),new o.init(1541459225,327033209)])},_doProcessBlock:function(e,t){for(var r=this._hash.words,n=r[0],i=r[1],a=r[2],o=r[3],s=r[4],f=r[5],h=r[6],l=r[7],d=n.high,p=n.low,b=i.high,v=i.low,m=a.high,g=a.low,y=o.high,w=o.low,_=s.high,S=s.low,k=f.high,x=f.low,A=h.high,M=h.low,E=l.high,I=l.low,T=d,P=p,R=b,B=v,C=m,O=g,N=y,j=w,z=_,L=S,F=k,H=x,U=A,D=M,q=E,K=I,Y=0;Y<80;Y++){var V=c[Y];if(Y<16)var W=V.high=0|e[t+2*Y],X=V.low=0|e[t+2*Y+1];else{var Z=c[Y-15],G=Z.high,Q=Z.low,$=(G>>>1|Q<<31)^(G>>>8|Q<<24)^G>>>7,J=(Q>>>1|G<<31)^(Q>>>8|G<<24)^(Q>>>7|G<<25),ee=c[Y-2],te=ee.high,re=ee.low,ne=(te>>>19|re<<13)^(te<<3|re>>>29)^te>>>6,ie=(re>>>19|te<<13)^(re<<3|te>>>29)^(re>>>6|te<<26),ae=c[Y-7],oe=ae.high,se=ae.low,fe=c[Y-16],ue=fe.high,ce=fe.low,X=J+se,W=$+oe+(X>>>0<J>>>0?1:0),X=X+ie,W=W+ne+(X>>>0<ie>>>0?1:0),X=X+ce,W=W+ue+(X>>>0<ce>>>0?1:0);V.high=W,V.low=X}var he=z&F^~z&U,le=L&H^~L&D,de=T&R^T&C^R&C,pe=P&B^P&O^B&O,be=(T>>>28|P<<4)^(T<<30|P>>>2)^(T<<25|P>>>7),ve=(P>>>28|T<<4)^(P<<30|T>>>2)^(P<<25|T>>>7),me=(z>>>14|L<<18)^(z>>>18|L<<14)^(z<<23|L>>>9),ge=(L>>>14|z<<18)^(L>>>18|z<<14)^(L<<23|z>>>9),ye=u[Y],we=ye.high,_e=ye.low,Se=K+ge,ke=q+me+(Se>>>0<K>>>0?1:0),Se=Se+le,ke=ke+he+(Se>>>0<le>>>0?1:0),Se=Se+_e,ke=ke+we+(Se>>>0<_e>>>0?1:0),Se=Se+X,ke=ke+W+(Se>>>0<X>>>0?1:0),xe=ve+pe,Ae=be+de+(xe>>>0<ve>>>0?1:0);q=U,K=D,U=F,D=H,F=z,H=L,L=j+Se|0,z=N+ke+(L>>>0<j>>>0?1:0)|0,N=C,j=O,C=R,O=B,R=T,B=P,P=Se+xe|0,T=ke+Ae+(P>>>0<Se>>>0?1:0)|0}p=n.low=p+P,n.high=d+T+(p>>>0<P>>>0?1:0),v=i.low=v+B,i.high=b+R+(v>>>0<B>>>0?1:0),g=a.low=g+O,a.high=m+C+(g>>>0<O>>>0?1:0),w=o.low=w+j,o.high=y+N+(w>>>0<j>>>0?1:0),S=s.low=S+L,s.high=_+z+(S>>>0<L>>>0?1:0),x=f.low=x+H,f.high=k+F+(x>>>0<H>>>0?1:0),M=h.low=M+D,h.high=A+U+(M>>>0<D>>>0?1:0),I=l.low=I+K,l.high=E+q+(I>>>0<K>>>0?1:0)},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,n=8*e.sigBytes;return t[n>>>5]|=128<<24-n%32,t[30+(n+128>>>10<<5)]=Math.floor(r/4294967296),t[31+(n+128>>>10<<5)]=r,e.sigBytes=4*t.length,this._process(),this._hash.toX32()},clone:function(){var e=i.clone.call(this);return e._hash=this._hash.clone(),e},blockSize:32});r.SHA512=i._createHelper(h),r.HmacSHA512=i._createHmacHelper(h)}(),e.SHA512})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isAddress=t.isPublicKey=t.isPrivateKey=t.isWIF=t.isNEP2=void 0;var n=r(36),i=function(e){return e&&e.__esModule?e:{default:e}}(n),a=r(2),o=r(30);t.isNEP2=function(e){try{if(58!==e.length)return!1;var t=(0,a.ab2hexstring)(i.default.decode(e));return!!t&&(86===t.length&&("01"===t.substr(0,2)&&("42"===t.substr(2,2)&&"e0"===t.substr(4,2))))}catch(e){return!1}},t.isWIF=function(e){try{if(52!==e.length)return!1;var t=(0,a.ab2hexstring)(i.default.decode(e));return(0,a.hash256)(t.substr(0,t.length-8)).substr(0,8)===t.substr(t.length-8,8)}catch(e){return!1}},t.isPrivateKey=function(e){return/^[0-9A-Fa-f]{64}$/.test(e)},t.isPublicKey=function(e,t){try{var r=void 0;switch(e.substr(0,2)){case"04":if(!0===t)return!1;r=(0,o.getPublicKeyEncoded)(e);break;case"02":case"03":if(!1===t)return!1;r=e;break;default:return!1}var n=(0,o.getPublicKeyUnencoded)(r),i=parseInt(n.substr(n.length-2,2),16);if("02"===r.substr(0,2)&&i%2==0)return!0;if("03"===r.substr(0,2)&&i%2==1)return!0}catch(e){}return!1},t.isAddress=function(e){try{var t=(0,a.ab2hexstring)(i.default.decode(e));if((0,a.hash256)(t.slice(0,42)).substr(0,8)!==t.substr(42,8))return!1;var r=(0,a.reverseHex)(t.slice(2,42));return(0,o.getAddressFromScriptHash)(r)===e}catch(e){return!1}}},function(e,t,r){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.decryptAsync=t.decrypt=t.encryptAsync=t.encrypt=void 0;var i=r(49),a=n(i),o=r(62),s=r(160),f=n(s),u=r(167),c=n(u),h=r(42),l=n(h),d=r(2),p=r(4),b=r(6),v=n(b),m=(0,v.default)("wallet");m.warn("ScryptParams will be changing to use n,r,p in place of cost, blockSize, parallel. New standard will be preferred. DEFAULT_SCRYPT will use new standard upon major version bump.");var g=(t.encrypt=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.DEFAULT_SCRYPT;n=g(n);var i={cost:n.n,blockSize:n.r,parallel:n.p},s=new l.default(t),u=(0,o.SHA256)((0,o.SHA256)(o.enc.Latin1.parse(s.address))).toString().slice(0,8),c=f.default.hashSync(e.from(r.normalize("NFC"),"utf8"),e.from(u,"hex"),i).toString("hex"),h=c.slice(0,64),b=c.slice(64),v=(0,d.hexXor)(s.privateKey,h),y=o.AES.encrypt(o.enc.Hex.parse(v),o.enc.Hex.parse(b),{mode:o.mode.ECB,padding:o.pad.NoPadding}),w=p.NEP_HEADER+p.NEP_FLAG+u+y.ciphertext.toString(),_=a.default.encode(e.from(w,"hex"));return m.info("Successfully encrypted key to "+_),_},t.encryptAsync=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.DEFAULT_SCRYPT;return new Promise(function(i,s){n=g(n);var f=n,u=f.n,h=f.r,b=f.p,v=new l.default(t),y=(0,o.SHA256)((0,o.SHA256)(o.enc.Latin1.parse(v.address))).toString().slice(0,8);(0,c.default)(e.from(r.normalize("NFC"),"utf8"),e.from(y,"hex"),u,h,b,64,function(t,r,n){if(null!=t)s(t);else if(n){var f=e.from(n).toString("hex"),u=f.slice(0,64),c=f.slice(64),h=(0,d.hexXor)(v.privateKey,u),l=o.AES.encrypt(o.enc.Hex.parse(h),o.enc.Hex.parse(c),{mode:o.mode.ECB,padding:o.pad.NoPadding}),b=p.NEP_HEADER+p.NEP_FLAG+y+l.ciphertext.toString(),g=a.default.encode(e.from(b,"hex"));m.info("Successfully encrypted key to "+g),i(g)}})})},t.decrypt=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.DEFAULT_SCRYPT;n=g(n);var i={cost:n.n,blockSize:n.r,parallel:n.p},s=(0,d.ab2hexstring)(a.default.decode(t)),u=s.substr(6,8),c=s.substr(-64),h=f.default.hashSync(e.from(r.normalize("NFC"),"utf8"),e.from(u,"hex"),i).toString("hex"),b=h.slice(0,64),v=h.slice(64),y={ciphertext:o.enc.Hex.parse(c),salt:""},w=o.AES.decrypt(y,o.enc.Hex.parse(v),{mode:o.mode.ECB,padding:o.pad.NoPadding}),_=(0,d.hexXor)(w.toString(),b),S=new l.default(_);if(u!==(0,o.SHA256)((0,o.SHA256)(o.enc.Latin1.parse(S.address))).toString().slice(0,8))throw new Error("Wrong Password!");return m.info("Successfully decrypted "+t),S.WIF},t.decryptAsync=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.DEFAULT_SCRYPT;return new Promise(function(i,s){n=g(n);var f=n,u=f.n,h=f.r,p=f.p,b=(0,d.ab2hexstring)(a.default.decode(t)),v=b.substr(6,8),y=b.substr(-64);(0,c.default)(e.from(r.normalize("NFC"),"utf8"),e.from(v,"hex"),u,h,p,64,function(r,n,a){if(null!=r)s(r);else if(a){var f=e.from(a).toString("hex"),u=f.slice(0,64),c=f.slice(64),h={ciphertext:o.enc.Hex.parse(y),salt:""},p=o.AES.decrypt(h,o.enc.Hex.parse(c),{mode:o.mode.ECB,padding:o.pad.NoPadding}),b=(0,d.hexXor)(p.toString(),u),g=new l.default(b),w=(0,o.SHA256)((0,o.SHA256)(o.enc.Latin1.parse(g.address))).toString().slice(0,8);if(v!==w)throw new Error("Wrong Password!");m.info("Successfully decrypted "+t),i(g.WIF)}})})},function(e){var t=Object.assign({},p.DEFAULT_SCRYPT,e);return{n:t.n||t.cost,r:t.r||t.blockSize,p:t.p||t.parallel}})}).call(t,r(7).Buffer)},function(e,t,r){(function(t){function r(e,t,r,o){return{password:n(e),salt:n(t),options:i(r),callback:a(arguments[arguments.length-1])}}function n(e){return"function"==typeof e?t("","utf8"):e instanceof t?e:"string"==typeof e?new t(e,"utf8"):new t(String(e||""),"utf8")}function i(e){return e=null!==e&&"object"==typeof e?e:{},{maxmem:o(e.maxmem)||33554432,cost:s(e.cost)||Math.pow(2,14),blockSize:f(e.blockSize)||8,parallel:f(e.parallel)||1,size:u(e.size)||64}}function a(e){return"function"==typeof e?e:null}function o(e){if("number"!=typeof e)return null;for(var t=4;t<=2048;t*=2){var r=1048576*t;if(r>e)return null;if(r==e)return r}return null}function s(e){if("number"!=typeof e)return null;for(var t=8;t<=64;t++){var r=Math.pow(2,t);if(r>e)return null;if(r==e)return r}return null}function f(e){return"number"!=typeof e?null:(e=Math.round(e),e<1?null:e>256?null:e)}function u(e){return"number"!=typeof e?null:(e=Math.round(e),e<1?null:e>2048?null:e)}e.exports=r}).call(t,r(7).Buffer)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTransactionHash=t.signTransaction=t.deserializeTransaction=t.serializeTransaction=t.calculateInputs=void 0;var n=r(2),i=r(11),a=r(44),o=r(4),s=r(28),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(s),u=r(6),c=function(e){return e&&e.__esModule?e:{default:e}}(u),h=(0,c.default)("tx"),l=(t.calculateInputs=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;null===t&&(t=[]);var i=t.reduce(function(e,t){return e[t.assetId]?e[t.assetId]=e[t.assetId].add(t.value):e[t.assetId]=t.value,e},{});return r=new n.Fixed8(r),r.gt(0)&&(i[o.ASSET_ID.GAS]?i[o.ASSET_ID.GAS]=i[o.ASSET_ID.GAS].add(r):i[o.ASSET_ID.GAS]=r),Object.keys(i).map(function(t){var r=i[t],n=o.ASSETS[t];if(-1===e.assetSymbols.indexOf(n))throw new Error("This balance does not contain any "+n+"!");var a=e.assets[n];if(a.balance.lt(r))throw new Error("Insufficient "+o.ASSETS[t]+"! Need "+r.toString()+" but only found "+a.balance.toString());return l(a,r,t,e.address)}).reduce(function(e,t){return{inputs:e.inputs.concat(t.inputs),change:e.change.concat(t.change)}},{inputs:[],change:[]})},function(e,t,r,a){e.unspent.sort(function(e,t){return e.value.sub(t.value)});for(var s=0,f=new n.Fixed8(0);f.lt(t);){if((s+=1)>e.unspent.length)throw new Error("Insufficient "+o.ASSETS[r]+"! Reached end of unspent coins! "+e.unspent.length);f=f.add(e.unspent[s-1].value)}var u=[];return f.gt(t)&&u.push({assetId:r,value:f.sub(t),scriptHash:(0,i.getScriptHashFromAddress)(a)}),{inputs:e.unspent.slice(0,s).map(function(e){return{prevHash:e.txid,prevIndex:e.index}}),change:u}}),d=t.serializeTransaction=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r="";r+=(0,n.num2hexstring)(e.type),r+=(0,n.num2hexstring)(e.version),r+=a.serializeExclusive[e.type](e),r+=(0,n.num2VarInt)(e.attributes.length);var i=!0,o=!1,s=void 0;try{for(var u,c=e.attributes[Symbol.iterator]();!(i=(u=c.next()).done);i=!0){var h=u.value;r+=f.serializeTransactionAttribute(h)}}catch(e){o=!0,s=e}finally{try{!i&&c.return&&c.return()}finally{if(o)throw s}}r+=(0,n.num2VarInt)(e.inputs.length);var l=!0,d=!1,p=void 0;try{for(var b,v=e.inputs[Symbol.iterator]();!(l=(b=v.next()).done);l=!0){var m=b.value;r+=f.serializeTransactionInput(m)}}catch(e){d=!0,p=e}finally{try{!l&&v.return&&v.return()}finally{if(d)throw p}}r+=(0,n.num2VarInt)(e.outputs.length);var g=!0,y=!1,w=void 0;try{for(var _,S=e.outputs[Symbol.iterator]();!(g=(_=S.next()).done);g=!0){var k=_.value;r+=f.serializeTransactionOutput(k)}}catch(e){y=!0,w=e}finally{try{!g&&S.return&&S.return()}finally{if(y)throw w}}if(t&&e.scripts&&e.scripts.length>0){r+=(0,n.num2VarInt)(e.scripts.length);var x=!0,A=!1,M=void 0;try{for(var E,I=e.scripts[Symbol.iterator]();!(x=(E=I.next()).done);x=!0){var T=E.value;r+=f.serializeWitness(T)}}catch(e){A=!0,M=e}finally{try{!x&&I.return&&I.return()}finally{if(A)throw M}}}return r};t.deserializeTransaction=function(e){var t=new n.StringStream(e),r={};r.type=parseInt(t.read(1),16),r.version=parseInt(t.read(1),16);var i=a.deserializeExclusive[r.type](t);r.attributes=[],r.inputs=[],r.outputs=[],r.scripts=[];for(var o=t.readVarInt(),s=0;s<o;s++)r.attributes.push(f.deserializeTransactionAttribute(t));for(var u=t.readVarInt(),c=0;c<u;c++)r.inputs.push(f.deserializeTransactionInput(t));for(var h=t.readVarInt(),l=0;l<h;l++)r.outputs.push(f.deserializeTransactionOutput(t));if(!t.isEmpty())for(var d=t.readVarInt(),p=0;p<d;p++)r.scripts.push(f.deserializeWitness(t));return Object.assign(r,i)},t.signTransaction=function(e,t){if(!(0,i.isPrivateKey)(t))throw new Error("Key provided does not look like a private key!");var r=new i.Account(t),n="40"+(0,i.generateSignature)(d(e,!1),t),a=(0,i.getVerificationScriptFromPublicKey)((0,i.getPublicKeyFromPrivateKey)(t)),o={invocationScript:n,verificationScript:a};return e.scripts?e.scripts.push(o):e.scripts=[o],h.info("Signed tx "+e.hash+" with Account["+r.address+"]"),e},t.getTransactionHash=function(e){return(0,n.reverseHex)((0,n.hash256)(d(e,!1)))}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(2),u=r(70),c=function(e){return e&&e.__esModule?e:{default:e}}(u),h=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"_emitAppCall",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,f.ensureHex)(e),40!==e.length)throw new Error("ScriptHash should be 20 bytes long!");return this.emit(t?c.default.TAILCALL:c.default.APPCALL,(0,f.reverseHex)(e))}},{key:"_emitArray",value:function(e){for(var t=e.length-1;t>=0;t--)this.emitPush(e[t]);return this.emitPush(e.length).emit(c.default.PACK)}},{key:"_emitString",value:function(e){(0,f.ensureHex)(e);var t=e.length/2;return t<=c.default.PUSHBYTES75?(this.str+=(0,f.num2hexstring)(t),this.str+=e):t<256?(this.emit(c.default.PUSHDATA1),this.str+=(0,f.num2hexstring)(t),this.str+=e):t<65536?(this.emit(c.default.PUSHDATA2),this.str+=(0,f.num2hexstring)(t,2),this.str+=e):(this.emit(c.default.PUSHDATA4),this.str+=(0,f.num2hexstring)(t,4),this.str+=e),this}},{key:"_emitNum",value:function(e){if(-1===e)return this.emit(c.default.PUSHM1);if(0===e)return this.emit(c.default.PUSH0);if(e>0&&e<=16)return this.emit(c.default.PUSH1-1+e);var t=(0,f.int2hex)(e);return this.emitPush((0,f.reverseHex)("0".repeat(16-t.length)+t))}},{key:"_emitParam",value:function(e){if(!e.type)throw new Error("No type available!");if(!l(e.value))throw new Error("Invalid value provided!");switch(e.type){case"String":return this._emitString((0,f.str2hexstring)(e.value));case"Boolean":return this.emit(e.value?c.default.PUSHT:c.default.PUSHF);case"Integer":return this._emitNum(e.value);case"ByteArray":return this._emitString(e.value);case"Array":return this._emitArray(e.value);case"Hash160":return this._emitString((0,f.reverseHex)(e.value))}}},{key:"emit",value:function(e,t){return this.str+=(0,f.num2hexstring)(e),t&&(this.str+=t),this}},{key:"emitAppCall",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(this.emitPush(r),t){for(var i="",a=0;a<t.length;a++)i+=(0,f.num2hexstring)(t.charCodeAt(a));this.emitPush(i)}return this._emitAppCall(e,n),this}},{key:"emitSysCall",value:function(e){if(void 0===e||""===e)throw new Error("Invalid SysCall API");var t=(0,f.ab2hexstring)((0,f.str2ab)(e)),r=(0,f.int2hex)(t.length/2);if(2!==r.length)throw new Error("Invalid length for SysCall API");var n=r+t;return this.emit(c.default.SYSCALL,n)}},{key:"emitPush",value:function(e){if(null==e)return this.emitPush(!1);switch(void 0===e?"undefined":o(e)){case"boolean":return this.emit(e?c.default.PUSHT:c.default.PUSHF);case"string":return this._emitString(e);case"number":return this._emitNum(e);case"object":return Array.isArray(e)?this._emitArray(e):this._emitParam(e);case"undefined":return this.emitPush(!1);default:throw new Error}}}]),t}(f.StringStream),l=function(e){return!!e||(0===e||""===e)};t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={PUSH0:0,PUSHF:0,PUSHBYTES1:1,PUSHBYTES75:75,PUSHDATA1:76,PUSHDATA2:77,PUSHDATA4:78,PUSHM1:79,PUSH1:81,PUSHT:81,PUSH2:82,PUSH3:83,PUSH4:84,PUSH5:85,PUSH6:86,PUSH7:87,PUSH8:88,PUSH9:89,PUSH10:90,PUSH11:91,PUSH12:92,PUSH13:93,PUSH14:94,PUSH15:95,PUSH16:96,NOP:97,JMP:98,JMPIF:99,JMPIFNOT:100,CALL:101,RET:102,APPCALL:103,SYSCALL:104,TAILCALL:105,DUPFROMALTSTACK:106,TOALTSTACK:107,FROMALTSTACK:108,XDROP:109,XSWAP:114,XTUCK:115,DEPTH:116,DROP:117,DUP:118,NIP:119,OVER:120,PICK:121,ROLL:122,ROT:123,SWAP:124,TUCK:125,CAT:126,SUBSTR:127,LEFT:128,RIGHT:129,SIZE:130,INVERT:131,AND:132,OR:133,XOR:134,EQUAL:135,INC:139,DEC:140,SIGN:141,NEGATE:143,ABS:144,NOT:145,NZ:146,ADD:147,SUB:148,MUL:149,DIV:150,MOD:151,SHL:152,SHR:153,BOOLAND:154,BOOLOR:155,NUMEQUAL:156,NUMNOTEQUAL:158,LT:159,GT:160,LTE:161,GTE:162,MIN:163,MAX:164,WITHIN:165,SHA1:167,SHA256:168,HASH160:169,HASH256:170,CHECKSIG:172,CHECKMULTISIG:174,ARRAYSIZE:192,PACK:193,UNPACK:194,PICKITEM:195,SETITEM:196,NEWARRAY:197,NEWSTRUCT:198,APPEND:200,REVERSE:201,THROW:240,THROWIFNOT:241};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={ContractHash:0,ECDH02:2,ECDH03:3,Script:32,Vote:48,DescriptionUrl:129,Description:144,Hash1:161,Hash2:162,Hash3:163,Hash4:164,Hash5:165,Hash6:166,Hash7:167,Hash8:168,Hash9:169,Hash10:170,Hash11:171,Hash12:172,Hash13:173,Hash14:174,Hash15:175,Remark:240,Remark1:241,Remark2:242,Remark3:243,Remark4:244,Remark5:245,Remark6:246,Remark7:247,Remark8:248,Remark9:249,Remark10:250,Remark11:251,Remark12:252,Remark13:253,Remark14:254,Remark15:255};t.default=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.queryRPC=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(29),f=n(s),u=r(21),c=r(4),h=r(6),l=n(h),d=(0,l.default)("rpc"),p=function(){function e(t){i(this,e),this.req=Object.assign({},c.DEFAULT_REQ,t),this.completed=!1,this.parse=null}return o(e,[{key:"parseWith",value:function(e){return this.parse=e,this}},{key:"execute",value:function(e){var t=this;if(this.completed)throw new Error("This request has been sent");return b(e,this.req).then(function(e){if(t.res=e,t.completed=!0,e.error)throw new Error(e.error.message);return t.parse?(d.info("Query["+t.req.method+"] successful"),t.parse(e)):e})}},{key:Symbol.toStringTag,get:function(){return"Query"}}],[{key:"getAccountState",value:function(t){return new e({method:"getaccountstate",params:[t]})}},{key:"getAssetState",value:function(t){return new e({method:"getassetstate",params:[t]})}},{key:"getBlock",value:function(t){return new e({method:"getblock",params:[t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:1]})}},{key:"getBlockHash",value:function(t){return new e({method:"getblockhash",params:[t]})}},{key:"getBestBlockHash",value:function(){return new e({method:"getbestblockhash"})}},{key:"getBlockCount",value:function(){return new e({method:"getblockcount"})}},{key:"getBlockSysFee",value:function(t){return new e({method:"getblocksysfee",params:[t]})}},{key:"getConnectionCount",value:function(){return new e({method:"getconnectioncount"})}},{key:"getContractState",value:function(t){return new e({method:"getcontractstate",params:[t]})}},{key:"getPeers",value:function(){return new e({method:"getpeers"})}},{key:"getRawMemPool",value:function(){return new e({method:"getrawmempool"})}},{key:"getRawTransaction",value:function(t){return new e({method:"getrawtransaction",params:[t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:1]})}},{key:"getStorage",value:function(t,r){return new e({method:"getstorage",params:[t,r]})}},{key:"getTxOut",value:function(t,r){return new e({method:"gettxout",params:[t,r]})}},{key:"getVersion",value:function(){return new e({method:"getversion"})}},{key:"invoke",value:function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return new e({method:"invoke",params:[t,n]})}},{key:"invokeFunction",value:function(t,r){for(var n=arguments.length,i=Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];return new e({method:"invokefunction",params:[t,r,i]})}},{key:"invokeScript",value:function(t){return new e({method:"invokescript",params:[t]})}},{key:"sendRawTransaction",value:function(t){return new e({method:"sendrawtransaction",params:["object"===(void 0===t?"undefined":a(t))?(0,u.serializeTransaction)(t):t]})}},{key:"submitBlock",value:function(t){return new e({method:"submitblock",params:[t]})}},{key:"validateAddress",value:function(t){return new e({method:"validateaddress",params:[t]})}}]),e}();t.default=p;var b=t.queryRPC=function(e,t){var r=f.default.create({headers:{"Content-Type":"application/json"}}),n=Object.assign({},c.DEFAULT_REQ,t);return r.post(e,n).then(function(e){return e.data})}},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";var n=r(9),i=r(180),a=r(182),o=r(183),s=r(184),f=r(75),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(185);e.exports=function(e){return new Promise(function(t,c){var h=e.data,l=e.headers;n.isFormData(h)&&delete l["Content-Type"];var d=new XMLHttpRequest,p="onreadystatechange",b=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(e.url)||(d=new window.XDomainRequest,p="onload",b=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var v=e.auth.username||"",m=e.auth.password||"";l.Authorization="Basic "+u(v+":"+m)}if(d.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[p]=function(){if(d&&(4===d.readyState||b)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?o(d.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?d.response:d.responseText,a={data:n,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:r,config:e,request:d};i(t,c,a),d=null}},d.onerror=function(){c(f("Network Error",e,null,d)),d=null},d.ontimeout=function(){c(f("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var g=r(186),y=(e.withCredentials||s(e.url))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;y&&(l[e.xsrfHeaderName]=y)}if("setRequestHeader"in d&&n.forEach(l,function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),c(e),d=null)}),void 0===h&&(h=null),d.send(h)})}},function(e,t,r){"use strict";var n=r(181);e.exports=function(e,t,r,i,a){var o=new Error(e);return n(o,t,r,i,a)}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.loadBalance=t.setSwitchFreeze=t.setApiSwitch=void 0;var i=r(47),a=n(i),o=r(79),s=n(o),f=r(6),u=function(e){return e&&e.__esModule?e:{default:e}}(f),c=(0,u.default)("api"),h=0,l=!1,d=(t.setApiSwitch=function(e){e>=0&&e<=1&&(h=e)},t.setSwitchFreeze=function(e){l=!!e,c.info("core/setSwitchFreeze API switch is frozen: "+l)},function(){!l&&h>0&&(h-=.2,c.info("core API Switch increasing weight towards neoscan"))}),p=function(){!l&&h<1&&(h+=.2,c.info("core API Switch increasing weight towards neonDB"))};t.loadBalance=function(e,t){return Math.random()>h?e(t,s).then(function(e){return d(),e}).catch(function(){return p(),e(t,a)}):e(t,a).then(function(e){return p(),e}).catch(function(){return d(),e(t,s)})}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getTransactionHistory=t.getWalletDBHeight=t.getMaxClaimAmount=t.getClaims=t.getBalance=t.getRPCEndpoint=t.getAPIEndpoint=t.name=void 0;var i=r(29),a=n(i),o=r(11),s=r(4),f=r(2),u=r(6),c=n(u),h=(0,c.default)("api"),l=(t.name="neoscan",t.getAPIEndpoint=function(e){switch(e){case"MainNet":return"https://api.neoscan.io/api/main_net";case"TestNet":return"https://neoscan-testnet.io/api/test_net";default:return e}}),d=(t.getRPCEndpoint=function(e){var t=l(e);return a.default.get(t+"/v1/get_all_nodes").then(function(t){var r=t.data,n=0,i=[],a=!0,o=!1,s=void 0;try{for(var f,u=r[Symbol.iterator]();!(a=(f=u.next()).done);a=!0){var c=f.value;c.height>n?(n=c.height,i=[c]):c.height===n&&i.push(c)}}catch(e){o=!0,s=e}finally{try{!a&&u.return&&u.return()}finally{if(o)throw s}}var l=i[Math.floor(Math.random()*i.length)].url;return h.info("Best node from neoscan "+e+": "+l),l})},t.getBalance=function(e,t){var r=l(e);return a.default.get(r+"/v1/get_balance/"+t).then(function(r){if(r.data.address!==t&&null===r.data.balance)return new o.Balance({address:r.data.address});var n=new o.Balance({address:r.data.address,net:e});return r.data.balance.map(function(e){n.addAsset(e.asset,{balance:e.amount,unspent:d(e.unspent)})}),h.info("Retrieved Balance for "+t+" from neoscan "+e),n})},t.getClaims=function(e,t){var r=l(e);return a.default.get(r+"/v1/get_claimable/"+t).then(function(r){if(r.address!==t&&null===r.data.claimable)return new o.Claims({address:r.data.address});var n=p(r.data.claimable);return h.info("Retrieved Balance for "+t+" from neoscan "+e),new o.Claims({net:e,address:r.data.address,claims:n})})},t.getMaxClaimAmount=function(e,t){var r=l(e);return a.default.get(r+"/v1/get_claimable/"+t).then(function(r){return h.info("Retrieved maximum amount of gas claimable after spending all NEO for "+t+" from neoscan "+e),new f.Fixed8(r.data.unclaimed||0)})},function(e){return e.map(function(e){return{index:e.n,txid:e.txid,value:e.value}})}),p=function(e){return e.map(function(e){return{start:new f.Fixed8(e.start_height),end:new f.Fixed8(e.end_height),index:e.n,claim:new f.Fixed8(e.unclaimed),txid:e.txid,value:e.value}})},b=(t.getWalletDBHeight=function(e){var t=l(e);return a.default.get(t+"/v1/get_height").then(function(e){return parseInt(e.data.height)})},t.getTransactionHistory=function(e,t){var r=l(e);return a.default.get(r+"/v1/get_address_neon/"+t).then(function(r){return h.info("Retrieved History for "+t+" from neoscan "+e),b(r.data.txids)})},function(e){return e.map(function(e){var t=e.txid,r=e.block_height,n=e.balance,i=e.asset_moved,a=!1,o=!1,f=s.ASSETS.GAS,u=s.ASSETS.NEO;return n.forEach(function(e){var t=e.asset,r=e.amount;t===f&&(f=r),t===u&&(u=r)}),s.ASSET_ID.GAS===i&&(a=!0),s.ASSET_ID.NEO===i&&(o=!0),{GAS:f,NEO:u,block_index:r,gas_sent:a,neo_sent:o,txid:t}})})},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.logging=t.CONST=t.u=t.wallet=t.tx=t.sc=t.rpc=t.api=void 0;var i=r(81),a=n(i),o=r(24),s=n(o),f=r(4),u=n(f),c=r(45),h=n(c),l=r(21),d=n(l),p=r(11),b=n(p),v=r(2),m=n(v),g=r(6),y=n(g),w=[h.default,d.default,b.default,a.default,s.default],_=w.reduce(function(e,t){return Object.keys(t).map(function(r){e[r]?Object.assign(e[r],t[r]):e[r]=t[r]}),e},{CONST:u,u:m});t.default=_,t.api=a,t.rpc=s,t.sc=h,t.tx=d,t.wallet=b,t.u=m,t.CONST=u,t.logging=y},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.neoscan=t.nep5=t.cmc=t.neonDB=void 0;var i=r(82);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var a=r(78);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var o=r(47),s=n(o),f=r(197),u=n(f),c=r(198),h=n(c),l=r(79),d=n(l),p=n(i);t.default={get:{price:u.getPrice,prices:u.getPrices,balance:s.getBalance,claims:s.getClaims,transactionHistory:s.getTransactionHistory,tokenBalance:h.getTokenBalance,tokenInfo:h.getTokenInfo,token:h.getToken},do:{sendAsset:s.doSendAsset,claimAllGas:s.doClaimAllGas,mintTokens:s.doMintTokens},sendAsset:function(e){return p.sendAsset(e)},claimGas:function(e){return p.claimGas(e)},doInvoke:function(e){return p.doInvoke(e)}},t.neonDB=s,t.cmc=u,t.nep5=h,t.neoscan=d},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getMaxClaimAmountFrom=t.getWalletDBHeightFrom=t.getTransactionHistoryFrom=t.getRPCEndpointFrom=t.getClaimsFrom=t.getBalanceFrom=t.makeIntent=t.sendTx=t.signTx=t.createTx=t.fillKeys=t.fillBalance=t.fillUrl=t.doInvoke=t.claimGas=t.sendAsset=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=r(11),a=r(4),o=r(24),s=r(21),f=r(2),u=r(78),c=r(6),h=function(e){return e&&e.__esModule?e:{default:e}}(c),l=(0,h.default)("api"),d=(t.sendAsset=function(e){return d(e).then(b).then(p).then(function(e){return v(e,"contract")}).then(function(e){return _(e)}).then(function(e){return m(e)}).then(function(e){return S(e)}).then(function(e){return g(e)}).catch(function(t){var r={net:e.net,address:e.address,intents:e.intents,balance:e.balance,tx:e.tx};throw l.error("sendAsset failed with: "+t.message+". Dumping config",r),t})},t.claimGas=function(e){return d(e).then(b).then(function(t){return(0,u.loadBalance)(A,e)}).then(function(e){return v(e,"claim")}).then(function(e){return m(e)}).then(function(e){return g(e)}).catch(function(t){var r={net:e.net,address:e.address,intents:e.intents,claims:e.claims,tx:e.tx};throw l.error("claimGas failed with "+t.message+". Dumping config",r),t})},t.doInvoke=function(e){return d(e).then(b).then(p).then(function(e){return v(e,"invocation")}).then(function(e){return _(e)}).then(function(e){return y(e)}).then(function(e){return m(e)}).then(function(e){return w(e)}).then(function(e){return S(e)}).then(function(e){return g(e)}).catch(function(t){var r={net:e.net,address:e.address,intents:e.intents,balance:e.balance,script:e.script,gas:e.gas,tx:e.tx};throw l.error("doInvoke failed with "+t.message+". Dumping config",r),t})},t.fillUrl=function(e){return e.url?Promise.resolve(e):(0,u.loadBalance)(M,e).then(function(t){return Object.assign(e,{url:t})})}),p=t.fillBalance=function(e){return e.balance?Promise.resolve(e):(0,u.loadBalance)(x,e)},b=t.fillKeys=function(e){return e.account&&(e.address||(e.address=e.account.address),e.privateKey||e.signingFunction||(e.privateKey=e.account.privateKey),!e.publicKey&&e.signingFunction&&(e.publicKey=e.account.publicKey)),Promise.resolve(e)},v=t.createTx=function(e,t){if(e.tx)return e;"string"==typeof t&&(t=t.toLowerCase());var r=void 0;switch(t){case"claim":case 2:k(e,"claims"),r=s.Transaction.createClaimTx(e.address,e.claims);break;case"contract":case 128:k(e,"balance","intents"),r=s.Transaction.createContractTx(e.balance,e.intents,e.override);break;case"invocation":case 209:k(e,"balance","gas","script"),e.intents||(e.intents=[]),r=s.Transaction.createInvocationTx(e.balance,e.intents,e.script,e.gas,e.override);break;default:return Promise.reject(new Error("Tx Type not found: "+t))}return Promise.resolve(Object.assign(e,{tx:r}))},m=t.signTx=function(e){k(e,"tx");var t=void 0;if(e.signingFunction){var r=new i.Account(e.publicKey);t=e.signingFunction(e.tx,r.publicKey).then(function(e){return"string"==typeof e&&(e=s.Transaction.deserialize(e)),e})}else{if(!e.privateKey)return Promise.reject(new Error("Needs privateKey or signingFunction to sign!"));var n=new i.Account(e.privateKey);if(e.address!==n.address&&!e.sendingFromSmartContract)return Promise.reject(new Error("Private Key and Balance address does not match!"));t=Promise.resolve(e.tx.sign(n.privateKey))}return t.then(function(t){return Object.assign(e,{tx:t})})},g=t.sendTx=function(e){return k(e,"tx","url"),o.Query.sendRawTransaction(e.tx).execute(e.url).then(function(t){if(!0===t.result)t.txid=e.tx.hash,e.balance&&e.balance.applyTx(e.tx,!1);else{var r={net:e.net,address:e.address,intents:e.intents,balance:e.balance,claims:e.claims,script:e.script,gas:e.gas,tx:e.tx};l.error("Transaction failed for "+e.address+": "+e.tx.serialize(),r)}return Object.assign(e,{response:t})})},y=(t.makeIntent=function(e,t){var r=new i.Account(t);return Object.keys(e).map(function(t){return(0,s.TransactionOutput)({assetId:a.ASSET_ID[t],value:e[t],scriptHash:r.scriptHash})})},function(e){return e.override||(e.override={}),"object"===n(e.script)&&"mintTokens"===e.script.operation&&e.script.scriptHash&&e.tx.addAttribute(s.TxAttrUsage.Script,(0,f.reverseHex)(e.script.scriptHash)),Promise.resolve(e)}),w=function(e){return"object"===n(e.script)&&"mintTokens"===e.script.operation&&e.script.scriptHash?o.Query.getContractState(e.script.scriptHash).execute(e.url).then(function(t){var r={invocationScript:"0000",verificationScript:t.result.script};return e.tx.scripts.push(r),e}):Promise.resolve(e)},_=function(e){if(e.override||(e.override={}),e.sendingFromSmartContract){var t=e.privateKey?new i.Account(e.privateKey):new i.Account(e.publicKey);e.tx.addAttribute(s.TxAttrUsage.Script,(0,f.reverseHex)(t.scriptHash))}return Promise.resolve(e)},S=function(e){if(e.sendingFromSmartContract){var t=(0,i.getScriptHashFromAddress)(e.address);return o.Query.getContractState(t).execute(e.url).then(function(r){var n=r.result,a=n.parameters,o=n.script,s={invocationScript:"00".repeat(a.length),verificationScript:o},f=e.privateKey?new i.Account(e.privateKey):new i.Account(e.publicKey);return parseInt(t,16)>parseInt(f.scriptHash,16)?e.tx.scripts.push(s):e.tx.scripts.unshift(s),e})}return Promise.resolve(e)},k=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=!0,a=!1,o=void 0;try{for(var s,f=r[Symbol.iterator]();!(i=(s=f.next()).done);i=!0){var u=s.value;if(!e.hasOwnProperty(u))throw new ReferenceError("Property not found: "+u)}}catch(e){a=!0,o=e}finally{try{!i&&f.return&&f.return()}finally{if(a)throw o}}},x=t.getBalanceFrom=function(e,t){return new Promise(function(r){if(k(e,"net","address"),!t.getBalance||!t.getRPCEndpoint)throw new Error("Invalid type. Is this an API object?");r()}).then(function(){var r=e.net,n=e.address;return t.getBalance(r,n)}).then(function(t){return Object.assign(e,{balance:t})})},A=t.getClaimsFrom=function(e,t){return new Promise(function(r){if(k(e,"net","address"),!t.getBalance||!t.getRPCEndpoint)throw new Error("Invalid type. Is this an API object?");r()}).then(function(){var r=e.net,n=e.address;return t.getClaims(r,n)}).then(function(t){return Object.assign(e,{claims:t})})},M=t.getRPCEndpointFrom=function(e,t){return new Promise(function(r){if(k(e,"net"),!t.getRPCEndpoint)throw new Error("Invalid type. Is this an API object?");r()}).then(function(){var r=e.net;return t.getRPCEndpoint(r)})};t.getTransactionHistoryFrom=function(e,t){return new Promise(function(r){if(k(e,"net","address"),!t.getTransactionHistory)throw new Error("Invalid type. Is this an API object?");r()}).then(function(){var r=e.address,n=e.net;return t.getTransactionHistory(n,r)})},t.getWalletDBHeightFrom=function(e,t){return new Promise(function(r){if(k(e,"net"),!t.getWalletDBHeight)throw new Error("Invalid type. Is this an API object?");r()}).then(function(){var r=e.net;return t.getWalletDBHeight(r)})},t.getMaxClaimAmountFrom=function(e,t){return new Promise(function(r){if(k(e,"net","address"),!t.getMaxClaimAmount)throw new Error("Invalid type. Is this an API object?");r()}).then(function(){var r=e.net,n=e.address;return t.getMaxClaimAmount(r,n)})}},function(e,t,r){"use strict";function n(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===e[t-2]?2:"="===e[t-1]?1:0}function i(e){return 3*e.length/4-n(e)}function a(e){var t,r,i,a,o,s=e.length;a=n(e),o=new h(3*s/4-a),r=a>0?s-4:s;var f=0;for(t=0;t<r;t+=4)i=c[e.charCodeAt(t)]<<18|c[e.charCodeAt(t+1)]<<12|c[e.charCodeAt(t+2)]<<6|c[e.charCodeAt(t+3)],o[f++]=i>>16&255,o[f++]=i>>8&255,o[f++]=255&i;return 2===a?(i=c[e.charCodeAt(t)]<<2|c[e.charCodeAt(t+1)]>>4,o[f++]=255&i):1===a&&(i=c[e.charCodeAt(t)]<<10|c[e.charCodeAt(t+1)]<<4|c[e.charCodeAt(t+2)]>>2,o[f++]=i>>8&255,o[f++]=255&i),o}function o(e){return u[e>>18&63]+u[e>>12&63]+u[e>>6&63]+u[63&e]}function s(e,t,r){for(var n,i=[],a=t;a<r;a+=3)n=(e[a]<<16)+(e[a+1]<<8)+e[a+2],i.push(o(n));return i.join("")}function f(e){for(var t,r=e.length,n=r%3,i="",a=[],o=0,f=r-n;o<f;o+=16383)a.push(s(e,o,o+16383>f?f:o+16383));return 1===n?(t=e[r-1],i+=u[t>>2],i+=u[t<<4&63],i+="=="):2===n&&(t=(e[r-2]<<8)+e[r-1],i+=u[t>>10],i+=u[t>>4&63],i+=u[t<<2&63],i+="="),a.push(i),a.join("")}t.byteLength=i,t.toByteArray=a,t.fromByteArray=f;for(var u=[],c=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=0,p=l.length;d<p;++d)u[d]=l[d],c[l.charCodeAt(d)]=d;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63},function(e,t){t.read=function(e,t,r,n,i){var a,o,s=8*i-n-1,f=(1<<s)-1,u=f>>1,c=-7,h=r?i-1:0,l=r?-1:1,d=e[t+h];for(h+=l,a=d&(1<<-c)-1,d>>=-c,c+=s;c>0;a=256*a+e[t+h],h+=l,c-=8);for(o=a&(1<<-c)-1,a>>=-c,c+=n;c>0;o=256*o+e[t+h],h+=l,c-=8);if(0===a)a=1-u;else{if(a===f)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,n),a-=u}return(d?-1:1)*o*Math.pow(2,a-n)},t.write=function(e,t,r,n,i,a){var o,s,f,u=8*a-i-1,c=(1<<u)-1,h=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:a-1,p=n?1:-1,b=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,o=c):(o=Math.floor(Math.log(t)/Math.LN2),t*(f=Math.pow(2,-o))<1&&(o--,f*=2),t+=o+h>=1?l/f:l*Math.pow(2,1-h),t*f>=2&&(o++,f/=2),o+h>=c?(s=0,o=c):o+h>=1?(s=(t*f-1)*Math.pow(2,i),o+=h):(s=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[r+d]=255&s,d+=p,s/=256,i-=8);for(o=o<<i|s,u+=i;u>0;e[r+d]=255&o,d+=p,o/=256,u-=8);e[r+d-p]|=128*b}},function(e,t,r){(function(t){function n(e,t){if(void 0!==t&&e[0]!==t)throw new Error("Invalid network version");if(33===e.length)return{version:e[0],privateKey:e.slice(1,33),compressed:!1};if(34!==e.length)throw new Error("Invalid WIF length");if(1!==e[33])throw new Error("Invalid compression flag");return{version:e[0],privateKey:e.slice(1,33),compressed:!0}}function i(e,r,n){var i=new t(n?34:33);return i.writeUInt8(e,0),r.copy(i,1),n&&(i[33]=1),i}function a(e,t){return n(s.decode(e),t)}function o(e,t,r){return"number"==typeof e?s.encode(i(e,t,r)):s.encode(i(e.version,e.privateKey,e.compressed))}var s=r(49);e.exports={decode:a,decodeRaw:n,encode:o,encodeRaw:i}}).call(t,r(7).Buffer)},function(e,t,r){"use strict";(function(t){function n(e){u.call(this,"digest"),this._hash=e,this.buffers=[]}function i(e){u.call(this,"digest"),this._hash=e}var a=r(1),o=r(87),s=r(89),f=r(100),u=r(105);a(n,u),n.prototype._update=function(e){this.buffers.push(e)},n.prototype._final=function(){var e=t.concat(this.buffers),r=this._hash(e);return this.buffers=null,r},a(i,u),i.prototype._update=function(e){this._hash.update(e)},i.prototype._final=function(){return this._hash.digest()},e.exports=function(e){return e=e.toLowerCase(),"md5"===e?new n(o):new i("rmd160"===e||"ripemd160"===e?new s:f(e))}}).call(t,r(7).Buffer)},function(e,t,r){"use strict";function n(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var r=1732584193,n=-271733879,i=-1732584194,c=271733878,h=0;h<e.length;h+=16){var l=r,d=n,p=i,b=c;r=a(r,n,i,c,e[h+0],7,-680876936),c=a(c,r,n,i,e[h+1],12,-389564586),i=a(i,c,r,n,e[h+2],17,606105819),n=a(n,i,c,r,e[h+3],22,-1044525330),r=a(r,n,i,c,e[h+4],7,-176418897),c=a(c,r,n,i,e[h+5],12,1200080426),i=a(i,c,r,n,e[h+6],17,-1473231341),n=a(n,i,c,r,e[h+7],22,-45705983),r=a(r,n,i,c,e[h+8],7,1770035416),c=a(c,r,n,i,e[h+9],12,-1958414417),i=a(i,c,r,n,e[h+10],17,-42063),n=a(n,i,c,r,e[h+11],22,-1990404162),r=a(r,n,i,c,e[h+12],7,1804603682),c=a(c,r,n,i,e[h+13],12,-40341101),i=a(i,c,r,n,e[h+14],17,-1502002290),n=a(n,i,c,r,e[h+15],22,1236535329),r=o(r,n,i,c,e[h+1],5,-165796510),c=o(c,r,n,i,e[h+6],9,-1069501632),i=o(i,c,r,n,e[h+11],14,643717713),n=o(n,i,c,r,e[h+0],20,-373897302),r=o(r,n,i,c,e[h+5],5,-701558691),c=o(c,r,n,i,e[h+10],9,38016083),i=o(i,c,r,n,e[h+15],14,-660478335),n=o(n,i,c,r,e[h+4],20,-405537848),r=o(r,n,i,c,e[h+9],5,568446438),c=o(c,r,n,i,e[h+14],9,-1019803690),i=o(i,c,r,n,e[h+3],14,-187363961),n=o(n,i,c,r,e[h+8],20,1163531501),r=o(r,n,i,c,e[h+13],5,-1444681467),c=o(c,r,n,i,e[h+2],9,-51403784),i=o(i,c,r,n,e[h+7],14,1735328473),n=o(n,i,c,r,e[h+12],20,-1926607734),r=s(r,n,i,c,e[h+5],4,-378558),c=s(c,r,n,i,e[h+8],11,-2022574463),i=s(i,c,r,n,e[h+11],16,1839030562),n=s(n,i,c,r,e[h+14],23,-35309556),r=s(r,n,i,c,e[h+1],4,-1530992060),c=s(c,r,n,i,e[h+4],11,1272893353),i=s(i,c,r,n,e[h+7],16,-155497632),n=s(n,i,c,r,e[h+10],23,-1094730640),r=s(r,n,i,c,e[h+13],4,681279174),c=s(c,r,n,i,e[h+0],11,-358537222),i=s(i,c,r,n,e[h+3],16,-722521979),n=s(n,i,c,r,e[h+6],23,76029189),r=s(r,n,i,c,e[h+9],4,-640364487),c=s(c,r,n,i,e[h+12],11,-421815835),i=s(i,c,r,n,e[h+15],16,530742520),n=s(n,i,c,r,e[h+2],23,-995338651),r=f(r,n,i,c,e[h+0],6,-198630844),c=f(c,r,n,i,e[h+7],10,1126891415),i=f(i,c,r,n,e[h+14],15,-1416354905),n=f(n,i,c,r,e[h+5],21,-57434055),r=f(r,n,i,c,e[h+12],6,1700485571),c=f(c,r,n,i,e[h+3],10,-1894986606),i=f(i,c,r,n,e[h+10],15,-1051523),n=f(n,i,c,r,e[h+1],21,-2054922799),r=f(r,n,i,c,e[h+8],6,1873313359),c=f(c,r,n,i,e[h+15],10,-30611744),i=f(i,c,r,n,e[h+6],15,-1560198380),n=f(n,i,c,r,e[h+13],21,1309151649),r=f(r,n,i,c,e[h+4],6,-145523070),c=f(c,r,n,i,e[h+11],10,-1120210379),i=f(i,c,r,n,e[h+2],15,718787259),n=f(n,i,c,r,e[h+9],21,-343485551),r=u(r,l),n=u(n,d),i=u(i,p),c=u(c,b)}return[r,n,i,c]}function i(e,t,r,n,i,a){return u(c(u(u(t,e),u(n,a)),i),r)}function a(e,t,r,n,a,o,s){return i(t&r|~t&n,e,t,a,o,s)}function o(e,t,r,n,a,o,s){return i(t&n|r&~n,e,t,a,o,s)}function s(e,t,r,n,a,o,s){return i(t^r^n,e,t,a,o,s)}function f(e,t,r,n,a,o,s){return i(r^(t|~n),e,t,a,o,s)}function u(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function c(e,t){return e<<t|e>>>32-t}var h=r(88);e.exports=function(e){return h(e,n)}},function(e,t,r){"use strict";(function(t){function r(e){if(e.length%n!=0){var r=e.length+(n-e.length%n);e=t.concat([e,i],r)}for(var a=new Array(e.length>>>2),o=0,s=0;o<e.length;o+=n,s++)a[s]=e.readInt32LE(o);return a}var n=4,i=new t(n);i.fill(0);e.exports=function(e,n){var i=n(r(e),8*e.length);e=new t(16);for(var a=0;a<i.length;a++)e.writeInt32LE(i[a],a<<2,!0);return e}}).call(t,r(7).Buffer)},function(e,t,r){"use strict";(function(t){function n(){h.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520}function i(e,t){return e<<t|e>>>32-t}function a(e,t,r,n,a,o,s,f){return i(e+(t^r^n)+o+s|0,f)+a|0}function o(e,t,r,n,a,o,s,f){return i(e+(t&r|~t&n)+o+s|0,f)+a|0}function s(e,t,r,n,a,o,s,f){return i(e+((t|~r)^n)+o+s|0,f)+a|0}function f(e,t,r,n,a,o,s,f){return i(e+(t&n|r&~n)+o+s|0,f)+a|0}function u(e,t,r,n,a,o,s,f){return i(e+(t^(r|~n))+o+s|0,f)+a|0}var c=r(1),h=r(90);c(n,h),n.prototype._update=function(){for(var e=new Array(16),t=0;t<16;++t)e[t]=this._block.readInt32LE(4*t);var r=this._a,n=this._b,c=this._c,h=this._d,l=this._e;r=a(r,n,c,h,l,e[0],0,11),c=i(c,10),l=a(l,r,n,c,h,e[1],0,14),n=i(n,10),h=a(h,l,r,n,c,e[2],0,15),r=i(r,10),c=a(c,h,l,r,n,e[3],0,12),l=i(l,10),n=a(n,c,h,l,r,e[4],0,5),h=i(h,10),r=a(r,n,c,h,l,e[5],0,8),c=i(c,10),l=a(l,r,n,c,h,e[6],0,7),n=i(n,10),h=a(h,l,r,n,c,e[7],0,9),r=i(r,10),c=a(c,h,l,r,n,e[8],0,11),l=i(l,10),n=a(n,c,h,l,r,e[9],0,13),h=i(h,10),r=a(r,n,c,h,l,e[10],0,14),c=i(c,10),l=a(l,r,n,c,h,e[11],0,15),n=i(n,10),h=a(h,l,r,n,c,e[12],0,6),r=i(r,10),c=a(c,h,l,r,n,e[13],0,7),l=i(l,10),n=a(n,c,h,l,r,e[14],0,9),h=i(h,10),r=a(r,n,c,h,l,e[15],0,8),c=i(c,10),l=o(l,r,n,c,h,e[7],1518500249,7),n=i(n,10),h=o(h,l,r,n,c,e[4],1518500249,6),r=i(r,10),c=o(c,h,l,r,n,e[13],1518500249,8),l=i(l,10),n=o(n,c,h,l,r,e[1],1518500249,13),h=i(h,10),r=o(r,n,c,h,l,e[10],1518500249,11),c=i(c,10),l=o(l,r,n,c,h,e[6],1518500249,9),n=i(n,10),h=o(h,l,r,n,c,e[15],1518500249,7),r=i(r,10),c=o(c,h,l,r,n,e[3],1518500249,15),l=i(l,10),n=o(n,c,h,l,r,e[12],1518500249,7),h=i(h,10),r=o(r,n,c,h,l,e[0],1518500249,12),c=i(c,10),l=o(l,r,n,c,h,e[9],1518500249,15),n=i(n,10),h=o(h,l,r,n,c,e[5],1518500249,9),r=i(r,10),c=o(c,h,l,r,n,e[2],1518500249,11),l=i(l,10),n=o(n,c,h,l,r,e[14],1518500249,7),h=i(h,10),r=o(r,n,c,h,l,e[11],1518500249,13),c=i(c,10),l=o(l,r,n,c,h,e[8],1518500249,12),n=i(n,10),h=s(h,l,r,n,c,e[3],1859775393,11),r=i(r,10),c=s(c,h,l,r,n,e[10],1859775393,13),l=i(l,10),n=s(n,c,h,l,r,e[14],1859775393,6),h=i(h,10),r=s(r,n,c,h,l,e[4],1859775393,7),c=i(c,10),l=s(l,r,n,c,h,e[9],1859775393,14),n=i(n,10),h=s(h,l,r,n,c,e[15],1859775393,9),r=i(r,10),c=s(c,h,l,r,n,e[8],1859775393,13),l=i(l,10),n=s(n,c,h,l,r,e[1],1859775393,15),h=i(h,10),r=s(r,n,c,h,l,e[2],1859775393,14),c=i(c,10),l=s(l,r,n,c,h,e[7],1859775393,8),n=i(n,10),h=s(h,l,r,n,c,e[0],1859775393,13),r=i(r,10),c=s(c,h,l,r,n,e[6],1859775393,6),l=i(l,10),n=s(n,c,h,l,r,e[13],1859775393,5),h=i(h,10),r=s(r,n,c,h,l,e[11],1859775393,12),c=i(c,10),l=s(l,r,n,c,h,e[5],1859775393,7),n=i(n,10),h=s(h,l,r,n,c,e[12],1859775393,5),r=i(r,10),c=f(c,h,l,r,n,e[1],2400959708,11),l=i(l,10),n=f(n,c,h,l,r,e[9],2400959708,12),h=i(h,10),r=f(r,n,c,h,l,e[11],2400959708,14),c=i(c,10),l=f(l,r,n,c,h,e[10],2400959708,15),n=i(n,10),h=f(h,l,r,n,c,e[0],2400959708,14),r=i(r,10),c=f(c,h,l,r,n,e[8],2400959708,15),l=i(l,10),n=f(n,c,h,l,r,e[12],2400959708,9),h=i(h,10),r=f(r,n,c,h,l,e[4],2400959708,8),c=i(c,10),l=f(l,r,n,c,h,e[13],2400959708,9),n=i(n,10),h=f(h,l,r,n,c,e[3],2400959708,14),r=i(r,10),c=f(c,h,l,r,n,e[7],2400959708,5),l=i(l,10),n=f(n,c,h,l,r,e[15],2400959708,6),h=i(h,10),r=f(r,n,c,h,l,e[14],2400959708,8),c=i(c,10),l=f(l,r,n,c,h,e[5],2400959708,6),n=i(n,10),h=f(h,l,r,n,c,e[6],2400959708,5),r=i(r,10),c=f(c,h,l,r,n,e[2],2400959708,12),l=i(l,10),n=u(n,c,h,l,r,e[4],2840853838,9),h=i(h,10),r=u(r,n,c,h,l,e[0],2840853838,15),c=i(c,10),l=u(l,r,n,c,h,e[5],2840853838,5),n=i(n,10),h=u(h,l,r,n,c,e[9],2840853838,11),r=i(r,10),c=u(c,h,l,r,n,e[7],2840853838,6),l=i(l,10),n=u(n,c,h,l,r,e[12],2840853838,8),h=i(h,10),r=u(r,n,c,h,l,e[2],2840853838,13),c=i(c,10),l=u(l,r,n,c,h,e[10],2840853838,12),n=i(n,10),h=u(h,l,r,n,c,e[14],2840853838,5),r=i(r,10),c=u(c,h,l,r,n,e[1],2840853838,12),l=i(l,10),n=u(n,c,h,l,r,e[3],2840853838,13),h=i(h,10),r=u(r,n,c,h,l,e[8],2840853838,14),c=i(c,10),l=u(l,r,n,c,h,e[11],2840853838,11),n=i(n,10),h=u(h,l,r,n,c,e[6],2840853838,8),r=i(r,10),c=u(c,h,l,r,n,e[15],2840853838,5),l=i(l,10),n=u(n,c,h,l,r,e[13],2840853838,6),h=i(h,10);var d=this._a,p=this._b,b=this._c,v=this._d,m=this._e;d=u(d,p,b,v,m,e[5],1352829926,8),b=i(b,10),m=u(m,d,p,b,v,e[14],1352829926,9),p=i(p,10),v=u(v,m,d,p,b,e[7],1352829926,9),d=i(d,10),b=u(b,v,m,d,p,e[0],1352829926,11),m=i(m,10),p=u(p,b,v,m,d,e[9],1352829926,13),v=i(v,10),d=u(d,p,b,v,m,e[2],1352829926,15),b=i(b,10),m=u(m,d,p,b,v,e[11],1352829926,15),p=i(p,10),v=u(v,m,d,p,b,e[4],1352829926,5),d=i(d,10),b=u(b,v,m,d,p,e[13],1352829926,7),m=i(m,10),p=u(p,b,v,m,d,e[6],1352829926,7),v=i(v,10),d=u(d,p,b,v,m,e[15],1352829926,8),b=i(b,10),m=u(m,d,p,b,v,e[8],1352829926,11),p=i(p,10),v=u(v,m,d,p,b,e[1],1352829926,14),d=i(d,10),b=u(b,v,m,d,p,e[10],1352829926,14),m=i(m,10),p=u(p,b,v,m,d,e[3],1352829926,12),v=i(v,10),d=u(d,p,b,v,m,e[12],1352829926,6),b=i(b,10),m=f(m,d,p,b,v,e[6],1548603684,9),p=i(p,10),v=f(v,m,d,p,b,e[11],1548603684,13),d=i(d,10),b=f(b,v,m,d,p,e[3],1548603684,15),m=i(m,10),p=f(p,b,v,m,d,e[7],1548603684,7),v=i(v,10),d=f(d,p,b,v,m,e[0],1548603684,12),b=i(b,10),m=f(m,d,p,b,v,e[13],1548603684,8),p=i(p,10),v=f(v,m,d,p,b,e[5],1548603684,9),d=i(d,10),b=f(b,v,m,d,p,e[10],1548603684,11),m=i(m,10),p=f(p,b,v,m,d,e[14],1548603684,7),v=i(v,10),d=f(d,p,b,v,m,e[15],1548603684,7),b=i(b,10),m=f(m,d,p,b,v,e[8],1548603684,12),p=i(p,10),v=f(v,m,d,p,b,e[12],1548603684,7),d=i(d,10),b=f(b,v,m,d,p,e[4],1548603684,6),m=i(m,10),p=f(p,b,v,m,d,e[9],1548603684,15),v=i(v,10),d=f(d,p,b,v,m,e[1],1548603684,13),b=i(b,10),m=f(m,d,p,b,v,e[2],1548603684,11),p=i(p,10),v=s(v,m,d,p,b,e[15],1836072691,9),d=i(d,10),b=s(b,v,m,d,p,e[5],1836072691,7),m=i(m,10),p=s(p,b,v,m,d,e[1],1836072691,15),v=i(v,10),d=s(d,p,b,v,m,e[3],1836072691,11),b=i(b,10),m=s(m,d,p,b,v,e[7],1836072691,8),p=i(p,10),v=s(v,m,d,p,b,e[14],1836072691,6),d=i(d,10),b=s(b,v,m,d,p,e[6],1836072691,6),m=i(m,10),p=s(p,b,v,m,d,e[9],1836072691,14),v=i(v,10),d=s(d,p,b,v,m,e[11],1836072691,12),b=i(b,10),m=s(m,d,p,b,v,e[8],1836072691,13),p=i(p,10),v=s(v,m,d,p,b,e[12],1836072691,5),d=i(d,10),b=s(b,v,m,d,p,e[2],1836072691,14),m=i(m,10),p=s(p,b,v,m,d,e[10],1836072691,13),v=i(v,10),d=s(d,p,b,v,m,e[0],1836072691,13),b=i(b,10),m=s(m,d,p,b,v,e[4],1836072691,7),p=i(p,10),v=s(v,m,d,p,b,e[13],1836072691,5),d=i(d,10),b=o(b,v,m,d,p,e[8],2053994217,15),m=i(m,10),p=o(p,b,v,m,d,e[6],2053994217,5),v=i(v,10),d=o(d,p,b,v,m,e[4],2053994217,8),b=i(b,10),m=o(m,d,p,b,v,e[1],2053994217,11),p=i(p,10),v=o(v,m,d,p,b,e[3],2053994217,14),d=i(d,10),b=o(b,v,m,d,p,e[11],2053994217,14),m=i(m,10),p=o(p,b,v,m,d,e[15],2053994217,6),v=i(v,10),d=o(d,p,b,v,m,e[0],2053994217,14),b=i(b,10),m=o(m,d,p,b,v,e[5],2053994217,6),p=i(p,10),v=o(v,m,d,p,b,e[12],2053994217,9),d=i(d,10),b=o(b,v,m,d,p,e[2],2053994217,12),m=i(m,10),p=o(p,b,v,m,d,e[13],2053994217,9),v=i(v,10),d=o(d,p,b,v,m,e[9],2053994217,12),b=i(b,10),m=o(m,d,p,b,v,e[7],2053994217,5),p=i(p,10),v=o(v,m,d,p,b,e[10],2053994217,15),d=i(d,10),b=o(b,v,m,d,p,e[14],2053994217,8),m=i(m,10),p=a(p,b,v,m,d,e[12],0,8),v=i(v,10),d=a(d,p,b,v,m,e[15],0,5),b=i(b,10),m=a(m,d,p,b,v,e[10],0,12),p=i(p,10),v=a(v,m,d,p,b,e[4],0,9),d=i(d,10),b=a(b,v,m,d,p,e[1],0,12),m=i(m,10),p=a(p,b,v,m,d,e[5],0,5),v=i(v,10),d=a(d,p,b,v,m,e[8],0,14),b=i(b,10),m=a(m,d,p,b,v,e[7],0,6),p=i(p,10),v=a(v,m,d,p,b,e[6],0,8),d=i(d,10),b=a(b,v,m,d,p,e[2],0,13),m=i(m,10),p=a(p,b,v,m,d,e[13],0,6),v=i(v,10),d=a(d,p,b,v,m,e[14],0,5),b=i(b,10),m=a(m,d,p,b,v,e[0],0,15),p=i(p,10),v=a(v,m,d,p,b,e[3],0,13),d=i(d,10),b=a(b,v,m,d,p,e[9],0,11),m=i(m,10),p=a(p,b,v,m,d,e[11],0,11),v=i(v,10);var g=this._b+c+v|0;this._b=this._c+h+m|0,this._c=this._d+l+d|0,this._d=this._e+r+p|0,this._e=this._a+n+b|0,this._a=g},n.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var e=new t(20);return e.writeInt32LE(this._a,0),e.writeInt32LE(this._b,4),e.writeInt32LE(this._c,8),e.writeInt32LE(this._d,12),e.writeInt32LE(this._e,16),e},e.exports=n}).call(t,r(7).Buffer)},function(e,t,r){"use strict";(function(t){function n(e){i.call(this),this._block=new t(e),this._blockSize=e,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}var i=r(50).Transform;r(1)(n,i),n.prototype._transform=function(e,r,n){var i=null;try{"buffer"!==r&&(e=new t(e,r)),this.update(e)}catch(e){i=e}n(i)},n.prototype._flush=function(e){var t=null;try{this.push(this._digest())}catch(e){t=e}e(t)},n.prototype.update=function(e,r){if(!t.isBuffer(e)&&"string"!=typeof e)throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Digest already called");t.isBuffer(e)||(e=new t(e,r||"binary"));for(var n=this._block,i=0;this._blockOffset+e.length-i>=this._blockSize;){for(var a=this._blockOffset;a<this._blockSize;)n[a++]=e[i++];this._update(),this._blockOffset=0}for(;i<e.length;)n[this._blockOffset++]=e[i++];for(var o=0,s=8*e.length;s>0;++o)this._length[o]+=s,(s=this._length[o]/4294967296|0)>0&&(this._length[o]-=4294967296*s);return this},n.prototype._update=function(e){throw new Error("_update is not implemented")},n.prototype.digest=function(e){if(this._finalized)throw new Error("Digest already called");this._finalized=!0;var t=this._digest();return void 0!==e&&(t=t.toString(e)),t},n.prototype._digest=function(){throw new Error("_digest is not implemented")},e.exports=n}).call(t,r(7).Buffer)},function(e,t){},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,r){e.copy(t,r)}var a=r(5).Buffer;e.exports=function(){function e(){n(this,e),this.head=null,this.tail=null,this.length=0}return e.prototype.push=function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length},e.prototype.unshift=function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length},e.prototype.shift=function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}},e.prototype.clear=function(){this.head=this.tail=null,this.length=0},e.prototype.join=function(e){if(0===this.length)return"";for(var t=this.head,r=""+t.data;t=t.next;)r+=e+t.data;return r},e.prototype.concat=function(e){if(0===this.length)return a.alloc(0);if(1===this.length)return this.head.data;for(var t=a.allocUnsafe(e>>>0),r=this.head,n=0;r;)i(r.data,t,n),n+=r.data.length,r=r.next;return t},e}()},function(e,t,r){(function(e,t){!function(e,r){"use strict";function n(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return u[f]=n,s(f),f++}function i(e){delete u[e]}function a(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(r,n)}}function o(e){if(c)setTimeout(o,0,e);else{var t=u[e];if(t){c=!0;try{a(t)}finally{i(e),c=!1}}}}if(!e.setImmediate){var s,f=1,u={},c=!1,h=e.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(e);l=l&&l.setTimeout?l:e,"[object process]"==={}.toString.call(e.process)?function(){s=function(e){t.nextTick(function(){o(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,r=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=r,t}}()?function(){var t="setImmediate$"+Math.random()+"$",r=function(r){r.source===e&&"string"==typeof r.data&&0===r.data.indexOf(t)&&o(+r.data.slice(t.length))};e.addEventListener?e.addEventListener("message",r,!1):e.attachEvent("onmessage",r),s=function(r){e.postMessage(t+r,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){o(e.data)},s=function(t){e.port2.postMessage(t)}}():h&&"onreadystatechange"in h.createElement("script")?function(){var e=h.documentElement;s=function(t){var r=h.createElement("script");r.onreadystatechange=function(){o(t),r.onreadystatechange=null,e.removeChild(r),r=null},e.appendChild(r)}}():function(){s=function(e){setTimeout(o,0,e)}}(),l.setImmediate=n,l.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,r(17),r(10))},function(e,t,r){(function(t){function r(e,t){function r(){if(!i){if(n("throwDeprecation"))throw new Error(t);n("traceDeprecation")?console.trace(t):console.warn(t),i=!0}return e.apply(this,arguments)}if(n("noDeprecation"))return e;var i=!1;return r}function n(e){try{if(!t.localStorage)return!1}catch(e){return!1}var r=t.localStorage[e];return null!=r&&"true"===String(r).toLowerCase()}e.exports=r}).call(t,r(17))},function(e,t,r){"use strict";function n(e){if(!(this instanceof n))return new n(e);i.call(this,e)}e.exports=n;var i=r(54),a=r(22);a.inherits=r(1),a.inherits(n,i),n.prototype._transform=function(e,t,r){r(null,e)}},function(e,t,r){e.exports=r(33)},function(e,t,r){e.exports=r(14)},function(e,t,r){e.exports=r(32).Transform},function(e,t,r){e.exports=r(32).PassThrough},function(e,t,r){var t=e.exports=function(e){e=e.toLowerCase();var r=t[e];if(!r)throw new Error(e+" is not supported (we accept pull requests)");return new r};t.sha=r(101),t.sha1=r(102),t.sha224=r(103),t.sha256=r(55),t.sha384=r(104),t.sha512=r(56)},function(e,t,r){function n(){this.init(),this._w=h,f.call(this,64,56)}function i(e){return e<<5|e>>>27}function a(e){return e<<30|e>>>2}function o(e,t,r,n){return 0===e?t&r|~t&n:2===e?t&r|t&n|r&n:t^r^n}var s=r(1),f=r(18),u=r(5).Buffer,c=[1518500249,1859775393,-1894007588,-899497514],h=new Array(80);s(n,f),n.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},n.prototype._update=function(e){for(var t=this._w,r=0|this._a,n=0|this._b,s=0|this._c,f=0|this._d,u=0|this._e,h=0;h<16;++h)t[h]=e.readInt32BE(4*h);for(;h<80;++h)t[h]=t[h-3]^t[h-8]^t[h-14]^t[h-16];for(var l=0;l<80;++l){var d=~~(l/20),p=i(r)+o(d,n,s,f)+u+t[l]+c[d]|0;u=f,f=s,s=a(n),n=r,r=p}this._a=r+this._a|0,this._b=n+this._b|0,this._c=s+this._c|0,this._d=f+this._d|0,this._e=u+this._e|0},n.prototype._hash=function(){var e=u.allocUnsafe(20);return e.writeInt32BE(0|this._a,0),e.writeInt32BE(0|this._b,4),e.writeInt32BE(0|this._c,8),e.writeInt32BE(0|this._d,12),e.writeInt32BE(0|this._e,16),e},e.exports=n},function(e,t,r){function n(){this.init(),this._w=l,u.call(this,64,56)}function i(e){return e<<1|e>>>31}function a(e){return e<<5|e>>>27}function o(e){return e<<30|e>>>2}function s(e,t,r,n){return 0===e?t&r|~t&n:2===e?t&r|t&n|r&n:t^r^n}var f=r(1),u=r(18),c=r(5).Buffer,h=[1518500249,1859775393,-1894007588,-899497514],l=new Array(80);f(n,u),n.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},n.prototype._update=function(e){for(var t=this._w,r=0|this._a,n=0|this._b,f=0|this._c,u=0|this._d,c=0|this._e,l=0;l<16;++l)t[l]=e.readInt32BE(4*l);for(;l<80;++l)t[l]=i(t[l-3]^t[l-8]^t[l-14]^t[l-16]);for(var d=0;d<80;++d){var p=~~(d/20),b=a(r)+s(p,n,f,u)+c+t[d]+h[p]|0;c=u,u=f,f=o(n),n=r,r=b}this._a=r+this._a|0,this._b=n+this._b|0,this._c=f+this._c|0,this._d=u+this._d|0,this._e=c+this._e|0},n.prototype._hash=function(){var e=c.allocUnsafe(20);return e.writeInt32BE(0|this._a,0),e.writeInt32BE(0|this._b,4),e.writeInt32BE(0|this._c,8),e.writeInt32BE(0|this._d,12),e.writeInt32BE(0|this._e,16),e},e.exports=n},function(e,t,r){function n(){this.init(),this._w=f,o.call(this,64,56)}var i=r(1),a=r(55),o=r(18),s=r(5).Buffer,f=new Array(64);i(n,a),n.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},n.prototype._hash=function(){var e=s.allocUnsafe(28);return e.writeInt32BE(this._a,0),e.writeInt32BE(this._b,4),e.writeInt32BE(this._c,8),e.writeInt32BE(this._d,12),e.writeInt32BE(this._e,16),e.writeInt32BE(this._f,20),e.writeInt32BE(this._g,24),e},e.exports=n},function(e,t,r){function n(){this.init(),this._w=f,o.call(this,128,112)}var i=r(1),a=r(56),o=r(18),s=r(5).Buffer,f=new Array(160);i(n,a),n.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},n.prototype._hash=function(){function e(e,r,n){t.writeInt32BE(e,n),t.writeInt32BE(r,n+4)}var t=s.allocUnsafe(48);return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),t},e.exports=n},function(e,t,r){function n(e){a.call(this),this.hashMode="string"==typeof e,this.hashMode?this[e]=this._finalOrDigest:this.final=this._finalOrDigest,this._final&&(this.__final=this._final,this._final=null),this._decoder=null,this._encoding=null}var i=r(5).Buffer,a=r(50).Transform,o=r(35).StringDecoder;r(1)(n,a),n.prototype.update=function(e,t,r){"string"==typeof e&&(e=i.from(e,t));var n=this._update(e);return this.hashMode?this:(r&&(n=this._toString(n,r)),n)},n.prototype.setAutoPadding=function(){},n.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},n.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},n.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},n.prototype._transform=function(e,t,r){var n;try{this.hashMode?this._update(e):this.push(this._update(e))}catch(e){n=e}finally{r(n)}},n.prototype._flush=function(e){var t;try{this.push(this.__final())}catch(e){t=e}e(t)},n.prototype._finalOrDigest=function(e){var t=this.__final()||i.alloc(0);return e&&(t=this._toString(t,e,!0)),t},n.prototype._toString=function(e,t,r){if(this._decoder||(this._decoder=new o(t),this._encoding=t),this._encoding!==t)throw new Error("can't switch encodings");var n=this._decoder.write(e);return r&&(n+=this._decoder.end()),n},e.exports=n},function(e,t,r){"use strict";var n=r(36),i=r(5).Buffer;e.exports=function(e){function t(t){var r=e(t);return n.encode(i.concat([t,r],t.length+4))}function r(t){var r=t.slice(0,-4),n=t.slice(-4),i=e(r);if(!(n[0]^i[0]|n[1]^i[1]|n[2]^i[2]|n[3]^i[3]))return r}function a(e){var t=n.decodeUnsafe(e);if(t)return r(t)}function o(t){var i=n.decode(t),a=r(i,e);if(!a)throw new Error("Invalid checksum");return a}return{encode:t,decode:o,decodeUnsafe:a}}},function(e,t,r){var n=r(5).Buffer;e.exports=function(e){function t(t){if(0===t.length)return"";for(var r=[0],n=0;n<t.length;++n){for(var i=0,a=t[n];i<r.length;++i)a+=r[i]<<8,r[i]=a%o,a=a/o|0;for(;a>0;)r.push(a%o),a=a/o|0}for(var f="",u=0;0===t[u]&&u<t.length-1;++u)f+=s;for(var c=r.length-1;c>=0;--c)f+=e[r[c]];return f}function r(e){if("string"!=typeof e)throw new TypeError("Expected String");if(0===e.length)return n.allocUnsafe(0);for(var t=[0],r=0;r<e.length;r++){var i=a[e[r]];if(void 0===i)return;for(var f=0,u=i;f<t.length;++f)u+=t[f]*o,t[f]=255&u,u>>=8;for(;u>0;)t.push(255&u),u>>=8}for(var c=0;e[c]===s&&c<e.length-1;++c)t.push(0);return n.from(t.reverse())}function i(e){var t=r(e);if(t)return t;throw new Error("Non-base"+o+" character")}for(var a={},o=e.length,s=e.charAt(0),f=0;f<e.length;f++){var u=e.charAt(f);if(void 0!==a[u])throw new TypeError(u+" is ambiguous");a[u]=f}return{encode:t,decodeUnsafe:r,decode:i}}},function(e,t){e.exports={_args:[["elliptic@6.4.0","D:\\CityOfZion\\neon-js"]],_from:"elliptic@6.4.0",_id:"elliptic@6.4.0",_inBundle:!1,_integrity:"sha1-ysmvh2LIWDYYcAPI3+GT5eLq5d8=",_location:"/elliptic",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"elliptic@6.4.0",name:"elliptic",escapedName:"elliptic",rawSpec:"6.4.0",saveSpec:null,fetchSpec:"6.4.0"},_requiredBy:["/","/browserify-sign","/create-ecdh"],_resolved:"https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz",_spec:"6.4.0",_where:"D:\\CityOfZion\\neon-js",author:{name:"Fedor Indutny",email:"fedor@indutny.com"},bugs:{url:"https://github.com/indutny/elliptic/issues"},dependencies:{"bn.js":"^4.4.0",brorand:"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0",inherits:"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},description:"EC cryptography",devDependencies:{brfs:"^1.4.3",coveralls:"^2.11.3",grunt:"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2",istanbul:"^0.4.2",jscs:"^2.9.0",jshint:"^2.6.0",mocha:"^2.1.0"},files:["lib"],homepage:"https://github.com/indutny/elliptic",keywords:["EC","Elliptic","curve","Cryptography"],license:"MIT",main:"lib/elliptic.js",name:"elliptic",repository:{type:"git",url:"git+ssh://git@github.com/indutny/elliptic.git"},scripts:{jscs:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",jshint:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",lint:"npm run jscs && npm run jshint",test:"npm run lint && npm run unit",unit:"istanbul test _mocha --reporter=spec test/index.js",version:"grunt dist && git add dist/"},version:"6.4.0"}},function(e,t,r){"use strict";function n(e,t){for(var r=[],n=1<<t+1,i=e.clone();i.cmpn(1)>=0;){var a;if(i.isOdd()){var o=i.andln(n-1);a=o>(n>>1)-1?(n>>1)-o:o,i.isubn(a)}else a=0;r.push(a);for(var s=0!==i.cmpn(0)&&0===i.andln(n-1)?t+1:1,f=1;f<s;f++)r.push(0);i.iushrn(s)}return r}function i(e,t){var r=[[],[]];e=e.clone(),t=t.clone();for(var n=0,i=0;e.cmpn(-n)>0||t.cmpn(-i)>0;){var a=e.andln(3)+n&3,o=t.andln(3)+i&3;3===a&&(a=-1),3===o&&(o=-1);var s;if(0==(1&a))s=0;else{var f=e.andln(7)+n&7;s=3!==f&&5!==f||2!==o?a:-a}r[0].push(s);var u;if(0==(1&o))u=0;else{var f=t.andln(7)+i&7;u=3!==f&&5!==f||2!==a?o:-o}r[1].push(u),2*n===s+1&&(n=1-n),2*i===u+1&&(i=1-i),e.iushrn(1),t.iushrn(1)}return r}function a(e,t,r){var n="_"+t;e.prototype[t]=function(){return void 0!==this[n]?this[n]:this[n]=r.call(this)}}function o(e){return"string"==typeof e?f.toArray(e,"hex"):e}function s(e){return new u(e,"hex","le")}var f=t,u=r(13),c=r(15),h=r(58);f.assert=c,f.toArray=h.toArray,f.zero2=h.zero2,f.toHex=h.toHex,f.encode=h.encode,f.getNAF=n,f.getJSF=i,f.cachedProperty=a,f.parseBytes=o,f.intFromLE=s},function(e,t){},function(e,t,r){function n(e){this.rand=e}var i;if(e.exports=function(e){return i||(i=new n(null)),i.generate(e)},e.exports.Rand=n,n.prototype.generate=function(e){return this._rand(e)},n.prototype._rand=function(e){if(this.rand.getBytes)return this.rand.getBytes(e);for(var t=new Uint8Array(e),r=0;r<t.length;r++)t[r]=this.rand.getByte();return t},"object"==typeof self)self.crypto&&self.crypto.getRandomValues?n.prototype._rand=function(e){var t=new Uint8Array(e);return self.crypto.getRandomValues(t),t}:self.msCrypto&&self.msCrypto.getRandomValues?n.prototype._rand=function(e){var t=new Uint8Array(e);return self.msCrypto.getRandomValues(t),t}:"object"==typeof window&&(n.prototype._rand=function(){throw new Error("Not implemented yet")});else try{var a=r(112);if("function"!=typeof a.randomBytes)throw new Error("Not supported");n.prototype._rand=function(e){return a.randomBytes(e)}}catch(e){}},function(e,t){},function(e,t,r){"use strict";function n(e,t){this.type=e,this.p=new a(t.p,16),this.red=t.prime?a.red(t.prime):a.mont(this.p),this.zero=new a(0).toRed(this.red),this.one=new a(1).toRed(this.red),this.two=new a(2).toRed(this.red),this.n=t.n&&new a(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4);var r=this.n&&this.p.div(this.n);!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}function i(e,t){this.curve=e,this.type=t,this.precomputed=null}var a=r(13),o=r(8),s=o.utils,f=s.getNAF,u=s.getJSF,c=s.assert;e.exports=n,n.prototype.point=function(){throw new Error("Not implemented")},n.prototype.validate=function(){throw new Error("Not implemented")},n.prototype._fixedNafMul=function(e,t){c(e.precomputed);var r=e._getDoubles(),n=f(t,1),i=(1<<r.step+1)-(r.step%2==0?2:1);i/=3;for(var a=[],o=0;o<n.length;o+=r.step){for(var s=0,t=o+r.step-1;t>=o;t--)s=(s<<1)+n[t];a.push(s)}for(var u=this.jpoint(null,null,null),h=this.jpoint(null,null,null),l=i;l>0;l--){for(var o=0;o<a.length;o++){var s=a[o];s===l?h=h.mixedAdd(r.points[o]):s===-l&&(h=h.mixedAdd(r.points[o].neg()))}u=u.add(h)}return u.toP()},n.prototype._wnafMul=function(e,t){var r=4,n=e._getNAFPoints(r);r=n.wnd;for(var i=n.points,a=f(t,r),o=this.jpoint(null,null,null),s=a.length-1;s>=0;s--){for(var t=0;s>=0&&0===a[s];s--)t++;if(s>=0&&t++,o=o.dblp(t),s<0)break;var u=a[s];c(0!==u),o="affine"===e.type?u>0?o.mixedAdd(i[u-1>>1]):o.mixedAdd(i[-u-1>>1].neg()):u>0?o.add(i[u-1>>1]):o.add(i[-u-1>>1].neg())}return"affine"===e.type?o.toP():o},n.prototype._wnafMulAdd=function(e,t,r,n,i){for(var a=this._wnafT1,o=this._wnafT2,s=this._wnafT3,c=0,h=0;h<n;h++){var l=t[h],d=l._getNAFPoints(e);a[h]=d.wnd,o[h]=d.points}for(var h=n-1;h>=1;h-=2){var p=h-1,b=h;if(1===a[p]&&1===a[b]){var v=[t[p],null,null,t[b]];0===t[p].y.cmp(t[b].y)?(v[1]=t[p].add(t[b]),v[2]=t[p].toJ().mixedAdd(t[b].neg())):0===t[p].y.cmp(t[b].y.redNeg())?(v[1]=t[p].toJ().mixedAdd(t[b]),v[2]=t[p].add(t[b].neg())):(v[1]=t[p].toJ().mixedAdd(t[b]),v[2]=t[p].toJ().mixedAdd(t[b].neg()));var m=[-3,-1,-5,-7,0,7,5,1,3],g=u(r[p],r[b]);c=Math.max(g[0].length,c),s[p]=new Array(c),s[b]=new Array(c);for(var y=0;y<c;y++){var w=0|g[0][y],_=0|g[1][y];s[p][y]=m[3*(w+1)+(_+1)],s[b][y]=0,o[p]=v}}else s[p]=f(r[p],a[p]),s[b]=f(r[b],a[b]),c=Math.max(s[p].length,c),c=Math.max(s[b].length,c)}for(var S=this.jpoint(null,null,null),k=this._wnafT4,h=c;h>=0;h--){for(var x=0;h>=0;){for(var A=!0,y=0;y<n;y++)k[y]=0|s[y][h],0!==k[y]&&(A=!1);if(!A)break;x++,h--}if(h>=0&&x++,S=S.dblp(x),h<0)break;for(var y=0;y<n;y++){var l,M=k[y];0!==M&&(M>0?l=o[y][M-1>>1]:M<0&&(l=o[y][-M-1>>1].neg()),S="affine"===l.type?S.mixedAdd(l):S.add(l))}}for(var h=0;h<n;h++)o[h]=null;return i?S:S.toP()},n.BasePoint=i,i.prototype.eq=function(){throw new Error("Not implemented")},i.prototype.validate=function(){return this.curve.validate(this)},n.prototype.decodePoint=function(e,t){e=s.toArray(e,t);var r=this.p.byteLength();if((4===e[0]||6===e[0]||7===e[0])&&e.length-1==2*r){6===e[0]?c(e[e.length-1]%2==0):7===e[0]&&c(e[e.length-1]%2==1);return this.point(e.slice(1,1+r),e.slice(1+r,1+2*r))}if((2===e[0]||3===e[0])&&e.length-1===r)return this.pointFromX(e.slice(1,1+r),3===e[0]);throw new Error("Unknown point format")},i.prototype.encodeCompressed=function(e){return this.encode(e,!0)},i.prototype._encode=function(e){var t=this.curve.p.byteLength(),r=this.getX().toArray("be",t);return e?[this.getY().isEven()?2:3].concat(r):[4].concat(r,this.getY().toArray("be",t))},i.prototype.encode=function(e,t){return s.encode(this._encode(t),e)},i.prototype.precompute=function(e){if(this.precomputed)return this;var t={doubles:null,naf:null,beta:null};return t.naf=this._getNAFPoints(8),t.doubles=this._getDoubles(4,e),t.beta=this._getBeta(),this.precomputed=t,this},i.prototype._hasDoubles=function(e){if(!this.precomputed)return!1;var t=this.precomputed.doubles;return!!t&&t.points.length>=Math.ceil((e.bitLength()+1)/t.step)},i.prototype._getDoubles=function(e,t){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var r=[this],n=this,i=0;i<t;i+=e){for(var a=0;a<e;a++)n=n.dbl();r.push(n)}return{step:e,points:r}},i.prototype._getNAFPoints=function(e){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var t=[this],r=(1<<e)-1,n=1===r?null:this.dbl(),i=1;i<r;i++)t[i]=t[i-1].add(n);return{wnd:e,points:t}},i.prototype._getBeta=function(){return null},i.prototype.dblp=function(e){for(var t=this,r=0;r<e;r++)t=t.dbl();return t}},function(e,t,r){"use strict";function n(e){c.call(this,"short",e),this.a=new f(e.a,16).toRed(this.red),this.b=new f(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(e),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}function i(e,t,r,n){c.BasePoint.call(this,e,"affine"),null===t&&null===r?(this.x=null,this.y=null,this.inf=!0):(this.x=new f(t,16),this.y=new f(r,16),n&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function a(e,t,r,n){c.BasePoint.call(this,e,"jacobian"),null===t&&null===r&&null===n?(this.x=this.curve.one,this.y=this.curve.one,this.z=new f(0)):(this.x=new f(t,16),this.y=new f(r,16),this.z=new f(n,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}var o=r(26),s=r(8),f=r(13),u=r(1),c=o.base,h=s.utils.assert;u(n,c),e.exports=n,n.prototype._getEndomorphism=function(e){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){var t,r;if(e.beta)t=new f(e.beta,16).toRed(this.red);else{var n=this._getEndoRoots(this.p);t=n[0].cmp(n[1])<0?n[0]:n[1],t=t.toRed(this.red)}if(e.lambda)r=new f(e.lambda,16);else{var i=this._getEndoRoots(this.n);0===this.g.mul(i[0]).x.cmp(this.g.x.redMul(t))?r=i[0]:(r=i[1],h(0===this.g.mul(r).x.cmp(this.g.x.redMul(t))))}var a;return a=e.basis?e.basis.map(function(e){return{a:new f(e.a,16),b:new f(e.b,16)}}):this._getEndoBasis(r),{beta:t,lambda:r,basis:a}}},n.prototype._getEndoRoots=function(e){var t=e===this.p?this.red:f.mont(e),r=new f(2).toRed(t).redInvm(),n=r.redNeg(),i=new f(3).toRed(t).redNeg().redSqrt().redMul(r);return[n.redAdd(i).fromRed(),n.redSub(i).fromRed()]},n.prototype._getEndoBasis=function(e){for(var t,r,n,i,a,o,s,u,c,h=this.n.ushrn(Math.floor(this.n.bitLength()/2)),l=e,d=this.n.clone(),p=new f(1),b=new f(0),v=new f(0),m=new f(1),g=0;0!==l.cmpn(0);){var y=d.div(l);u=d.sub(y.mul(l)),c=v.sub(y.mul(p));var w=m.sub(y.mul(b));if(!n&&u.cmp(h)<0)t=s.neg(),r=p,n=u.neg(),i=c;else if(n&&2==++g)break;s=u,d=l,l=u,v=p,p=c,m=b,b=w}a=u.neg(),o=c;var _=n.sqr().add(i.sqr());return a.sqr().add(o.sqr()).cmp(_)>=0&&(a=t,o=r),n.negative&&(n=n.neg(),i=i.neg()),a.negative&&(a=a.neg(),o=o.neg()),[{a:n,b:i},{a:a,b:o}]},n.prototype._endoSplit=function(e){var t=this.endo.basis,r=t[0],n=t[1],i=n.b.mul(e).divRound(this.n),a=r.b.neg().mul(e).divRound(this.n),o=i.mul(r.a),s=a.mul(n.a),f=i.mul(r.b),u=a.mul(n.b);return{k1:e.sub(o).sub(s),k2:f.add(u).neg()}},n.prototype.pointFromX=function(e,t){e=new f(e,16),e.red||(e=e.toRed(this.red));var r=e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),n=r.redSqrt();if(0!==n.redSqr().redSub(r).cmp(this.zero))throw new Error("invalid point");var i=n.fromRed().isOdd();return(t&&!i||!t&&i)&&(n=n.redNeg()),this.point(e,n)},n.prototype.validate=function(e){if(e.inf)return!0;var t=e.x,r=e.y,n=this.a.redMul(t),i=t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);return 0===r.redSqr().redISub(i).cmpn(0)},n.prototype._endoWnafMulAdd=function(e,t,r){for(var n=this._endoWnafT1,i=this._endoWnafT2,a=0;a<e.length;a++){var o=this._endoSplit(t[a]),s=e[a],f=s._getBeta();o.k1.negative&&(o.k1.ineg(),s=s.neg(!0)),o.k2.negative&&(o.k2.ineg(),f=f.neg(!0)),n[2*a]=s,n[2*a+1]=f,i[2*a]=o.k1,i[2*a+1]=o.k2}for(var u=this._wnafMulAdd(1,n,i,2*a,r),c=0;c<2*a;c++)n[c]=null,i[c]=null;return u},u(i,c.BasePoint),n.prototype.point=function(e,t,r){return new i(this,e,t,r)},n.prototype.pointFromJSON=function(e,t){return i.fromJSON(this,e,t)},i.prototype._getBeta=function(){if(this.curve.endo){var e=this.precomputed;if(e&&e.beta)return e.beta;var t=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(e){var r=this.curve,n=function(e){return r.point(e.x.redMul(r.endo.beta),e.y)};e.beta=t,t.precomputed={beta:null,naf:e.naf&&{wnd:e.naf.wnd,points:e.naf.points.map(n)},doubles:e.doubles&&{step:e.doubles.step,points:e.doubles.points.map(n)}}}return t}},i.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},i.fromJSON=function(e,t,r){function n(t){return e.point(t[0],t[1],r)}"string"==typeof t&&(t=JSON.parse(t));var i=e.point(t[0],t[1],r);if(!t[2])return i;var a=t[2];return i.precomputed={beta:null,doubles:a.doubles&&{step:a.doubles.step,points:[i].concat(a.doubles.points.map(n))},naf:a.naf&&{wnd:a.naf.wnd,points:[i].concat(a.naf.points.map(n))}},i},i.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},i.prototype.isInfinity=function(){return this.inf},i.prototype.add=function(e){if(this.inf)return e;if(e.inf)return this;if(this.eq(e))return this.dbl();if(this.neg().eq(e))return this.curve.point(null,null);if(0===this.x.cmp(e.x))return this.curve.point(null,null);var t=this.y.redSub(e.y);0!==t.cmpn(0)&&(t=t.redMul(this.x.redSub(e.x).redInvm()));var r=t.redSqr().redISub(this.x).redISub(e.x),n=t.redMul(this.x.redSub(r)).redISub(this.y);return this.curve.point(r,n)},i.prototype.dbl=function(){if(this.inf)return this;var e=this.y.redAdd(this.y);if(0===e.cmpn(0))return this.curve.point(null,null);var t=this.curve.a,r=this.x.redSqr(),n=e.redInvm(),i=r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),a=i.redSqr().redISub(this.x.redAdd(this.x)),o=i.redMul(this.x.redSub(a)).redISub(this.y);return this.curve.point(a,o)},i.prototype.getX=function(){return this.x.fromRed()},i.prototype.getY=function(){return this.y.fromRed()},i.prototype.mul=function(e){return e=new f(e,16),this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve.endo?this.curve._endoWnafMulAdd([this],[e]):this.curve._wnafMul(this,e)},i.prototype.mulAdd=function(e,t,r){var n=[this,t],i=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i):this.curve._wnafMulAdd(1,n,i,2)},i.prototype.jmulAdd=function(e,t,r){var n=[this,t],i=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i,!0):this.curve._wnafMulAdd(1,n,i,2,!0)},i.prototype.eq=function(e){return this===e||this.inf===e.inf&&(this.inf||0===this.x.cmp(e.x)&&0===this.y.cmp(e.y))},i.prototype.neg=function(e){if(this.inf)return this;var t=this.curve.point(this.x,this.y.redNeg());if(e&&this.precomputed){var r=this.precomputed,n=function(e){return e.neg()};t.precomputed={naf:r.naf&&{wnd:r.naf.wnd,points:r.naf.points.map(n)},doubles:r.doubles&&{step:r.doubles.step,points:r.doubles.points.map(n)}}}return t},i.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},u(a,c.BasePoint),n.prototype.jpoint=function(e,t,r){return new a(this,e,t,r)},a.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var e=this.z.redInvm(),t=e.redSqr(),r=this.x.redMul(t),n=this.y.redMul(t).redMul(e);return this.curve.point(r,n)},a.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},a.prototype.add=function(e){if(this.isInfinity())return e;if(e.isInfinity())return this;var t=e.z.redSqr(),r=this.z.redSqr(),n=this.x.redMul(t),i=e.x.redMul(r),a=this.y.redMul(t.redMul(e.z)),o=e.y.redMul(r.redMul(this.z)),s=n.redSub(i),f=a.redSub(o);if(0===s.cmpn(0))return 0!==f.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var u=s.redSqr(),c=u.redMul(s),h=n.redMul(u),l=f.redSqr().redIAdd(c).redISub(h).redISub(h),d=f.redMul(h.redISub(l)).redISub(a.redMul(c)),p=this.z.redMul(e.z).redMul(s);return this.curve.jpoint(l,d,p)},a.prototype.mixedAdd=function(e){if(this.isInfinity())return e.toJ();if(e.isInfinity())return this;var t=this.z.redSqr(),r=this.x,n=e.x.redMul(t),i=this.y,a=e.y.redMul(t).redMul(this.z),o=r.redSub(n),s=i.redSub(a);if(0===o.cmpn(0))return 0!==s.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var f=o.redSqr(),u=f.redMul(o),c=r.redMul(f),h=s.redSqr().redIAdd(u).redISub(c).redISub(c),l=s.redMul(c.redISub(h)).redISub(i.redMul(u)),d=this.z.redMul(o);return this.curve.jpoint(h,l,d)},a.prototype.dblp=function(e){if(0===e)return this;if(this.isInfinity())return this;if(!e)return this.dbl();if(this.curve.zeroA||this.curve.threeA){for(var t=this,r=0;r<e;r++)t=t.dbl();return t}for(var n=this.curve.a,i=this.curve.tinv,a=this.x,o=this.y,s=this.z,f=s.redSqr().redSqr(),u=o.redAdd(o),r=0;r<e;r++){var c=a.redSqr(),h=u.redSqr(),l=h.redSqr(),d=c.redAdd(c).redIAdd(c).redIAdd(n.redMul(f)),p=a.redMul(h),b=d.redSqr().redISub(p.redAdd(p)),v=p.redISub(b),m=d.redMul(v);m=m.redIAdd(m).redISub(l);var g=u.redMul(s);r+1<e&&(f=f.redMul(l)),a=b,s=g,u=m}return this.curve.jpoint(a,u.redMul(i),s)},a.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},a.prototype._zeroDbl=function(){var e,t,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),a=i.redSqr(),o=this.x.redAdd(i).redSqr().redISub(n).redISub(a);o=o.redIAdd(o);var s=n.redAdd(n).redIAdd(n),f=s.redSqr().redISub(o).redISub(o),u=a.redIAdd(a);u=u.redIAdd(u),u=u.redIAdd(u),e=f,t=s.redMul(o.redISub(f)).redISub(u),r=this.y.redAdd(this.y)}else{var c=this.x.redSqr(),h=this.y.redSqr(),l=h.redSqr(),d=this.x.redAdd(h).redSqr().redISub(c).redISub(l);d=d.redIAdd(d);var p=c.redAdd(c).redIAdd(c),b=p.redSqr(),v=l.redIAdd(l);v=v.redIAdd(v),v=v.redIAdd(v),e=b.redISub(d).redISub(d),t=p.redMul(d.redISub(e)).redISub(v),r=this.y.redMul(this.z),r=r.redIAdd(r)}return this.curve.jpoint(e,t,r)},a.prototype._threeDbl=function(){var e,t,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),a=i.redSqr(),o=this.x.redAdd(i).redSqr().redISub(n).redISub(a);o=o.redIAdd(o);var s=n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),f=s.redSqr().redISub(o).redISub(o);e=f;var u=a.redIAdd(a);u=u.redIAdd(u),u=u.redIAdd(u),t=s.redMul(o.redISub(f)).redISub(u),r=this.y.redAdd(this.y)}else{var c=this.z.redSqr(),h=this.y.redSqr(),l=this.x.redMul(h),d=this.x.redSub(c).redMul(this.x.redAdd(c));d=d.redAdd(d).redIAdd(d);var p=l.redIAdd(l);p=p.redIAdd(p);var b=p.redAdd(p);e=d.redSqr().redISub(b),r=this.y.redAdd(this.z).redSqr().redISub(h).redISub(c);var v=h.redSqr();v=v.redIAdd(v),v=v.redIAdd(v),v=v.redIAdd(v),t=d.redMul(p.redISub(e)).redISub(v)}return this.curve.jpoint(e,t,r)},a.prototype._dbl=function(){var e=this.curve.a,t=this.x,r=this.y,n=this.z,i=n.redSqr().redSqr(),a=t.redSqr(),o=r.redSqr(),s=a.redAdd(a).redIAdd(a).redIAdd(e.redMul(i)),f=t.redAdd(t);f=f.redIAdd(f);var u=f.redMul(o),c=s.redSqr().redISub(u.redAdd(u)),h=u.redISub(c),l=o.redSqr();l=l.redIAdd(l),l=l.redIAdd(l),l=l.redIAdd(l);var d=s.redMul(h).redISub(l),p=r.redAdd(r).redMul(n);return this.curve.jpoint(c,d,p)},a.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var e=this.x.redSqr(),t=this.y.redSqr(),r=this.z.redSqr(),n=t.redSqr(),i=e.redAdd(e).redIAdd(e),a=i.redSqr(),o=this.x.redAdd(t).redSqr().redISub(e).redISub(n);o=o.redIAdd(o),o=o.redAdd(o).redIAdd(o),o=o.redISub(a);var s=o.redSqr(),f=n.redIAdd(n);f=f.redIAdd(f),f=f.redIAdd(f),f=f.redIAdd(f);var u=i.redIAdd(o).redSqr().redISub(a).redISub(s).redISub(f),c=t.redMul(u);c=c.redIAdd(c),c=c.redIAdd(c);var h=this.x.redMul(s).redISub(c);h=h.redIAdd(h),h=h.redIAdd(h);var l=this.y.redMul(u.redMul(f.redISub(u)).redISub(o.redMul(s)));l=l.redIAdd(l),l=l.redIAdd(l),l=l.redIAdd(l);var d=this.z.redAdd(o).redSqr().redISub(r).redISub(s);return this.curve.jpoint(h,l,d)},a.prototype.mul=function(e,t){return e=new f(e,t),this.curve._wnafMul(this,e)},a.prototype.eq=function(e){if("affine"===e.type)return this.eq(e.toJ());if(this===e)return!0;var t=this.z.redSqr(),r=e.z.redSqr();if(0!==this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))return!1;var n=t.redMul(this.z),i=r.redMul(e.z);return 0===this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)},a.prototype.eqXToP=function(e){var t=this.z.redSqr(),r=e.toRed(this.curve.red).redMul(t);if(0===this.x.cmp(r))return!0;for(var n=e.clone(),i=this.curve.redN.redMul(t);;){if(n.iadd(this.curve.n),n.cmp(this.curve.p)>=0)return!1;if(r.redIAdd(i),0===this.x.cmp(r))return!0}return!1},a.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},a.prototype.isInfinity=function(){return 0===this.z.cmpn(0)}},function(e,t,r){"use strict";function n(e){f.call(this,"mont",e),this.a=new o(e.a,16).toRed(this.red),this.b=new o(e.b,16).toRed(this.red),this.i4=new o(4).toRed(this.red).redInvm(),this.two=new o(2).toRed(this.red),this.a24=this.i4.redMul(this.a.redAdd(this.two))}function i(e,t,r){f.BasePoint.call(this,e,"projective"),null===t&&null===r?(this.x=this.curve.one,this.z=this.curve.zero):(this.x=new o(t,16),this.z=new o(r,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)))}var a=r(26),o=r(13),s=r(1),f=a.base,u=r(8),c=u.utils;s(n,f),e.exports=n,n.prototype.validate=function(e){var t=e.normalize().x,r=t.redSqr(),n=r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);return 0===n.redSqrt().redSqr().cmp(n)},s(i,f.BasePoint),n.prototype.decodePoint=function(e,t){return this.point(c.toArray(e,t),1)},n.prototype.point=function(e,t){return new i(this,e,t)},n.prototype.pointFromJSON=function(e){return i.fromJSON(this,e)},i.prototype.precompute=function(){},i.prototype._encode=function(){return this.getX().toArray("be",this.curve.p.byteLength())},i.fromJSON=function(e,t){return new i(e,t[0],t[1]||e.one)},i.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},i.prototype.isInfinity=function(){return 0===this.z.cmpn(0)},i.prototype.dbl=function(){var e=this.x.redAdd(this.z),t=e.redSqr(),r=this.x.redSub(this.z),n=r.redSqr(),i=t.redSub(n),a=t.redMul(n),o=i.redMul(n.redAdd(this.curve.a24.redMul(i)));return this.curve.point(a,o)},i.prototype.add=function(){throw new Error("Not supported on Montgomery curve")},i.prototype.diffAdd=function(e,t){var r=this.x.redAdd(this.z),n=this.x.redSub(this.z),i=e.x.redAdd(e.z),a=e.x.redSub(e.z),o=a.redMul(r),s=i.redMul(n),f=t.z.redMul(o.redAdd(s).redSqr()),u=t.x.redMul(o.redISub(s).redSqr());return this.curve.point(f,u)},i.prototype.mul=function(e){for(var t=e.clone(),r=this,n=this.curve.point(null,null),i=this,a=[];0!==t.cmpn(0);t.iushrn(1))a.push(t.andln(1));for(var o=a.length-1;o>=0;o--)0===a[o]?(r=r.diffAdd(n,i),n=n.dbl()):(n=r.diffAdd(n,i),r=r.dbl());return n},i.prototype.mulAdd=function(){throw new Error("Not supported on Montgomery curve")},i.prototype.jumlAdd=function(){throw new Error("Not supported on Montgomery curve")},i.prototype.eq=function(e){return 0===this.getX().cmp(e.getX())},i.prototype.normalize=function(){return this.x=this.x.redMul(this.z.redInvm()),this.z=this.curve.one,this},i.prototype.getX=function(){return this.normalize(),this.x.fromRed()}},function(e,t,r){"use strict";function n(e){this.twisted=1!=(0|e.a),this.mOneA=this.twisted&&-1==(0|e.a),this.extended=this.mOneA,u.call(this,"edwards",e),this.a=new s(e.a,16).umod(this.red.m),this.a=this.a.toRed(this.red),this.c=new s(e.c,16).toRed(this.red),this.c2=this.c.redSqr(),this.d=new s(e.d,16).toRed(this.red),this.dd=this.d.redAdd(this.d),c(!this.twisted||0===this.c.fromRed().cmpn(1)),this.oneC=1==(0|e.c)}function i(e,t,r,n,i){u.BasePoint.call(this,e,"projective"),null===t&&null===r&&null===n?(this.x=this.curve.zero,this.y=this.curve.one,this.z=this.curve.one,this.t=this.curve.zero,this.zOne=!0):(this.x=new s(t,16),this.y=new s(r,16),this.z=n?new s(n,16):this.curve.one,this.t=i&&new s(i,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.t&&!this.t.red&&(this.t=this.t.toRed(this.curve.red)),this.zOne=this.z===this.curve.one,this.curve.extended&&!this.t&&(this.t=this.x.redMul(this.y),this.zOne||(this.t=this.t.redMul(this.z.redInvm()))))}var a=r(26),o=r(8),s=r(13),f=r(1),u=a.base,c=o.utils.assert;f(n,u),e.exports=n,n.prototype._mulA=function(e){return this.mOneA?e.redNeg():this.a.redMul(e)},n.prototype._mulC=function(e){return this.oneC?e:this.c.redMul(e)},n.prototype.jpoint=function(e,t,r,n){return this.point(e,t,r,n)},n.prototype.pointFromX=function(e,t){e=new s(e,16),e.red||(e=e.toRed(this.red));var r=e.redSqr(),n=this.c2.redSub(this.a.redMul(r)),i=this.one.redSub(this.c2.redMul(this.d).redMul(r)),a=n.redMul(i.redInvm()),o=a.redSqrt();if(0!==o.redSqr().redSub(a).cmp(this.zero))throw new Error("invalid point");var f=o.fromRed().isOdd();return(t&&!f||!t&&f)&&(o=o.redNeg()),this.point(e,o)},n.prototype.pointFromY=function(e,t){e=new s(e,16),e.red||(e=e.toRed(this.red));var r=e.redSqr(),n=r.redSub(this.one),i=r.redMul(this.d).redAdd(this.one),a=n.redMul(i.redInvm());if(0===a.cmp(this.zero)){if(t)throw new Error("invalid point");return this.point(this.zero,e)}var o=a.redSqrt();if(0!==o.redSqr().redSub(a).cmp(this.zero))throw new Error("invalid point");return o.isOdd()!==t&&(o=o.redNeg()),this.point(o,e)},n.prototype.validate=function(e){if(e.isInfinity())return!0;e.normalize();var t=e.x.redSqr(),r=e.y.redSqr(),n=t.redMul(this.a).redAdd(r),i=this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));return 0===n.cmp(i)},f(i,u.BasePoint),n.prototype.pointFromJSON=function(e){return i.fromJSON(this,e)},n.prototype.point=function(e,t,r,n){return new i(this,e,t,r,n)},i.fromJSON=function(e,t){return new i(e,t[0],t[1],t[2])},i.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},i.prototype.isInfinity=function(){return 0===this.x.cmpn(0)&&0===this.y.cmp(this.z)},i.prototype._extDbl=function(){var e=this.x.redSqr(),t=this.y.redSqr(),r=this.z.redSqr();r=r.redIAdd(r);var n=this.curve._mulA(e),i=this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),a=n.redAdd(t),o=a.redSub(r),s=n.redSub(t),f=i.redMul(o),u=a.redMul(s),c=i.redMul(s),h=o.redMul(a);return this.curve.point(f,u,h,c)},i.prototype._projDbl=function(){var e,t,r,n=this.x.redAdd(this.y).redSqr(),i=this.x.redSqr(),a=this.y.redSqr();if(this.curve.twisted){var o=this.curve._mulA(i),s=o.redAdd(a);if(this.zOne)e=n.redSub(i).redSub(a).redMul(s.redSub(this.curve.two)),t=s.redMul(o.redSub(a)),r=s.redSqr().redSub(s).redSub(s);else{var f=this.z.redSqr(),u=s.redSub(f).redISub(f);e=n.redSub(i).redISub(a).redMul(u),t=s.redMul(o.redSub(a)),r=s.redMul(u)}}else{var o=i.redAdd(a),f=this.curve._mulC(this.c.redMul(this.z)).redSqr(),u=o.redSub(f).redSub(f);e=this.curve._mulC(n.redISub(o)).redMul(u),t=this.curve._mulC(o).redMul(i.redISub(a)),r=o.redMul(u)}return this.curve.point(e,t,r)},i.prototype.dbl=function(){return this.isInfinity()?this:this.curve.extended?this._extDbl():this._projDbl()},i.prototype._extAdd=function(e){var t=this.y.redSub(this.x).redMul(e.y.redSub(e.x)),r=this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),n=this.t.redMul(this.curve.dd).redMul(e.t),i=this.z.redMul(e.z.redAdd(e.z)),a=r.redSub(t),o=i.redSub(n),s=i.redAdd(n),f=r.redAdd(t),u=a.redMul(o),c=s.redMul(f),h=a.redMul(f),l=o.redMul(s);return this.curve.point(u,c,l,h)},i.prototype._projAdd=function(e){var t,r,n=this.z.redMul(e.z),i=n.redSqr(),a=this.x.redMul(e.x),o=this.y.redMul(e.y),s=this.curve.d.redMul(a).redMul(o),f=i.redSub(s),u=i.redAdd(s),c=this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(a).redISub(o),h=n.redMul(f).redMul(c);return this.curve.twisted?(t=n.redMul(u).redMul(o.redSub(this.curve._mulA(a))),r=f.redMul(u)):(t=n.redMul(u).redMul(o.redSub(a)),r=this.curve._mulC(f).redMul(u)),this.curve.point(h,t,r)},i.prototype.add=function(e){return this.isInfinity()?e:e.isInfinity()?this:this.curve.extended?this._extAdd(e):this._projAdd(e)},i.prototype.mul=function(e){return this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve._wnafMul(this,e)},i.prototype.mulAdd=function(e,t,r){return this.curve._wnafMulAdd(1,[this,t],[e,r],2,!1)},i.prototype.jmulAdd=function(e,t,r){return this.curve._wnafMulAdd(1,[this,t],[e,r],2,!0)},i.prototype.normalize=function(){if(this.zOne)return this;var e=this.z.redInvm();return this.x=this.x.redMul(e),this.y=this.y.redMul(e),this.t&&(this.t=this.t.redMul(e)),this.z=this.curve.one,this.zOne=!0,this},i.prototype.neg=function(){return this.curve.point(this.x.redNeg(),this.y,this.z,this.t&&this.t.redNeg())},i.prototype.getX=function(){return this.normalize(),this.x.fromRed()},i.prototype.getY=function(){return this.normalize(),this.y.fromRed()},i.prototype.eq=function(e){return this===e||0===this.getX().cmp(e.getX())&&0===this.getY().cmp(e.getY())},i.prototype.eqXToP=function(e){var t=e.toRed(this.curve.red).redMul(this.z);if(0===this.x.cmp(t))return!0;for(var r=e.clone(),n=this.curve.redN.redMul(this.z);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1;if(t.redIAdd(n),0===this.x.cmp(t))return!0}return!1},i.prototype.toP=i.prototype.normalize,i.prototype.mixedAdd=i.prototype.add},function(e,t,r){"use strict";function n(e){"short"===e.type?this.curve=new s.curve.short(e):"edwards"===e.type?this.curve=new s.curve.edwards(e):this.curve=new s.curve.mont(e),this.g=this.curve.g,this.n=this.curve.n,this.hash=e.hash,f(this.g.validate(),"Invalid curve"),f(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function i(e,t){Object.defineProperty(a,e,{configurable:!0,enumerable:!0,get:function(){var r=new n(t);return Object.defineProperty(a,e,{configurable:!0,enumerable:!0,value:r}),r}})}var a=t,o=r(37),s=r(8),f=s.utils.assert;a.PresetCurve=n,i("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:o.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),i("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:o.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),i("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:o.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),i("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:o.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),i("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:o.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),i("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:o.sha256,gRed:!1,g:["9"]}),i("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:o.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});var u;try{u=r(124)}catch(e){u=void 0}i("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:o.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",u]})},function(e,t,r){"use strict";t.sha1=r(119),t.sha224=r(120),t.sha256=r(60),t.sha384=r(121),t.sha512=r(61)},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;h.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}var i=r(12),a=r(23),o=r(59),s=i.rotl32,f=i.sum32,u=i.sum32_5,c=o.ft_1,h=a.BlockHash,l=[1518500249,1859775393,2400959708,3395469782];i.inherits(n,h),e.exports=n,n.blockSize=512,n.outSize=160,n.hmacStrength=80,n.padLength=64,n.prototype._update=function(e,t){for(var r=this.W,n=0;n<16;n++)r[n]=e[t+n];for(;n<r.length;n++)r[n]=s(r[n-3]^r[n-8]^r[n-14]^r[n-16],1);var i=this.h[0],a=this.h[1],o=this.h[2],h=this.h[3],d=this.h[4];for(n=0;n<r.length;n++){var p=~~(n/20),b=u(s(i,5),c(p,a,o,h),d,r[n],l[p]);d=h,h=o,o=s(a,30),a=i,i=b}this.h[0]=f(this.h[0],i),this.h[1]=f(this.h[1],a),this.h[2]=f(this.h[2],o),this.h[3]=f(this.h[3],h),this.h[4]=f(this.h[4],d)},n.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h,"big"):i.split32(this.h,"big")}},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;a.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}var i=r(12),a=r(60);i.inherits(n,a),e.exports=n,n.blockSize=512,n.outSize=224,n.hmacStrength=192,n.padLength=64,n.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h.slice(0,7),"big"):i.split32(this.h.slice(0,7),"big")}},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;a.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}var i=r(12),a=r(61);i.inherits(n,a),e.exports=n,n.blockSize=1024,n.outSize=384,n.hmacStrength=192,n.padLength=128,n.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h.slice(0,12),"big"):i.split32(this.h.slice(0,12),"big")}},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;d.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}function i(e,t,r,n){return e<=15?t^r^n:e<=31?t&r|~t&n:e<=47?(t|~r)^n:e<=63?t&n|r&~n:t^(r|~n)}function a(e){return e<=15?0:e<=31?1518500249:e<=47?1859775393:e<=63?2400959708:2840853838}function o(e){return e<=15?1352829926:e<=31?1548603684:e<=47?1836072691:e<=63?2053994217:0}var s=r(12),f=r(23),u=s.rotl32,c=s.sum32,h=s.sum32_3,l=s.sum32_4,d=f.BlockHash;s.inherits(n,d),t.ripemd160=n,n.blockSize=512,n.outSize=160,n.hmacStrength=192,n.padLength=64,n.prototype._update=function(e,t){for(var r=this.h[0],n=this.h[1],s=this.h[2],f=this.h[3],d=this.h[4],g=r,y=n,w=s,_=f,S=d,k=0;k<80;k++){var x=c(u(l(r,i(k,n,s,f),e[p[k]+t],a(k)),v[k]),d);r=d,d=f,f=u(s,10),s=n,n=x,x=c(u(l(g,i(79-k,y,w,_),e[b[k]+t],o(k)),m[k]),S),g=S,S=_,_=u(w,10),w=y,y=x}x=h(this.h[1],s,_),this.h[1]=h(this.h[2],f,S),this.h[2]=h(this.h[3],d,g),this.h[3]=h(this.h[4],r,y),this.h[4]=h(this.h[0],n,w),this.h[0]=x},n.prototype._digest=function(e){return"hex"===e?s.toHex32(this.h,"little"):s.split32(this.h,"little")};var p=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],b=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],v=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],m=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]},function(e,t,r){"use strict";function n(e,t,r){if(!(this instanceof n))return new n(e,t,r);this.Hash=e,this.blockSize=e.blockSize/8,this.outSize=e.outSize/8,this.inner=null,this.outer=null,this._init(i.toArray(t,r))}var i=r(12),a=r(15);e.exports=n,n.prototype._init=function(e){e.length>this.blockSize&&(e=(new this.Hash).update(e).digest()),a(e.length<=this.blockSize);for(var t=e.length;t<this.blockSize;t++)e.push(0);for(t=0;t<e.length;t++)e[t]^=54;for(this.inner=(new this.Hash).update(e),t=0;t<e.length;t++)e[t]^=106;this.outer=(new this.Hash).update(e)},n.prototype.update=function(e,t){return this.inner.update(e,t),this},n.prototype.digest=function(e){return this.outer.update(this.inner.digest()),this.outer.digest(e)}},function(e,t){e.exports={doubles:{step:4,points:[["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a","f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508","11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739","d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640","4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c","4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda","96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa","5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0","cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d","9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d","e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1","9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0","5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047","10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862","283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7","7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd","56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83","7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a","53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8","bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d","4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725","7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754","4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c","17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6","6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39","c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891","893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b","febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03","2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d","eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070","7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4","e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da","662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11","1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e","efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41","2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef","67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8","db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d","648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96","35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd","ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5","9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266","40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71","34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac","c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751","1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e","493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241","c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3","be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f","4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19","aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be","b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9","6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2","8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13","7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c","ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba","2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151","e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073","d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458","38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b","69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366","d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa","40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0","620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787","7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e","ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]},naf:{wnd:7,points:[["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9","388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4","d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc","6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe","cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb","d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8","ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e","581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34","4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c","85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5","321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f","2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714","73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729","a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db","2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4","e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5","b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479","2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d","80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f","1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb","d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9","eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963","758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74","958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530","e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b","5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247","cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1","cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120","4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435","91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18","673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8","59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb","3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f","55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143","efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba","e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45","f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a","744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e","c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8","e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c","30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519","e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab","100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca","ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf","8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610","68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4","f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c","d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940","edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980","a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3","66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf","9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63","4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448","fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf","5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5","8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6","8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5","5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99","f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51","f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5","42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5","204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997","4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881","73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5","39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66","d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726","ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede","6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94","60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31","3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51","b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252","ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5","cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b","6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4","322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f","6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889","2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246","b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984","998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a","b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030","bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197","6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593","c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef","21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38","60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a","49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111","5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502","7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea","be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26","8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986","39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e","62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4","25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda","ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859","cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f","f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c","6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942","fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a","1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80","5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d","438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1","cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63","c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352","6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193","ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00","9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58","ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7","d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8","c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e","67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d","cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b","299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f","f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6","462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297","62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a","7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c","ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52","4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb","bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065","bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917","603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9","cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3","553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57","712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66","ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8","9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721","9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180","4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]}}},function(e,t,r){"use strict";function n(e){if(!(this instanceof n))return new n(e);"string"==typeof e&&(f(o.curves.hasOwnProperty(e),"Unknown curve "+e),e=o.curves[e]),e instanceof o.curves.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash}var i=r(13),a=r(126),o=r(8),s=o.utils,f=s.assert,u=r(127),c=r(128);e.exports=n,n.prototype.keyPair=function(e){return new u(this,e)},n.prototype.keyFromPrivate=function(e,t){return u.fromPrivate(this,e,t)},n.prototype.keyFromPublic=function(e,t){return u.fromPublic(this,e,t)},n.prototype.genKeyPair=function(e){e||(e={});for(var t=new a({hash:this.hash,pers:e.pers,persEnc:e.persEnc||"utf8",entropy:e.entropy||o.rand(this.hash.hmacStrength),entropyEnc:e.entropy&&e.entropyEnc||"utf8",nonce:this.n.toArray()}),r=this.n.byteLength(),n=this.n.sub(new i(2));;){var s=new i(t.generate(r));if(!(s.cmp(n)>0))return s.iaddn(1),this.keyFromPrivate(s)}},n.prototype._truncateToN=function(e,t){var r=8*e.byteLength()-this.n.bitLength();return r>0&&(e=e.ushrn(r)),!t&&e.cmp(this.n)>=0?e.sub(this.n):e},n.prototype.sign=function(e,t,r,n){"object"==typeof r&&(n=r,r=null),n||(n={}),t=this.keyFromPrivate(t,r),e=this._truncateToN(new i(e,16));for(var o=this.n.byteLength(),s=t.getPrivate().toArray("be",o),f=e.toArray("be",o),u=new a({hash:this.hash,entropy:s,nonce:f,pers:n.pers,persEnc:n.persEnc||"utf8"}),h=this.n.sub(new i(1)),l=0;!0;l++){var d=n.k?n.k(l):new i(u.generate(this.n.byteLength()));if(d=this._truncateToN(d,!0),!(d.cmpn(1)<=0||d.cmp(h)>=0)){var p=this.g.mul(d);if(!p.isInfinity()){var b=p.getX(),v=b.umod(this.n);if(0!==v.cmpn(0)){var m=d.invm(this.n).mul(v.mul(t.getPrivate()).iadd(e));if(m=m.umod(this.n),0!==m.cmpn(0)){var g=(p.getY().isOdd()?1:0)|(0!==b.cmp(v)?2:0);return n.canonical&&m.cmp(this.nh)>0&&(m=this.n.sub(m),g^=1),new c({r:v,s:m,recoveryParam:g})}}}}}},n.prototype.verify=function(e,t,r,n){e=this._truncateToN(new i(e,16)),r=this.keyFromPublic(r,n),t=new c(t,"hex");var a=t.r,o=t.s;if(a.cmpn(1)<0||a.cmp(this.n)>=0)return!1;if(o.cmpn(1)<0||o.cmp(this.n)>=0)return!1;var s=o.invm(this.n),f=s.mul(e).umod(this.n),u=s.mul(a).umod(this.n);if(!this.curve._maxwellTrick){var h=this.g.mulAdd(f,r.getPublic(),u);return!h.isInfinity()&&0===h.getX().umod(this.n).cmp(a)}var h=this.g.jmulAdd(f,r.getPublic(),u);return!h.isInfinity()&&h.eqXToP(a)},n.prototype.recoverPubKey=function(e,t,r,n){f((3&r)===r,"The recovery param is more than two bits"),t=new c(t,n);var a=this.n,o=new i(e),s=t.r,u=t.s,h=1&r,l=r>>1;if(s.cmp(this.curve.p.umod(this.curve.n))>=0&&l)throw new Error("Unable to find sencond key candinate");s=l?this.curve.pointFromX(s.add(this.curve.n),h):this.curve.pointFromX(s,h);var d=t.r.invm(a),p=a.sub(o).mul(d).umod(a),b=u.mul(d).umod(a);return this.g.mulAdd(p,s,b)},n.prototype.getKeyRecoveryParam=function(e,t,r,n){if(t=new c(t,n),null!==t.recoveryParam)return t.recoveryParam;for(var i=0;i<4;i++){var a;try{a=this.recoverPubKey(e,t,i)}catch(e){continue}if(a.eq(r))return i}throw new Error("Unable to find valid recovery factor")}},function(e,t,r){"use strict";function n(e){if(!(this instanceof n))return new n(e);this.hash=e.hash,this.predResist=!!e.predResist,this.outLen=this.hash.outSize,this.minEntropy=e.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=a.toArray(e.entropy,e.entropyEnc||"hex"),r=a.toArray(e.nonce,e.nonceEnc||"hex"),i=a.toArray(e.pers,e.persEnc||"hex");o(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,r,i)}var i=r(37),a=r(58),o=r(15);e.exports=n,n.prototype._init=function(e,t,r){var n=e.concat(t).concat(r);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var i=0;i<this.V.length;i++)this.K[i]=0,this.V[i]=1;this._update(n),this._reseed=1,this.reseedInterval=281474976710656},n.prototype._hmac=function(){return new i.hmac(this.hash,this.K)},n.prototype._update=function(e){var t=this._hmac().update(this.V).update([0]);e&&(t=t.update(e)),this.K=t.digest(),this.V=this._hmac().update(this.V).digest(),e&&(this.K=this._hmac().update(this.V).update([1]).update(e).digest(),this.V=this._hmac().update(this.V).digest())},n.prototype.reseed=function(e,t,r,n){"string"!=typeof t&&(n=r,r=t,t=null),e=a.toArray(e,t),r=a.toArray(r,n),o(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(e.concat(r||[])),this._reseed=1},n.prototype.generate=function(e,t,r,n){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");"string"!=typeof t&&(n=r,r=t,t=null),r&&(r=a.toArray(r,n||"hex"),this._update(r));for(var i=[];i.length<e;)this.V=this._hmac().update(this.V).digest(),i=i.concat(this.V);var o=i.slice(0,e);return this._update(r),this._reseed++,a.encode(o,t)}},function(e,t,r){"use strict";function n(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc)}var i=r(13),a=r(8),o=a.utils,s=o.assert;e.exports=n,n.fromPublic=function(e,t,r){return t instanceof n?t:new n(e,{pub:t,pubEnc:r})},n.fromPrivate=function(e,t,r){return t instanceof n?t:new n(e,{priv:t,privEnc:r})},n.prototype.validate=function(){var e=this.getPublic();return e.isInfinity()?{result:!1,reason:"Invalid public key"}:e.validate()?e.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},n.prototype.getPublic=function(e,t){return"string"==typeof e&&(t=e,e=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),t?this.pub.encode(t,e):this.pub},n.prototype.getPrivate=function(e){return"hex"===e?this.priv.toString(16,2):this.priv},n.prototype._importPrivate=function(e,t){this.priv=new i(e,t||16),this.priv=this.priv.umod(this.ec.curve.n)},n.prototype._importPublic=function(e,t){if(e.x||e.y)return"mont"===this.ec.curve.type?s(e.x,"Need x coordinate"):"short"!==this.ec.curve.type&&"edwards"!==this.ec.curve.type||s(e.x&&e.y,"Need both x and y coordinate"),void(this.pub=this.ec.curve.point(e.x,e.y));this.pub=this.ec.curve.decodePoint(e,t)},n.prototype.derive=function(e){return e.mul(this.priv).getX()},n.prototype.sign=function(e,t,r){return this.ec.sign(e,this,t,r)},n.prototype.verify=function(e,t){return this.ec.verify(e,t,this)},n.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"}},function(e,t,r){"use strict";function n(e,t){if(e instanceof n)return e;this._importDER(e,t)||(h(e.r&&e.s,"Signature without r or s"),this.r=new f(e.r,16),this.s=new f(e.s,16),void 0===e.recoveryParam?this.recoveryParam=null:this.recoveryParam=e.recoveryParam)}function i(){this.place=0}function a(e,t){var r=e[t.place++];if(!(128&r))return r;for(var n=15&r,i=0,a=0,o=t.place;a<n;a++,o++)i<<=8,i|=e[o];return t.place=o,i}function o(e){for(var t=0,r=e.length-1;!e[t]&&!(128&e[t+1])&&t<r;)t++;return 0===t?e:e.slice(t)}function s(e,t){if(t<128)return void e.push(t);var r=1+(Math.log(t)/Math.LN2>>>3);for(e.push(128|r);--r;)e.push(t>>>(r<<3)&255);e.push(t)}var f=r(13),u=r(8),c=u.utils,h=c.assert;e.exports=n,n.prototype._importDER=function(e,t){e=c.toArray(e,t);var r=new i;if(48!==e[r.place++])return!1;if(a(e,r)+r.place!==e.length)return!1;if(2!==e[r.place++])return!1;var n=a(e,r),o=e.slice(r.place,n+r.place);if(r.place+=n,2!==e[r.place++])return!1;var s=a(e,r);if(e.length!==s+r.place)return!1;var u=e.slice(r.place,s+r.place);return 0===o[0]&&128&o[1]&&(o=o.slice(1)),0===u[0]&&128&u[1]&&(u=u.slice(1)),this.r=new f(o),this.s=new f(u),this.recoveryParam=null,!0},n.prototype.toDER=function(e){var t=this.r.toArray(),r=this.s.toArray();for(128&t[0]&&(t=[0].concat(t)),128&r[0]&&(r=[0].concat(r)),t=o(t),r=o(r);!(r[0]||128&r[1]);)r=r.slice(1);var n=[2];s(n,t.length),n=n.concat(t),n.push(2),s(n,r.length);var i=n.concat(r),a=[48];return s(a,i.length),a=a.concat(i),c.encode(a,e)}},function(e,t,r){"use strict";function n(e){if(s("ed25519"===e,"only tested with ed25519 so far"),!(this instanceof n))return new n(e);var e=a.curves[e].curve;this.curve=e,this.g=e.g,this.g.precompute(e.n.bitLength()+1),this.pointClass=e.point().constructor,this.encodingLength=Math.ceil(e.n.bitLength()/8),this.hash=i.sha512}var i=r(37),a=r(8),o=a.utils,s=o.assert,f=o.parseBytes,u=r(130),c=r(131);e.exports=n,n.prototype.sign=function(e,t){e=f(e);var r=this.keyFromSecret(t),n=this.hashInt(r.messagePrefix(),e),i=this.g.mul(n),a=this.encodePoint(i),o=this.hashInt(a,r.pubBytes(),e).mul(r.priv()),s=n.add(o).umod(this.curve.n);return this.makeSignature({R:i,S:s,Rencoded:a})},n.prototype.verify=function(e,t,r){e=f(e),t=this.makeSignature(t);var n=this.keyFromPublic(r),i=this.hashInt(t.Rencoded(),n.pubBytes(),e),a=this.g.mul(t.S());return t.R().add(n.pub().mul(i)).eq(a)},n.prototype.hashInt=function(){for(var e=this.hash(),t=0;t<arguments.length;t++)e.update(arguments[t]);return o.intFromLE(e.digest()).umod(this.curve.n)},n.prototype.keyFromPublic=function(e){return u.fromPublic(this,e)},n.prototype.keyFromSecret=function(e){return u.fromSecret(this,e)},n.prototype.makeSignature=function(e){return e instanceof c?e:new c(this,e)},n.prototype.encodePoint=function(e){var t=e.getY().toArray("le",this.encodingLength);return t[this.encodingLength-1]|=e.getX().isOdd()?128:0,t},n.prototype.decodePoint=function(e){e=o.parseBytes(e);var t=e.length-1,r=e.slice(0,t).concat(-129&e[t]),n=0!=(128&e[t]),i=o.intFromLE(r);return this.curve.pointFromY(i,n)},n.prototype.encodeInt=function(e){return e.toArray("le",this.encodingLength)},n.prototype.decodeInt=function(e){return o.intFromLE(e)},n.prototype.isPoint=function(e){return e instanceof this.pointClass}},function(e,t,r){"use strict";function n(e,t){this.eddsa=e,this._secret=s(t.secret),e.isPoint(t.pub)?this._pub=t.pub:this._pubBytes=s(t.pub)}var i=r(8),a=i.utils,o=a.assert,s=a.parseBytes,f=a.cachedProperty;n.fromPublic=function(e,t){return t instanceof n?t:new n(e,{pub:t})},n.fromSecret=function(e,t){return t instanceof n?t:new n(e,{secret:t})},n.prototype.secret=function(){return this._secret},f(n,"pubBytes",function(){return this.eddsa.encodePoint(this.pub())}),f(n,"pub",function(){return this._pubBytes?this.eddsa.decodePoint(this._pubBytes):this.eddsa.g.mul(this.priv())}),f(n,"privBytes",function(){var e=this.eddsa,t=this.hash(),r=e.encodingLength-1,n=t.slice(0,e.encodingLength);return n[0]&=248,n[r]&=127,n[r]|=64,n}),f(n,"priv",function(){return this.eddsa.decodeInt(this.privBytes())}),f(n,"hash",function(){return this.eddsa.hash().update(this.secret()).digest()}),f(n,"messagePrefix",function(){return this.hash().slice(this.eddsa.encodingLength)}),n.prototype.sign=function(e){return o(this._secret,"KeyPair can only verify"),this.eddsa.sign(e,this)},n.prototype.verify=function(e,t){return this.eddsa.verify(e,t,this)},n.prototype.getSecret=function(e){return o(this._secret,"KeyPair is public only"),a.encode(this.secret(),e)},n.prototype.getPublic=function(e){return a.encode(this.pubBytes(),e)},e.exports=n},function(e,t,r){"use strict";function n(e,t){this.eddsa=e,"object"!=typeof t&&(t=u(t)),Array.isArray(t)&&(t={R:t.slice(0,e.encodingLength),S:t.slice(e.encodingLength)}),s(t.R&&t.S,"Signature without R or S"),e.isPoint(t.R)&&(this._R=t.R),t.S instanceof i&&(this._S=t.S),this._Rencoded=Array.isArray(t.R)?t.R:t.Rencoded,this._Sencoded=Array.isArray(t.S)?t.S:t.Sencoded}var i=r(13),a=r(8),o=a.utils,s=o.assert,f=o.cachedProperty,u=o.parseBytes;f(n,"S",function(){return this.eddsa.decodeInt(this.Sencoded())}),f(n,"R",function(){return this.eddsa.decodePoint(this.Rencoded())}),f(n,"Rencoded",function(){return this.eddsa.encodePoint(this.R())}),f(n,"Sencoded",function(){return this.eddsa.encodeInt(this.S())}),n.prototype.toBytes=function(){return this.Rencoded().concat(this.Sencoded())},n.prototype.toHex=function(){return o.encode(this.toBytes(),"hex").toUpperCase()},e.exports=n},function(e,t,r){!function(n,i){e.exports=t=i(r(0))}(0,function(e){return function(){if("function"==typeof ArrayBuffer){var t=e,r=t.lib,n=r.WordArray,i=n.init;(n.init=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),(e instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var t=e.byteLength,r=[],n=0;n<t;n++)r[n>>>2]|=e[n]<<24-n%4*8;i.call(this,r,t)}else i.apply(this,arguments)}).prototype=n}}(),e.lib.WordArray})},function(e,t,r){!function(n,i){e.exports=t=i(r(0))}(0,function(e){return function(){function t(e){return e<<8&4278255360|e>>>8&16711935}var r=e,n=r.lib,i=n.WordArray,a=r.enc;a.Utf16=a.Utf16BE={stringify:function(e){for(var t=e.words,r=e.sigBytes,n=[],i=0;i<r;i+=2){var a=t[i>>>2]>>>16-i%4*8&65535;n.push(String.fromCharCode(a))}return n.join("")},parse:function(e){for(var t=e.length,r=[],n=0;n<t;n++)r[n>>>1]|=e.charCodeAt(n)<<16-n%2*16;return i.create(r,2*t)}};a.Utf16LE={stringify:function(e){for(var r=e.words,n=e.sigBytes,i=[],a=0;a<n;a+=2){var o=t(r[a>>>2]>>>16-a%4*8&65535);i.push(String.fromCharCode(o))}return i.join("")},parse:function(e){for(var r=e.length,n=[],a=0;a<r;a++)n[a>>>1]|=t(e.charCodeAt(a)<<16-a%2*16);return i.create(n,2*r)}}}(),e.enc.Utf16})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(63))}(0,function(e){return function(){var t=e,r=t.lib,n=r.WordArray,i=t.algo,a=i.SHA256,o=i.SHA224=a.extend({_doReset:function(){this._hash=new n.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var e=a._doFinalize.call(this);return e.sigBytes-=4,e}});t.SHA224=a._createHelper(o),t.HmacSHA224=a._createHmacHelper(o)}(),e.SHA224})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(27),r(64))}(0,function(e){return function(){var t=e,r=t.x64,n=r.Word,i=r.WordArray,a=t.algo,o=a.SHA512,s=a.SHA384=o.extend({_doReset:function(){this._hash=new i.init([new n.init(3418070365,3238371032),new n.init(1654270250,914150663),new n.init(2438529370,812702999),new n.init(355462360,4144912697),new n.init(1731405415,4290775857),new n.init(2394180231,1750603025),new n.init(3675008525,1694076839),new n.init(1203062813,3204075428)])},_doFinalize:function(){var e=o._doFinalize.call(this);return e.sigBytes-=16,e}});t.SHA384=o._createHelper(s),t.HmacSHA384=o._createHmacHelper(s)}(),e.SHA384})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(27))}(0,function(e){return function(t){var r=e,n=r.lib,i=n.WordArray,a=n.Hasher,o=r.x64,s=o.Word,f=r.algo,u=[],c=[],h=[];!function(){for(var e=1,t=0,r=0;r<24;r++){u[e+5*t]=(r+1)*(r+2)/2%64;var n=t%5,i=(2*e+3*t)%5;e=n,t=i}for(var e=0;e<5;e++)for(var t=0;t<5;t++)c[e+5*t]=t+(2*e+3*t)%5*5;for(var a=1,o=0;o<24;o++){for(var f=0,l=0,d=0;d<7;d++){if(1&a){var p=(1<<d)-1;p<32?l^=1<<p:f^=1<<p-32}128&a?a=a<<1^113:a<<=1}h[o]=s.create(f,l)}}();var l=[];!function(){for(var e=0;e<25;e++)l[e]=s.create()}();var d=f.SHA3=a.extend({cfg:a.cfg.extend({outputLength:512}),_doReset:function(){for(var e=this._state=[],t=0;t<25;t++)e[t]=new s.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(e,t){for(var r=this._state,n=this.blockSize/2,i=0;i<n;i++){var a=e[t+2*i],o=e[t+2*i+1];a=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8);var s=r[i];s.high^=o,s.low^=a}for(var f=0;f<24;f++){for(var d=0;d<5;d++){for(var p=0,b=0,v=0;v<5;v++){var s=r[d+5*v];p^=s.high,b^=s.low}var m=l[d];m.high=p,m.low=b}for(var d=0;d<5;d++)for(var g=l[(d+4)%5],y=l[(d+1)%5],w=y.high,_=y.low,p=g.high^(w<<1|_>>>31),b=g.low^(_<<1|w>>>31),v=0;v<5;v++){var s=r[d+5*v];s.high^=p,s.low^=b}for(var S=1;S<25;S++){var s=r[S],k=s.high,x=s.low,A=u[S];if(A<32)var p=k<<A|x>>>32-A,b=x<<A|k>>>32-A;else var p=x<<A-32|k>>>64-A,b=k<<A-32|x>>>64-A;var M=l[c[S]];M.high=p,M.low=b}var E=l[0],I=r[0];E.high=I.high,E.low=I.low;for(var d=0;d<5;d++)for(var v=0;v<5;v++){var S=d+5*v,s=r[S],T=l[S],P=l[(d+1)%5+5*v],R=l[(d+2)%5+5*v];s.high=T.high^~P.high&R.high,s.low=T.low^~P.low&R.low}var s=r[0],B=h[f];s.high^=B.high,s.low^=B.low}},_doFinalize:function(){var e=this._data,r=e.words,n=(this._nDataBytes,8*e.sigBytes),a=32*this.blockSize;r[n>>>5]|=1<<24-n%32,r[(t.ceil((n+1)/a)*a>>>5)-1]|=128,e.sigBytes=4*r.length,this._process();for(var o=this._state,s=this.cfg.outputLength/8,f=s/8,u=[],c=0;c<f;c++){var h=o[c],l=h.high,d=h.low;l=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8),d=16711935&(d<<8|d>>>24)|4278255360&(d<<24|d>>>8),u.push(d),u.push(l)}return new i.init(u,s)},clone:function(){for(var e=a.clone.call(this),t=e._state=this._state.slice(0),r=0;r<25;r++)t[r]=t[r].clone();return e}});r.SHA3=a._createHelper(d),r.HmacSHA3=a._createHmacHelper(d)}(Math),e.SHA3})},function(e,t,r){!function(n,i){e.exports=t=i(r(0))}(0,function(e){/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
return function(t){function r(e,t,r){return e^t^r}function n(e,t,r){return e&t|~e&r}function i(e,t,r){return(e|~t)^r}function a(e,t,r){return e&r|t&~r}function o(e,t,r){return e^(t|~r)}function s(e,t){return e<<t|e>>>32-t}var f=e,u=f.lib,c=u.WordArray,h=u.Hasher,l=f.algo,d=c.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),p=c.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),b=c.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),v=c.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),m=c.create([0,1518500249,1859775393,2400959708,2840853838]),g=c.create([1352829926,1548603684,1836072691,2053994217,0]),y=l.RIPEMD160=h.extend({_doReset:function(){this._hash=c.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var f=0;f<16;f++){var u=t+f,c=e[u];e[u]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}var h,l,y,w,_,S,k,x,A,M,E=this._hash.words,I=m.words,T=g.words,P=d.words,R=p.words,B=b.words,C=v.words;S=h=E[0],k=l=E[1],x=y=E[2],A=w=E[3],M=_=E[4];for(var O,f=0;f<80;f+=1)O=h+e[t+P[f]]|0,O+=f<16?r(l,y,w)+I[0]:f<32?n(l,y,w)+I[1]:f<48?i(l,y,w)+I[2]:f<64?a(l,y,w)+I[3]:o(l,y,w)+I[4],O|=0,O=s(O,B[f]),O=O+_|0,h=_,_=w,w=s(y,10),y=l,l=O,O=S+e[t+R[f]]|0,O+=f<16?o(k,x,A)+T[0]:f<32?a(k,x,A)+T[1]:f<48?i(k,x,A)+T[2]:f<64?n(k,x,A)+T[3]:r(k,x,A)+T[4],O|=0,O=s(O,C[f]),O=O+M|0,S=M,M=A,A=s(x,10),x=k,k=O;O=E[1]+y+A|0,E[1]=E[2]+w+M|0,E[2]=E[3]+_+S|0,E[3]=E[4]+h+k|0,E[4]=E[0]+l+x|0,E[0]=O},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,n=8*e.sigBytes;t[n>>>5]|=128<<24-n%32,t[14+(n+64>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),e.sigBytes=4*(t.length+1),this._process();for(var i=this._hash,a=i.words,o=0;o<5;o++){var s=a[o];a[o]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8)}return i},clone:function(){var e=h.clone.call(this);return e._hash=this._hash.clone(),e}});f.RIPEMD160=h._createHelper(y),f.HmacRIPEMD160=h._createHmacHelper(y)}(Math),e.RIPEMD160})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(38),r(39))}(0,function(e){return function(){var t=e,r=t.lib,n=r.Base,i=r.WordArray,a=t.algo,o=a.SHA1,s=a.HMAC,f=a.PBKDF2=n.extend({cfg:n.extend({keySize:4,hasher:o,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var r=this.cfg,n=s.create(r.hasher,e),a=i.create(),o=i.create([1]),f=a.words,u=o.words,c=r.keySize,h=r.iterations;f.length<c;){var l=n.update(t).finalize(o);n.reset();for(var d=l.words,p=d.length,b=l,v=1;v<h;v++){b=n.finalize(b),n.reset();for(var m=b.words,g=0;g<p;g++)d[g]^=m[g]}a.concat(l),u[0]++}return a.sigBytes=4*c,a}});t.PBKDF2=function(e,t,r){return f.create(r).compute(e,t)}}(),e.PBKDF2})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(3))}(0,function(e){return e.mode.CFB=function(){function t(e,t,r,n){var i=this._iv;if(i){var a=i.slice(0);this._iv=void 0}else var a=this._prevBlock;n.encryptBlock(a,0);for(var o=0;o<r;o++)e[t+o]^=a[o]}var r=e.lib.BlockCipherMode.extend();return r.Encryptor=r.extend({processBlock:function(e,r){var n=this._cipher,i=n.blockSize;t.call(this,e,r,i,n),this._prevBlock=e.slice(r,r+i)}}),r.Decryptor=r.extend({processBlock:function(e,r){var n=this._cipher,i=n.blockSize,a=e.slice(r,r+i);t.call(this,e,r,i,n),this._prevBlock=a}}),r}(),e.mode.CFB})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(3))}(0,function(e){return e.mode.CTR=function(){var t=e.lib.BlockCipherMode.extend(),r=t.Encryptor=t.extend({processBlock:function(e,t){var r=this._cipher,n=r.blockSize,i=this._iv,a=this._counter;i&&(a=this._counter=i.slice(0),this._iv=void 0);var o=a.slice(0);r.encryptBlock(o,0),a[n-1]=a[n-1]+1|0;for(var s=0;s<n;s++)e[t+s]^=o[s]}});return t.Decryptor=r,t}(),e.mode.CTR})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(3))}(0,function(e){/** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */
return e.mode.CTRGladman=function(){function t(e){if(255==(e>>24&255)){var t=e>>16&255,r=e>>8&255,n=255&e;255===t?(t=0,255===r?(r=0,255===n?n=0:++n):++r):++t,e=0,e+=t<<16,e+=r<<8,e+=n}else e+=1<<24;return e}function r(e){return 0===(e[0]=t(e[0]))&&(e[1]=t(e[1])),e}var n=e.lib.BlockCipherMode.extend(),i=n.Encryptor=n.extend({processBlock:function(e,t){var n=this._cipher,i=n.blockSize,a=this._iv,o=this._counter;a&&(o=this._counter=a.slice(0),this._iv=void 0),r(o);var s=o.slice(0);n.encryptBlock(s,0);for(var f=0;f<i;f++)e[t+f]^=s[f]}});return n.Decryptor=i,n}(),e.mode.CTRGladman})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(3))}(0,function(e){return e.mode.OFB=function(){var t=e.lib.BlockCipherMode.extend(),r=t.Encryptor=t.extend({processBlock:function(e,t){var r=this._cipher,n=r.blockSize,i=this._iv,a=this._keystream;i&&(a=this._keystream=i.slice(0),this._iv=void 0),r.encryptBlock(a,0);for(var o=0;o<n;o++)e[t+o]^=a[o]}});return t.Decryptor=r,t}(),e.mode.OFB})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(3))}(0,function(e){return e.mode.ECB=function(){var t=e.lib.BlockCipherMode.extend();return t.Encryptor=t.extend({processBlock:function(e,t){this._cipher.encryptBlock(e,t)}}),t.Decryptor=t.extend({processBlock:function(e,t){this._cipher.decryptBlock(e,t)}}),t}(),e.mode.ECB})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(3))}(0,function(e){return e.pad.AnsiX923={pad:function(e,t){var r=e.sigBytes,n=4*t,i=n-r%n,a=r+i-1;e.clamp(),e.words[a>>>2]|=i<<24-a%4*8,e.sigBytes+=i},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},e.pad.Ansix923})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(3))}(0,function(e){return e.pad.Iso10126={pad:function(t,r){var n=4*r,i=n-t.sigBytes%n;t.concat(e.lib.WordArray.random(i-1)).concat(e.lib.WordArray.create([i<<24],1))},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},e.pad.Iso10126})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(3))}(0,function(e){return e.pad.Iso97971={pad:function(t,r){t.concat(e.lib.WordArray.create([2147483648],1)),e.pad.ZeroPadding.pad(t,r)},unpad:function(t){e.pad.ZeroPadding.unpad(t),t.sigBytes--}},e.pad.Iso97971})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(3))}(0,function(e){return e.pad.ZeroPadding={pad:function(e,t){var r=4*t;e.clamp(),e.sigBytes+=r-(e.sigBytes%r||r)},unpad:function(e){for(var t=e.words,r=e.sigBytes-1;!(t[r>>>2]>>>24-r%4*8&255);)r--;e.sigBytes=r+1}},e.pad.ZeroPadding})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(3))}(0,function(e){return e.pad.NoPadding={pad:function(){},unpad:function(){}},e.pad.NoPadding})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(3))}(0,function(e){return function(t){var r=e,n=r.lib,i=n.CipherParams,a=r.enc,o=a.Hex,s=r.format;s.Hex={stringify:function(e){return e.ciphertext.toString(o)},parse:function(e){var t=o.parse(e);return i.create({ciphertext:t})}}}(),e.format.Hex})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(19),r(20),r(16),r(3))}(0,function(e){return function(){var t=e,r=t.lib,n=r.BlockCipher,i=t.algo,a=[],o=[],s=[],f=[],u=[],c=[],h=[],l=[],d=[],p=[];!function(){for(var e=[],t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;for(var r=0,n=0,t=0;t<256;t++){var i=n^n<<1^n<<2^n<<3^n<<4;i=i>>>8^255&i^99,a[r]=i,o[i]=r;var b=e[r],v=e[b],m=e[v],g=257*e[i]^16843008*i;s[r]=g<<24|g>>>8,f[r]=g<<16|g>>>16,u[r]=g<<8|g>>>24,c[r]=g;var g=16843009*m^65537*v^257*b^16843008*r;h[i]=g<<24|g>>>8,l[i]=g<<16|g>>>16,d[i]=g<<8|g>>>24,p[i]=g,r?(r=b^e[e[e[m^b]]],n^=e[e[n]]):r=n=1}}();var b=[0,1,2,4,8,16,32,64,128,27,54],v=i.AES=n.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,t=e.words,r=e.sigBytes/4,n=this._nRounds=r+6,i=4*(n+1),o=this._keySchedule=[],s=0;s<i;s++)if(s<r)o[s]=t[s];else{var f=o[s-1];s%r?r>6&&s%r==4&&(f=a[f>>>24]<<24|a[f>>>16&255]<<16|a[f>>>8&255]<<8|a[255&f]):(f=f<<8|f>>>24,f=a[f>>>24]<<24|a[f>>>16&255]<<16|a[f>>>8&255]<<8|a[255&f],f^=b[s/r|0]<<24),o[s]=o[s-r]^f}for(var u=this._invKeySchedule=[],c=0;c<i;c++){var s=i-c;if(c%4)var f=o[s];else var f=o[s-4];u[c]=c<4||s<=4?f:h[a[f>>>24]]^l[a[f>>>16&255]]^d[a[f>>>8&255]]^p[a[255&f]]}}},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,s,f,u,c,a)},decryptBlock:function(e,t){var r=e[t+1];e[t+1]=e[t+3],e[t+3]=r,this._doCryptBlock(e,t,this._invKeySchedule,h,l,d,p,o);var r=e[t+1];e[t+1]=e[t+3],e[t+3]=r},_doCryptBlock:function(e,t,r,n,i,a,o,s){for(var f=this._nRounds,u=e[t]^r[0],c=e[t+1]^r[1],h=e[t+2]^r[2],l=e[t+3]^r[3],d=4,p=1;p<f;p++){var b=n[u>>>24]^i[c>>>16&255]^a[h>>>8&255]^o[255&l]^r[d++],v=n[c>>>24]^i[h>>>16&255]^a[l>>>8&255]^o[255&u]^r[d++],m=n[h>>>24]^i[l>>>16&255]^a[u>>>8&255]^o[255&c]^r[d++],g=n[l>>>24]^i[u>>>16&255]^a[c>>>8&255]^o[255&h]^r[d++];u=b,c=v,h=m,l=g}var b=(s[u>>>24]<<24|s[c>>>16&255]<<16|s[h>>>8&255]<<8|s[255&l])^r[d++],v=(s[c>>>24]<<24|s[h>>>16&255]<<16|s[l>>>8&255]<<8|s[255&u])^r[d++],m=(s[h>>>24]<<24|s[l>>>16&255]<<16|s[u>>>8&255]<<8|s[255&c])^r[d++],g=(s[l>>>24]<<24|s[u>>>16&255]<<16|s[c>>>8&255]<<8|s[255&h])^r[d++];e[t]=b,e[t+1]=v,e[t+2]=m,e[t+3]=g},keySize:8});t.AES=n._createHelper(v)}(),e.AES})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(19),r(20),r(16),r(3))}(0,function(e){return function(){function t(e,t){var r=(this._lBlock>>>e^this._rBlock)&t;this._rBlock^=r,this._lBlock^=r<<e}function r(e,t){var r=(this._rBlock>>>e^this._lBlock)&t;this._lBlock^=r,this._rBlock^=r<<e}var n=e,i=n.lib,a=i.WordArray,o=i.BlockCipher,s=n.algo,f=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],u=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],c=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],h=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],l=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],d=s.DES=o.extend({_doReset:function(){for(var e=this._key,t=e.words,r=[],n=0;n<56;n++){var i=f[n]-1;r[n]=t[i>>>5]>>>31-i%32&1}for(var a=this._subKeys=[],o=0;o<16;o++){for(var s=a[o]=[],h=c[o],n=0;n<24;n++)s[n/6|0]|=r[(u[n]-1+h)%28]<<31-n%6,s[4+(n/6|0)]|=r[28+(u[n+24]-1+h)%28]<<31-n%6;s[0]=s[0]<<1|s[0]>>>31;for(var n=1;n<7;n++)s[n]=s[n]>>>4*(n-1)+3;s[7]=s[7]<<5|s[7]>>>27}for(var l=this._invSubKeys=[],n=0;n<16;n++)l[n]=a[15-n]},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._subKeys)},decryptBlock:function(e,t){this._doCryptBlock(e,t,this._invSubKeys)},_doCryptBlock:function(e,n,i){this._lBlock=e[n],this._rBlock=e[n+1],t.call(this,4,252645135),t.call(this,16,65535),r.call(this,2,858993459),r.call(this,8,16711935),t.call(this,1,1431655765);for(var a=0;a<16;a++){for(var o=i[a],s=this._lBlock,f=this._rBlock,u=0,c=0;c<8;c++)u|=h[c][((f^o[c])&l[c])>>>0];this._lBlock=f,this._rBlock=s^u}var d=this._lBlock;this._lBlock=this._rBlock,this._rBlock=d,t.call(this,1,1431655765),r.call(this,8,16711935),r.call(this,2,858993459),t.call(this,16,65535),t.call(this,4,252645135),e[n]=this._lBlock,e[n+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});n.DES=o._createHelper(d);var p=s.TripleDES=o.extend({_doReset:function(){var e=this._key,t=e.words;this._des1=d.createEncryptor(a.create(t.slice(0,2))),this._des2=d.createEncryptor(a.create(t.slice(2,4))),this._des3=d.createEncryptor(a.create(t.slice(4,6)))},encryptBlock:function(e,t){this._des1.encryptBlock(e,t),this._des2.decryptBlock(e,t),this._des3.encryptBlock(e,t)},decryptBlock:function(e,t){this._des3.decryptBlock(e,t),this._des2.encryptBlock(e,t),this._des1.decryptBlock(e,t)},keySize:6,ivSize:2,blockSize:2});n.TripleDES=o._createHelper(p)}(),e.TripleDES})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(19),r(20),r(16),r(3))}(0,function(e){return function(){function t(){for(var e=this._S,t=this._i,r=this._j,n=0,i=0;i<4;i++){t=(t+1)%256,r=(r+e[t])%256;var a=e[t];e[t]=e[r],e[r]=a,n|=e[(e[t]+e[r])%256]<<24-8*i}return this._i=t,this._j=r,n}var r=e,n=r.lib,i=n.StreamCipher,a=r.algo,o=a.RC4=i.extend({_doReset:function(){for(var e=this._key,t=e.words,r=e.sigBytes,n=this._S=[],i=0;i<256;i++)n[i]=i;for(var i=0,a=0;i<256;i++){var o=i%r,s=t[o>>>2]>>>24-o%4*8&255;a=(a+n[i]+s)%256;var f=n[i];n[i]=n[a],n[a]=f}this._i=this._j=0},_doProcessBlock:function(e,r){e[r]^=t.call(this)},keySize:8,ivSize:0});r.RC4=i._createHelper(o);var s=a.RC4Drop=o.extend({cfg:o.cfg.extend({drop:192}),_doReset:function(){o._doReset.call(this);for(var e=this.cfg.drop;e>0;e--)t.call(this)}});r.RC4Drop=i._createHelper(s)}(),e.RC4})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(19),r(20),r(16),r(3))}(0,function(e){return function(){function t(){for(var e=this._X,t=this._C,r=0;r<8;r++)s[r]=t[r];t[0]=t[0]+1295307597+this._b|0,t[1]=t[1]+3545052371+(t[0]>>>0<s[0]>>>0?1:0)|0,t[2]=t[2]+886263092+(t[1]>>>0<s[1]>>>0?1:0)|0,t[3]=t[3]+1295307597+(t[2]>>>0<s[2]>>>0?1:0)|0,t[4]=t[4]+3545052371+(t[3]>>>0<s[3]>>>0?1:0)|0,t[5]=t[5]+886263092+(t[4]>>>0<s[4]>>>0?1:0)|0,t[6]=t[6]+1295307597+(t[5]>>>0<s[5]>>>0?1:0)|0,t[7]=t[7]+3545052371+(t[6]>>>0<s[6]>>>0?1:0)|0,this._b=t[7]>>>0<s[7]>>>0?1:0;for(var r=0;r<8;r++){var n=e[r]+t[r],i=65535&n,a=n>>>16,o=((i*i>>>17)+i*a>>>15)+a*a,u=((4294901760&n)*n|0)+((65535&n)*n|0);f[r]=o^u}e[0]=f[0]+(f[7]<<16|f[7]>>>16)+(f[6]<<16|f[6]>>>16)|0,e[1]=f[1]+(f[0]<<8|f[0]>>>24)+f[7]|0,e[2]=f[2]+(f[1]<<16|f[1]>>>16)+(f[0]<<16|f[0]>>>16)|0,e[3]=f[3]+(f[2]<<8|f[2]>>>24)+f[1]|0,e[4]=f[4]+(f[3]<<16|f[3]>>>16)+(f[2]<<16|f[2]>>>16)|0,e[5]=f[5]+(f[4]<<8|f[4]>>>24)+f[3]|0,e[6]=f[6]+(f[5]<<16|f[5]>>>16)+(f[4]<<16|f[4]>>>16)|0,e[7]=f[7]+(f[6]<<8|f[6]>>>24)+f[5]|0}var r=e,n=r.lib,i=n.StreamCipher,a=r.algo,o=[],s=[],f=[],u=a.Rabbit=i.extend({_doReset:function(){for(var e=this._key.words,r=this.cfg.iv,n=0;n<4;n++)e[n]=16711935&(e[n]<<8|e[n]>>>24)|4278255360&(e[n]<<24|e[n]>>>8);var i=this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16],a=this._C=[e[2]<<16|e[2]>>>16,4294901760&e[0]|65535&e[1],e[3]<<16|e[3]>>>16,4294901760&e[1]|65535&e[2],e[0]<<16|e[0]>>>16,4294901760&e[2]|65535&e[3],e[1]<<16|e[1]>>>16,4294901760&e[3]|65535&e[0]];this._b=0;for(var n=0;n<4;n++)t.call(this);for(var n=0;n<8;n++)a[n]^=i[n+4&7];if(r){var o=r.words,s=o[0],f=o[1],u=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),c=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8),h=u>>>16|4294901760&c,l=c<<16|65535&u;a[0]^=u,a[1]^=h,a[2]^=c,a[3]^=l,a[4]^=u,a[5]^=h,a[6]^=c,a[7]^=l;for(var n=0;n<4;n++)t.call(this)}},_doProcessBlock:function(e,r){var n=this._X;t.call(this),o[0]=n[0]^n[5]>>>16^n[3]<<16,o[1]=n[2]^n[7]>>>16^n[5]<<16,o[2]=n[4]^n[1]>>>16^n[7]<<16,o[3]=n[6]^n[3]>>>16^n[1]<<16;for(var i=0;i<4;i++)o[i]=16711935&(o[i]<<8|o[i]>>>24)|4278255360&(o[i]<<24|o[i]>>>8),e[r+i]^=o[i]},blockSize:4,ivSize:2});r.Rabbit=i._createHelper(u)}(),e.Rabbit})},function(e,t,r){!function(n,i,a){e.exports=t=i(r(0),r(19),r(20),r(16),r(3))}(0,function(e){return function(){function t(){for(var e=this._X,t=this._C,r=0;r<8;r++)s[r]=t[r];t[0]=t[0]+1295307597+this._b|0,t[1]=t[1]+3545052371+(t[0]>>>0<s[0]>>>0?1:0)|0,t[2]=t[2]+886263092+(t[1]>>>0<s[1]>>>0?1:0)|0,t[3]=t[3]+1295307597+(t[2]>>>0<s[2]>>>0?1:0)|0,t[4]=t[4]+3545052371+(t[3]>>>0<s[3]>>>0?1:0)|0,t[5]=t[5]+886263092+(t[4]>>>0<s[4]>>>0?1:0)|0,t[6]=t[6]+1295307597+(t[5]>>>0<s[5]>>>0?1:0)|0,t[7]=t[7]+3545052371+(t[6]>>>0<s[6]>>>0?1:0)|0,this._b=t[7]>>>0<s[7]>>>0?1:0;for(var r=0;r<8;r++){var n=e[r]+t[r],i=65535&n,a=n>>>16,o=((i*i>>>17)+i*a>>>15)+a*a,u=((4294901760&n)*n|0)+((65535&n)*n|0);f[r]=o^u}e[0]=f[0]+(f[7]<<16|f[7]>>>16)+(f[6]<<16|f[6]>>>16)|0,e[1]=f[1]+(f[0]<<8|f[0]>>>24)+f[7]|0,e[2]=f[2]+(f[1]<<16|f[1]>>>16)+(f[0]<<16|f[0]>>>16)|0,e[3]=f[3]+(f[2]<<8|f[2]>>>24)+f[1]|0,e[4]=f[4]+(f[3]<<16|f[3]>>>16)+(f[2]<<16|f[2]>>>16)|0,e[5]=f[5]+(f[4]<<8|f[4]>>>24)+f[3]|0,e[6]=f[6]+(f[5]<<16|f[5]>>>16)+(f[4]<<16|f[4]>>>16)|0,e[7]=f[7]+(f[6]<<8|f[6]>>>24)+f[5]|0}var r=e,n=r.lib,i=n.StreamCipher,a=r.algo,o=[],s=[],f=[],u=a.RabbitLegacy=i.extend({_doReset:function(){var e=this._key.words,r=this.cfg.iv,n=this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16],i=this._C=[e[2]<<16|e[2]>>>16,4294901760&e[0]|65535&e[1],e[3]<<16|e[3]>>>16,4294901760&e[1]|65535&e[2],e[0]<<16|e[0]>>>16,4294901760&e[2]|65535&e[3],e[1]<<16|e[1]>>>16,4294901760&e[3]|65535&e[0]];this._b=0;for(var a=0;a<4;a++)t.call(this);for(var a=0;a<8;a++)i[a]^=n[a+4&7];if(r){var o=r.words,s=o[0],f=o[1],u=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),c=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8),h=u>>>16|4294901760&c,l=c<<16|65535&u;i[0]^=u,i[1]^=h,i[2]^=c,i[3]^=l,i[4]^=u,i[5]^=h,i[6]^=c,i[7]^=l;for(var a=0;a<4;a++)t.call(this)}},_doProcessBlock:function(e,r){var n=this._X;t.call(this),o[0]=n[0]^n[5]>>>16^n[3]<<16,o[1]=n[2]^n[7]>>>16^n[5]<<16,o[2]=n[4]^n[1]>>>16^n[7]<<16,o[3]=n[6]^n[3]>>>16^n[1]<<16;for(var i=0;i<4;i++)o[i]=16711935&(o[i]<<8|o[i]>>>24)|4278255360&(o[i]<<24|o[i]>>>8),e[r+i]^=o[i]},blockSize:4,ivSize:2});r.RabbitLegacy=i._createHelper(u)}(),e.RabbitLegacy})},function(e,t,r){var n;!function(i){"use strict";function a(e){function t(e,n){var i,a,o,s,f,u,c=this;if(!(c instanceof t))return new t(e,n);if(null!=n&&K(n,2,64,O,"base")){if(n|=0,u=e+"",10==n)return c=new t(e instanceof t?e:u),R(c,z+c.e+1,L);if((s="number"==typeof e)&&0*e!=0||!new RegExp("^-?"+(i="["+S.slice(0,n)+"]+")+"(?:\\."+i+")?$",n<37?"i":"").test(u))return C(c,u,s,n);s?(c.s=1/e<0?(u=u.slice(1),-1):1,q&&u.replace(/^0\.0*|\./,"").length>15&&P(O,_,e),s=!1):c.s=45===u.charCodeAt(0)?(u=u.slice(1),-1):1,u=r(u,10,n,c.s)}else{if(e instanceof t)return c.s=e.s,c.e=e.e,c.c=(e=e.c)?e.slice():e,void(O=0);if((s="number"==typeof e)&&0*e==0){if(c.s=1/e<0?(e=-e,-1):1,e===~~e){for(a=0,o=e;o>=10;o/=10,a++);return c.e=a,c.c=[e],void(O=0)}u=e+""}else{if(!v.test(u=e+""))return C(c,u,s);c.s=45===u.charCodeAt(0)?(u=u.slice(1),-1):1}}for((a=u.indexOf("."))>-1&&(u=u.replace(".","")),(o=u.search(/e/i))>0?(a<0&&(a=o),a+=+u.slice(o+1),u=u.substring(0,o)):a<0&&(a=u.length),o=0;48===u.charCodeAt(o);o++);for(f=u.length;48===u.charCodeAt(--f););if(u=u.slice(o,f+1))if(f=u.length,s&&q&&f>15&&(e>A||e!==g(e))&&P(O,_,c.s*e),(a=a-o-1)>D)c.c=c.e=null;else if(a<U)c.c=[c.e=0];else{if(c.e=a,c.c=[],o=(a+1)%x,a<0&&(o+=x),o<f){for(o&&c.c.push(+u.slice(0,o)),f-=x;o<f;)c.c.push(+u.slice(o,o+=x));u=u.slice(o),o=x-u.length}else o-=f;for(;o--;u+="0");c.c.push(+u)}else c.c=[c.e=0];O=0}function r(e,r,n,i){var a,o,f,u,c,l,p,b=e.indexOf("."),v=z,m=L;for(n<37&&(e=e.toLowerCase()),b>=0&&(f=W,W=0,e=e.replace(".",""),p=new t(n),c=p.pow(e.length-b),W=f,p.c=h(d(s(c.c),c.e),10,r),p.e=p.c.length),l=h(e,n,r),o=f=l.length;0==l[--f];l.pop());if(!l[0])return"0";if(b<0?--o:(c.c=l,c.e=o,c.s=i,c=B(c,p,v,m,r),l=c.c,u=c.r,o=c.e),a=o+v+1,b=l[a],f=r/2,u=u||a<0||null!=l[a+1],u=m<4?(null!=b||u)&&(0==m||m==(c.s<0?3:2)):b>f||b==f&&(4==m||u||6==m&&1&l[a-1]||m==(c.s<0?8:7)),a<1||!l[0])e=u?d("1",-v):"0";else{if(l.length=a,u)for(--r;++l[--a]>r;)l[a]=0,a||(++o,l=[1].concat(l));for(f=l.length;!l[--f];);for(b=0,e="";b<=f;e+=S.charAt(l[b++]));e=d(e,o)}return e}function n(e,r,n,i){var a,o,f,u,c;if(n=null!=n&&K(n,0,8,i,w)?0|n:L,!e.c)return e.toString();if(a=e.c[0],f=e.e,null==r)c=s(e.c),c=19==i||24==i&&f<=F?l(c,f):d(c,f);else if(e=R(new t(e),r,n),o=e.e,c=s(e.c),u=c.length,19==i||24==i&&(r<=o||o<=F)){for(;u<r;c+="0",u++);c=l(c,o)}else if(r-=f,c=d(c,o),o+1>u){if(--r>0)for(c+=".";r--;c+="0");}else if((r+=o-u)>0)for(o+1==u&&(c+=".");r--;c+="0");return e.s<0&&a?"-"+c:c}function i(e,r){var n,i,a=0;for(c(e[0])&&(e=e[0]),n=new t(e[0]);++a<e.length;){if(i=new t(e[a]),!i.s){n=i;break}r.call(n,i)&&(n=i)}return n}function b(e,t,r,n,i){return(e<t||e>r||e!=p(e))&&P(n,(i||"decimal places")+(e<t||e>r?" out of range":" not an integer"),e),!0}function T(e,t,r){for(var n=1,i=t.length;!t[--i];t.pop());for(i=t[0];i>=10;i/=10,n++);return(r=n+r*x-1)>D?e.c=e.e=null:r<U?e.c=[e.e=0]:(e.e=r,e.c=t),e}function P(e,t,r){var n=new Error(["new BigNumber","cmp","config","div","divToInt","eq","gt","gte","lt","lte","minus","mod","plus","precision","random","round","shift","times","toDigits","toExponential","toFixed","toFormat","toFraction","pow","toPrecision","toString","BigNumber"][e]+"() "+t+": "+r);throw n.name="BigNumber Error",O=0,n}function R(e,t,r,n){var i,a,o,s,f,u,c,h=e.c,l=M;if(h){e:{for(i=1,s=h[0];s>=10;s/=10,i++);if((a=t-i)<0)a+=x,o=t,f=h[u=0],c=f/l[i-o-1]%10|0;else if((u=m((a+1)/x))>=h.length){if(!n)break e;for(;h.length<=u;h.push(0));f=c=0,i=1,a%=x,o=a-x+1}else{for(f=s=h[u],i=1;s>=10;s/=10,i++);a%=x,o=a-x+i,c=o<0?0:f/l[i-o-1]%10|0}if(n=n||t<0||null!=h[u+1]||(o<0?f:f%l[i-o-1]),n=r<4?(c||n)&&(0==r||r==(e.s<0?3:2)):c>5||5==c&&(4==r||n||6==r&&(a>0?o>0?f/l[i-o]:0:h[u-1])%10&1||r==(e.s<0?8:7)),t<1||!h[0])return h.length=0,n?(t-=e.e+1,h[0]=l[(x-t%x)%x],e.e=-t||0):h[0]=e.e=0,e;if(0==a?(h.length=u,s=1,u--):(h.length=u+1,s=l[x-a],h[u]=o>0?g(f/l[i-o]%l[o])*s:0),n)for(;;){if(0==u){for(a=1,o=h[0];o>=10;o/=10,a++);for(o=h[0]+=s,s=1;o>=10;o/=10,s++);a!=s&&(e.e++,h[0]==k&&(h[0]=1));break}if(h[u]+=s,h[u]!=k)break;h[u--]=0,s=1}for(a=h.length;0===h[--a];h.pop());}e.e>D?e.c=e.e=null:e.e<U&&(e.c=[e.e=0])}return e}var B,C,O=0,N=t.prototype,j=new t(1),z=20,L=4,F=-7,H=21,U=-1e7,D=1e7,q=!0,K=b,Y=!1,V=1,W=0,X={decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0};return t.another=a,t.ROUND_UP=0,t.ROUND_DOWN=1,t.ROUND_CEIL=2,t.ROUND_FLOOR=3,t.ROUND_HALF_UP=4,t.ROUND_HALF_DOWN=5,t.ROUND_HALF_EVEN=6,t.ROUND_HALF_CEIL=7,t.ROUND_HALF_FLOOR=8,t.EUCLID=9,t.config=t.set=function(){var e,t,r=0,n={},i=arguments,a=i[0],o=a&&"object"==typeof a?function(){if(a.hasOwnProperty(t))return null!=(e=a[t])}:function(){if(i.length>r)return null!=(e=i[r++])};return o(t="DECIMAL_PLACES")&&K(e,0,I,2,t)&&(z=0|e),n[t]=z,o(t="ROUNDING_MODE")&&K(e,0,8,2,t)&&(L=0|e),n[t]=L,o(t="EXPONENTIAL_AT")&&(c(e)?K(e[0],-I,0,2,t)&&K(e[1],0,I,2,t)&&(F=0|e[0],H=0|e[1]):K(e,-I,I,2,t)&&(F=-(H=0|(e<0?-e:e)))),n[t]=[F,H],o(t="RANGE")&&(c(e)?K(e[0],-I,-1,2,t)&&K(e[1],1,I,2,t)&&(U=0|e[0],D=0|e[1]):K(e,-I,I,2,t)&&(0|e?U=-(D=0|(e<0?-e:e)):q&&P(2,t+" cannot be zero",e))),n[t]=[U,D],o(t="ERRORS")&&(e===!!e||1===e||0===e?(O=0,K=(q=!!e)?b:u):q&&P(2,t+y,e)),n[t]=q,o(t="CRYPTO")&&(!0===e||!1===e||1===e||0===e?e?(e="undefined"==typeof crypto,!e&&crypto&&(crypto.getRandomValues||crypto.randomBytes)?Y=!0:q?P(2,"crypto unavailable",e?void 0:crypto):Y=!1):Y=!1:q&&P(2,t+y,e)),n[t]=Y,o(t="MODULO_MODE")&&K(e,0,9,2,t)&&(V=0|e),n[t]=V,o(t="POW_PRECISION")&&K(e,0,I,2,t)&&(W=0|e),n[t]=W,o(t="FORMAT")&&("object"==typeof e?X=e:q&&P(2,t+" not an object",e)),n[t]=X,n},t.max=function(){return i(arguments,N.lt)},t.min=function(){return i(arguments,N.gt)},t.random=function(){var e=9007199254740992*Math.random()&2097151?function(){return g(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)};return function(r){var n,i,a,o,s,f=0,u=[],c=new t(j);if(r=null!=r&&K(r,0,I,14)?0|r:z,o=m(r/x),Y)if(crypto.getRandomValues){for(n=crypto.getRandomValues(new Uint32Array(o*=2));f<o;)s=131072*n[f]+(n[f+1]>>>11),s>=9e15?(i=crypto.getRandomValues(new Uint32Array(2)),n[f]=i[0],n[f+1]=i[1]):(u.push(s%1e14),f+=2);f=o/2}else if(crypto.randomBytes){for(n=crypto.randomBytes(o*=7);f<o;)s=281474976710656*(31&n[f])+1099511627776*n[f+1]+4294967296*n[f+2]+16777216*n[f+3]+(n[f+4]<<16)+(n[f+5]<<8)+n[f+6],s>=9e15?crypto.randomBytes(7).copy(n,f):(u.push(s%1e14),f+=7);f=o/7}else Y=!1,q&&P(14,"crypto unavailable",crypto);if(!Y)for(;f<o;)(s=e())<9e15&&(u[f++]=s%1e14);for(o=u[--f],r%=x,o&&r&&(s=M[x-r],u[f]=g(o/s)*s);0===u[f];u.pop(),f--);if(f<0)u=[a=0];else{for(a=-1;0===u[0];u.splice(0,1),a-=x);for(f=1,s=u[0];s>=10;s/=10,f++);f<x&&(a-=x-f)}return c.e=a,c.c=u,c}}(),B=function(){function e(e,t,r){var n,i,a,o,s=0,f=e.length,u=t%E,c=t/E|0;for(e=e.slice();f--;)a=e[f]%E,o=e[f]/E|0,n=c*a+o*u,i=u*a+n%E*E+s,s=(i/r|0)+(n/E|0)+c*o,e[f]=i%r;return s&&(e=[s].concat(e)),e}function r(e,t,r,n){var i,a;if(r!=n)a=r>n?1:-1;else for(i=a=0;i<r;i++)if(e[i]!=t[i]){a=e[i]>t[i]?1:-1;break}return a}function n(e,t,r,n){for(var i=0;r--;)e[r]-=i,i=e[r]<t[r]?1:0,e[r]=i*n+e[r]-t[r];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(i,a,s,f,u){var c,h,l,d,p,b,v,m,y,w,_,S,A,M,E,I,T,P=i.s==a.s?1:-1,B=i.c,C=a.c;if(!(B&&B[0]&&C&&C[0]))return new t(i.s&&a.s&&(B?!C||B[0]!=C[0]:C)?B&&0==B[0]||!C?0*P:P/0:NaN);for(m=new t(P),y=m.c=[],h=i.e-a.e,P=s+h+1,u||(u=k,h=o(i.e/x)-o(a.e/x),P=P/x|0),l=0;C[l]==(B[l]||0);l++);if(C[l]>(B[l]||0)&&h--,P<0)y.push(1),d=!0;else{for(M=B.length,I=C.length,l=0,P+=2,p=g(u/(C[0]+1)),p>1&&(C=e(C,p,u),B=e(B,p,u),I=C.length,M=B.length),A=I,w=B.slice(0,I),_=w.length;_<I;w[_++]=0);T=C.slice(),T=[0].concat(T),E=C[0],C[1]>=u/2&&E++;do{if(p=0,(c=r(C,w,I,_))<0){if(S=w[0],I!=_&&(S=S*u+(w[1]||0)),(p=g(S/E))>1)for(p>=u&&(p=u-1),b=e(C,p,u),v=b.length,_=w.length;1==r(b,w,v,_);)p--,n(b,I<v?T:C,v,u),v=b.length,c=1;else 0==p&&(c=p=1),b=C.slice(),v=b.length;if(v<_&&(b=[0].concat(b)),n(w,b,_,u),_=w.length,-1==c)for(;r(C,w,I,_)<1;)p++,n(w,I<_?T:C,_,u),_=w.length}else 0===c&&(p++,w=[0]);y[l++]=p,w[0]?w[_++]=B[A]||0:(w=[B[A]],_=1)}while((A++<M||null!=w[0])&&P--);d=null!=w[0],y[0]||y.splice(0,1)}if(u==k){for(l=1,P=y[0];P>=10;P/=10,l++);R(m,s+(m.e=l+h*x-1)+1,f,d)}else m.e=h,m.r=+d;return m}}(),C=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,n=/^\.([^.]+)$/,i=/^-?(Infinity|NaN)$/,a=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,s,f,u){var c,h=f?s:s.replace(a,"");if(i.test(h))o.s=isNaN(h)?null:h<0?-1:1;else{if(!f&&(h=h.replace(e,function(e,t,r){return c="x"==(r=r.toLowerCase())?16:"b"==r?2:8,u&&u!=c?e:t}),u&&(c=u,h=h.replace(r,"$1").replace(n,"0.$1")),s!=h))return new t(h,c);q&&P(O,"not a"+(u?" base "+u:"")+" number",s),o.s=null}o.c=o.e=null,O=0}}(),N.absoluteValue=N.abs=function(){var e=new t(this);return e.s<0&&(e.s=1),e},N.ceil=function(){return R(new t(this),this.e+1,2)},N.comparedTo=N.cmp=function(e,r){return O=1,f(this,new t(e,r))},N.decimalPlaces=N.dp=function(){var e,t,r=this.c;if(!r)return null;if(e=((t=r.length-1)-o(this.e/x))*x,t=r[t])for(;t%10==0;t/=10,e--);return e<0&&(e=0),e},N.dividedBy=N.div=function(e,r){return O=3,B(this,new t(e,r),z,L)},N.dividedToIntegerBy=N.divToInt=function(e,r){return O=4,B(this,new t(e,r),0,1)},N.equals=N.eq=function(e,r){return O=5,0===f(this,new t(e,r))},N.floor=function(){return R(new t(this),this.e+1,3)},N.greaterThan=N.gt=function(e,r){return O=6,f(this,new t(e,r))>0},N.greaterThanOrEqualTo=N.gte=function(e,r){return O=7,1===(r=f(this,new t(e,r)))||0===r},N.isFinite=function(){return!!this.c},N.isInteger=N.isInt=function(){return!!this.c&&o(this.e/x)>this.c.length-2},N.isNaN=function(){return!this.s},N.isNegative=N.isNeg=function(){return this.s<0},N.isZero=function(){return!!this.c&&0==this.c[0]},N.lessThan=N.lt=function(e,r){return O=8,f(this,new t(e,r))<0},N.lessThanOrEqualTo=N.lte=function(e,r){return O=9,-1===(r=f(this,new t(e,r)))||0===r},N.minus=N.sub=function(e,r){var n,i,a,s,f=this,u=f.s;if(O=10,e=new t(e,r),r=e.s,!u||!r)return new t(NaN);if(u!=r)return e.s=-r,f.plus(e);var c=f.e/x,h=e.e/x,l=f.c,d=e.c;if(!c||!h){if(!l||!d)return l?(e.s=-r,e):new t(d?f:NaN);if(!l[0]||!d[0])return d[0]?(e.s=-r,e):new t(l[0]?f:3==L?-0:0)}if(c=o(c),h=o(h),l=l.slice(),u=c-h){for((s=u<0)?(u=-u,a=l):(h=c,a=d),a.reverse(),r=u;r--;a.push(0));a.reverse()}else for(i=(s=(u=l.length)<(r=d.length))?u:r,u=r=0;r<i;r++)if(l[r]!=d[r]){s=l[r]<d[r];break}if(s&&(a=l,l=d,d=a,e.s=-e.s),(r=(i=d.length)-(n=l.length))>0)for(;r--;l[n++]=0);for(r=k-1;i>u;){if(l[--i]<d[i]){for(n=i;n&&!l[--n];l[n]=r);--l[n],l[i]+=k}l[i]-=d[i]}for(;0==l[0];l.splice(0,1),--h);return l[0]?T(e,l,h):(e.s=3==L?-1:1,e.c=[e.e=0],e)},N.modulo=N.mod=function(e,r){var n,i,a=this;return O=11,e=new t(e,r),!a.c||!e.s||e.c&&!e.c[0]?new t(NaN):!e.c||a.c&&!a.c[0]?new t(a):(9==V?(i=e.s,e.s=1,n=B(a,e,0,3),e.s=i,n.s*=i):n=B(a,e,0,V),a.minus(n.times(e)))},N.negated=N.neg=function(){var e=new t(this);return e.s=-e.s||null,e},N.plus=N.add=function(e,r){var n,i=this,a=i.s;if(O=12,e=new t(e,r),r=e.s,!a||!r)return new t(NaN);if(a!=r)return e.s=-r,i.minus(e);var s=i.e/x,f=e.e/x,u=i.c,c=e.c;if(!s||!f){if(!u||!c)return new t(a/0);if(!u[0]||!c[0])return c[0]?e:new t(u[0]?i:0*a)}if(s=o(s),f=o(f),u=u.slice(),a=s-f){for(a>0?(f=s,n=c):(a=-a,n=u),n.reverse();a--;n.push(0));n.reverse()}for(a=u.length,r=c.length,a-r<0&&(n=c,c=u,u=n,r=a),a=0;r;)a=(u[--r]=u[r]+c[r]+a)/k|0,u[r]=k===u[r]?0:u[r]%k;return a&&(u=[a].concat(u),++f),T(e,u,f)},N.precision=N.sd=function(e){var t,r,n=this,i=n.c;if(null!=e&&e!==!!e&&1!==e&&0!==e&&(q&&P(13,"argument"+y,e),e!=!!e&&(e=null)),!i)return null;if(r=i.length-1,t=r*x+1,r=i[r]){for(;r%10==0;r/=10,t--);for(r=i[0];r>=10;r/=10,t++);}return e&&n.e+1>t&&(t=n.e+1),t},N.round=function(e,r){var n=new t(this);return(null==e||K(e,0,I,15))&&R(n,~~e+this.e+1,null!=r&&K(r,0,8,15,w)?0|r:L),n},N.shift=function(e){var r=this;return K(e,-A,A,16,"argument")?r.times("1e"+p(e)):new t(r.c&&r.c[0]&&(e<-A||e>A)?r.s*(e<0?0:1/0):r)},N.squareRoot=N.sqrt=function(){var e,r,n,i,a,f=this,u=f.c,c=f.s,h=f.e,l=z+4,d=new t("0.5");if(1!==c||!u||!u[0])return new t(!c||c<0&&(!u||u[0])?NaN:u?f:1/0);if(c=Math.sqrt(+f),0==c||c==1/0?(r=s(u),(r.length+h)%2==0&&(r+="0"),c=Math.sqrt(r),h=o((h+1)/2)-(h<0||h%2),c==1/0?r="1e"+h:(r=c.toExponential(),r=r.slice(0,r.indexOf("e")+1)+h),n=new t(r)):n=new t(c+""),n.c[0])for(h=n.e,c=h+l,c<3&&(c=0);;)if(a=n,n=d.times(a.plus(B(f,a,l,1))),s(a.c).slice(0,c)===(r=s(n.c)).slice(0,c)){if(n.e<h&&--c,"9999"!=(r=r.slice(c-3,c+1))&&(i||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(R(n,n.e+z+2,1),e=!n.times(n).eq(f));break}if(!i&&(R(a,a.e+z+2,0),a.times(a).eq(f))){n=a;break}l+=4,c+=4,i=1}return R(n,n.e+z+1,L,e)},N.times=N.mul=function(e,r){var n,i,a,s,f,u,c,h,l,d,p,b,v,m,g,y=this,w=y.c,_=(O=17,e=new t(e,r)).c;if(!(w&&_&&w[0]&&_[0]))return!y.s||!e.s||w&&!w[0]&&!_||_&&!_[0]&&!w?e.c=e.e=e.s=null:(e.s*=y.s,w&&_?(e.c=[0],e.e=0):e.c=e.e=null),e;for(i=o(y.e/x)+o(e.e/x),e.s*=y.s,c=w.length,d=_.length,c<d&&(v=w,w=_,_=v,a=c,c=d,d=a),a=c+d,v=[];a--;v.push(0));for(m=k,g=E,a=d;--a>=0;){for(n=0,p=_[a]%g,b=_[a]/g|0,f=c,s=a+f;s>a;)h=w[--f]%g,l=w[f]/g|0,u=b*h+l*p,h=p*h+u%g*g+v[s]+n,n=(h/m|0)+(u/g|0)+b*l,v[s--]=h%m;v[s]=n}return n?++i:v.splice(0,1),T(e,v,i)},N.toDigits=function(e,r){var n=new t(this);return e=null!=e&&K(e,1,I,18,"precision")?0|e:null,r=null!=r&&K(r,0,8,18,w)?0|r:L,e?R(n,e,r):n},N.toExponential=function(e,t){return n(this,null!=e&&K(e,0,I,19)?1+~~e:null,t,19)},N.toFixed=function(e,t){return n(this,null!=e&&K(e,0,I,20)?~~e+this.e+1:null,t,20)},N.toFormat=function(e,t){var r=n(this,null!=e&&K(e,0,I,21)?~~e+this.e+1:null,t,21);if(this.c){var i,a=r.split("."),o=+X.groupSize,s=+X.secondaryGroupSize,f=X.groupSeparator,u=a[0],c=a[1],h=this.s<0,l=h?u.slice(1):u,d=l.length;if(s&&(i=o,o=s,s=i,d-=i),o>0&&d>0){for(i=d%o||o,u=l.substr(0,i);i<d;i+=o)u+=f+l.substr(i,o);s>0&&(u+=f+l.slice(i)),h&&(u="-"+u)}r=c?u+X.decimalSeparator+((s=+X.fractionGroupSize)?c.replace(new RegExp("\\d{"+s+"}\\B","g"),"$&"+X.fractionGroupSeparator):c):u}return r},N.toFraction=function(e){var r,n,i,a,o,f,u,c,h,l=q,d=this,p=d.c,b=new t(j),v=n=new t(j),m=u=new t(j);if(null!=e&&(q=!1,f=new t(e),q=l,(l=f.isInt())&&!f.lt(j)||(q&&P(22,"max denominator "+(l?"out of range":"not an integer"),e),e=!l&&f.c&&R(f,f.e+1,1).gte(j)?f:null)),!p)return d.toString();for(h=s(p),a=b.e=h.length-d.e-1,b.c[0]=M[(o=a%x)<0?x+o:o],e=!e||f.cmp(b)>0?a>0?b:v:f,o=D,D=1/0,f=new t(h),u.c[0]=0;c=B(f,b,0,1),i=n.plus(c.times(m)),1!=i.cmp(e);)n=m,m=i,v=u.plus(c.times(i=v)),u=i,b=f.minus(c.times(i=b)),f=i;return i=B(e.minus(n),m,0,1),u=u.plus(i.times(v)),n=n.plus(i.times(m)),u.s=v.s=d.s,a*=2,r=B(v,m,a,L).minus(d).abs().cmp(B(u,n,a,L).minus(d).abs())<1?[v.toString(),m.toString()]:[u.toString(),n.toString()],D=o,r},N.toNumber=function(){return+this},N.toPower=N.pow=function(e,r){var n,i,a,o=g(e<0?-e:+e),s=this;if(null!=r&&(O=23,r=new t(r)),!K(e,-A,A,23,"exponent")&&(!isFinite(e)||o>A&&(e/=0)||parseFloat(e)!=e&&!(e=NaN))||0==e)return n=Math.pow(+s,e),new t(r?n%r:n);for(r?e>1&&s.gt(j)&&s.isInt()&&r.gt(j)&&r.isInt()?s=s.mod(r):(a=r,r=null):W&&(n=m(W/x+2)),i=new t(j);;){if(o%2){if(i=i.times(s),!i.c)break;n?i.c.length>n&&(i.c.length=n):r&&(i=i.mod(r))}if(!(o=g(o/2)))break;s=s.times(s),n?s.c&&s.c.length>n&&(s.c.length=n):r&&(s=s.mod(r))}return r?i:(e<0&&(i=j.div(i)),a?i.mod(a):n?R(i,W,L):i)},N.toPrecision=function(e,t){return n(this,null!=e&&K(e,1,I,24,"precision")?0|e:null,t,24)},N.toString=function(e){var t,n=this,i=n.s,a=n.e;return null===a?i?(t="Infinity",i<0&&(t="-"+t)):t="NaN":(t=s(n.c),t=null!=e&&K(e,2,64,25,"base")?r(d(t,a),0|e,10,i):a<=F||a>=H?l(t,a):d(t,a),i<0&&n.c[0]&&(t="-"+t)),t},N.truncated=N.trunc=function(){return R(new t(this),this.e+1,1)},N.valueOf=N.toJSON=function(){var e,t=this,r=t.e;return null===r?t.toString():(e=s(t.c),e=r<=F||r>=H?l(e,r):d(e,r),t.s<0?"-"+e:e)},N.isBigNumber=!0,null!=e&&t.config(e),t}function o(e){var t=0|e;return e>0||e===t?t:t-1}function s(e){for(var t,r,n=1,i=e.length,a=e[0]+"";n<i;){for(t=e[n++]+"",r=x-t.length;r--;t="0"+t);a+=t}for(i=a.length;48===a.charCodeAt(--i););return a.slice(0,i+1||1)}function f(e,t){var r,n,i=e.c,a=t.c,o=e.s,s=t.s,f=e.e,u=t.e;if(!o||!s)return null;if(r=i&&!i[0],n=a&&!a[0],r||n)return r?n?0:-s:o;if(o!=s)return o;if(r=o<0,n=f==u,!i||!a)return n?0:!i^r?1:-1;if(!n)return f>u^r?1:-1;for(s=(f=i.length)<(u=a.length)?f:u,o=0;o<s;o++)if(i[o]!=a[o])return i[o]>a[o]^r?1:-1;return f==u?0:f>u^r?1:-1}function u(e,t,r){return(e=p(e))>=t&&e<=r}function c(e){return"[object Array]"==Object.prototype.toString.call(e)}function h(e,t,r){for(var n,i,a=[0],o=0,s=e.length;o<s;){for(i=a.length;i--;a[i]*=t);for(a[n=0]+=S.indexOf(e.charAt(o++));n<a.length;n++)a[n]>r-1&&(null==a[n+1]&&(a[n+1]=0),a[n+1]+=a[n]/r|0,a[n]%=r)}return a.reverse()}function l(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function d(e,t){var r,n;if(t<0){for(n="0.";++t;n+="0");e=n+e}else if(r=e.length,++t>r){for(n="0",t-=r;--t;n+="0");e+=n}else t<r&&(e=e.slice(0,t)+"."+e.slice(t));return e}function p(e){return e=parseFloat(e),e<0?m(e):g(e)}var b,v=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,m=Math.ceil,g=Math.floor,y=" not a boolean or binary digit",w="rounding mode",_="number type has more than 15 significant digits",S="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",k=1e14,x=14,A=9007199254740991,M=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],E=1e7,I=1e9;b=a(),b.default=b.BigNumber=b,void 0!==(n=function(){return b}.call(t,r,t,e))&&(e.exports=n)}()},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},function(e,t,r){(function(n,i){var a,o;!function(s){"use strict";function f(e,t){if(t=t||{type:"Array"},void 0!==n&&"number"==typeof n.pid)return u(e,t);if(!window.crypto&&!window.msCrypto)throw new Error("Your browser does not support window.crypto.");return c(e,t)}function u(e,t){var n=r(159),i=n.randomBytes(e);switch(t.type){case"Array":return[].slice.call(i);case"Buffer":return i;case"Uint8Array":for(var a=new Uint8Array(e),o=0;o<e;++o)a[o]=i.readUInt8(o);return a;default:throw new Error(t.type+" is unsupported.")}}function c(e,t){var r=new Uint8Array(e);switch((window.crypto||window.msCrypto).getRandomValues(r),t.type){case"Array":return[].slice.call(r);case"Buffer":try{new i(1)}catch(e){throw new Error("Buffer not supported in this environment. Use Node.js or Browserify for browser support.")}return new i(r);case"Uint8Array":return r;default:throw new Error(t.type+" is unsupported.")}}a=[],void 0!==(o=function(){return f}.apply(t,a))&&(e.exports=o),f.randomArray=function(e){return f(e,{type:"Array"})},f.randomUint8Array=function(e){return f(e,{type:"Uint8Array"})},f.randomBuffer=function(e){return f(e,{type:"Buffer"})}}()}).call(t,r(10),r(7).Buffer)},function(e,t){},function(e,t,r){e.exports={hash:r(161),hashSync:r(164)}},function(e,t,r){(function(t,n,i){var a=r(67),o=r(41).fork,s=r(162),f=r(163).cpus().length,u=u=new s.Pool({name:"scrypt-worker",create:function(e){var r=o(t+"/scrypt-async-worker.js");r.controlledExit=!1,r.on("exit",function(){r.controlledExit||n(u.destroy.bind(u,r))}),e(r)},destroy:function(e){try{e.controlledExit=!0,e.disconnect()}catch(e){}},max:Math.max(2,f-1),min:0,idleTimeoutMillis:15e3,log:!1});e.exports=function(e,t,r,n){var o=a.apply(null,arguments),s=o.callback||function(){};delete o.callback,o.password=o.password.toString("base64"),o.salt=o.salt.toString("base64");new Date;u.acquire(function(e,t){if(e)return u.release(t),s(e);t.once("message",function(e){new Date;u.release(t),e.error&&s(e.error),s(null,new i(e.data,"base64"))}),t.send(o)})}}).call(t,"/",r(34).setImmediate,r(7).Buffer)},function(e,t,r){(function(e){var r=function(e){var t,r,n={},i=null;for(e=Math.max(0|+e,1),t=[],r=0;r<e;r+=1)t.push([]);return n.size=function(){var r;if(null===i)for(i=0,r=0;r<e;r+=1)i+=t[r].length;return i},n.enqueue=function(r,n){var a;n=n&&0|+n||0,i=null,n&&(a=n,(n<0||n>=e)&&(n=e-1,console.error("invalid priority: "+a+" must be between 0 and "+n))),t[n].push(r)},n.dequeue=function(e){var r,n=null,a=t.length;for(i=null,r=0;r<a;r+=1)if(t[r].length){n=t[r].shift();break}return n},n};t.Pool=function(t){function n(){var e,r,n,a,o=[],s=(new Date).getTime();for(b=!1,e=0,r=l.length;e<r&&(h||p-t.min>o.length);e+=1)a=l[e].timeout,s>=a&&(g("removeIdle() destroying obj - now:"+s+" timeout:"+a,"verbose"),o.push(l[e].obj));for(e=0,n=o.length;e<n;e+=1)f.destroy(o[e]);r=l.length,r>0?(g("availableObjects.length="+r,"verbose"),i()):g("removeIdle() all objects removed","verbose")}function i(){b||(b=!0,v=setTimeout(n,c))}function a(){var e=null,r=d.size();if(g("dispense() clients="+r+" available="+l.length,"info"),r>0){for(;l.length>0;){if(g("dispense() - reusing obj","verbose"),e=l[0],t.validate(e.obj))return l.shift(),d.dequeue()(null,e.obj);f.destroy(e.obj)}p<t.max&&o()}}function o(){p+=1,g("createResource() - creating obj - count="+p+" min="+t.min+" max="+t.max,"verbose"),t.create(function(){var t,r,n=d.dequeue();arguments.length>1?(t=arguments[0],r=arguments[1]):(t=arguments[0]instanceof Error?arguments[0]:null,r=arguments[0]instanceof Error?null:arguments[0]),t?(p-=1,n&&n(t,r),e.nextTick(function(){a()})):n?n(t,r):f.release(r)})}function s(){var e,r;if(!m&&p<t.min)for(r=t.min-p,e=0;e<r;e++)o()}var f={},u=t.idleTimeoutMillis||3e4,c=t.reapIntervalMillis||1e3,h=!("refreshIdle"in t)||t.refreshIdle,l=[],d=new r(t.priorityRange||1),p=0,b=!1,v=null,m=!1,g=t.log?function(e,r){"function"==typeof t.log?t.log(e,r):console.log(r.toUpperCase()+" pool "+t.name+" - "+e)}:function(){};return t.validate=t.validate||function(){return!0},t.max=parseInt(t.max,10),t.min=parseInt(t.min,10),t.max=Math.max(isNaN(t.max)?1:t.max,1),t.min=Math.min(isNaN(t.min)?0:t.min,t.max-1),f.destroy=function(e){p-=1,l=l.filter(function(t){return t.obj!==e}),t.destroy(e),s()},f.acquire=function(e,r){if(m)throw new Error("pool is draining and cannot accept work");return d.enqueue(e,r),a(),p<t.max},f.borrow=function(e,t){g("borrow() is deprecated. use acquire() instead","warn"),f.acquire(e,t)},f.release=function(e){if(l.some(function(t){return t.obj===e}))return void g("release called twice for the same resource: "+(new Error).stack,"error");var t={obj:e,timeout:(new Date).getTime()+u};l.push(t),g("timeout: "+t.timeout,"verbose"),a(),i()},f.returnToPool=function(e){g("returnToPool() is deprecated. use release() instead","warn"),f.release(e)},f.drain=function(e){g("draining","info"),m=!0;var t=function(){d.size()>0?setTimeout(t,100):l.length!=p?setTimeout(t,100):e&&e()};t()},f.destroyAllNow=function(e){g("force destroying all objects","info");var t=l;l=[];for(var r=t.shift();null!==r&&void 0!==r;)f.destroy(r.obj),r=t.shift();b=!1,clearTimeout(v),e&&e()},f.pooled=function(e,t){return function(){var r=arguments,n=r[r.length-1],i="function"==typeof n;f.acquire(function(t,a){if(t)return void(i&&n(t));var o=[a].concat(Array.prototype.slice.call(r,0,i?-1:void 0));o.push(function(){f.release(a),i&&n.apply(null,arguments)}),e.apply(null,o)},t)}},f.getPoolSize=function(){return p},f.getName=function(){return t.name},f.availableObjectsCount=function(){return l.length},f.waitingClientsCount=function(){return d.size()},s(),f}}).call(t,r(10))},function(e,t){t.endianness=function(){return"LE"},t.hostname=function(){return"undefined"!=typeof location?location.hostname:""},t.loadavg=function(){return[]},t.uptime=function(){return 0},t.freemem=function(){return Number.MAX_VALUE},t.totalmem=function(){return Number.MAX_VALUE},t.cpus=function(){return[]},t.type=function(){return"Browser"},t.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},t.networkInterfaces=t.getNetworkInterfaces=function(){return{}},t.arch=function(){return"javascript"},t.platform=function(){return"browser"},t.tmpdir=t.tmpDir=function(){return"/tmp"},t.EOL="\n",t.homedir=function(){return"/"}},function(e,t,r){(function(t){var n=r(165),i=r(67);e.exports=function(e,r,a){for(var o=i.apply(null,arguments),s=n(o.options.maxmem),f=Array.prototype.slice.apply(o.password),r=Array.prototype.slice.apply(o.salt),u=s.crypto_scrypt(f,r,o.options.cost,o.options.blockSize,o.options.parallel,o.options.size),c=new t(u.length),h=0;h<u.length;h++)c[h]=u[h];return c}}).call(t,r(7).Buffer)},function(module,exports,__webpack_require__){(function(process,__dirname,module){module.exports=function(requested_total_memory){function g(e){throw e}function aa(){return function(){}}function ia(e){eval.call(m,e)}function ja(){return u}function ka(e){u=e}function la(e){if(1==ma)return 1;var t={"%i1":1,"%i8":1,"%i16":2,"%i32":4,"%i64":8,"%float":4,"%double":8}["%"+e];return t||("*"==e.charAt(e.length-1)?t=ma:"i"==e[0]&&(e=parseInt(e.substr(1)),w(0==e%8),t=e/8)),t}function na(e,t,r){r&&r.length?(r.splice||(r=Array.prototype.slice.call(r)),r.splice(0,0,t),s["dynCall_"+e].apply(m,r)):s["dynCall_"+e].call(m,t)}function pa(){var e=[],t=0;this.oa=function(r){if(r&=255,t&&(e.push(r),t--),0==e.length)return 128>r?String.fromCharCode(r):(e.push(r),t=191<r&&224>r?1:2,"");if(0<t)return"";var r=e[0],n=e[1],i=e[2],r=191<r&&224>r?String.fromCharCode((31&r)<<6|63&n):String.fromCharCode((15&r)<<12|(63&n)<<6|63&i);return e.length=0,r},this.yb=function(e){for(var e=unescape(encodeURIComponent(e)),t=[],r=0;r<e.length;r++)t.push(e.charCodeAt(r));return t}}function qa(e){var t=u;return u=u+e|0,u=u+7>>3<<3,t}function ra(e){var t=sa;return sa=sa+e|0,sa=sa+7>>3<<3,t}function ua(e){var t=z;return z=z+e|0,z=z+7>>3<<3,z>=va&&wa("Cannot enlarge memory arrays in asm.js. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value, or (2) set Module.TOTAL_MEMORY before the program runs."),t}function xa(e,t){return Math.ceil(e/(t||8))*(t||8)}function w(e,t){e||wa("Assertion failed: "+t)}function Ca(a){try{var b=s["_"+a];b||(b=eval("_"+a))}catch(e){}return w(b,"Cannot call unknown function "+a+" (perhaps LLVM optimizations or closure removed it?)"),b}function Ba(e,t,r,n){function i(e,t){if("string"==t){if(e===m||e===k||0===e)return 0;a||(a=ja());var r=qa(e.length+1);return Da(e,r),r}return"array"==t?(a||(a=ja()),r=qa(e.length),Ea(e,r),r):e}var a=0,o=0,n=n?n.map(function(e){return i(e,r[o++])}):[];return e=e.apply(m,n),"string"==t?t=Fa(e):(w("array"!=t),t=e),a&&ka(a),t}function Ga(e,t,r){switch(r=r||"i8","*"===r.charAt(r.length-1)&&(r="i32"),r){case"i1":case"i8":A[e]=t;break;case"i16":Ha[e>>1]=t;break;case"i32":B[e>>2]=t;break;case"i64":Aa=[t>>>0,(0|Math.min(+Math.floor(t/4294967296),4294967295))>>>0],B[e>>2]=Aa[0],B[e+4>>2]=Aa[1];break;case"float":Ia[e>>2]=t;break;case"double":Ja[e>>3]=t;break;default:wa("invalid type for setValue: "+r)}}function F(e,t,r,n){var i,a;"number"==typeof e?(i=l,a=e):(i=p,a=e.length);var o="string"==typeof t?t:m,r=r==Na?n:[Oa,qa,ra,ua][r===k?E:r](Math.max(a,o?1:t.length));if(i){for(n=r,w(0==(3&r)),e=r+(-4&a);n<e;n+=4)B[n>>2]=0;for(e=r+a;n<e;)A[0|n++]=0;return r}if("i8"===o)return e.subarray||e.slice?G.set(e,r):G.set(new Uint8Array(e),r),r;for(var s,f,n=0;n<a;){var u=e[n];"function"==typeof u&&(u=ya.fe(u)),i=o||t[n],0===i?n++:("i64"==i&&(i="i32"),Ga(r+n,u,i),f!==i&&(s=la(i),f=i),n+=s)}return r}function Fa(e,t){for(var r,n=p,i=0;;){if(128<=(r=G[e+i|0]))n=l;else if(0==r&&!t)break;if(i++,t&&i==t)break}t||(t=i);var a="";if(!n){for(;0<t;)r=String.fromCharCode.apply(String,G.subarray(e,e+Math.min(t,1024))),a=a?a+r:r,e+=1024,t-=1024;return a}for(n=new pa,i=0;i<t;i++)r=G[e+i|0],a+=n.oa(r);return a}function Va(e){for(;0<e.length;){var t=e.shift();if("function"==typeof t)t();else{var r=t.V;"number"==typeof r?t.ha===k?na("v",r):na("vi",r,[t.ha]):r(t.ha===k?m:t.ha)}}}function bb(e){Wa.unshift(e)}function cb(e){$a.unshift(e)}function J(e,t,r){return e=(new pa).yb(e),r&&(e.length=r),t||e.push(0),e}function Da(e,t,r){for(e=J(e,r),r=0;r<e.length;)A[t+r|0]=e[r],r+=1}function Ea(e,t){for(var r=0;r<e.length;r++)A[t+r|0]=e[r]}function db(e,t){return 0<=e?e:32>=t?2*Math.abs(1<<t-1)+e:Math.pow(2,t)+e}function eb(e,t){if(0>=e)return e;var r=32>=t?Math.abs(1<<t-1):Math.pow(2,t-1);return e>=r&&(32>=t||e>r)&&(e=-2*r+e),e}function ib(e){L++,s.monitorRunDependencies&&s.monitorRunDependencies(L),e?(w(!fb[e]),fb[e]=1):s.P("warning: run dependency added without ID")}function jb(e){L--,s.monitorRunDependencies&&s.monitorRunDependencies(L),e?(w(fb[e]),delete fb[e]):s.P("warning: run dependency removed without ID"),0==L&&(hb!==m&&(clearInterval(hb),hb=m),!gb&&kb&&lb())}function M(e){return B[rb>>2]=e}function vb(e,t,r){var n=O(e,{parent:l}).d,e="/"===e?"/":wb(e)[2],i=xb(n,e);return i&&g(new Q(i)),n.l.Ta||g(new Q(N.L)),n.l.Ta(n,e,t,r)}function yb(e,t){return t=4095&t|32768,vb(e,t,0)}function zb(e,t){return t=1023&t|16384,vb(e,t,0)}function Ab(e,t,r){return vb(e,8192|t,r)}function Bb(e,t){var r=O(t,{parent:l}).d,n="/"===t?"/":wb(t)[2],i=xb(r,n);return i&&g(new Q(i)),r.l.Wa||g(new Q(N.L)),r.l.Wa(r,n,e)}function Cb(e,t){var r;r="string"==typeof e?O(e,{N:l}).d:e,r.l.Y||g(new Q(N.L)),r.l.Y(r,{mode:4095&t|-4096&r.mode,timestamp:Date.now()})}function Db(e,t){var r,n,e=Eb(e);"string"==typeof t?void 0===(n=Fb[t])&&g(Error("Unknown file open mode: "+t)):n=t,t=n,r=512&t?4095&r|32768:0;var i;try{var a=O(e,{N:!(65536&t)});i=a.d,e=a.path}catch(e){}512&t&&(i?2048&t&&g(new Q(N.va)):i=vb(e,r,0)),i||g(new Q(N.ca)),8192==(61440&i.mode)&&(t&=-1025),i?40960==(61440&i.mode)?r=N.ba:16384==(61440&i.mode)&&(0!=(3&t)||1024&t)?r=N.aa:(r=["r","w","rw"][3&t],1024&t&&(r+="w"),r=Gb(i,r)):r=N.ca,r&&g(new Q(r)),1024&t&&(r=i,r="string"==typeof r?O(r,{N:l}).d:r,r.l.Y||g(new Q(N.L)),16384==(61440&r.mode)&&g(new Q(N.aa)),32768!=(61440&r.mode)&&g(new Q(N.A)),(a=Gb(r,"w"))&&g(new Q(a)),r.l.Y(r,{size:0,timestamp:Date.now()}));var o,s={path:e,d:i,M:t,seekable:l,position:0,e:i.e,Gb:[],error:p};e:{for(i=k||4096,r=k||1;r<=i;r++)if(!R[r]){o=r;break e}g(new Q(N.Za))}return s.s=o,Object.defineProperty(s,"object",{get:function(){return s.d},set:function(e){s.d=e}}),Object.defineProperty(s,"isRead",{get:function(){return 1!=(3&s.M)}}),Object.defineProperty(s,"isWrite",{get:function(){return 0!=(3&s.M)}}),Object.defineProperty(s,"isAppend",{get:function(){return 8&s.M}}),R[o]=s,s.e.open&&s.e.open(s),s}function Hb(e){try{e.e.close&&e.e.close(e)}catch(e){g(e)}finally{R[e.s]=m}}function Ib(e,t,r,n,i){(0>n||0>i)&&g(new Q(N.A)),0==(3&e.M)&&g(new Q(N.$)),16384==(61440&e.d.mode)&&g(new Q(N.aa)),e.e.write||g(new Q(N.A));var a=l;return void 0===i?(i=e.position,a=p):e.seekable||g(new Q(N.da)),8&e.M&&((!e.seekable||!e.e.na)&&g(new Q(N.da)),e.e.na(e,0,2)),t=e.e.write(e,t,r,n,i),a||(e.position+=t),t}function wb(e){return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1)}function Jb(e,t){for(var r=0,n=e.length-1;0<=n;n--){var i=e[n];"."===i?e.splice(n,1):".."===i?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function Eb(e){var t="/"===e.charAt(0),r="/"===e.substr(-1),e=Jb(e.split("/").filter(function(e){return!!e}),!t).join("/");return!e&&!t&&(e="."),e&&r&&(e+="/"),(t?"/":"")+e}function S(){return Eb(Array.prototype.slice.call(arguments,0).filter(function(e){return"string"!=typeof e&&g(new TypeError("Arguments to path.join must be strings")),e}).join("/"))}function Kb(){for(var e="",t=p,r=arguments.length-1;-1<=r&&!t;r--){var n=0<=r?arguments[r]:"/";"string"!=typeof n&&g(new TypeError("Arguments to path.resolve must be strings")),n&&(e=n+"/"+e,t="/"===n.charAt(0))}return e=Jb(e.split("/").filter(function(e){return!!e}),!t).join("/"),(t?"/":"")+e||"."}function Mb(e,t){Lb[e]={input:[],H:[],O:t},Nb[e]={e:Ob}}function Q(e){this.mb=e;for(var t in N)if(N[t]===e){this.code=t;break}this.message=ub[e]}function Zb(e){e instanceof Q||g(e+" : "+Error().stack),M(e.mb)}function $b(e,t){for(var r=0,n=0;n<t.length;n++)r=(r<<5)-r+t.charCodeAt(n)|0;return(e+r)%Xb.length}function Sb(e,t){var r=Gb(e,"x");for(r&&g(new Q(r)),r=Xb[$b(e.id,t)];r;r=r.wb)if(r.parent.id===e.id&&r.name===t)return r;return e.l.tb(e,t)}function Qb(e,t,r,n){var i={id:Wb++,name:t,mode:r,l:{},e:{},X:n,parent:m,z:m};return e||(e=i),i.parent=e,i.z=e.z,Object.defineProperty(i,"read",{get:function(){return 365==(365&i.mode)},set:function(e){e?i.mode|=365:i.mode&=-366}}),Object.defineProperty(i,"write",{get:function(){return 146==(146&i.mode)},set:function(e){e?i.mode|=146:i.mode&=-147}}),e=$b(i.parent.id,i.name),i.wb=Xb[e],Xb[e]=i}function O(e,t){e=Kb("/",e),t=t||{pa:0},8<t.pa&&g(new Q(N.ba));for(var r=Jb(e.split("/").filter(function(e){return!!e}),p),n=Vb,i="/",a=0;a<r.length;a++){var o=a===r.length-1;if(o&&t.parent)break;if(n=Sb(n,r[a]),i=S(i,r[a]),n.ub&&(n=n.z.root),!o||t.N)for(o=0;40960==(61440&n.mode);){n=O(i,{N:p}).d,n.l.Va||g(new Q(N.A));var n=n.l.Va(n),s=Kb,f=wb(i),i=f[0],f=f[1];i||f?(f&&(f=f.substr(0,f.length-1)),i+=f):i=".",i=s(i,n),n=O(i,{pa:t.pa}).d,40<o++&&g(new Q(N.ba))}}return{path:i,d:n}}function ac(e){for(var t;;){if(e===e.parent)return t?S(e.z.Ua,t):e.z.Ua;t=t?S(e.name,t):e.name,e=e.parent}}function Gb(e,t){return Yb?0:(-1===t.indexOf("r")||292&e.mode)&&(-1===t.indexOf("w")||146&e.mode)&&(-1===t.indexOf("x")||73&e.mode)?0:N.Ya}function xb(e,t){try{return Sb(e,t),N.va}catch(e){}return Gb(e,"wx")}function cc(e,t){var r=0;return e&&(r|=365),t&&(r|=146),r}function dc(e,t,r,n,i){if(e=S("string"==typeof e?e:ac(e),t),n=cc(n,i),i=yb(e,n),r){if("string"==typeof r){for(var t=Array(r.length),a=0,o=r.length;a<o;++a)t[a]=r.charCodeAt(a);r=t}Cb(e,146|n),t=Db(e,"w"),Ib(t,r,0,r.length,0),Hb(t),Cb(e,n)}return i}function ec(e,t,r,n){return e=S("string"==typeof e?e:ac(e),t),ec.Sa||(ec.Sa=64),t=ec.Sa++<<8|0,Nb[t]={e:{open:function(e){e.seekable=p},close:function(){n&&n.buffer&&n.buffer.length&&n(10)},Q:function(e,t,n,i){for(var a=0,o=0;o<i;o++){var s;try{s=r()}catch(e){g(new Q(N.I))}if(s===k&&0===a&&g(new Q(N.ua)),s===m||s===k)break;a++,t[n+o]=s}return a&&(e.d.timestamp=Date.now()),a},write:function(e,t,r,i){for(var a=0;a<i;a++)try{n(t[r+a])}catch(e){g(new Q(N.I))}return i&&(e.d.timestamp=Date.now()),a}}},Ab(e,r&&n?511:r?219:365,t)}function fc(e,t,r){return(e=R[e])?(e.sender(G.subarray(t,t+r)),r):-1}function gc(e,t,r){var n=R[e];if(!n)return M(N.$),-1;if(n&&"socket"in n)return fc(e,t,r);try{return Ib(n,A,t,r)}catch(e){return Zb(e),-1}}function hc(e,t,r,n){return 0==(r*=t)?0:(e=gc(n,e,r),-1==e?((t=R[n])&&(t.error=l),0):Math.floor(e/t))}function jc(e){return 0>e||0===e&&-1/0==1/e}function kc(e,t){function r(e){var r;return"double"===e?r=Ja[t+o>>3]:"i64"==e?(r=[B[t+o>>2],B[t+(o+8)>>2]],o+=8):(e="i32",r=B[t+o>>2]),o+=Math.max(Math.max(la(e),ma),8),r}for(var n,i,a=e,o=0,s=[];;){var f=a;if(0===(n=A[a]))break;if(i=A[a+1|0],37==n){var u=p,c=p,h=p,d=p;e:for(;;){switch(i){case 43:u=l;break;case 45:c=l;break;case 35:h=l;break;case 48:if(d)break e;d=l;break;default:break e}a++,i=A[a+1|0]}var b=0;if(42==i)b=r("i32"),a++,i=A[a+1|0];else for(;48<=i&&57>=i;)b=10*b+(i-48),a++,i=A[a+1|0];var v=p;if(46==i){var g=0,v=l;if(a++,42==(i=A[a+1|0]))g=r("i32"),a++;else for(;!(48>(i=A[a+1|0])||57<i);)g=10*g+(i-48),a++;i=A[a+1|0]}else g=6;var y;switch(String.fromCharCode(i)){case"h":i=A[a+2|0],104==i?(a++,y=1):y=2;break;case"l":i=A[a+2|0],108==i?(a++,y=8):y=4;break;case"L":case"q":case"j":y=8;break;case"z":case"t":case"I":y=4;break;default:y=m}switch(y&&a++,i=A[a+1|0],String.fromCharCode(i)){case"d":case"i":case"u":case"o":case"x":case"X":case"p":f=100==i||105==i,y=y||4;var w,_=n=r("i"+8*y);8==y&&(n=117==i?+(n[0]>>>0)+4294967296*+(n[1]>>>0):+(n[0]>>>0)+4294967296*+(0|n[1])),4>=y&&(n=(f?eb:db)(n&Math.pow(256,y)-1,8*y));var S=Math.abs(n),f="";if(100==i||105==i)w=8==y&&lc?lc.stringify(_[0],_[1],m):eb(n,8*y).toString(10);else if(117==i)w=8==y&&lc?lc.stringify(_[0],_[1],l):db(n,8*y).toString(10),n=Math.abs(n);else if(111==i)w=(h?"0":"")+S.toString(8);else if(120==i||88==i){if(f=h&&0!=n?"0x":"",8==y&&lc)if(_[1]){for(w=(_[1]>>>0).toString(16),h=(_[0]>>>0).toString(16);8>h.length;)h="0"+h;w+=h}else w=(_[0]>>>0).toString(16);else if(0>n){for(n=-n,w=(S-1).toString(16),_=[],h=0;h<w.length;h++)_.push((15-parseInt(w[h],16)).toString(16));for(w=_.join("");w.length<2*y;)w="f"+w}else w=S.toString(16);88==i&&(f=f.toUpperCase(),w=w.toUpperCase())}else 112==i&&(0===S?w="(nil)":(f="0x",w=S.toString(16)));if(v)for(;w.length<g;)w="0"+w;for(u&&(f=0>n?"-"+f:"+"+f);f.length+w.length<b;)c?w+=" ":d?w="0"+w:f=" "+f;w=f+w,w.split("").forEach(function(e){s.push(e.charCodeAt(0))});break;case"f":case"F":case"e":case"E":case"g":case"G":if(n=r("double"),isNaN(n))w="nan",d=p;else if(isFinite(n)){if(v=p,y=Math.min(g,20),103!=i&&71!=i||(v=l,g=g||1,y=parseInt(n.toExponential(y).split("e")[1],10),g>y&&-4<=y?(i=(103==i?"f":"F").charCodeAt(0),g-=y+1):(i=(103==i?"e":"E").charCodeAt(0),g--),y=Math.min(g,20)),101==i||69==i?(w=n.toExponential(y),/[eE][-+]\d$/.test(w)&&(w=w.slice(0,-1)+"0"+w.slice(-1))):102!=i&&70!=i||(w=n.toFixed(y),0===n&&jc(n)&&(w="-"+w)),f=w.split("e"),v&&!h)for(;1<f[0].length&&-1!=f[0].indexOf(".")&&("0"==f[0].slice(-1)||"."==f[0].slice(-1));)f[0]=f[0].slice(0,-1);else for(h&&-1==w.indexOf(".")&&(f[0]+=".");g>y++;)f[0]+="0";w=f[0]+(1<f.length?"e"+f[1]:""),69==i&&(w=w.toUpperCase()),u&&0<=n&&(w="+"+w)}else w=(0>n?"-":"")+"inf",d=p;for(;w.length<b;)w=c?w+" ":!d||"-"!=w[0]&&"+"!=w[0]?(d?"0":" ")+w:w[0]+"0"+w.slice(1);97>i&&(w=w.toUpperCase()),w.split("").forEach(function(e){s.push(e.charCodeAt(0))});break;case"s":if(d=(u=r("i8*"))?ic(u):6,v&&(d=Math.min(d,g)),!c)for(;d<b--;)s.push(32);if(u)for(h=0;h<d;h++)s.push(G[0|u++]);else s=s.concat(J("(null)".substr(0,d),l));if(c)for(;d<b--;)s.push(32);break;case"c":for(c&&s.push(r("i8"));0<--b;)s.push(32);c||s.push(r("i8"));break;case"n":c=r("i32*"),B[c>>2]=s.length;break;case"%":s.push(n);break;default:for(h=f;h<a+2;h++)s.push(A[h])}a+=2}else s.push(n),a+=1}return s}function mc(e,t,r){return r=kc(t,r),t=ja(),e=hc(F(r,"i8",La),1,r.length,e),ka(t),e}function nc(e){nc.ia||(z=z+4095>>12<<12,nc.ia=l,w(ua),nc.hb=ua,ua=function(){wa("cannot dynamically allocate, sbrk now has control")});var t=z;return 0!=e&&nc.hb(e),t}function U(){return B[U.m>>2]}function oc(){return!!oc.ta}function pc(e){var t=p;try{e==__ZTIi&&(t=l)}catch(e){}try{e==__ZTIj&&(t=l)}catch(e){}try{e==__ZTIl&&(t=l)}catch(e){}try{e==__ZTIm&&(t=l)}catch(e){}try{e==__ZTIx&&(t=l)}catch(e){}try{e==__ZTIy&&(t=l)}catch(e){}try{e==__ZTIf&&(t=l)}catch(e){}try{e==__ZTId&&(t=l)}catch(e){}try{e==__ZTIe&&(t=l)}catch(e){}try{e==__ZTIc&&(t=l)}catch(e){}try{e==__ZTIa&&(t=l)}catch(e){}try{e==__ZTIh&&(t=l)}catch(e){}try{e==__ZTIs&&(t=l)}catch(e){}try{e==__ZTIt&&(t=l)}catch(e){}return t}function qc(e,t,r){if(0==r)return p;if(0==t||t==e)return l;switch(pc(t)?t:B[B[t>>2]-8>>2]){case 0:return 0==B[B[e>>2]-8>>2]?qc(B[e+8>>2],B[t+8>>2],r):p;case 1:return p;case 2:return qc(e,B[t+8>>2],r);default:return p}}function rc(e,t,r){if(!rc.sb){try{B[__ZTVN10__cxxabiv119__pointer_type_infoE>>2]=0}catch(e){}try{B[pb>>2]=1}catch(e){}try{B[ob>>2]=2}catch(e){}rc.sb=l}B[U.m>>2]=e,B[U.m+4>>2]=t,B[U.m+8>>2]=r,"uncaught_exception"in oc?oc.ta++:oc.ta=1,g(e+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.")}function sc(e){try{return tc(e)}catch(e){}}function uc(){if(uc.Bb)uc.Bb=p;else{V.setThrew(0),B[U.m+4>>2]=0;var e=B[U.m>>2],t=B[U.m+8>>2];t&&(na("vi",t,[e]),B[U.m+8>>2]=0),e&&(sc(e),B[U.m>>2]=0)}}function wc(e){var t,r;wc.ia?(r=B[vc>>2],t=B[r>>2]):(wc.ia=l,W.USER="root",W.PATH="/",W.PWD="/",W.HOME="/home/emscripten",W.LANG="en_US.UTF-8",W._="./this.program",t=F(1024,"i8",E),r=F(256,"i8*",E),B[r>>2]=t,B[vc>>2]=r);var n,i=[],a=0;for(n in e)if("string"==typeof e[n]){var o=n+"="+e[n];i.push(o),a+=o.length}for(1024<a&&g(Error("Environment size exceeded TOTAL_ENV_SIZE!")),e=0;e<i.length;e++){for(o=i[e],a=0;a<o.length;a++)A[t+a|0]=o.charCodeAt(a);A[t+a|0]=0,B[r+4*e>>2]=t,t+=o.length+1}B[r+4*i.length>>2]=0}function xc(e){return 0===e?0:(e=Fa(e),W.hasOwnProperty(e)?(xc.J&&tc(xc.J),xc.J=F(J(W[e]),"i8",Ka),xc.J):0)}function yc(e,t,r){if(e in ub){if(ub[e].length>r-1)return M(N.ab);for(e=ub[e],r=0;r<e.length;r++)A[t+r|0]=e.charCodeAt(r);return A[t+r|0]=0}return M(N.A)}function zc(e){return zc.buffer||(zc.buffer=Oa(256)),yc(e,zc.buffer,256),zc.buffer}function Ac(e){s.exit(e)}function Bc(e,t){var r=db(255&e);return A[0|Bc.J]=r,-1==gc(t,Bc.J,1)?((r=R[t])&&(r.error=l),-1):r}function Ic(e){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[e.substr(e.lastIndexOf(".")+1)]}function Kc(){var e=s.canvas;Jc.forEach(function(t){t(e.width,e.height)})}function Lc(){var e=s.canvas;this.Ib=e.width,this.Hb=e.height,e.width=screen.width,e.height=screen.height,"undefined"!=typeof SDL&&(e=Qa[SDL.screen+0*ma>>2],B[SDL.screen+0*ma>>2]=8388608|e),Kc()}function Mc(){var e=s.canvas;e.width=this.Ib,e.height=this.Hb,"undefined"!=typeof SDL&&(e=Qa[SDL.screen+0*ma>>2],B[SDL.screen+0*ma>>2]=-8388609&e),Kc()}function X(e,t){e!=m&&("number"==typeof e?this.p(e):t==m&&"string"!=typeof e?this.k(e,256):this.k(e,t))}function Yc(){return new X(m)}function Zc(e,t){var r=$c[e.charCodeAt(t)];return r==m?-1:r}function ad(e){var t=Yc();return t.D(e),t}function Y(e,t){this.h=0|e,this.j=0|t}function lb(e){function t(){if(ab||(ab=l,Va(Xa)),Va(Ya),gb=l,s._main&&kb&&s.callMain(e),s.postRun)for("function"==typeof s.postRun&&(s.postRun=[s.postRun]);s.postRun.length;)cb(s.postRun.shift());Va($a)}if(e=e||s.arguments,0<L)s.P("run() called, but dependencies remain, so not running");else{if(s.preRun)for("function"==typeof s.preRun&&(s.preRun=[s.preRun]);s.preRun.length;)bb(s.preRun.shift());Va(Wa),0<L||(s.setStatus?(s.setStatus("Running..."),setTimeout(function(){setTimeout(function(){s.setStatus("")},1),za||t()},1)):t())}}function ed(e){za=l,u=cd,Va(Za),dd&&g({type:"ExitStatus",value:e})}function wa(e){e&&s.print(e),za=l,g("abort() at "+Error().stack)}var Module={TOTAL_MEMORY:requested_total_memory||33554432},scrypt_raw=Module,k=void 0,l=!0,m=null,p=!1,q,s;s||(s=eval("(function() { try { return Module || {} } catch(e) { return {} } })()"));var ba={},t;for(t in s)s.hasOwnProperty(t)&&(ba[t]=s[t]);var ca="object"==typeof process&&!0,da="object"==typeof window,ea="function"==typeof importScripts,fa=!da&&!ca&&!ea;if(ca){s.print=function(e){process.stdout.write(e+"\n")},s.printErr=function(e){process.stderr.write(e+"\n")};var ga=__webpack_require__(41),ha=__webpack_require__(166);s.read=function(e,t){var e=ha.normalize(e),r=ga.readFileSync(e);return!r&&e!=ha.resolve(e)&&(e=path.join(__dirname,"..","src",e),r=ga.readFileSync(e)),r&&!t&&(r=r.toString()),r},s.readBinary=function(e){return s.read(e,l)},s.load=function(e){ia(read(e))},s.arguments=process.argv.slice(2),module.ee=s}else fa?(s.print=print,"undefined"!=typeof printErr&&(s.printErr=printErr),s.read=read,s.readBinary=function(e){return read(e,"binary")},"undefined"!=typeof scriptArgs?s.arguments=scriptArgs:void 0!==arguments&&(s.arguments=arguments),this.Module=s):da||ea?(s.read=function(e){var t=new XMLHttpRequest;return t.open("GET",e,p),t.send(m),t.responseText},void 0!==arguments&&(s.arguments=arguments),da?(s.print=function(e){console.log(e)},s.printErr=function(e){console.log(e)},this.Module=s):ea&&(s.print=aa(),s.load=importScripts)):g("Unknown runtime environment. Where are we?");"undefined"==!s.load&&s.read&&(s.load=function(e){ia(s.read(e))}),s.print||(s.print=aa()),s.printErr||(s.printErr=s.print),s.arguments||(s.arguments=[]),s.print=s.print,s.P=s.printErr,s.preRun=[],s.postRun=[];for(t in ba)ba.hasOwnProperty(t)&&(s[t]=ba[t]);var oa,ma=4,ya={},za=p,Aa;s.ccall=function(e,t,r,n){return Ba(Ca(e),t,r,n)},s.cwrap=function(e,t,r){var n=Ca(e);return function(){return Ba(n,t,r,Array.prototype.slice.call(arguments))}},s.setValue=Ga,s.getValue=function(e,t){switch(t=t||"i8","*"===t.charAt(t.length-1)&&(t="i32"),t){case"i1":case"i8":return A[e];case"i16":return Ha[e>>1];case"i32":case"i64":return B[e>>2];case"float":return Ia[e>>2];case"double":return Ja[e>>3];default:wa("invalid type for setValue: "+t)}return m};var Ka=0,La=1,E=2,Na=4;s.ALLOC_NORMAL=Ka,s.ALLOC_STACK=La,s.ALLOC_STATIC=E,s.ALLOC_DYNAMIC=3,s.ALLOC_NONE=Na,s.allocate=F,s.Pointer_stringify=Fa;var A,G,Ha,Pa,B,Qa,Ia,Ja,Ra=0,sa=0,Sa=0,u=0,Ta=0,Ua=0,z=0,va=s.TOTAL_MEMORY||33554432;w(!!(Int32Array&&Float64Array&&new Int32Array(1).subarray&&new Int32Array(1).set),"Cannot fallback to non-typed array case: Code is too specialized");var I=new ArrayBuffer(va);A=new Int8Array(I),Ha=new Int16Array(I),B=new Int32Array(I),G=new Uint8Array(I),Pa=new Uint16Array(I),Qa=new Uint32Array(I),Ia=new Float32Array(I),Ja=new Float64Array(I),B[0]=255,w(255===G[0]&&0===G[3],"Typed arrays 2 must be run on a little-endian system"),s.HEAP=k,s.HEAP8=A,s.HEAP16=Ha,s.HEAP32=B,s.HEAPU8=G,s.HEAPU16=Pa,s.HEAPU32=Qa,s.HEAPF32=Ia,s.HEAPF64=Ja;var Wa=[],Xa=[],Ya=[],Za=[],$a=[],ab=p;s.addOnPreRun=s.Vd=bb,s.addOnInit=s.Sd=function(e){Xa.unshift(e)},s.addOnPreMain=s.Ud=function(e){Ya.unshift(e)},s.addOnExit=s.Rd=function(e){Za.unshift(e)},s.addOnPostRun=s.Td=cb,s.intArrayFromString=J,s.intArrayToString=function(e){for(var t=[],r=0;r<e.length;r++){var n=e[r];255<n&&(n&=255),t.push(String.fromCharCode(n))}return t.join("")},s.writeStringToMemory=Da,s.writeArrayToMemory=Ea,Math.imul||(Math.imul=function(e,t){var r=65535&e,n=65535&t;return r*n+((e>>>16)*n+r*(t>>>16)<<16)|0}),Math.ie=Math.imul;var L=0,fb={},gb=p,hb=m;s.addRunDependency=ib,s.removeRunDependency=jb,s.preloadedImages={},s.preloadedAudios={},Ra=8,sa=Ra+1312,Xa.push({V:function(){mb()}});var nb,ob,pb;nb=nb=F([0,0,0,0,0,0,0,0],"i8",E),ob=ob=F([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"i8",E),pb=pb=F([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"i8",E),F([111,112,116,105,111,110,32,114,101,113,117,105,114,101,115,32,97,110,32,97,114,103,117,109,101,110,116,32,45,45,32,37,115,0,0,0,0,0,0,0,111,112,116,105,111,110,32,114,101,113,117,105,114,101,115,32,97,110,32,97,114,103,117,109,101,110,116,32,45,45,32,37,99,0,0,0,0,0,0,0,0,0,0,0,0,0,36,64,0,0,0,0,0,0,89,64,0,0,0,0,0,136,195,64,0,0,0,0,132,215,151,65,0,128,224,55,121,195,65,67,23,110,5,181,181,184,147,70,245,249,63,233,3,79,56,77,50,29,48,249,72,119,130,90,60,191,115,127,221,79,21,117,56,3,0,0,0,0,0,0,63,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,255,255,255,255,0,0,0,0,255,255,255,255,0,0,0,0,111,112,116,105,111,110,32,100,111,101,115,110,39,116,32,116,97,107,101,32,97,110,32,97,114,103,117,109,101,110,116,32,45,45,32,37,46,42,115,0,117,110,107,110,111,119,110,32,111,112,116,105,111,110,32,45,45,32,37,115,0,0,0,0,117,110,107,110,111,119,110,32,111,112,116,105,111,110,32,45,45,32,37,99,0,0,0,0,255,255,255,255,0,0,0,0,97,109,98,105,103,117,111,117,115,32,111,112,116,105,111,110,32,45,45,32,37,46,42,115,0,0,0,0,0,0,0,0,37,115,58,32,0,0,0,0,80,79,83,73,88,76,89,95,67,79,82,82,69,67,84,0,115,116,100,58,58,98,97,100,95,97,108,108,111,99,0,0,37,115,58,32,0,0,0,0,37,115,10,0,0,0,0,0,37,115,10,0,0,0,0,0,105,110,32,117,115,101,32,98,121,116,101,115,32,32,32,32,32,61,32,37,49,48,108,117,10,0,0,0,0,0,0,0,37,115,58,32,0,0,0,0,37,115,58,32,0,0,0,0,98,97,100,95,97,114,114,97,121,95,110,101,119,95,108,101,110,103,116,104,0,0,0,0,58,32,0,0,0,0,0,0,58,32,0,0,0,0,0,0,115,121,115,116,101,109,32,98,121,116,101,115,32,32,32,32,32,61,32,37,49,48,108,117,10,0,0,0,0,0,0,0,109,97,120,32,115,121,115,116,101,109,32,98,121,116,101,115,32,61,32,37,49,48,108,117,10,0,0,0,0,0,0,0,0,0,0,0,176,2,0,0,6,0,0,0,10,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,2,0,0,6,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,83,116,57,101,120,99,101,112,116,105,111,110,0,0,0,0,83,116,57,98,97,100,95,97,108,108,111,99,0,0,0,0,83,116,50,48,98,97,100,95,97,114,114,97,121,95,110,101,119,95,108,101,110,103,116,104,0,0,0,0,0,0,0,0,0,0,0,0,104,2,0,0,0,0,0,0,120,2,0,0,168,2,0,0,0,0,0,0,0,0,0,0,136,2,0,0,176,2,0,0,0,0,0,0,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"i8",Na,8);var qb=xa(F(12,"i8",E),8);w(0==qb%8);var rb=0;s._memcpy=sb,s._memset=tb;var N={L:1,ca:2,Bd:3,sc:4,I:5,za:6,Jb:7,Sc:8,$:9,Zb:10,ua:11,Ld:11,$a:12,Ya:13,kc:14,ed:15,Wb:16,va:17,Md:18,wa:19,gd:20,aa:21,A:22,Mc:23,Za:24,ld:25,Id:26,lc:27,ad:28,da:29,yd:30,Fc:31,rd:32,hc:33,ab:34,Wc:35,pc:36,$b:37,vc:38,wc:39,xc:40,Ec:41,Jd:42,Qc:43,uc:44,ec:45,Tc:46,Pb:50,Sb:51,Nd:52,Oc:53,Tb:54,Ub:55,fc:56,Vb:57,cd:60,Rc:61,Fd:62,bd:63,Xc:64,Yc:65,xd:66,Uc:67,Mb:68,Cd:69,ac:70,td:71,Hc:74,yc:75,ic:76,Rb:77,mc:79,md:80,Qb:81,wd:82,zc:83,Ac:84,Dc:85,Cc:86,Bc:87,dd:88,Nc:89,ya:90,Ic:91,ba:92,nd:95,qd:96,dc:104,Pc:105,Nb:106,vd:107,jd:108,Zc:109,zd:110,cc:111,Kb:112,bc:113,Lc:114,Jc:115,Gd:116,nc:117,oc:118,rc:119,Ob:120,gc:121,Gc:122,ud:123,Ad:124,Lb:125,Kc:126,tc:127,fd:128,Hd:129,sd:130,Kd:131,jc:132,Dd:133,kd:134,Vc:135,$c:136,Yb:137,qc:138,od:139,Xb:140,hd:141,pd:142,Ed:143},ub={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",35:"No message of desired type",36:"Identifier removed",37:"Channel number out of range",38:"Level 2 not synchronized",39:"Level 3 halted",40:"Level 3 reset",41:"Link number out of range",42:"Protocol driver not attached",43:"No CSI structure available",44:"Level 2 halted",45:"Deadlock condition",46:"No record locks available",50:"Invalid exchange",51:"Invalid request descriptor",52:"Exchange full",53:"No anode",54:"Invalid request code",55:"Invalid slot",56:"File locking deadlock error",57:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",74:"Multihop attempted",75:"Inode is remote (not really error)",76:"Cross mount point (not really error)",77:"Trying to read unreadable message",79:"Inappropriate file type or format",80:"Given log. name not unique",81:"f.d. invalid for this operation",82:"Remote address changed",83:"Can\t access a needed shared lib",84:"Accessing a corrupted shared lib",85:".lib section in a.out corrupted",86:"Attempting to link in too many libs",87:"Attempting to exec a shared library",88:"Function not implemented",89:"No more files",90:"Directory not empty",91:"File or path name too long",92:"Too many symbolic links",95:"Operation not supported on transport endpoint",96:"Protocol family not supported",104:"Connection reset by peer",105:"No buffer space available",106:"Address family not supported by protocol family",107:"Protocol wrong type for socket",108:"Socket operation on non-socket",109:"Protocol not available",110:"Can't send after socket shutdown",111:"Connection refused",112:"Address already in use",113:"Connection aborted",114:"Network is unreachable",115:"Network interface is not configured",116:"Connection timed out",117:"Host is down",118:"Host is unreachable",119:"Connection already in progress",120:"Socket already connected",121:"Destination address required",122:"Message too long",123:"Unknown protocol",124:"Socket type not supported",125:"Address not available",126:"ENETRESET",127:"Socket is already connected",128:"Socket is not connected",129:"TOOMANYREFS",130:"EPROCLIM",131:"EUSERS",132:"EDQUOT",133:"ESTALE",134:"Not supported",135:"No medium (in tape drive)",136:"No such host or network path",137:"Filename exists with different case",138:"EILSEQ",139:"Value too large for defined data type",140:"Operation canceled",141:"State not recoverable",142:"Previous owner died",143:"Streams pipe error"},Lb=[],Ob={open:function(e){Pb||(Pb=new pa);var t=Lb[e.d.X];t||g(new Q(N.wa)),e.q=t,e.seekable=p},close:function(e){e.q.H.length&&e.q.O.W(e.q,10)},Q:function(e,t,r,n){(!e.q||!e.q.O.Na)&&g(new Q(N.za));for(var i=0,a=0;a<n;a++){var o;try{o=e.q.O.Na(e.q)}catch(e){g(new Q(N.I))}if(o===k&&0===i&&g(new Q(N.ua)),o===m||o===k)break;i++,t[r+a]=o}return i&&(e.d.timestamp=Date.now()),i},write:function(e,t,r,n){(!e.q||!e.q.O.W)&&g(new Q(N.za));for(var i=0;i<n;i++)try{e.q.O.W(e.q,t[r+i])}catch(e){g(new Q(N.I))}return n&&(e.d.timestamp=Date.now()),i}},Pb,T={z:function(){return T.ka(m,"/",16895,0)},ka:function(e,t,r,n){return(24576==(61440&r)||4096==(61440&r))&&g(new Q(N.L)),r=Qb(e,t,r,n),r.l=T.l,16384==(61440&r.mode)?(r.e=T.e,r.g={}):32768==(61440&r.mode)?(r.e=T.e,r.g=[]):40960==(61440&r.mode)?r.e=T.e:8192==(61440&r.mode)&&(r.e=Rb),r.timestamp=Date.now(),e&&(e.g[t]=r),r},l:{ge:function(e){var t={};return t.ce=8192==(61440&e.mode)?e.id:1,t.je=e.id,t.mode=e.mode,t.pe=1,t.uid=0,t.he=0,t.X=e.X,t.size=16384==(61440&e.mode)?4096:32768==(61440&e.mode)?e.g.length:40960==(61440&e.mode)?e.link.length:0,t.Yd=new Date(e.timestamp),t.oe=new Date(e.timestamp),t.ae=new Date(e.timestamp),t.ib=4096,t.Zd=Math.ceil(t.size/t.ib),t},Y:function(e,t){if(t.mode!==k&&(e.mode=t.mode),t.timestamp!==k&&(e.timestamp=t.timestamp),t.size!==k){var r=e.g;if(t.size<r.length)r.length=t.size;else for(;t.size>r.length;)r.push(0)}},tb:function(){g(new Q(N.ca))},Ta:function(e,t,r,n){return T.ka(e,t,r,n)},rename:function(e,t,r){if(16384==(61440&e.mode)){var n;try{n=Sb(t,r)}catch(e){}if(n)for(var i in n.g)g(new Q(N.ya))}delete e.parent.g[e.name],e.name=r,t.g[r]=e},ze:function(e,t){delete e.g[t]},ve:function(e,t){var r,n=Sb(e,t);for(r in n.g)g(new Q(N.ya));delete e.g[t]},Wa:function(e,t,r){return e=T.ka(e,t,41471,0),e.link=r,e},Va:function(e){return 40960!=(61440&e.mode)&&g(new Q(N.A)),e.link}},e:{open:function(e){if(16384==(61440&e.d.mode)){var t,r=[".",".."];for(t in e.d.g)e.d.g.hasOwnProperty(t)&&r.push(t);e.lb=r}},Q:function(e,t,r,n,i){if(e=e.d.g,n=Math.min(e.length-i,n),e.subarray)t.set(e.subarray(i,i+n),r);else for(var a=0;a<n;a++)t[r+a]=e[i+a];return n},write:function(e,t,r,n,i){for(var a=e.d.g;a.length<i;)a.push(0);for(var o=0;o<n;o++)a[i+o]=t[r+o];return e.d.timestamp=Date.now(),n},na:function(e,t,r){return 1===r?t+=e.position:2===r&&32768==(61440&e.d.mode)&&(t+=e.d.g.length),0>t&&g(new Q(N.A)),e.Gb=[],e.position=t},ue:function(e){return e.lb},Wd:function(e,t,r){for(e=e.d.g,t+=r;t>e.length;)e.push(0)},ne:function(e,t,r,n,i,a,o){return 32768!=(61440&e.d.mode)&&g(new Q(N.wa)),e=e.d.g,2&o?((0<i||i+n<e.length)&&(e=e.subarray?e.subarray(i,i+n):Array.prototype.slice.call(e,i,i+n)),i=l,(n=Oa(n))||g(new Q(N.$a)),t.set(e,n)):(w(e.buffer===t||e.buffer===t.buffer),i=p,n=e.byteOffset),{te:n,Xd:i}}}},Tb=F(1,"i32*",E),Ub=F(1,"i32*",E);nb=F(1,"i32*",E);var Vb=m,Nb=[m],R=[m],Wb=1,Xb=[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],Yb=l,Fb={r:0,rs:8192,"r+":2,w:1537,wx:3585,xw:3585,"w+":1538,"wx+":3586,"xw+":3586,a:521,ax:2569,xa:2569,"a+":522,"ax+":2570,"xa+":2570},Rb={open:function(e){e.e=Nb[e.d.X].e,e.e.open&&e.e.open(e)},na:function(){g(new Q(N.da))}},bc;s._strlen=ic;var vc=F(1,"i32*",E),W={},Cc=p,Dc=p,Ec=p,Fc=p,Gc=k,Hc=k,Jc=[],Nc,Oc,Pc,Qc,rb=ra(4);B[rb>>2]=0;var Vb=Qb(m,"/",16895,0),Rc=T,Sc={type:Rc,se:{},Ua:"/",root:m},Tc;Tc=O("/",{N:p});var Uc=Rc.z(Sc);Uc.z=Sc,Sc.root=Uc,Tc&&(Tc.d.z=Sc,Tc.d.ub=l,Vb=Sc.root),zb("/tmp",511),zb("/dev",511),Nb[259]={e:{Q:function(){return 0},write:function(){return 0}}},Ab("/dev/null",438,259),Mb(1280,{Na:function(e){if(!e.input.length){var t=m;if(ca){if(process.Eb.be)return;t=process.Eb.Q()}else"undefined"!=typeof window&&"function"==typeof window.prompt?(t=window.prompt("Input: "))!==m&&(t+="\n"):"function"==typeof readline&&(t=readline())!==m&&(t+="\n");if(!t)return m;e.input=J(t,l)}return e.input.shift()},W:function(e,t){t===m||10===t?(s.print(e.H.join("")),e.H=[]):e.H.push(Pb.oa(t))}}),Mb(1536,{W:function(e,t){t===m||10===t?(s.printErr(e.H.join("")),e.H=[]):e.H.push(Pb.oa(t))}}),Ab("/dev/tty",438,1280),Ab("/dev/tty1",438,1536),zb("/dev/shm",511),zb("/dev/shm/tmp",511),Xa.unshift({V:function(){if(!s.noFSInit&&!bc){w(!bc,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),bc=l,s.stdin=s.stdin,s.stdout=s.stdout,s.stderr=s.stderr,s.stdin?ec("/dev","stdin",s.stdin):Bb("/dev/tty","/dev/stdin"),s.stdout?ec("/dev","stdout",m,s.stdout):Bb("/dev/tty","/dev/stdout"),s.stderr?ec("/dev","stderr",m,s.stderr):Bb("/dev/tty1","/dev/stderr");var e=Db("/dev/stdin","r");B[Tb>>2]=e.s,w(1===e.s,"invalid handle for stdin ("+e.s+")"),e=Db("/dev/stdout","w"),B[Ub>>2]=e.s,w(2===e.s,"invalid handle for stdout ("+e.s+")"),e=Db("/dev/stderr","w"),B[nb>>2]=e.s,w(3===e.s,"invalid handle for stderr ("+e.s+")")}}}),Ya.push({V:function(){Yb=p}}),Za.push({V:function(){bc=p;for(var e=0;e<R.length;e++){var t=R[e];t&&Hb(t)}}}),s.FS_createFolder=function(e,t,r,n){return e=S("string"==typeof e?e:ac(e),t),zb(e,cc(r,n))},s.FS_createPath=function(e,t){for(var e="string"==typeof e?e:ac(e),r=t.split("/").reverse();r.length;){var n=r.pop();if(n){var i=S(e,n);try{zb(i,511)}catch(e){}e=i}}return i},s.FS_createDataFile=dc,s.FS_createPreloadedFile=function(e,t,r,n,i,a,o,f){function u(){Ec=document.pointerLockElement===h||document.mozPointerLockElement===h||document.webkitPointerLockElement===h}function c(r){function u(r){f||dc(e,t,r,n,i),a&&a(),jb("cp "+d)}var c=p;s.preloadPlugins.forEach(function(e){!c&&e.canHandle(d)&&(e.handle(r,d,u,function(){o&&o(),jb("cp "+d)}),c=l)}),c||u(r)}if(s.preloadPlugins||(s.preloadPlugins=[]),!Nc&&!ea){Nc=l;try{new Blob,Oc=l}catch(e){Oc=p,console.log("warning: no blob constructor, cannot create blobs with mimetypes")}Pc="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:Oc?m:console.log("warning: no BlobBuilder"),Qc="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:console.log("warning: cannot create object URLs"),s.preloadPlugins.push({canHandle:function(e){return!s.re&&/\.(jpg|jpeg|png|bmp)$/i.test(e)},handle:function(e,t,r,n){var i=m;if(Oc)try{i=new Blob([e],{type:Ic(t)}),i.size!==e.length&&(i=new Blob([new Uint8Array(e).buffer],{type:Ic(t)}))}catch(e){var a="Blob constructor present but fails: "+e+"; falling back to blob builder";oa||(oa={}),oa[a]||(oa[a]=1,s.P(a))}i||(i=new Pc,i.append(new Uint8Array(e).buffer),i=i.getBlob());var o=Qc.createObjectURL(i),f=new Image;f.onload=function(){w(f.complete,"Image "+t+" could not be decoded");var n=document.createElement("canvas");n.width=f.width,n.height=f.height,n.getContext("2d").drawImage(f,0,0),s.preloadedImages[t]=n,Qc.revokeObjectURL(o),r&&r(e)},f.onerror=function(){console.log("Image "+o+" could not be decoded"),n&&n()},f.src=o}}),s.preloadPlugins.push({canHandle:function(e){return!s.qe&&e.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(e,t,r,n){function i(n){o||(o=l,s.preloadedAudios[t]=n,r&&r(e))}function a(){o||(o=l,s.preloadedAudios[t]=new Audio,n&&n())}var o=p;if(!Oc)return a();try{var f=new Blob([e],{type:Ic(t)})}catch(e){return a()}var f=Qc.createObjectURL(f),u=new Audio;u.addEventListener("canplaythrough",function(){i(u)},p),u.onerror=function(){if(!o){console.log("warning: browser could not fully decode audio "+t+", trying slower base64 approach");for(var r="",n=0,a=0,s=0;s<e.length;s++)for(n=n<<8|e[s],a+=8;6<=a;)var f=n>>a-6&63,a=a-6,r=r+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[f];2==a?(r+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(3&n)<<4],r+="=="):4==a&&(r+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(15&n)<<2],r+="="),u.src="data:audio/x-"+t.substr(-3)+";base64,"+r,i(u)}},u.src=f,setTimeout(function(){za||i(u)},1e4)}});var h=s.canvas;h.qa=h.requestPointerLock||h.mozRequestPointerLock||h.webkitRequestPointerLock,h.La=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||aa(),h.La=h.La.bind(document),document.addEventListener("pointerlockchange",u,p),document.addEventListener("mozpointerlockchange",u,p),document.addEventListener("webkitpointerlockchange",u,p),s.elementPointerLock&&h.addEventListener("click",function(e){!Ec&&h.qa&&(h.qa(),e.preventDefault())},p)}var d,b=S.apply(m,[e,t]);if("/"==b[0]&&(b=b.substr(1)),d=b,ib("cp "+d),"string"==typeof r){var v=o,y=function(){v?v():g('Loading data file "'+r+'" failed.')},_=new XMLHttpRequest;_.open("GET",r,l),_.responseType="arraybuffer",_.onload=function(){if(200==_.status||0==_.status&&_.response){var e=_.response;w(e,'Loading data file "'+r+'" failed (no arrayBuffer).'),e=new Uint8Array(e),c(e),jb("al "+r)}else y()},_.onerror=y,_.send(m),ib("al "+r)}else c(r)},s.FS_createLazyFile=function(e,t,r,n,i){var a,o;"undefined"!=typeof XMLHttpRequest?(ea||g("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc"),a=function(){this.ma=p,this.T=[]},a.prototype.get=function(e){if(!(e>this.length-1||0>e)){var t=e%this.S;return this.pb(Math.floor(e/this.S))[t]}},a.prototype.Cb=function(e){this.pb=e},a.prototype.Fa=function(){var e=new XMLHttpRequest;e.open("HEAD",r,p),e.send(m),200<=e.status&&300>e.status||304===e.status||g(Error("Couldn't load "+r+". Status: "+e.status));var t,n=Number(e.getResponseHeader("Content-length")),i=1048576;(t=e.getResponseHeader("Accept-Ranges"))&&"bytes"===t||(i=n);var a=this;a.Cb(function(e){var t=e*i,o=(e+1)*i-1,o=Math.min(o,n-1);if(void 0===a.T[e]){var s=a.T;t>o&&g(Error("invalid range ("+t+", "+o+") or no bytes requested!")),o>n-1&&g(Error("only "+n+" bytes available! programmer error!"));var f=new XMLHttpRequest;f.open("GET",r,p),n!==i&&f.setRequestHeader("Range","bytes="+t+"-"+o),"undefined"!=typeof Uint8Array&&(f.responseType="arraybuffer"),f.overrideMimeType&&f.overrideMimeType("text/plain; charset=x-user-defined"),f.send(m),200<=f.status&&300>f.status||304===f.status||g(Error("Couldn't load "+r+". Status: "+f.status)),t=f.response!==k?new Uint8Array(f.response||[]):J(f.responseText||"",l),s[e]=t}return void 0===a.T[e]&&g(Error("doXHR failed!")),a.T[e]}),this.gb=n,this.fb=i,this.ma=l},a=new a,Object.defineProperty(a,"length",{get:function(){return this.ma||this.Fa(),this.gb}}),Object.defineProperty(a,"chunkSize",{get:function(){return this.ma||this.Fa(),this.fb}}),o=k):(o=r,a=k);var f,e=S("string"==typeof e?e:ac(e),t);f=yb(e,cc(n,i)),a?f.g=a:o&&(f.g=m,f.url=o);var u={};return Object.keys(f.e).forEach(function(e){var t=f.e[e];u[e]=function(){var e;if(f.ke||f.le||f.link||f.g)e=l;else{if(e=l,"undefined"!=typeof XMLHttpRequest&&g(Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")),s.read)try{f.g=J(s.read(f.url),l)}catch(t){e=p}else g(Error("Cannot load without read() or XMLHttpRequest."));e||M(N.I)}return e||g(new Q(N.I)),t.apply(m,arguments)}}),u.Q=function(e,t,r,n,i){if(e=e.d.g,n=Math.min(e.length-i,n),e.slice)for(var a=0;a<n;a++)t[r+a]=e[i+a];else for(a=0;a<n;a++)t[r+a]=e.get(i+a);return n},f.e=u,f},s.FS_createLink=function(e,t,r){return e=S("string"==typeof e?e:ac(e),t),Bb(r,e)},s.FS_createDevice=ec,U.m=F(12,"void*",E),wc(W),Bc.J=F([0],"i8",E),s.requestFullScreen=function(e,t){function r(){Dc=p,(document.webkitFullScreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.mozFullscreenElement||document.fullScreenElement||document.fullscreenElement)===n?(n.Ga=document.cancelFullScreen||document.mozCancelFullScreen||document.webkitCancelFullScreen,n.Ga=n.Ga.bind(document),Gc&&n.qa(),Dc=l,Hc&&Lc()):Hc&&Mc(),s.onFullScreen&&s.onFullScreen(Dc)}Gc=e,Hc=t,void 0===Gc&&(Gc=l),void 0===Hc&&(Hc=p);var n=s.canvas;Fc||(Fc=l,document.addEventListener("fullscreenchange",r,p),document.addEventListener("mozfullscreenchange",r,p),document.addEventListener("webkitfullscreenchange",r,p)),n.Ab=n.requestFullScreen||n.mozRequestFullScreen||(n.webkitRequestFullScreen?function(){n.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:m),n.Ab()},s.requestAnimationFrame=function(e){window.requestAnimationFrame||(window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||window.setTimeout),window.requestAnimationFrame(e)},s.pauseMainLoop=aa(),s.resumeMainLoop=function(){Cc&&(Cc=p,m())},s.getUserMedia=function(){window.Ma||(window.Ma=navigator.getUserMedia||navigator.mozGetUserMedia),window.Ma(k)},Sa=u=xa(sa),Ta=Sa+5242880,Ua=z=xa(Ta),w(Ua<va);var Vc=F([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"i8",3),Wc=F([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0],"i8",3),Xc=Math.min,V=function(e,t,r){"use asm";var n=new e.Int8Array(r);var i=new e.Int16Array(r);var a=new e.Int32Array(r);var o=new e.Uint8Array(r);var s=new e.Uint16Array(r);var f=new e.Uint32Array(r);var u=new e.Float32Array(r);var c=new e.Float64Array(r);var h=t.STACKTOP|0;var l=t.STACK_MAX|0;var d=t.tempDoublePtr|0;var p=t.ABORT|0;var b=t.cttz_i8|0;var v=t.ctlz_i8|0;var m=t._stderr|0;var g=t.__ZTVN10__cxxabiv120__si_class_type_infoE|0;var y=t.__ZTVN10__cxxabiv117__class_type_infoE|0;var w=t.___progname|0;var _=+t.NaN;var S=+t.Infinity;var k=0;var x=0;var A=0;var M=0;var E=0,I=0,T=0,P=0,R=0,B=0,C=0,O=0,N=0;var j=0;var z=0;var L=0;var F=0;var H=0;var U=0;var D=0;var q=0;var K=0;var Y=0;var V=e.Math.floor;var W=e.Math.abs;var X=e.Math.sqrt;var Z=e.Math.pow;var G=e.Math.cos;var Q=e.Math.sin;var $=e.Math.tan;var J=e.Math.acos;var ee=e.Math.asin;var te=e.Math.atan;var re=e.Math.atan2;var ne=e.Math.exp;var ie=e.Math.log;var ae=e.Math.ceil;var oe=e.Math.imul;var se=t.abort;var fe=t.assert;var ue=t.asmPrintInt;var ce=t.asmPrintFloat;var he=t.min;var le=t.invoke_vi;var de=t.invoke_vii;var pe=t.invoke_ii;var be=t.invoke_viii;var ve=t.invoke_v;var me=t.invoke_iii;var ge=t._strncmp;var ye=t._llvm_va_end;var we=t._sysconf;var _e=t.___cxa_throw;var Se=t._strerror;var ke=t._abort;var xe=t._fprintf;var Ae=t._llvm_eh_exception;var Me=t.___cxa_free_exception;var Ee=t._fflush;var Ie=t.___buildEnvironment;var Te=t.__reallyNegative;var Pe=t._strchr;var Re=t._fputc;var Be=t.___setErrNo;var Ce=t._fwrite;var Oe=t._send;var Ne=t._write;var je=t._exit;var ze=t.___cxa_find_matching_catch;var Le=t.___cxa_allocate_exception;var Fe=t._isspace;var He=t.__formatString;var Ue=t.___resumeException;var De=t._llvm_uadd_with_overflow_i32;var qe=t.___cxa_does_inherit;var Ke=t._getenv;var Ye=t._vfprintf;var Ve=t.___cxa_begin_catch;var We=t.__ZSt18uncaught_exceptionv;var Xe=t._pwrite;var Ze=t.___cxa_call_unexpected;var Ge=t._sbrk;var Qe=t._strerror_r;var $e=t.___errno_location;var Je=t.___gxx_personality_v0;var et=t.___cxa_is_number_type;var tt=t._time;var rt=t.__exit;var nt=t.___cxa_end_catch;function it(e){e=e|0;var t=0;t=h;h=h+e|0;h=h+7>>3<<3;return t|0}function at(){return h|0}function ot(e){e=e|0;h=e}function st(e,t){e=e|0;t=t|0;if((k|0)==0){k=e;x=t}}function ft(e){e=e|0;n[d]=n[e];n[d+1|0]=n[e+1|0];n[d+2|0]=n[e+2|0];n[d+3|0]=n[e+3|0]}function ut(e){e=e|0;n[d]=n[e];n[d+1|0]=n[e+1|0];n[d+2|0]=n[e+2|0];n[d+3|0]=n[e+3|0];n[d+4|0]=n[e+4|0];n[d+5|0]=n[e+5|0];n[d+6|0]=n[e+6|0];n[d+7|0]=n[e+7|0]}function ct(e){e=e|0;j=e}function ht(e){e=e|0;z=e}function lt(e){e=e|0;L=e}function dt(e){e=e|0;F=e}function pt(e){e=e|0;H=e}function bt(e){e=e|0;U=e}function vt(e){e=e|0;D=e}function mt(e){e=e|0;q=e}function gt(e){e=e|0;K=e}function yt(e){e=e|0;Y=e}function wt(){a[170]=y+8;a[172]=g+8;a[176]=g+8}function _t(e,t,r){e=e|0;t=t|0;r=r|0;var i=0;if((r|0)==0){return}else{i=0}do{n[e+i|0]=n[t+i|0]|0;i=i+1|0}while(i>>>0<r>>>0);return}function St(e,t,r){e=e|0;t=t|0;r=r|0;var i=0,a=0;if((r|0)==0){return}else{i=0}do{a=e+i|0;n[a]=n[a]^n[t+i|0];i=i+1|0}while(i>>>0<r>>>0);return}function kt(e){e=e|0;var t=0,r=0,n=0,i=0;t=o[e+1|0]|0;r=o[e+2|0]|0;n=o[e+3|0]|0;i=rn(t<<8|0>>>24|(o[e]|0)|(r<<16|0>>>16)|(n<<24|0>>>8)|(0<<8|0>>>24),0<<8|t>>>24|(0<<16|r>>>16)|(0<<24|n>>>8)|(o[e+4|0]|0)|((o[e+5|0]|0)<<8|0>>>24),0<<16|0>>>16,(o[e+6|0]|0)<<16|0>>>16)|0;n=rn(i,j,0<<24|0>>>8,(o[e+7|0]|0)<<24|0>>>8)|0;return(j=j,n)|0}function xt(e){e=e|0;return(o[e+1|0]|0)<<8|(o[e]|0)|(o[e+2|0]|0)<<16|(o[e+3|0]|0)<<24|0}function At(e,t){e=e|0;t=t|0;n[e]=t&255;n[e+1|0]=t>>>8&255;n[e+2|0]=t>>>16&255;n[e+3|0]=t>>>24&255;return}function Mt(e){e=e|0;a[e+36>>2]=0;a[e+32>>2]=0;a[e>>2]=1779033703;a[e+4>>2]=-1150833019;a[e+8>>2]=1013904242;a[e+12>>2]=-1521486534;a[e+16>>2]=1359893119;a[e+20>>2]=-1694144372;a[e+24>>2]=528734635;a[e+28>>2]=1541459225;return}function Et(e,t,r,n,i,o,s,f,u,c){e=e|0;t=t|0;r=r|0;n=n|0;i=i|0;o=o|0;s=s|0;f=f|0;u=u|0;c=c|0;var h=0,l=0,d=0,p=0,b=0,v=0,m=0,g=0;h=dn(f,0,s,0)|0;l=j;d=0;if(l>>>0>d>>>0|l>>>0==d>>>0&h>>>0>1073741823>>>0){a[($e()|0)>>2]=27;p=-1;return p|0}h=rn(i,o,-1,-1)|0;if((h&i|0)!=0|(j&o|0)!=0|(i|0)==0&(o|0)==0){a[($e()|0)>>2]=22;p=-1;return p|0}do{if(!((33554431/(f>>>0)|0)>>>0<s>>>0|s>>>0>16777215)){h=0;if(h>>>0<o>>>0|h>>>0==o>>>0&(33554431/(s>>>0)|0)>>>0<i>>>0){break}h=s<<7;d=Kt(oe(h,f)|0)|0;if((d|0)==0){p=-1;return p|0}l=Kt(s<<8)|0;do{if((l|0)!=0){b=dn(h,0,i,o)|0;v=Kt(b)|0;if((v|0)==0){Yt(l);break}b=oe(f<<7,s)|0;Dt(e,t,r,n,1,0,d,b);if((f|0)!=0){m=s<<7;g=0;do{It(d+(oe(m,g)|0)|0,s,i,o,v,l);g=g+1|0}while(g>>>0<f>>>0)}Dt(e,t,d,b,1,0,u,c);Yt(v);Yt(l);Yt(d);p=0;return p|0}}while(0);Yt(d);p=-1;return p|0}}while(0);a[($e()|0)>>2]=12;p=-1;return p|0}function It(e,t,r,n,i,a){e=e|0;t=t|0;r=r|0;n=n|0;i=i|0;a=a|0;var o=0,s=0,f=0,u=0,c=0,h=0,l=0,d=0,p=0,b=0;o=t<<7;s=a+o|0;_t(a,e,o);if((r|0)==0&(n|0)==0){_t(e,a,o);return}f=o;u=0;c=0;h=0;do{l=dn(h,c,f,u)|0;_t(i+l|0,a,o);Tt(a,s,t);h=rn(h,c,1,0)|0;c=j}while(c>>>0<n>>>0|c>>>0==n>>>0&h>>>0<r>>>0);if((r|0)==0&(n|0)==0){_t(e,a,o);return}h=rn(r,n,-1,-1)|0;c=j;u=o;f=0;l=0;d=0;do{p=Pt(a,t)|0;b=dn(p&h,j&c,u,f)|0;St(a,i+b|0,o);Tt(a,s,t);d=rn(d,l,1,0)|0;l=j}while(l>>>0<n>>>0|l>>>0==n>>>0&d>>>0<r>>>0);_t(e,a,o);return}function Tt(e,t,r){e=e|0;t=t|0;r=r|0;var n=0,i=0,a=0,o=0,s=0,f=0,u=0;n=h;h=h+64|0;i=n|0;a=r<<1;_t(i,e+((r<<7)-64)|0,64);if((a|0)!=0){o=0;do{s=o<<6;St(i,e+s|0,64);Rt(i);_t(t+s|0,i,64);o=o+1|0}while(o>>>0<a>>>0)}if((r|0)==0){h=n;return}else{f=0}do{_t(e+(f<<6)|0,t+(f<<7)|0,64);f=f+1|0}while(f>>>0<r>>>0);if((r|0)==0){h=n;return}else{u=0}do{_t(e+(u+r<<6)|0,t+(u<<7|64)|0,64);u=u+1|0}while(u>>>0<r>>>0);h=n;return}function Pt(e,t){e=e|0;t=t|0;var r=0;r=kt(e+((t<<7)-64)|0)|0;return(j=j,r)|0}function Rt(e){e=e|0;var t=0,r=0,n=0,i=0,o=0,s=0,f=0,u=0,c=0,l=0,d=0,p=0,b=0,v=0,m=0,g=0,y=0,w=0,_=0,S=0,k=0,x=0,A=0,M=0,E=0,I=0,T=0,P=0,R=0,B=0,C=0,O=0,N=0,j=0,z=0,L=0,F=0,H=0,U=0,D=0,q=0,K=0,Y=0,V=0,W=0,X=0,Z=0,G=0,Q=0,$=0,J=0,ee=0,te=0;t=h;h=h+128|0;r=t|0;n=t+64|0;i=0;do{a[r+(i<<2)>>2]=xt(e+(i<<2)|0)|0;i=i+1|0}while(i>>>0<16);i=r;o=n;Jr(o|0,i|0,64)|0;i=n|0;o=n+48|0;s=n+16|0;f=n+32|0;u=n+20|0;c=n+4|0;l=n+36|0;d=n+52|0;p=n+40|0;b=n+24|0;v=n+56|0;m=n+8|0;g=n+60|0;y=n+44|0;w=n+12|0;_=n+28|0;S=0;k=a[i>>2]|0;x=a[o>>2]|0;A=a[s>>2]|0;M=a[f>>2]|0;E=a[u>>2]|0;I=a[c>>2]|0;T=a[l>>2]|0;P=a[d>>2]|0;R=a[p>>2]|0;B=a[b>>2]|0;C=a[v>>2]|0;O=a[m>>2]|0;N=a[g>>2]|0;j=a[y>>2]|0;z=a[w>>2]|0;L=a[_>>2]|0;do{F=x+k|0;H=(F<<7|F>>>25)^A;F=H+k|0;U=(F<<9|F>>>23)^M;F=U+H|0;D=(F<<13|F>>>19)^x;F=D+U|0;q=(F<<18|F>>>14)^k;F=I+E|0;K=(F<<7|F>>>25)^T;F=K+E|0;Y=(F<<9|F>>>23)^P;F=Y+K|0;V=(F<<13|F>>>19)^I;F=V+Y|0;W=(F<<18|F>>>14)^E;F=B+R|0;X=(F<<7|F>>>25)^C;F=X+R|0;Z=(F<<9|F>>>23)^O;F=Z+X|0;G=(F<<13|F>>>19)^B;F=G+Z|0;Q=(F<<18|F>>>14)^R;F=j+N|0;$=(F<<7|F>>>25)^z;F=$+N|0;J=(F<<9|F>>>23)^L;F=J+$|0;ee=(F<<13|F>>>19)^j;F=ee+J|0;te=(F<<18|F>>>14)^N;F=$+q|0;I=(F<<7|F>>>25)^V;V=I+q|0;O=(V<<9|V>>>23)^Z;Z=O+I|0;z=(Z<<13|Z>>>19)^$;$=z+O|0;k=($<<18|$>>>14)^q;q=H+W|0;B=(q<<7|q>>>25)^G;G=B+W|0;L=(G<<9|G>>>23)^J;J=L+B|0;A=(J<<13|J>>>19)^H;H=A+L|0;E=(H<<18|H>>>14)^W;W=K+Q|0;j=(W<<7|W>>>25)^ee;ee=j+Q|0;M=(ee<<9|ee>>>23)^U;U=M+j|0;T=(U<<13|U>>>19)^K;K=T+M|0;R=(K<<18|K>>>14)^Q;Q=X+te|0;x=(Q<<7|Q>>>25)^D;D=x+te|0;P=(D<<9|D>>>23)^Y;Y=P+x|0;C=(Y<<13|Y>>>19)^X;X=C+P|0;N=(X<<18|X>>>14)^te;S=S+2|0}while(S>>>0<8);a[i>>2]=k;a[o>>2]=x;a[s>>2]=A;a[f>>2]=M;a[u>>2]=E;a[c>>2]=I;a[l>>2]=T;a[d>>2]=P;a[p>>2]=R;a[b>>2]=B;a[v>>2]=C;a[m>>2]=O;a[g>>2]=N;a[y>>2]=j;a[w>>2]=z;a[_>>2]=L;L=r|0;a[L>>2]=(a[L>>2]|0)+(a[n>>2]|0);L=r+4|0;a[L>>2]=(a[L>>2]|0)+(a[n+4>>2]|0);L=r+8|0;a[L>>2]=(a[L>>2]|0)+(a[n+8>>2]|0);L=r+12|0;a[L>>2]=(a[L>>2]|0)+(a[n+12>>2]|0);L=r+16|0;a[L>>2]=(a[L>>2]|0)+(a[n+16>>2]|0);L=r+20|0;a[L>>2]=(a[L>>2]|0)+(a[n+20>>2]|0);L=r+24|0;a[L>>2]=(a[L>>2]|0)+(a[n+24>>2]|0);L=r+28|0;a[L>>2]=(a[L>>2]|0)+(a[n+28>>2]|0);L=r+32|0;a[L>>2]=(a[L>>2]|0)+(a[n+32>>2]|0);L=r+36|0;a[L>>2]=(a[L>>2]|0)+(a[n+36>>2]|0);L=r+40|0;a[L>>2]=(a[L>>2]|0)+(a[n+40>>2]|0);L=r+44|0;a[L>>2]=(a[L>>2]|0)+(a[n+44>>2]|0);L=r+48|0;a[L>>2]=(a[L>>2]|0)+(a[n+48>>2]|0);L=r+52|0;a[L>>2]=(a[L>>2]|0)+(a[n+52>>2]|0);L=r+56|0;a[L>>2]=(a[L>>2]|0)+(a[n+56>>2]|0);L=r+60|0;a[L>>2]=(a[L>>2]|0)+(a[n+60>>2]|0);n=0;do{At(e+(n<<2)|0,a[r+(n<<2)>>2]|0);n=n+1|0}while(n>>>0<16);h=t;return}function Bt(e,t,r){e=e|0;t=t|0;r=r|0;var n=0,i=0,o=0,s=0,f=0,u=0,c=0;n=e+32|0;i=e+36|0;o=a[i>>2]|0;s=o>>>3&63;f=De(o|0,r<<3|0)|0;a[i>>2]=f;if(j){f=n|0;a[f>>2]=(a[f>>2]|0)+1}f=n|0;a[f>>2]=(a[f>>2]|0)+(r>>>29);f=64-s|0;n=e+40+s|0;if(f>>>0>r>>>0){Jr(n|0,t|0,r)|0;return}Jr(n|0,t|0,f)|0;n=e|0;s=e+40|0;Ct(n,s);e=t+f|0;t=r-f|0;if(t>>>0>63){f=t;r=e;while(1){Ct(n,r);i=r+64|0;o=f-64|0;if(o>>>0>63){f=o;r=i}else{u=o;c=i;break}}}else{u=t;c=e}Jr(s|0,c|0,u)|0;return}function Ct(e,t){e=e|0;t=t|0;var r=0,n=0,i=0,o=0,s=0,f=0,u=0,c=0,l=0,d=0,p=0,b=0,v=0,m=0,g=0;r=h;h=h+288|0;n=r|0;i=r+256|0;o=n|0;qt(o,t);t=16;do{s=a[n+(t-2<<2)>>2]|0;f=a[n+(t-15<<2)>>2]|0;a[n+(t<<2)>>2]=(a[n+(t-16<<2)>>2]|0)+(a[n+(t-7<<2)>>2]|0)+((s>>>19|s<<13)^s>>>10^(s>>>17|s<<15))+((f>>>18|f<<14)^f>>>3^(f>>>7|f<<25));t=t+1|0}while((t|0)<64);t=i;f=e;Jr(t|0,f|0,32)|0;f=i+28|0;t=i+16|0;s=a[t>>2]|0;u=i+20|0;c=i+24|0;l=a[c>>2]|0;d=(a[f>>2]|0)+1116352408+(a[o>>2]|0)+((s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7))+((l^a[u>>2])&s^l)|0;l=i|0;s=a[l>>2]|0;o=i+4|0;p=a[o>>2]|0;b=i+8|0;v=a[b>>2]|0;m=i+12|0;a[m>>2]=(a[m>>2]|0)+d;g=((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+d+((v|p)&s|v&p)|0;a[f>>2]=g;p=a[m>>2]|0;v=a[u>>2]|0;s=(a[c>>2]|0)+1899447441+(a[n+4>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[t>>2])&p^v)|0;v=a[l>>2]|0;p=a[o>>2]|0;a[b>>2]=(a[b>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((p|v)&g|p&v)|0;a[c>>2]=d;v=a[b>>2]|0;p=a[t>>2]|0;g=(a[u>>2]|0)-1245643825+(a[n+8>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[m>>2])&v^p)|0;p=a[f>>2]|0;v=a[l>>2]|0;a[o>>2]=(a[o>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((v|p)&d|v&p)|0;a[u>>2]=s;p=a[o>>2]|0;v=a[m>>2]|0;d=(a[t>>2]|0)-373957723+(a[n+12>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[b>>2])&p^v)|0;v=a[c>>2]|0;p=a[f>>2]|0;a[l>>2]=(a[l>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((p|v)&s|p&v)|0;a[t>>2]=g;v=a[l>>2]|0;p=a[b>>2]|0;s=(a[m>>2]|0)+961987163+(a[n+16>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[o>>2])&v^p)|0;p=a[u>>2]|0;v=a[c>>2]|0;a[f>>2]=(a[f>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((v|p)&g|v&p)|0;a[m>>2]=d;p=a[f>>2]|0;v=a[o>>2]|0;g=(a[b>>2]|0)+1508970993+(a[n+20>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[l>>2])&p^v)|0;v=a[t>>2]|0;p=a[u>>2]|0;a[c>>2]=(a[c>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((p|v)&d|p&v)|0;a[b>>2]=s;v=a[c>>2]|0;p=a[l>>2]|0;d=(a[o>>2]|0)-1841331548+(a[n+24>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[f>>2])&v^p)|0;p=a[m>>2]|0;v=a[t>>2]|0;a[u>>2]=(a[u>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|p)&s|v&p)|0;a[o>>2]=g;p=a[u>>2]|0;v=a[f>>2]|0;s=(a[l>>2]|0)-1424204075+(a[n+28>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[c>>2])&p^v)|0;v=a[b>>2]|0;p=a[m>>2]|0;a[t>>2]=(a[t>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((p|v)&g|p&v)|0;a[l>>2]=d;v=a[t>>2]|0;p=a[c>>2]|0;g=(a[f>>2]|0)-670586216+(a[n+32>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[u>>2])&v^p)|0;p=a[o>>2]|0;v=a[b>>2]|0;a[m>>2]=(a[m>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((v|p)&d|v&p)|0;a[f>>2]=s;p=a[m>>2]|0;v=a[u>>2]|0;d=(a[c>>2]|0)+310598401+(a[n+36>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[t>>2])&p^v)|0;v=a[l>>2]|0;p=a[o>>2]|0;a[b>>2]=(a[b>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((p|v)&s|p&v)|0;a[c>>2]=g;v=a[b>>2]|0;p=a[t>>2]|0;s=(a[u>>2]|0)+607225278+(a[n+40>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[m>>2])&v^p)|0;p=a[f>>2]|0;v=a[l>>2]|0;a[o>>2]=(a[o>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((v|p)&g|v&p)|0;a[u>>2]=d;p=a[o>>2]|0;v=a[m>>2]|0;g=(a[t>>2]|0)+1426881987+(a[n+44>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[b>>2])&p^v)|0;v=a[c>>2]|0;p=a[f>>2]|0;a[l>>2]=(a[l>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((p|v)&d|p&v)|0;a[t>>2]=s;v=a[l>>2]|0;p=a[b>>2]|0;d=(a[m>>2]|0)+1925078388+(a[n+48>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[o>>2])&v^p)|0;p=a[u>>2]|0;v=a[c>>2]|0;a[f>>2]=(a[f>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|p)&s|v&p)|0;a[m>>2]=g;p=a[f>>2]|0;v=a[o>>2]|0;s=(a[b>>2]|0)-2132889090+(a[n+52>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[l>>2])&p^v)|0;v=a[t>>2]|0;p=a[u>>2]|0;a[c>>2]=(a[c>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((p|v)&g|p&v)|0;a[b>>2]=d;v=a[c>>2]|0;p=a[l>>2]|0;g=(a[o>>2]|0)-1680079193+(a[n+56>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[f>>2])&v^p)|0;p=a[m>>2]|0;v=a[t>>2]|0;a[u>>2]=(a[u>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((v|p)&d|v&p)|0;a[o>>2]=s;p=a[u>>2]|0;v=a[f>>2]|0;d=(a[l>>2]|0)-1046744716+(a[n+60>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[c>>2])&p^v)|0;v=a[b>>2]|0;p=a[m>>2]|0;a[t>>2]=(a[t>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((p|v)&s|p&v)|0;a[l>>2]=g;v=a[t>>2]|0;p=a[c>>2]|0;s=(a[f>>2]|0)-459576895+(a[n+64>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[u>>2])&v^p)|0;p=a[o>>2]|0;v=a[b>>2]|0;a[m>>2]=(a[m>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((v|p)&g|v&p)|0;a[f>>2]=d;p=a[m>>2]|0;v=a[u>>2]|0;g=(a[c>>2]|0)-272742522+(a[n+68>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[t>>2])&p^v)|0;v=a[l>>2]|0;p=a[o>>2]|0;a[b>>2]=(a[b>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((p|v)&d|p&v)|0;a[c>>2]=s;v=a[b>>2]|0;p=a[t>>2]|0;d=(a[u>>2]|0)+264347078+(a[n+72>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[m>>2])&v^p)|0;p=a[f>>2]|0;v=a[l>>2]|0;a[o>>2]=(a[o>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|p)&s|v&p)|0;a[u>>2]=g;p=a[o>>2]|0;v=a[m>>2]|0;s=(a[t>>2]|0)+604807628+(a[n+76>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[b>>2])&p^v)|0;v=a[c>>2]|0;p=a[f>>2]|0;a[l>>2]=(a[l>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((p|v)&g|p&v)|0;a[t>>2]=d;v=a[l>>2]|0;p=a[b>>2]|0;g=(a[m>>2]|0)+770255983+(a[n+80>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[o>>2])&v^p)|0;p=a[u>>2]|0;v=a[c>>2]|0;a[f>>2]=(a[f>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((v|p)&d|v&p)|0;a[m>>2]=s;p=a[f>>2]|0;v=a[o>>2]|0;d=(a[b>>2]|0)+1249150122+(a[n+84>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[l>>2])&p^v)|0;v=a[t>>2]|0;p=a[u>>2]|0;a[c>>2]=(a[c>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((p|v)&s|p&v)|0;a[b>>2]=g;v=a[c>>2]|0;p=a[l>>2]|0;s=(a[o>>2]|0)+1555081692+(a[n+88>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[f>>2])&v^p)|0;p=a[m>>2]|0;v=a[t>>2]|0;a[u>>2]=(a[u>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((v|p)&g|v&p)|0;a[o>>2]=d;p=a[u>>2]|0;v=a[f>>2]|0;g=(a[l>>2]|0)+1996064986+(a[n+92>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[c>>2])&p^v)|0;v=a[b>>2]|0;p=a[m>>2]|0;a[t>>2]=(a[t>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((p|v)&d|p&v)|0;a[l>>2]=s;v=a[t>>2]|0;p=a[c>>2]|0;d=(a[f>>2]|0)-1740746414+(a[n+96>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[u>>2])&v^p)|0;p=a[o>>2]|0;v=a[b>>2]|0;a[m>>2]=(a[m>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|p)&s|v&p)|0;a[f>>2]=g;p=a[m>>2]|0;v=a[u>>2]|0;s=(a[c>>2]|0)-1473132947+(a[n+100>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[t>>2])&p^v)|0;v=a[l>>2]|0;p=a[o>>2]|0;a[b>>2]=(a[b>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((p|v)&g|p&v)|0;a[c>>2]=d;v=a[b>>2]|0;p=a[t>>2]|0;g=(a[u>>2]|0)-1341970488+(a[n+104>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[m>>2])&v^p)|0;p=a[f>>2]|0;v=a[l>>2]|0;a[o>>2]=(a[o>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((v|p)&d|v&p)|0;a[u>>2]=s;p=a[o>>2]|0;v=a[m>>2]|0;d=(a[t>>2]|0)-1084653625+(a[n+108>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[b>>2])&p^v)|0;v=a[c>>2]|0;p=a[f>>2]|0;a[l>>2]=(a[l>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((p|v)&s|p&v)|0;a[t>>2]=g;v=a[l>>2]|0;p=a[b>>2]|0;s=(a[m>>2]|0)-958395405+(a[n+112>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[o>>2])&v^p)|0;p=a[u>>2]|0;v=a[c>>2]|0;a[f>>2]=(a[f>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((v|p)&g|v&p)|0;a[m>>2]=d;p=a[f>>2]|0;v=a[o>>2]|0;g=(a[b>>2]|0)-710438585+(a[n+116>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[l>>2])&p^v)|0;v=a[t>>2]|0;p=a[u>>2]|0;a[c>>2]=(a[c>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((p|v)&d|p&v)|0;a[b>>2]=s;v=a[c>>2]|0;p=a[l>>2]|0;d=(a[o>>2]|0)+113926993+(a[n+120>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[f>>2])&v^p)|0;p=a[m>>2]|0;v=a[t>>2]|0;a[u>>2]=(a[u>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|p)&s|v&p)|0;a[o>>2]=g;p=a[u>>2]|0;v=a[f>>2]|0;s=(a[l>>2]|0)+338241895+(a[n+124>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[c>>2])&p^v)|0;v=a[b>>2]|0;p=a[m>>2]|0;a[t>>2]=(a[t>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((p|v)&g|p&v)|0;a[l>>2]=d;v=a[t>>2]|0;p=a[c>>2]|0;g=(a[f>>2]|0)+666307205+(a[n+128>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[u>>2])&v^p)|0;p=a[o>>2]|0;v=a[b>>2]|0;a[m>>2]=(a[m>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((v|p)&d|v&p)|0;a[f>>2]=s;p=a[m>>2]|0;v=a[u>>2]|0;d=(a[c>>2]|0)+773529912+(a[n+132>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[t>>2])&p^v)|0;v=a[l>>2]|0;p=a[o>>2]|0;a[b>>2]=(a[b>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((p|v)&s|p&v)|0;a[c>>2]=g;v=a[b>>2]|0;p=a[t>>2]|0;s=(a[u>>2]|0)+1294757372+(a[n+136>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[m>>2])&v^p)|0;p=a[f>>2]|0;v=a[l>>2]|0;a[o>>2]=(a[o>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((v|p)&g|v&p)|0;a[u>>2]=d;p=a[o>>2]|0;v=a[m>>2]|0;g=(a[t>>2]|0)+1396182291+(a[n+140>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[b>>2])&p^v)|0;v=a[c>>2]|0;p=a[f>>2]|0;a[l>>2]=(a[l>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((p|v)&d|p&v)|0;a[t>>2]=s;v=a[l>>2]|0;p=a[b>>2]|0;d=(a[m>>2]|0)+1695183700+(a[n+144>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[o>>2])&v^p)|0;p=a[u>>2]|0;v=a[c>>2]|0;a[f>>2]=(a[f>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|p)&s|v&p)|0;a[m>>2]=g;p=a[f>>2]|0;v=a[o>>2]|0;s=(a[b>>2]|0)+1986661051+(a[n+148>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[l>>2])&p^v)|0;v=a[t>>2]|0;p=a[u>>2]|0;a[c>>2]=(a[c>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((p|v)&g|p&v)|0;a[b>>2]=d;v=a[c>>2]|0;p=a[l>>2]|0;g=(a[o>>2]|0)-2117940946+(a[n+152>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[f>>2])&v^p)|0;p=a[m>>2]|0;v=a[t>>2]|0;a[u>>2]=(a[u>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((v|p)&d|v&p)|0;a[o>>2]=s;p=a[u>>2]|0;v=a[f>>2]|0;d=(a[l>>2]|0)-1838011259+(a[n+156>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[c>>2])&p^v)|0;v=a[b>>2]|0;p=a[m>>2]|0;a[t>>2]=(a[t>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((p|v)&s|p&v)|0;a[l>>2]=g;v=a[t>>2]|0;p=a[c>>2]|0;s=(a[f>>2]|0)-1564481375+(a[n+160>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[u>>2])&v^p)|0;p=a[o>>2]|0;v=a[b>>2]|0;a[m>>2]=(a[m>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((v|p)&g|v&p)|0;a[f>>2]=d;p=a[m>>2]|0;v=a[u>>2]|0;g=(a[c>>2]|0)-1474664885+(a[n+164>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[t>>2])&p^v)|0;v=a[l>>2]|0;p=a[o>>2]|0;a[b>>2]=(a[b>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((p|v)&d|p&v)|0;a[c>>2]=s;v=a[b>>2]|0;p=a[t>>2]|0;d=(a[u>>2]|0)-1035236496+(a[n+168>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[m>>2])&v^p)|0;p=a[f>>2]|0;v=a[l>>2]|0;a[o>>2]=(a[o>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|p)&s|v&p)|0;a[u>>2]=g;p=a[o>>2]|0;v=a[m>>2]|0;s=(a[t>>2]|0)-949202525+(a[n+172>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[b>>2])&p^v)|0;v=a[c>>2]|0;p=a[f>>2]|0;a[l>>2]=(a[l>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((p|v)&g|p&v)|0;a[t>>2]=d;v=a[l>>2]|0;p=a[b>>2]|0;g=(a[m>>2]|0)-778901479+(a[n+176>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[o>>2])&v^p)|0;p=a[u>>2]|0;v=a[c>>2]|0;a[f>>2]=(a[f>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((v|p)&d|v&p)|0;a[m>>2]=s;p=a[f>>2]|0;v=a[o>>2]|0;d=(a[b>>2]|0)-694614492+(a[n+180>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[l>>2])&p^v)|0;v=a[t>>2]|0;p=a[u>>2]|0;a[c>>2]=(a[c>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((p|v)&s|p&v)|0;a[b>>2]=g;v=a[c>>2]|0;p=a[l>>2]|0;s=(a[o>>2]|0)-200395387+(a[n+184>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[f>>2])&v^p)|0;p=a[m>>2]|0;v=a[t>>2]|0;a[u>>2]=(a[u>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((v|p)&g|v&p)|0;a[o>>2]=d;p=a[u>>2]|0;v=a[f>>2]|0;g=(a[l>>2]|0)+275423344+(a[n+188>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[c>>2])&p^v)|0;v=a[b>>2]|0;p=a[m>>2]|0;a[t>>2]=(a[t>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((p|v)&d|p&v)|0;a[l>>2]=s;v=a[t>>2]|0;p=a[c>>2]|0;d=(a[f>>2]|0)+430227734+(a[n+192>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[u>>2])&v^p)|0;p=a[o>>2]|0;v=a[b>>2]|0;a[m>>2]=(a[m>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|p)&s|v&p)|0;a[f>>2]=g;p=a[m>>2]|0;v=a[u>>2]|0;s=(a[c>>2]|0)+506948616+(a[n+196>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[t>>2])&p^v)|0;v=a[l>>2]|0;p=a[o>>2]|0;a[b>>2]=(a[b>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((p|v)&g|p&v)|0;a[c>>2]=d;v=a[b>>2]|0;p=a[t>>2]|0;g=(a[u>>2]|0)+659060556+(a[n+200>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[m>>2])&v^p)|0;p=a[f>>2]|0;v=a[l>>2]|0;a[o>>2]=(a[o>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((v|p)&d|v&p)|0;a[u>>2]=s;p=a[o>>2]|0;v=a[m>>2]|0;d=(a[t>>2]|0)+883997877+(a[n+204>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[b>>2])&p^v)|0;v=a[c>>2]|0;p=a[f>>2]|0;a[l>>2]=(a[l>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((p|v)&s|p&v)|0;a[t>>2]=g;v=a[l>>2]|0;p=a[b>>2]|0;s=(a[m>>2]|0)+958139571+(a[n+208>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[o>>2])&v^p)|0;p=a[u>>2]|0;v=a[c>>2]|0;a[f>>2]=(a[f>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((v|p)&g|v&p)|0;a[m>>2]=d;p=a[f>>2]|0;v=a[o>>2]|0;g=(a[b>>2]|0)+1322822218+(a[n+212>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[l>>2])&p^v)|0;v=a[t>>2]|0;p=a[u>>2]|0;a[c>>2]=(a[c>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((p|v)&d|p&v)|0;a[b>>2]=s;v=a[c>>2]|0;p=a[l>>2]|0;d=(a[o>>2]|0)+1537002063+(a[n+216>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[f>>2])&v^p)|0;p=a[m>>2]|0;v=a[t>>2]|0;a[u>>2]=(a[u>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|p)&s|v&p)|0;a[o>>2]=g;p=a[u>>2]|0;v=a[f>>2]|0;s=(a[l>>2]|0)+1747873779+(a[n+220>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[c>>2])&p^v)|0;v=a[b>>2]|0;p=a[m>>2]|0;a[t>>2]=(a[t>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((p|v)&g|p&v)|0;a[l>>2]=d;v=a[t>>2]|0;p=a[c>>2]|0;g=(a[f>>2]|0)+1955562222+(a[n+224>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[u>>2])&v^p)|0;p=a[o>>2]|0;v=a[b>>2]|0;a[m>>2]=(a[m>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((v|p)&d|v&p)|0;a[f>>2]=s;p=a[m>>2]|0;v=a[u>>2]|0;d=(a[c>>2]|0)+2024104815+(a[n+228>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[t>>2])&p^v)|0;v=a[l>>2]|0;p=a[o>>2]|0;a[b>>2]=(a[b>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((p|v)&s|p&v)|0;a[c>>2]=g;v=a[b>>2]|0;p=a[t>>2]|0;s=(a[u>>2]|0)-2067236844+(a[n+232>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[m>>2])&v^p)|0;p=a[f>>2]|0;v=a[l>>2]|0;a[o>>2]=(a[o>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((v|p)&g|v&p)|0;a[u>>2]=d;p=a[o>>2]|0;v=a[m>>2]|0;g=(a[t>>2]|0)-1933114872+(a[n+236>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[b>>2])&p^v)|0;v=a[c>>2]|0;p=a[f>>2]|0;a[l>>2]=(a[l>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((p|v)&d|p&v)|0;a[t>>2]=s;v=a[l>>2]|0;p=a[b>>2]|0;d=(a[m>>2]|0)-1866530822+(a[n+240>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[o>>2])&v^p)|0;p=a[u>>2]|0;v=a[c>>2]|0;a[f>>2]=(a[f>>2]|0)+d;g=d+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((v|p)&s|v&p)|0;a[m>>2]=g;p=a[f>>2]|0;v=a[o>>2]|0;s=(a[b>>2]|0)-1538233109+(a[n+244>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^a[l>>2])&p^v)|0;v=a[t>>2]|0;p=a[u>>2]|0;a[c>>2]=(a[c>>2]|0)+s;d=s+((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+((p|v)&g|p&v)|0;a[b>>2]=d;v=a[c>>2]|0;p=a[l>>2]|0;g=(a[o>>2]|0)-1090935817+(a[n+248>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^a[f>>2])&v^p)|0;p=a[m>>2]|0;v=a[t>>2]|0;a[u>>2]=(a[u>>2]|0)+g;s=g+((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+((v|p)&d|v&p)|0;a[o>>2]=s;o=a[u>>2]|0;u=a[f>>2]|0;f=(a[l>>2]|0)-965641998+(a[n+252>>2]|0)+((o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+((u^a[c>>2])&o^u)|0;u=a[b>>2]|0;b=a[m>>2]|0;a[t>>2]=(a[t>>2]|0)+f;t=f+((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+((b|u)&s|b&u)|0;a[l>>2]=t;a[e>>2]=(a[e>>2]|0)+t;t=e+4|0;a[t>>2]=(a[t>>2]|0)+(a[i+4>>2]|0);t=e+8|0;a[t>>2]=(a[t>>2]|0)+(a[i+8>>2]|0);t=e+12|0;a[t>>2]=(a[t>>2]|0)+(a[i+12>>2]|0);t=e+16|0;a[t>>2]=(a[t>>2]|0)+(a[i+16>>2]|0);t=e+20|0;a[t>>2]=(a[t>>2]|0)+(a[i+20>>2]|0);t=e+24|0;a[t>>2]=(a[t>>2]|0)+(a[i+24>>2]|0);t=e+28|0;a[t>>2]=(a[t>>2]|0)+(a[i+28>>2]|0);h=r;return}function Ot(e,t){e=e|0;t=t|0;n[e+3|0]=t&255;n[e+2|0]=t>>>8&255;n[e+1|0]=t>>>16&255;n[e]=t>>>24&255;return}function Nt(e){e=e|0;return(o[e+2|0]|0)<<8|(o[e+3|0]|0)|(o[e+1|0]|0)<<16|(o[e]|0)<<24|0}function jt(e,t){e=e|0;t=t|0;zt(t);Lt(e,t|0,32);en(t|0,0,104);return}function zt(e){e=e|0;var t=0,r=0,n=0;t=h;h=h+8|0;r=t|0;Lt(r,e+32|0,8);n=(a[e+36>>2]|0)>>>3&63;Bt(e,720,(n>>>0<56?56:120)-n|0);Bt(e,r,8);h=t;return}function Lt(e,t,r){e=e|0;t=t|0;r=r|0;var n=0,i=0;n=r>>>2;if((n|0)==0){return}else{i=0}do{Ot(e+(i<<2)|0,a[t+(i<<2)>>2]|0);i=i+1|0}while(i>>>0<n>>>0);return}function Ft(e,t,r){e=e|0;t=t|0;r=r|0;var i=0,a=0,o=0,s=0,f=0,u=0,c=0;i=h;h=h+96|0;a=i|0;if(r>>>0>64){o=e|0;Mt(o);Bt(o,t,r);s=i+64|0;jt(s,o);f=s;u=32}else{f=t;u=r}r=e|0;Mt(r);t=a|0;en(t|0,54,64);if((u|0)!=0){s=0;do{o=a+s|0;n[o]=n[o]^n[f+s|0];s=s+1|0}while(s>>>0<u>>>0)}Bt(r,t,64);r=e+104|0;Mt(r);en(t|0,92,64);if((u|0)==0){Bt(r,t,64);h=i;return}else{c=0}do{e=a+c|0;n[e]=n[e]^n[f+c|0];c=c+1|0}while(c>>>0<u>>>0);Bt(r,t,64);h=i;return}function Ht(e,t,r){e=e|0;t=t|0;r=r|0;Bt(e|0,t,r);return}function Ut(e,t){e=e|0;t=t|0;var r=0,n=0,i=0;r=h;h=h+32|0;n=r|0;jt(n,t|0);i=t+104|0;Bt(i,n,32);jt(e,i);h=r;return}function Dt(e,t,r,i,a,o,s,f){e=e|0;t=t|0;r=r|0;i=i|0;a=a|0;o=o|0;s=s|0;f=f|0;var u=0,c=0,l=0,d=0,p=0,b=0,v=0,m=0,g=0,y=0,w=0,_=0,S=0,k=0;u=h;h=h+488|0;c=u|0;l=u+208|0;d=u+424|0;p=u+456|0;Ft(c,e,t);Ht(c,r,i);if((f|0)==0){h=u;return}i=u+416|0;r=l;b=c;c=d|0;v=p|0;m=0;g=o>>>0<m>>>0|o>>>0==m>>>0&a>>>0<2>>>0;m=0;y=0;do{m=m+1|0;Ot(i,m);Jr(r|0,b|0,208)|0;Ht(l,i,4);Ut(c,l);Jr(v|0,c|0,32)|0;if(!g){w=0;_=2;do{Ft(l,e,t);Ht(l,c,32);Ut(c,l);S=0;do{k=p+S|0;n[k]=n[k]^n[d+S|0];S=S+1|0}while((S|0)<32);_=rn(_,w,1,0)|0;w=j}while(!(w>>>0>o>>>0|w>>>0==o>>>0&_>>>0>a>>>0))}_=f-y|0;w=_>>>0>32?32:_;_=s+y|0;Jr(_|0,v|0,w)|0;y=m<<5}while(y>>>0<f>>>0);h=u;return}function qt(e,t){e=e|0;t=t|0;var r=0;r=0;do{a[e+(r<<2)>>2]=Nt(t+(r<<2)|0)|0;r=r+1|0}while(r>>>0<16);return}function Kt(e){e=e|0;var t=0,r=0,n=0,i=0,o=0,s=0,f=0,u=0,c=0,h=0,l=0,d=0,p=0,b=0,v=0,m=0,g=0,y=0,w=0,_=0,S=0,k=0,x=0,A=0,M=0,E=0,I=0,T=0,P=0,R=0,B=0,C=0,O=0,N=0,j=0,z=0,L=0,F=0,H=0,U=0,D=0,q=0,K=0,Y=0,V=0,W=0,X=0,Z=0,G=0,Q=0,$=0,J=0,ee=0,te=0,re=0,ne=0,ie=0,ae=0,oe=0,se=0,fe=0,ue=0,ce=0,he=0,le=0,de=0,pe=0,be=0,ve=0,me=0,ge=0,ye=0,_e=0,Se=0,xe=0,Ae=0,Me=0,Ee=0,Ie=0,Te=0,Pe=0,Re=0,Be=0,Ce=0,Oe=0;do{if(e>>>0<245){if(e>>>0<11){t=16}else{t=e+11&-8}r=t>>>3;n=a[208]|0;i=n>>>(r>>>0);if((i&3|0)!=0){o=(i&1^1)+r|0;s=o<<1;f=872+(s<<2)|0;u=872+(s+2<<2)|0;s=a[u>>2]|0;c=s+8|0;h=a[c>>2]|0;do{if((f|0)==(h|0)){a[208]=n&~(1<<o)}else{if(h>>>0<(a[212]|0)>>>0){ke();return 0}l=h+12|0;if((a[l>>2]|0)==(s|0)){a[l>>2]=f;a[u>>2]=h;break}else{ke();return 0}}}while(0);h=o<<3;a[s+4>>2]=h|3;u=s+(h|4)|0;a[u>>2]=a[u>>2]|1;d=c;return d|0}if(t>>>0<=(a[210]|0)>>>0){p=t;break}if((i|0)!=0){u=2<<r;h=i<<r&(u|-u);u=(h&-h)-1|0;h=u>>>12&16;f=u>>>(h>>>0);u=f>>>5&8;l=f>>>(u>>>0);f=l>>>2&4;b=l>>>(f>>>0);l=b>>>1&2;v=b>>>(l>>>0);b=v>>>1&1;m=(u|h|f|l|b)+(v>>>(b>>>0))|0;b=m<<1;v=872+(b<<2)|0;l=872+(b+2<<2)|0;b=a[l>>2]|0;f=b+8|0;h=a[f>>2]|0;do{if((v|0)==(h|0)){a[208]=n&~(1<<m)}else{if(h>>>0<(a[212]|0)>>>0){ke();return 0}u=h+12|0;if((a[u>>2]|0)==(b|0)){a[u>>2]=v;a[l>>2]=h;break}else{ke();return 0}}}while(0);h=m<<3;l=h-t|0;a[b+4>>2]=t|3;v=b;n=v+t|0;a[v+(t|4)>>2]=l|1;a[v+h>>2]=l;h=a[210]|0;if((h|0)!=0){v=a[213]|0;r=h>>>3;h=r<<1;i=872+(h<<2)|0;c=a[208]|0;s=1<<r;do{if((c&s|0)==0){a[208]=c|s;g=i;y=872+(h+2<<2)|0}else{r=872+(h+2<<2)|0;o=a[r>>2]|0;if(o>>>0>=(a[212]|0)>>>0){g=o;y=r;break}ke();return 0}}while(0);a[y>>2]=v;a[g+12>>2]=v;a[v+8>>2]=g;a[v+12>>2]=i}a[210]=l;a[213]=n;d=f;return d|0}h=a[209]|0;if((h|0)==0){p=t;break}s=(h&-h)-1|0;h=s>>>12&16;c=s>>>(h>>>0);s=c>>>5&8;b=c>>>(s>>>0);c=b>>>2&4;m=b>>>(c>>>0);b=m>>>1&2;r=m>>>(b>>>0);m=r>>>1&1;o=a[1136+((s|h|c|b|m)+(r>>>(m>>>0))<<2)>>2]|0;m=o;r=o;b=(a[o+4>>2]&-8)-t|0;while(1){o=a[m+16>>2]|0;if((o|0)==0){c=a[m+20>>2]|0;if((c|0)==0){break}else{w=c}}else{w=o}o=(a[w+4>>2]&-8)-t|0;c=o>>>0<b>>>0;m=w;r=c?w:r;b=c?o:b}m=r;f=a[212]|0;if(m>>>0<f>>>0){ke();return 0}n=m+t|0;l=n;if(m>>>0>=n>>>0){ke();return 0}n=a[r+24>>2]|0;i=a[r+12>>2]|0;do{if((i|0)==(r|0)){v=r+20|0;o=a[v>>2]|0;if((o|0)==0){c=r+16|0;h=a[c>>2]|0;if((h|0)==0){_=0;break}else{S=h;k=c}}else{S=o;k=v}while(1){v=S+20|0;o=a[v>>2]|0;if((o|0)!=0){S=o;k=v;continue}v=S+16|0;o=a[v>>2]|0;if((o|0)==0){break}else{S=o;k=v}}if(k>>>0<f>>>0){ke();return 0}else{a[k>>2]=0;_=S;break}}else{v=a[r+8>>2]|0;if(v>>>0<f>>>0){ke();return 0}o=v+12|0;if((a[o>>2]|0)!=(r|0)){ke();return 0}c=i+8|0;if((a[c>>2]|0)==(r|0)){a[o>>2]=i;a[c>>2]=v;_=i;break}else{ke();return 0}}}while(0);e:do{if((n|0)!=0){i=r+28|0;f=1136+(a[i>>2]<<2)|0;do{if((r|0)==(a[f>>2]|0)){a[f>>2]=_;if((_|0)!=0){break}a[209]=a[209]&~(1<<a[i>>2]);break e}else{if(n>>>0<(a[212]|0)>>>0){ke();return 0}v=n+16|0;if((a[v>>2]|0)==(r|0)){a[v>>2]=_}else{a[n+20>>2]=_}if((_|0)==0){break e}}}while(0);if(_>>>0<(a[212]|0)>>>0){ke();return 0}a[_+24>>2]=n;i=a[r+16>>2]|0;do{if((i|0)!=0){if(i>>>0<(a[212]|0)>>>0){ke();return 0}else{a[_+16>>2]=i;a[i+24>>2]=_;break}}}while(0);i=a[r+20>>2]|0;if((i|0)==0){break}if(i>>>0<(a[212]|0)>>>0){ke();return 0}else{a[_+20>>2]=i;a[i+24>>2]=_;break}}}while(0);if(b>>>0<16){n=b+t|0;a[r+4>>2]=n|3;i=m+(n+4)|0;a[i>>2]=a[i>>2]|1}else{a[r+4>>2]=t|3;a[m+(t|4)>>2]=b|1;a[m+(b+t)>>2]=b;i=a[210]|0;if((i|0)!=0){n=a[213]|0;f=i>>>3;i=f<<1;v=872+(i<<2)|0;c=a[208]|0;o=1<<f;do{if((c&o|0)==0){a[208]=c|o;x=v;A=872+(i+2<<2)|0}else{f=872+(i+2<<2)|0;h=a[f>>2]|0;if(h>>>0>=(a[212]|0)>>>0){x=h;A=f;break}ke();return 0}}while(0);a[A>>2]=n;a[x+12>>2]=n;a[n+8>>2]=x;a[n+12>>2]=v}a[210]=b;a[213]=l}i=r+8|0;if((i|0)==0){p=t;break}else{d=i}return d|0}else{if(e>>>0>4294967231){p=-1;break}i=e+11|0;o=i&-8;c=a[209]|0;if((c|0)==0){p=o;break}m=-o|0;f=i>>>8;do{if((f|0)==0){M=0}else{if(o>>>0>16777215){M=31;break}i=(f+1048320|0)>>>16&8;h=f<<i;s=(h+520192|0)>>>16&4;u=h<<s;h=(u+245760|0)>>>16&2;E=14-(s|i|h)+(u<<h>>>15)|0;M=o>>>((E+7|0)>>>0)&1|E<<1}}while(0);f=a[1136+(M<<2)>>2]|0;e:do{if((f|0)==0){I=0;T=m;P=0}else{if((M|0)==31){R=0}else{R=25-(M>>>1)|0}r=0;l=m;b=f;v=o<<R;n=0;while(1){E=a[b+4>>2]&-8;h=E-o|0;if(h>>>0<l>>>0){if((E|0)==(o|0)){I=b;T=h;P=b;break e}else{B=b;C=h}}else{B=r;C=l}h=a[b+20>>2]|0;E=a[b+16+(v>>>31<<2)>>2]|0;u=(h|0)==0|(h|0)==(E|0)?n:h;if((E|0)==0){I=B;T=C;P=u;break}else{r=B;l=C;b=E;v=v<<1;n=u}}}}while(0);if((P|0)==0&(I|0)==0){f=2<<M;m=c&(f|-f);if((m|0)==0){p=o;break}f=(m&-m)-1|0;m=f>>>12&16;n=f>>>(m>>>0);f=n>>>5&8;v=n>>>(f>>>0);n=v>>>2&4;b=v>>>(n>>>0);v=b>>>1&2;l=b>>>(v>>>0);b=l>>>1&1;O=a[1136+((f|m|n|v|b)+(l>>>(b>>>0))<<2)>>2]|0}else{O=P}if((O|0)==0){N=T;j=I}else{b=O;l=T;v=I;while(1){n=(a[b+4>>2]&-8)-o|0;m=n>>>0<l>>>0;f=m?n:l;n=m?b:v;m=a[b+16>>2]|0;if((m|0)!=0){b=m;l=f;v=n;continue}m=a[b+20>>2]|0;if((m|0)==0){N=f;j=n;break}else{b=m;l=f;v=n}}}if((j|0)==0){p=o;break}if(N>>>0>=((a[210]|0)-o|0)>>>0){p=o;break}v=j;l=a[212]|0;if(v>>>0<l>>>0){ke();return 0}b=v+o|0;c=b;if(v>>>0>=b>>>0){ke();return 0}n=a[j+24>>2]|0;f=a[j+12>>2]|0;do{if((f|0)==(j|0)){m=j+20|0;r=a[m>>2]|0;if((r|0)==0){u=j+16|0;E=a[u>>2]|0;if((E|0)==0){z=0;break}else{L=E;F=u}}else{L=r;F=m}while(1){m=L+20|0;r=a[m>>2]|0;if((r|0)!=0){L=r;F=m;continue}m=L+16|0;r=a[m>>2]|0;if((r|0)==0){break}else{L=r;F=m}}if(F>>>0<l>>>0){ke();return 0}else{a[F>>2]=0;z=L;break}}else{m=a[j+8>>2]|0;if(m>>>0<l>>>0){ke();return 0}r=m+12|0;if((a[r>>2]|0)!=(j|0)){ke();return 0}u=f+8|0;if((a[u>>2]|0)==(j|0)){a[r>>2]=f;a[u>>2]=m;z=f;break}else{ke();return 0}}}while(0);e:do{if((n|0)!=0){f=j+28|0;l=1136+(a[f>>2]<<2)|0;do{if((j|0)==(a[l>>2]|0)){a[l>>2]=z;if((z|0)!=0){break}a[209]=a[209]&~(1<<a[f>>2]);break e}else{if(n>>>0<(a[212]|0)>>>0){ke();return 0}m=n+16|0;if((a[m>>2]|0)==(j|0)){a[m>>2]=z}else{a[n+20>>2]=z}if((z|0)==0){break e}}}while(0);if(z>>>0<(a[212]|0)>>>0){ke();return 0}a[z+24>>2]=n;f=a[j+16>>2]|0;do{if((f|0)!=0){if(f>>>0<(a[212]|0)>>>0){ke();return 0}else{a[z+16>>2]=f;a[f+24>>2]=z;break}}}while(0);f=a[j+20>>2]|0;if((f|0)==0){break}if(f>>>0<(a[212]|0)>>>0){ke();return 0}else{a[z+20>>2]=f;a[f+24>>2]=z;break}}}while(0);do{if(N>>>0<16){n=N+o|0;a[j+4>>2]=n|3;f=v+(n+4)|0;a[f>>2]=a[f>>2]|1}else{a[j+4>>2]=o|3;a[v+(o|4)>>2]=N|1;a[v+(N+o)>>2]=N;f=N>>>3;if(N>>>0<256){n=f<<1;l=872+(n<<2)|0;m=a[208]|0;u=1<<f;do{if((m&u|0)==0){a[208]=m|u;H=l;U=872+(n+2<<2)|0}else{f=872+(n+2<<2)|0;r=a[f>>2]|0;if(r>>>0>=(a[212]|0)>>>0){H=r;U=f;break}ke();return 0}}while(0);a[U>>2]=c;a[H+12>>2]=c;a[v+(o+8)>>2]=H;a[v+(o+12)>>2]=l;break}n=b;u=N>>>8;do{if((u|0)==0){D=0}else{if(N>>>0>16777215){D=31;break}m=(u+1048320|0)>>>16&8;f=u<<m;r=(f+520192|0)>>>16&4;E=f<<r;f=(E+245760|0)>>>16&2;h=14-(r|m|f)+(E<<f>>>15)|0;D=N>>>((h+7|0)>>>0)&1|h<<1}}while(0);u=1136+(D<<2)|0;a[v+(o+28)>>2]=D;a[v+(o+20)>>2]=0;a[v+(o+16)>>2]=0;l=a[209]|0;h=1<<D;if((l&h|0)==0){a[209]=l|h;a[u>>2]=n;a[v+(o+24)>>2]=u;a[v+(o+12)>>2]=n;a[v+(o+8)>>2]=n;break}if((D|0)==31){q=0}else{q=25-(D>>>1)|0}h=N<<q;l=a[u>>2]|0;while(1){if((a[l+4>>2]&-8|0)==(N|0)){break}K=l+16+(h>>>31<<2)|0;u=a[K>>2]|0;if((u|0)==0){Y=262;break}else{h=h<<1;l=u}}if((Y|0)==262){if(K>>>0<(a[212]|0)>>>0){ke();return 0}else{a[K>>2]=n;a[v+(o+24)>>2]=l;a[v+(o+12)>>2]=n;a[v+(o+8)>>2]=n;break}}h=l+8|0;u=a[h>>2]|0;f=a[212]|0;if(l>>>0<f>>>0){ke();return 0}if(u>>>0<f>>>0){ke();return 0}else{a[u+12>>2]=n;a[h>>2]=n;a[v+(o+8)>>2]=u;a[v+(o+12)>>2]=l;a[v+(o+24)>>2]=0;break}}}while(0);v=j+8|0;if((v|0)==0){p=o;break}else{d=v}return d|0}}while(0);j=a[210]|0;if(p>>>0<=j>>>0){K=j-p|0;N=a[213]|0;if(K>>>0>15){q=N;a[213]=q+p;a[210]=K;a[q+(p+4)>>2]=K|1;a[q+j>>2]=K;a[N+4>>2]=p|3}else{a[210]=0;a[213]=0;a[N+4>>2]=j|3;K=N+(j+4)|0;a[K>>2]=a[K>>2]|1}d=N+8|0;return d|0}N=a[211]|0;if(p>>>0<N>>>0){K=N-p|0;a[211]=K;N=a[214]|0;j=N;a[214]=j+p;a[j+(p+4)>>2]=K|1;a[N+4>>2]=p|3;d=N+8|0;return d|0}do{if((a[200]|0)==0){N=we(8)|0;if((N-1&N|0)==0){a[202]=N;a[201]=N;a[203]=-1;a[204]=2097152;a[205]=0;a[319]=0;a[200]=(tt(0)|0)&-16^1431655768;break}else{ke();return 0}}}while(0);N=p+48|0;K=a[202]|0;j=p+47|0;q=K+j|0;D=-K|0;K=q&D;if(K>>>0<=p>>>0){d=0;return d|0}H=a[318]|0;do{if((H|0)!=0){U=a[316]|0;z=U+K|0;if(z>>>0<=U>>>0|z>>>0>H>>>0){d=0}else{break}return d|0}}while(0);e:do{if((a[319]&4|0)==0){H=a[214]|0;t:do{if((H|0)==0){Y=292}else{z=H;U=1280;while(1){V=U|0;L=a[V>>2]|0;if(L>>>0<=z>>>0){W=U+4|0;if((L+(a[W>>2]|0)|0)>>>0>z>>>0){break}}L=a[U+8>>2]|0;if((L|0)==0){Y=292;break t}else{U=L}}if((U|0)==0){Y=292;break}z=q-(a[211]|0)&D;if(z>>>0>=2147483647){X=0;break}l=Ge(z|0)|0;n=(l|0)==((a[V>>2]|0)+(a[W>>2]|0)|0);Z=n?l:-1;G=n?z:0;Q=l;$=z;Y=301}}while(0);do{if((Y|0)==292){H=Ge(0)|0;if((H|0)==-1){X=0;break}o=H;z=a[201]|0;l=z-1|0;if((l&o|0)==0){J=K}else{J=K-o+(l+o&-z)|0}z=a[316]|0;o=z+J|0;if(!(J>>>0>p>>>0&J>>>0<2147483647)){X=0;break}l=a[318]|0;if((l|0)!=0){if(o>>>0<=z>>>0|o>>>0>l>>>0){X=0;break}}l=Ge(J|0)|0;o=(l|0)==(H|0);Z=o?H:-1;G=o?J:0;Q=l;$=J;Y=301}}while(0);t:do{if((Y|0)==301){l=-$|0;if((Z|0)!=-1){ee=G;te=Z;Y=312;break e}do{if((Q|0)!=-1&$>>>0<2147483647&$>>>0<N>>>0){o=a[202]|0;H=j-$+o&-o;if(H>>>0>=2147483647){re=$;break}if((Ge(H|0)|0)==-1){Ge(l|0)|0;X=G;break t}else{re=H+$|0;break}}else{re=$}}while(0);if((Q|0)==-1){X=G}else{ee=re;te=Q;Y=312;break e}}}while(0);a[319]=a[319]|4;ne=X;Y=309}else{ne=0;Y=309}}while(0);do{if((Y|0)==309){if(K>>>0>=2147483647){break}X=Ge(K|0)|0;Q=Ge(0)|0;if(!((Q|0)!=-1&(X|0)!=-1&X>>>0<Q>>>0)){break}re=Q-X|0;Q=re>>>0>(p+40|0)>>>0;G=Q?X:-1;if((G|0)!=-1){ee=Q?re:ne;te=G;Y=312}}}while(0);do{if((Y|0)==312){ne=(a[316]|0)+ee|0;a[316]=ne;if(ne>>>0>(a[317]|0)>>>0){a[317]=ne}ne=a[214]|0;e:do{if((ne|0)==0){K=a[212]|0;if((K|0)==0|te>>>0<K>>>0){a[212]=te}a[320]=te;a[321]=ee;a[323]=0;a[217]=a[200];a[216]=-1;K=0;do{G=K<<1;re=872+(G<<2)|0;a[872+(G+3<<2)>>2]=re;a[872+(G+2<<2)>>2]=re;K=K+1|0}while(K>>>0<32);K=te+8|0;if((K&7|0)==0){ie=0}else{ie=-K&7}K=ee-40-ie|0;a[214]=te+ie;a[211]=K;a[te+(ie+4)>>2]=K|1;a[te+(ee-36)>>2]=40;a[215]=a[204]}else{K=1280;while(1){ae=a[K>>2]|0;oe=K+4|0;se=a[oe>>2]|0;if((te|0)==(ae+se|0)){Y=324;break}re=a[K+8>>2]|0;if((re|0)==0){break}else{K=re}}do{if((Y|0)==324){if((a[K+12>>2]&8|0)!=0){break}re=ne;if(!(re>>>0>=ae>>>0&re>>>0<te>>>0)){break}a[oe>>2]=se+ee;re=a[214]|0;G=(a[211]|0)+ee|0;Q=re;X=re+8|0;if((X&7|0)==0){fe=0}else{fe=-X&7}X=G-fe|0;a[214]=Q+fe;a[211]=X;a[Q+(fe+4)>>2]=X|1;a[Q+(G+4)>>2]=40;a[215]=a[204];break e}}while(0);if(te>>>0<(a[212]|0)>>>0){a[212]=te}K=te+ee|0;G=1280;while(1){ue=G|0;if((a[ue>>2]|0)==(K|0)){Y=334;break}Q=a[G+8>>2]|0;if((Q|0)==0){break}else{G=Q}}do{if((Y|0)==334){if((a[G+12>>2]&8|0)!=0){break}a[ue>>2]=te;K=G+4|0;a[K>>2]=(a[K>>2]|0)+ee;K=te+8|0;if((K&7|0)==0){ce=0}else{ce=-K&7}K=te+(ee+8)|0;if((K&7|0)==0){he=0}else{he=-K&7}K=te+(he+ee)|0;Q=K;X=ce+p|0;re=te+X|0;$=re;j=K-(te+ce)-p|0;a[te+(ce+4)>>2]=p|3;do{if((Q|0)==(a[214]|0)){N=(a[211]|0)+j|0;a[211]=N;a[214]=$;a[te+(X+4)>>2]=N|1}else{if((Q|0)==(a[213]|0)){N=(a[210]|0)+j|0;a[210]=N;a[213]=$;a[te+(X+4)>>2]=N|1;a[te+(N+X)>>2]=N;break}N=ee+4|0;Z=a[te+(N+he)>>2]|0;if((Z&3|0)==1){J=Z&-8;W=Z>>>3;t:do{if(Z>>>0<256){V=a[te+((he|8)+ee)>>2]|0;D=a[te+(ee+12+he)>>2]|0;q=872+(W<<1<<2)|0;do{if((V|0)!=(q|0)){if(V>>>0<(a[212]|0)>>>0){ke();return 0}if((a[V+12>>2]|0)==(Q|0)){break}ke();return 0}}while(0);if((D|0)==(V|0)){a[208]=a[208]&~(1<<W);break}do{if((D|0)==(q|0)){le=D+8|0}else{if(D>>>0<(a[212]|0)>>>0){ke();return 0}l=D+8|0;if((a[l>>2]|0)==(Q|0)){le=l;break}ke();return 0}}while(0);a[V+12>>2]=D;a[le>>2]=V}else{q=K;l=a[te+((he|24)+ee)>>2]|0;U=a[te+(ee+12+he)>>2]|0;do{if((U|0)==(q|0)){H=he|16;o=te+(N+H)|0;z=a[o>>2]|0;if((z|0)==0){n=te+(H+ee)|0;H=a[n>>2]|0;if((H|0)==0){de=0;break}else{pe=H;be=n}}else{pe=z;be=o}while(1){o=pe+20|0;z=a[o>>2]|0;if((z|0)!=0){pe=z;be=o;continue}o=pe+16|0;z=a[o>>2]|0;if((z|0)==0){break}else{pe=z;be=o}}if(be>>>0<(a[212]|0)>>>0){ke();return 0}else{a[be>>2]=0;de=pe;break}}else{o=a[te+((he|8)+ee)>>2]|0;if(o>>>0<(a[212]|0)>>>0){ke();return 0}z=o+12|0;if((a[z>>2]|0)!=(q|0)){ke();return 0}n=U+8|0;if((a[n>>2]|0)==(q|0)){a[z>>2]=U;a[n>>2]=o;de=U;break}else{ke();return 0}}}while(0);if((l|0)==0){break}U=te+(ee+28+he)|0;V=1136+(a[U>>2]<<2)|0;do{if((q|0)==(a[V>>2]|0)){a[V>>2]=de;if((de|0)!=0){break}a[209]=a[209]&~(1<<a[U>>2]);break t}else{if(l>>>0<(a[212]|0)>>>0){ke();return 0}D=l+16|0;if((a[D>>2]|0)==(q|0)){a[D>>2]=de}else{a[l+20>>2]=de}if((de|0)==0){break t}}}while(0);if(de>>>0<(a[212]|0)>>>0){ke();return 0}a[de+24>>2]=l;q=he|16;U=a[te+(q+ee)>>2]|0;do{if((U|0)!=0){if(U>>>0<(a[212]|0)>>>0){ke();return 0}else{a[de+16>>2]=U;a[U+24>>2]=de;break}}}while(0);U=a[te+(N+q)>>2]|0;if((U|0)==0){break}if(U>>>0<(a[212]|0)>>>0){ke();return 0}else{a[de+20>>2]=U;a[U+24>>2]=de;break}}}while(0);ve=te+((J|he)+ee)|0;me=J+j|0}else{ve=Q;me=j}N=ve+4|0;a[N>>2]=a[N>>2]&-2;a[te+(X+4)>>2]=me|1;a[te+(me+X)>>2]=me;N=me>>>3;if(me>>>0<256){W=N<<1;Z=872+(W<<2)|0;U=a[208]|0;l=1<<N;do{if((U&l|0)==0){a[208]=U|l;ge=Z;ye=872+(W+2<<2)|0}else{N=872+(W+2<<2)|0;V=a[N>>2]|0;if(V>>>0>=(a[212]|0)>>>0){ge=V;ye=N;break}ke();return 0}}while(0);a[ye>>2]=$;a[ge+12>>2]=$;a[te+(X+8)>>2]=ge;a[te+(X+12)>>2]=Z;break}W=re;l=me>>>8;do{if((l|0)==0){_e=0}else{if(me>>>0>16777215){_e=31;break}U=(l+1048320|0)>>>16&8;J=l<<U;N=(J+520192|0)>>>16&4;V=J<<N;J=(V+245760|0)>>>16&2;D=14-(N|U|J)+(V<<J>>>15)|0;_e=me>>>((D+7|0)>>>0)&1|D<<1}}while(0);l=1136+(_e<<2)|0;a[te+(X+28)>>2]=_e;a[te+(X+20)>>2]=0;a[te+(X+16)>>2]=0;Z=a[209]|0;D=1<<_e;if((Z&D|0)==0){a[209]=Z|D;a[l>>2]=W;a[te+(X+24)>>2]=l;a[te+(X+12)>>2]=W;a[te+(X+8)>>2]=W;break}if((_e|0)==31){Se=0}else{Se=25-(_e>>>1)|0}D=me<<Se;Z=a[l>>2]|0;while(1){if((a[Z+4>>2]&-8|0)==(me|0)){break}xe=Z+16+(D>>>31<<2)|0;l=a[xe>>2]|0;if((l|0)==0){Y=407;break}else{D=D<<1;Z=l}}if((Y|0)==407){if(xe>>>0<(a[212]|0)>>>0){ke();return 0}else{a[xe>>2]=W;a[te+(X+24)>>2]=Z;a[te+(X+12)>>2]=W;a[te+(X+8)>>2]=W;break}}D=Z+8|0;l=a[D>>2]|0;J=a[212]|0;if(Z>>>0<J>>>0){ke();return 0}if(l>>>0<J>>>0){ke();return 0}else{a[l+12>>2]=W;a[D>>2]=W;a[te+(X+8)>>2]=l;a[te+(X+12)>>2]=Z;a[te+(X+24)>>2]=0;break}}}while(0);d=te+(ce|8)|0;return d|0}}while(0);G=ne;X=1280;while(1){Ae=a[X>>2]|0;if(Ae>>>0<=G>>>0){Me=a[X+4>>2]|0;Ee=Ae+Me|0;if(Ee>>>0>G>>>0){break}}X=a[X+8>>2]|0}X=Ae+(Me-39)|0;if((X&7|0)==0){Ie=0}else{Ie=-X&7}X=Ae+(Me-47+Ie)|0;re=X>>>0<(ne+16|0)>>>0?G:X;X=re+8|0;$=te+8|0;if(($&7|0)==0){Te=0}else{Te=-$&7}$=ee-40-Te|0;a[214]=te+Te;a[211]=$;a[te+(Te+4)>>2]=$|1;a[te+(ee-36)>>2]=40;a[215]=a[204];a[re+4>>2]=27;a[X>>2]=a[320];a[X+4>>2]=a[1284>>2];a[X+8>>2]=a[1288>>2];a[X+12>>2]=a[1292>>2];a[320]=te;a[321]=ee;a[323]=0;a[322]=X;X=re+28|0;a[X>>2]=7;if((re+32|0)>>>0<Ee>>>0){$=X;while(1){X=$+4|0;a[X>>2]=7;if(($+8|0)>>>0<Ee>>>0){$=X}else{break}}}if((re|0)==(G|0)){break}$=re-ne|0;X=G+($+4)|0;a[X>>2]=a[X>>2]&-2;a[ne+4>>2]=$|1;a[G+$>>2]=$;X=$>>>3;if($>>>0<256){j=X<<1;Q=872+(j<<2)|0;K=a[208]|0;l=1<<X;do{if((K&l|0)==0){a[208]=K|l;Pe=Q;Re=872+(j+2<<2)|0}else{X=872+(j+2<<2)|0;D=a[X>>2]|0;if(D>>>0>=(a[212]|0)>>>0){Pe=D;Re=X;break}ke();return 0}}while(0);a[Re>>2]=ne;a[Pe+12>>2]=ne;a[ne+8>>2]=Pe;a[ne+12>>2]=Q;break}j=ne;l=$>>>8;do{if((l|0)==0){Be=0}else{if($>>>0>16777215){Be=31;break}K=(l+1048320|0)>>>16&8;G=l<<K;re=(G+520192|0)>>>16&4;X=G<<re;G=(X+245760|0)>>>16&2;D=14-(re|K|G)+(X<<G>>>15)|0;Be=$>>>((D+7|0)>>>0)&1|D<<1}}while(0);l=1136+(Be<<2)|0;a[ne+28>>2]=Be;a[ne+20>>2]=0;a[ne+16>>2]=0;Q=a[209]|0;D=1<<Be;if((Q&D|0)==0){a[209]=Q|D;a[l>>2]=j;a[ne+24>>2]=l;a[ne+12>>2]=ne;a[ne+8>>2]=ne;break}if((Be|0)==31){Ce=0}else{Ce=25-(Be>>>1)|0}D=$<<Ce;Q=a[l>>2]|0;while(1){if((a[Q+4>>2]&-8|0)==($|0)){break}Oe=Q+16+(D>>>31<<2)|0;l=a[Oe>>2]|0;if((l|0)==0){Y=442;break}else{D=D<<1;Q=l}}if((Y|0)==442){if(Oe>>>0<(a[212]|0)>>>0){ke();return 0}else{a[Oe>>2]=j;a[ne+24>>2]=Q;a[ne+12>>2]=ne;a[ne+8>>2]=ne;break}}D=Q+8|0;$=a[D>>2]|0;l=a[212]|0;if(Q>>>0<l>>>0){ke();return 0}if($>>>0<l>>>0){ke();return 0}else{a[$+12>>2]=j;a[D>>2]=j;a[ne+8>>2]=$;a[ne+12>>2]=Q;a[ne+24>>2]=0;break}}}while(0);ne=a[211]|0;if(ne>>>0<=p>>>0){break}$=ne-p|0;a[211]=$;ne=a[214]|0;D=ne;a[214]=D+p;a[D+(p+4)>>2]=$|1;a[ne+4>>2]=p|3;d=ne+8|0;return d|0}}while(0);a[($e()|0)>>2]=12;d=0;return d|0}function Yt(e){e=e|0;var t=0,r=0,n=0,i=0,o=0,s=0,f=0,u=0,c=0,h=0,l=0,d=0,p=0,b=0,v=0,m=0,g=0,y=0,w=0,_=0,S=0,k=0,x=0,A=0,M=0,E=0,I=0,T=0,P=0,R=0,B=0,C=0,O=0,N=0,j=0,z=0,L=0,F=0,H=0;if((e|0)==0){return}t=e-8|0;r=t;n=a[212]|0;if(t>>>0<n>>>0){ke()}i=a[e-4>>2]|0;o=i&3;if((o|0)==1){ke()}s=i&-8;f=e+(s-8)|0;u=f;e:do{if((i&1|0)==0){c=a[t>>2]|0;if((o|0)==0){return}h=-8-c|0;l=e+h|0;d=l;p=c+s|0;if(l>>>0<n>>>0){ke()}if((d|0)==(a[213]|0)){b=e+(s-4)|0;if((a[b>>2]&3|0)!=3){v=d;m=p;break}a[210]=p;a[b>>2]=a[b>>2]&-2;a[e+(h+4)>>2]=p|1;a[f>>2]=p;return}b=c>>>3;if(c>>>0<256){c=a[e+(h+8)>>2]|0;g=a[e+(h+12)>>2]|0;y=872+(b<<1<<2)|0;do{if((c|0)!=(y|0)){if(c>>>0<n>>>0){ke()}if((a[c+12>>2]|0)==(d|0)){break}ke()}}while(0);if((g|0)==(c|0)){a[208]=a[208]&~(1<<b);v=d;m=p;break}do{if((g|0)==(y|0)){w=g+8|0}else{if(g>>>0<n>>>0){ke()}_=g+8|0;if((a[_>>2]|0)==(d|0)){w=_;break}ke()}}while(0);a[c+12>>2]=g;a[w>>2]=c;v=d;m=p;break}y=l;b=a[e+(h+24)>>2]|0;_=a[e+(h+12)>>2]|0;do{if((_|0)==(y|0)){S=e+(h+20)|0;k=a[S>>2]|0;if((k|0)==0){x=e+(h+16)|0;A=a[x>>2]|0;if((A|0)==0){M=0;break}else{E=A;I=x}}else{E=k;I=S}while(1){S=E+20|0;k=a[S>>2]|0;if((k|0)!=0){E=k;I=S;continue}S=E+16|0;k=a[S>>2]|0;if((k|0)==0){break}else{E=k;I=S}}if(I>>>0<n>>>0){ke()}else{a[I>>2]=0;M=E;break}}else{S=a[e+(h+8)>>2]|0;if(S>>>0<n>>>0){ke()}k=S+12|0;if((a[k>>2]|0)!=(y|0)){ke()}x=_+8|0;if((a[x>>2]|0)==(y|0)){a[k>>2]=_;a[x>>2]=S;M=_;break}else{ke()}}}while(0);if((b|0)==0){v=d;m=p;break}_=e+(h+28)|0;l=1136+(a[_>>2]<<2)|0;do{if((y|0)==(a[l>>2]|0)){a[l>>2]=M;if((M|0)!=0){break}a[209]=a[209]&~(1<<a[_>>2]);v=d;m=p;break e}else{if(b>>>0<(a[212]|0)>>>0){ke()}c=b+16|0;if((a[c>>2]|0)==(y|0)){a[c>>2]=M}else{a[b+20>>2]=M}if((M|0)==0){v=d;m=p;break e}}}while(0);if(M>>>0<(a[212]|0)>>>0){ke()}a[M+24>>2]=b;y=a[e+(h+16)>>2]|0;do{if((y|0)!=0){if(y>>>0<(a[212]|0)>>>0){ke()}else{a[M+16>>2]=y;a[y+24>>2]=M;break}}}while(0);y=a[e+(h+20)>>2]|0;if((y|0)==0){v=d;m=p;break}if(y>>>0<(a[212]|0)>>>0){ke()}else{a[M+20>>2]=y;a[y+24>>2]=M;v=d;m=p;break}}else{v=r;m=s}}while(0);r=v;if(r>>>0>=f>>>0){ke()}M=e+(s-4)|0;n=a[M>>2]|0;if((n&1|0)==0){ke()}do{if((n&2|0)==0){if((u|0)==(a[214]|0)){E=(a[211]|0)+m|0;a[211]=E;a[214]=v;a[v+4>>2]=E|1;if((v|0)==(a[213]|0)){a[213]=0;a[210]=0}if(E>>>0<=(a[215]|0)>>>0){return}Qt(0)|0;return}if((u|0)==(a[213]|0)){E=(a[210]|0)+m|0;a[210]=E;a[213]=v;a[v+4>>2]=E|1;a[r+E>>2]=E;return}E=(n&-8)+m|0;I=n>>>3;e:do{if(n>>>0<256){w=a[e+s>>2]|0;o=a[e+(s|4)>>2]|0;t=872+(I<<1<<2)|0;do{if((w|0)!=(t|0)){if(w>>>0<(a[212]|0)>>>0){ke()}if((a[w+12>>2]|0)==(u|0)){break}ke()}}while(0);if((o|0)==(w|0)){a[208]=a[208]&~(1<<I);break}do{if((o|0)==(t|0)){T=o+8|0}else{if(o>>>0<(a[212]|0)>>>0){ke()}i=o+8|0;if((a[i>>2]|0)==(u|0)){T=i;break}ke()}}while(0);a[w+12>>2]=o;a[T>>2]=w}else{t=f;i=a[e+(s+16)>>2]|0;y=a[e+(s|4)>>2]|0;do{if((y|0)==(t|0)){b=e+(s+12)|0;_=a[b>>2]|0;if((_|0)==0){l=e+(s+8)|0;c=a[l>>2]|0;if((c|0)==0){P=0;break}else{R=c;B=l}}else{R=_;B=b}while(1){b=R+20|0;_=a[b>>2]|0;if((_|0)!=0){R=_;B=b;continue}b=R+16|0;_=a[b>>2]|0;if((_|0)==0){break}else{R=_;B=b}}if(B>>>0<(a[212]|0)>>>0){ke()}else{a[B>>2]=0;P=R;break}}else{b=a[e+s>>2]|0;if(b>>>0<(a[212]|0)>>>0){ke()}_=b+12|0;if((a[_>>2]|0)!=(t|0)){ke()}l=y+8|0;if((a[l>>2]|0)==(t|0)){a[_>>2]=y;a[l>>2]=b;P=y;break}else{ke()}}}while(0);if((i|0)==0){break}y=e+(s+20)|0;w=1136+(a[y>>2]<<2)|0;do{if((t|0)==(a[w>>2]|0)){a[w>>2]=P;if((P|0)!=0){break}a[209]=a[209]&~(1<<a[y>>2]);break e}else{if(i>>>0<(a[212]|0)>>>0){ke()}o=i+16|0;if((a[o>>2]|0)==(t|0)){a[o>>2]=P}else{a[i+20>>2]=P}if((P|0)==0){break e}}}while(0);if(P>>>0<(a[212]|0)>>>0){ke()}a[P+24>>2]=i;t=a[e+(s+8)>>2]|0;do{if((t|0)!=0){if(t>>>0<(a[212]|0)>>>0){ke()}else{a[P+16>>2]=t;a[t+24>>2]=P;break}}}while(0);t=a[e+(s+12)>>2]|0;if((t|0)==0){break}if(t>>>0<(a[212]|0)>>>0){ke()}else{a[P+20>>2]=t;a[t+24>>2]=P;break}}}while(0);a[v+4>>2]=E|1;a[r+E>>2]=E;if((v|0)!=(a[213]|0)){C=E;break}a[210]=E;return}else{a[M>>2]=n&-2;a[v+4>>2]=m|1;a[r+m>>2]=m;C=m}}while(0);m=C>>>3;if(C>>>0<256){r=m<<1;n=872+(r<<2)|0;M=a[208]|0;P=1<<m;do{if((M&P|0)==0){a[208]=M|P;O=n;N=872+(r+2<<2)|0}else{m=872+(r+2<<2)|0;s=a[m>>2]|0;if(s>>>0>=(a[212]|0)>>>0){O=s;N=m;break}ke()}}while(0);a[N>>2]=v;a[O+12>>2]=v;a[v+8>>2]=O;a[v+12>>2]=n;return}n=v;O=C>>>8;do{if((O|0)==0){j=0}else{if(C>>>0>16777215){j=31;break}N=(O+1048320|0)>>>16&8;r=O<<N;P=(r+520192|0)>>>16&4;M=r<<P;r=(M+245760|0)>>>16&2;m=14-(P|N|r)+(M<<r>>>15)|0;j=C>>>((m+7|0)>>>0)&1|m<<1}}while(0);O=1136+(j<<2)|0;a[v+28>>2]=j;a[v+20>>2]=0;a[v+16>>2]=0;m=a[209]|0;r=1<<j;do{if((m&r|0)==0){a[209]=m|r;a[O>>2]=n;a[v+24>>2]=O;a[v+12>>2]=v;a[v+8>>2]=v}else{if((j|0)==31){z=0}else{z=25-(j>>>1)|0}M=C<<z;N=a[O>>2]|0;while(1){if((a[N+4>>2]&-8|0)==(C|0)){break}L=N+16+(M>>>31<<2)|0;P=a[L>>2]|0;if((P|0)==0){F=621;break}else{M=M<<1;N=P}}if((F|0)==621){if(L>>>0<(a[212]|0)>>>0){ke()}else{a[L>>2]=n;a[v+24>>2]=N;a[v+12>>2]=v;a[v+8>>2]=v;break}}M=N+8|0;E=a[M>>2]|0;P=a[212]|0;if(N>>>0<P>>>0){ke()}if(E>>>0<P>>>0){ke()}else{a[E+12>>2]=n;a[M>>2]=n;a[v+8>>2]=E;a[v+12>>2]=N;a[v+24>>2]=0;break}}}while(0);v=(a[216]|0)-1|0;a[216]=v;if((v|0)==0){H=1288}else{return}while(1){v=a[H>>2]|0;if((v|0)==0){break}else{H=v+8|0}}a[216]=-1;return}function Vt(e,t){e=e|0;t=t|0;var r=0,n=0;do{if((e|0)==0){r=0}else{n=oe(t,e)|0;if((t|e)>>>0<=65535){r=n;break}r=((n>>>0)/(e>>>0)|0|0)==(t|0)?n:-1}}while(0);t=Kt(r)|0;if((t|0)==0){return t|0}if((a[t-4>>2]&3|0)==0){return t|0}en(t|0,0,r|0);return t|0}function Wt(e,t){e=e|0;t=t|0;var r=0,n=0,i=0,o=0;if((e|0)==0){r=Kt(t)|0;return r|0}if(t>>>0>4294967231){a[($e()|0)>>2]=12;r=0;return r|0}if(t>>>0<11){n=16}else{n=t+11&-8}i=$t(e-8|0,n)|0;if((i|0)!=0){r=i+8|0;return r|0}i=Kt(t)|0;if((i|0)==0){r=0;return r|0}n=a[e-4>>2]|0;o=(n&-8)-((n&3|0)==0?8:4)|0;n=o>>>0<t>>>0?o:t;Jr(i|0,e|0,n)|0;Yt(e);r=i;return r|0}function Xt(e,t){e=e|0;t=t|0;var r=0;if((e|0)==0){return 0}if(t>>>0>4294967231){a[($e()|0)>>2]=12;return 0}if(t>>>0<11){r=16}else{r=t+11&-8}t=e-8|0;return(($t(t,r)|0)==(t|0)?e:0)|0}function Zt(e,t){e=e|0;t=t|0;var r=0;if(e>>>0<9){r=Kt(t)|0;return r|0}else{r=Gt(e,t)|0;return r|0}return 0}function Gt(e,t){e=e|0;t=t|0;var r=0,n=0,i=0,o=0,s=0,f=0,u=0,c=0,h=0,l=0,d=0,p=0;r=e>>>0<16?16:e;if((r-1&r|0)==0){n=r}else{e=16;while(1){if(e>>>0<r>>>0){e=e<<1}else{n=e;break}}}if((-64-n|0)>>>0<=t>>>0){a[($e()|0)>>2]=12;i=0;return i|0}if(t>>>0<11){o=16}else{o=t+11&-8}t=Kt(n+12+o|0)|0;if((t|0)==0){i=0;return i|0}e=t-8|0;r=e;s=n-1|0;do{if((t&s|0)==0){f=r}else{u=t+s&-n;c=u-8|0;h=e;if((c-h|0)>>>0>15){l=c}else{l=u+(n-8)|0}u=l;c=l-h|0;h=t-4|0;d=a[h>>2]|0;p=(d&-8)-c|0;if((d&3|0)==0){a[l>>2]=(a[e>>2]|0)+c;a[l+4>>2]=p;f=u;break}else{d=l+4|0;a[d>>2]=p|a[d>>2]&1|2;d=l+(p+4)|0;a[d>>2]=a[d>>2]|1;a[h>>2]=c|a[h>>2]&1|2;h=t+(c-4)|0;a[h>>2]=a[h>>2]|1;vr(r,c);f=u;break}}}while(0);r=f+4|0;t=a[r>>2]|0;do{if((t&3|0)!=0){l=t&-8;if(l>>>0<=(o+16|0)>>>0){break}e=l-o|0;n=f;a[r>>2]=o|t&1|2;a[n+(o|4)>>2]=e|3;s=n+(l|4)|0;a[s>>2]=a[s>>2]|1;vr(n+o|0,e)}}while(0);i=f+8|0;return i|0}function Qt(e){e=e|0;var t=0,r=0,n=0,i=0,o=0,s=0,f=0,u=0,c=0,h=0,l=0,d=0,p=0;do{if((a[200]|0)==0){t=we(8)|0;if((t-1&t|0)==0){a[202]=t;a[201]=t;a[203]=-1;a[204]=2097152;a[205]=0;a[319]=0;a[200]=(tt(0)|0)&-16^1431655768;break}else{ke();return 0}}}while(0);if(e>>>0>=4294967232){r=0;return r|0}t=a[214]|0;if((t|0)==0){r=0;return r|0}n=a[211]|0;do{if(n>>>0>(e+40|0)>>>0){i=a[202]|0;o=oe((((-40-e-1+n+i|0)>>>0)/(i>>>0)|0)-1|0,i)|0;s=t;f=1280;while(1){u=a[f>>2]|0;if(u>>>0<=s>>>0){if((u+(a[f+4>>2]|0)|0)>>>0>s>>>0){c=f;break}}u=a[f+8>>2]|0;if((u|0)==0){c=0;break}else{f=u}}if((a[c+12>>2]&8|0)!=0){break}f=Ge(0)|0;s=c+4|0;if((f|0)!=((a[c>>2]|0)+(a[s>>2]|0)|0)){break}u=Ge(-(o>>>0>2147483646?-2147483648-i|0:o)|0)|0;h=Ge(0)|0;if(!((u|0)!=-1&h>>>0<f>>>0)){break}u=f-h|0;if((f|0)==(h|0)){break}a[s>>2]=(a[s>>2]|0)-u;a[316]=(a[316]|0)-u;s=a[214]|0;l=(a[211]|0)-u|0;u=s;d=s+8|0;if((d&7|0)==0){p=0}else{p=-d&7}d=l-p|0;a[214]=u+p;a[211]=d;a[u+(p+4)>>2]=d|1;a[u+(l+4)>>2]=40;a[215]=a[204];r=(f|0)!=(h|0)|0;return r|0}}while(0);if((a[211]|0)>>>0<=(a[215]|0)>>>0){r=0;return r|0}a[215]=-1;r=0;return r|0}function $t(e,t){e=e|0;t=t|0;var r=0,n=0,i=0,o=0,s=0,f=0,u=0,c=0,h=0,l=0,d=0,p=0,b=0,v=0,m=0,g=0,y=0,w=0,_=0,S=0,k=0,x=0,A=0,M=0;r=e+4|0;n=a[r>>2]|0;i=n&-8;o=e;s=o+i|0;f=s;u=a[212]|0;if(o>>>0<u>>>0){ke();return 0}c=n&3;if(!((c|0)!=1&o>>>0<s>>>0)){ke();return 0}h=o+(i|4)|0;l=a[h>>2]|0;if((l&1|0)==0){ke();return 0}if((c|0)==0){if(t>>>0<256){d=0;return d|0}do{if(i>>>0>=(t+4|0)>>>0){if((i-t|0)>>>0>a[202]<<1>>>0){break}else{d=e}return d|0}}while(0);d=0;return d|0}if(i>>>0>=t>>>0){c=i-t|0;if(c>>>0<=15){d=e;return d|0}a[r>>2]=n&1|t|2;a[o+(t+4)>>2]=c|3;a[h>>2]=a[h>>2]|1;vr(o+t|0,c);d=e;return d|0}if((f|0)==(a[214]|0)){c=(a[211]|0)+i|0;if(c>>>0<=t>>>0){d=0;return d|0}h=c-t|0;a[r>>2]=n&1|t|2;a[o+(t+4)>>2]=h|1;a[214]=o+t;a[211]=h;d=e;return d|0}if((f|0)==(a[213]|0)){h=(a[210]|0)+i|0;if(h>>>0<t>>>0){d=0;return d|0}c=h-t|0;if(c>>>0>15){a[r>>2]=n&1|t|2;a[o+(t+4)>>2]=c|1;a[o+h>>2]=c;p=o+(h+4)|0;a[p>>2]=a[p>>2]&-2;b=o+t|0;v=c}else{a[r>>2]=n&1|h|2;n=o+(h+4)|0;a[n>>2]=a[n>>2]|1;b=0;v=0}a[210]=v;a[213]=b;d=e;return d|0}if((l&2|0)!=0){d=0;return d|0}b=(l&-8)+i|0;if(b>>>0<t>>>0){d=0;return d|0}v=b-t|0;n=l>>>3;e:do{if(l>>>0<256){h=a[o+(i+8)>>2]|0;c=a[o+(i+12)>>2]|0;p=872+(n<<1<<2)|0;do{if((h|0)!=(p|0)){if(h>>>0<u>>>0){ke();return 0}if((a[h+12>>2]|0)==(f|0)){break}ke();return 0}}while(0);if((c|0)==(h|0)){a[208]=a[208]&~(1<<n);break}do{if((c|0)==(p|0)){m=c+8|0}else{if(c>>>0<u>>>0){ke();return 0}g=c+8|0;if((a[g>>2]|0)==(f|0)){m=g;break}ke();return 0}}while(0);a[h+12>>2]=c;a[m>>2]=h}else{p=s;g=a[o+(i+24)>>2]|0;y=a[o+(i+12)>>2]|0;do{if((y|0)==(p|0)){w=o+(i+20)|0;_=a[w>>2]|0;if((_|0)==0){S=o+(i+16)|0;k=a[S>>2]|0;if((k|0)==0){x=0;break}else{A=k;M=S}}else{A=_;M=w}while(1){w=A+20|0;_=a[w>>2]|0;if((_|0)!=0){A=_;M=w;continue}w=A+16|0;_=a[w>>2]|0;if((_|0)==0){break}else{A=_;M=w}}if(M>>>0<u>>>0){ke();return 0}else{a[M>>2]=0;x=A;break}}else{w=a[o+(i+8)>>2]|0;if(w>>>0<u>>>0){ke();return 0}_=w+12|0;if((a[_>>2]|0)!=(p|0)){ke();return 0}S=y+8|0;if((a[S>>2]|0)==(p|0)){a[_>>2]=y;a[S>>2]=w;x=y;break}else{ke();return 0}}}while(0);if((g|0)==0){break}y=o+(i+28)|0;h=1136+(a[y>>2]<<2)|0;do{if((p|0)==(a[h>>2]|0)){a[h>>2]=x;if((x|0)!=0){break}a[209]=a[209]&~(1<<a[y>>2]);break e}else{if(g>>>0<(a[212]|0)>>>0){ke();return 0}c=g+16|0;if((a[c>>2]|0)==(p|0)){a[c>>2]=x}else{a[g+20>>2]=x}if((x|0)==0){break e}}}while(0);if(x>>>0<(a[212]|0)>>>0){ke();return 0}a[x+24>>2]=g;p=a[o+(i+16)>>2]|0;do{if((p|0)!=0){if(p>>>0<(a[212]|0)>>>0){ke();return 0}else{a[x+16>>2]=p;a[p+24>>2]=x;break}}}while(0);p=a[o+(i+20)>>2]|0;if((p|0)==0){break}if(p>>>0<(a[212]|0)>>>0){ke();return 0}else{a[x+20>>2]=p;a[p+24>>2]=x;break}}}while(0);if(v>>>0<16){a[r>>2]=b|a[r>>2]&1|2;x=o+(b|4)|0;a[x>>2]=a[x>>2]|1;d=e;return d|0}else{a[r>>2]=a[r>>2]&1|t|2;a[o+(t+4)>>2]=v|3;r=o+(b|4)|0;a[r>>2]=a[r>>2]|1;vr(o+t|0,v);d=e;return d|0}return 0}function Jt(){return a[316]|0}function er(){return a[317]|0}function tr(){var e=0;e=a[318]|0;return((e|0)==0?-1:e)|0}function rr(e){e=e|0;var t=0,r=0;if((e|0)==-1){t=0}else{r=a[202]|0;t=e-1+r&-r}a[318]=t;return t|0}function nr(e){e=e|0;var t=0,r=0,n=0;do{if((e|0)==0){t=0}else{r=a[e-4>>2]|0;n=r&3;if((n|0)==1){t=0;break}t=(r&-8)-((n|0)==0?8:4)|0}}while(0);return t|0}function ir(e,t,r){e=e|0;t=t|0;r=r|0;var n=0,i=0,o=0;do{if((t|0)==8){n=Kt(r)|0}else{i=t>>>2;if((t&3|0)!=0|(i|0)==0){o=22;return o|0}if((i+1073741823&i|0)!=0){o=22;return o|0}if((-64-t|0)>>>0<r>>>0){o=12;return o|0}else{n=Gt(t>>>0<16?16:t,r)|0;break}}}while(0);if((n|0)==0){o=12;return o|0}a[e>>2]=n;o=0;return o|0}function ar(e,t,r){e=e|0;t=t|0;r=r|0;var n=0,i=0;n=h;h=h+8|0;i=n|0;a[i>>2]=t;t=ur(e,i,3,r)|0;h=n;return t|0}function or(e,t,r){e=e|0;t=t|0;r=r|0;return ur(e,t,0,r)|0}function sr(e){e=e|0;var t=0,r=0,n=0;if((a[200]|0)!=0){t=a[201]|0;r=Zt(t,e)|0;return r|0}n=we(8)|0;if((n-1&n|0)!=0){ke();return 0}a[202]=n;a[201]=n;a[203]=-1;a[204]=2097152;a[205]=0;a[319]=0;a[200]=(tt(0)|0)&-16^1431655768;t=a[201]|0;r=Zt(t,e)|0;return r|0}function fr(e){e=e|0;var t=0;do{if((a[200]|0)==0){t=we(8)|0;if((t-1&t|0)==0){a[202]=t;a[201]=t;a[203]=-1;a[204]=2097152;a[205]=0;a[319]=0;a[200]=(tt(0)|0)&-16^1431655768;break}else{ke();return 0}}}while(0);t=a[201]|0;return Zt(t,e-1+t&-t)|0}function ur(e,t,r,n){e=e|0;t=t|0;r=r|0;n=n|0;var i=0,o=0,s=0,f=0,u=0,c=0,h=0,l=0,d=0,p=0,b=0,v=0,m=0,g=0,y=0,w=0,_=0,S=0,k=0;do{if((a[200]|0)==0){i=we(8)|0;if((i-1&i|0)==0){a[202]=i;a[201]=i;a[203]=-1;a[204]=2097152;a[205]=0;a[319]=0;a[200]=(tt(0)|0)&-16^1431655768;break}else{ke();return 0}}}while(0);i=(e|0)==0;do{if((n|0)==0){if(i){o=Kt(0)|0;return o|0}else{s=e<<2;if(s>>>0<11){f=0;u=16;break}f=0;u=s+11&-8;break}}else{if(i){o=n}else{f=n;u=0;break}return o|0}}while(0);do{if((r&1|0)==0){if(i){c=0;h=0;break}else{l=0;d=0}while(1){n=a[t+(d<<2)>>2]|0;if(n>>>0<11){p=16}else{p=n+11&-8}n=p+l|0;s=d+1|0;if((s|0)==(e|0)){c=0;h=n;break}else{l=n;d=s}}}else{s=a[t>>2]|0;if(s>>>0<11){b=16}else{b=s+11&-8}c=b;h=oe(b,e)|0}}while(0);b=Kt(u-4+h|0)|0;if((b|0)==0){o=0;return o|0}d=b-8|0;l=a[b-4>>2]&-8;if((r&2|0)!=0){en(b|0,0,-4-u+l|0)}if((f|0)==0){a[b+(h-4)>>2]=l-h|3;v=b+h|0;m=h}else{v=f;m=l}a[v>>2]=b;b=e-1|0;e:do{if((b|0)==0){g=d;y=m}else{if((c|0)==0){w=d;_=m;S=0}else{e=d;l=m;f=0;while(1){h=l-c|0;a[e+4>>2]=c|3;u=e+c|0;r=f+1|0;a[v+(r<<2)>>2]=e+(c+8);if((r|0)==(b|0)){g=u;y=h;break e}else{e=u;l=h;f=r}}}while(1){f=a[t+(S<<2)>>2]|0;if(f>>>0<11){k=16}else{k=f+11&-8}f=_-k|0;a[w+4>>2]=k|3;l=w+k|0;e=S+1|0;a[v+(e<<2)>>2]=w+(k+8);if((e|0)==(b|0)){g=l;y=f;break}else{w=l;_=f;S=e}}}}while(0);a[g+4>>2]=y|3;o=v;return o|0}function cr(e,t){e=e|0;t=t|0;var r=0,n=0,i=0,o=0,s=0,f=0,u=0,c=0,h=0,l=0,d=0,p=0,b=0;r=e+(t<<2)|0;e:do{if((t|0)!=0){n=e;t:while(1){i=a[n>>2]|0;r:do{if((i|0)==0){o=n+4|0}else{s=i-8|0;f=s;u=i-4|0;c=a[u>>2]&-8;a[n>>2]=0;if(s>>>0<(a[212]|0)>>>0){h=935;break t}s=a[u>>2]|0;if((s&3|0)==1){h=936;break t}l=n+4|0;d=s-8&-8;do{if((l|0)!=(r|0)){if((a[l>>2]|0)!=(i+(d+8)|0)){break}p=(a[i+(d|4)>>2]&-8)+c|0;a[u>>2]=s&1|p|2;b=i+(p-4)|0;a[b>>2]=a[b>>2]|1;a[l>>2]=i;o=l;break r}}while(0);vr(f,c);o=l}}while(0);if((o|0)==(r|0)){break e}else{n=o}}if((h|0)==935){ke();return 0}else if((h|0)==936){ke();return 0}}}while(0);if((a[211]|0)>>>0<=(a[215]|0)>>>0){return 0}Qt(0)|0;return 0}function hr(e){e=e|0;var t=0,r=0;if((a[200]|0)!=0){t=Qt(e)|0;return t|0}r=we(8)|0;if((r-1&r|0)!=0){ke();return 0}a[202]=r;a[201]=r;a[203]=-1;a[204]=2097152;a[205]=0;a[319]=0;a[200]=(tt(0)|0)&-16^1431655768;t=Qt(e)|0;return t|0}function lr(e){e=e|0;var t=0,r=0,n=0,i=0,o=0,s=0,f=0,u=0,c=0,h=0,l=0,d=0,p=0,b=0,v=0,m=0,g=0,y=0,w=0,_=0,S=0,k=0,x=0,A=0,M=0,E=0,I=0,T=0;do{if((a[200]|0)==0){t=we(8)|0;if((t-1&t|0)==0){a[202]=t;a[201]=t;a[203]=-1;a[204]=2097152;a[205]=0;a[319]=0;a[200]=(tt(0)|0)&-16^1431655768;break}else{ke()}}}while(0);t=a[214]|0;if((t|0)==0){r=0;n=0;i=0;o=0;s=0;f=0;u=0}else{c=a[211]|0;h=c+40|0;l=1;d=h;p=h;h=1280;while(1){b=a[h>>2]|0;v=b+8|0;if((v&7|0)==0){m=0}else{m=-v&7}v=b+(a[h+4>>2]|0)|0;g=l;y=d;w=p;_=b+m|0;while(1){if(_>>>0>=v>>>0|(_|0)==(t|0)){S=g;k=y;x=w;break}A=a[_+4>>2]|0;if((A|0)==7){S=g;k=y;x=w;break}M=A&-8;E=M+w|0;if((A&3|0)==1){I=M+y|0;T=g+1|0}else{I=y;T=g}A=_+M|0;if(A>>>0<b>>>0){S=T;k=I;x=E;break}else{g=T;y=I;w=E;_=A}}_=a[h+8>>2]|0;if((_|0)==0){break}else{l=S;d=k;p=x;h=_}}h=a[316]|0;r=c;n=x;i=S;o=h-x|0;s=a[317]|0;f=h-k|0;u=k}a[e>>2]=n;a[e+4>>2]=i;i=e+8|0;a[i>>2]=0;a[i+4>>2]=0;a[e+16>>2]=o;a[e+20>>2]=s;a[e+24>>2]=0;a[e+28>>2]=f;a[e+32>>2]=u;a[e+36>>2]=r;return}function dr(){var e=0,t=0,r=0,n=0,i=0,o=0,s=0,f=0,u=0,c=0,l=0,d=0,p=0,b=0,v=0,g=0,y=0,w=0;e=h;do{if((a[200]|0)==0){t=we(8)|0;if((t-1&t|0)==0){a[202]=t;a[201]=t;a[203]=-1;a[204]=2097152;a[205]=0;a[319]=0;a[200]=(tt(0)|0)&-16^1431655768;break}else{ke()}}}while(0);t=a[214]|0;if((t|0)==0){r=0;n=0;i=0}else{o=a[317]|0;s=a[316]|0;f=s-40-(a[211]|0)|0;u=1280;while(1){c=a[u>>2]|0;l=c+8|0;if((l&7|0)==0){d=0}else{d=-l&7}l=c+(a[u+4>>2]|0)|0;p=f;b=c+d|0;while(1){if(b>>>0>=l>>>0|(b|0)==(t|0)){v=p;break}g=a[b+4>>2]|0;if((g|0)==7){v=p;break}y=g&-8;w=p-((g&3|0)==1?y:0)|0;g=b+y|0;if(g>>>0<c>>>0){v=w;break}else{p=w;b=g}}b=a[u+8>>2]|0;if((b|0)==0){r=v;n=s;i=o;break}else{f=v;u=b}}}xe(a[m>>2]|0,520,(E=h,h=h+8|0,a[E>>2]=i,E)|0)|0;xe(a[m>>2]|0,488,(E=h,h=h+8|0,a[E>>2]=n,E)|0)|0;xe(a[m>>2]|0,400,(E=h,h=h+8|0,a[E>>2]=r,E)|0)|0;h=e;return}function pr(e,t){e=e|0;t=t|0;var r=0,n=0;do{if((a[200]|0)==0){r=we(8)|0;if((r-1&r|0)==0){a[202]=r;a[201]=r;a[203]=-1;a[204]=2097152;a[205]=0;a[319]=0;a[200]=(tt(0)|0)&-16^1431655768;break}else{ke();return 0}}}while(0);if((e|0)==(-1|0)){a[204]=t;n=1;return n|0}else if((e|0)==(-2|0)){if((a[201]|0)>>>0>t>>>0){n=0;return n|0}if((t-1&t|0)!=0){n=0;return n|0}a[202]=t;n=1;return n|0}else if((e|0)==(-3|0)){a[203]=t;n=1;return n|0}else{n=0;return n|0}return 0}function br(){return(O=a[328]|0,a[328]=O+0,O)|0}function vr(e,t){e=e|0;t=t|0;var r=0,n=0,i=0,o=0,s=0,f=0,u=0,c=0,h=0,l=0,d=0,p=0,b=0,v=0,m=0,g=0,y=0,w=0,_=0,S=0,k=0,x=0,A=0,M=0,E=0,I=0,T=0,P=0,R=0,B=0,C=0,O=0,N=0,j=0,z=0;r=e;n=r+t|0;i=n;o=a[e+4>>2]|0;e:do{if((o&1|0)==0){s=a[e>>2]|0;if((o&3|0)==0){return}f=r+(-s|0)|0;u=f;c=s+t|0;h=a[212]|0;if(f>>>0<h>>>0){ke()}if((u|0)==(a[213]|0)){l=r+(t+4)|0;if((a[l>>2]&3|0)!=3){d=u;p=c;break}a[210]=c;a[l>>2]=a[l>>2]&-2;a[r+(4-s)>>2]=c|1;a[n>>2]=c;return}l=s>>>3;if(s>>>0<256){b=a[r+(8-s)>>2]|0;v=a[r+(12-s)>>2]|0;m=872+(l<<1<<2)|0;do{if((b|0)!=(m|0)){if(b>>>0<h>>>0){ke()}if((a[b+12>>2]|0)==(u|0)){break}ke()}}while(0);if((v|0)==(b|0)){a[208]=a[208]&~(1<<l);d=u;p=c;break}do{if((v|0)==(m|0)){g=v+8|0}else{if(v>>>0<h>>>0){ke()}y=v+8|0;if((a[y>>2]|0)==(u|0)){g=y;break}ke()}}while(0);a[b+12>>2]=v;a[g>>2]=b;d=u;p=c;break}m=f;l=a[r+(24-s)>>2]|0;y=a[r+(12-s)>>2]|0;do{if((y|0)==(m|0)){w=16-s|0;_=r+(w+4)|0;S=a[_>>2]|0;if((S|0)==0){k=r+w|0;w=a[k>>2]|0;if((w|0)==0){x=0;break}else{A=w;M=k}}else{A=S;M=_}while(1){_=A+20|0;S=a[_>>2]|0;if((S|0)!=0){A=S;M=_;continue}_=A+16|0;S=a[_>>2]|0;if((S|0)==0){break}else{A=S;M=_}}if(M>>>0<h>>>0){ke()}else{a[M>>2]=0;x=A;break}}else{_=a[r+(8-s)>>2]|0;if(_>>>0<h>>>0){ke()}S=_+12|0;if((a[S>>2]|0)!=(m|0)){ke()}k=y+8|0;if((a[k>>2]|0)==(m|0)){a[S>>2]=y;a[k>>2]=_;x=y;break}else{ke()}}}while(0);if((l|0)==0){d=u;p=c;break}y=r+(28-s)|0;h=1136+(a[y>>2]<<2)|0;do{if((m|0)==(a[h>>2]|0)){a[h>>2]=x;if((x|0)!=0){break}a[209]=a[209]&~(1<<a[y>>2]);d=u;p=c;break e}else{if(l>>>0<(a[212]|0)>>>0){ke()}f=l+16|0;if((a[f>>2]|0)==(m|0)){a[f>>2]=x}else{a[l+20>>2]=x}if((x|0)==0){d=u;p=c;break e}}}while(0);if(x>>>0<(a[212]|0)>>>0){ke()}a[x+24>>2]=l;m=16-s|0;y=a[r+m>>2]|0;do{if((y|0)!=0){if(y>>>0<(a[212]|0)>>>0){ke()}else{a[x+16>>2]=y;a[y+24>>2]=x;break}}}while(0);y=a[r+(m+4)>>2]|0;if((y|0)==0){d=u;p=c;break}if(y>>>0<(a[212]|0)>>>0){ke()}else{a[x+20>>2]=y;a[y+24>>2]=x;d=u;p=c;break}}else{d=e;p=t}}while(0);e=a[212]|0;if(n>>>0<e>>>0){ke()}x=r+(t+4)|0;A=a[x>>2]|0;do{if((A&2|0)==0){if((i|0)==(a[214]|0)){M=(a[211]|0)+p|0;a[211]=M;a[214]=d;a[d+4>>2]=M|1;if((d|0)!=(a[213]|0)){return}a[213]=0;a[210]=0;return}if((i|0)==(a[213]|0)){M=(a[210]|0)+p|0;a[210]=M;a[213]=d;a[d+4>>2]=M|1;a[d+M>>2]=M;return}M=(A&-8)+p|0;g=A>>>3;e:do{if(A>>>0<256){o=a[r+(t+8)>>2]|0;y=a[r+(t+12)>>2]|0;s=872+(g<<1<<2)|0;do{if((o|0)!=(s|0)){if(o>>>0<e>>>0){ke()}if((a[o+12>>2]|0)==(i|0)){break}ke()}}while(0);if((y|0)==(o|0)){a[208]=a[208]&~(1<<g);break}do{if((y|0)==(s|0)){E=y+8|0}else{if(y>>>0<e>>>0){ke()}l=y+8|0;if((a[l>>2]|0)==(i|0)){E=l;break}ke()}}while(0);a[o+12>>2]=y;a[E>>2]=o}else{s=n;l=a[r+(t+24)>>2]|0;h=a[r+(t+12)>>2]|0;do{if((h|0)==(s|0)){f=r+(t+20)|0;b=a[f>>2]|0;if((b|0)==0){v=r+(t+16)|0;_=a[v>>2]|0;if((_|0)==0){I=0;break}else{T=_;P=v}}else{T=b;P=f}while(1){f=T+20|0;b=a[f>>2]|0;if((b|0)!=0){T=b;P=f;continue}f=T+16|0;b=a[f>>2]|0;if((b|0)==0){break}else{T=b;P=f}}if(P>>>0<e>>>0){ke()}else{a[P>>2]=0;I=T;break}}else{f=a[r+(t+8)>>2]|0;if(f>>>0<e>>>0){ke()}b=f+12|0;if((a[b>>2]|0)!=(s|0)){ke()}v=h+8|0;if((a[v>>2]|0)==(s|0)){a[b>>2]=h;a[v>>2]=f;I=h;break}else{ke()}}}while(0);if((l|0)==0){break}h=r+(t+28)|0;o=1136+(a[h>>2]<<2)|0;do{if((s|0)==(a[o>>2]|0)){a[o>>2]=I;if((I|0)!=0){break}a[209]=a[209]&~(1<<a[h>>2]);break e}else{if(l>>>0<(a[212]|0)>>>0){ke()}y=l+16|0;if((a[y>>2]|0)==(s|0)){a[y>>2]=I}else{a[l+20>>2]=I}if((I|0)==0){break e}}}while(0);if(I>>>0<(a[212]|0)>>>0){ke()}a[I+24>>2]=l;s=a[r+(t+16)>>2]|0;do{if((s|0)!=0){if(s>>>0<(a[212]|0)>>>0){ke()}else{a[I+16>>2]=s;a[s+24>>2]=I;break}}}while(0);s=a[r+(t+20)>>2]|0;if((s|0)==0){break}if(s>>>0<(a[212]|0)>>>0){ke()}else{a[I+20>>2]=s;a[s+24>>2]=I;break}}}while(0);a[d+4>>2]=M|1;a[d+M>>2]=M;if((d|0)!=(a[213]|0)){R=M;break}a[210]=M;return}else{a[x>>2]=A&-2;a[d+4>>2]=p|1;a[d+p>>2]=p;R=p}}while(0);p=R>>>3;if(R>>>0<256){A=p<<1;x=872+(A<<2)|0;I=a[208]|0;t=1<<p;do{if((I&t|0)==0){a[208]=I|t;B=x;C=872+(A+2<<2)|0}else{p=872+(A+2<<2)|0;r=a[p>>2]|0;if(r>>>0>=(a[212]|0)>>>0){B=r;C=p;break}ke()}}while(0);a[C>>2]=d;a[B+12>>2]=d;a[d+8>>2]=B;a[d+12>>2]=x;return}x=d;B=R>>>8;do{if((B|0)==0){O=0}else{if(R>>>0>16777215){O=31;break}C=(B+1048320|0)>>>16&8;A=B<<C;t=(A+520192|0)>>>16&4;I=A<<t;A=(I+245760|0)>>>16&2;p=14-(t|C|A)+(I<<A>>>15)|0;O=R>>>((p+7|0)>>>0)&1|p<<1}}while(0);B=1136+(O<<2)|0;a[d+28>>2]=O;a[d+20>>2]=0;a[d+16>>2]=0;p=a[209]|0;A=1<<O;if((p&A|0)==0){a[209]=p|A;a[B>>2]=x;a[d+24>>2]=B;a[d+12>>2]=d;a[d+8>>2]=d;return}if((O|0)==31){N=0}else{N=25-(O>>>1)|0}O=R<<N;N=a[B>>2]|0;while(1){if((a[N+4>>2]&-8|0)==(R|0)){break}j=N+16+(O>>>31<<2)|0;B=a[j>>2]|0;if((B|0)==0){z=1120;break}else{O=O<<1;N=B}}if((z|0)==1120){if(j>>>0<(a[212]|0)>>>0){ke()}a[j>>2]=x;a[d+24>>2]=N;a[d+12>>2]=d;a[d+8>>2]=d;return}j=N+8|0;z=a[j>>2]|0;O=a[212]|0;if(N>>>0<O>>>0){ke()}if(z>>>0<O>>>0){ke()}a[z+12>>2]=x;a[j>>2]=x;a[d+8>>2]=z;a[d+12>>2]=N;a[d+24>>2]=0;return}function mr(e){e=e|0;var t=0,r=0,n=0;t=(e|0)==0?1:e;while(1){r=Kt(t)|0;if((r|0)!=0){n=1164;break}e=(O=a[328]|0,a[328]=O+0,O);if((e|0)==0){break}Cn[e&1]()}if((n|0)==1164){return r|0}r=Le(4)|0;a[r>>2]=560;_e(r|0,688,6);return 0}function gr(e,t){e=e|0;t=t|0;return mr(e)|0}function yr(e){e=e|0;return}function wr(e){e=e|0;return 360|0}function _r(e){e=e|0;return 448|0}function Sr(e){e=e|0;return(O=a[328]|0,a[328]=e,O)|0}function kr(e){e=e|0;a[e>>2]=560;return}function xr(e){e=e|0;a[e>>2]=592;return}function Ar(e){e=e|0;if((e|0)!=0){Yt(e)}return}function Mr(e,t){e=e|0;t=t|0;Ar(e);return}function Er(e){e=e|0;Ar(e);return}function Ir(e,t){e=e|0;t=t|0;Er(e);return}function Tr(e){e=e|0;Ar(e);return}function Pr(e){e=e|0;Ar(e);return}function Rr(e,t,r){e=e|0;t=t|0;r=r|0;return Br(e,t,r,0,0,0)|0}function Br(e,t,r,i,o,s){e=e|0;t=t|0;r=r|0;i=i|0;o=o|0;s=s|0;var f=0,u=0,c=0,l=0,d=0,p=0,b=0,v=0,m=0,g=0,y=0,w=0,_=0,S=0,k=0,x=0,A=0,M=0,I=0,T=0,P=0,R=0,B=0,C=0,O=0,N=0,j=0,z=0,L=0,F=0,H=0,U=0,D=0,q=0,K=0,Y=0,V=0,W=0,X=0,Z=0,G=0,Q=0,$=0,J=0,ee=0,te=0,re=0,ne=0;f=h;if((r|0)==0){u=-1;h=f;return u|0}c=a[44]|0;if((c|0)==0){a[196]=1;a[44]=1;l=1;d=1;p=1190}else{b=a[196]|0;v=a[74]|0;if((v|0)==-1|(b|0)!=0){l=b;d=c;p=1190}else{m=v;g=b;y=c}}if((p|0)==1190){c=(Ke(344)|0)!=0|0;a[74]=c;m=c;g=l;y=d}d=n[r]|0;if(d<<24>>24==45){w=s|2;p=1194}else{l=(m|0)!=0|d<<24>>24==43?s&-2:s;if(d<<24>>24==43){w=l;p=1194}else{_=r;S=l}}if((p|0)==1194){_=r+1|0;S=w}a[198]=0;if((g|0)==0){k=y;p=1198}else{a[50]=-1;a[48]=-1;x=y;A=g;p=1197}while(1){if((p|0)==1197){p=0;if((A|0)==0){k=x;p=1198;continue}else{M=x}}else if((p|0)==1198){p=0;g=a[40]|0;if((n[g]|0)==0){M=k}else{I=g;T=k;break}}a[196]=0;if((M|0)>=(e|0)){p=1200;break}P=t+(M<<2)|0;R=a[P>>2]|0;a[40]=R;if((n[R]|0)==45){B=R+1|0;C=n[B]|0;if(C<<24>>24!=0){p=1232;break}if((Pe(_|0,45)|0)!=0){p=1232;break}}a[40]=824;if((S&2|0)!=0){p=1217;break}if((S&1|0)==0){u=-1;p=1298;break}g=a[48]|0;do{if((g|0)==-1){a[48]=M;O=M;N=0}else{y=a[50]|0;if((y|0)==-1){O=M;N=0;break}w=y-g|0;r=M-y|0;l=(w|0)%(r|0)|0;if((l|0)==0){j=r}else{d=r;s=l;while(1){l=(d|0)%(s|0)|0;if((l|0)==0){j=s;break}else{d=s;s=l}}}s=(M-g|0)/(j|0)|0;do{if((j|0)>0){d=-w|0;if((s|0)>0){z=0}else{L=M;F=y;H=g;U=0;break}do{l=z+y|0;m=t+(l<<2)|0;c=0;b=l;l=a[m>>2]|0;while(1){v=((b|0)<(y|0)?r:d)+b|0;D=t+(v<<2)|0;q=a[D>>2]|0;a[D>>2]=l;a[m>>2]=q;D=c+1|0;if((D|0)<(s|0)){c=D;b=v;l=q}else{break}}z=z+1|0}while((z|0)<(j|0));L=a[44]|0;F=a[50]|0;H=a[48]|0;U=a[196]|0}else{L=M;F=y;H=g;U=0}}while(0);a[48]=L-F+H;a[50]=-1;O=L;N=U}}while(0);g=O+1|0;a[44]=g;x=g;A=N;p=1197}do{if((p|0)==1298){h=f;return u|0}else if((p|0)==1232){N=a[48]|0;A=a[50]|0;if((N|0)!=-1&(A|0)==-1){a[50]=M;K=n[B]|0;Y=M}else{K=C;Y=A}if(K<<24>>24==0){I=R;T=M;break}a[40]=B;if((n[B]|0)!=45){I=B;T=M;break}if((n[R+2|0]|0)!=0){I=B;T=M;break}A=M+1|0;a[44]=A;a[40]=824;if((Y|0)!=-1){x=Y-N|0;O=A-Y|0;U=(x|0)%(O|0)|0;if((U|0)==0){V=O}else{L=O;H=U;while(1){U=(L|0)%(H|0)|0;if((U|0)==0){V=H;break}else{L=H;H=U}}}H=(A-N|0)/(V|0)|0;do{if((V|0)>0){L=-x|0;if((H|0)>0){W=0}else{X=Y;Z=N;G=A;break}do{U=W+Y|0;F=t+(U<<2)|0;j=0;z=U;U=a[F>>2]|0;while(1){k=((z|0)<(Y|0)?O:L)+z|0;g=t+(k<<2)|0;y=a[g>>2]|0;a[g>>2]=U;a[F>>2]=y;g=j+1|0;if((g|0)<(H|0)){j=g;z=k;U=y}else{break}}W=W+1|0}while((W|0)<(V|0));X=a[50]|0;Z=a[48]|0;G=a[44]|0}else{X=Y;Z=N;G=A}}while(0);a[44]=Z-X+G}a[50]=-1;a[48]=-1;u=-1;h=f;return u|0}else if((p|0)==1200){a[40]=824;A=a[50]|0;N=a[48]|0;do{if((A|0)==-1){if((N|0)==-1){break}a[44]=N}else{H=A-N|0;O=M-A|0;x=(H|0)%(O|0)|0;if((x|0)==0){Q=O}else{L=O;U=x;while(1){x=(L|0)%(U|0)|0;if((x|0)==0){Q=U;break}else{L=U;U=x}}}U=(M-N|0)/(Q|0)|0;do{if((Q|0)>0){L=-H|0;if((U|0)>0){$=0}else{J=A;ee=N;te=M;break}do{x=$+A|0;z=t+(x<<2)|0;j=0;F=x;x=a[z>>2]|0;while(1){y=((F|0)<(A|0)?O:L)+F|0;k=t+(y<<2)|0;g=a[k>>2]|0;a[k>>2]=x;a[z>>2]=g;k=j+1|0;if((k|0)<(U|0)){j=k;F=y;x=g}else{break}}$=$+1|0}while(($|0)<(Q|0));J=a[50]|0;ee=a[48]|0;te=a[44]|0}else{J=A;ee=N;te=M}}while(0);a[44]=ee-J+te}}while(0);a[50]=-1;a[48]=-1;u=-1;h=f;return u|0}else if((p|0)==1217){a[44]=M+1;a[198]=a[P>>2];u=1;h=f;return u|0}}while(0);P=(i|0)!=0;e:do{if(P){if((I|0)==(a[t+(T<<2)>>2]|0)){re=I;break}M=n[I]|0;do{if(M<<24>>24==45){a[40]=I+1;ne=0}else{if((S&4|0)==0){re=I;break e}if(M<<24>>24==58){ne=0;break}ne=(Pe(_|0,M<<24>>24|0)|0)!=0|0}}while(0);M=Lr(t,_,i,o,ne)|0;if((M|0)==-1){re=a[40]|0;break}a[40]=824;u=M;h=f;return u|0}else{re=I}}while(0);I=re+1|0;a[40]=I;ne=n[re]|0;re=ne<<24>>24;if((ne<<24>>24|0)==45){if((n[I]|0)==0){p=1260}}else if((ne<<24>>24|0)==58){p=1263}else{p=1260}do{if((p|0)==1260){S=Pe(_|0,re|0)|0;if((S|0)==0){if(ne<<24>>24!=45){p=1263;break}if((n[I]|0)==0){u=-1}else{break}h=f;return u|0}T=n[S+1|0]|0;if(P&ne<<24>>24==87&T<<24>>24==59){do{if((n[I]|0)==0){M=(a[44]|0)+1|0;a[44]=M;if((M|0)<(e|0)){a[40]=a[t+(M<<2)>>2];break}a[40]=824;do{if((a[46]|0)!=0){if((n[_]|0)==58){break}Hr(48,(E=h,h=h+8|0,a[E>>2]=re,E)|0)}}while(0);a[42]=re;u=(n[_]|0)==58?58:63;h=f;return u|0}}while(0);M=Lr(t,_,i,o,0)|0;a[40]=824;u=M;h=f;return u|0}if(T<<24>>24!=58){if((n[I]|0)!=0){u=re;h=f;return u|0}a[44]=(a[44]|0)+1;u=re;h=f;return u|0}a[198]=0;do{if((n[I]|0)==0){if((n[S+2|0]|0)==58){break}M=(a[44]|0)+1|0;a[44]=M;if((M|0)<(e|0)){a[198]=a[t+(M<<2)>>2];break}a[40]=824;do{if((a[46]|0)!=0){if((n[_]|0)==58){break}Hr(48,(E=h,h=h+8|0,a[E>>2]=re,E)|0)}}while(0);a[42]=re;u=(n[_]|0)==58?58:63;h=f;return u|0}else{a[198]=I}}while(0);a[40]=824;a[44]=(a[44]|0)+1;u=re;h=f;return u|0}}while(0);do{if((p|0)==1263){if((n[I]|0)!=0){break}a[44]=(a[44]|0)+1}}while(0);do{if((a[46]|0)!=0){if((n[_]|0)==58){break}Hr(272,(E=h,h=h+8|0,a[E>>2]=re,E)|0)}}while(0);a[42]=re;u=63;h=f;return u|0}function Cr(e,t,r,n,i){e=e|0;t=t|0;r=r|0;n=n|0;i=i|0;return Br(e,t,r,n,i,1)|0}function Or(e,t,r,n,i){e=e|0;t=t|0;r=r|0;n=n|0;i=i|0;return Br(e,t,r,n,i,5)|0}function Nr(e){e=e|0;return mr(e)|0}function jr(e,t){e=e|0;t=t|0;return Nr(e)|0}function zr(){var e=0;e=Le(4)|0;a[e>>2]=560;_e(e|0,688,6)}function Lr(e,t,r,i,o){e=e|0;t=t|0;r=r|0;i=i|0;o=o|0;var s=0,f=0,u=0,c=0,l=0,d=0,p=0,b=0,v=0,m=0,g=0,y=0,w=0,_=0,S=0,k=0,x=0;s=h;f=a[40]|0;u=a[44]|0;c=u+1|0;a[44]=c;l=Pe(f|0,61)|0;if((l|0)==0){d=tn(f|0)|0;p=0}else{d=l-f|0;p=l+1|0}l=a[r>>2]|0;e:do{if((l|0)!=0){t:do{if((o|0)!=0&(d|0)==1){b=0;v=l;while(1){if((n[f]|0)==(n[v]|0)){if((tn(v|0)|0)==1){m=b;break t}}b=b+1|0;v=a[r+(b<<4)>>2]|0;if((v|0)==0){break e}}}else{v=0;b=-1;g=l;while(1){if((ge(f|0,g|0,d|0)|0)==0){if((tn(g|0)|0)==(d|0)){m=v;break t}if((b|0)==-1){y=v}else{break}}else{y=b}w=v+1|0;_=a[r+(w<<4)>>2]|0;if((_|0)==0){m=y;break t}else{v=w;b=y;g=_}}do{if((a[46]|0)!=0){if((n[t]|0)==58){break}Hr(304,(E=h,h=h+16|0,a[E>>2]=d,a[E+8>>2]=f,E)|0)}}while(0);a[42]=0;S=63;h=s;return S|0}}while(0);if((m|0)==-1){break}g=r+(m<<4)+4|0;b=a[g>>2]|0;v=(p|0)==0;if(!((b|0)!=0|v)){do{if((a[46]|0)!=0){if((n[t]|0)==58){break}Hr(208,(E=h,h=h+16|0,a[E>>2]=d,a[E+8>>2]=f,E)|0)}}while(0);if((a[r+(m<<4)+8>>2]|0)==0){k=a[r+(m<<4)+12>>2]|0}else{k=0}a[42]=k;S=(n[t]|0)==58?58:63;h=s;return S|0}do{if((b-1|0)>>>0<2){if(!v){a[198]=p;break}if((b|0)!=1){break}a[44]=u+2;a[198]=a[e+(c<<2)>>2]}}while(0);if(!((a[g>>2]|0)==1&(a[198]|0)==0)){if((i|0)!=0){a[i>>2]=m}b=a[r+(m<<4)+8>>2]|0;v=a[r+(m<<4)+12>>2]|0;if((b|0)==0){S=v;h=s;return S|0}a[b>>2]=v;S=0;h=s;return S|0}do{if((a[46]|0)!=0){if((n[t]|0)==58){break}Hr(8,(E=h,h=h+8|0,a[E>>2]=f,E)|0)}}while(0);if((a[r+(m<<4)+8>>2]|0)==0){x=a[r+(m<<4)+12>>2]|0}else{x=0}a[42]=x;a[44]=(a[44]|0)-1;S=(n[t]|0)==58?58:63;h=s;return S|0}}while(0);if((o|0)!=0){a[44]=u;S=-1;h=s;return S|0}do{if((a[46]|0)!=0){if((n[t]|0)==58){break}Hr(248,(E=h,h=h+8|0,a[E>>2]=f,E)|0)}}while(0);a[42]=0;S=63;h=s;return S|0}function Fr(e,t){e=e|0;t=t|0;var r=0,n=0,i=0;r=h;h=h+16|0;n=r|0;i=n;a[i>>2]=t;a[i+4>>2]=0;Ur(e,n|0);h=r;return}function Hr(e,t){e=e|0;t=t|0;var r=0,n=0,i=0;r=h;h=h+16|0;n=r|0;i=n;a[i>>2]=t;a[i+4>>2]=0;Dr(e,n|0);h=r;return}function Ur(e,t){e=e|0;t=t|0;var r=0,n=0,i=0;r=h;n=a[($e()|0)>>2]|0;i=a[w>>2]|0;xe(a[m>>2]|0,432,(E=h,h=h+8|0,a[E>>2]=i,E)|0)|0;if((e|0)!=0){i=a[m>>2]|0;Ye(i|0,e|0,t|0)|0;t=a[m>>2]|0;Ce(472,2,1,t|0)|0}t=a[m>>2]|0;e=Se(n|0)|0;xe(t|0,384,(E=h,h=h+8|0,a[E>>2]=e,E)|0)|0;h=r;return}function Dr(e,t){e=e|0;t=t|0;var r=0,n=0;r=h;n=a[w>>2]|0;xe(a[m>>2]|0,376,(E=h,h=h+8|0,a[E>>2]=n,E)|0)|0;if((e|0)!=0){n=a[m>>2]|0;Ye(n|0,e|0,t|0)|0}Re(10,a[m>>2]|0)|0;h=r;return}function qr(e,t){e=e|0;t=t|0;var r=0,i=0,o=0,s=0,f=0,u=0,h=0,l=0,d=0,p=0,b=0,v=0,m=0,g=0,y=0,w=0,_=0,S=0,k=0,x=0,A=0,M=0,E=0,I=0,T=0,P=0,R=0,B=0,C=0,O=0,N=0,j=0,z=0,L=0,F=0,H=0,U=0,D=0,q=0,K=0;r=e;while(1){i=r+1|0;if((Fe(n[r]|0)|0)==0){break}else{r=i}}o=n[r]|0;if((o<<24>>24|0)==45){s=i;f=1}else if((o<<24>>24|0)==43){s=i;f=0}else{s=r;f=0}r=-1;i=0;o=s;while(1){u=n[o]|0;if(((u<<24>>24)-48|0)>>>0<10){h=r}else{if(u<<24>>24!=46|(r|0)>-1){break}else{h=i}}r=h;i=i+1|0;o=o+1|0}h=o+(-i|0)|0;s=(r|0)<0;l=((s^1)<<31>>31)+i|0;d=(l|0)>18;p=(d?-18:-l|0)+(s?i:r)|0;r=d?18:l;do{if((r|0)==0){b=e;v=0}else{if((r|0)>9){l=h;d=r;i=0;while(1){s=n[l]|0;m=l+1|0;if(s<<24>>24==46){g=n[m]|0;y=l+2|0}else{g=s;y=m}w=(i*10|0)-48+(g<<24>>24)|0;m=d-1|0;if((m|0)>9){l=y;d=m;i=w}else{break}}_=+(w|0)*1e9;S=9;k=y;x=1393}else{if((r|0)>0){_=0;S=r;k=h;x=1393}else{A=0;M=0}}if((x|0)==1393){i=k;d=S;l=0;while(1){m=n[i]|0;s=i+1|0;if(m<<24>>24==46){E=n[s]|0;I=i+2|0}else{E=m;I=s}T=(l*10|0)-48+(E<<24>>24)|0;s=d-1|0;if((s|0)>0){i=I;d=s;l=T}else{break}}A=+(T|0);M=_}P=M+A;do{if((u<<24>>24|0)==69|(u<<24>>24|0)==101){l=o+1|0;d=n[l]|0;if((d<<24>>24|0)==43){R=o+2|0;B=0}else if((d<<24>>24|0)==45){R=o+2|0;B=1}else{R=l;B=0}l=n[R]|0;if(((l<<24>>24)-48|0)>>>0<10){C=R;O=0;N=l}else{j=0;z=R;L=B;break}while(1){l=(O*10|0)-48+(N<<24>>24)|0;d=C+1|0;i=n[d]|0;if(((i<<24>>24)-48|0)>>>0<10){C=d;O=l;N=i}else{j=l;z=d;L=B;break}}}else{j=0;z=o;L=0}}while(0);d=p+((L|0)==0?j:-j|0)|0;l=(d|0)<0?-d|0:d;if((l|0)>511){a[($e()|0)>>2]=34;F=1;H=88;U=511;x=1410}else{if((l|0)==0){D=1}else{F=1;H=88;U=l;x=1410}}if((x|0)==1410){while(1){x=0;if((U&1|0)==0){q=F}else{q=F*+c[H>>3]}l=U>>1;if((l|0)==0){D=q;break}else{F=q;H=H+8|0;U=l;x=1410}}}if((d|0)>-1){b=z;v=P*D;break}else{b=z;v=P/D;break}}}while(0);if((t|0)!=0){a[t>>2]=b}if((f|0)==0){K=v;return+K}K=-0-v;return+K}function Kr(e,t){e=e|0;t=t|0;return+ +qr(e,t)}function Yr(e,t){e=e|0;t=t|0;return+ +qr(e,t)}function Vr(e,t,r){e=e|0;t=t|0;r=r|0;return+ +qr(e,t)}function Wr(e,t,r){e=e|0;t=t|0;r=r|0;return+ +qr(e,t)}function Xr(e){e=e|0;return+ +qr(e,0)}function Zr(e,t,r){e=e|0;t=t|0;r=r|0;var n=0,i=0;n=h;h=h+16|0;i=n|0;n=i;a[n>>2]=r;a[n+4>>2]=0;Qr(e,t,i|0)}function Gr(e,t,r){e=e|0;t=t|0;r=r|0;var n=0,i=0;n=h;h=h+16|0;i=n|0;n=i;a[n>>2]=r;a[n+4>>2]=0;$r(e,t,i|0)}function Qr(e,t,r){e=e|0;t=t|0;r=r|0;var n=0,i=0;n=a[($e()|0)>>2]|0;i=a[w>>2]|0;xe(a[m>>2]|0,336,(E=h,h=h+8|0,a[E>>2]=i,E)|0)|0;if((t|0)!=0){i=a[m>>2]|0;Ye(i|0,t|0,r|0)|0;r=a[m>>2]|0;Ce(480,2,1,r|0)|0}r=a[m>>2]|0;t=Se(n|0)|0;xe(r|0,392,(E=h,h=h+8|0,a[E>>2]=t,E)|0)|0;je(e|0)}function $r(e,t,r){e=e|0;t=t|0;r=r|0;var n=0;n=a[w>>2]|0;xe(a[m>>2]|0,440,(E=h,h=h+8|0,a[E>>2]=n,E)|0)|0;if((t|0)!=0){n=a[m>>2]|0;Ye(n|0,t|0,r|0)|0}Re(10,a[m>>2]|0)|0;je(e|0)}function Jr(e,t,r){e=e|0;t=t|0;r=r|0;var i=0;i=e|0;if((e&3)==(t&3)){while(e&3){if((r|0)==0)return i|0;n[e]=n[t]|0;e=e+1|0;t=t+1|0;r=r-1|0}while((r|0)>=4){a[e>>2]=a[t>>2];e=e+4|0;t=t+4|0;r=r-4|0}}while((r|0)>0){n[e]=n[t]|0;e=e+1|0;t=t+1|0;r=r-1|0}return i|0}function en(e,t,r){e=e|0;t=t|0;r=r|0;var i=0,o=0,s=0;i=e+r|0;if((r|0)>=20){t=t&255;r=e&3;o=t|t<<8|t<<16|t<<24;s=i&~3;if(r){r=e+4-r|0;while((e|0)<(r|0)){n[e]=t;e=e+1|0}}while((e|0)<(s|0)){a[e>>2]=o;e=e+4|0}}while((e|0)<(i|0)){n[e]=t;e=e+1|0}}function tn(e){e=e|0;var t=0;t=e;while(n[t]|0){t=t+1|0}return t-e|0}function rn(e,t,r,n){e=e|0;t=t|0;r=r|0;n=n|0;var i=0;i=e+r>>>0;return(j=t+n+(i>>>0<e>>>0|0)>>>0,i|0)|0}function nn(e,t,r,n){e=e|0;t=t|0;r=r|0;n=n|0;var i=0;i=t-n>>>0;i=t-n-(r>>>0>e>>>0|0)>>>0;return(j=i,e-r>>>0|0)|0}function an(e,t,r){e=e|0;t=t|0;r=r|0;if((r|0)<32){j=t<<r|(e&(1<<r)-1<<32-r)>>>32-r;return e<<r}j=e<<r-32;return 0}function on(e,t,r){e=e|0;t=t|0;r=r|0;if((r|0)<32){j=t>>>r;return e>>>r|(t&(1<<r)-1)<<32-r}j=0;return t>>>r-32|0}function sn(e,t,r){e=e|0;t=t|0;r=r|0;if((r|0)<32){j=t>>r;return e>>>r|(t&(1<<r)-1)<<32-r}j=(t|0)<0?-1:0;return t>>r-32|0}function fn(e){e=e|0;var t=0;t=n[v+(e>>>24)|0]|0;if((t|0)<8)return t|0;t=n[v+(e>>16&255)|0]|0;if((t|0)<8)return t+8|0;t=n[v+(e>>8&255)|0]|0;if((t|0)<8)return t+16|0;return(n[v+(e&255)|0]|0)+24|0}function un(e){e=e|0;var t=0;t=n[b+(e&255)|0]|0;if((t|0)<8)return t|0;t=n[b+(e>>8&255)|0]|0;if((t|0)<8)return t+8|0;t=n[b+(e>>16&255)|0]|0;if((t|0)<8)return t+16|0;return(n[b+(e>>>24)|0]|0)+24|0}function cn(e,t){e=e|0;t=t|0;var r=0,n=0,i=0,a=0;r=e&65535;n=t&65535;i=oe(n,r)|0;a=e>>>16;e=(i>>>16)+(oe(n,a)|0)|0;n=t>>>16;t=oe(n,r)|0;return(j=(e>>>16)+(oe(n,a)|0)+(((e&65535)+t|0)>>>16)|0,e+t<<16|i&65535|0)|0}function hn(e,t,r,n){e=e|0;t=t|0;r=r|0;n=n|0;var i=0,a=0,o=0,s=0,f=0;i=t>>31|((t|0)<0?-1:0)<<1;a=((t|0)<0?-1:0)>>31|((t|0)<0?-1:0)<<1;o=n>>31|((n|0)<0?-1:0)<<1;s=((n|0)<0?-1:0)>>31|((n|0)<0?-1:0)<<1;f=nn(i^e,a^t,i,a)|0;t=j;e=o^i;i=s^a;a=nn((vn(f,t,nn(o^r,s^n,o,s)|0,j,0)|0)^e,j^i,e,i)|0;return(j=j,a)|0}function ln(e,t,r,n){e=e|0;t=t|0;r=r|0;n=n|0;var i=0,o=0,s=0,f=0,u=0,c=0,l=0;i=h;h=h+8|0;o=i|0;s=t>>31|((t|0)<0?-1:0)<<1;f=((t|0)<0?-1:0)>>31|((t|0)<0?-1:0)<<1;u=n>>31|((n|0)<0?-1:0)<<1;c=((n|0)<0?-1:0)>>31|((n|0)<0?-1:0)<<1;l=nn(s^e,f^t,s,f)|0;t=j;e=nn(u^r,c^n,u,c)|0;vn(l,t,e,j,o)|0;e=nn(a[o>>2]^s,a[o+4>>2]^f,s,f)|0;f=j;h=i;return(j=f,e)|0}function dn(e,t,r,n){e=e|0;t=t|0;r=r|0;n=n|0;var i=0,a=0;i=e;e=r;r=cn(i,e)|0;a=j;return(j=(oe(t,e)|0)+(oe(n,i)|0)+a|a&0,r|0|0)|0}function pn(e,t,r,n){e=e|0;t=t|0;r=r|0;n=n|0;var i=0;i=vn(e,t,r,n,0)|0;return(j=j,i)|0}function bn(e,t,r,n){e=e|0;t=t|0;r=r|0;n=n|0;var i=0,o=0;i=h;h=h+8|0;o=i|0;vn(e,t,r,n,o)|0;h=i;return(j=a[o+4>>2]|0,a[o>>2]|0)|0}function vn(e,t,r,n,i){e=e|0;t=t|0;r=r|0;n=n|0;i=i|0;var o=0,s=0,f=0,u=0,c=0,h=0,l=0,d=0,p=0,b=0,v=0,m=0,g=0,y=0,w=0,_=0,S=0,k=0,x=0,A=0,M=0,E=0,I=0,T=0,P=0,R=0,B=0,C=0,O=0,N=0,z=0,L=0;o=e;s=t;f=s;u=r;c=n;h=c;if((f|0)==0){l=(i|0)!=0;if((h|0)==0){if(l){a[i>>2]=(o>>>0)%(u>>>0);a[i+4>>2]=0}d=0;p=(o>>>0)/(u>>>0)>>>0;return(j=d,p)|0}else{if(!l){d=0;p=0;return(j=d,p)|0}a[i>>2]=e|0;a[i+4>>2]=t&0;d=0;p=0;return(j=d,p)|0}}l=(h|0)==0;do{if((u|0)==0){if(l){if((i|0)!=0){a[i>>2]=(f>>>0)%(u>>>0);a[i+4>>2]=0}d=0;p=(f>>>0)/(u>>>0)>>>0;return(j=d,p)|0}if((o|0)==0){if((i|0)!=0){a[i>>2]=0;a[i+4>>2]=(f>>>0)%(h>>>0)}d=0;p=(f>>>0)/(h>>>0)>>>0;return(j=d,p)|0}b=h-1|0;if((b&h|0)==0){if((i|0)!=0){a[i>>2]=e|0;a[i+4>>2]=b&f|t&0}d=0;p=f>>>((un(h|0)|0)>>>0);return(j=d,p)|0}b=(fn(h|0)|0)-(fn(f|0)|0)|0;if(b>>>0<=30){v=b+1|0;m=31-b|0;g=v;y=f<<m|o>>>(v>>>0);w=f>>>(v>>>0);_=0;S=o<<m;break}if((i|0)==0){d=0;p=0;return(j=d,p)|0}a[i>>2]=e|0;a[i+4>>2]=s|t&0;d=0;p=0;return(j=d,p)|0}else{if(!l){m=(fn(h|0)|0)-(fn(f|0)|0)|0;if(m>>>0<=31){v=m+1|0;b=31-m|0;k=m-31>>31;g=v;y=o>>>(v>>>0)&k|f<<b;w=f>>>(v>>>0)&k;_=0;S=o<<b;break}if((i|0)==0){d=0;p=0;return(j=d,p)|0}a[i>>2]=e|0;a[i+4>>2]=s|t&0;d=0;p=0;return(j=d,p)|0}b=u-1|0;if((b&u|0)!=0){k=(fn(u|0)|0)+33-(fn(f|0)|0)|0;v=64-k|0;m=32-k|0;x=m>>31;A=k-32|0;M=A>>31;g=k;y=m-1>>31&f>>>(A>>>0)|(f<<m|o>>>(k>>>0))&M;w=M&f>>>(k>>>0);_=o<<v&x;S=(f<<v|o>>>(A>>>0))&x|o<<m&k-33>>31;break}if((i|0)!=0){a[i>>2]=b&o;a[i+4>>2]=0}if((u|0)==1){d=s|t&0;p=e|0|0;return(j=d,p)|0}else{b=un(u|0)|0;d=f>>>(b>>>0)|0;p=f<<32-b|o>>>(b>>>0)|0;return(j=d,p)|0}}}while(0);if((g|0)==0){E=S;I=_;T=w;P=y;R=0;B=0}else{o=r|0|0;r=c|n&0;n=rn(o,r,-1,-1)|0;c=j;f=S;S=_;_=w;w=y;y=g;g=0;while(1){C=S>>>31|f<<1;O=g|S<<1;u=w<<1|f>>>31|0;e=w>>>31|_<<1|0;nn(n,c,u,e)|0;t=j;s=t>>31|((t|0)<0?-1:0)<<1;N=s&1;z=nn(u,e,s&o,(((t|0)<0?-1:0)>>31|((t|0)<0?-1:0)<<1)&r)|0;L=j;t=y-1|0;if((t|0)==0){break}else{f=C;S=O;_=L;w=z;y=t;g=N}}E=C;I=O;T=L;P=z;R=0;B=N}N=I;I=0;if((i|0)!=0){a[i>>2]=P;a[i+4>>2]=T}d=(N|0)>>>31|(E|I)<<1|(I<<1|N>>>31)&0|R;p=(N<<1|0>>>31)&-2|B;return(j=d,p)|0}function mn(e,t){e=e|0;t=t|0;Tn[e&15](t|0)}function gn(e,t,r){e=e|0;t=t|0;r=r|0;Pn[e&15](t|0,r|0)}function yn(e,t){e=e|0;t=t|0;return Rn[e&7](t|0)|0}function wn(e,t,r,n){e=e|0;t=t|0;r=r|0;n=n|0;Bn[e&15](t|0,r|0,n|0)}function _n(e){e=e|0;Cn[e&1]()}function Sn(e,t,r){e=e|0;t=t|0;r=r|0;return On[e&1](t|0,r|0)|0}function kn(e){e=e|0;se(0)}function xn(e,t){e=e|0;t=t|0;se(1)}function An(e){e=e|0;se(2);return 0}function Mn(e,t,r){e=e|0;t=t|0;r=r|0;se(3)}function En(){se(4)}function In(e,t){e=e|0;t=t|0;se(5);return 0}var Tn=[kn,kn,xr,kn,Pr,kn,yr,kn,kr,kn,Tr,kn,kn,kn,kn,kn];var Pn=[xn,xn,Fr,xn,Ur,xn,Hr,xn,Dr,xn,xn,xn,xn,xn,xn,xn];var Rn=[An,An,wr,An,_r,An,An,An];var Bn=[Mn,Mn,$r,Mn,Qr,Mn,Zr,Mn,Gr,Mn,Mn,Mn,Mn,Mn,Mn,Mn];var Cn=[En,En];var On=[In,In];return{_crypto_scrypt:Et,_strlen:tn,_free:Yt,_realloc:Wt,_memset:en,_malloc:Kt,_memcpy:Jr,_calloc:Vt,runPostSets:wt,stackAlloc:it,stackSave:at,stackRestore:ot,setThrew:st,setTempRet0:ct,setTempRet1:ht,setTempRet2:lt,setTempRet3:dt,setTempRet4:pt,setTempRet5:bt,setTempRet6:vt,setTempRet7:mt,setTempRet8:gt,setTempRet9:yt,dynCall_vi:mn,dynCall_vii:gn,dynCall_ii:yn,dynCall_viii:wn,dynCall_v:_n,dynCall_iii:Sn}}({Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array},{abort:wa,assert:w,asmPrintInt:function(e,t){s.print("int "+e+","+t)},asmPrintFloat:function(e,t){s.print("float "+e+","+t)},min:Xc,invoke_vi:function(e,t){try{s.dynCall_vi(e,t)}catch(e){"number"!=typeof e&&"longjmp"!==e&&g(e),V.setThrew(1,0)}},invoke_vii:function(e,t,r){try{s.dynCall_vii(e,t,r)}catch(e){"number"!=typeof e&&"longjmp"!==e&&g(e),V.setThrew(1,0)}},invoke_ii:function(e,t){try{return s.dynCall_ii(e,t)}catch(e){"number"!=typeof e&&"longjmp"!==e&&g(e),V.setThrew(1,0)}},invoke_viii:function(e,t,r,n){try{s.dynCall_viii(e,t,r,n)}catch(e){"number"!=typeof e&&"longjmp"!==e&&g(e),V.setThrew(1,0)}},invoke_v:function(e){try{s.dynCall_v(e)}catch(e){"number"!=typeof e&&"longjmp"!==e&&g(e),V.setThrew(1,0)}},invoke_iii:function(e,t,r){try{return s.dynCall_iii(e,t,r)}catch(e){"number"!=typeof e&&"longjmp"!==e&&g(e),V.setThrew(1,0)}},_strncmp:function(e,t,r){for(var n=0;n<r;){var i=G[e+n|0],a=G[t+n|0];if(i==a&&0==i)break;if(0==i)return-1;if(0==a)return 1;if(i!=a)return i>a?1:-1;n++}return 0},_llvm_va_end:aa(),_sysconf:function(e){switch(e){case 8:return 4096;case 54:case 56:case 21:case 61:case 63:case 22:case 67:case 23:case 24:case 25:case 26:case 27:case 69:case 28:case 101:case 70:case 71:case 29:case 30:case 199:case 75:case 76:case 32:case 43:case 44:case 80:case 46:case 47:case 45:case 48:case 49:case 42:case 82:case 33:case 7:case 108:case 109:case 107:case 112:case 119:case 121:return 200809;case 13:case 104:case 94:case 95:case 34:case 35:case 77:case 81:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 91:case 94:case 95:case 110:case 111:case 113:case 114:case 115:case 116:case 117:case 118:case 120:case 40:case 16:case 79:case 19:return-1;case 92:case 93:case 5:case 72:case 6:case 74:case 92:case 93:case 96:case 97:case 98:case 99:case 102:case 103:case 105:return 1;case 38:case 66:case 50:case 51:case 4:return 1024;case 15:case 64:case 41:return 32;case 55:case 37:case 17:return 2147483647;case 18:case 1:return 47839;case 59:case 57:return 99;case 68:case 58:return 2048;case 0:return 2097152;case 3:return 65536;case 14:return 32768;case 73:return 32767;case 39:return 16384;case 60:return 1e3;case 106:return 700;case 52:return 256;case 62:return 255;case 2:return 100;case 65:return 64;case 36:return 20;case 100:return 16;case 20:return 6;case 53:return 4;case 10:return 1}return M(N.A),-1},___cxa_throw:rc,_strerror:zc,_abort:function(){s.abort()},_fprintf:mc,_llvm_eh_exception:U,___cxa_free_exception:sc,_fflush:aa(),___buildEnvironment:wc,__reallyNegative:jc,_strchr:function(e,t){e--;do{e++;var r=A[e];if(r==t)return e}while(r);return 0},_fputc:Bc,___setErrNo:M,_fwrite:hc,_send:fc,_write:gc,_exit:function(e){Ac(e)},___cxa_find_matching_catch:function(e,t){-1==e&&(e=B[U.m>>2]),-1==t&&(t=B[U.m+4>>2]);var r=Array.prototype.slice.call(arguments,2);0!=t&&!pc(t)&&0==B[B[t>>2]-8>>2]&&(e=B[e>>2]);for(var n=0;n<r.length;n++)if(qc(r[n],t,e))return 0|(V.setTempRet0(r[n]),e);return 0|(V.setTempRet0(t),e)},___cxa_allocate_exception:function(e){return Oa(e)},_isspace:function(e){return 32==e||9<=e&&13>=e},__formatString:kc,___resumeException:function(e){0==B[U.m>>2]&&(B[U.m>>2]=e),g(e+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.")},_llvm_uadd_with_overflow_i32:function(e,t){return e>>>=0,t>>>=0,0|(V.setTempRet0(4294967295<e+t),e+t>>>0)},___cxa_does_inherit:qc,_getenv:xc,_vfprintf:function(e,t,r){return mc(e,t,B[r>>2])},___cxa_begin_catch:function(e){return oc.ta--,e},__ZSt18uncaught_exceptionv:oc,_pwrite:function(e,t,r,n){if(!(e=R[e]))return M(N.$),-1;try{return Ib(e,A,t,r,n)}catch(e){return Zb(e),-1}},___cxa_call_unexpected:function(e){s.P("Unexpected exception thrown, this is not properly supported - aborting"),za=l,g(e)},_sbrk:nc,_strerror_r:yc,___errno_location:function(){return rb},___gxx_personality_v0:aa(),___cxa_is_number_type:pc,_time:function(e){var t=Math.floor(Date.now()/1e3);return e&&(B[e>>2]=t),t},__exit:Ac,___cxa_end_catch:uc,STACKTOP:u,STACK_MAX:Ta,tempDoublePtr:qb,ABORT:za,cttz_i8:Wc,ctlz_i8:Vc,NaN:NaN,Infinity:1/0,_stderr:nb,__ZTVN10__cxxabiv120__si_class_type_infoE:ob,__ZTVN10__cxxabiv117__class_type_infoE:pb,___progname:k},I);s._crypto_scrypt=V._crypto_scrypt;var ic=s._strlen=V._strlen,tc=s._free=V._free;s._realloc=V._realloc;var tb=s._memset=V._memset,Oa=s._malloc=V._malloc,sb=s._memcpy=V._memcpy;s._calloc=V._calloc;var mb=s.runPostSets=V.runPostSets;s.dynCall_vi=V.dynCall_vi,s.dynCall_vii=V.dynCall_vii,s.dynCall_ii=V.dynCall_ii,s.dynCall_viii=V.dynCall_viii,s.dynCall_v=V.dynCall_v,s.dynCall_iii=V.dynCall_iii;var qa=function(e){return V.stackAlloc(e)},ja=function(){return V.stackSave()},ka=function(e){V.stackRestore(e)},lc;Y.Ca={},Y.D=function(e){if(-128<=e&&128>e){var t=Y.Ca[e];if(t)return t}return t=new Y(0|e,0>e?-1:0),-128<=e&&128>e&&(Y.Ca[e]=t),t},Y.p=function(e){return isNaN(e)||!isFinite(e)?Y.ZERO:e<=-Y.Ea?Y.MIN_VALUE:e+1>=Y.Ea?Y.MAX_VALUE:0>e?Y.p(-e).i():new Y(e%Y.B|0,e/Y.B|0)},Y.v=function(e,t){return new Y(e,t)},Y.k=function(e,t){0==e.length&&g(Error("number format error: empty string"));var r=t||10;if((2>r||36<r)&&g(Error("radix out of range: "+r)),"-"==e.charAt(0))return Y.k(e.substring(1),r).i();0<=e.indexOf("-")&&g(Error('number format error: interior "-" character: '+e));for(var n=Y.p(Math.pow(r,8)),i=Y.ZERO,a=0;a<e.length;a+=8){var o=Math.min(8,e.length-a),s=parseInt(e.substring(a,a+o),r);8>o?(o=Y.p(Math.pow(r,o)),i=i.multiply(o).add(Y.p(s))):(i=i.multiply(n),i=i.add(Y.p(s)))}return i},Y.ea=65536,Y.Od=16777216,Y.B=Y.ea*Y.ea,Y.Pd=Y.B/2,Y.Qd=Y.B*Y.ea,Y.eb=Y.B*Y.B,Y.Ea=Y.eb/2,Y.ZERO=Y.D(0),Y.ONE=Y.D(1),Y.Da=Y.D(-1),Y.MAX_VALUE=Y.v(-1,2147483647),Y.MIN_VALUE=Y.v(0,-2147483648),Y.cb=Y.D(16777216),q=Y.prototype,q.Z=function(){return this.j*Y.B+this.ob()},q.toString=function(e){if(e=e||10,(2>e||36<e)&&g(Error("radix out of range: "+e)),this.G())return"0";if(this.n()){if(this.o(Y.MIN_VALUE)){var t=Y.p(e),r=this.F(t),t=r.multiply(t).R(this);return r.toString(e)+t.h.toString(e)}return"-"+this.i().toString(e)}for(var r=Y.p(Math.pow(e,6)),t=this,n="";;){var i=t.F(r),a=t.R(i.multiply(r)).h.toString(e),t=i;if(t.G())return a+n;for(;6>a.length;)a="0"+a;n=""+a+n}},q.ob=function(){return 0<=this.h?this.h:Y.B+this.h},q.G=function(){return 0==this.j&&0==this.h},q.n=function(){return 0>this.j},q.Pa=function(){return 1==(1&this.h)},q.o=function(e){return this.j==e.j&&this.h==e.h},q.Ra=function(){return 0>this.ja(Y.cb)},q.qb=function(e){return 0<this.ja(e)},q.rb=function(e){return 0<=this.ja(e)},q.ja=function(e){if(this.o(e))return 0;var t=this.n(),r=e.n();return t&&!r?-1:!t&&r?1:this.R(e).n()?-1:1},q.i=function(){return this.o(Y.MIN_VALUE)?Y.MIN_VALUE:this.xb().add(Y.ONE)},q.add=function(e){var t,r=this.j>>>16,n=65535&this.j,i=this.h>>>16,a=e.j>>>16,o=65535&e.j,s=e.h>>>16;return t=(65535&this.h)+(65535&e.h)+0,e=0+(t>>>16),e+=i+s,i=0+(e>>>16),i+=n+o,n=0+(i>>>16),n=n+(r+a)&65535,Y.v((65535&e)<<16|65535&t,n<<16|65535&i)},q.R=function(e){return this.add(e.i())},q.multiply=function(e){if(this.G()||e.G())return Y.ZERO;if(this.o(Y.MIN_VALUE))return e.Pa()?Y.MIN_VALUE:Y.ZERO;if(e.o(Y.MIN_VALUE))return this.Pa()?Y.MIN_VALUE:Y.ZERO;if(this.n())return e.n()?this.i().multiply(e.i()):this.i().multiply(e).i();if(e.n())return this.multiply(e.i()).i();if(this.Ra()&&e.Ra())return Y.p(this.Z()*e.Z());var t,r,n,i,a=this.j>>>16,o=65535&this.j,s=this.h>>>16,f=65535&this.h,u=e.j>>>16,c=65535&e.j,h=e.h>>>16,e=65535&e.h;return i=0+f*e,n=0+(i>>>16),n+=s*e,r=0+(n>>>16),n=(65535&n)+f*h,r+=n>>>16,n&=65535,r+=o*e,t=0+(r>>>16),r=(65535&r)+s*h,t+=r>>>16,r&=65535,r+=f*c,t+=r>>>16,r&=65535,t=t+(a*e+o*h+s*c+f*u)&65535,Y.v(n<<16|65535&i,t<<16|r)},q.F=function(e){if(e.G()&&g(Error("division by zero")),this.G())return Y.ZERO;if(this.o(Y.MIN_VALUE)){if(e.o(Y.ONE)||e.o(Y.Da))return Y.MIN_VALUE;if(e.o(Y.MIN_VALUE))return Y.ONE;var t=this.Db().F(e).shiftLeft(1);if(t.o(Y.ZERO))return e.n()?Y.ONE:Y.Da;var r=this.R(e.multiply(t));return t.add(r.F(e))}if(e.o(Y.MIN_VALUE))return Y.ZERO;if(this.n())return e.n()?this.i().F(e.i()):this.i().F(e).i();if(e.n())return this.F(e.i()).i();for(var n=Y.ZERO,r=this;r.rb(e);){for(var t=Math.max(1,Math.floor(r.Z()/e.Z())),i=Math.ceil(Math.log(t)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),a=Y.p(t),o=a.multiply(e);o.n()||o.qb(r);)t-=i,a=Y.p(t),o=a.multiply(e);a.G()&&(a=Y.ONE),n=n.add(a),r=r.R(o)}return n},q.xb=function(){return Y.v(~this.h,~this.j)},q.shiftLeft=function(e){if(0==(e&=63))return this;var t=this.h;return 32>e?Y.v(t<<e,this.j<<e|t>>>32-e):Y.v(0,t<<e-32)},q.Db=function(){var e;if(0==(e=1))return this;var t=this.j;return 32>e?Y.v(this.h>>>e|t<<32-e,t>>e):Y.v(t>>e-32,0<=t?0:-1)},q=X.prototype,q.ga=function(e,t,r,n){for(var i=0,a=0;0<=--n;){var o=e*this[i++]+t[r]+a,a=Math.floor(o/67108864);t[r++]=67108863&o}return a},q.f=26,q.u=67108863,q.K=67108864,q.bb=Math.pow(2,52),q.Aa=26,q.Ba=0;var $c=[],bd,Z;for(bd=48,Z=0;9>=Z;++Z)$c[bd++]=Z;for(bd=97,Z=10;36>Z;++Z)$c[bd++]=Z;for(bd=65,Z=10;36>Z;++Z)$c[bd++]=Z;q=X.prototype,q.copyTo=function(e){for(var t=this.b-1;0<=t;--t)e[t]=this[t];e.b=this.b,e.c=this.c},q.D=function(e){this.b=1,this.c=0>e?-1:0,0<e?this[0]=e:-1>e?this[0]=e+DV:this.b=0},q.k=function(e,t){var r;if(16==t)r=4;else if(8==t)r=3;else if(256==t)r=8;else if(2==t)r=1;else if(32==t)r=5;else{if(4!=t)return void this.nb(e,t);r=2}this.c=this.b=0;for(var n=e.length,i=p,a=0;0<=--n;){var o=8==r?255&e[n]:Zc(e,n);0>o?"-"==e.charAt(n)&&(i=l):(i=p,0==a?this[this.b++]=o:a+r>this.f?(this[this.b-1]|=(o&(1<<this.f-a)-1)<<a,this[this.b++]=o>>this.f-a):this[this.b-1]|=o<<a,(a+=r)>=this.f&&(a-=this.f))}8==r&&0!=(128&e[0])&&(this.c=-1,0<a&&(this[this.b-1]|=(1<<this.f-a)-1<<a)),this.C(),i&&X.ZERO.t(this,this)},q.C=function(){for(var e=this.c&this.u;0<this.b&&this[this.b-1]==e;)--this.b},q.la=function(e,t){var r;for(r=this.b-1;0<=r;--r)t[r+e]=this[r];for(r=e-1;0<=r;--r)t[r]=0;t.b=this.b+e,t.c=this.c},q.jb=function(e,t){for(var r=e;r<this.b;++r)t[r-e]=this[r];t.b=Math.max(this.b-e,0),t.c=this.c},q.Qa=function(e,t){var r,n=e%this.f,i=this.f-n,a=(1<<i)-1,o=Math.floor(e/this.f),s=this.c<<n&this.u;for(r=this.b-1;0<=r;--r)t[r+o+1]=this[r]>>i|s,s=(this[r]&a)<<n;for(r=o-1;0<=r;--r)t[r]=0;t[o]=s,t.b=this.b+o+1,t.c=this.c,t.C()},q.zb=function(e,t){t.c=this.c;var r=Math.floor(e/this.f);if(r>=this.b)t.b=0;else{var n=e%this.f,i=this.f-n,a=(1<<n)-1;t[0]=this[r]>>n;for(var o=r+1;o<this.b;++o)t[o-r-1]|=(this[o]&a)<<i,t[o-r]=this[o]>>n;0<n&&(t[this.b-r-1]|=(this.c&a)<<i),t.b=this.b-r,t.C()}},q.t=function(e,t){for(var r=0,n=0,i=Math.min(e.b,this.b);r<i;)n+=this[r]-e[r],t[r++]=n&this.u,n>>=this.f;if(e.b<this.b){for(n-=e.c;r<this.b;)n+=this[r],t[r++]=n&this.u,n>>=this.f;n+=this.c}else{for(n+=this.c;r<e.b;)n-=e[r],t[r++]=n&this.u,n>>=this.f;n-=e.c}t.c=0>n?-1:0,-1>n?t[r++]=this.K+n:0<n&&(t[r++]=n),t.b=r,t.C()},q.vb=function(e){var t=$.Xa,r=this.abs(),n=t.abs(),i=r.b;for(e.b=i+n.b;0<=--i;)e[i]=0;for(i=0;i<n.b;++i)e[i+r.b]=r.ga(n[i],e,i,r.b);e.c=0,e.C(),this.c!=t.c&&X.ZERO.t(e,e)},q.Ja=function(e,t,r){var n=e.abs();if(!(0>=n.b)){var i=this.abs();if(i.b<n.b)t!=m&&t.D(0),r!=m&&this.copyTo(r);else{r==m&&(r=Yc());var a,o=Yc(),s=this.c,e=e.c,f=n[n.b-1],u=1;if(0!=(a=f>>>16)&&(f=a,u+=16),0!=(a=f>>8)&&(f=a,u+=8),0!=(a=f>>4)&&(f=a,u+=4),0!=(a=f>>2)&&(f=a,u+=2),0!=f>>1&&(u+=1),f=this.f-u,0<f?(n.Qa(f,o),i.Qa(f,r)):(n.copyTo(o),i.copyTo(r)),n=o.b,0!=(i=o[n-1])){a=i*(1<<this.Aa)+(1<n?o[n-2]>>this.Ba:0),u=this.bb/a,a=(1<<this.Aa)/a;var c=1<<this.Ba,h=r.b,l=h-n,d=t==m?Yc():t;for(o.la(l,d),0<=r.U(d)&&(r[r.b++]=1,r.t(d,r)),X.ONE.la(n,d),d.t(o,o);o.b<n;)o[o.b++]=0;for(;0<=--l;){var p=r[--h]==i?this.u:Math.floor(r[h]*u+(r[h-1]+c)*a);if((r[h]+=o.ga(p,r,l,n))<p)for(o.la(l,d),r.t(d,r);r[h]<--p;)r.t(d,r)}t!=m&&(r.jb(n,t),s!=e&&X.ZERO.t(t,t)),r.b=n,r.C(),0<f&&r.zb(f,r),0>s&&X.ZERO.t(r,r)}}}},q.toString=function(e){if(0>this.c)return"-"+this.i().toString(e);if(16==e)e=4;else if(8==e)e=3;else if(2==e)e=1;else if(32==e)e=5;else{if(4!=e)return this.Fb(e);e=2}var t,r=(1<<e)-1,n=p,i="",a=this.b,o=this.f-a*this.f%e;if(0<a--)for(o<this.f&&0<(t=this[a]>>o)&&(n=l,i="0123456789abcdefghijklmnopqrstuvwxyz".charAt(t));0<=a;)o<e?(t=(this[a]&(1<<o)-1)<<e-o,t|=this[--a]>>(o+=this.f-e)):(t=this[a]>>(o-=e)&r,0>=o&&(o+=this.f,--a)),0<t&&(n=l),n&&(i+="0123456789abcdefghijklmnopqrstuvwxyz".charAt(t));return n?i:"0"},q.i=function(){var e=Yc();return X.ZERO.t(this,e),e},q.abs=function(){return 0>this.c?this.i():this},q.U=function(e){var t=this.c-e.c;if(0!=t)return t;var r=this.b,t=r-e.b;if(0!=t)return 0>this.c?-t:t;for(;0<=--r;)if(0!=(t=this[r]-e[r]))return t;return 0},X.ZERO=ad(0),X.ONE=ad(1),q=X.prototype,q.nb=function(e,t){this.D(0),t==m&&(t=10);for(var r=this.S(t),n=Math.pow(t,r),i=p,a=0,o=0,s=0;s<e.length;++s){var f=Zc(e,s);0>f?"-"==e.charAt(s)&&0==this.ra()&&(i=l):(o=t*o+f,++a>=r&&(this.Ia(n),this.Ha(o),o=a=0))}0<a&&(this.Ia(Math.pow(t,a)),this.Ha(o)),i&&X.ZERO.t(this,this)},q.S=function(e){return Math.floor(Math.LN2*this.f/Math.log(e))},q.ra=function(){return 0>this.c?-1:0>=this.b||1==this.b&&0>=this[0]?0:1},q.Ia=function(e){this[this.b]=this.ga(e-1,this,0,this.b),++this.b,this.C()},q.Ha=function(e){var t=0;if(0!=e){for(;this.b<=t;)this[this.b++]=0;for(this[t]+=e;this[t]>=this.K;)this[t]-=this.K,++t>=this.b&&(this[this.b++]=0),++this[t]}},q.Fb=function(e){if(e==m&&(e=10),0==this.ra()||2>e||36<e)return"0";var t=this.S(e),t=Math.pow(e,t),r=ad(t),n=Yc(),i=Yc(),a="";for(this.Ja(r,n,i);0<n.ra();)a=(t+i.Oa()).toString(e).substr(1)+a,n.Ja(r,n,i);return i.Oa().toString(e)+a},q.Oa=function(){if(0>this.c){if(1==this.b)return this[0]-this.K;if(0==this.b)return-1}else{if(1==this.b)return this[0];if(0==this.b)return 0}return(this[1]&(1<<32-this.f)-1)<<this.f|this[0]},q.fa=function(e,t){for(var r=0,n=0,i=Math.min(e.b,this.b);r<i;)n+=this[r]+e[r],t[r++]=n&this.u,n>>=this.f;if(e.b<this.b){for(n+=e.c;r<this.b;)n+=this[r],t[r++]=n&this.u,n>>=this.f;n+=this.c}else{for(n+=this.c;r<e.b;)n+=e[r],t[r++]=n&this.u,n>>=this.f;n+=e.c}t.c=0>n?-1:0,0<n?t[r++]=n:-1>n&&(t[r++]=this.K+n),t.b=r,t.C()};var $={abs:function(e,t){var r=new Y(e,t),r=r.n()?r.i():r;B[qb>>2]=r.h,B[qb+4>>2]=r.j},Ka:function(){$.kb||($.kb=l,$.Xa=new X,$.Xa.k("4294967296",10),$.sa=new X,$.sa.k("18446744073709551616",10),$.xe=new X,$.ye=new X)},me:function(e,t){var r=new X;r.k(t.toString(),10);var n=new X;r.vb(n),r=new X,r.k(e.toString(),10);var i=new X;return r.fa(n,i),i},stringify:function(e,t,r){return e=new Y(e,t).toString(),r&&"-"==e[0]&&($.Ka(),r=new X,r.k(e,10),e=new X,$.sa.fa(r,e),e=e.toString(10)),e},k:function(e,t,r,n,i){$.Ka();var a=new X;a.k(e,t),e=new X,e.k(r,10),r=new X,r.k(n,10),i&&0>a.U(X.ZERO)&&(n=new X,a.fa($.sa,n),a=n),n=p,0>a.U(e)?(a=e,n=l):0<a.U(r)&&(a=r,n=l),a=Y.k(a.toString()),B[qb>>2]=a.h,B[qb+4>>2]=a.j,n&&g("range error")}};lc=$;var cd,dd;if(s.callMain=s.$d=function(e){function t(){for(var e=0;3>e;e++)n.push(0)}w(0==L,"cannot call main when async dependencies remain! (listen on __ATMAIN__)"),w(0==Wa.length,"cannot call main when preRun functions remain to be called"),e=e||[],ab||(ab=l,Va(Xa));var r=e.length+1,n=[F(J("/bin/this.program"),"i8",Ka)];t();for(var i=0;i<r-1;i+=1)n.push(F(J(e[i]),"i8",Ka)),t();n.push(0),n=F(n,"i32",Ka),cd=u,dd=l;var a;try{a=s._main(r,n,0)}catch(e){if(e&&"object"==typeof e&&"ExitStatus"==e.type)return s.print("Exit Status: "+e.value),e.value;"SimulateInfiniteLoop"==e?s.noExitRuntime=l:g(e)}finally{dd=p}s.noExitRuntime||ed(a)},s.run=s.we=lb,s.exit=s.de=ed,s.abort=s.abort=wa,s.preInit)for("function"==typeof s.preInit&&(s.preInit=[s.preInit]);0<s.preInit.length;)s.preInit.pop()();var kb=l;s.noInitialRun&&(kb=p),lb();var scrypt=function(){function e(e){return t(unescape(encodeURIComponent(e)))}function t(e){for(var t=new Uint8Array(e.length),r=0;r<e.length;r++){var n=e.charCodeAt(r);if((255&n)!==n)throw{message:"Cannot encode string in Latin1",str:e};t[r]=255&n}return t}function r(e){return decodeURIComponent(escape(n(e)))}function n(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}function i(e){for(var t=[],r=0;r<e.length;r++)t.push("0123456789abcdef"[e[r]>>4&15]),t.push("0123456789abcdef"[15&e[r]]);return t.join("")}function a(e,t){var r=t||0,n=scrypt_raw._malloc(e.length+r);scrypt_raw.HEAPU8.set(e,n+r);for(var i=n;i<n+r;i++)scrypt_raw.HEAPU8[i]=0;return n}function o(e,t){var r=new Uint8Array(t);return r.set(scrypt_raw.HEAPU8.subarray(e,e+t)),r}function s(e,t){if(0!==t)throw{message:"scrypt_raw."+e+" signalled an error"}}function f(e){this.length=e,this.address=scrypt_raw._malloc(e)}function u(e){for(var t=0;t<e.length;t++)scrypt_raw._free(e[t])}function c(e,t,r,n,i,o){var c=new f(o),h=a(e),l=a(t);return s("_crypto_scrypt",scrypt_raw._crypto_scrypt(h,e.length,l,t.length,r,0,n,i,c.address,c.length)),u([h,l]),c.extractBytes()}var h={};return f.prototype.extractBytes=function(e){var t=o(this.address+(e||0),this.length-(e||0));return scrypt_raw._free(this.address),this.address=null,t},h.encode_utf8=e,h.encode_latin1=t,h.decode_utf8=r,h.decode_latin1=n,h.to_hex=i,h.crypto_scrypt=c,h}();return scrypt}}).call(exports,__webpack_require__(10),"/",__webpack_require__(57)(module))},function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var i=e[n];"."===i?e.splice(n,1):".."===i?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,a=function(e){return i.exec(e).slice(1)};t.resolve=function(){for(var t="",i=!1,a=arguments.length-1;a>=-1&&!i;a--){var o=a>=0?arguments[a]:e.cwd();if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,i="/"===o.charAt(0))}return t=r(n(t.split("/"),function(e){return!!e}),!i).join("/"),(i?"/":"")+t||"."},t.normalize=function(e){var i=t.isAbsolute(e),a="/"===o(e,-1);return e=r(n(e.split("/"),function(e){return!!e}),!i).join("/"),e||i||(e="."),e&&a&&(e+="/"),(i?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var i=n(e.split("/")),a=n(r.split("/")),o=Math.min(i.length,a.length),s=o,f=0;f<o;f++)if(i[f]!==a[f]){s=f;break}for(var u=[],f=s;f<i.length;f++)u.push("..");return u=u.concat(a.slice(s)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=a(e),r=t[0],n=t[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},t.basename=function(e,t){var r=a(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){return a(e)[3]};var o="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(t,r(10))},function(e,t,r){"use strict";(function(t){!function(r){function n(e){function t(e){for(var t=0,l=e.length;l>=64;){var d,p,b,v,m,g=n,y=i,w=a,_=o,S=s,k=f,x=u,A=c;for(p=0;p<16;p++)b=t+4*p,h[p]=(255&e[b])<<24|(255&e[b+1])<<16|(255&e[b+2])<<8|255&e[b+3];for(p=16;p<64;p++)d=h[p-2],v=(d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10,d=h[p-15],m=(d>>>7|d<<25)^(d>>>18|d<<14)^d>>>3,h[p]=(v+h[p-7]|0)+(m+h[p-16]|0)|0;for(p=0;p<64;p++)v=(((S>>>6|S<<26)^(S>>>11|S<<21)^(S>>>25|S<<7))+(S&k^~S&x)|0)+(A+(r[p]+h[p]|0)|0)|0,m=((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))+(g&y^g&w^y&w)|0,A=x,x=k,k=S,S=_+v|0,_=w,w=y,y=g,g=v+m|0;n=n+g|0,i=i+y|0,a=a+w|0,o=o+_|0,s=s+S|0,f=f+k|0,u=u+x|0,c=c+A|0,t+=64,l-=64}}var r=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],n=1779033703,i=3144134277,a=1013904242,o=2773480762,s=1359893119,f=2600822924,u=528734635,c=1541459225,h=new Array(64);t(e);var l,d=e.length%64,p=e.length/536870912|0,b=e.length<<3,v=d<56?56:120,m=e.slice(e.length-d,e.length);for(m.push(128),l=d+1;l<v;l++)m.push(0);return m.push(p>>>24&255),m.push(p>>>16&255),m.push(p>>>8&255),m.push(p>>>0&255),m.push(b>>>24&255),m.push(b>>>16&255),m.push(b>>>8&255),m.push(b>>>0&255),t(m),[n>>>24&255,n>>>16&255,n>>>8&255,n>>>0&255,i>>>24&255,i>>>16&255,i>>>8&255,i>>>0&255,a>>>24&255,a>>>16&255,a>>>8&255,a>>>0&255,o>>>24&255,o>>>16&255,o>>>8&255,o>>>0&255,s>>>24&255,s>>>16&255,s>>>8&255,s>>>0&255,f>>>24&255,f>>>16&255,f>>>8&255,f>>>0&255,u>>>24&255,u>>>16&255,u>>>8&255,u>>>0&255,c>>>24&255,c>>>16&255,c>>>8&255,c>>>0&255]}function i(e,t,r){function i(){for(var e=o-1;e>=o-4;e--){if(++s[e]<=255)return;s[e]=0}}e=e.length<=64?e:n(e);var a,o=64+t.length+4,s=new Array(o),f=new Array(64),u=[];for(a=0;a<64;a++)s[a]=54;for(a=0;a<e.length;a++)s[a]^=e[a];for(a=0;a<t.length;a++)s[64+a]=t[a];for(a=o-4;a<o;a++)s[a]=0;for(a=0;a<64;a++)f[a]=92;for(a=0;a<e.length;a++)f[a]^=e[a];for(;r>=32;)i(),u=u.concat(n(f.concat(n(s)))),r-=32;return r>0&&(i(),u=u.concat(n(f.concat(n(s))).slice(0,r))),u}function a(e,t,r,n,i){var a;for(u(e,16*(2*r-1),i,0,16),a=0;a<2*r;a++)f(e,16*a,i,16),s(i,n),u(i,0,e,t+16*a,16);for(a=0;a<r;a++)u(e,t+2*a*16,e,16*a,16);for(a=0;a<r;a++)u(e,t+16*(2*a+1),e,16*(a+r),16)}function o(e,t){return e<<t|e>>>32-t}function s(e,t){u(e,0,t,0,16);for(var r=8;r>0;r-=2)t[4]^=o(t[0]+t[12],7),t[8]^=o(t[4]+t[0],9),t[12]^=o(t[8]+t[4],13),t[0]^=o(t[12]+t[8],18),t[9]^=o(t[5]+t[1],7),t[13]^=o(t[9]+t[5],9),t[1]^=o(t[13]+t[9],13),t[5]^=o(t[1]+t[13],18),t[14]^=o(t[10]+t[6],7),t[2]^=o(t[14]+t[10],9),t[6]^=o(t[2]+t[14],13),t[10]^=o(t[6]+t[2],18),t[3]^=o(t[15]+t[11],7),t[7]^=o(t[3]+t[15],9),t[11]^=o(t[7]+t[3],13),t[15]^=o(t[11]+t[7],18),t[1]^=o(t[0]+t[3],7),t[2]^=o(t[1]+t[0],9),t[3]^=o(t[2]+t[1],13),t[0]^=o(t[3]+t[2],18),t[6]^=o(t[5]+t[4],7),t[7]^=o(t[6]+t[5],9),t[4]^=o(t[7]+t[6],13),t[5]^=o(t[4]+t[7],18),t[11]^=o(t[10]+t[9],7),t[8]^=o(t[11]+t[10],9),t[9]^=o(t[8]+t[11],13),t[10]^=o(t[9]+t[8],18),t[12]^=o(t[15]+t[14],7),t[13]^=o(t[12]+t[15],9),t[14]^=o(t[13]+t[12],13),t[15]^=o(t[14]+t[13],18);for(r=0;r<16;++r)e[r]+=t[r]}function f(e,t,r,n){for(var i=0;i<n;i++)r[i]^=e[t+i]}function u(e,t,r,n,i){for(;i--;)r[n++]=e[t++]}function c(e){if(!e||"number"!=typeof e.length)return!1;for(var t=0;t<e.length;t++){if("number"!=typeof e[t])return!1;var r=parseInt(e[t]);if(r!=e[t]||r<0||r>=256)return!1}return!0}function h(e,t){var r=parseInt(e);if(e!=r)throw new Error("invalid "+t);return r}function l(e,r,n,o,s,l,p){if(!p)throw new Error("missing callback");if(n=h(n,"N"),o=h(o,"r"),s=h(s,"p"),l=h(l,"dkLen"),0===n||0!=(n&n-1))throw new Error("N must be power of 2");if(n>d/128/o)throw new Error("N too large");if(o>d/128/s)throw new Error("r too large");if(!c(e))throw new Error("password must be an array or buffer");if(!c(r))throw new Error("salt must be an array or buffer");for(var b=i(e,r,128*s*o),v=new Uint32Array(32*s*o),m=0;m<v.length;m++){var g=4*m;v[m]=(255&b[g+3])<<24|(255&b[g+2])<<16|(255&b[g+1])<<8|(255&b[g+0])<<0}var y,w,_=new Uint32Array(64*o),S=new Uint32Array(32*o*n),k=32*o,x=new Uint32Array(16),A=new Uint32Array(16),M=s*n*2,E=0,I=null,T=!1,P=0,R=0,B=parseInt(1e3/o),C=void 0!==t?t:setTimeout,O=function(){if(T)return p(new Error("cancelled"),E/M);switch(P){case 0:w=32*R*o,u(v,w,_,0,k),P=1,y=0;case 1:var t=n-y;t>B&&(t=B);for(var r=0;r<t;r++)u(_,0,S,(y+r)*k,k),a(_,k,o,x,A);y+=t,E+=t;var c=parseInt(1e3*E/M);if(c!==I){if(T=p(null,E/M))break;I=c}if(y<n)break;y=0,P=2;case 2:var t=n-y;t>B&&(t=B);for(var r=0;r<t;r++){var h=16*(2*o-1),d=_[h]&n-1;f(S,d*k,_,k),a(_,k,o,x,A)}y+=t,E+=t;var c=parseInt(1e3*E/M);if(c!==I){if(T=p(null,E/M))break;I=c}if(y<n)break;if(u(_,0,v,w,k),++R<s){P=0;break}b=[];for(var r=0;r<v.length;r++)b.push(v[r]>>0&255),b.push(v[r]>>8&255),b.push(v[r]>>16&255),b.push(v[r]>>24&255);var m=i(e,b,l);return p(null,1,m)}C(O)};O()}var d=2147483647;e.exports=l}()}).call(t,r(34).setImmediate)},function(e,t,r){var n,i;!function(a,o){"use strict";n=o,void 0!==(i="function"==typeof n?n.call(t,r,t,e):n)&&(e.exports=i)}(0,function(){"use strict";function e(e,t){var r=e[t];if("function"==typeof r.bind)return r.bind(e);try{return Function.prototype.bind.call(r,e)}catch(t){return function(){return Function.prototype.apply.apply(r,[e,arguments])}}}function t(t){return"debug"===t&&(t="log"),typeof console!==s&&(void 0!==console[t]?e(console,t):void 0!==console.log?e(console,"log"):o)}function r(e,t){for(var r=0;r<f.length;r++){var n=f[r];this[n]=r<e?o:this.methodFactory(n,e,t)}this.log=this.debug}function n(e,t,n){return function(){typeof console!==s&&(r.call(this,t,n),this[e].apply(this,arguments))}}function i(e,r,i){return t(e)||n.apply(this,arguments)}function a(e,t,n){function a(e){var t=(f[e]||"silent").toUpperCase();if(typeof window!==s){try{return void(window.localStorage[h]=t)}catch(e){}try{window.document.cookie=encodeURIComponent(h)+"="+t+";"}catch(e){}}}function o(){var e;if(typeof window!==s){try{e=window.localStorage[h]}catch(e){}if(typeof e===s)try{var t=window.document.cookie,r=t.indexOf(encodeURIComponent(h)+"=");-1!==r&&(e=/^([^;]+)/.exec(t.slice(r))[1])}catch(e){}return void 0===c.levels[e]&&(e=void 0),e}}var u,c=this,h="loglevel";e&&(h+=":"+e),c.name=e,c.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},c.methodFactory=n||i,c.getLevel=function(){return u},c.setLevel=function(t,n){if("string"==typeof t&&void 0!==c.levels[t.toUpperCase()]&&(t=c.levels[t.toUpperCase()]),!("number"==typeof t&&t>=0&&t<=c.levels.SILENT))throw"log.setLevel() called with invalid level: "+t;if(u=t,!1!==n&&a(t),r.call(c,t,e),typeof console===s&&t<c.levels.SILENT)return"No console available for logging"},c.setDefaultLevel=function(e){o()||c.setLevel(e,!1)},c.enableAll=function(e){c.setLevel(c.levels.TRACE,e)},c.disableAll=function(e){c.setLevel(c.levels.SILENT,e)};var l=o();null==l&&(l=null==t?"WARN":t),c.setLevel(l,!1)}var o=function(){},s="undefined",f=["trace","debug","info","warn","error"],u=new a,c={};u.getLogger=function(e){if("string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=c[e];return t||(t=c[e]=new a(e,u.getLevel(),u.methodFactory)),t};var h=typeof window!==s?window.log:void 0;return u.noConflict=function(){return typeof window!==s&&window.log===u&&(window.log=h),u},u.getLoggers=function(){return c},u})},function(e,t,r){var n,i;!function(a,o){n=o,void 0!==(i="function"==typeof n?n.call(t,r,t,e):n)&&(e.exports=i)}(0,function(e){"use strict";var t,r=function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(t in arguments[r])Object.prototype.hasOwnProperty.call(arguments[r],t)&&(e[t]=arguments[r][t]);return e},n={template:"[%t] %l:",timestampFormatter:function(e){return e.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/,"$1")},levelFormatter:function(e){return e.toUpperCase()},nameFormatter:function(e){return e||"root"}},i={},a=function(e,t){function a(e,t,r){var n=o(e,t,r),a=i[r]||i[""],f=-1!==a.template.indexOf("%t"),u=-1!==a.template.indexOf("%l"),c=-1!==a.template.indexOf("%n");return function(){for(var t="",o=arguments.length,h=Array(o),l=0;l<o;l++)h[l]=arguments[l];!s&&i[r]||(a.format?t+=a.format(e,r):(t+=a.template,f&&(t=t.replace(/%t/,a.timestampFormatter(new Date))),u&&(t=t.replace(/%l/,a.levelFormatter(e))),c&&(t=t.replace(/%n/,a.nameFormatter(r)))),h.length&&"string"==typeof h[0]?h[0]=t+" "+h[0]:h.unshift(t)),n.apply(void 0,h)}}if(!e||!e.setLevel)throw new TypeError("Argument is not a logger");var o=e.methodFactory,s=e.name||"",f=i[s]||i[""]||n;return i[s]||(e.methodFactory=a),t=t||{},t.format=t.format,i[s]=r({},f,t),e.setLevel(e.getLevel()),e},o={apply:a};return e&&(t=e.prefix,o.noConflict=function(){return e.prefix===o&&(e.prefix=t),o}),o})},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(43),s=r(21),f=r(4),u=r(2),c=r(24),h=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,e),this.address=r.address||"",this.net=r.net||"NoNet",this.assetSymbols=r.assetSymbols?r.assetSymbols:[],this.assets={},r.assets&&Object.keys(r.assets).map(function(e){"object"===i(r.assets[e])&&t.addAsset(e,r.assets[e])}),this.tokenSymbols=r.tokenSymbols?r.tokenSymbols:[],this.tokens=r.tokens?r.tokens:{}}return a(e,[{key:"addAsset",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.AssetBalance)();e=e.toUpperCase(),this.assetSymbols.push(e);var r=(0,o.AssetBalance)(t);return this.assets[e]=r,this}},{key:"addToken",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e=e.toUpperCase(),this.tokenSymbols.push(e),this.tokens[e]=new u.Fixed8(t),this}},{key:"applyTx",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e=e instanceof s.Transaction?e:s.Transaction.deserialize(e);var n=this.assetSymbols,i=!0,a=!1,o=void 0;try{for(var u,c=e.inputs[Symbol.iterator]();!(i=(u=c.next()).done);i=!0){var h=u.value;!function(e){var r=function(t){return t.txid===e.prevHash&&t.index===e.prevIndex},i=!0,a=!1,o=void 0;try{for(var s,f=n[Symbol.iterator]();!(i=(s=f.next()).done);i=!0){var u=s.value,c=t.assets[u],h=c.unspent.findIndex(r);if(h>=0){var l=c.unspent.splice(h,1);c.spent=c.spent.concat(l);break}}}catch(e){a=!0,o=e}finally{try{!i&&f.return&&f.return()}finally{if(a)throw o}}}(h)}}catch(e){a=!0,o=e}finally{try{!i&&c.return&&c.return()}finally{if(a)throw o}}for(var l=e.hash,d=0;d<e.outputs.length;d++)!function(n){var i=e.outputs[n],a=f.ASSETS[i.assetId],o=t.assets[a];o||t.addAsset(a);var s={index:n,txid:l,value:i.value};if(r){var u=o.unconfirmed.findIndex(function(e){return e.txid===s.txid&&e.index===s.index});u>=0&&o.unconfirmed.splice(u,1),o.balance=o.balance.add(i.value),o.unspent||(o.unspent=[]),o.unspent.push(s)}else o.unconfirmed||(o.unconfirmed=[]),o.unconfirmed.push(s);t.assets[a]=o}(d);return this}},{key:"confirm",value:function(){var e=!0,t=!1,r=void 0;try{for(var n,i=this.assetSymbols[Symbol.iterator]();!(e=(n=i.next()).done);e=!0){var a=n.value,o=this.assets[a];o.unspent=o.unspent.concat(o.unconfirmed),o.unconfirmed=[]}}catch(e){t=!0,r=e}finally{try{!e&&i.return&&i.return()}finally{if(t)throw r}}return this}},{key:"export",value:function(){return{net:this.net,address:this.address,assetSymbols:this.assetSymbols,assets:p(this.assets),tokenSymbols:this.tokenSymbols,tokens:this.tokens}}},{key:"verifyAssets",value:function(e){var t=this,r=[],n=this.assetSymbols;return n.map(function(n){var i=t.assets[n];r.push(l(e,i))}),Promise.all(r).then(function(e){return n.map(function(r,n){t.assets[r]=e[n]}),t})}},{key:Symbol.toStringTag,get:function(){return"Balance"}}],[{key:"import",value:function(t){return new e(JSON.parse(t))}}]),e}(),l=function(e,t){var r={balance:new u.Fixed8(0),spent:[],unspent:[],unconfirmed:[]};return d(e,t.unspent).then(function(e){return e.map(function(e,n){var i=t.unspent[n];e?(0!==e.value.cmp(i.value)&&(i.value=e.value),r.unspent.push(i),r.balance=r.balance.add(i.value)):r.spent.push(i)}),r})},d=function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var f=o.value;!function(t){var n=c.Query.getTxOut(t.txid,t.index).execute(e).then(function(e){var r=e.result;return r?{txid:t.txid,index:r.n,assetId:r.asset,value:new u.Fixed8(r.value)}:null});r.push(n)}(f)}}catch(e){i=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw a}}return Promise.all(r)};t.default=h;var p=function(e){var t={};return Object.keys(e).map(function(r){var n=e[r],i={balance:n.balance.toNumber(),spent:n.spent.map(function(e){return b(e)}),unspent:n.unspent.map(function(e){return b(e)}),unconfirmed:n.unconfirmed.map(function(e){return b(e)})};t[r]=i}),t},b=function(e){return{index:e.index,txid:e.txid,value:e.value.toNumber()}}},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(11),u=r(4),c=r(45),h=r(2),l=r(71),d=i(l),p=r(28),b=n(p),v=r(68),m=n(v),g=r(44),y=n(g),w=r(6),_=i(w),S=(0,_.default)("tx"),k=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,e),this.type=r.type||128,this.version=r.version||u.TX_VERSION.CONTRACT,this.attributes=r.attributes||[],this.inputs=r.inputs||[],this.outputs=r.outputs?r.outputs.map(function(e){return b.TransactionOutput(e)}):[],this.scripts=r.scripts||[];var n=y.getExclusive[this.type](r);Object.keys(n).map(function(e){t[e]=n[e]})}return s(e,[{key:"addOutput",value:function(e,t,r){if(3===arguments.length)this.outputs.push(b.createTransactionOutput(e,t,r));else{if("object"!==o(arguments[0]))throw new Error("Invalid input given! Give either 1 or 3 arguments!");this.outputs.push(arguments[0])}return this}},{key:"addAttribute",value:function(e,t){if("string"!=typeof t)throw new TypeError("data should be formatted as string!");return this.attributes.push({usage:e,data:t}),this}},{key:"addRemark",value:function(e){var t=(0,h.str2hexstring)(e);return this.addAttribute(d.default.Remark,t)}},{key:"calculate",value:function(e){var t=m.calculateInputs(e,this.outputs,this.gas),r=t.inputs,n=t.change;return this.inputs=r,this.outputs=this.outputs.concat(n),e.applyTx(this),S.info("Calculated the inputs required for Transaction with Balance: "+e.address),this}},{key:"serialize",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return m.serializeTransaction(this,e)}},{key:"serializeExclusiveData",value:function(){return y.serializeExclusive[this.type](this)}},{key:"sign",value:function(e){return"string"==typeof e&&(e=new f.Account(e)),m.signTransaction(this,e.privateKey),S.info("Signed Transaction with Account: "+e.label),this}},{key:Symbol.toStringTag,get:function(){return"Transaction"}},{key:"exclusiveData",get:function(){return y.getExclusive[this.type](this)}},{key:"hash",get:function(){return m.getTransactionHash(this)}}],[{key:"createClaimTx",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0===r.claims.length)throw new Error("Useless transaction! There is no claims!");var i=new f.Account(t),a=Object.assign({type:2,version:u.TX_VERSION.CLAIM},n),o=new h.Fixed8(0);a.claims=r.claims.slice(0,255).map(function(e){return o=o.add(e.claim),{prevHash:e.txid,prevIndex:e.index}}),a.outputs=[{assetId:u.ASSET_ID.GAS,value:o,scriptHash:i.scriptHash}];var s=new e(Object.assign(a,n));return S.info("New ClaimTransaction for "+i.address),s}},{key:"createContractTx",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null===r)throw new Error("Useless transaction! You are not sending anything!");var i=Object.assign({type:128,version:u.TX_VERSION.CONTRACT,outputs:r},n),a=new e(i).calculate(t);return S.info("New ContractTransaction for "+t.address),a}},{key:"createInvocationTx",value:function(t,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};null===r&&(r=[]);var o=Object.assign({type:209,version:u.TX_VERSION.INVOCATION,outputs:r,script:"string"==typeof n?n:(0,c.createScript)(n),gas:i},a),s=new e(o).calculate(t);return S.info("New InvocationTransaction for "+t.address),s}},{key:"deserialize",value:function(t){var r=m.deserializeTransaction(t),n=y.getExclusive[r.type](r);return new e(Object.assign(r,n))}}]),e}();t.default=k},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateDeployScript=t.createScript=void 0;var n=r(2),i=r(69),a=function(e){return e&&e.__esModule?e:{default:e}}(i);t.createScript=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];1===t.length&&Array.isArray(t[0])&&(t=t[0]);var n=new a.default,i=!0,o=!1,s=void 0;try{for(var f,u=t[Symbol.iterator]();!(i=(f=u.next()).done);i=!0){var c=f.value;if(!c.scriptHash)throw new Error("No scriptHash found!");var h=Object.assign({operation:null,args:void 0,useTailCall:!1},c),l=h.scriptHash,d=h.operation,p=h.args,b=h.useTailCall;n.emitAppCall(l,d,p,b)}}catch(e){o=!0,s=e}finally{try{!i&&u.return&&u.return()}finally{if(o)throw s}}return n.str},t.generateDeployScript=function(e){var t=e.script,r=e.name,i=e.version,o=e.author,s=e.email,f=e.description,u=e.needsStorage,c=void 0!==u&&u,h=e.returnType,l=void 0===h?"ff":h,d=e.paramaterList,p=void 0===d?void 0:d,b=new a.default;return b.emitPush((0,n.str2hexstring)(f)).emitPush((0,n.str2hexstring)(s)).emitPush((0,n.str2hexstring)(o)).emitPush((0,n.str2hexstring)(i)).emitPush((0,n.str2hexstring)(r)).emitPush(c).emitPush(l).emitPush(p).emitPush(t).emitSysCall("Neo.Contract.Create"),b}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(2),o=r(11),s=function(){function e(t,r){n(this,e),this.type=t,this.value=r}return i(e,[{key:Symbol.toStringTag,get:function(){return{type:this.type,value:this.value}}}],[{key:"string",value:function(t){return new e("String",t)}},{key:"boolean",value:function(t){return new e("Boolean",!!t)}},{key:"hash160",value:function(t){if("string"!=typeof t)throw new Error("Input should be string!");if((0,o.isAddress)(t)&&(t=(0,o.getScriptHashFromAddress)(t)),40!==t.length)throw new Error("Input should be 40 characters long!");return new e("Hash160",t)}},{key:"integer",value:function(t){return new e("Integer",Math.round(parseInt(t,10)))}},{key:"byteArray",value:function(t,r){return r&&(r=r.toLowerCase()),"address"===r?new e("ByteArray",(0,a.reverseHex)((0,o.getScriptHashFromAddress)(t))):"fixed8"===r?new e("ByteArray",(0,a.num2fixed8)(t)):new e("ByteArray",t)}},{key:"array",value:function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return new e("Array",r)}}]),e}();t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VMZip=t.VMExtractor=t.VMParser=void 0;var n=r(2);t.VMParser=function(e){return e.result.stack.map(function(e){switch(e.type){case"ByteArray":return(0,n.ab2str)((0,n.hexstring2ab)(e.value));case"Integer":return parseInt(e.value,10);default:throw Error("Unknown type: "+e.type)}})},t.VMExtractor=function(e){return e.result.stack.map(function(e){return e.value})},t.VMZip=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){var r=e.result.stack;if(r.length!==t.length)throw new RangeError("Invalid results length! Expected "+t.length+" but got "+r.length);return r.map(function(e,r){return t[r](e.value)})}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(72),s=n(o),f=r(11),u=r(194),c=n(u),h=r(4),l=r(6),d=n(l),p=(0,d.default)("rpc"),b=/NEO:(\d+\.\d+\.\d+)/,v=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.RPC_VERSION;if(i(this,e),t===h.NEO_NETWORK.MAIN?this.net=h.DEFAULT_RPC.MAIN:t===h.NEO_NETWORK.TEST?this.net=h.DEFAULT_RPC.TEST:this.net=t,this.history=[],this.version="",!c.default.valid(r))throw new Error("Invalid Version: "+r);this.version=c.default.clean(r)}return a(e,[{key:"execute",value:function(e){return this.history.push(e),p.info("RPC: "+this.net+" executing Query["+e.req.method+"]"),e.execute(this.net)}},{key:"query",value:function(e){var t=new s.default(e);return this.execute(t)}},{key:"getAccountState",value:function(e){if(!(0,f.isAddress)(e))throw new Error("Invalid address given: "+e);return this.execute(s.default.getAccountState(e)).then(function(e){return e.result})}},{key:"getAssetState",value:function(e){return this.execute(s.default.getAssetState(e)).then(function(e){return e.result})}},{key:"getBlock",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return this.execute(s.default.getBlock(e,t)).then(function(e){return e.result})}},{key:"getBlockHash",value:function(e){return this.execute(s.default.getBlockHash(e)).then(function(e){return e.result})}},{key:"getBestBlockHash",value:function(){return this.execute(s.default.getBestBlockHash()).then(function(e){return e.result})}},{key:"getBlockCount",value:function(){return this.execute(s.default.getBlockCount()).then(function(e){return e.result})}},{key:"getBlockSysFee",value:function(e){return this.execute(s.default.getBlockSysFee(e)).then(function(e){return e.result})}},{key:"getConnectionCount",value:function(){return this.execute(s.default.getConnectionCount()).then(function(e){return e.result})}},{key:"getContractState",value:function(e){return this.execute(s.default.getContractState(e)).then(function(e){return e.result})}},{key:"getPeers",value:function(){return this.execute(s.default.getPeers()).then(function(e){return e.result})}},{key:"getRawMemPool",value:function(){return this.execute(s.default.getRawMemPool()).then(function(e){return e.result})}},{key:"getRawTransaction",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return this.execute(s.default.getRawTransaction(e,t)).then(function(e){return e.result})}},{key:"getStorage",value:function(e,t){return this.execute(s.default.getStorage(e,t)).then(function(e){return e.result})}},{key:"getTxOut",value:function(e,t){return this.execute(s.default.getTxOut(e,t)).then(function(e){return e.result})}},{key:"getVersion",value:function(){var e=this;return this.execute(s.default.getVersion()).then(function(t){var r=t.result.useragent.match(b)[1];return e.version=c.default.clean(r),e.version}).catch(function(t){if(t.message.includes("Method not found"))return e.version=h.RPC_VERSION,e.version;throw t})}},{key:"invoke",value:function(e,t){return c.default.lt(this.version,"2.3.3")?Promise.reject(new Error("This method is not implemented for this version")):this.execute(s.default.invoke(e,t)).then(function(e){return e.result})}},{key:"invokeFunction",value:function(e,t,r){return c.default.lt(this.version,"2.3.3")?Promise.reject(new Error("This method is not implemented for this version")):this.execute(s.default.invokeFunction(e,t,r)).then(function(e){return e.result})}},{key:"invokeScript",value:function(e){return c.default.lt(this.version,"2.3.3")?Promise.reject(new Error("This method is not implemented for this version")):this.execute(s.default.invokeScript(e)).then(function(e){return e.result})}},{key:"sendRawTransaction",value:function(e){return this.execute(s.default.sendRawTransaction(e)).then(function(e){return e.result})}},{key:"submitBlock",value:function(e){return this.execute(s.default.submitBlock(e)).then(function(e){return e.result})}},{key:"validateAddress",value:function(e){return this.execute(s.default.validateAddress(e)).then(function(e){return e.result.isvalid})}},{key:Symbol.toStringTag,get:function(){return"RPC Client"}}]),e}();t.default=v},function(e,t,r){"use strict";function n(e){var t=new o(e),r=a(o.prototype.request,t);return i.extend(r,o.prototype,t),i.extend(r,t),r}var i=r(9),a=r(73),o=r(178),s=r(46),f=n(s);f.Axios=o,f.create=function(e){return n(i.merge(s,e))},f.Cancel=r(77),f.CancelToken=r(192),f.isCancel=r(76),f.all=function(e){return Promise.all(e)},f.spread=r(193),e.exports=f,e.exports.default=f},function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function n(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||n(e)||!!e._isBuffer)}},function(e,t,r){"use strict";function n(e){this.defaults=e,this.interceptors={request:new o,response:new o}}var i=r(46),a=r(9),o=r(187),s=r(188);n.prototype.request=function(e){"string"==typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),e=a.merge(i,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase();var t=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},a.forEach(["delete","get","head","options"],function(e){n.prototype[e]=function(t,r){return this.request(a.merge(r||{},{method:e,url:t}))}}),a.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(a.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},function(e,t,r){"use strict";var n=r(9);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},function(e,t,r){"use strict";var n=r(75);e.exports=function(e,t,r){var i=r.config.validateStatus;r.status&&i&&!i(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,i){return e.config=t,r&&(e.code=r),e.request=n,e.response=i,e}},function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var i=r(9);e.exports=function(e,t,r){if(!t)return e;var a;if(r)a=r(t);else if(i.isURLSearchParams(t))a=t.toString();else{var o=[];i.forEach(t,function(e,t){null!==e&&void 0!==e&&(i.isArray(e)&&(t+="[]"),i.isArray(e)||(e=[e]),i.forEach(e,function(e){i.isDate(e)?e=e.toISOString():i.isObject(e)&&(e=JSON.stringify(e)),o.push(n(t)+"="+n(e))}))}),a=o.join("&")}return a&&(e+=(-1===e.indexOf("?")?"?":"&")+a),e}},function(e,t,r){"use strict";var n=r(9),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,a,o={};return e?(n.forEach(e.split("\n"),function(e){if(a=e.indexOf(":"),t=n.trim(e.substr(0,a)).toLowerCase(),r=n.trim(e.substr(a+1)),t){if(o[t]&&i.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}}),o):o}},function(e,t,r){"use strict";var n=r(9);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(i.setAttribute("href",t),t=i.href),i.setAttribute("href",t),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");return t=e(window.location.href),function(r){var i=n.isString(r)?e(r):r;return i.protocol===t.protocol&&i.host===t.host}}():function(){return function(){return!0}}()},function(e,t,r){"use strict";function n(){this.message="String contains an invalid character"}function i(e){for(var t,r,i=String(e),o="",s=0,f=a;i.charAt(0|s)||(f="=",s%1);o+=f.charAt(63&t>>8-s%1*8)){if((r=i.charCodeAt(s+=.75))>255)throw new n;t=t<<8|r}return o}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=i},function(e,t,r){"use strict";var n=r(9);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,i,a,o){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(i)&&s.push("path="+i),n.isString(a)&&s.push("domain="+a),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,r){"use strict";function n(){this.handlers=[]}var i=r(9);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){i.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},function(e,t,r){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var i=r(9),a=r(189),o=r(76),s=r(46),f=r(190),u=r(191);e.exports=function(e){return n(e),e.baseURL&&!f(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=i.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),i.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return n(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return o(t)||(n(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,r){"use strict";var n=r(9);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new i(e),t(r.reason))})}var i=r(77);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(t){e=t}),cancel:e}},e.exports=n},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){(function(r){function n(e,t){if(e instanceof o)return e;if("string"!=typeof e)return null;if(e.length>Q)return null;if(!(t?J[ve]:J[de]).test(e))return null;try{return new o(e,t)}catch(e){return null}}function i(e,t){var r=n(e,t);return r?r.version:null}function a(e,t){var r=n(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}function o(e,t){if(e instanceof o){if(e.loose===t)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>Q)throw new TypeError("version is longer than "+Q+" characters");if(!(this instanceof o))return new o(e,t);G("SemVer",e,t),this.loose=t;var r=e.trim().match(t?J[ve]:J[de]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>$||this.major<0)throw new TypeError("Invalid major version");if(this.minor>$||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>$||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(function(e){if(/^[0-9]+$/.test(e)){var t=+e;if(t>=0&&t<$)return t}return e}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}function s(e,t,r,n){"string"==typeof r&&(n=r,r=void 0);try{return new o(e,r).inc(t,n).version}catch(e){return null}}function f(e,t){if(_(e,t))return null;var r=n(e),i=n(t);if(r.prerelease.length||i.prerelease.length){for(var a in r)if(("major"===a||"minor"===a||"patch"===a)&&r[a]!==i[a])return"pre"+a;return"prerelease"}for(var a in r)if(("major"===a||"minor"===a||"patch"===a)&&r[a]!==i[a])return a}function u(e,t){var r=He.test(e),n=He.test(t);return r&&n&&(e=+e,t=+t),r&&!n?-1:n&&!r?1:e<t?-1:e>t?1:0}function c(e,t){return u(t,e)}function h(e,t){return new o(e,t).major}function l(e,t){return new o(e,t).minor}function d(e,t){return new o(e,t).patch}function p(e,t,r){return new o(e,r).compare(new o(t,r))}function b(e,t){return p(e,t,!0)}function v(e,t,r){return p(t,e,r)}function m(e,r){return e.sort(function(e,n){return t.compare(e,n,r)})}function g(e,r){return e.sort(function(e,n){return t.rcompare(e,n,r)})}function y(e,t,r){return p(e,t,r)>0}function w(e,t,r){return p(e,t,r)<0}function _(e,t,r){return 0===p(e,t,r)}function S(e,t,r){return 0!==p(e,t,r)}function k(e,t,r){return p(e,t,r)>=0}function x(e,t,r){return p(e,t,r)<=0}function A(e,t,r,n){var i;switch(t){case"===":"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),i=e===r;break;case"!==":"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),i=e!==r;break;case"":case"=":case"==":i=_(e,r,n);break;case"!=":i=S(e,r,n);break;case">":i=y(e,r,n);break;case">=":i=k(e,r,n);break;case"<":i=w(e,r,n);break;case"<=":i=x(e,r,n);break;default:throw new TypeError("Invalid operator: "+t)}return i}function M(e,t){if(e instanceof M){if(e.loose===t)return e;e=e.value}if(!(this instanceof M))return new M(e,t);G("comparator",e,t),this.loose=t,this.parse(e),this.semver===Ue?this.value="":this.value=this.operator+this.semver.version,G("comp",this)}function E(e,t){if(e instanceof E)return e.loose===t?e:new E(e.raw,t);if(e instanceof M)return new E(e.value,t);if(!(this instanceof E))return new E(e,t);if(this.loose=t,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(function(e){return this.parseRange(e.trim())},this).filter(function(e){return e.length}),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}function I(e,t){return new E(e,t).set.map(function(e){return e.map(function(e){return e.value}).join(" ").trim().split(" ")})}function T(e,t){return G("comp",e),e=C(e,t),G("caret",e),e=R(e,t),G("tildes",e),e=N(e,t),G("xrange",e),e=z(e,t),G("stars",e),e}function P(e){return!e||"x"===e.toLowerCase()||"*"===e}function R(e,t){return e.trim().split(/\s+/).map(function(e){return B(e,t)}).join(" ")}function B(e,t){var r=t?J[Ie]:J[Ee];return e.replace(r,function(t,r,n,i,a){G("tilde",e,t,r,n,i,a);var o;return P(r)?o="":P(n)?o=">="+r+".0.0 <"+(+r+1)+".0.0":P(i)?o=">="+r+"."+n+".0 <"+r+"."+(+n+1)+".0":a?(G("replaceTilde pr",a),"-"!==a.charAt(0)&&(a="-"+a),o=">="+r+"."+n+"."+i+a+" <"+r+"."+(+n+1)+".0"):o=">="+r+"."+n+"."+i+" <"+r+"."+(+n+1)+".0",G("tilde return",o),o})}function C(e,t){return e.trim().split(/\s+/).map(function(e){return O(e,t)}).join(" ")}function O(e,t){G("caret",e,t);var r=t?J[Be]:J[Re];return e.replace(r,function(t,r,n,i,a){G("caret",e,t,r,n,i,a);var o;return P(r)?o="":P(n)?o=">="+r+".0.0 <"+(+r+1)+".0.0":P(i)?o="0"===r?">="+r+"."+n+".0 <"+r+"."+(+n+1)+".0":">="+r+"."+n+".0 <"+(+r+1)+".0.0":a?(G("replaceCaret pr",a),"-"!==a.charAt(0)&&(a="-"+a),o="0"===r?"0"===n?">="+r+"."+n+"."+i+a+" <"+r+"."+n+"."+(+i+1):">="+r+"."+n+"."+i+a+" <"+r+"."+(+n+1)+".0":">="+r+"."+n+"."+i+a+" <"+(+r+1)+".0.0"):(G("no pr"),o="0"===r?"0"===n?">="+r+"."+n+"."+i+" <"+r+"."+n+"."+(+i+1):">="+r+"."+n+"."+i+" <"+r+"."+(+n+1)+".0":">="+r+"."+n+"."+i+" <"+(+r+1)+".0.0"),G("caret return",o),o})}function N(e,t){return G("replaceXRanges",e,t),e.split(/\s+/).map(function(e){return j(e,t)}).join(" ")}function j(e,t){e=e.trim();var r=t?J[ke]:J[Se];return e.replace(r,function(t,r,n,i,a,o){G("xRange",e,t,r,n,i,a,o);var s=P(n),f=s||P(i),u=f||P(a),c=u;return"="===r&&c&&(r=""),s?t=">"===r||"<"===r?"<0.0.0":"*":r&&c?(f&&(i=0),u&&(a=0),">"===r?(r=">=",f?(n=+n+1,i=0,a=0):u&&(i=+i+1,a=0)):"<="===r&&(r="<",f?n=+n+1:i=+i+1),t=r+n+"."+i+"."+a):f?t=">="+n+".0.0 <"+(+n+1)+".0.0":u&&(t=">="+n+"."+i+".0 <"+n+"."+(+i+1)+".0"),G("xRange return",t),t})}function z(e,t){return G("replaceStars",e,t),e.trim().replace(J[Le],"")}function L(e,t,r,n,i,a,o,s,f,u,c,h,l){return t=P(r)?"":P(n)?">="+r+".0.0":P(i)?">="+r+"."+n+".0":">="+t,s=P(f)?"":P(u)?"<"+(+f+1)+".0.0":P(c)?"<"+f+"."+(+u+1)+".0":h?"<="+f+"."+u+"."+c+"-"+h:"<="+s,(t+" "+s).trim()}function F(e,t){for(var r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length){for(var r=0;r<e.length;r++)if(G(e[r].semver),e[r].semver!==Ue&&e[r].semver.prerelease.length>0){var n=e[r].semver;if(n.major===t.major&&n.minor===t.minor&&n.patch===t.patch)return!0}return!1}return!0}function H(e,t,r){try{t=new E(t,r)}catch(e){return!1}return t.test(e)}function U(e,t,r){var n=null,i=null;try{var a=new E(t,r)}catch(e){return null}return e.forEach(function(e){a.test(e)&&(n&&-1!==i.compare(e)||(n=e,i=new o(n,r)))}),n}function D(e,t,r){var n=null,i=null;try{var a=new E(t,r)}catch(e){return null}return e.forEach(function(e){a.test(e)&&(n&&1!==i.compare(e)||(n=e,i=new o(n,r)))}),n}function q(e,t){try{return new E(e,t).range||"*"}catch(e){return null}}function K(e,t,r){return V(e,t,"<",r)}function Y(e,t,r){return V(e,t,">",r)}function V(e,t,r,n){e=new o(e,n),t=new E(t,n);var i,a,s,f,u;switch(r){case">":i=y,a=x,s=w,f=">",u=">=";break;case"<":i=w,a=k,s=y,f="<",u="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(H(e,t,n))return!1;for(var c=0;c<t.set.length;++c){var h=t.set[c],l=null,d=null;if(h.forEach(function(e){e.semver===Ue&&(e=new M(">=0.0.0")),l=l||e,d=d||e,i(e.semver,l.semver,n)?l=e:s(e.semver,d.semver,n)&&(d=e)}),l.operator===f||l.operator===u)return!1;if((!d.operator||d.operator===f)&&a(e,d.semver))return!1;if(d.operator===u&&s(e,d.semver))return!1}return!0}function W(e,t){var r=n(e,t);return r&&r.prerelease.length?r.prerelease:null}function X(e,t,r){return e=new E(e,r),t=new E(t,r),e.intersects(t)}function Z(e){if(e instanceof o)return e;if("string"!=typeof e)return null;var t=e.match(J[xe]);return null==t?null:n((t[1]||"0")+"."+(t[2]||"0")+"."+(t[3]||"0"))}t=e.exports=o;var G;G="object"==typeof r&&Object({NODE_ENV:"production"})&&Object({NODE_ENV:"production"}).NODE_DEBUG&&/\bsemver\b/i.test(Object({NODE_ENV:"production"}).NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:function(){},t.SEMVER_SPEC_VERSION="2.0.0";var Q=256,$=Number.MAX_SAFE_INTEGER||9007199254740991,J=t.re=[],ee=t.src=[],te=0,re=te++;ee[re]="0|[1-9]\\d*";var ne=te++;ee[ne]="[0-9]+";var ie=te++;ee[ie]="\\d*[a-zA-Z-][a-zA-Z0-9-]*";var ae=te++;ee[ae]="("+ee[re]+")\\.("+ee[re]+")\\.("+ee[re]+")";var oe=te++;ee[oe]="("+ee[ne]+")\\.("+ee[ne]+")\\.("+ee[ne]+")";var se=te++;ee[se]="(?:"+ee[re]+"|"+ee[ie]+")";var fe=te++;ee[fe]="(?:"+ee[ne]+"|"+ee[ie]+")";var ue=te++;ee[ue]="(?:-("+ee[se]+"(?:\\."+ee[se]+")*))";var ce=te++;ee[ce]="(?:-?("+ee[fe]+"(?:\\."+ee[fe]+")*))";var he=te++;ee[he]="[0-9A-Za-z-]+";var le=te++;ee[le]="(?:\\+("+ee[he]+"(?:\\."+ee[he]+")*))";var de=te++,pe="v?"+ee[ae]+ee[ue]+"?"+ee[le]+"?";ee[de]="^"+pe+"$";var be="[v=\\s]*"+ee[oe]+ee[ce]+"?"+ee[le]+"?",ve=te++;ee[ve]="^"+be+"$";var me=te++;ee[me]="((?:<|>)?=?)";var ge=te++;ee[ge]=ee[ne]+"|x|X|\\*";var ye=te++;ee[ye]=ee[re]+"|x|X|\\*";var we=te++;ee[we]="[v=\\s]*("+ee[ye]+")(?:\\.("+ee[ye]+")(?:\\.("+ee[ye]+")(?:"+ee[ue]+")?"+ee[le]+"?)?)?";var _e=te++;ee[_e]="[v=\\s]*("+ee[ge]+")(?:\\.("+ee[ge]+")(?:\\.("+ee[ge]+")(?:"+ee[ce]+")?"+ee[le]+"?)?)?";var Se=te++;ee[Se]="^"+ee[me]+"\\s*"+ee[we]+"$";var ke=te++;ee[ke]="^"+ee[me]+"\\s*"+ee[_e]+"$";var xe=te++;ee[xe]="(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";var Ae=te++;ee[Ae]="(?:~>?)";var Me=te++;ee[Me]="(\\s*)"+ee[Ae]+"\\s+",J[Me]=new RegExp(ee[Me],"g");var Ee=te++;ee[Ee]="^"+ee[Ae]+ee[we]+"$";var Ie=te++;ee[Ie]="^"+ee[Ae]+ee[_e]+"$";var Te=te++;ee[Te]="(?:\\^)";var Pe=te++;ee[Pe]="(\\s*)"+ee[Te]+"\\s+",J[Pe]=new RegExp(ee[Pe],"g");var Re=te++;ee[Re]="^"+ee[Te]+ee[we]+"$";var Be=te++;ee[Be]="^"+ee[Te]+ee[_e]+"$";var Ce=te++;ee[Ce]="^"+ee[me]+"\\s*("+be+")$|^$";var Oe=te++;ee[Oe]="^"+ee[me]+"\\s*("+pe+")$|^$";var Ne=te++;ee[Ne]="(\\s*)"+ee[me]+"\\s*("+be+"|"+ee[we]+")",J[Ne]=new RegExp(ee[Ne],"g");var je=te++;ee[je]="^\\s*("+ee[we]+")\\s+-\\s+("+ee[we]+")\\s*$";var ze=te++;ee[ze]="^\\s*("+ee[_e]+")\\s+-\\s+("+ee[_e]+")\\s*$";var Le=te++;ee[Le]="(<|>)?=?\\s*\\*";for(var Fe=0;Fe<te;Fe++)G(Fe,ee[Fe]),J[Fe]||(J[Fe]=new RegExp(ee[Fe]));t.parse=n,t.valid=i,t.clean=a,t.SemVer=o,o.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},o.prototype.toString=function(){return this.version},o.prototype.compare=function(e){return G("SemVer.compare",this.version,this.loose,e),e instanceof o||(e=new o(e,this.loose)),this.compareMain(e)||this.comparePre(e)},o.prototype.compareMain=function(e){return e instanceof o||(e=new o(e,this.loose)),u(this.major,e.major)||u(this.minor,e.minor)||u(this.patch,e.patch)},o.prototype.comparePre=function(e){if(e instanceof o||(e=new o(e,this.loose)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var t=0;do{var r=this.prerelease[t],n=e.prerelease[t];if(G("prerelease compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(r!==n)return u(r,n)}while(++t)},o.prototype.inc=function(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var r=this.prerelease.length;--r>=0;)"number"==typeof this.prerelease[r]&&(this.prerelease[r]++,r=-2);-1===r&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},t.inc=s,t.diff=f,t.compareIdentifiers=u;var He=/^[0-9]+$/;t.rcompareIdentifiers=c,t.major=h,t.minor=l,t.patch=d,t.compare=p,t.compareLoose=b,t.rcompare=v,t.sort=m,t.rsort=g,t.gt=y,t.lt=w,t.eq=_,t.neq=S,t.gte=k,t.lte=x,t.cmp=A,t.Comparator=M;var Ue={};M.prototype.parse=function(e){var t=this.loose?J[Ce]:J[Oe],r=e.match(t);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=r[1],"="===this.operator&&(this.operator=""),r[2]?this.semver=new o(r[2],this.loose):this.semver=Ue},M.prototype.toString=function(){return this.value},M.prototype.test=function(e){return G("Comparator.test",e,this.loose),this.semver===Ue||("string"==typeof e&&(e=new o(e,this.loose)),A(e,this.operator,this.semver,this.loose))},M.prototype.intersects=function(e,t){if(!(e instanceof M))throw new TypeError("a Comparator is required");var r;if(""===this.operator)return r=new E(e.value,t),H(this.value,r,t);if(""===e.operator)return r=new E(this.value,t),H(e.semver,r,t);var n=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),i=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),a=this.semver.version===e.semver.version,o=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),s=A(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),f=A(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return n||i||a&&o||s||f},t.Range=E,E.prototype.format=function(){return this.range=this.set.map(function(e){return e.join(" ").trim()}).join("||").trim(),this.range},E.prototype.toString=function(){return this.range},E.prototype.parseRange=function(e){var t=this.loose;e=e.trim(),G("range",e,t);var r=t?J[ze]:J[je];e=e.replace(r,L),G("hyphen replace",e),e=e.replace(J[Ne],"$1$2$3"),G("comparator trim",e,J[Ne]),e=e.replace(J[Me],"$1~"),e=e.replace(J[Pe],"$1^"),e=e.split(/\s+/).join(" ");var n=t?J[Ce]:J[Oe],i=e.split(" ").map(function(e){return T(e,t)}).join(" ").split(/\s+/);return this.loose&&(i=i.filter(function(e){return!!e.match(n)})),i=i.map(function(e){return new M(e,t)})},E.prototype.intersects=function(e,t){if(!(e instanceof E))throw new TypeError("a Range is required");return this.set.some(function(r){return r.every(function(r){return e.set.some(function(e){return e.every(function(e){return r.intersects(e,t)})})})})},t.toComparators=I,E.prototype.test=function(e){if(!e)return!1;"string"==typeof e&&(e=new o(e,this.loose));for(var t=0;t<this.set.length;t++)if(F(this.set[t],e))return!0;return!1},t.satisfies=H,t.maxSatisfying=U,t.minSatisfying=D,t.validRange=q,t.ltr=K,t.gtr=Y,t.outside=V,t.prerelease=W,t.intersects=X,t.coerce=Z}).call(t,r(10))},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(41),s=n(o),f=r(42),u=n(f),c=r(4),h=r(6),l=n(h),d=(0,l.default)("wallet"),p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.DEFAULT_WALLET,r=t.name,n=void 0===r?"myWallet":r,a=t.version,o=void 0===a?c.DEFAULT_WALLET.version:a,s=t.scrypt,f=void 0===s?{}:s,u=t.accounts,h=void 0===u?[]:u,l=t.extra,p=void 0===l?null:l;i(this,e),this.name=n,this.version=o,this.scrypt=f,this.accounts=[];var b=!0,v=!1,m=void 0;try{for(var g,y=h[Symbol.iterator]();!(b=(g=y.next()).done);b=!0){var w=g.value;this.addAccount(w)}}catch(e){v=!0,m=e}finally{try{!b&&y.return&&y.return()}finally{if(v)throw m}}this.extra=p,d.info("New Wallet created: "+this.name)}return a(e,[{key:"addAccount",value:function(e){var t=this.accounts.length;e instanceof u.default||(e=new u.default(e)),this.accounts.push(e);try{var r=e.address;d.info("Added Account: "+r+" to Wallet "+this.name)}catch(e){d.warn("Encrypted account added to Wallet "+this.name+". You will not be able to export this wallet without first decrypting this account")}return t}},{key:"decrypt",value:function(e,t){if(e<0)throw new Error("Index cannot be negative!");if(e>=this.accounts.length)throw new Error("Index cannot larger than Accounts array!");try{return this.accounts[e].decrypt(t,this.scrypt),!0}catch(e){return!1}}},{key:"decryptAll",value:function(e){var t=this,r=[];return this.accounts.map(function(n,i){r.push(t.decrypt(i,e))}),d.info("decryptAll for Wallet "+this.name+": "+r.reduce(function(e,t){return t+(e?"1":"0")},"")),r}},{key:"encrypt",value:function(e,t){if(e<0)throw new Error("Index cannot be negative!");if(e>=this.accounts.length)throw new Error("Index cannot larger than Accounts array!");try{return this.accounts[e].encrypt(t,this.scrypt),!0}catch(e){return!1}}},{key:"encryptAll",value:function(e){var t=this,r=[];return this.accounts.map(function(n,i){r.push(t.encrypt(i,e))}),d.info("decryptAll for Wallet "+this.name+": "+r.reduce(function(e,t){return t+(e?"1":"0")},"")),r}},{key:"export",value:function(){return{name:this.name,version:this.version,scrypt:this.scrypt,accounts:this.accounts.map(function(e){return e.export()}),extra:this.extra}}},{key:"setDefault",value:function(e){for(var t=0;t<this.accounts.length;t++)this.accounts[t].isDefault=t===e;d.info("Set Account: "+this.accounts[e]+" as default for Wallet "+this.name)}},{key:"writeFile",value:function(e){return d.info("Exporting wallet file to: "+e),s.default.writeFile(e,JSON.stringify(this.export()),function(e){if(e)throw e;return console.log("Wallet file written!"),!0})}},{key:Symbol.toStringTag,get:function(){return"Wallet"}},{key:"defaultAccount",get:function(){if(0===this.accounts.length)throw new Error("No accounts available in this Wallet!");var e=!0,t=!1,r=void 0;try{for(var n,i=this.accounts[Symbol.iterator]();!(e=(n=i.next()).done);e=!0){var a=n.value;if(a.isDefault)return a}}catch(e){t=!0,r=e}finally{try{!e&&i.return&&i.return()}finally{if(t)throw r}}var o=!0,s=!1,f=void 0;try{for(var u,c=this.accounts[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var h=u.value;if(h._privateKey||h._WIF)return h}}catch(e){s=!0,f=e}finally{try{!o&&c.return&&c.return()}finally{if(s)throw f}}var l=!0,d=!1,p=void 0;try{for(var b,v=this.accounts[Symbol.iterator]();!(l=(b=v.next()).done);l=!0){var m=b.value;if(m.encrypted)return m}}catch(e){d=!0,p=e}finally{try{!l&&v.return&&v.return()}finally{if(d)throw p}}return this.accounts[0]}}],[{key:"import",value:function(t){return new e(JSON.parse(t))}},{key:"readFile",value:function(e){return d.info("Importing wallet from file: "+e),this.import(s.default.readFileSync(e,"utf8"))}}]),e}();t.default=p},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(43),o=r(40),s=function(e){return e&&e.__esModule?e:{default:e}}(o),f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,e),this.address=t.address||"",this.net=t.net||"NoNet",this.claims=t.claims?t.claims.map(function(e){return(0,a.ClaimItem)(e)}):[]}return i(e,[{key:s.default.inspect.custom,value:function(e,t){var r=this.claims.map(function(e){return e.txid+" <"+e.index+">: "+e.claim.toString()});return"[Claims("+this.net+"): "+this.address+"]\n"+JSON.stringify(r,null,2)}},{key:"export",value:function(){return{address:this.address,net:this.net,claims:this.claims.map(u)}}},{key:"slice",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return new e({address:this.address,net:this.net,claims:this.claims.slice(t,r)})}},{key:Symbol.toStringTag,get:function(){return"Claims"}}]),e}();t.default=f;var u=function(e){return{claim:e.claim.toNumber(),txid:e.txid,index:e.index,value:e.value,start:e.start?e.start.toNumber():null,end:e.end?e.end.toNumber():null}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e,t){return t=t.toLowerCase(),b.includes(t)?h.default.get(e+"?limit=0&convert="+t):Promise.reject(new ReferenceError(t+" is not one of the accepted currencies!"))}function s(e,t){var r={};return e.forEach(function(e){r[e.symbol]=parseFloat(e["price_"+t.toLowerCase()])}),r}function f(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return Object.assign.apply(Object,[{}].concat(a(r.map(function(t){return i({},t,e[t])}))))}function u(e,t,r){return t.filter(function(t){return e.includes(t.symbol)}).map(function(e){return{symbol:e.symbol,currentPrice:e["price_"+r],percent_change_1h:e.percent_change_1h,percent_change_24h:e.percent_change_24h,percent_change_7d:e.percent_change_7d}})}Object.defineProperty(t,"__esModule",{value:!0}),t.getMarkets=t.getPrices=t.getPrice=void 0;var c=r(29),h=n(c),l=r(6),d=n(l),p=(0,d.default)("api"),b=["aud","brl","cad","chf","clp","cny","czk","dkk","eur","gbp","hkd","huf","idr","ils","inr","jpy","krw","mxn","myr","nok","nzd","php","pkr","pln","rub","sek","sgd","thb","try","twd","usd","zar"];t.getPrice=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NEO",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"usd";return p.warn("This is deprecated in favor of getPrices. There is a known bug for NEP5 tokens with this function."),o("https://api.coinmarketcap.com/v1/ticker/"+e.toLowerCase()+"/",t).then(function(t){var r=t[e.toUpperCase()];if(r)return r;throw new Error("Something went wrong with the CoinMarketCap API!")}).catch(function(e){throw p.error(e.message),e})},t.getPrices=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["NEO"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"usd";return o("https://api.coinmarketcap.com/v1/ticker/",t).then(function(e){var r=e.data;if(r.error)throw new Error(r.error);return s(r,t)}).then(function(t){e=e.map(function(e){return e.toUpperCase()});var r=f.apply(void 0,[t].concat(a(e)));if(e.some(function(e){return!r[e]}))throw new Error("None of the coin symbols are supported by CoinMarketCap!");return r}).catch(function(e){throw p.error(e.message),e})},t.getMarkets=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"usd";return o("https://api.coinmarketcap.com/v1/ticker/",t).then(function(r){var n=r.data;if(n.error)throw new Error(n.error);return u(e,n,t)}).catch(function(e){throw p.error(e.message),e})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.doTransferToken=t.getToken=t.getTokenBalance=t.getTokenInfo=void 0;var n=r(45),i=r(11),a=r(24),o=r(2),s=r(47),f=r(21),u=r(4),c=r(6),h=function(e){return e&&e.__esModule?e:{default:e}}(c),l=(0,h.default)("api"),d=function(e){return""===e?0:parseInt(e,10)},p=function(e){return e?parseInt((0,o.reverseHex)(e),16):0},b=(0,a.VMZip)(o.hexstring2str,o.hexstring2str,d,p),v=(0,a.VMZip)(o.hexstring2str,o.hexstring2str,d,p,p);t.getTokenInfo=function(e,t){var r=new n.ScriptBuilder;r.emitAppCall(t,"name").emitAppCall(t,"symbol").emitAppCall(t,"decimals").emitAppCall(t,"totalSupply");var i=r.str;return a.Query.invokeScript(i,!1).parseWith(b).execute(e).then(function(e){return{name:e[0],symbol:e[1],decimals:e[2],totalSupply:e[3]/Math.pow(10,e[2])}}).catch(function(e){throw l.error("getTokenInfo failed with : "+e.message),e})},t.getTokenBalance=function(e,t,r){var s=(0,o.reverseHex)((0,i.getScriptHashFromAddress)(r)),f=new n.ScriptBuilder,u=f.emitAppCall(t,"decimals").emitAppCall(t,"balanceOf",[s]).str;return a.Query.invokeScript(u,!1).execute(e).then(function(e){try{var t=d(e.result.stack[0].value);return p(e.result.stack[1].value)/Math.pow(10,t)}catch(e){return 0}}).catch(function(e){throw l.error("getTokenBalance failed with : "+e.message),e})},t.getToken=function(e,t,r){var s=r?v:b,f=new n.ScriptBuilder;if(f.emitAppCall(t,"name").emitAppCall(t,"symbol").emitAppCall(t,"decimals").emitAppCall(t,"totalSupply"),r){var u=(0,o.reverseHex)((0,i.getScriptHashFromAddress)(r));f.emitAppCall(t,"balanceOf",[u])}var c=f.str;return a.Query.invokeScript(c,!1).parseWith(s).execute(e).then(function(e){return{name:e[0],symbol:e[1],decimals:e[2],totalSupply:e[3]/Math.pow(10,e[2]),balance:5===e.length?e[4]/Math.pow(10,e[2]):null}}).catch(function(e){throw l.error("getToken failed with : "+e.message),e})},t.doTransferToken=function(e,t,r,n,c){var h=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;l.warn("doTransferToken will be deprecated in favor of doInvoke");var p=new i.Account(r),b=(0,s.getRPCEndpoint)(e),v=(0,s.getBalance)(e,p.address),m=void 0,g=void 0;return Promise.all([b,v]).then(function(e){g=e[0];var r=e[1],a=(0,i.getScriptHashFromAddress)(p.address),s=(0,o.reverseHex)((0,i.getScriptHashFromAddress)(n)),l=[{assetId:u.ASSET_ID.GAS,value:1e-8,scriptHash:a}],b={scriptHash:t,operation:"transfer",args:[(0,o.reverseHex)(a),s,c]},v=f.Transaction.createInvocationTx(r,l,b,h,{version:1});return d?d(v,p.publicKey):v.sign(p.privateKey)}).then(function(e){return m=e,a.Query.sendRawTransaction(m).execute(g)}).then(function(e){return!0===e.result&&(e.txid=m.hash),e})}}])});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(316).setImmediate, __webpack_require__(316).clearImmediate))

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return NEO_HASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ASSET_ENUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return OLD_WALLET_CHECK_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return NEW_WALLET_CHECK_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return OTCGO_WALLET_FILE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return OTCGO_SETTING_FILE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DEFAULT_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DEFAULT_CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DEFAULT_SETTING; });
/* unused harmony export DEFAULT_SCRYPT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DEFAULT_EMPTY_WALLET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Currency; });
/* unused harmony export Languages */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FIVE_MINUTES_MS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_utils__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(93);


var ASSET_HASH = {
    'NEO': 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
    'GAS': '602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7',
    'QLC': '0d821bd7b6d53f5c2b40e217c6defc8bbe896cf5',
    'TNC': '08e8c4400f1af2c20c28e0018f29535eb85d15b6',
    'TKY': '132947096727c84c7f9e076c90f08fec3bc17f18',
    'RHT': '2328008e6f6c7bd157a342e789389eb034d9cbc4',
    'CPX': '45d493a6f73fa5f404244a5fb8472fc014ca5885',
    'ACAT': '7f86d61ff377f1b12e589a5907152b57e2ad9a7a',
    'ZPT': 'ac116d4b8d4ca55e6b6d4ecce2192039b51cccc5',
    'APH': 'a0777c3ce2b169d4a23bcba4565e3225a0122d95',
    'DBC': 'b951ecbbc5fe37a9c280a76cb0ce0014827294cf',
    'RPX': 'ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9',
    'BCS': '546c5872a992b2754ef327154f4c119baabff65f',
    'TestCoin': '025d82f7b00a9ff1cfe709abe3c4741a105d067178e645bc3ebad9bc79af47d4',
    'Hello AntShares Mainnet': '439af8273fbe25fec2f5f2066679e82314fe0776d52a8c1c87e863bd831ced7d',
    '量子股份': '1b504c5fb070aaca3d57c42b5297d811fe6f5a0c5d4cd4496261417cf99013a5',
    '赏金（SJ-Money)': '459ef82138f528c5ff79dd67dcfe293e6a348e447ed8f6bce5b79dded2e63409',
    '申一股份': '30e9636bc249f288139651d60f67c110c3ca4c3dd30ddfa3cbcec7bb13f14fd4',
    '量子积分': '0ab0032ade19975183c4ac90854f1f3c3fc535199831e7d8f018dabb2f35081f',
    '开拍学园币（KAC）': '07de511668e6ecc90973d713451c831d625eca229242d34debf16afa12efc1c1',
    '宝贝评级': '7ed4d563277f54a1535f4406e4826882287fb74d06a1a53e76d3d94d9b3b946a',
    '橙诺': 'dd977e41a4e9d5166003578271f191aae9de5fc2 de90e966c8d19286e37fa1e1',
    '申一币': 'a52e3e99b6c2dd2312a94c635c050b4c2bc2485fcb924eecb615852bd534a63f',
    '无忧宝': '7f48028c38117ac9e42c8e1f6f06ae027cdbb904eaf1a0bdc30c9d81694e045c',
    '未来研究院': '9b63fa15ed58e93339483619175064ecadbbe953436a22c31c0053dedca99833',
    '明星资本': '308b0b336e2ed3d718ef92693b70d30b4fe20821265e8e76aecd04a643d0d7fa',
    '量子人民币': '6161af8875eb78654e385a33e7334a473a2a0519281d33c06780ff3c8bce15ea',
    '人民币CNY': 'cb453a56856a236cbae8b8f937db308a15421daada4ba6ce78123b59bfb7253c',
    '开拍学园': 'c0b3c094efd1849c125618519ae733e3b63c976d60fc7e3d0e88af86a65047e3',
    '币区势': '3ff74cf84869a7df96ede132de9fa62e13aa3ac8a6548e546ad316f4bda6460c',
    '花季股': 'c39631b351c1f385afc1eafcc0ff365977b59f4aa4a09a0b7b1f5705241457b7'
};
var ASSET_HASH_TEST = {
    'GAS': '602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7',
    'NEO': 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
    'QLC': 'a0a527e08dbcd51f602a6df20ece7af515d5087b',
    'NXT': '0b6c1f919e95fe61c17a7612aebfaf4fda3a2214',
    'RHTT': '400cbed5b41014788d939eaf6286e336e7140f8c',
    'RHTT2': 'd3de84c166d93ad2581cb587bda8e02b12dc37ca',
    'GDEX': '21855aa0c7a373403e88b461003a6ec03533d193923c6a43537900148361b357',
    'QLC_T2': '67817fa4003996bf9ecf2a55aaa7eb5ee08a8514cf8cbe9065c3e5404f2c1adc',
    'TestCoin': '0c092117b4ba47b81001712425e6e7f760a637695eaf23741ba335925b195ecd',
    'NeoToken': '90f98951b2528541a19db9a7a452faf81cd6890a0e6262679c7617eb5fa5694d',
    'RevTokens': '1521c9b5153513eaa965835d5e69fced87f07f09532bca9269781aa29ab18167',
    'NEOVERSION': '4a629db0af0d9c7ee0e11f4f4894765f5ab2579bcc8b4a203e4c6814a9784f00',
    '测试股': '21ef3190e1c8fb9986d63ab98eed4937a3f095e2ed9fd05220a9047c88561319',
    '申一币': 'e13440dccae716e16fc01adb3c96169d2d08d16581cad0ced0b4e193c472eac1',
    '申一股份': 'bbb7a08e52a5242079487fead6753dd038d41197e04e342b6f7b7358936551ea',
    '量子积分': 'beb6f821b9141269f06ee5205531a13777be727ec005c53334f2ea82585426fb',
    '量子股份': 'ab84419d6a391b50400dc6f5ab63528ea8ecb32b81addfb4c7f8afe44be6c1ac',
    '人民币CNY': '2dbd5d6be093f6bdd7e59d1faedfd2656422aaf749719903e8dab412b4349e81',
    '开拍学园币（KAC）': 'b426d50907c2b1ff91a8d5c8f1da3bea77e79ada05885719130d99cabae697c0',
    '注册代币类资产': 'bb9d95d887558e73a27af025f2b7b93d6c9ac9a7d5c811118afb2d6e28599fbe',
    'LOCALTOKEN': '7a52ff333efff6d57c6d08382f706184509a594f2c00ba659d626d3cde3ea2e0',
    'ctest': '98f1a907614a94315d5f2d407bee567f43cc8d1c873aaaaa4d2a1983ea089126',
    'TKY': 'dbe1ae10018c199a7fb35c5c0c65043e3a67bb28',
    'CGE8': 'dcd44e1ee477bc62654d1325ad0d960f58167bdc',
    '为啥转我neo': '0a88b77093f62f81dc1b30832cef335e9c515b1b4e7aff817fcc105d947dc79b',
    'HER': '49aba29e544ae2b6bedc617c0c7f0d09cac0ecab5444364ba06152cee653a274',
    'WTC': '24c60cca01698ed268af6511fbe7164ec90e69299623ca7a6ead409250584269',
    '测试': '252a904aac6c2205e47968e407ce64531218e637e2ac073266da06d68fce71d8',
    'QLC2': '47f0b6b4ed9022acb18651aec5724c0e3addcda9',
    'DBC': 'b951ecbbc5fe37a9c280a76cb0ce0014827294cf',
    'APHPTest10.2X': 'a2df2e12d76bcf4580ca3178d3790b697eece053',
    'HelloNep-6': '400ead36b1bea6205bcf53cfe119ead756eecd602366947c8c4fcae931f2aa6b',
    'CGE7': 'ccc46b6ef854aff01fde3cdf78cf7c78bd4200e0',
    '.1': '8467f6df3723f5bdbb5eb892c0852995dceba372f99fa6a32b23f66d1261759a',
    'TNC': '0d44fe9d77c0e578355d9834a2a55677a1fbab34',
    'RHTT4': 'f9572c5b119a6b5775a6af07f1cef5d310038f55',
    'GWM_Area': 'fdfb91f66e98867dd40fcb4cb6b332ae508ea503c62875bfbab90b9e0907022d',
    'GWMCoin': 'e2d8fd60e0ca94be17efd7f56587fa6901d2aef404ebc7b952b43fd4a96d2733',
    'X2T': '0fe9513776f43ddaadf0dc211b635719953c469f',
    '1': '4714923678a93e4598353a2dcf4dccfdf8f8c90a76944a8ba0b0f0726ae07fbe',
    'Z1T': 'cdca68b6eecad1189ff054000c308ecb10db505d',
    'CGE': '3b2013c9a003eb81db07b2b64479653e4198968c86b3c2c2ff7ba5ff7a36f6ea',
    'XShare': 'd2d3cd54f25ea0d6baa2e676b535dfcdaf040c6f5af0e03b051c0ab1117e43b0',
    'TEST2': '691b82ca893efb66c21fb99bf7827449df05e165b12cc35abb7dfbc3a9ddd251',
    'WEEE': 'eaad28f7de3cd4fa92dca4c29e0ccec290a966df8afa09a43e19655e114591a0',
    'Aphelion': 'd2305f4ae49f449bf0ade51c0935e108529e359b50b17bb156e24a36fda2c8f4',
    'testcoin': '6cf8fe04868181d597fc882f44bfe0b6fe75ba8cd74e9fd1e4e733afa20f87bd',
    'BEER': '30f01e96570642bbba756056f2c580756d41f19f61022fa67483486d887c2e28',
    'Boknaai': '6ca744fd47ae501b15c29a7e6207b4d398884d63078a89d1e03ac7260efd1334',
    '为啥转我neo2': '88d230121be7e9e28ea9c328e0b6d6820aebbdc8b7a499c0a1b873d872460b69',
    'Widgits': '26ab5289b1f16046a3bf0050db2701cf9cf7f262402c84612c04ab01a162f138',
    'NEO2': 'cc58dd29a7dd3caa1d59018d599079def5acc8c00333d849b05e4356e02f64b2',
    'NEO+': '6ab42708e860905a9274f3e1b7a7902ba2346f8052978fedcc14de42d72ca615',
    'Wu-tang Coin': 'd2a312575aebfa0c65850ea13899b0a97e8cfd7f0346b772717659f669d5622c',
    '测试2': '432694cb5b9a2040e3a003d42066f32bbc0a2c45e6dab42abbba1e6031545555',
    'test': '39ff08d0a97057cf5ca8789be8e58e4e9e45a702cec7a97bac792c544e352dc7',
    'ts': '4922029d21a49942ea65fe57d3ef5c9bc5aad7285b6a49e487bcb6603a9f61f9',
    'GlobalAssetTest02': 'f7c8f7bb9367bd5100c67c65522fb5ffb90fb7614d051f3cdc940da7298c995c',
    'GlobalAssetTest01': 'd00053c2ff38c7b26c7a72997d3e3ed851082b277e4f518768c086458db52114',
    'iProud': '556befd5be5e3c0b8344b4b053f61d071e33316a33335f3d40024ea76832b59a'
};
var NEO_HASH = 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b';
function enumeralize(obj) {
    return Object.keys(obj)
        .map(function (key) {
        return (_a = {}, _a[key] = obj[key], _a[obj[key]] = key, _a);
        var _a;
    })
        .reduce(function (acc, cur) { return Object.assign({}, acc, cur); });
}
/**
 * Example:
 * ASSET: {
 *   'NEO': 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
 *   'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b': 'NEO',
 * }
 */
var ASSET_ENUM = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* dev */] ? enumeralize(ASSET_HASH_TEST) : enumeralize(ASSET_HASH);
var OLD_WALLET_CHECK_LIST = ['address', 'privateKeyEncrypted', 'publicKey', 'publicKeyCompressed'];
var NEW_WALLET_CHECK_LIST = ['name', 'version', 'scrypt', 'accounts', 'extra'];
var OTCGO_WALLET_FILE_NAME = 'OTCGO-mobile-wallet.json';
var OTCGO_SETTING_FILE_NAME = 'OTCGO-settings.json';
var DEFAULT_LANGUAGE = Object(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* getBrowserLanguage */])();
var DEFAULT_CURRENCY = DEFAULT_LANGUAGE === 'en' ? 'usd' : 'cny';
var DEFAULT_SETTING = {
    currency: DEFAULT_CURRENCY,
    language: DEFAULT_LANGUAGE
};
var DEFAULT_SCRYPT = { n: 16384, r: 8, p: 8, size: 64 };
var DEFAULT_EMPTY_WALLET = {
    name: 'OTCGO-mobile-wallet',
    scrypt: DEFAULT_SCRYPT,
    accounts: [],
    version: 'beta-0.6',
    extra: null
};
var Currency = {
    'aud': '$',
    'brl': 'R$',
    'cad': '$',
    'chf': 'Fr.',
    'clp': '$',
    'cny': '¥',
    'czk': 'Kč',
    'dkk': 'kr. ',
    'eur': '€',
    'gbp': '£',
    'hkd': '$',
    'huf': 'Ft ',
    'idr': 'Rp ',
    'ils': '₪',
    'inr': '₹',
    'jpy': '¥',
    'krw': '₩',
    'mxn': '$',
    'myr': 'RM',
    'nok': 'kr ',
    'nzd': '$',
    'php': '₱',
    'pkr': '₨ ',
    'pln': 'zł',
    'rub': '₽',
    'sek': 'kr ',
    'sgd': 'S$',
    'thb': '฿',
    'try': '₺',
    'twd': 'NT$',
    'usd': '$',
    'zar': 'R ',
    'gas': 'gas',
    'btc': 'btc'
};
var Languages = {
    'zh-cn': 'Chinese',
    'en': 'English'
};
var FIVE_MINUTES_MS = 300000;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendModalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_neon__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_neon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__libs_neon__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var generateSignature = __WEBPACK_IMPORTED_MODULE_2__libs_neon__["wallet"].generateSignature;
var SendModalProvider = /** @class */ (function () {
    function SendModalProvider(apiProvider, accountProvider) {
        this.apiProvider = apiProvider;
        this.accountProvider = accountProvider;
        this.account = this.accountProvider.defaultAccount;
    }
    SendModalProvider.prototype.decrypt = function (passphrase) {
        try {
            if (this.account.WIF)
                return this.account.WIF;
        }
        catch (e) {
            console.log(e);
        }
        try {
            var wif = __WEBPACK_IMPORTED_MODULE_2__libs_neon__["wallet"].decrypt(this.account.encrypted, passphrase);
            var pr = __WEBPACK_IMPORTED_MODULE_2__libs_neon__["wallet"].getPrivateKeyFromWIF(wif);
            return Promise.resolve(pr);
        }
        catch (e) {
            console.log(e);
            return Promise.reject('密码错误');
        }
    };
    SendModalProvider.prototype.doSendAsset = function (_a, pr) {
        var _this = this;
        var dests = _a.dests, amounts = _a.amounts, assetId = _a.assetId;
        return this.postTransfer({ dests: dests, amounts: amounts, assetId: assetId, source: this.account.address })
            .then(function (res) { return _this.generateSignature(res['transaction'], pr); })
            .then(function (res) { return _this.apiProvider.broadcast(res).toPromise(); });
    };
    SendModalProvider.prototype.postTransfer = function (transferPostData) {
        return this.apiProvider.post('transfer', transferPostData).toPromise();
    };
    SendModalProvider.prototype.generateSignature = function (transaction, pr) {
        var publicKey = __WEBPACK_IMPORTED_MODULE_2__libs_neon__["wallet"].getPublicKeyFromPrivateKey(pr);
        var signature = generateSignature(transaction, pr);
        return {
            publicKey: publicKey,
            signature: signature,
            transaction: transaction
        };
    };
    SendModalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers__["c" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers__["b" /* AccountProvider */]])
    ], SendModalProvider);
    return SendModalProvider;
}());

//# sourceMappingURL=send-modal.provider.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__ = __webpack_require__(944);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_neon__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_neon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__libs_neon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_constants__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_actions_balances_action__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_selectors__ = __webpack_require__(101);
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










var getPublicKeyFromPrivateKey = __WEBPACK_IMPORTED_MODULE_5__libs_neon__["wallet"].getPublicKeyFromPrivateKey, generateSignature = __WEBPACK_IMPORTED_MODULE_5__libs_neon__["wallet"].generateSignature;
var ClaimsProvider = /** @class */ (function () {
    function ClaimsProvider(apiProvider, loadingCtrl, accountProvider, store) {
        var _this = this;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        this.accountProvider = accountProvider;
        this.store = store;
        this._account = this.accountProvider.defaultAccount;
        this.store.select(__WEBPACK_IMPORTED_MODULE_9__store_selectors__["b" /* BalancesSelectors */].getDefaultNonZeroEntities).subscribe(function (balances) { return _this.balances = balances; });
    }
    ClaimsProvider.prototype.getClaims = function () {
        return this.apiProvider.get('claim/' + this._account.address).toPromise();
    };
    ClaimsProvider.prototype.hasDecrypt = function () {
        try {
            if (this._account.publicKey)
                return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * Claims process
     * 1. POST GAS, { publicKey } -> { result: boolean, error?: string, transaction?: string }
     * 2. POST Broadcase {  publicKey, signature: generateSignature(transaction, privateKey), transaction }
     * */
    ClaimsProvider.prototype.doClaims = function (pr) {
        return __awaiter(this, void 0, void 0, function () {
            var publicKey, transaction, signature, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store_actions_balances_action__["Load"]());
                        publicKey = getPublicKeyFromPrivateKey(pr);
                        return [4 /*yield*/, this.doSendAsset(pr, publicKey)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.postGAS(pr)];
                    case 2:
                        transaction = (_a.sent()).transaction;
                        console.log('transaction', transaction);
                        return [4 /*yield*/, this.generateSignatureAndData(transaction, pr, publicKey)];
                    case 3:
                        signature = _a.sent();
                        console.log(signature);
                        return [4 /*yield*/, this.apiProvider.broadcast(signature).toPromise()];
                    case 4:
                        res = _a.sent();
                        return [2 /*return*/, Promise.resolve(res['result'])];
                }
            });
        });
    };
    ClaimsProvider.prototype.postGAS = function (pr) {
        return this.apiProvider.post('gas', { publicKey: getPublicKeyFromPrivateKey(pr) }).toPromise()
            .then(function (res) {
            if (res.error)
                throw res.error;
            return res;
        });
    };
    ClaimsProvider.prototype.doSendAsset = function (pr, publicKey) {
        var _this = this;
        var NEO = this.balances.find(function (bal) { return bal.hash === __WEBPACK_IMPORTED_MODULE_7__shared_constants__["h" /* NEO_HASH */]; });
        var address = this._account.address;
        var data = {
            dests: address,
            amounts: NEO.amount.toString(),
            assetId: __WEBPACK_IMPORTED_MODULE_7__shared_constants__["h" /* NEO_HASH */],
            source: address
        };
        return this.apiProvider.post('transfer', data).toPromise()
            .then(function (res) { return _this.generateSignatureAndData(res['transaction'], pr, publicKey); })
            .then(function (signature) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.apiProvider.broadcast(signature).toPromise()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); })
            .catch(function (err) { return console.error('from claims provider doSendAsset()', err); });
    };
    ClaimsProvider.prototype.generateSignatureAndData = function (transaction, pr, publicKey) {
        var signature = generateSignature(transaction, pr);
        return {
            publicKey: publicKey,
            signature: signature,
            transaction: transaction
        };
    };
    ClaimsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers__["c" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["b" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], ClaimsProvider);
    return ClaimsProvider;
}());

//# sourceMappingURL=claims.provider.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflect_metadata__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_module__ = __webpack_require__(584);




if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function (searchElement, fromIndex) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If len is 0, return false.
            if (len === 0) {
                return false;
            }
            // 4. Let n be ? ToInteger(fromIndex).
            //    (If fromIndex is undefined, this step produces the value 0.)
            var n = fromIndex | 0;
            // 5. If n ≥ 0, then
            //  a. Let k be n.
            // 6. Else n < 0,
            //  a. Let k be len + n.
            //  b. If k < 0, let k be 0.
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            // 7. Repeat, while k < len
            while (k < len) {
                // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                // b. If SameValueZero(searchElement, elementK) is true, return true.
                // c. Increase k by 1.
                // NOTE: === provides the correct "SameValueZero" comparison needed here.
                if (o[k] === searchElement) {
                    return true;
                }
                k++;
            }
            // 8. Return false
            return false;
        }
    });
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_db__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_store_devtools__ = __webpack_require__(969);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__environments_environment__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__store_reducers__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__db_schema__ = __webpack_require__(986);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_module__ = __webpack_require__(987);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__store_effects__ = __webpack_require__(991);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var LoaderFactory = function (http) { return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json'); };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["j" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__store_reducers__["b" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_14__store_reducers__["a" /* metaReducers */] }),
                __WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* dev */] ? __WEBPACK_IMPORTED_MODULE_11__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument() : [],
                __WEBPACK_IMPORTED_MODULE_10__ngrx_db__["a" /* DBModule */].provideDB(__WEBPACK_IMPORTED_MODULE_15__db_schema__["a" /* schema */]),
                __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__["c" /* EffectsModule */].forRoot([
                    __WEBPACK_IMPORTED_MODULE_17__store_effects__["b" /* BalancesEffects */],
                    __WEBPACK_IMPORTED_MODULE_17__store_effects__["e" /* MarketsEffects */],
                    __WEBPACK_IMPORTED_MODULE_17__store_effects__["h" /* WalletEffects */],
                    __WEBPACK_IMPORTED_MODULE_17__store_effects__["d" /* ContactsEffects */],
                    __WEBPACK_IMPORTED_MODULE_17__store_effects__["a" /* AuthEffects */],
                    __WEBPACK_IMPORTED_MODULE_17__store_effects__["g" /* TransactionHistoryEffects */],
                    __WEBPACK_IMPORTED_MODULE_17__store_effects__["f" /* SettingsEffects */],
                    __WEBPACK_IMPORTED_MODULE_17__store_effects__["c" /* ClaimsEffects */]
                ]),
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {
                    tabbarPlacement: 'bottom',
                    preloadModules: false,
                    backButtonText: '',
                    backButtonIcon: 'ios-arrow-back',
                    tabsHideOnSubPages: true,
                    scrollPadding: false,
                }, {
                    links: [
                        { loadChildren: '../components/modals/remove-account-modal/remove-account-modal.module#ManageWalletRemoveModalModule', name: 'RemoveAccountModal', segment: 'remove-account-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/modals/send-modal/send-modal.module#SendModalModule', name: 'SendModal', segment: 'send-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/create-wallet/backup-wallet/backup-wallet.module#BackupWalletModule', name: 'BackupWallet', segment: 'backup-wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/discover/discover.module#DiscoverPageModule', name: 'Discover', segment: 'discover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/login/login.module#LoginPageModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/create-wallet/create-wallet.module#CreateWalletPageModule', name: 'CreateWallet', segment: 'create-wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/markets/market-detail/market-detail.module#MarketDetailModule', name: 'MarketDetail', segment: 'market-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/markets/markets.module#MarketsPageModule', name: 'Markets', segment: 'markets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/onboarding/onboarding.module#OnboardingPageModule', name: 'Onboarding', segment: 'onboarding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/possessions/payment-qrcode/payment-qrcode.module#PaymentQRCodeModule', name: 'payment-qrcode', segment: 'payment-qrcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/possessions/possession-detail/possession-detail.module#PossessionDetailPageModule', name: 'PossessionDetail', segment: 'possession-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/possessions/possessions.module#PossessionsPageModule', name: 'Possessions', segment: 'possessions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/profile/claims/claims.module#ClaimsPageModule', name: 'Claims', segment: 'claims', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/profile/contacts/edit-contact/edit-contact.module#EditContactModule', name: 'EditContact', segment: 'edit-contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/profile/helpcentre/helpcentre.module#HelpcentreModule', name: 'Helpcentre', segment: 'helpcentre', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/profile/contacts/contacts.module#ContactsPageModule', name: 'Contacts', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/profile/histories/histories.module#HistoriesModule', name: 'Histories', segment: 'histories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/profile/manage-wallet/add-wallet/add-wallet.module#AddWalletPageModule', name: 'AddWallet', segment: 'add-wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/profile/manage-wallet/add-wallet/import-file/import-wallet.module#ImportWalletModule', name: 'ImportWallet', segment: 'import-wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/profile/manage-wallet/add-wallet/import-private-key/import-private-key.module#ImportPrivateKeyPageModule', name: 'ImportPrivateKeyPage', segment: 'import-private-key', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/profile/manage-wallet/add-wallet/import-success/import-success.module#ImportSuccessPageModule', name: 'ImportSuccessPage', segment: 'import-success', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/profile/manage-wallet/add-wallet/observation-mode/observation-mode.module#ObservationModePageModule', name: 'ObservationMode', segment: 'observation-mode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/profile/manage-wallet/manage-wallet.module#ManageWalletPageModule', name: 'ManageWallet', segment: 'manage-wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/profile/notification/notification.module#NotificationModule', name: 'Notification', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/profile/histories/history-detail/history-detail.module#HistoryDetailModule', name: 'HistoryDetail', segment: 'history-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/profile/settings/settings.module#SettingsPageModule', name: 'Settings', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/profile/profile.module#ProfilePageModule', name: 'Profile', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/storybook/storybook.module#StoryBookModule', name: 'Storybook', segment: 'storybook', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../containers/tabs/tabs.module#TabsPageModule', name: 'Tabs', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: LoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_16__core_module__["a" /* CoreModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export debug */
function debug(title) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.group(title);
        args.forEach(function (arg) { return console.log(arg); });
        console.groupEnd();
    };
}
//# sourceMappingURL=debug.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isOldWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isWIF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isAddress; });
/* unused harmony export doSign */
/* unused harmony export doVerify */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decryptPrv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return verifyKeyPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return findDefaultAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getEveryAccountAddress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_neon__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_neon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__libs_neon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsrsasign__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsrsasign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsrsasign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(55);




var isWallet = function (items) { return __WEBPACK_IMPORTED_MODULE_3__constants__["i" /* NEW_WALLET_CHECK_LIST */].every(function (i) { return items.hasOwnProperty(i); }); };
var isOldWallet = function (items) { return __WEBPACK_IMPORTED_MODULE_3__constants__["j" /* OLD_WALLET_CHECK_LIST */].every(function (i) { return items.hasOwnProperty(i); }); };
var isWIF = __WEBPACK_IMPORTED_MODULE_0__libs_neon__["wallet"].isWIF;
var isAddress = __WEBPACK_IMPORTED_MODULE_0__libs_neon__["wallet"].isAddress;
var doSign = function (prvkey, msg) {
    var sha256withECDSA = new __WEBPACK_IMPORTED_MODULE_2_jsrsasign__["crypto"].Signature({ 'alg': 'SHA256withECDSA' });
    sha256withECDSA.initSign({
        'ecprvhex': prvkey,
        'eccurvename': 'secp256r1'
    });
    sha256withECDSA.updateString(msg);
    return sha256withECDSA.sign();
};
var doVerify = function (pubkey, msg, sigval) {
    var provSignature = new __WEBPACK_IMPORTED_MODULE_2_jsrsasign__["crypto"].Signature({
        'alg': 'SHA256withECDSA',
        'prov': 'cryptojs/jsrsa'
    });
    provSignature.initVerifyByPublicKey({
        'ecpubhex': pubkey,
        'eccurvename': 'secp256r1'
    });
    provSignature.updateString(msg);
    return provSignature.verify(sigval);
};
var decryptPrv = function (enckey, pwd) { return __WEBPACK_IMPORTED_MODULE_1_crypto_js__["AES"]
    .decrypt(enckey, pwd)
    .toString(__WEBPACK_IMPORTED_MODULE_1_crypto_js__["enc"].Utf8); };
var verifyKeyPair = function (prvkey, pubkey) {
    var msg = 'aaa';
    var sigval = doSign(prvkey, msg);
    return doVerify(pubkey, msg, sigval);
};
var findDefaultAccount = function (wallet) {
    try {
        return wallet.defaultAccount
            || wallet.accounts.find(function (account) { return account.isDefault || !!account._privateKey || !!account._WIF; })
            || wallet.accounts[0];
    }
    catch (e) {
        return null;
    }
};
var getEveryAccountAddress = function (wallet) { return wallet.accounts.map(function (account) { return account.address; }); };
//# sourceMappingURL=wallet.utils.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ramda__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * TODO: Temporary using Neon.api.cmc instead
 */
var PriceProvider = /** @class */ (function () {
    function PriceProvider(http) {
        this.http = http;
        this.fixerApi = '//api.fixer.io';
        this.ccmApi = 'https://api.coinmarketcap.com/v1';
        this.ticker = 'ticker';
        this.prices = [];
    }
    PriceProvider_1 = PriceProvider;
    PriceProvider.prototype.getPrices = function (currency) {
        if (currency === void 0) { currency = 'cny'; }
        return this.query(this.ccmApi + "/" + this.ticker, currency).toPromise();
    };
    PriceProvider.prototype.getExchangeRates = function (base) {
        if (base === void 0) { base = 'USD'; }
        return this.http.get(this.fixerApi + "/latest", { params: { base: base } }).toPromise();
    };
    PriceProvider.prototype.query = function (url, currency) {
        var _this = this;
        currency = currency.toLowerCase();
        if (Object(__WEBPACK_IMPORTED_MODULE_6_ramda__["d" /* contains */])(currency, PriceProvider_1.CURRENCIES)) {
            return this.http
                .get(url, { params: { limit: 0, convert: currency } })
                .map(function (res) {
                if (res.error != null)
                    throw new Error(res.error);
                return _this.mapPrices(res, currency);
            })
                .distinctUntilChanged();
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(new ReferenceError(currency + " \u4E0D\u5728\u53EF\u63A5\u53D7\u7684\u8D27\u5E01\u5217\u8868\u91CC!"));
        }
    };
    PriceProvider.prototype.mapPrices = function (tickers, currency) {
        return tickers.filter(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_6_ramda__["d" /* contains */])(data['symbol'], PriceProvider_1.NEO_CHAIN_COINS); })
            .map(function (ticker) { return ({
            symbol: ticker.symbol,
            currentPrice: ticker["price_" + currency],
            percent_change_1h: ticker['percent_change_1h'],
            percent_change_24h: ticker['percent_change_24h'],
            percent_change_7d: ticker['percent_change_7d'],
        }); });
    };
    PriceProvider.CURRENCIES = ['aud', 'brl', 'cad', 'chf', 'clp', 'cny', 'czk', 'dkk', 'eur', 'gbp', 'hkd', 'huf', 'idr',
        'ils', 'inr', 'jpy', 'krw', 'mxn', 'myr', 'nok', 'nzd', 'php', 'pkr', 'pln', 'rub', 'sek',
        'sgd', 'thb', 'try', 'twd', 'usd', 'zar'];
    PriceProvider.NEO_CHAIN_COINS = ['NEO', 'GAS', 'TNC', 'QLC', 'TKY', 'RHT', 'CPX', 'ACAT', 'ZPT', 'APH', 'DBC', 'RPX', 'BCS', 'ONT', 'LRN'];
    PriceProvider = PriceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PriceProvider);
    return PriceProvider;
    var PriceProvider_1;
}());

//# sourceMappingURL=price.provider.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntity", function() { return getEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccounts", function() { return getAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccount", function() { return getAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExits", function() { return getExits; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_utils__ = __webpack_require__(102);


var getState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createFeatureSelector */])('wallet');
var getEntity = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.entity; });
var getError = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.error; });
var getAccounts = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getEntity, function (wallet) { return wallet.accounts; });
var getAccount = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getEntity, __WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* findDefaultAccount */]);
var getExits = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getEntity, function (wallet) { return !!wallet.accounts.length; });
//# sourceMappingURL=wallet.selector.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        this.otcgoApi = 'api.otcgo.cn';
        this.onDestroy = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    ApiProvider.prototype.getAPIEndpoint = function () {
        return __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* dev */]
            ? "http://" + this.otcgoApi + "/testnet"
            : "https://" + this.otcgoApi + "/mainnet";
    };
    ApiProvider.prototype.ngOnDestroy = function () {
        this.onDestroy.next();
    };
    ApiProvider.prototype.request = function (method, url, options) {
        return this.http.request(method, url, options)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["takeUntil"])(this.onDestroy), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["timeout"])(10000));
    };
    ApiProvider.prototype.get = function (endpoint, options) {
        console.log(endpoint);
        return this.http
            .get(this.getAPIEndpoint() + '/' + endpoint, options)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["takeUntil"])(this.onDestroy), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["timeout"])(10000));
    };
    ApiProvider.prototype.post = function (endpoint, body, options) {
        return this.http
            .post(this.getAPIEndpoint() + '/' + endpoint, body, options)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["takeUntil"])(this.onDestroy), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["timeout"])(10000));
    };
    ApiProvider.prototype.broadcast = function (body) {
        console.log('broadcast', body);
        return this.http
            .post(this.getAPIEndpoint() + "/broadcast", body)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["takeUntil"])(this.onDestroy), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["timeout"])(10000));
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.provider.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export environment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dev; });
var environment = {
    production: false,
};
var dev = true;
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPricesState", function() { return getPricesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedPrice", function() { return getSelectedPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPriceBySymbol", function() { return getPriceBySymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAmounts", function() { return getAmounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGASAmounts", function() { return getGASAmounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultAccountAmount", function() { return getDefaultAccountAmount; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__balances_selector__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_selector__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda__ = __webpack_require__(57);




var getPricesState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createFeatureSelector */])('prices');
var getEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getPricesState, function (state) { return state.entities; });
var getSelectedPrice = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getEntities, __WEBPACK_IMPORTED_MODULE_1__balances_selector__["getSelectedBalanceSymbol"], function (entities, symbol) { return Number(entities[symbol.toUpperCase()]) || 0; });
var getPriceBySymbol = function (symbol) { return Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getEntities, function (entities) { return entities && entities[symbol.toUpperCase()]; }); };
// TODO: Move those selectors to balances.selector, shall we?
var getAmounts = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getEntities, __WEBPACK_IMPORTED_MODULE_1__balances_selector__["getNonZeroEntities"], function (prices, balances) { return Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["b" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["o" /* map */])(Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["y" /* reduce */])(function (acc, _a) {
    var amount = _a.amount, symbol = _a.symbol;
    return acc + amount * (Number(prices[symbol]) || 0);
}, 0)), __WEBPACK_IMPORTED_MODULE_3_ramda__["D" /* values */])(balances); });
var getGASAmounts = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getEntities, getAmounts, function (prices, amounts) { return amounts.map(function (amount) { return amount / (Number(prices['GAS']) || 1); }); });
var getDefaultAccountAmount = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getAmounts, __WEBPACK_IMPORTED_MODULE_2__wallet_selector__["getAccount"], __WEBPACK_IMPORTED_MODULE_2__wallet_selector__["getAccounts"], function (amounts, account, accounts) { return amounts[accounts.indexOf(account)] || 0; });
//# sourceMappingURL=prices.selector.js.map

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarketsState", function() { return getMarketsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetails", function() { return getDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedSymbol", function() { return getSelectedSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreMarketsLoadTime", function() { return getPreMarketsLoadTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreDetailsLoadTime", function() { return getPreDetailsLoadTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighest", function() { return getHighest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLowest", function() { return getLowest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVolume", function() { return getVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOpen", function() { return getOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClose", function() { return getClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChangePercentage", function() { return getChangePercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChangeData", function() { return getChangeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedCoin", function() { return getSelectedCoin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__(57);


var getMarketsState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createFeatureSelector */])('markets');
var getEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getMarketsState, function (state) { return state.entities; });
var getLoading = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getMarketsState, function (state) { return state.loading; });
var getError = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getMarketsState, function (state) { return state.error; });
var getDetails = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getMarketsState, function (state) { return state.detail; });
var getSelectedSymbol = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getMarketsState, function (state) { return state.selectedSymbol; });
var getPreMarketsLoadTime = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getMarketsState, function (state) { return state.preMarketsLoadTime; });
var getPreDetailsLoadTime = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getMarketsState, function (state) { return state.preDetailsLoadTime; });
var getHighest = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getDetails, Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["b" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["y" /* reduce */])(__WEBPACK_IMPORTED_MODULE_1_ramda__["p" /* max */], 0), Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["o" /* map */])(Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["w" /* prop */])('high'))));
var getLowest = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getDetails, Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["b" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["y" /* reduce */])(__WEBPACK_IMPORTED_MODULE_1_ramda__["s" /* min */], Infinity), Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["o" /* map */])(Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["w" /* prop */])('low'))));
var getVolume = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getDetails, Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["b" /* compose */])(__WEBPACK_IMPORTED_MODULE_1_ramda__["B" /* sum */], Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["o" /* map */])(Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["w" /* prop */])('volumeto'))));
var getOpen = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getDetails, Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["b" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["w" /* prop */])('close'), __WEBPACK_IMPORTED_MODULE_1_ramda__["k" /* head */]));
var getClose = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getDetails, Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["b" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["w" /* prop */])('close'), __WEBPACK_IMPORTED_MODULE_1_ramda__["m" /* last */]));
var getChangePercentage = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getOpen, getClose, function (open, close) { return (close - open) / open * 100; });
var getChangeData = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getOpen, getHighest, getLowest, getVolume, function (open, high, low, volume) { return [open, high, low, volume / 1000]; });
var getSelectedCoin = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getSelectedSymbol, getEntities, function (symbol, entities) { return entities && entities.find(function (coin) { return coin.symbol === symbol; }); });
//# sourceMappingURL=markets.selector.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(15);

var getState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createFeatureSelector */])('auth');
var getError = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.error; });
var getLoading = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.loading; });
//# sourceMappingURL=auth.selector.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLanguage", function() { return getLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrency", function() { return getCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrencySymbol", function() { return getCurrencySymbol; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_constants__ = __webpack_require__(55);


var getState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createFeatureSelector */])('settings');
var getLanguage = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.language; });
var getCurrency = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.currency; });
var getLoading = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.loading; });
var getError = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.error; });
var getCurrencySymbol = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getCurrency, function (currency) {
    return __WEBPACK_IMPORTED_MODULE_1__shared_constants__["b" /* Currency */][currency] || '￥';
});
//# sourceMappingURL=settings.selector.js.map

/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedAddress", function() { return getSelectedAddress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(15);

var getState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createFeatureSelector */])('transactions');
var getSelectedAddress = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.selectedAddress; });
//# sourceMappingURL=transactions.selector.js.map

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(15);

var getState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createFeatureSelector */])('claims');
var getEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.entities; });
var getError = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.error; });
var getLoading = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getState, function (state) { return state.loading; });
//# sourceMappingURL=claims.selector.js.map

/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_provider__ = __webpack_require__(942);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__router_provider__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterProvider; });
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


var RouterProvider = /** @class */ (function () {
    function RouterProvider(app) {
        this.app = app;
    }
    Object.defineProperty(RouterProvider.prototype, "navController", {
        get: function () {
            return this.app.getActiveNav();
        },
        enumerable: true,
        configurable: true
    });
    RouterProvider.prototype.setRoot = function (pageOrViewCtrl, params, opts, done) {
        return this.navController.setRoot(pageOrViewCtrl, params, opts, done);
    };
    RouterProvider.prototype.push = function (page, params, opts, done) {
        return this.navController.push(page, params, opts, done);
    };
    RouterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], RouterProvider);
    return RouterProvider;
}());

//# sourceMappingURL=router.provider.js.map

/***/ }),

/***/ 972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_actions__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_selectors__ = __webpack_require__(101);
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










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, app, splashScreen, translateService, np, store) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.app = app;
        this.splashScreen = splashScreen;
        this.translateService = translateService;
        this.np = np;
        this.store = store;
        this.rootPage = 'Login';
        this.counter = 0;
    }
    MyApp.prototype.ngOnInit = function () {
        this.initApp();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store_actions__["f" /* SettingsActions */].Load());
    };
    MyApp.prototype.initApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.platform.registerBackButtonAction(function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var nav;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            nav = this.app.getActiveNav();
                            if (nav.canGoBack())
                                return [2 /*return*/, nav.pop()];
                            if (this.counter === 0) {
                                this.counter++;
                                this.translateService.get('TABS.exit_action').take(1).subscribe(function (message) { return _this.np.emit(message); });
                                return [2 /*return*/, setTimeout(function () { return _this.counter = 0; }, 1500)];
                            }
                            return [4 /*yield*/, this.platform.ready()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.platform.exitApp()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            _this.initWallet();
            _this.initTranslate();
        });
    };
    MyApp.prototype.initWallet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store_actions__["i" /* WalletActions */].Load());
                return [2 /*return*/];
            });
        });
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        this.translateService.setDefaultLang('en');
        this.store.select(__WEBPACK_IMPORTED_MODULE_9__store_selectors__["g" /* SettingsSelectors */].getLanguage)
            .subscribe(function (language) {
            var locale = language.split('-')[0];
            _this.translateService.use(locale);
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\app\app.html"*/'<ion-nav [root]="rootPage" #nav></ion-nav>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_7__providers__["f" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return metaReducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_store_freeze__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__balances_reducer__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__markets_reducer__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__prices_reducer__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wallet_reducer__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_reducer__ = __webpack_require__(981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transaction_history_reducer__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_reducer__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contacts_reducer__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__transactions_reducer__ = __webpack_require__(984);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__claims_reducer__ = __webpack_require__(985);
/* unused harmony reexport fromBalances */
/* unused harmony reexport fromMarkets */
/* unused harmony reexport fromPrices */
/* unused harmony reexport fromWallet */
/* unused harmony reexport fromAuth */
/* unused harmony reexport fromTransactionHistory */
/* unused harmony reexport fromSettings */
/* unused harmony reexport fromTransactions */
/* unused harmony reexport fromClaims */












var reducers = {
    balances: __WEBPACK_IMPORTED_MODULE_2__balances_reducer__["a" /* reducer */],
    markets: __WEBPACK_IMPORTED_MODULE_3__markets_reducer__["a" /* reducer */],
    prices: __WEBPACK_IMPORTED_MODULE_4__prices_reducer__["a" /* reducer */],
    wallet: __WEBPACK_IMPORTED_MODULE_5__wallet_reducer__["a" /* reducer */],
    auth: __WEBPACK_IMPORTED_MODULE_6__auth_reducer__["a" /* reducer */],
    transaction_history: __WEBPACK_IMPORTED_MODULE_7__transaction_history_reducer__["a" /* reducer */],
    settings: __WEBPACK_IMPORTED_MODULE_8__settings_reducer__["a" /* reducer */],
    contacts: __WEBPACK_IMPORTED_MODULE_9__contacts_reducer__["b" /* reducer */],
    transactions: __WEBPACK_IMPORTED_MODULE_10__transactions_reducer__["a" /* reducer */],
    claims: __WEBPACK_IMPORTED_MODULE_11__claims_reducer__["a" /* reducer */]
};
function logger(reducer) {
    return function (state, action) {
        console.group(action.type);
        var nextState = reducer(state, action);
        console.log("%c prev state", "color: #9E9E9E; font-weight: bold", state);
        console.log("%c action", "color: #03A9F4; font-weight: bold", action);
        console.log("%c next state", "color: #4CAF50; font-weight: bold", nextState);
        console.groupEnd();
        return nextState;
    };
}
var metaReducers = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* dev */] ? [logger, __WEBPACK_IMPORTED_MODULE_0_ngrx_store_freeze__["storeFreeze"]] : [];

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_balances_action__ = __webpack_require__(114);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialBalancesState = {
    selectedBalanceSymbol: '',
    entities: {},
    loading: false,
    error: ''
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialBalancesState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_balances_action__["BalancesActionTypes"].LOAD: {
            return __assign({}, state, { loading: true });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_balances_action__["BalancesActionTypes"].LOAD_FAIL: {
            return __assign({}, state, { error: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_balances_action__["BalancesActionTypes"].LOAD_SUCCESS: {
            return __assign({}, state, { entities: action.payload, loading: false });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_balances_action__["BalancesActionTypes"].SELECT: {
            return __assign({}, state, { selectedBalanceSymbol: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_balances_action__["BalancesActionTypes"].CLEAN_SELECTED_COIN: {
            return __assign({}, state, { selectedBalanceSymbol: '' });
        }
        default:
            return state;
    }
};
//# sourceMappingURL=balances.reducer.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_markets_action__ = __webpack_require__(183);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    loading: false,
    error: '',
    detail: [],
    entities: [],
    preMarketsLoadTime: 0,
    preDetailsLoadTime: 0,
    selectedSymbol: ''
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_markets_action__["MarketsActionTypes"].LOAD:
        case __WEBPACK_IMPORTED_MODULE_0__actions_markets_action__["MarketsActionTypes"].LOAD_DETAIL: {
            return __assign({}, state, { loading: true });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_markets_action__["MarketsActionTypes"].LOAD_SUCCESS: {
            return __assign({}, state, { entities: action.payload, loading: false });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_markets_action__["MarketsActionTypes"].LOAD_DETAIL_SUCCESS: {
            return __assign({}, state, { detail: action.payload, loading: false });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_markets_action__["MarketsActionTypes"].LOAD_FAIL:
        case __WEBPACK_IMPORTED_MODULE_0__actions_markets_action__["MarketsActionTypes"].LOAD_DETAIL_FAIL: {
            return __assign({}, state, { error: action.payload, loading: false });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_markets_action__["MarketsActionTypes"].SELECT: {
            return __assign({}, state, { selectedSymbol: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_markets_action__["MarketsActionTypes"].UPDATE_MARKETS_LOAD_TIME: {
            return __assign({}, state, { preMarketsLoadTime: Date.now() });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_markets_action__["MarketsActionTypes"].UPDATE_DETAILS_LOAD_TIME: {
            return __assign({}, state, { preDetailsLoadTime: Date.now() });
        }
        default: return state;
    }
};
//# sourceMappingURL=markets.reducer.js.map

/***/ }),

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_prices_action__ = __webpack_require__(184);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    entities: {}
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_prices_action__["b" /* PricesActionTypes */].LOAD:
            return __assign({}, state, { entities: action.payload });
        default: return state;
    }
};
//# sourceMappingURL=prices.reducer.js.map

/***/ }),

/***/ 980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_wallet_action__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_auth_action__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_neon__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_neon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__libs_neon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_constants__ = __webpack_require__(55);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var initialState = {
    error: '',
    loading: false,
    entity: new __WEBPACK_IMPORTED_MODULE_2__libs_neon__["wallet"].Wallet(__WEBPACK_IMPORTED_MODULE_3__shared_constants__["d" /* DEFAULT_EMPTY_WALLET */])
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_wallet_action__["WalletActionTypes"].ADD_ACCOUNT_SUCCESS: {
            var payload = action.payload;
            var accounts = state.entity.accounts.slice().map(function (account) { return new __WEBPACK_IMPORTED_MODULE_2__libs_neon__["wallet"].Account(account); });
            accounts.push(payload);
            var entity = new __WEBPACK_IMPORTED_MODULE_2__libs_neon__["wallet"].Wallet(__assign({}, state.entity, { accounts: accounts }));
            return __assign({}, state, { entity: entity, loading: false });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_wallet_action__["WalletActionTypes"].CHANGE_ACCOUNT_LABEL: {
            var payload_1 = action.payload;
            var accounts = state.entity.accounts.map(function (account) {
                return account.address === payload_1.address
                    ? payload_1
                    : account;
            });
            var entity = new __WEBPACK_IMPORTED_MODULE_2__libs_neon__["wallet"].Wallet(__assign({}, state.entity, { accounts: accounts }));
            return __assign({}, state, { entity: entity });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_wallet_action__["WalletActionTypes"].SET_DEFAULT_ACCOUNT: {
            var payload_2 = action.payload;
            var accounts = state.entity.accounts.map(function (account) {
                var tempAcct = new __WEBPACK_IMPORTED_MODULE_2__libs_neon__["wallet"].Account(account);
                tempAcct.isDefault = account.address === payload_2.address;
                return tempAcct;
            });
            var entity = new __WEBPACK_IMPORTED_MODULE_2__libs_neon__["wallet"].Wallet(__assign({}, state.entity, { accounts: accounts }));
            return __assign({}, state, { entity: entity });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_wallet_action__["WalletActionTypes"].REMOVE_ACCOUNT: {
            var payload_3 = action.payload;
            var accounts = state.entity
                .accounts
                .filter(function (account) { return account.address !== payload_3.address; })
                .map(function (account) { return new __WEBPACK_IMPORTED_MODULE_2__libs_neon__["wallet"].Account(account); });
            console.log(accounts);
            if (payload_3.isDefault) {
                accounts[0].isDefault = true;
            }
            var entity = new __WEBPACK_IMPORTED_MODULE_2__libs_neon__["wallet"].Wallet(__assign({}, state.entity, { accounts: accounts }));
            console.log(entity);
            return __assign({}, state, { entity: entity });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_wallet_action__["WalletActionTypes"].LOAD:
        case __WEBPACK_IMPORTED_MODULE_1__actions_auth_action__["AuthActionTypes"].LOGIN_OLD_WALLET: {
            return __assign({}, state, { loading: true });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_wallet_action__["WalletActionTypes"].LOAD_FAIL:
        case __WEBPACK_IMPORTED_MODULE_0__actions_wallet_action__["WalletActionTypes"].ADD_ACCOUNT_FAIL: {
            return __assign({}, state, { loading: false, error: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_wallet_action__["WalletActionTypes"].LOAD_SUCCESS:
        case __WEBPACK_IMPORTED_MODULE_1__actions_auth_action__["AuthActionTypes"].LOGIN_SUCCESS: {
            return __assign({}, state, { loading: false, entity: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_wallet_action__["WalletActionTypes"].UPDATE_WALLET: {
            var entity = Object.assign({}, state.entity);
            var _a = action.payload, key = _a.key, value = _a.value;
            entity[key] = value;
            return __assign({}, state, { entity: entity, loading: false });
        }
        default: return state;
    }
};
//# sourceMappingURL=wallet.reducer.js.map

/***/ }),

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__ = __webpack_require__(116);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialBalancesState = {
    loading: false,
    error: ''
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialBalancesState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__["AuthActionTypes"].LOGIN:
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__["AuthActionTypes"].LOGIN_WIF:
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__["AuthActionTypes"].LOGIN_OLD_WALLET:
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__["AuthActionTypes"].LOGIN_LEDGER:
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__["AuthActionTypes"].LOGIN_NEO_DUN:
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__["AuthActionTypes"].CREATE_WALLET: {
            return __assign({}, state, { loading: true });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__["AuthActionTypes"].LOGIN_FAIL:
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__["AuthActionTypes"].LOGIN_WIF_FAIL:
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__["AuthActionTypes"].LOGIN_OLD_WALLET_FAIL:
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__["AuthActionTypes"].LOGIN_LEDGER_FAIL:
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__["AuthActionTypes"].LOGIN_NEO_DUN_FAIL:
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__["AuthActionTypes"].CREATE_WALLET_FAIL: {
            return __assign({}, state, { error: action.payload, loading: false });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__["AuthActionTypes"].LOGIN_WIF_SUCCESS:
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__["AuthActionTypes"].LOGIN_OLD_WALLET_SUCCESS:
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__["AuthActionTypes"].LOGIN_LEDGER_SUCCESS:
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__["AuthActionTypes"].LOGIN_NEO_DUN_SUCCESS:
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_action__["AuthActionTypes"].CREATE_WALLET_SUCCESS: {
            return __assign({}, state, { loading: false });
        }
        default:
            return state;
    }
};
//# sourceMappingURL=auth.reducer.js.map

/***/ }),

/***/ 982:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_transaction_history_action__ = __webpack_require__(186);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    entities: [],
    details: null,
    loading: false,
    error: null,
    selectedTxid: ''
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_transaction_history_action__["TransactionHistoryActionTypes"].LOAD:
        case __WEBPACK_IMPORTED_MODULE_0__actions_transaction_history_action__["TransactionHistoryActionTypes"].LOAD_DETAIL: {
            return __assign({}, state, { loading: true });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_transaction_history_action__["TransactionHistoryActionTypes"].LOAD_FAIL:
        case __WEBPACK_IMPORTED_MODULE_0__actions_transaction_history_action__["TransactionHistoryActionTypes"].LOAD_DETAIL_FAIL: {
            return __assign({}, state, { error: action.payload, loading: false });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_transaction_history_action__["TransactionHistoryActionTypes"].LOAD_SUCCESS: {
            return __assign({}, state, { entities: action.payload, loading: true });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_transaction_history_action__["TransactionHistoryActionTypes"].LOAD_DETAIL_SUCCESS: {
            return __assign({}, state, { details: action.payload, loading: false });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_transaction_history_action__["TransactionHistoryActionTypes"].SELECT: {
            return __assign({}, state, { selectedTxid: action.payload });
        }
        default: return state;
    }
};
//# sourceMappingURL=transaction-history.reducer.js.map

/***/ }),

/***/ 983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_settings_action__ = __webpack_require__(185);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialSettingsState = {
    language: __WEBPACK_IMPORTED_MODULE_0__shared_constants__["e" /* DEFAULT_LANGUAGE */],
    loading: false,
    error: '',
    currency: __WEBPACK_IMPORTED_MODULE_0__shared_constants__["c" /* DEFAULT_CURRENCY */],
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialSettingsState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_settings_action__["SettingsActionTypes"].LOAD: {
            return __assign({}, state, { loading: true, error: '' });
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_settings_action__["SettingsActionTypes"].LOAD_FAIL: {
            return __assign({}, state, { loading: false, error: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_settings_action__["SettingsActionTypes"].LOAD_SUCCESS: {
            return __assign({}, state, { loading: false, currency: action.payload.currency, language: action.payload.language });
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_settings_action__["SettingsActionTypes"].CHANGE_CURRENCY: {
            return __assign({}, state, { loading: false, currency: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_settings_action__["SettingsActionTypes"].CHANGE_LANGUAGE: {
            return __assign({}, state, { loading: false, language: action.payload });
        }
        default:
            return state;
    }
};
//# sourceMappingURL=settings.reducer.js.map

/***/ }),

/***/ 984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_transactions_action__ = __webpack_require__(313);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    selectedAddress: ''
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_transactions_action__["TransactionsActionTypes"].SELECT_CONTACT: {
            return __assign({}, state, { selectedAddress: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_transactions_action__["TransactionsActionTypes"].CLEAN_SELECTED_CONTACT: {
            return __assign({}, state, { selectedAddress: '' });
        }
        default: return state;
    }
};
//# sourceMappingURL=transactions.reducer.js.map

/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_claims_action__ = __webpack_require__(187);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    entities: null,
    loading: false,
    error: ''
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_claims_action__["ClaimsActionTypes"].LOAD:
        case __WEBPACK_IMPORTED_MODULE_0__actions_claims_action__["ClaimsActionTypes"].DO_CLAIM:
        case __WEBPACK_IMPORTED_MODULE_0__actions_claims_action__["ClaimsActionTypes"].DO_CLAIM_SUCCESS: {
            return __assign({}, state, { loading: true });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_claims_action__["ClaimsActionTypes"].LOAD_FAIL:
        case __WEBPACK_IMPORTED_MODULE_0__actions_claims_action__["ClaimsActionTypes"].DO_CLAIM_FAIL: {
            return __assign({}, state, { loading: false, error: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_claims_action__["ClaimsActionTypes"].LOAD_SUCCESS: {
            return __assign({}, state, { loading: true, entities: action.payload });
        }
        default: return state;
    }
};
//# sourceMappingURL=claims.reducer.js.map

/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schema; });
var schema = {
    version: 1,
    name: 'sea_app',
    stores: {
        markets: {
            autoIncrement: false,
            primaryKey: 'symbol'
        },
        prices: {
            autoIncrement: false
        }
    }
};
//# sourceMappingURL=db-schema.js.map

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_clipboard__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_possessions_possession_detail_possession_detail_provider__ = __webpack_require__(988);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_modals_send_modal_send_modal_provider__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__containers_profile_claims_claims_provider__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_file_storage_provider__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_notification_provider__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_loading_provider__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_logger_provider__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_16__providers_logger_provider__["a" /* Logger */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_8__providers__["i" /* WalletProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers__["b" /* AccountProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers__["c" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers__["g" /* PriceProvider */],
                __WEBPACK_IMPORTED_MODULE_9__containers_possessions_possession_detail_possession_detail_provider__["a" /* PossessionDetailProvider */],
                __WEBPACK_IMPORTED_MODULE_10__components_modals_send_modal_send_modal_provider__["a" /* SendModalProvider */],
                __WEBPACK_IMPORTED_MODULE_11__containers_profile_claims_claims_provider__["a" /* ClaimsProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_file_storage_provider__["a" /* FileStorageProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_notification_provider__["a" /* NotificationProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_loading_provider__["a" /* LoadingProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers__["h" /* RouterProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_15_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PossessionDetailProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api_consts__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_constants__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_neon__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_neon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__libs_neon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_account_account_provider__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PossessionDetailProvider = /** @class */ (function () {
    function PossessionDetailProvider(apiProvider, accountProvider) {
        this.apiProvider = apiProvider;
        this.accountProvider = accountProvider;
        this.account = this.accountProvider.defaultAccount;
    }
    PossessionDetailProvider.prototype.getPrices = function () {
        return __WEBPACK_IMPORTED_MODULE_4__libs_neon__["api"].cmc.getPrices(['NEO', 'GAS', 'QLC', 'RPX', 'DBC', 'TNC'], 'cny');
    };
    PossessionDetailProvider.prototype.getHistories = function (name) {
        var assetId = '0x' + __WEBPACK_IMPORTED_MODULE_3__shared_constants__["a" /* ASSET_ENUM */][name.toUpperCase()];
        return this.apiProvider
            .get(__WEBPACK_IMPORTED_MODULE_2__providers_api_api_consts__["HISTORY"] + '/' + this.account.address)
            .map(function (res) { return res['result']; })
            .map(function (result) { return result.filter(function (item) { return item.asset === assetId; }); })
            .map(function (result) { return result.map(function (item) { return parseTx(item); }); })
            .toPromise();
    };
    PossessionDetailProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers__["c" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_account_account_provider__["a" /* AccountProvider */]])
    ], PossessionDetailProvider);
    return PossessionDetailProvider;
}());

function parseTx(data) {
    var _a = __WEBPACK_IMPORTED_MODULE_1_moment__(data['time']).add(8, 'h').format('GGGG/MM/DD HH:mm:ss').toString().split(' '), subtitle = _a[0], title = _a[1];
    return __assign({}, data, { time: { subtitle: subtitle, title: title } });
}
//# sourceMappingURL=possession-detail.provider.js.map

/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 447,
	"./af.js": 447,
	"./ar": 448,
	"./ar-dz": 449,
	"./ar-dz.js": 449,
	"./ar-kw": 450,
	"./ar-kw.js": 450,
	"./ar-ly": 451,
	"./ar-ly.js": 451,
	"./ar-ma": 452,
	"./ar-ma.js": 452,
	"./ar-sa": 453,
	"./ar-sa.js": 453,
	"./ar-tn": 454,
	"./ar-tn.js": 454,
	"./ar.js": 448,
	"./az": 455,
	"./az.js": 455,
	"./be": 456,
	"./be.js": 456,
	"./bg": 457,
	"./bg.js": 457,
	"./bm": 458,
	"./bm.js": 458,
	"./bn": 459,
	"./bn.js": 459,
	"./bo": 460,
	"./bo.js": 460,
	"./br": 461,
	"./br.js": 461,
	"./bs": 462,
	"./bs.js": 462,
	"./ca": 463,
	"./ca.js": 463,
	"./cs": 464,
	"./cs.js": 464,
	"./cv": 465,
	"./cv.js": 465,
	"./cy": 466,
	"./cy.js": 466,
	"./da": 467,
	"./da.js": 467,
	"./de": 468,
	"./de-at": 469,
	"./de-at.js": 469,
	"./de-ch": 470,
	"./de-ch.js": 470,
	"./de.js": 468,
	"./dv": 471,
	"./dv.js": 471,
	"./el": 472,
	"./el.js": 472,
	"./en-au": 473,
	"./en-au.js": 473,
	"./en-ca": 474,
	"./en-ca.js": 474,
	"./en-gb": 475,
	"./en-gb.js": 475,
	"./en-ie": 476,
	"./en-ie.js": 476,
	"./en-il": 477,
	"./en-il.js": 477,
	"./en-nz": 478,
	"./en-nz.js": 478,
	"./eo": 479,
	"./eo.js": 479,
	"./es": 480,
	"./es-do": 481,
	"./es-do.js": 481,
	"./es-us": 482,
	"./es-us.js": 482,
	"./es.js": 480,
	"./et": 483,
	"./et.js": 483,
	"./eu": 484,
	"./eu.js": 484,
	"./fa": 485,
	"./fa.js": 485,
	"./fi": 486,
	"./fi.js": 486,
	"./fo": 487,
	"./fo.js": 487,
	"./fr": 488,
	"./fr-ca": 489,
	"./fr-ca.js": 489,
	"./fr-ch": 490,
	"./fr-ch.js": 490,
	"./fr.js": 488,
	"./fy": 491,
	"./fy.js": 491,
	"./gd": 492,
	"./gd.js": 492,
	"./gl": 493,
	"./gl.js": 493,
	"./gom-latn": 494,
	"./gom-latn.js": 494,
	"./gu": 495,
	"./gu.js": 495,
	"./he": 496,
	"./he.js": 496,
	"./hi": 497,
	"./hi.js": 497,
	"./hr": 498,
	"./hr.js": 498,
	"./hu": 499,
	"./hu.js": 499,
	"./hy-am": 500,
	"./hy-am.js": 500,
	"./id": 501,
	"./id.js": 501,
	"./is": 502,
	"./is.js": 502,
	"./it": 503,
	"./it.js": 503,
	"./ja": 504,
	"./ja.js": 504,
	"./jv": 505,
	"./jv.js": 505,
	"./ka": 506,
	"./ka.js": 506,
	"./kk": 507,
	"./kk.js": 507,
	"./km": 508,
	"./km.js": 508,
	"./kn": 509,
	"./kn.js": 509,
	"./ko": 510,
	"./ko.js": 510,
	"./ky": 511,
	"./ky.js": 511,
	"./lb": 512,
	"./lb.js": 512,
	"./lo": 513,
	"./lo.js": 513,
	"./lt": 514,
	"./lt.js": 514,
	"./lv": 515,
	"./lv.js": 515,
	"./me": 516,
	"./me.js": 516,
	"./mi": 517,
	"./mi.js": 517,
	"./mk": 518,
	"./mk.js": 518,
	"./ml": 519,
	"./ml.js": 519,
	"./mr": 520,
	"./mr.js": 520,
	"./ms": 521,
	"./ms-my": 522,
	"./ms-my.js": 522,
	"./ms.js": 521,
	"./mt": 523,
	"./mt.js": 523,
	"./my": 524,
	"./my.js": 524,
	"./nb": 525,
	"./nb.js": 525,
	"./ne": 526,
	"./ne.js": 526,
	"./nl": 527,
	"./nl-be": 528,
	"./nl-be.js": 528,
	"./nl.js": 527,
	"./nn": 529,
	"./nn.js": 529,
	"./pa-in": 530,
	"./pa-in.js": 530,
	"./pl": 531,
	"./pl.js": 531,
	"./pt": 532,
	"./pt-br": 533,
	"./pt-br.js": 533,
	"./pt.js": 532,
	"./ro": 534,
	"./ro.js": 534,
	"./ru": 535,
	"./ru.js": 535,
	"./sd": 536,
	"./sd.js": 536,
	"./se": 537,
	"./se.js": 537,
	"./si": 538,
	"./si.js": 538,
	"./sk": 539,
	"./sk.js": 539,
	"./sl": 540,
	"./sl.js": 540,
	"./sq": 541,
	"./sq.js": 541,
	"./sr": 542,
	"./sr-cyrl": 543,
	"./sr-cyrl.js": 543,
	"./sr.js": 542,
	"./ss": 544,
	"./ss.js": 544,
	"./sv": 545,
	"./sv.js": 545,
	"./sw": 546,
	"./sw.js": 546,
	"./ta": 547,
	"./ta.js": 547,
	"./te": 548,
	"./te.js": 548,
	"./tet": 549,
	"./tet.js": 549,
	"./tg": 550,
	"./tg.js": 550,
	"./th": 551,
	"./th.js": 551,
	"./tl-ph": 552,
	"./tl-ph.js": 552,
	"./tlh": 553,
	"./tlh.js": 553,
	"./tr": 554,
	"./tr.js": 554,
	"./tzl": 555,
	"./tzl.js": 555,
	"./tzm": 556,
	"./tzm-latn": 557,
	"./tzm-latn.js": 557,
	"./tzm.js": 556,
	"./ug-cn": 558,
	"./ug-cn.js": 558,
	"./uk": 559,
	"./uk.js": 559,
	"./ur": 560,
	"./ur.js": 560,
	"./uz": 561,
	"./uz-latn": 562,
	"./uz-latn.js": 562,
	"./uz.js": 561,
	"./vi": 563,
	"./vi.js": 563,
	"./x-pseudo": 564,
	"./x-pseudo.js": 564,
	"./yo": 565,
	"./yo.js": 565,
	"./zh-cn": 566,
	"./zh-cn.js": 566,
	"./zh-hk": 567,
	"./zh-hk.js": 567,
	"./zh-tw": 568,
	"./zh-tw.js": 568
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 990;

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__balances_effect__ = __webpack_require__(992);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__balances_effect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markets_effect__ = __webpack_require__(994);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__markets_effect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_effect__ = __webpack_require__(998);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__wallet_effect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_effect__ = __webpack_require__(999);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__auth_effect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_history_effect__ = __webpack_require__(1000);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__transaction_history_effect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_effect__ = __webpack_require__(1001);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__settings_effect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contacts_effect__ = __webpack_require__(1002);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__contacts_effect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__claims_effect__ = __webpack_require__(1003);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__claims_effect__["a"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalancesEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_utils__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_balances_action__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_api__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_concatMap__ = __webpack_require__(993);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_concatMap__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var BalancesEffects = /** @class */ (function () {
    function BalancesEffects(actions$, apiProvider, store$) {
        var _this = this;
        this.actions$ = actions$;
        this.apiProvider = apiProvider;
        this.store$ = store$;
        this.Load$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_9__actions_balances_action__["BalancesActionTypes"].LOAD), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["withLatestFrom"])(this.store$, function (_, state) { return Object(__WEBPACK_IMPORTED_MODULE_8__shared_utils__["d" /* getEveryAccountAddress */])(state.wallet.entity); }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["switchMap"])(function (addresses) {
            var nextGet$ = _this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_9__actions_balances_action__["BalancesActionTypes"].LOAD), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["skip"])(1));
            return _this.apiProvider
                .get("" + __WEBPACK_IMPORTED_MODULE_10__providers_api__["a" /* API_CONSTANTS */].ASSET)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["mergeMap"])(function (asset) {
                return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__["forkJoin"])(addresses.map(_this.getBalance.bind(_this))).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["takeUntil"])(nextGet$), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (balances) { return new __WEBPACK_IMPORTED_MODULE_9__actions_balances_action__["LoadSuccess"](balances.reduce(balancesReducer(Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["i" /* flatten */])(Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["D" /* values */])(asset))), {})); }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_9__actions_balances_action__["LoadFail"](error)); }));
            }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_9__actions_balances_action__["LoadFail"](error)); }));
        }));
    }
    BalancesEffects.prototype.getBalance = function (addr) {
        return this.apiProvider
            .get(__WEBPACK_IMPORTED_MODULE_10__providers_api__["a" /* API_CONSTANTS */].BALANCES + "/" + addr)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["publishLast"])(), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["refCount"])(), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_9__actions_balances_action__["LoadFail"](error)); }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"])
    ], BalancesEffects.prototype, "Load$", void 0);
    BalancesEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_10__providers_api__["b" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], BalancesEffects);
    return BalancesEffects;
}());

function balancesReducer(asset) {
    return function (acc, _a) {
        var address = _a._id, balances = _a.balances;
        return (__assign({}, acc, (_b = {}, _b[address] = mappingBalances(balances, asset), _b)));
        var _b;
    };
}
function mappingBalances(balances, asset) {
    return balances
        ? Object.keys(balances)
            .map(function (hash) {
            var coin = asset.find(function (c) { return c.id === hash; });
            var name = Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["e" /* either */])(Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["w" /* prop */])('symbol'), Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["x" /* propOr */])('-', 'name'))(coin);
            var sym = Array.isArray(name) ? name[0].name : name;
            var symbol = sym === '小蚁股' ? 'NEO'
                : sym === '小蚁币' ? 'GAS'
                    : sym;
            return {
                hash: hash,
                symbol: symbol,
                amount: Number(balances[hash])
            };
        })
        : [];
}
//# sourceMappingURL=balances.effect.js.map

/***/ }),

/***/ 994:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_db__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_combineLatest__ = __webpack_require__(995);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_defer__ = __webpack_require__(996);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_defer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_defer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_from__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_observable_fromPromise__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_operators__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__actions_markets_action__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__actions_prices_action__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__libs_neon__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__libs_neon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__libs_neon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__selectors__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_constants__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ramda__ = __webpack_require__(57);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var MarketsEffects = /** @class */ (function () {
    function MarketsEffects(actions$, store$, apiProvider, nativeStorage, db, platform) {
        var _this = this;
        this.actions$ = actions$;
        this.store$ = store$;
        this.apiProvider = apiProvider;
        this.nativeStorage = nativeStorage;
        this.db = db;
        this.platform = platform;
        this.openDB$ = Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_defer__["defer"])(function () { return _this.db.open('sea_app'); });
        this.load$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_14__actions_markets_action__["MarketsActionTypes"].LOAD), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["withLatestFrom"])(this.store$.select(__WEBPACK_IMPORTED_MODULE_17__selectors__["g" /* SettingsSelectors */].getCurrency), this.store$.select(__WEBPACK_IMPORTED_MODULE_17__selectors__["e" /* MarketsSelectors */].getPreMarketsLoadTime), function (_, currency, preTime) { return ({ currency: currency, preTime: preTime }); }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["switchMap"])(function (_a) {
            var currency = _a.currency, preTime = _a.preTime;
            var isPreLoadTimeLessThanFiveMinutes = preTime + __WEBPACK_IMPORTED_MODULE_18__shared_constants__["g" /* FIVE_MINUTES_MS */] > Date.now();
            if (isPreLoadTimeLessThanFiveMinutes)
                return _this.loadFromDatabase();
            var nextLoad$ = _this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_14__actions_markets_action__["MarketsActionTypes"].LOAD), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["skip"])(1));
            return loadMarkets.bind(_this)(nextLoad$, currency);
        }));
        this.LoadDetail$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_14__actions_markets_action__["MarketsActionTypes"].LOAD_DETAIL), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["map"])(function (action) { return action.payload; }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["withLatestFrom"])(this.store$.select(__WEBPACK_IMPORTED_MODULE_17__selectors__["g" /* SettingsSelectors */].getCurrency), this.store$.select(__WEBPACK_IMPORTED_MODULE_17__selectors__["e" /* MarketsSelectors */].getSelectedSymbol), function (duration, currency, symbol) { return ({ duration: duration, currency: currency, symbol: symbol }); }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["switchMap"])(function (_a) {
            var duration = _a.duration, currency = _a.currency, symbol = _a.symbol;
            var nextLoadDetail$ = _this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_14__actions_markets_action__["MarketsActionTypes"].LOAD), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["skip"])(1));
            var params = { fsym: symbol.toUpperCase(), tsym: currency.toUpperCase() };
            switch (duration) {
                case 'hour':
                    return _this.fetchDetails(nextLoadDetail$, 'histominute', __assign({}, params, { limit: 60 }));
                case 'day':
                    return _this.fetchDetails(nextLoadDetail$, 'histohour', __assign({}, params, { limit: 24 }));
                case 'week':
                    return _this.fetchDetails(nextLoadDetail$, 'histohour', __assign({}, params, { limit: 168 }));
                case 'month':
                    return _this.fetchDetails(nextLoadDetail$, 'histoday', __assign({}, params, { limit: 30 }));
                default: return _this.fetchDetails(nextLoadDetail$, 'histominute', __assign({}, params, { limit: 60 }));
            }
        }));
    }
    MarketsEffects.prototype.fetchDetails = function (next, call, params) {
        return this.apiProvider.request('GET', "https://min-api.cryptocompare.com/data/" + call, { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["takeUntil"])(next), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["publishLast"])(), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["refCount"])(), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["map"])(function (r) {
            return r
                ? new __WEBPACK_IMPORTED_MODULE_14__actions_markets_action__["LoadDetailSuccess"](r.Data)
                : new __WEBPACK_IMPORTED_MODULE_14__actions_markets_action__["LoadFail"]('Get markets details error, Response didn\'t exits');
        }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_14__actions_markets_action__["LoadFail"](error)); }));
    };
    MarketsEffects.prototype.loadFromDatabase = function () {
        console.log('loadFromDatabase', this.db);
        if (this.platform.is('mobileweb')) {
            return Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_combineLatest__["combineLatest"])(this.db.query('markets').pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["toArray"])()), this.db.query('prices').pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["toArray"])())).pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["mergeMap"])(function (_a) {
                var markets = _a[0], prices = _a[1];
                var enti = Object(__WEBPACK_IMPORTED_MODULE_19_ramda__["j" /* fromPairs */])(prices);
                console.log('markets', markets);
                console.log('reversed pairs', enti);
                return [new __WEBPACK_IMPORTED_MODULE_14__actions_markets_action__["LoadSuccess"](markets), new __WEBPACK_IMPORTED_MODULE_15__actions_prices_action__["a" /* Load */](enti)];
            }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["catchError"])(function (e) {
                console.log('error from loadFromDatabase', e);
                return Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_14__actions_markets_action__["LoadFail"](e));
            }));
        }
        return Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_combineLatest__["combineLatest"])(this.nativeStorage.getItem('prices'), this.nativeStorage.getItem('markets')).pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["mergeMap"])(function (_a) {
            var markets = _a[0], prices = _a[1];
            return [new __WEBPACK_IMPORTED_MODULE_14__actions_markets_action__["LoadSuccess"](markets), new __WEBPACK_IMPORTED_MODULE_15__actions_prices_action__["a" /* Load */](prices)];
        }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["catchError"])(function (e) {
            console.log('error from loadFromDatabase', e);
            return Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_14__actions_markets_action__["LoadFail"](e));
        }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"])
    ], MarketsEffects.prototype, "openDB$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"])
    ], MarketsEffects.prototype, "load$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"])
    ], MarketsEffects.prototype, "LoadDetail$", void 0);
    MarketsEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_13__providers__["c" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_db__["b" /* Database */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* Platform */]])
    ], MarketsEffects);
    return MarketsEffects;
}());

function loadMarkets(nextLoad$, baseCurrency) {
    var _this = this;
    if (baseCurrency === void 0) { baseCurrency = 'cny'; }
    return Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_fromPromise__["fromPromise"])(__WEBPACK_IMPORTED_MODULE_16__libs_neon__["api"].cmc.getMarkets(__WEBPACK_IMPORTED_MODULE_13__providers__["g" /* PriceProvider */].NEO_CHAIN_COINS, baseCurrency))
        .pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_14__actions_markets_action__["LoadFail"](error)); }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["timeout"])(12368), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_14__actions_markets_action__["LoadFail"](error)); }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["takeUntil"])(nextLoad$), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["publishLast"])(), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["refCount"])(), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["mergeMap"])(function (markets) {
        if (markets) {
            var mappedPrices = mappingPrices(markets);
            if (_this.platform.is('mobileweb') || _this.platform.is('core')) {
                var pairsPrices = Object(__WEBPACK_IMPORTED_MODULE_19_ramda__["C" /* toPairs */])(mappedPrices);
                console.log('db', _this.db);
                _this.db.insert('markets', markets).pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["toArray"])())
                    .subscribe(function (m) { return console.log('Insert markets successful', m); }, function (e) { return console.log('Insert markets fail', e); }, function (c) { return console.log('Insert markets complete', c); });
                _this.db.insert('prices', pairsPrices).pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["toArray"])())
                    .subscribe(function (m) { return console.log('Insert markets successful', m); }, function (e) { return console.log('Insert markets fail', e); }, function (c) { return console.log('Insert markets complete', c); });
                console.log('Fallback using DB');
                console.log('Insert markets', markets);
                console.log('Insert prices', pairsPrices);
            }
            else {
                try {
                    _this.nativeStorage.setItem('prices', mappedPrices);
                    _this.nativeStorage.setItem('markets', markets);
                }
                catch (e) {
                    console.log('Error on load markets effect nativeStorage execution', e);
                }
            }
            return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_from__["from"])([
                new __WEBPACK_IMPORTED_MODULE_14__actions_markets_action__["LoadSuccess"](markets),
                new __WEBPACK_IMPORTED_MODULE_15__actions_prices_action__["a" /* Load */](mappedPrices),
                new __WEBPACK_IMPORTED_MODULE_14__actions_markets_action__["UpdateMarketsLoadTime"]()
            ]);
        }
        return Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_14__actions_markets_action__["LoadFail"]('Get markets error'));
    }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_14__actions_markets_action__["LoadFail"](error)); }));
}
function mappingPrices(markets) {
    return markets.map(function (ticker) {
        return (_a = {}, _a[ticker.symbol] = ticker.currentPrice, _a);
        var _a;
    })
        .reduce(function (acc, cur) { return (__assign({}, acc, cur)); }, {});
}
//# sourceMappingURL=markets.effect.js.map

/***/ }),

/***/ 998:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromPromise__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__libs_neon__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__libs_neon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__libs_neon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_contacts_action__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_wallet_action__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selectors_wallet_selector__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var WalletEffects = /** @class */ (function () {
    function WalletEffects(actions$, store$, walletProvider, router) {
        var _this = this;
        this.actions$ = actions$;
        this.store$ = store$;
        this.walletProvider = walletProvider;
        this.router = router;
        this.Load$ = this.actions$
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_10__actions_wallet_action__["WalletActionTypes"].LOAD), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (_) { return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromPromise__["fromPromise"])(_this.walletProvider.checkWalletFile()); }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["concatMap"])(function (exists) { return exists
            ? Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromPromise__["fromPromise"])(_this.walletProvider.readWalletFile()).map(function (fileStr) { return JSON.parse(fileStr); })
            : []; }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["exhaustMap"])(function (file) {
            return file
                ? Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["from"])([
                    new __WEBPACK_IMPORTED_MODULE_10__actions_wallet_action__["LoadSuccess"](file),
                    new __WEBPACK_IMPORTED_MODULE_8__actions__["d" /* ContactsActions */].Load(file.extra.contacts)
                ])
                : Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_10__actions_wallet_action__["LoadFail"]('Require login'));
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(function (e) { return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_10__actions_wallet_action__["LoadFail"](e)); }));
        this.LoadSuccess$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_10__actions_wallet_action__["WalletActionTypes"].LOAD_SUCCESS), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["tap"])(function () {
            _this.router.setRoot('Tabs');
        }));
        this.AddAccount$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_10__actions_wallet_action__["WalletActionTypes"].ADD_ACCOUNT), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["pluck"])('payload'), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["withLatestFrom"])(this.store$.select(__WEBPACK_IMPORTED_MODULE_12__selectors_wallet_selector__["getAccounts"]), function (accountFile, accounts) { return ({ accountFile: accountFile, accounts: accounts }); }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (_a) {
            var accountFile = _a.accountFile, accounts = _a.accounts;
            if (accountFile instanceof __WEBPACK_IMPORTED_MODULE_7__libs_neon__["wallet"].Account) {
                var _b = accountFile, _WIF = _b._WIF, address = _b.address, key = _b.encrypted, label = _b.label;
                var account_1 = new __WEBPACK_IMPORTED_MODULE_7__libs_neon__["wallet"].Account(_WIF || { address: address, key: key, label: label });
                if (!accounts.some(function (account) { return account.isDefault; }))
                    account_1.isDefault = true;
                return new __WEBPACK_IMPORTED_MODULE_10__actions_wallet_action__["AddAccountSuccess"](account_1);
            }
            var account = new __WEBPACK_IMPORTED_MODULE_7__libs_neon__["wallet"].Account(accountFile);
            if (!accounts.some(function (account) { return account.isDefault; }))
                account.isDefault = true;
            return new __WEBPACK_IMPORTED_MODULE_10__actions_wallet_action__["AddAccountSuccess"](account);
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(function (e) { return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_10__actions_wallet_action__["AddAccountFail"](e)); }));
        this.SaveWalletFile$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_10__actions_wallet_action__["WalletActionTypes"].LOAD_SUCCESS, __WEBPACK_IMPORTED_MODULE_10__actions_wallet_action__["WalletActionTypes"].ADD_ACCOUNT_SUCCESS, __WEBPACK_IMPORTED_MODULE_10__actions_wallet_action__["WalletActionTypes"].ADD_ACCOUNTS_SUCCESS, __WEBPACK_IMPORTED_MODULE_10__actions_wallet_action__["WalletActionTypes"].REMOVE_ACCOUNT, __WEBPACK_IMPORTED_MODULE_10__actions_wallet_action__["WalletActionTypes"].CHANGE_ACCOUNT_LABEL, __WEBPACK_IMPORTED_MODULE_10__actions_wallet_action__["WalletActionTypes"].SET_DEFAULT_ACCOUNT, __WEBPACK_IMPORTED_MODULE_10__actions_wallet_action__["WalletActionTypes"].SAVE_WALLET, __WEBPACK_IMPORTED_MODULE_9__actions_contacts_action__["ContactsActionTypes"].UPDATE, __WEBPACK_IMPORTED_MODULE_9__actions_contacts_action__["ContactsActionTypes"].REMOVE_SUCCESS), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["withLatestFrom"])(this.store$.select(__WEBPACK_IMPORTED_MODULE_12__selectors_wallet_selector__["getEntity"])), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["tap"])(function (_a) {
            var _ = _a[0], walletEntities = _a[1];
            try {
                console.log('Save Wallet file');
                _this.walletProvider.saveWalletFile(new __WEBPACK_IMPORTED_MODULE_7__libs_neon__["wallet"].Wallet(walletEntities).export());
            }
            catch (e) {
                console.log('Catch Error on SaveWalletFile$ .do', e);
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(function (err, caught) {
            console.log('Catch on SaveWalletFile');
            console.log(err, caught);
            return caught;
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], WalletEffects.prototype, "Load$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], WalletEffects.prototype, "LoadSuccess$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], WalletEffects.prototype, "AddAccount$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], WalletEffects.prototype, "SaveWalletFile$", void 0);
    WalletEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_11__providers__["i" /* WalletProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers__["h" /* RouterProvider */]])
    ], WalletEffects);
    return WalletEffects;
}());

//# sourceMappingURL=wallet.effect.js.map

/***/ }),

/***/ 999:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_neon__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_neon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__libs_neon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_auth_action__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, walletProvider, router, lp) {
        var _this = this;
        this.actions$ = actions$;
        this.walletProvider = walletProvider;
        this.router = router;
        this.lp = lp;
        this.Login$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_6__actions_auth_action__["AuthActionTypes"].LOGIN), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (action) { return action.payload; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["exhaustMap"])(function (walletFile) {
            var nepWallet = new __WEBPACK_IMPORTED_MODULE_5__libs_neon__["wallet"].Wallet(walletFile);
            var contacts = nepWallet.extra && nepWallet.extra.contacts;
            return contacts
                ? [new __WEBPACK_IMPORTED_MODULE_6__actions_auth_action__["LoginSuccess"](nepWallet), new __WEBPACK_IMPORTED_MODULE_7__actions__["d" /* ContactsActions */].Load(contacts)]
                : [new __WEBPACK_IMPORTED_MODULE_6__actions_auth_action__["LoginSuccess"](nepWallet)];
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_6__actions_auth_action__["LoginFail"](error)); }));
        this.LoginOldWallet$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_6__actions_auth_action__["AuthActionTypes"].LOGIN_OLD_WALLET), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (action) { return action.payload; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["exhaustMap"])(function (_a) {
            var oldWallet = _a.oldWallet, passphrase = _a.passphrase;
            var account = _this.walletProvider.upgradeToNEP5Account(oldWallet, passphrase);
            account.isDefault = true;
            return [
                // TODO: Which supposes to when AddAccountSuccess then LoginSuccess, But there been just succeeded, is weird, fix
                new __WEBPACK_IMPORTED_MODULE_7__actions__["i" /* WalletActions */].AddAccount(account),
                new __WEBPACK_IMPORTED_MODULE_6__actions_auth_action__["LoginOldWalletSuccess"]()
            ];
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_6__actions_auth_action__["LoginOldWalletFail"](error)); }));
        this.LoginWIF$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_6__actions_auth_action__["AuthActionTypes"].LOGIN_WIF), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (action) { return action.payload; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["exhaustMap"])(function (wifValue) {
            return [
                new __WEBPACK_IMPORTED_MODULE_7__actions__["i" /* WalletActions */].AddAccount(wifValue),
                new __WEBPACK_IMPORTED_MODULE_6__actions_auth_action__["LoginWifSuccess"]()
            ];
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_6__actions_auth_action__["LoginWifFail"](error)); }));
        this.CreateWallet = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_6__actions_auth_action__["AuthActionTypes"].CREATE_WALLET), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (action) { return action.payload; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["exhaustMap"])(function (_a) {
            var passphrase = _a.passphrase, wif = _a.wif, label = _a.label;
            _this.lp.emit(true);
            var accountTemp = new __WEBPACK_IMPORTED_MODULE_5__libs_neon__["wallet"].Account(wif || __WEBPACK_IMPORTED_MODULE_5__libs_neon__["wallet"].generatePrivateKey());
            var WIF = accountTemp.WIF, address = accountTemp.address;
            var encrypted = __WEBPACK_IMPORTED_MODULE_5__libs_neon__["wallet"].encrypt(WIF, passphrase);
            var account = new __WEBPACK_IMPORTED_MODULE_5__libs_neon__["wallet"].Account({
                address: address,
                label: label,
                isDefault: true,
                lock: false,
                key: encrypted,
                contract: null,
                extra: null
            });
            _this.lp.emit(false);
            return [
                new __WEBPACK_IMPORTED_MODULE_7__actions__["i" /* WalletActions */].AddAccount(account),
                new __WEBPACK_IMPORTED_MODULE_6__actions_auth_action__["CreateWalletSuccess"]()
            ];
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_6__actions_auth_action__["CreateWalletFail"](error)); }));
        this.CreateWalletSuccess$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_6__actions_auth_action__["AuthActionTypes"].CREATE_WALLET_SUCCESS), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function () { return _this.router.setRoot('BackupWallet'); }));
        this.LoginSuccess$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_6__actions_auth_action__["AuthActionTypes"].LOGIN_SUCCESS, __WEBPACK_IMPORTED_MODULE_6__actions_auth_action__["AuthActionTypes"].LOGIN_WIF_SUCCESS, __WEBPACK_IMPORTED_MODULE_6__actions_auth_action__["AuthActionTypes"].LOGIN_OLD_WALLET_SUCCESS), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function () { return _this.router.setRoot('Tabs'); }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "Login$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "LoginOldWallet$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "LoginWIF$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "CreateWallet", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "CreateWalletSuccess$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "LoginSuccess$", void 0);
    AuthEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["i" /* WalletProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["h" /* RouterProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["e" /* LoadingProvider */]])
    ], AuthEffects);
    return AuthEffects;
}());

//# sourceMappingURL=auth.effect.js.map

/***/ })

},[576]);
//# sourceMappingURL=main.js.map