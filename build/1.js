webpackJsonp([1,13],{

/***/ 1004:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendModalModule", function() { return SendModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__send_modal__ = __webpack_require__(1082);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__send_modal__["a" /* SendModalComponent */]
];
var SendModalModule = /** @class */ (function () {
    function SendModalModule() {
    }
    SendModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: COMPONENTS,
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__send_modal__["a" /* SendModalComponent */]),
            ],
            exports: COMPONENTS
        })
    ], SendModalModule);
    return SendModalModule;
}());

//# sourceMappingURL=send-modal.module.js.map

/***/ }),

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PossessionDetailPageModule", function() { return PossessionDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__possession_detail__ = __webpack_require__(1615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__(1616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_possessions_possession_detail__ = __webpack_require__(1635);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PossessionDetailPageModule = /** @class */ (function () {
    function PossessionDetailPageModule() {
    }
    PossessionDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__possession_detail__["a" /* PossessionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_5__components_possessions_possession_detail__["a" /* PossessionDetailBgcard */],
                __WEBPACK_IMPORTED_MODULE_5__components_possessions_possession_detail__["b" /* PossessionDetailHistory */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components__["a" /* TimelineModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__possession_detail__["a" /* PossessionDetailPage */])
            ]
        })
    ], PossessionDetailPageModule);
    return PossessionDetailPageModule;
}());

//# sourceMappingURL=possession-detail.module.js.map

/***/ }),

/***/ 1045:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdkAccordion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coercion__ = __webpack_require__(1151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var nextId = 0;
var CdkAccordion = /** @class */ (function () {
    function CdkAccordion() {
        this.id = "cdk-accordion-" + nextId++;
        this._multi = false;
    }
    Object.defineProperty(CdkAccordion.prototype, "multi", {
        get: function () { return this._multi; },
        set: function (multi) { this._multi = Object(__WEBPACK_IMPORTED_MODULE_1__coercion__["a" /* coerceBooleanProperty */])(multi); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CdkAccordion.prototype, "multi", null);
    CdkAccordion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'cdk-accordion, [cdkAccordion]',
            exportAs: 'cdkAccordion'
        })
    ], CdkAccordion);
    return CdkAccordion;
}());

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ 1046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return coerceBooleanProperty; });
var coerceBooleanProperty = function (value) {
    return (value != null && "" + value !== 'false');
};
//# sourceMappingURL=boolean-property.js.map

/***/ }),

/***/ 1055:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UniqueSelectionDispatcher; });
/* unused harmony export UNIQUE_SELECTION_DISPATCHER_PROVIDER_FACTORY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UNIQUE_SELECTION_DISPATCHER_PROVIDER; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UniqueSelectionDispatcher = /** @class */ (function () {
    function UniqueSelectionDispatcher() {
        this._listeners = [];
    }
    UniqueSelectionDispatcher.prototype.notify = function (id, name) {
        for (var _i = 0, _a = this._listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener(id, name);
        }
    };
    UniqueSelectionDispatcher.prototype.listen = function (listener) {
        var _this = this;
        this._listeners.push(listener);
        return function () {
            _this._listeners = _this._listeners.filter(function (registered) { return listener !== registered; });
        };
    };
    UniqueSelectionDispatcher = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], UniqueSelectionDispatcher);
    return UniqueSelectionDispatcher;
}());

var UNIQUE_SELECTION_DISPATCHER_PROVIDER_FACTORY = function (parentDispatcher) { return parentDispatcher || new UniqueSelectionDispatcher(); };
var UNIQUE_SELECTION_DISPATCHER_PROVIDER = {
    provide: UniqueSelectionDispatcher,
    deps: [[new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* SkipSelf */](), UniqueSelectionDispatcher]],
    useFactory: UNIQUE_SELECTION_DISPATCHER_PROVIDER_FACTORY
};
//# sourceMappingURL=unique-selection-dispatcher.js.map

/***/ }),

/***/ 1056:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdkAccordionItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion__ = __webpack_require__(1045);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collections_unique_selection_dispatcher__ = __webpack_require__(1055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coercion_boolean_property__ = __webpack_require__(1046);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var nextId = 0;
var CdkAccordionItem = /** @class */ (function () {
    function CdkAccordionItem(accordion, _changeDetectorRef, _expansionDispatcher) {
        var _this = this;
        this.accordion = accordion;
        this._changeDetectorRef = _changeDetectorRef;
        this._expansionDispatcher = _expansionDispatcher;
        this.closed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.opened = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.destroyed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.expandedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.id = "cdk-accordion-child-" + nextId++;
        this._expanded = false;
        this._disabled = false;
        this._removeUniqueSelectionListener = function () { };
        this._removeUniqueSelectionListener =
            _expansionDispatcher.listen(function (id, accordionId) {
                if (_this.accordion && !_this.accordion.multi &&
                    _this.accordion.id === accordionId && _this.id !== id) {
                    _this.expanded = false;
                }
            });
    }
    Object.defineProperty(CdkAccordionItem.prototype, "expanded", {
        get: function () { return this._expanded; },
        set: function (expanded) {
            expanded = Object(__WEBPACK_IMPORTED_MODULE_3__coercion_boolean_property__["a" /* coerceBooleanProperty */])(expanded);
            if (this._expanded !== expanded) {
                this._expanded = expanded;
                this.expandedChange.emit();
                if (expanded) {
                    this.opened.emit();
                    var accordionId = this.accordion ? this.accordion.id : this.id;
                    this._expansionDispatcher.notify(this.id, accordionId);
                }
                else {
                    this.closed.emit();
                }
            }
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkAccordionItem.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (disabled) { this._disabled = Object(__WEBPACK_IMPORTED_MODULE_3__coercion_boolean_property__["a" /* coerceBooleanProperty */])(disabled); },
        enumerable: true,
        configurable: true
    });
    CdkAccordionItem.prototype.ngOnDestroy = function () {
        this.destroyed.emit();
        this._removeUniqueSelectionListener();
    };
    CdkAccordionItem.prototype.toggle = function () {
        if (!this.disabled) {
            this.expanded = !this.expanded;
        }
    };
    CdkAccordionItem.prototype.close = function () {
        if (!this.disabled) {
            this.expanded = false;
        }
    };
    CdkAccordionItem.prototype.open = function () {
        if (!this.disabled) {
            this.expanded = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CdkAccordionItem.prototype, "closed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CdkAccordionItem.prototype, "opened", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CdkAccordionItem.prototype, "destroyed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CdkAccordionItem.prototype, "expandedChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CdkAccordionItem.prototype, "expanded", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CdkAccordionItem.prototype, "disabled", null);
    CdkAccordionItem = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'cdk-accordion-item',
            exportAs: 'CdkAccordionItem'
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__accordion__["a" /* CdkAccordion */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_2__collections_unique_selection_dispatcher__["b" /* UniqueSelectionDispatcher */]])
    ], CdkAccordionItem);
    return CdkAccordionItem;
}());

//# sourceMappingURL=accordion-item.js.map

/***/ }),

/***/ 1063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Accordion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_cdk_accordion_accordion__ = __webpack_require__(1045);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_cdk_coercion_boolean_property__ = __webpack_require__(1046);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hideToggle = false;
        /**
         * The display mode used for all expansion panels in the accordion. Currently two display
         * modes exist:
         *   default - a gutter-like spacing is placed around any expanded panel, placing the expanded
         *     panel at a different elevation from the reset of the accordion.
         *  flat - no spacing is placed around expanded panels, showing all panels at the same
         *     elevation.
         */
        _this.displayMode = 'default';
        return _this;
    }
    Object.defineProperty(Accordion.prototype, "hideToggle", {
        /** Whether the expansion indicator should be hidden. */
        get: function () { return this._hideToggle; },
        set: function (hideToggle) { this._hideToggle = Object(__WEBPACK_IMPORTED_MODULE_2__core_cdk_coercion_boolean_property__["a" /* coerceBooleanProperty */])(hideToggle); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Accordion.prototype, "hideToggle", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], Accordion.prototype, "displayMode", void 0);
    Accordion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'accordion',
            exportAs: 'matAccordion',
            host: {
                'class': 'accordion'
            }
        })
    ], Accordion);
    return Accordion;
}(__WEBPACK_IMPORTED_MODULE_1__core_cdk_accordion_accordion__["a" /* CdkAccordion */]));

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ 1064:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpansionPanelContent; });
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

var ExpansionPanelContent = /** @class */ (function () {
    function ExpansionPanelContent(template) {
        this.template = template;
    }
    ExpansionPanelContent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'ng-template[ExpansionPanelContent]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* TemplateRef */]])
    ], ExpansionPanelContent);
    return ExpansionPanelContent;
}());

//# sourceMappingURL=expansion-panel-content.js.map

/***/ }),

