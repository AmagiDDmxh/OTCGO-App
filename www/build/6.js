webpackJsonp([6],{1023:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"ManageWalletPageModule",function(){return l});var o=n(0),i=n(55),a=n(100),r=n(1096),c=n(1148),s=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},l=function(){function t(){}return t=s([Object(o.I)({imports:[a.b.forChild(),i.f.forChild(c.a)],exports:[c.a],declarations:[c.a,r.b,r.a]})],t)}()},1076:function(t,e){},1096:function(t,e,n){"use strict";var o=n(1149);n.d(e,"b",function(){return o.a});var i=n(1150);n.d(e,"a",function(){return i.a})},1148:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var o=n(0),i=n(567),a=n(15),r=n(55),c=n(1096),s=n(42),l=n(141),u=n(101),p=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t,e,n,o,i,a,r,c){this.alertCtrl=t,this.walletProvider=e,this.clipBoard=n,this.loadingCtrl=o,this.modalCtrl=i,this.elementRef=a,this.np=r,this.store=c,this.translationPrefix="PROFILE.MANAGE_WALLET.",this.accounts=this.store.select(u.j.getAccounts),this.currency=this.store.select(u.g.getCurrency),this.amounts=this.store.select(u.f.getAmounts),this.gasAmounts=this.store.select(u.f.getGASAmounts)}return Object.defineProperty(t.prototype,"marginTop",{get:function(){return parseInt(this.elementRef.nativeElement.querySelector(".scroll-content").style.marginTop)/2+"px"},enumerable:!0,configurable:!0}),t.prototype.handleSetDefaultAccount=function(t){this.store.dispatch(new l.i.SetDefaultAccount(t))},t.prototype.handleSaveAccount=function(t){this.store.dispatch(new l.i.ChangeAccountLabel(t)),this.np.notifyTranslation(this.translationPrefix+"save_success")},t.prototype.handleRemoveAccount=function(t){var e=this.cards.slides.container.querySelector(".card");this.openModal({account:t,offsetHeight:e.offsetHeight,offsetWidth:e.offsetWidth,marginTop:this.marginTop})},t.prototype.openModal=function(t){this.modalCtrl.create("RemoveAccountModal",t,{cssClass:"sea-card"}).present()},p([Object(o._8)("cards"),d("design:type",c.b)],t.prototype,"cards",void 0),t=p([Object(o.m)({selector:"page-manage-wallet",template:'<ion-header class="otcgo-header manage-wallet">\n\n    <ion-navbar>\n\n        <ion-title>{{ \'PROFILE.MANAGE_WALLET.title\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only clear navPush="AddWallet">\n\n                <ion-icon name="add"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="mw">\n\n    <manage-wallet-cards\n\n        #cards\n\n        [accounts]="accounts | async"\n\n        [currency]="currency | async"\n\n        [amounts]="amounts | async"\n\n        [gasAmounts]="gasAmounts | async"\n\n        (onSaveAccount)="handleSaveAccount($event)"\n\n        (onRemoveAccount)="handleRemoveAccount($event)"\n\n        (onSetDefaultAccount)="handleSetDefaultAccount($event)"\n\n    ></manage-wallet-cards>\n\n</ion-content>'}),d("design:paramtypes",[r.a,s.i,i.a,r.g,r.h,o.t,s.f,a.h])],t)}()},1149:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var o=n(0),i=n(55),a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){this.firstIn=!0,this.gasAmounts=[],this.amounts=[],this.onSaveAccount=new o.v,this.onSetDefaultAccount=new o.v,this.onRemoveAccount=new o.v}return Object.defineProperty(t.prototype,"showRemoveIcon",{get:function(){return this.accounts.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"accounts",{get:function(){return this._accounts},set:function(t){!this.firstIn&&this.isDeletionOrAddition(t)&&this.slides.slideTo(t&&t.length-1||0,250),this._accounts=t,this.firstIn=!1},enumerable:!0,configurable:!0}),t.prototype.isDeletionOrAddition=function(t){return t.length!==this._accounts.length},a([Object(o.D)(),r("design:type",String)],t.prototype,"currency",void 0),a([Object(o.D)(),r("design:type",Array)],t.prototype,"gasAmounts",void 0),a([Object(o.D)(),r("design:type",Array)],t.prototype,"amounts",void 0),a([Object(o.O)(),r("design:type",Object)],t.prototype,"onSaveAccount",void 0),a([Object(o.O)(),r("design:type",Object)],t.prototype,"onSetDefaultAccount",void 0),a([Object(o.O)(),r("design:type",Object)],t.prototype,"onRemoveAccount",void 0),a([Object(o._8)(i.l),r("design:type",i.l)],t.prototype,"slides",void 0),a([Object(o.D)(),r("design:type",Object),r("design:paramtypes",[Object])],t.prototype,"accounts",null),t=a([Object(o.m)({selector:"manage-wallet-cards",template:'<ion-slides [pager]="true" class="sea-card">\n\n\t<manage-wallet-card\n\n\t\t*ngFor="let account of accounts; index as i"\n\n\t\t[showClose]="showRemoveIcon"\n\n\t    [account]="account"\n\n\t\t[oCurrency]="currency"\n\n\t\t[gas]="gasAmounts[i] || 1"\n\n\t\t[amount]="amounts[i] || 0"\n\n\t\t(onSave)="onSaveAccount.emit($event)"\n\n\t\t(onRemove)="onRemoveAccount.emit($event)"\n\n\t\t(onSetDefault)="onSetDefaultAccount.emit($event)">\n\n\t</manage-wallet-card>\n\n</ion-slides>\n\n'})],t)}()},1150:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var o=n(0),i=n(567),a=n(55),r=n(42),c=n(43),s=(n.n(c),n(1076)),l=(n.n(s),this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r}),u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(i,a){function r(t){try{s(o.next(t))}catch(t){a(t)}}function c(t){try{s(o.throw(t))}catch(t){a(t)}}function s(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(r,c)}s((o=o.apply(t,e||[])).next())})},d=this&&this.__generator||function(t,e){function n(n){return function(r){return function(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(a=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(a=c.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){c.label=n[1];break}if(6===n[0]&&c.label<a[1]){c.label=a[1],a=n;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(n);break}a[2]&&c.ops.pop(),c.trys.pop();continue}n=e.call(t,c)}catch(t){n=[6,t],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,r])}}var o,i,a,r,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r},f=function(){function t(t,e,n,i){this.alertCtrl=t,this.clipBoard=e,this.loadingCtrl=n,this.np=i,this.tempLabel="",this.baseAlertOptions={cssClass:"mw__exports-actions--box",message:"注意，导出 私钥 或 WIF 并使用是一件非常危险的事情，建议使用加密私钥（EncryptedKey）代替",inputs:[{name:"passphrase",placeholder:"钱包密码",type:"password"}],buttons:[{text:"取消"}]},this.translationPrefix="PROFILE.MANAGE_WALLET.",this.onSave=new o.v,this.onRemove=new o.v,this.onSetDefault=new o.v}return Object.defineProperty(t.prototype,"label",{get:function(){return this.account.label},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isDefault",{get:function(){return this.account.isDefault},enumerable:!0,configurable:!0}),t.prototype.handleWIFClick=function(t){this.showWIFKeyBox(t)},t.prototype.handleEncryptedClick=function(t){try{this.showKeyBox({title:"EncryptedKey",message:t.encrypted})}catch(t){this.np.emit(t)}},t.prototype.handleSaveClick=function(t){if(this.tempLabel){var e=new c.wallet.Account(t);e.label=this.tempLabel,this.onSave.emit(e),this.tempLabel=""}},t.prototype.showWIFKeyBox=function(t){var e=this;try{if(t.WIF)return this.showKeyBox({title:"WIF",message:t.WIF})}catch(i){var n=this.loadingCtrl.create(),o=Object.assign({},this.baseAlertOptions,{title:"导出WIF",buttons:this.baseAlertOptions.buttons.concat([{text:"确认",handler:function(o){var i=o.passphrase;return i&&i.length>=4&&e.parsePassphrase(t.encrypted,i,n,"wif")}}])});this.alertCtrl.create(o).present()}},t.prototype.showKeyBox=function(t){var e=this,n=t.message;this.alertCtrl.create({title:t.title,message:n,cssClass:"mw__exports-actions--key",buttons:[{text:"取消"},{text:"复制",handler:function(){return e.clipBoard.copy(n)}}]}).present()},t.prototype.parsePassphrase=function(t,e,n,o){return p(this,void 0,void 0,function(){var i,a;return d(this,function(r){switch(r.label){case 0:return[4,n.present()];case 1:r.sent(),r.label=2;case 2:return r.trys.push([2,4,,6]),i=c.wallet.decrypt(t,e),a=new c.wallet.Account(i),[4,n.dismiss()];case 3:return r.sent(),"privateKey"===o?[2,this.showKeyBox({title:"私钥",message:a.privateKey})]:[2,this.showKeyBox({title:"WIF",message:a.WIF})];case 4:return r.sent(),[4,this.handleError(n)];case 5:return r.sent(),[3,6];case 6:return[2]}})})},t.prototype.handleError=function(t){return p(this,void 0,void 0,function(){return d(this,function(e){switch(e.label){case 0:return[4,t.dismiss()];case 1:return e.sent(),[4,this.alertCtrl.create({title:"提示",message:"密码错误",buttons:["OK"]}).present()];case 2:return e.sent(),[2]}})})},t.prototype.handleOpenLocationClick=function(){},t.prototype.handlePrivateKeyClick=function(t){this.showPrivateKeyBox(t)},t.prototype.showPrivateKeyBox=function(t){var e=this,n=this.loadingCtrl.create(),o=Object.assign({},this.baseAlertOptions,{title:"导出私钥",buttons:this.baseAlertOptions.buttons.concat([{text:"确认",handler:function(o){var i=o.passphrase;if(!i||i.length<4)return!1;e.parsePassphrase(t.encrypted,i,n,"privateKey")}}])});this.alertCtrl.create(o).present()},l([Object(o.D)(),u("design:type",s.Account)],t.prototype,"account",void 0),l([Object(o.D)(),u("design:type",String)],t.prototype,"oCurrency",void 0),l([Object(o.D)(),u("design:type",Number)],t.prototype,"amount",void 0),l([Object(o.D)(),u("design:type",Number)],t.prototype,"gas",void 0),l([Object(o.D)(),u("design:type",Boolean)],t.prototype,"showClose",void 0),l([Object(o.O)(),u("design:type",Object)],t.prototype,"onSave",void 0),l([Object(o.O)(),u("design:type",Object)],t.prototype,"onRemove",void 0),l([Object(o.O)(),u("design:type",Object)],t.prototype,"onSetDefault",void 0),t=l([Object(o.m)({selector:"manage-wallet-card",template:'<ion-slide>\n\n\t<div class="card">\n\n\t\t<div class="mw__label">\n\n\t\t\t{{ label }}\n\n\t\t</div>\n\n\n\n\t\t<div class="close" (click)="onRemove.emit(account)" *ngIf="showClose">\n\n\t\t\t<div class="icon"><ion-icon name="close"></ion-icon></div>\n\n\t\t</div>\n\n\n\n\t\t<div class="mw__header" ion-row>\n\n\t\t\t<ion-col class="mw__header__left">\n\n\t\t\t\t<div class="mw__title">{{ gas | number:\'1.1-2\' }} <span>GAS</span></div>\n\n\t\t\t</ion-col>\n\n\t\t</div>\n\n\n\n\t\t<div class="mw__header-price" ion-row>\n\n\t\t\t<ion-col class="mw__subtitle">\n\n\t\t\t\t≈ {{ amount | currency:oCurrency.toUpperCase():\'symbol-narrow\':\'1.1-4\' }}\n\n\t\t\t</ion-col>\n\n\t\t</div>\n\n\n\n\t\t<div class="mw__changes-feature">\n\n\t\t\t<ion-input class="mw__changes__input"\n\n\t\t\t           placeholder="{{ \'PROFILE.MANAGE_WALLET.change_name\' | translate }}"\n\n\t\t\t           [(ngModel)]="tempLabel"></ion-input>\n\n\t\t</div>\n\n\n\n\t\t<div class="mw__exports-feature">\n\n\t\t\t<h5 text-left>{{ \'PROFILE.MANAGE_WALLET.export\' | translate }}</h5>\n\n\t\t\t\x3c!--<button ion-button class="otcgo-button&#45;&#45;edge-gray mw__exports" clear block icon-right (click)="handlePrivateKeyClick(account)">\n\n\t\t\t\t导出 私钥\n\n\t\t\t\t<ion-icon md="ios-arrow-forward-outline" ios="none" item-end></ion-icon>\n\n\t\t\t</button>--\x3e\n\n\n\n\t\t\t<button ion-button\n\n\t\t\t        class="otcgo-button--edge-gray mw__exports"\n\n\t\t\t        clear\n\n\t\t\t        block\n\n\t\t\t        icon-right\n\n\t\t\t        (click)="handleWIFClick(account)">\n\n\t\t\t\t{{ \'PROFILE.MANAGE_WALLET.export_wif\' | translate }}\n\n\t\t\t\t<ion-icon md="ios-arrow-forward-outline" ios="none" item-end></ion-icon>\n\n\t\t\t</button>\n\n\n\n\t\t\t<button ion-button\n\n\t\t\t        class="otcgo-button--edge-gray mw__exports"\n\n\t\t\t        clear\n\n\t\t\t        block\n\n\t\t\t        icon-right\n\n\t\t\t        (click)="handleEncryptedClick(account)">\n\n\t\t\t\t{{ \'PROFILE.MANAGE_WALLET.export_key\' | translate }}\n\n\t\t\t\t<ion-icon md="ios-arrow-forward-outline" ios="none" item-end></ion-icon>\n\n\t\t\t</button>\n\n\n\n\t\t\t\x3c!--<button ion-button\n\n\t\t\t        class="otcgo-button&#45;&#45;edge-gray mw__exports"\n\n\t\t\t        clear\n\n\t\t\t        block\n\n\t\t\t        icon-right\n\n\t\t\t        (click)="handleOpenLocationClick()">\n\n\t\t\t\t打开钱包文件所在位置\n\n\t\t\t</button>--\x3e\n\n\t\t</div>\n\n\n\n\t\t<div class="mw__exports-action">\n\n\t\t\t<button ion-button class="otcgo-button--colour" block round\n\n\t\t\t        (click)="handleSaveClick(account)">{{ \'PROFILE.MANAGE_WALLET.save\' | translate }}</button>\n\n\t\t\t<a [class.is-default]="isDefault"\n\n\t\t\t   (click)="!isDefault && onSetDefault.emit(account)">\n\n\t\t\t\t{{ translationPrefix + (isDefault ? \'default\' : \'default_action\') | translate }}</a>\n\n\t\t</div>\n\n\t</div>\n\n</ion-slide>\n\n'}),u("design:paramtypes",[a.a,i.a,a.g,r.f])],t)}()}});