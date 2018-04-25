webpackJsonp([20],{1017:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"HistoryDetailModule",function(){return l});var o=n(0),i=n(100),r=n(55),a=n(1642),s=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},l=function(){function t(){}return t=s([Object(o.I)({imports:[i.b.forChild(),r.f.forChild(a.a)],declarations:[a.a]})],t)}()},1642:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var o=n(0),i=n(15),r=n(42),a=n(141),s=n(101),l=n(64),c=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t,e){this.store=t,this.lp=e,this.translationPrefix="PROFILE.HISTORIES.DETAIL.",this.browserLink="http://state.otcgo.cn/traninfo.html?id="}return Object.defineProperty(t.prototype,"details",{get:function(){var t=Object(l.t)(["blocktime","vout"],this.historyDetail||{});return Object(l.o)(t,this.selectedHistory)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"blockHeight",{get:function(){return this.details.blocktime},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"operation",{get:function(){return this.details.operation},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"txid",{get:function(){return this.details.txid},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"amount",{get:function(){return this.details.value},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"symbol",{get:function(){return this.details.symbol},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"time",{get:function(){return this.details.time},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"address",{get:function(){return this.details.vout&&this.details.vout[0].address},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"status",{get:function(){return this.details.blocktime?"success":"pending"},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){var t=this;this.store.dispatch(new a.g.LoadDetail),this.store.select(s.h.getSelectedEntities).subscribe(function(e){return t.selectedHistory=e}),this.store.select(s.h.getDetail).subscribe(function(e){return t.historyDetail=e}),this.store.select(s.h.getLoading).subscribe(function(e){return t.lp.emit(e)})},t.prototype.handleOpenBrowserClick=function(){},t=c([Object(o.m)({selector:"page-history-detail",template:'<ion-header class="otcgo-header">\n\n\t<ion-navbar></ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\t<div class="history-detail__avatar">\n\n\t\t<img src="{{ \'assets/icon/\' + symbol +\'.png\' }}"\n\n\t\t     onerror="this.src=\'assets/icon/申一币.png\'" />\n\n\t</div>\n\n\t<div class="history-detail__symbol">\n\n\t\t{{ symbol }}\n\n\t</div>\n\n\t<div class="history-detail__date-op">\n\n\t\t{{ time }} {{ translationPrefix + \'status_\' + status | translate }}\n\n\t</div>\n\n\t<ion-grid>\n\n\t\t<ion-row>\n\n\t\t\t<ion-col>{{ translationPrefix + \'operation\' | translate }}</ion-col>\n\n\t\t\t<ion-col text-right class="highlight">{{ translationPrefix + \'operation_\' + operation | translate }}</ion-col>\n\n\t\t</ion-row>\n\n\n\n\t\t<ion-row>\n\n\t\t\t<ion-col>{{ translationPrefix + \'amount\' | translate }}</ion-col>\n\n\t\t\t<ion-col text-right><span class="highlight">{{ amount }}</span>{{ \' \' + symbol }}</ion-col>\n\n\t\t</ion-row>\n\n\n\n\t\t<ion-row>\n\n\t\t\t<ion-col>{{ translationPrefix + \'address\' | translate }}</ion-col>\n\n\t\t\t<ion-col text-right class="extract-text">{{ address }}</ion-col>\n\n\t\t</ion-row>\n\n\t\t<div class="bar"></div>\n\n\t\t<ion-row>\n\n\t\t\t<ion-col col-2>{{ translationPrefix + \'txid\' | translate }}</ion-col>\n\n\t\t\t<ion-col text-right class="extract-text" col-10>{{ txid }}</ion-col>\n\n\t\t</ion-row>\n\n\n\n\t\t<ion-row>\n\n\t\t\t<ion-col>{{ translationPrefix + \'block_height\' | translate }}</ion-col>\n\n\t\t\t<ion-col text-right class="highlight">{{ blockHeight }}</ion-col>\n\n\t\t</ion-row>\n\n\t</ion-grid>\n\n\n\n\t<a\n\n\t\tion-button round full class="otcgo-button--colour history-detail__open-in-browser"\n\n\t\ttarget="_blank"\n\n\t\t[href]="browserLink + txid">{{ translationPrefix + \'open_in_browser\' | translate }}</a>\n\n</ion-content>\n\n'}),u("design:paramtypes",[i.h,r.e])],t)}()}});