/***/ 1065:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpansionPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExpansionPanelActionRow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion__ = __webpack_require__(1063);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_cdk_coercion_boolean_property__ = __webpack_require__(1046);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_cdk_collections_unique_selection_dispatcher__ = __webpack_require__(1055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_cdk_accordion_accordion_item__ = __webpack_require__(1056);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_cdk_portal__ = __webpack_require__(1079);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__expansion_panel_content__ = __webpack_require__(1064);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__expansion_animations__ = __webpack_require__(1066);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var uniqueId = 0;
var ExpansionPanel = /** @class */ (function (_super) {
    __extends(ExpansionPanel, _super);
    function ExpansionPanel(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef) {
        var _this = _super.call(this, accordion, _changeDetectorRef, _uniqueSelectionDispatcher) || this;
        _this.accordion = accordion;
        _this._viewContainerRef = _viewContainerRef;
        _this._hideToggle = false;
        _this._inputChanges = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        _this._headerId = "expansion-panel-header-" + uniqueId++;
        return _this;
    }
    Object.defineProperty(ExpansionPanel.prototype, "hideToggle", {
        get: function () { return this._hideToggle; },
        set: function (hideToggle) { this._hideToggle = Object(__WEBPACK_IMPORTED_MODULE_4__core_cdk_coercion_boolean_property__["a" /* coerceBooleanProperty */])(hideToggle); },
        enumerable: true,
        configurable: true
    });
    ExpansionPanel.prototype._getHideToggle = function () {
        if (this.accordion)
            return this.accordion.hideToggle;
        return this.hideToggle;
    };
    ExpansionPanel.prototype._hasSpacing = function () {
        if (this.accordion)
            return (this.expanded ? this.accordion.displayMode : this._getExpandedState()) === 'default';
        return false;
    };
    ExpansionPanel.prototype._getExpandedState = function () {
        return this.expanded ? 'expanded' : 'collapsed';
    };
    ExpansionPanel.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this._lazyContent)
            this.opened.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["startWith"])(null), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["filter"])(function () { return _this.expanded && !_this._portal; }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["take"])(1)).subscribe(function () { return _this._portal = new __WEBPACK_IMPORTED_MODULE_7__core_cdk_portal__["b" /* TemplatePortal */](_this._lazyContent.template, _this._viewContainerRef); });
    };
    ExpansionPanel.prototype.ngOnChanges = function (changes) {
        this._inputChanges.next(changes);
    };
    ExpansionPanel.prototype._bodyAnimation = function (event) {
        var classList = event.element.classList;
        var cssClass = 'expanded';
        var phaseName = event.phaseName, toState = event.toState;
        if (phaseName === 'done' && toState === 'expanded')
            classList.add(cssClass);
        else if (phaseName === 'start' && toState === 'collapsed')
            classList.remove(cssClass);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ExpansionPanel.prototype, "hideToggle", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_8__expansion_panel_content__["a" /* ExpansionPanelContent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__expansion_panel_content__["a" /* ExpansionPanelContent */])
    ], ExpansionPanel.prototype, "_lazyContent", void 0);
    ExpansionPanel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'expansion-panel',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\components\expansion-panel\expansion-panel.html"*/'<ng-content select="expansion-panel-header"></ng-content>\n\n<div class="expansion-panel-content"\n\n     role="region"\n\n     [@bodyExpansion]="_getExpandedState()"\n\n     (@bodyExpansion.done)="_bodyAnimation($event)"\n\n     (@bodyExpansion.start)="_bodyAnimation($event)"\n\n     [class.expanded]="expanded"\n\n     [id]="id"\n\n     #body>\n\n	<div class="expansion-panel-body">\n\n		<ng-content></ng-content>\n\n		<ng-template [cdkPortalOutlet]="_portal"></ng-template>\n\n	</div>\n\n	<ng-content select="action-row"></ng-content>\n\n</div>'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\components\expansion-panel\expansion-panel.html"*/,
            preserveWhitespaces: false,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
            inputs: ['disabled', 'expanded'],
            outputs: ['opened', 'closed', 'expandedChange'],
            animations: [__WEBPACK_IMPORTED_MODULE_9__expansion_animations__["a" /* ExpansionAnimations */].bodyExpansion],
            host: {
                'class': 'expansion-panel',
                '[class.expanded]': 'expanded',
                '[class.expansion-panel-spacing]': '_hasSpacing()'
            }
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Host */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__accordion__["a" /* Accordion */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_5__core_cdk_collections_unique_selection_dispatcher__["b" /* UniqueSelectionDispatcher */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]])
    ], ExpansionPanel);
    return ExpansionPanel;
}(__WEBPACK_IMPORTED_MODULE_6__core_cdk_accordion_accordion_item__["a" /* CdkAccordionItem */]));

var ExpansionPanelActionRow = /** @class */ (function () {
    function ExpansionPanelActionRow() {
    }
    ExpansionPanelActionRow = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'action-row',
            host: {
                'class': 'action-row'
            }
        })
    ], ExpansionPanelActionRow);
    return ExpansionPanelActionRow;
}());

//# sourceMappingURL=expansion-panel.js.map

/***/ }),

/***/ 1066:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EXPANSION_PANEL_ANIMATION_TIMING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpansionAnimations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(237);

var EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
var ExpansionAnimations = {
    indicatorRotate: Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('indicatorRotate', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'rotate(0deg)' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'rotate(180deg)' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('expanded <=> collapsed', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(EXPANSION_PANEL_ANIMATION_TIMING))
    ]),
    expansionHeaderHeight: Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('expansionHeight', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
            height: '{{collapsedHeight}}'
        }), {
            params: { collapsedHeight: '48px' }
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
            height: '{{expandedHeight}}'
        }), {
            params: { expandedHeight: '64px' }
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('expanded <=> collapsed', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(EXPANSION_PANEL_ANIMATION_TIMING))
    ]),
    bodyExpansion: Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('bodyExpansion', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ height: '0', visibility: 'hidden' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ height: '*', visibility: 'visible' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('expanded <=> collapsed', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(EXPANSION_PANEL_ANIMATION_TIMING))
    ])
};
//# sourceMappingURL=expansion-animations.js.map

/***/ }),

/***/ 1078:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unique_selection_dispatcher__ = __webpack_require__(1055);
/* unused harmony reexport UniqueSelectionDispatcher */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__unique_selection_dispatcher__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1079:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__portal__ = __webpack_require__(1080);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__portal__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portal_directives__ = __webpack_require__(1154);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__portal_directives__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1080:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Portal */
/* unused harmony export ComponentPortal */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TemplatePortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePortalOutlet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__portal_errors__ = __webpack_require__(1153);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 */
var Portal = /** @class */ (function () {
    function Portal() {
    }
    /** Attach this portal to a host. */
    Portal.prototype.attach = function (host) {
        if (host == null) {
            Object(__WEBPACK_IMPORTED_MODULE_0__portal_errors__["c" /* throwNullPortalOutletError */])();
        }
        if (host.hasAttached()) {
            Object(__WEBPACK_IMPORTED_MODULE_0__portal_errors__["d" /* throwPortalAlreadyAttachedError */])();
        }
        this._attachedHost = host;
        return host.attach(this);
    };
    /** Detach this portal from its host */
    Portal.prototype.detach = function () {
        var host = this._attachedHost;
        if (host == null) {
            Object(__WEBPACK_IMPORTED_MODULE_0__portal_errors__["a" /* throwNoPortalAttachedError */])();
        }
        else {
            this._attachedHost = null;
            host.detach();
        }
    };
    Object.defineProperty(Portal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     */
    Portal.prototype.setAttachedHost = function (host) {
        this._attachedHost = host;
    };
    return Portal;
}());

/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
var ComponentPortal = /** @class */ (function (_super) {
    __extends(ComponentPortal, _super);
    function ComponentPortal(component, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        return _this;
    }
    return ComponentPortal;
}(Portal));

/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 */
var TemplatePortal = /** @class */ (function (_super) {
    __extends(TemplatePortal, _super);
    function TemplatePortal(template, viewContainerRef, context) {
        var _this = _super.call(this) || this;
        _this.templateRef = template;
        _this.viewContainerRef = viewContainerRef;
        _this.context = context;
        return _this;
    }
    Object.defineProperty(TemplatePortal.prototype, "origin", {
        get: function () {
            return this.templateRef.elementRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attach the the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     */
    TemplatePortal.prototype.attach = function (host, context) {
        if (context === void 0) { context = this.context; }
        this.context = context;
        return _super.prototype.attach.call(this, host);
    };
    TemplatePortal.prototype.detach = function () {
        this.context = undefined;
        return _super.prototype.detach.call(this);
    };
    return TemplatePortal;
}(Portal));

/**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 */
var BasePortalOutlet = /** @class */ (function () {
    function BasePortalOutlet() {
        /** Whether this host has already been permanently disposed. */
        this._isDisposed = false;
    }
    /** Whether this host has an attached portal. */
    BasePortalOutlet.prototype.hasAttached = function () {
        return !!this._attachedPortal;
    };
    /** Attaches a portal. */
    BasePortalOutlet.prototype.attach = function (portal) {
        if (!portal) {
            Object(__WEBPACK_IMPORTED_MODULE_0__portal_errors__["b" /* throwNullPortalError */])();
        }
        if (this.hasAttached()) {
            Object(__WEBPACK_IMPORTED_MODULE_0__portal_errors__["d" /* throwPortalAlreadyAttachedError */])();
        }
        if (this._isDisposed) {
            Object(__WEBPACK_IMPORTED_MODULE_0__portal_errors__["e" /* throwPortalOutletAlreadyDisposedError */])();
        }
        if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
        }
        else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__portal_errors__["f" /* throwUnknownPortalTypeError */])();
    };
    /** Detaches a previously attached portal. */
    BasePortalOutlet.prototype.detach = function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
            this._attachedPortal = null;
        }
        this._invokeDisposeFn();
    };
    /** Permanently dispose of this portal host. */
    BasePortalOutlet.prototype.dispose = function () {
        if (this.hasAttached()) {
            this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
    };
    /** @docs-private */
    BasePortalOutlet.prototype.setDisposeFn = function (fn) {
        this._disposeFn = fn;
    };
    BasePortalOutlet.prototype._invokeDisposeFn = function () {
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = null;
        }
    };
    return BasePortalOutlet;
}());

//# sourceMappingURL=portal.js.map

/***/ }),

