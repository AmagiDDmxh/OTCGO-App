webpackJsonp([18],{

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportPrivateKeyPageModule", function() { return ImportPrivateKeyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__import_private_key__ = __webpack_require__(1653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImportPrivateKeyPageModule = /** @class */ (function () {
    function ImportPrivateKeyPageModule() {
    }
    ImportPrivateKeyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__import_private_key__["a" /* ImportPrivateKeyPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__import_private_key__["a" /* ImportPrivateKeyPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */]]
        })
    ], ImportPrivateKeyPageModule);
    return ImportPrivateKeyPageModule;
}());

//# sourceMappingURL=import-private-key.module.js.map

/***/ }),

/***/ 1653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportPrivateKeyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ImportPrivateKeyPage = /** @class */ (function () {
    function ImportPrivateKeyPage() {
    }
    ImportPrivateKeyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-import-private-key',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\profile\manage-wallet\add-wallet\import-private-key\import-private-key.html"*/'<ion-header class="otcgo-header otcgo-header--bl">\n\n    <ion-navbar>\n\n        <ion-title>私钥导入</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="login">\n\n    <!--<ion-list class="login-list">\n\n        <ion-item class="login-input rounded" [class.item-input-has-focus]="!!WIFKey">\n\n            <ion-input type="text" placeholder="明文私钥" [(ngModel)]="WIFKey" required></ion-input>\n\n        </ion-item>\n\n\n\n        <button class="login-import" (click)="scanCode()">\n\n			<img src="../../assets/imgs/icon-login_file.svg" alt="" class="icon">\n\n		</button>\n\n\n\n        <ion-item class="pws-input rounded">\n\n            <ion-input type="password" placeholder="密码" [(ngModel)]="passphrase" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="pws-input rounded">\n\n            <ion-input type="password" placeholder="重复密码" [(ngModel)]="passphrase" required></ion-input>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <ion-list class="user-agreement">\n\n        <ion-item no-lines>\n\n            <ion-label class="chkbox-tip">\n\n                <span>我已仔细阅读并同意</span>\n\n            </ion-label>\n\n            <ion-checkbox class="chkbox" checked="false"></ion-checkbox>\n\n        </ion-item>\n\n        <a>蓝鲸淘用户协议与服务条款</a>\n\n\n\n    </ion-list>\n\n\n\n    <div class="login-button">\n\n        <button ion-button round block clear [disabled]="disabledBtn" (click)="doImport()">开始导入</button>\n\n    </div>\n\n\n\n\n\n    <div class="tip">\n\n        <a (click)="navCtrl.push(createWalletPage)">什么是私钥?</a>\n\n    </div>-->\n\n</ion-content>'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\profile\manage-wallet\add-wallet\import-private-key\import-private-key.html"*/,
        })
    ], ImportPrivateKeyPage);
    return ImportPrivateKeyPage;
}());

//# sourceMappingURL=import-private-key.js.map

/***/ })

});
//# sourceMappingURL=18.js.map