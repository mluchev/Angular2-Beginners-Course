System.register(['angular2/core', './zippyItem.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, zippyItem_component_1;
    var ZippyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (zippyItem_component_1_1) {
                zippyItem_component_1 = zippyItem_component_1_1;
            }],
        execute: function() {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.zippyItems = [{ title: 'Item1', content: 'Content1' }, { title: 'Item2', content: 'Content2' }];
                }
                ZippyComponent.prototype.expandItem = function (newIndex) {
                    this.expandedItemIndex = (this.expandedItemIndex === newIndex) ? undefined : newIndex;
                };
                ;
                ZippyComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        templateUrl: 'app/zippy/zippy.template.html',
                        directives: [zippyItem_component_1.ZippyItemComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyComponent);
                return ZippyComponent;
            }());
            exports_1("ZippyComponent", ZippyComponent);
        }
    }
});
//# sourceMappingURL=zippy.component.js.map