/***/ 1082:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__send_modal_validators__ = __webpack_require__(1102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_utils__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__send_modal_provider__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_actions__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_selectors__ = __webpack_require__(101);
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











var SendModalComponent = /** @class */ (function () {
    function SendModalComponent(viewCtrl, navCtrl, barcodeScanner, notificationProvider, alertCtrl, loadingCtrl, sendModalProvider, store, fb) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.notificationProvider = notificationProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.sendModalProvider = sendModalProvider;
        this.store = store;
        this.fb = fb;
        this.translationPrefix = 'POSSESSIONS.SEND_MODAL.';
        this.store.select(__WEBPACK_IMPORTED_MODULE_10__store_selectors__["b" /* BalancesSelectors */].getSelectedBalance).subscribe(function (selectedBalance) { return _this.selectedBalance = selectedBalance; });
        this.formGroup = this.fb.group({
            address: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__send_modal_validators__["a" /* addressValidator */]]],
            passphrase: ['', this.w ? [] : __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            amount: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, Object(__WEBPACK_IMPORTED_MODULE_5__send_modal_validators__["b" /* amountValidator */])(this.selectedBalance.amount)]],
            label: [''],
        });
    }
    Object.defineProperty(SendModalComponent.prototype, "toAddress", {
        get: function () { return this.formGroup.get('address'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendModalComponent.prototype, "passphrase", {
        get: function () { return this.formGroup.get('passphrase'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendModalComponent.prototype, "amount", {
        get: function () { return this.formGroup.get('amount'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendModalComponent.prototype, "label", {
        get: function () { return this.formGroup.get('label'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendModalComponent.prototype, "w", {
        get: function () {
            try {
                return this.sendModalProvider.account && this.sendModalProvider.account.WIF;
            }
            catch (e) {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    SendModalComponent.prototype.ngOnInit = function () {
    };
    SendModalComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_10__store_selectors__["i" /* TransactionsSelectors */].getSelectedAddress).take(1).subscribe(function (address) { return _this.toAddress.setValue(address); });
    };
    SendModalComponent.prototype.ionViewDidLeave = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_9__store_actions__["h" /* TransactionsActions */].CleanSelectedContact());
    };
    SendModalComponent.prototype.handleClose = function () {
        this.viewCtrl.dismiss();
        this.formGroup.reset();
    };
    /**
     * Address must be check validity and required
     * @if address && isAddress(address)
     * @then passphrase been use for signature the wallet file is require
     * @then amount is required and translate to big num
     * @optional Label
     **/
    SendModalComponent.prototype.transfer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.toAddress.markAsTouched();
                        this.passphrase.markAsTouched();
                        this.amount.markAsTouched();
                        if (!this.formGroup.valid ||
                            !this.toAddress.valid ||
                            !this.amount.valid ||
                            !this.passphrase.valid) {
                            return [2 /*return*/];
                        }
                        loading = this.loadingCtrl.create();
                        return [4 /*yield*/, loading.present()];
                    case 1:
                        _a.sent();
                        this.sendModalProvider
                            .decrypt(this.passphrase.value)
                            .then(function (pr) { return __awaiter(_this, void 0, void 0, function () {
                            var result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.sendModalProvider.doSendAsset({
                                            dests: this.toAddress.value,
                                            amounts: this.amount.value,
                                            assetId: this.selectedBalance.hash
                                        }, pr)];
                                    case 1:
                                        result = _a.sent();
                                        if (!result) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.handleClose()];
                                    case 2:
                                        _a.sent();
                                        this.notificationProvider.emit({ message: '转账成功' });
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })
                            .catch(function (err) {
                            if (err.message)
                                return _this.showPrompt({ message: err.message, title: '错误' });
                            _this.showPrompt({ message: err, title: '错误' });
                        })
                            .then(function (_) {
                            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_9__store_actions__["b" /* BalancesActions */].Load());
                            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_9__store_actions__["h" /* TransactionsActions */].CleanSelectedContact());
                            loading.dismissAll();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SendModalComponent.prototype.showPrompt = function (config) {
        var prompt = this.alertCtrl.create(config);
        prompt.present();
    };
    SendModalComponent.prototype.handleScanClick = function () {
        var _this = this;
        this.barcodeScanner.scan()
            .then(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_6__shared_utils__["e" /* isAddress */])(data.text) && _this.toAddress.setValue(data.text); })
            .catch(function (err) { return _this.notificationProvider.emit({ message: err }); });
    };
    SendModalComponent.prototype.handleContactClick = function () {
        this.navCtrl.push('Contacts', { fromProfile: false });
    };
    SendModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'send-modal',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\components\modals\send-modal\send-modal.html"*/'<ion-content padding class="send-modal__content" fixed>\n\n	<div class="content-header">\n\n		<button ion-button icon-only clear (click)="handleClose()" float-end>\n\n			<ion-icon name=\'close\'></ion-icon>\n\n		</button>\n\n	</div>\n\n\n\n	<form class="container" [formGroup]="formGroup" #sendDir="ngForm" (submit)="transfer()">\n\n		<h5>{{ translationPrefix + \'title\' | translate }}</h5>\n\n\n\n		<ion-item class="round">\n\n			<ion-input placeholder="{{ translationPrefix + \'address\' | translate }}" formControlName="address" required></ion-input>\n\n			<ion-icon item-end *ngIf="toAddress.valid" name="checkmark" style="color: #3094d6;"></ion-icon>\n\n			<ion-icon item-end *ngIf="toAddress.invalid && (toAddress.dirty || toAddress.touched) && toAddress.errors.invalidAddress" name="close" style="color: red;"></ion-icon>\n\n		</ion-item>\n\n\n\n		<div class="tooltips">\n\n			<div class="icon" (click)="handleScanClick()">\n\n				<img src="assets/imgs/icon-send-modal_scan.svg">\n\n			</div>\n\n			<div class="icon" (click)="handleContactClick()">\n\n				<img src="assets/imgs/icon-send-modal_contact.svg">\n\n			</div>\n\n		</div>\n\n\n\n		<ion-item class="round" *ngIf="!w">\n\n			<ion-input placeholder="{{ translationPrefix + \'password\' | translate }}" type="password" formControlName="passphrase" required></ion-input>\n\n			<ion-icon item-end *ngIf="passphrase.valid" name="checkmark" style="color: #3094d6;"></ion-icon>\n\n			<ion-icon item-end *ngIf="passphrase.invalid && (passphrase.dirty || passphrase.touched)" name="close" style="color: red;"></ion-icon>\n\n		</ion-item>\n\n\n\n		<!--<ion-item class="checkbox">\n\n			<ion-label>记住密码</ion-label>\n\n			<ion-checkbox formControlName="rememberPassphrase" type="password"></ion-checkbox>\n\n		</ion-item>-->\n\n\n\n		<ion-item class="round">\n\n			<ion-input\n\n				type="number" placeholder="{{ translationPrefix + \'amount\' | translate }}" formControlName="amount"\n\n				[value]="amount.value"\n\n				[max]="selectedBalance.amount"\n\n				required></ion-input>\n\n			<ion-icon item-end *ngIf="amount.valid" name="checkmark" style="color: #3094d6;"></ion-icon>\n\n			<ion-icon item-end *ngIf="amount.invalid && (amount.dirty || amount.touched) && amount.errors.invalidAmount" name="close" style="color: red;"></ion-icon>\n\n		</ion-item>\n\n\n\n		<ion-list class="amount-range">\n\n			<ion-range step="1" min="0" [max]="selectedBalance.amount"\n\n			           formControlName="amount">\n\n				<ion-label range-left>0</ion-label>\n\n				<ion-label range-right>{{ selectedBalance.amount }}</ion-label>\n\n			</ion-range>\n\n		</ion-list>\n\n\n\n		<!--<ion-item class="round">\n\n			<ion-input placeholder="{{ translationPrefix + \'label\' | translate }}" formControlName="label"></ion-input>\n\n		</ion-item>-->\n\n\n\n		<div class="spacer"></div>\n\n\n\n		<button ion-button round full class="otcgo-button--colour" type="submit">{{ translationPrefix + \'transfer\' | translate }}</button>\n\n	</form>\n\n</ion-content>'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\components\modals\send-modal\send-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_8__providers__["f" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__send_modal_provider__["a" /* SendModalProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], SendModalComponent);
    return SendModalComponent;
}());

//# sourceMappingURL=send-modal.js.map

/***/ }),

/***/ 1100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExpansionPanelHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpansionPanelDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ExpansionPanelTitle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_filter__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_cdk_keycodes__ = __webpack_require__(1155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__expansion_panel__ = __webpack_require__(1065);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__expansion_animations__ = __webpack_require__(1066);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ExpansionPanelHeader = /** @class */ (function () {
    function ExpansionPanelHeader(panel, _changeDetectorRef) {
        var _this = this;
        this.panel = panel;
        this._changeDetectorRef = _changeDetectorRef;
        this._parentChangeSubscription = __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["Subscription"].EMPTY;
        this._parentChangeSubscription = Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["merge"])(panel.opened, panel.closed, panel._inputChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_filter__["filter"])(function (changes) { return !!(changes.hideToggle || changes.disabled); })))
            .subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
    }
    ExpansionPanelHeader.prototype._toggle = function () {
        this.panel.toggle();
    };
    ExpansionPanelHeader.prototype._isExpanded = function () {
        return this.panel.expanded;
    };
    ExpansionPanelHeader.prototype._getExpandedState = function () {
        return this.panel._getExpandedState();
    };
    ExpansionPanelHeader.prototype._getPanelId = function () {
        return this.panel.id;
    };
    ExpansionPanelHeader.prototype._showToggle = function () {
        return !this.panel.hideToggle && !this.panel.disabled;
    };
    ExpansionPanelHeader.prototype._keydown = function (event) {
        switch (event.keyCode) {
            case __WEBPACK_IMPORTED_MODULE_4__core_cdk_keycodes__["b" /* SPACE */]:
            case __WEBPACK_IMPORTED_MODULE_4__core_cdk_keycodes__["a" /* ENTER */]:
                event.preventDefault();
                this._toggle();
            default:
                return;
        }
    };
    ExpansionPanelHeader.prototype.ngOnDestroy = function () {
        this._parentChangeSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ExpansionPanelHeader.prototype, "expandedHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ExpansionPanelHeader.prototype, "collapsedHeight", void 0);
    ExpansionPanelHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'expansion-panel-header',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\components\expansion-panel\expansion-panel-header.html"*/'<span class="content">\n\n	<ng-content select="panel-title"></ng-content>\n\n	<ng-content select="panel-description"></ng-content>\n\n	<ng-content></ng-content>\n\n</span>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\components\expansion-panel\expansion-panel-header.html"*/,
            preserveWhitespaces: false,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
            animations: [
                __WEBPACK_IMPORTED_MODULE_6__expansion_animations__["a" /* ExpansionAnimations */].indicatorRotate,
                __WEBPACK_IMPORTED_MODULE_6__expansion_animations__["a" /* ExpansionAnimations */].expansionHeaderHeight
            ],
            host: {
                'class': 'expansion-panel-header',
                'role': 'button',
                '[attr.id]': 'panel._headerId',
                '[attr.tabindex]': 'panel.disabled ? -1 : 0',
                '[attr.aria-controls]': '_getPanelId()',
                '[attr.aria-expanded]': '_isExpanded()',
                '[attr.aria-disabled]': 'panel.disabled',
                '[class.mat-expanded]': '_isExpanded()',
                '(click)': '_toggle()',
                '(keydown)': '_keydown($event)',
                '[@expansionHeight]': "{\n        value: _getExpandedState(),\n        params: {\n          collapsedHeight: collapsedHeight,\n          expandedHeight: expandedHeight\n        }\n    }",
            }
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Host */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__expansion_panel__["a" /* ExpansionPanel */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], ExpansionPanelHeader);
    return ExpansionPanelHeader;
}());

var ExpansionPanelDescription = /** @class */ (function () {
    function ExpansionPanelDescription() {
    }
    ExpansionPanelDescription = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'panel-description',
            host: {
                'class': 'expansion-panel-header-description'
            }
        })
    ], ExpansionPanelDescription);
    return ExpansionPanelDescription;
}());

var ExpansionPanelTitle = /** @class */ (function () {
    function ExpansionPanelTitle() {
    }
    ExpansionPanelTitle = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'panel-title',
            host: {
                'class': 'expansion-panel-header-title'
            }
        })
    ], ExpansionPanelTitle);
    return ExpansionPanelTitle;
}());

//# sourceMappingURL=expansion-panel-header.js.map

/***/ }),

