System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var PaginationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PaginationComponent = (function () {
                function PaginationComponent() {
                    this.pageChanged = new core_1.EventEmitter();
                    this.selectedPageIndex = 0;
                }
                PaginationComponent.prototype.ngOnChanges = function () {
                    this.numOfPages = this.items ? (this.items.length / this.pageSize) : 0;
                    this.pageIndexes = new Array(this.numOfPages);
                };
                PaginationComponent.prototype.changePageAction = function (pageIndex) {
                    if (pageIndex < 0 || pageIndex === this.numOfPages) {
                        return;
                    }
                    this.selectedPageIndex = pageIndex;
                    this.pageChanged.emit({ pageIndex: pageIndex });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PaginationComponent.prototype, "pageSize", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PaginationComponent.prototype, "items", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], PaginationComponent.prototype, "pageChanged", void 0);
                PaginationComponent = __decorate([
                    core_1.Component({
                        selector: 'pagination',
                        templateUrl: 'app/shared/pagination/pagination.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], PaginationComponent);
                return PaginationComponent;
            }());
            exports_1("PaginationComponent", PaginationComponent);
        }
    }
});
//# sourceMappingURL=pagination.component.js.map