/***/ 1102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addressValidator;
/* harmony export (immutable) */ __webpack_exports__["b"] = amountValidator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_utils__ = __webpack_require__(102);

function addressValidator(addressCtrl) {
    var value = addressCtrl.value;
    return (!value || !Object(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["e" /* isAddress */])(value))
        ? { invalidAddress: true }
        : null;
}
function amountValidator(maxValue) {
    return function (amountCtrl) {
        var value = amountCtrl.value;
        if (!value || value <= 0 || value > maxValue) {
            return { invalidAmount: true };
        }
        return null;
    };
}
//# sourceMappingURL=send-modal.validators.js.map

/***/ }),

/***/ 1147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slide_card_props__ = __webpack_require__(1620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_card_item__ = __webpack_require__(1148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__ = __webpack_require__(1621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_throttle__ = __webpack_require__(1623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_throttle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_throttle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_utils_resize_event__ = __webpack_require__(1625);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SlideCard = /** @class */ (function (_super) {
    __extends(SlideCard, _super);
    function SlideCard(el) {
        var _this = _super.call(this) || this;
        _this.el = el;
        _this.throttledArrowClick$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        _this.throttledIndicatorHover$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        _this.containerWidth = 0;
        _this.time = null;
        _this.hover = false;
        _this._items = [];
        _this._activeIndex = -1;
        return _this;
    }
    Object.defineProperty(SlideCard.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (val) {
            if (val.length > 0) {
                this.setActiveItem(this.initialIndex);
            }
            this._items = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideCard.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex;
        },
        set: function (val) {
            var oldVal = this._activeIndex;
            this._activeIndex = val;
            this.resetItemPosition(oldVal);
            this.change.emit({ newVal: val, oldVal: oldVal });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideCard.prototype, "hasLabel", {
        get: function () {
            return this.items.some(function (item) { return item.label.toString().length > 0; });
        },
        enumerable: true,
        configurable: true
    });
    /* TODO: To break down this component logic this func is what u are going to looking up */
    SlideCard.prototype.itemInStage = function (item, index) {
        var length = this.items.length;
        if (index === length - 1 && item.inStage && this.items[0].active ||
            (item.inStage && this.items[index + 1] && this.items[index + 1].active)) {
            return 'left';
        }
        else if (index === 0 && item.inStage && this.items[length - 1].active ||
            (item.inStage && this.items[index - 1] && this.items[index - 1].active)) {
            return 'right';
        }
        return false;
    };
    SlideCard.prototype.handleButtonEnter = function (arrow) {
        var _this = this;
        this.items.forEach(function (item, index) {
            if (arrow === _this.itemInStage(item, index)) {
                item.hover = true;
            }
        });
    };
    SlideCard.prototype.handleButtonLeave = function () {
        this.items.forEach(function (item) {
            item.hover = false;
        });
    };
    SlideCard.prototype.updateItems = function () {
        // this.items = this.children.filter(child => child.name === 'SlideCardItem')
    };
    SlideCard.prototype.resetItemPosition = function (oldIndex) {
        var _this = this;
        this.items.forEach(function (item, index) {
            item.translateItem(index, _this.activeIndex, oldIndex);
        });
    };
    SlideCard.prototype.playSlides = function () {
        if (this.activeIndex < this.items.length - 1) {
            this.activeIndex++;
        }
        else {
            this.activeIndex = 0;
        }
    };
    SlideCard.prototype.pauseTimer = function () {
        window.clearInterval.call(this, this.timer);
    };
    SlideCard.prototype.startTimer = function () {
        if (this.interval <= 0 || !this.autoplay) {
            return;
        }
        this.timer = window.setInterval(this.playSlides.bind(this), this.interval);
    };
    SlideCard.prototype.setActiveItem = function (index) {
        if (typeof index === 'string') {
            var filteredItems = this.items.filter(function (item) { return item.name === index; });
            if (filteredItems.length > 0) {
                index = this.items.indexOf(filteredItems[0]);
            }
        }
        index = Number(index);
        if (isNaN(index) || index !== Math.floor(index)) {
            return;
        }
        var length = this.items.length;
        var oldIndex = this.activeIndex;
        if (index < 0) {
            this.activeIndex = length - 1;
        }
        else if (index >= length) {
            this.activeIndex = 0;
        }
        else {
            this.activeIndex = index;
        }
        if (oldIndex === this.activeIndex) {
            this.resetItemPosition(oldIndex);
        }
    };
    SlideCard.prototype.handleIndicatorClick = function (index) {
        this.activeIndex = index;
    };
    SlideCard.prototype.handleIndicatorHover = function (index) {
        if (this.trigger === 'hover' && index !== this.activeIndex) {
            this.activeIndex = index;
        }
    };
    SlideCard.prototype.handleMouse = function (bool) {
        this.hover = bool;
        if (bool)
            this.pauseTimer();
        else
            this.startTimer();
    };
    SlideCard.prototype.ngOnChanges = function () {
        Object(__WEBPACK_IMPORTED_MODULE_6__core_utils_resize_event__["a" /* addResizeListener */])(this.el.nativeElement.querySelector('.m-carousel'), this.resetItemPosition.bind(this));
        if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
            this.activeIndex = this.initialIndex;
        }
        this.startTimer();
    };
    /* TODO: try out using the ngOnChanges strategy */
    SlideCard.prototype.ngOnInit = function () {
        this.throttledArrowClick$.throttle(function (_) { return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__["interval"])(300); }).subscribe(this.setActiveItem.bind(this));
        this.throttledIndicatorHover$.throttle(function (_) { return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__["interval"])(300); }).subscribe(this.handleIndicatorHover.bind(this));
    };
    SlideCard.prototype.ngAfterViewInit = function () {
        this.items = this.children.map(function (i) { return i; });
        this.ngOnChanges();
    };
    SlideCard.prototype.ngOnDestroy = function () {
        this.el.nativeElement && this.pauseTimer();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChildren */])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_2__slide_card_item__["a" /* SlideCardItem */]; })),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], SlideCard.prototype, "children", void 0);
    SlideCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'slide-card',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\components\slide-card\slide-card.html"*/'<div\n\n	class="m-carousel"\n\n	[class.m-carousel--card]="type === \'card\'"\n\n	(mouseenter)="handleMouse(true)"\n\n	(mouseleave)="handleMouse(false)">\n\n	<div\n\n		class="m-carousel__container"\n\n		[ngStyle]="{ \'height\': height }">\n\n\n\n		<ng-content></ng-content>\n\n	</div>\n\n\n\n	<ul class="m-carousel__indicators" *ngIf="indicatorPosition !== \'none\'"\n\n	    [class.m-carousel__indicators--labels]="hasLabel"\n\n		  [class.m-carousel__indicators--outside]="indicatorPosition === \'outside\' || type === \'card\'"\n\n	>\n\n		<li\n\n			*ngFor="let item of items; index as i"\n\n			class="m-carousel__indicator"\n\n			[class.is-active]="i === activeIndex"\n\n			(click.stop)="handleIndicatorClick(i)"\n\n			(mouseenter)="throttledIndicatorHover$.next(i)"\n\n		>\n\n			<button\n\n				class="m-carousel__button"\n\n			>\n\n				<span *ngIf="hasLabel">{{ item.label }}</span>\n\n			</button>\n\n		</li>\n\n	</ul>\n\n</div>'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\components\slide-card\slide-card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SlideCard);
    return SlideCard;
}(__WEBPACK_IMPORTED_MODULE_1__slide_card_props__["a" /* SlideCardProps */]));

//# sourceMappingURL=slide-card.js.map

/***/ }),

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideCardItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slide_card__ = __webpack_require__(1147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CARD_SCALE = 0.83;
var SlideCardItem = /** @class */ (function () {
    function SlideCardItem(parent) {
        this.parent = parent;
        this.label = '';
        this.name = 'SlideCardItem';
        this.hover = false;
        this.translate = 0;
        this.scale = 1;
        this.isActive = false;
        this.ready = false;
        this.inStage = false;
        this.animating = false;
    }
    Object.defineProperty(SlideCardItem.prototype, "itemTranslateStyle", {
        get: function () {
            return {
                msTransform: "translateX(" + this.translate + "px) scale(" + this.scale + ")",
                webkitTransform: "translateX(" + this.translate + "px) scale(" + this.scale + ")",
                transform: "translateX(" + this.translate + "px) scale(" + this.scale + ")"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideCardItem.prototype, "parentWidth", {
        get: function () {
            return this.parent.el.nativeElement.offsetWidth;
        },
        enumerable: true,
        configurable: true
    });
    SlideCardItem.prototype.ngAfterContentInit = function () {
        this.parent && this.parent.updateItems();
    };
    SlideCardItem.prototype.ngOnDestroy = function () {
        this.parent && this.parent.updateItems();
    };
    SlideCardItem.prototype.proceessIndex = function (index, activeIndex, length) {
        if (activeIndex === 0 && index === length - 1)
            return -1;
        else if (activeIndex === length - 1 && index === 0)
            return length;
        else if (index < activeIndex - 1 && activeIndex - index >= length / 2)
            return length + 1;
        else if (index > activeIndex + 1 && index - activeIndex >= length / 2)
            return -2;
        return index;
    };
    SlideCardItem.prototype.calculateTranslate = function (index, activeIndex, parentWidth) {
        if (this.inStage)
            return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / 8 - 18;
        else if (index < activeIndex)
            return -(1 + CARD_SCALE) * parentWidth / 8 - 18;
        return (3 + CARD_SCALE) * parentWidth / 8 - 18;
    };
    SlideCardItem.prototype.translateItem = function (index, activeIndex, oldIndex) {
        var parentWidth = this.parentWidth;
        var length = this.parent.items.length;
        if (this.parent.type !== 'card' && typeof oldIndex !== 'undefined') {
            this.animating = index === activeIndex || index === oldIndex;
        }
        if (index !== activeIndex && length > 2) {
            index = this.proceessIndex(index, activeIndex, length);
        }
        if (this.parent.type === 'card') {
            this.inStage = Math.round(Math.abs(index - activeIndex)) <= 1;
            this.isActive = index === activeIndex;
            this.translate = this.calculateTranslate(index, activeIndex, parentWidth);
            this.scale = this.isActive ? 1 : CARD_SCALE;
        }
        else {
            this.isActive = index === activeIndex;
            this.translate = parentWidth * (index - activeIndex);
        }
        this.ready = true;
    };
    SlideCardItem.prototype.handleItemClick = function () {
        var parent = this.parent;
        if (parent && parent.type === 'card') {
            var index = parent.items.indexOf(this);
            parent.setActiveItem(index);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SlideCardItem.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('header'),
        __metadata("design:type", String)
    ], SlideCardItem.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SlideCardItem.prototype, "name", void 0);
    SlideCardItem = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'slide-card-item',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\components\slide-card\slide-card-item.html"*/'<!-- TODO: namespace specific -->\n\n<div class="m-carousel__header"\n\n     [class.is-active]="isActive">\n\n	{{ header }}\n\n</div>\n\n<div\n\n	class="m-carousel__item"\n\n	[ngClass]="{\n\n      \'m-carousel__item--card\': parent.type === \'card\',\n\n      \'is-active\': isActive,\n\n	  \'is-in-stage\': inStage,\n\n	  \'is-hover\': hover,\n\n	  \'is-animating\': animating\n\n    }"\n\n	[ngStyle]="itemTranslateStyle"\n\n	(click)="handleItemClick()">\n\n	<div class="m-carousel__mask" *ngIf="!isActive"></div>\n\n	<ng-content></ng-content>\n\n</div>'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\components\slide-card\slide-card-item.html"*/,
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_1__slide_card__["a" /* SlideCard */]; }))),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__slide_card__["a" /* SlideCard */]])
    ], SlideCardItem);
    return SlideCardItem;
}());

//# sourceMappingURL=slide-card-item.js.map

/***/ }),

/***/ 1149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpansionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_cdk_collections__ = __webpack_require__(1078);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_cdk_accordion__ = __webpack_require__(1150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_cdk_portal__ = __webpack_require__(1079);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accordion__ = __webpack_require__(1063);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__expansion_panel_content__ = __webpack_require__(1064);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__expansion_panel__ = __webpack_require__(1065);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__expansion_panel_header__ = __webpack_require__(1100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ExpansionModule = /** @class */ (function () {
    function ExpansionModule() {
    }
    ExpansionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__core_cdk_accordion__["a" /* CdkAccordionModule */], __WEBPACK_IMPORTED_MODULE_4__core_cdk_portal__["a" /* PortalModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__accordion__["a" /* Accordion */],
                __WEBPACK_IMPORTED_MODULE_7__expansion_panel__["a" /* ExpansionPanel */],
                __WEBPACK_IMPORTED_MODULE_7__expansion_panel__["b" /* ExpansionPanelActionRow */],
                __WEBPACK_IMPORTED_MODULE_8__expansion_panel_header__["b" /* ExpansionPanelHeader */],
                __WEBPACK_IMPORTED_MODULE_8__expansion_panel_header__["c" /* ExpansionPanelTitle */],
                __WEBPACK_IMPORTED_MODULE_8__expansion_panel_header__["a" /* ExpansionPanelDescription */],
                __WEBPACK_IMPORTED_MODULE_6__expansion_panel_content__["a" /* ExpansionPanelContent */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__accordion__["a" /* Accordion */],
                __WEBPACK_IMPORTED_MODULE_7__expansion_panel__["a" /* ExpansionPanel */],
                __WEBPACK_IMPORTED_MODULE_7__expansion_panel__["b" /* ExpansionPanelActionRow */],
                __WEBPACK_IMPORTED_MODULE_8__expansion_panel_header__["b" /* ExpansionPanelHeader */],
                __WEBPACK_IMPORTED_MODULE_8__expansion_panel_header__["c" /* ExpansionPanelTitle */],
                __WEBPACK_IMPORTED_MODULE_8__expansion_panel_header__["a" /* ExpansionPanelDescription */],
                __WEBPACK_IMPORTED_MODULE_6__expansion_panel_content__["a" /* ExpansionPanelContent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__core_cdk_collections__["a" /* UNIQUE_SELECTION_DISPATCHER_PROVIDER */]]
        })
    ], ExpansionModule);
    return ExpansionModule;
}());

//# sourceMappingURL=expansion-module.js.map

/***/ }),

/***/ 1150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordion__ = __webpack_require__(1045);
/* unused harmony reexport CdkAccordion */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_item__ = __webpack_require__(1056);
/* unused harmony reexport CdkAccordionItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_module__ = __webpack_require__(1152);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_module__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boolean_property__ = __webpack_require__(1046);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__boolean_property__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdkAccordionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collections__ = __webpack_require__(1078);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion__ = __webpack_require__(1045);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_item__ = __webpack_require__(1056);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CdkAccordionModule = /** @class */ (function () {
    function CdkAccordionModule() {
    }
    CdkAccordionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* CdkAccordion */], __WEBPACK_IMPORTED_MODULE_3__accordion_item__["a" /* CdkAccordionItem */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* CdkAccordion */], __WEBPACK_IMPORTED_MODULE_3__accordion_item__["a" /* CdkAccordionItem */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__collections__["a" /* UNIQUE_SELECTION_DISPATCHER_PROVIDER */]],
        })
    ], CdkAccordionModule);
    return CdkAccordionModule;
}());

//# sourceMappingURL=accordion-module.js.map

/***/ }),

/***/ 1153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return throwNullPortalError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return throwPortalAlreadyAttachedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return throwPortalOutletAlreadyDisposedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return throwUnknownPortalTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return throwNullPortalOutletError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return throwNoPortalAttachedError; });
var throwNullPortalError = function () { throw Error('Must provide a portal to attach'); };
var throwPortalAlreadyAttachedError = function () { throw Error('Host already has a portal attached'); };
var throwPortalOutletAlreadyDisposedError = function () { throw Error('This PortalOutlet has already been disposed'); };
var throwUnknownPortalTypeError = function () {
    throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal');
};
var throwNullPortalOutletError = function () { throw Error('Attempting to attach a portal to a null PortalOutlet'); };
var throwNoPortalAttachedError = function () { throw Error('Attempting to detach a portal that is not attached to a host'); };
//# sourceMappingURL=portal-errors.js.map

/***/ }),

/***/ 1154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CdkPortal */
/* unused harmony export CdkPortalOutlet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portal__ = __webpack_require__(1080);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 */
var CdkPortal = /** @class */ (function (_super) {
    __extends(CdkPortal, _super);
    function CdkPortal(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    CdkPortal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[cdk-portal], [cdkPortal], [portal]',
            exportAs: 'cdkPortal',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]])
    ], CdkPortal);
    return CdkPortal;
}(__WEBPACK_IMPORTED_MODULE_1__portal__["b" /* TemplatePortal */]));

/**
 * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
 */
var CdkPortalOutlet = /** @class */ (function (_super) {
    __extends(CdkPortalOutlet, _super);
    function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef) {
        var _this = _super.call(this) || this;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._viewContainerRef = _viewContainerRef;
        /** Whether the portal component is initialized. */
        _this._isInitialized = false;
        _this.attached = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        return _this;
    }
    Object.defineProperty(CdkPortalOutlet.prototype, "_deprecatedPortal", {
        /**
         * @deprecated
         * @deletion-target 6.0.0
         */
        get: function () { return this.portal; },
        set: function (v) { this.portal = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "_deprecatedPortalHost", {
        /**
         * @deprecated
         * @deletion-target 6.0.0
         */
        get: function () { return this.portal; },
        set: function (v) { this.portal = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "portal", {
        /** Portal associated with the Portal outlet. */
        get: function () {
            return this._attachedPortal;
        },
        set: function (portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
                return;
            }
            if (this.hasAttached()) {
                _super.prototype.detach.call(this);
            }
            if (portal) {
                _super.prototype.attach.call(this, portal);
            }
            this._attachedPortal = portal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "attachedRef", {
        /** Component or view reference that is attached to the portal. */
        get: function () {
            return this._attachedRef;
        },
        enumerable: true,
        configurable: true
    });
    CdkPortalOutlet.prototype.ngOnInit = function () {
        this._isInitialized = true;
    };
    CdkPortalOutlet.prototype.ngOnDestroy = function () {
        _super.prototype.dispose.call(this);
        this._attachedPortal = null;
        this._attachedRef = null;
    };
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @param portal Portal to be attached to the portal outlet.
     * @returns Reference to the created component.
     */
    CdkPortalOutlet.prototype.attachComponentPortal = function (portal) {
        portal.setAttachedHost(this);
        // If the portal specifies an origin, use that as the logical location of the component
        // in the application tree. Otherwise use the location of this PortalOutlet.
        var viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.parentInjector);
        _super.prototype.setDisposeFn.call(this, function () { return ref.destroy(); });
        this._attachedPortal = portal;
        this._attachedRef = ref;
        this.attached.emit(ref);
        return ref;
    };
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    CdkPortalOutlet.prototype.attachTemplatePortal = function (portal) {
        var _this = this;
        portal.setAttachedHost(this);
        var viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);
        _super.prototype.setDisposeFn.call(this, function () { return _this._viewContainerRef.clear(); });
        this._attachedPortal = portal;
        this._attachedRef = viewRef;
        this.attached.emit(viewRef);
        return viewRef;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('portalHost'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CdkPortalOutlet.prototype, "_deprecatedPortal", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('cdkPortalHost'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CdkPortalOutlet.prototype, "_deprecatedPortalHost", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])('attached'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CdkPortalOutlet.prototype, "attached", void 0);
    CdkPortalOutlet = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[cdkPortalOutlet], [cdkPortalHost], [portalHost]',
            exportAs: 'cdkPortalOutlet, cdkPortalHost',
            inputs: ['portal: cdkPortalOutlet']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]])
    ], CdkPortalOutlet);
    return CdkPortalOutlet;
}(__WEBPACK_IMPORTED_MODULE_1__portal__["a" /* BasePortalOutlet */]));

var PortalModule = /** @class */ (function () {
    function PortalModule() {
    }
    PortalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            exports: [CdkPortal, CdkPortalOutlet],
            declarations: [CdkPortal, CdkPortalOutlet],
        })
    ], PortalModule);
    return PortalModule;
}());

//# sourceMappingURL=portal-directives.js.map

/***/ }),

/***/ 1155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UP_ARROW */
/* unused harmony export DOWN_ARROW */
/* unused harmony export RIGHT_ARROW */
/* unused harmony export LEFT_ARROW */
/* unused harmony export PAGE_UP */
/* unused harmony export PAGE_DOWN */
/* unused harmony export HOME */
/* unused harmony export END */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SPACE; });
/* unused harmony export TAB */
/* unused harmony export ESCAPE */
/* unused harmony export BACKSPACE */
/* unused harmony export DELETE */
/* unused harmony export A */
/* unused harmony export Z */
/* unused harmony export ZERO */
/* unused harmony export NINE */
/* unused harmony export COMMA */
var UP_ARROW = 38;
var DOWN_ARROW = 40;
var RIGHT_ARROW = 39;
var LEFT_ARROW = 37;
var PAGE_UP = 33;
var PAGE_DOWN = 34;
var HOME = 36;
var END = 35;
var ENTER = 13;
var SPACE = 32;
var TAB = 9;
var ESCAPE = 27;
var BACKSPACE = 8;
var DELETE = 46;
var A = 65;
var Z = 90;
var ZERO = 48;
var NINE = 57;
var COMMA = 188;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TimelineItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TimelineTimeComponent; });
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

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
        this.endIcon = 'ionic';
        this.showEnd = false;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('end'),
        __metadata("design:type", Object)
    ], TimelineComponent.prototype, "endIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TimelineComponent.prototype, "showEnd", void 0);
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'timeline',
            template: "\n\t  <ion-row class=\"timeline\">\n\t\t  <ion-grid>\n\t\t\t  <ng-content></ng-content>\n\t\t\t  <ng-template *ngIf=\"showEnd\">\n\t\t\t\t  <timeline-item>\n\t\t\t\t\t  <ion-col col-2>\n\t\t\t\t\t\t  <ion-icon></ion-icon>\n\t\t\t\t\t  </ion-col>\n\t\t\t\t  </timeline-item>\n\t\t\t  </ng-template>\n\t\t  </ion-grid>\n\t  </ion-row>\n\t"
        })
    ], TimelineComponent);
    return TimelineComponent;
}());

// Timeline-item
var TimelineItemComponent = /** @class */ (function () {
    function TimelineItemComponent() {
    }
    TimelineItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'timeline-item',
            template: "\n\t  <ng-content></ng-content>"
        })
    ], TimelineItemComponent);
    return TimelineItemComponent;
}());

// Timeline-time
var TimelineTimeComponent = /** @class */ (function () {
    function TimelineTimeComponent() {
    }
    Object.defineProperty(TimelineTimeComponent.prototype, "subtitle", {
        get: function () {
            return this.time.split(' ')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimelineTimeComponent.prototype, "title", {
        get: function () {
            return this.time.split(' ')[1];
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TimelineTimeComponent.prototype, "time", void 0);
    TimelineTimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'timeline-time',
            template: '<span>{{subtitle}}</span> <span>{{title}}</span>'
        }),
        __metadata("design:paramtypes", [])
    ], TimelineTimeComponent);
    return TimelineTimeComponent;
}());

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 1251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives__ = __webpack_require__(1252);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__directives__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StopPropagationDirective; });
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

var StopPropagationDirective = /** @class */ (function () {
    function StopPropagationDirective(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.clickStopPropEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.monseEnterStopPropEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    StopPropagationDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.clickUnSubscriber = this.renderer.listen(this.element.nativeElement, 'click', function (event) {
            event.stopPropagation();
            _this.clickStopPropEvent.emit(event);
        });
        this.monseEnterSubscriber = this.renderer.listen(this.element.nativeElement, 'mouseenter', function (event) {
            event.stopPropagation();
            _this.monseEnterStopPropEvent.emit(event);
        });
    };
    StopPropagationDirective.prototype.ngOnDestroy = function () {
        this.clickUnSubscriber();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])('click.stop'),
        __metadata("design:type", Object)
    ], StopPropagationDirective.prototype, "clickStopPropEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])('monseenter.stop'),
        __metadata("design:type", Object)
    ], StopPropagationDirective.prototype, "monseEnterStopPropEvent", void 0);
    StopPropagationDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[abort.stop], [beforeinput.stop], [blur.stop], [click.stop], [compositionstart.stop], [compositionupdate.stop], [compositionend.stop], [dblclick.stop], [error.stop], [focus.stop], [focusin.stop], [focusout.stop], [input.stop], [keydown.stop], [keypress.stop], [keyup.stop], [load.stop], [mousedown.stop], [mouseenter.stop], [mouseleave.stop], [mousemove.stop], [mouseout.stop], [mouseover.stop], [mouseup.stop], [resize.stop], [scroll.stop], [select.stop], [unload.stop], [wheel.stop]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], StopPropagationDirective);
    return StopPropagationDirective;
}());

//# sourceMappingURL=directives.js.map

/***/ }),

/***/ 1615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PossessionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_empty__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_selectors__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_actions__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PossessionDetailPage = /** @class */ (function () {
    function PossessionDetailPage(lp, zone, store) {
        this.lp = lp;
        this.zone = zone;
        this.store = store;
        this.selectedPrice = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store_selectors__["f" /* PricesSelectors */].getSelectedPrice);
        this.selectedBalance = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store_selectors__["b" /* BalancesSelectors */].getSelectedBalance);
        this.transactionHistories = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store_selectors__["h" /* TransactionHistorySelectors */].getEntitiesBySelectedSymbol);
        this.lastStack = [];
    }
    PossessionDetailPage.prototype.ngOnInit = function () { this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_actions__["g" /* TransactionHistoryActions */].Load()); };
    PossessionDetailPage.prototype.ngOnDestroy = function () { this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_actions__["b" /* BalancesActions */].CleanSelectedCoin()); };
    PossessionDetailPage.prototype.ionViewDidLeave = function () { this.transactionHistories = Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_empty__["empty"])(); };
    PossessionDetailPage.prototype.handleScroll = function (e) {
        var _this = this;
        var scrollTop = e.scrollTop;
        this.scrollTop = scrollTop;
        if (!this.differentScrollTop)
            this.differentScrollTop = scrollTop;
        this.lastStack.push(function () { return _this.differentScrollTop = scrollTop; });
        if (this.lastStack.length >= 2)
            this.lastStack.shift().bind(this)();
        if (e.directionY === 'down') {
            this.zone.run(function () {
                _this.isScrollDown = true;
                _this.isScrollUp = false;
            });
        }
        if (e.directionY === 'up') {
            this.zone.run(function () {
                _this.isScrollDown = false;
                _this.isScrollUp = true;
            });
        }
    };
    PossessionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-possession-detail',template:/*ion-inline-start:"D:\wayDownWeGo\sea-app\src\containers\possessions\possession-detail\possession-detail.html"*/'<ion-header class="otcgo-header">\n\n\n\n	<ion-navbar>\n\n		<ion-title>\n\n			{{ (selectedBalance | async)?.symbol }}\n\n		</ion-title>\n\n	</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="possession-detail-content" (ionScroll)="handleScroll($event)">\n\n\n\n	<possession-detail-bgcard\n\n		[balance]="selectedBalance | async"\n\n		[price]="selectedPrice | async"\n\n		[isScrollDown]="isScrollDown"\n\n		[isScrollUp]="isScrollUp"\n\n		[scrollTop]="scrollTop"\n\n		[differentScrollTop]="differentScrollTop">\n\n	</possession-detail-bgcard>\n\n\n\n	<possession-detail-history\n\n		[symbol]="(selectedBalance | async).symbol"\n\n		[transactionHistories]="transactionHistories | async"\n\n		[isScrollDown]="isScrollDown"\n\n		[isScrollUp]="isScrollUp"\n\n		[scrollTop]="scrollTop"\n\n		[differentScrollTop]="differentScrollTop">\n\n	</possession-detail-history>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\wayDownWeGo\sea-app\src\containers\possessions\possession-detail\possession-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers__["e" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], PossessionDetailPage);
    return PossessionDetailPage;
}());

//# sourceMappingURL=possession-detail.js.map

/***/ }),

/***/ 1616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timeline__ = __webpack_require__(1617);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__timeline__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slide_card__ = __webpack_require__(1619);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals__ = __webpack_require__(1630);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__expansion_panel__ = __webpack_require__(1632);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives__ = __webpack_require__(1251);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core__ = __webpack_require__(1633);
/* unused harmony namespace reexport */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timeline__ = __webpack_require__(1250);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timeline_module__ = __webpack_require__(1618);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__timeline_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeline__ = __webpack_require__(1250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelineComponent */],
    __WEBPACK_IMPORTED_MODULE_2__timeline__["b" /* TimelineItemComponent */],
    __WEBPACK_IMPORTED_MODULE_2__timeline__["c" /* TimelineTimeComponent */]
];
// TODO(Amagi): Using IonicModule may be become a huge cost right there, Optimize later
var TimelineModule = /** @class */ (function () {
    function TimelineModule() {
    }
    TimelineModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: COMPONENTS,
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: COMPONENTS
        })
    ], TimelineModule);
    return TimelineModule;
}());

//# sourceMappingURL=timeline.module.js.map

/***/ }),

/***/ 1619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slide_card__ = __webpack_require__(1147);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slide_card_item__ = __webpack_require__(1148);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_card_module__ = __webpack_require__(1629);
/* unused harmony namespace reexport */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideCardProps; });
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

var SlideCardProps = /** @class */ (function () {
    function SlideCardProps() {
        this.trigger = 'hover';
        this.interval = 3000;
        this.autoplay = false;
        this.indicator = true;
        this.type = 'card';
        this.arrow = 'hover';
        this.initialIndex = 0;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SlideCardProps.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SlideCardProps.prototype, "trigger", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], SlideCardProps.prototype, "interval", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SlideCardProps.prototype, "autoplay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SlideCardProps.prototype, "indicator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SlideCardProps.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SlideCardProps.prototype, "arrow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], SlideCardProps.prototype, "initialIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SlideCardProps.prototype, "indicatorPosition", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], SlideCardProps.prototype, "change", void 0);
    return SlideCardProps;
}());

//# sourceMappingURL=slide-card-props.js.map

/***/ }),

/***/ 1621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IntervalObservable_1 = __webpack_require__(1622);
exports.interval = IntervalObservable_1.IntervalObservable.create;
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ 1622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isNumeric_1 = __webpack_require__(240);
var Observable_1 = __webpack_require__(8);
var async_1 = __webpack_require__(28);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IntervalObservable = (function (_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable(period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        _super.call(this);
        this.period = period;
        this.scheduler = scheduler;
        if (!isNumeric_1.isNumeric(period) || period < 0) {
            this.period = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = async_1.async;
        }
    }
    /**
     * Creates an Observable that emits sequential numbers every specified
     * interval of time, on a specified IScheduler.
     *
     * <span class="informal">Emits incremental numbers periodically in time.
     * </span>
     *
     * <img src="./img/interval.png" width="100%">
     *
     * `interval` returns an Observable that emits an infinite sequence of
     * ascending integers, with a constant interval of time of your choosing
     * between those emissions. The first emission is not sent immediately, but
     * only after the first period has passed. By default, this operator uses the
     * `async` IScheduler to provide a notion of time, but you may pass any
     * IScheduler to it.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
     * var numbers = Rx.Observable.interval(1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link delay}
     *
     * @param {number} [period=0] The interval size in milliseconds (by default)
     * or the time unit determined by the scheduler's clock.
     * @param {Scheduler} [scheduler=async] The IScheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a sequential number each time
     * interval.
     * @static true
     * @name interval
     * @owner Observable
     */
    IntervalObservable.create = function (period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        return new IntervalObservable(period, scheduler);
    };
    IntervalObservable.dispatch = function (state) {
        var index = state.index, subscriber = state.subscriber, period = state.period;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        state.index += 1;
        this.schedule(state, period);
    };
    IntervalObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var period = this.period;
        var scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
            index: index, subscriber: subscriber, period: period
        }));
    };
    return IntervalObservable;
}(Observable_1.Observable));
exports.IntervalObservable = IntervalObservable;
//# sourceMappingURL=IntervalObservable.js.map

/***/ }),

/***/ 1623:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(8);
var throttle_1 = __webpack_require__(1624);
Observable_1.Observable.prototype.throttle = throttle_1.throttle;
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ 1624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var throttle_1 = __webpack_require__(241);
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/throttle.png" width="100%">
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @param {Object} config a configuration object to define `leading` and `trailing` behavior. Defaults
 * to `{ leading: true, trailing: false }`.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
function throttle(durationSelector, config) {
    if (config === void 0) { config = throttle_1.defaultThrottleConfig; }
    return throttle_1.throttle(durationSelector, config)(this);
}
exports.throttle = throttle;
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ 1625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addResizeListener; });
/* unused harmony export removeResizeListener */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__(1626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* Modified from https://github.com/sdecima/javascript-detect-element-resize
 * version: 0.5.3
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2013 Sebastián Décima
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

var isServer = typeof window === 'undefined';
/* istanbul ignore next */
var requestFrame = (function () {
    if (isServer)
        return;
    var raf = window.requestAnimationFrame
        || window['mozRequestAnimationFrame']
        || window.webkitRequestAnimationFrame
        || function (fn) { return window.setTimeout(fn, 20); };
    return function (fn) {
        return raf(fn);
    };
})();
/* istanbul ignore next */
var cancelFrame = (function () {
    if (isServer)
        return;
    var cancel = window.cancelAnimationFrame
        || window['mozCancelAnimationFrame']
        || window.webkitCancelAnimationFrame
        || window.clearTimeout;
    return function (id) {
        return cancel(id);
    };
})();
/* istanbul ignore next */
var resetTrigger = function (element) {
    var trigger = element.__resizeTrigger__;
    var expand = trigger.firstElementChild;
    var contract = trigger.lastElementChild;
    var expandChild = expand.firstElementChild;
    contract.scrollLeft = contract.scrollWidth;
    contract.scrollTop = contract.scrollHeight;
    expandChild.style.width = expand.offsetWidth + 1 + 'px';
    expandChild.style.height = expand.offsetHeight + 1 + 'px';
    expand.scrollLeft = expand.scrollWidth;
    expand.scrollTop = expand.scrollHeight;
};
/* istanbul ignore next */
var checkTriggers = function (element) {
    return element.offsetWidth !== element.__resizeLast__.width || element.offsetHeight !== element.__resizeLast__.height;
};
/* istanbul ignore next */
var scrollListener = function (event) {
    var _this = this;
    resetTrigger(this);
    if (this.__resizeRAF__)
        cancelFrame(this.__resizeRAF__);
    this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(_this)) {
            _this.__resizeLast__.width = _this.offsetWidth;
            _this.__resizeLast__.height = _this.offsetHeight;
            _this.__resizeListeners__.forEach(function (fn) {
                fn.call(_this, event);
            });
        }
    });
};
/* Detect CSS Animations support to detect element display/re-attach */
var attachEvent = isServer ? {} : document['attachEvent'];
var DOM_PREFIXES = 'Webkit Moz O ms'.split(' ');
var START_EVENTS = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' ');
var RESIZE_ANIMATION_NAME = 'resizeanim';
var animation = false;
var keyFramePrefix = '';
var animationStartEvent = 'animationstart';
/* istanbul ignore next */
if (!attachEvent && !isServer) {
    var testElement = document.createElement('fakeelement');
    if (testElement.style.animationName !== undefined) {
        animation = true;
    }
    if (animation === false) {
        var prefix = '';
        for (var i = 0; i < DOM_PREFIXES.length; i++) {
            if (testElement.style[DOM_PREFIXES[i] + 'AnimationName'] !== undefined) {
                prefix = DOM_PREFIXES[i];
                keyFramePrefix = '-' + prefix.toLowerCase() + '-';
                animationStartEvent = START_EVENTS[i];
                animation = true;
                break;
            }
        }
    }
}
var stylesCreated = false;
/* istanbul ignore next */
var createStyles = function () {
    if (!stylesCreated && !isServer) {
        var animationKeyframes = "@" + keyFramePrefix + "keyframes " + RESIZE_ANIMATION_NAME + " { from { opacity: 0; } to { opacity: 0; } } ";
        var animationStyle = keyFramePrefix + "animation: 1ms " + RESIZE_ANIMATION_NAME + ";";
        // opacity: 0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
        var css = animationKeyframes + "\n      .resize-triggers { " + animationStyle + " visibility: hidden; opacity: 0; }\n      .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1 }\n      .resize-triggers > div { background: #eee; overflow: auto; }\n      .contract-trigger:before { width: 200%; height: 200%; }";
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (!Object(__WEBPACK_IMPORTED_MODULE_0_util__["isUndefined"])(style['styleSheet'])) {
            style['styleSheet'].cssText = css;
        }
        else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
        stylesCreated = true;
    }
};
/* istanbul ignore next */
var addResizeListener = function (element, fn) {
    if (isServer)
        return;
    if (attachEvent) {
        element.attachEvent('onresize', fn);
    }
    else {
        if (!element.__resizeTrigger__) {
            if (getComputedStyle(element).position === 'static') {
                element.style.position = 'relative';
            }
            createStyles();
            element.__resizeLast__ = {};
            element.__resizeListeners__ = [];
            var resizeTrigger = element.__resizeTrigger__ = document.createElement('div');
            resizeTrigger.className = 'resize-triggers';
            resizeTrigger.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';
            element.appendChild(resizeTrigger);
            resetTrigger(element);
            element.addEventListener('scroll', scrollListener, true);
            /* Listen for a css animation to detect element display/re-attach */
            if (animationStartEvent) {
                resizeTrigger.addEventListener(animationStartEvent, function (event) {
                    if (event['animationName'] === RESIZE_ANIMATION_NAME) {
                        resetTrigger(element);
                    }
                });
            }
        }
        element.__resizeListeners__.push(fn);
    }
};
/* istanbul ignore next */
var removeResizeListener = function (element, fn) {
    if (!element || !element.__resizeListeners__)
        return;
    if (attachEvent) {
        element.detachEvent('onresize', fn);
    }
    else {
        element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
        if (!element.__resizeListeners__.length) {
            element.removeEventListener('scroll', scrollListener);
            element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
        }
    }
};
//# sourceMappingURL=resize-event.js.map

/***/ }),

/***/ 1626:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(1627);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(1628);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67), __webpack_require__(239)))

/***/ }),

/***/ 1627:
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ 1628:
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ 1629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SlideCardModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_card__ = __webpack_require__(1147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slide_card_item__ = __webpack_require__(1148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives__ = __webpack_require__(1251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__slide_card__["a" /* SlideCard */],
    __WEBPACK_IMPORTED_MODULE_3__slide_card_item__["a" /* SlideCardItem */],
    __WEBPACK_IMPORTED_MODULE_4__directives__["a" /* StopPropagationDirective */]
];
var SlideCardModule = /** @class */ (function () {
    function SlideCardModule() {
    }
    SlideCardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: COMPONENTS,
            exports: COMPONENTS
        })
    ], SlideCardModule);
    return SlideCardModule;
}());

//# sourceMappingURL=slide-card-module.js.map

/***/ }),

/***/ 1630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__send_modal__ = __webpack_require__(1631);
/* unused harmony namespace reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__send_modal_module__ = __webpack_require__(1004);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__send_modal__ = __webpack_require__(1082);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expansion_module__ = __webpack_require__(1149);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion__ = __webpack_require__(1063);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expansion_panel__ = __webpack_require__(1065);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__expansion_panel_header__ = __webpack_require__(1100);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expansion_panel_content__ = __webpack_require__(1064);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__expansion_animations__ = __webpack_require__(1066);
/* unused harmony namespace reexport */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_api__ = __webpack_require__(1634);
/* unused harmony namespace reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_directives__ = __webpack_require__(1252);
/* unused harmony namespace reexport */

//# sourceMappingURL=public-api.js.map

/***/ }),

/***/ 1635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__possession_detail_bgcard__ = __webpack_require__(1636);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__possession_detail_bgcard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__possession_detail_history__ = __webpack_require__(1637);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__possession_detail_history__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PossessionDetailBgcard; });
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


var PossessionDetailBgcard = /** @class */ (function () {
    function PossessionDetailBgcard(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.scrollTop = 0;
        this.differentScrollTop = 0;
        this.downBoundary = window.outerHeight * 0.2;
        this.upBoundary = window.outerHeight * 0.55;
    }
    Object.defineProperty(PossessionDetailBgcard.prototype, "height", {
        get: function () {
            var _a = this, upBoundary = _a.upBoundary, downBoundary = _a.downBoundary, isScrollUp = _a.isScrollUp, scrollTop = _a.scrollTop;
            var computedResult = isScrollUp
                ? downBoundary
                : Math.max(upBoundary - scrollTop, downBoundary);
            var historyBoundary = downBoundary + window.outerHeight * 0.2;
            if (scrollTop < historyBoundary && isScrollUp)
                return upBoundary + "px";
            return computedResult + "px";
        },
        enumerable: true,
        configurable: true
    });
    PossessionDetailBgcard.prototype.showSendModal = function () {
        var sendModal = this.modalCtrl.create('SendModal', null, { cssClass: 'inset-modal', enableBackdropDismiss: true });
        return sendModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PossessionDetailBgcard.prototype, "isScrollUp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PossessionDetailBgcard.prototype, "isScrollDown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], PossessionDetailBgcard.prototype, "scrollTop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], PossessionDetailBgcard.prototype, "differentScrollTop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PossessionDetailBgcard.prototype, "balance", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], PossessionDetailBgcard.prototype, "price", void 0);
    PossessionDetailBgcard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'possession-detail-bgcard',
            template: "\n\t  <ion-card class=\"possession-data-card scroll-animation\" [style.height]=\"height\">\n\t\t  <div class=\"possession-data-amount\">{{ balance.amount?.toString() }}</div>\n\t\t  <div class=\"possession-data-approximation\">\u2248 \uFFE5 {{ balance.amount * price }}</div>\n\t\t  <button color=\"light\" ion-button round class=\"otcgo-button\" (click)=\"showSendModal()\" [disabled]=\"balance.amount <= 0\">\n\t\t\t  {{ 'POSSESSIONS.DETAILS.transfer' | translate }}\n\t\t  </button>\n\t  </ion-card>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], PossessionDetailBgcard);
    return PossessionDetailBgcard;
}());

//# sourceMappingURL=possession-detail-bgcard.js.map

/***/ }),

/***/ 1637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PossessionDetailHistory; });
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

var PossessionDetailHistory = /** @class */ (function () {
    function PossessionDetailHistory() {
        this.scrollTop = 0;
        this.differentScrollTop = 0;
        this.translationPrefix = 'POSSESSIONS.DETAILS.';
        this.upBoundary = window.outerHeight * 0.1;
        this.cardBoundary = window.outerHeight * 0.2;
        this.downBoundary = window.outerHeight * 0.5;
    }
    Object.defineProperty(PossessionDetailHistory.prototype, "height", {
        get: function () {
            var _a = this, downBoundary = _a.downBoundary, upBoundary = _a.upBoundary, cardBoundary = _a.cardBoundary, isScrollUp = _a.isScrollUp, scrollTop = _a.scrollTop, differentScrollTop = _a.differentScrollTop;
            var differential = scrollTop - differentScrollTop;
            var computedResult = isScrollUp
                ? Math.min(downBoundary + scrollTop * 2, upBoundary)
                : Math.max(upBoundary + differential * 2, downBoundary);
            if (scrollTop < cardBoundary && isScrollUp)
                return upBoundary + "px";
            return computedResult + "px";
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PossessionDetailHistory.prototype, "isScrollUp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PossessionDetailHistory.prototype, "isScrollDown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PossessionDetailHistory.prototype, "symbol", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PossessionDetailHistory.prototype, "transactionHistories", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], PossessionDetailHistory.prototype, "scrollTop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], PossessionDetailHistory.prototype, "differentScrollTop", void 0);
    PossessionDetailHistory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'possession-detail-history',
            template: "\n\t    <timeline endIcon=\"call\" [showEnd]=\"!!transactionHistories?.length\" [style.height]=\"height\" class=\"scroll-animation\">\n\t\t    <h5 *ngIf=\"transactionHistories?.length\">{{ 'POSSESSIONS.DETAILS.title' | translate }}</h5>\n\t\t    <h5 *ngIf=\"!transactionHistories?.length\">{{ 'POSSESSIONS.DETAILS.nodata' | translate }}</h5>\n\n\t\t    <timeline-item *ngFor=\"let history of transactionHistories\" ion-row>\n\t\t\t    <ion-col col-2>\n\t\t\t\t    <ion-icon></ion-icon>\n\t\t\t    </ion-col>\n\n\t\t\t    <ion-col col-4>\n\t\t\t\t    <timeline-time [time]=\"history.time\"></timeline-time>\n\t\t\t    </ion-col>\n\n\t\t\t    <ion-col col-6>\n\t\t\t\t    <div class=\"content\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t{{ (translationPrefix + history.operation) | translate }}\n\t\t\t\t\t</span> {{ history.value }}\n\t\t\t\t\t    <span>\n\t\t\t\t\t\t{{ symbol }}\n\t\t\t\t\t</span>\n\t\t\t\t    </div>\n\t\t\t    </ion-col>\n\t\t    </timeline-item>\n\t    </timeline>\n\t\t"
        })
    ], PossessionDetailHistory);
    return PossessionDetailHistory;
}());

//# sourceMappingURL=possession-detail-history.js.map

/***/ })

});
//# sourceMappingURL=1.js.map