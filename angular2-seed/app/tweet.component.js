System.register(['angular2/core', './likeButton.component'], function(exports_1, context_1) {
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
    var core_1, likeButton_component_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (likeButton_component_1_1) {
                likeButton_component_1 = likeButton_component_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent() {
                }
                // alert(authorIndex);
                TweetComponent.prototype.likeToggled = function ($event) {
                    this.tweet.totalLikes += $event.isLiked ? +1 : -1;
                    console.log(this.authorIndex);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "tweet", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "authorIndex", void 0);
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        templateUrl: 'app/tweet.template.html',
                        styles: ["\n        .tweet {\n            padding: 15px 10px;\n            border: 1px solid #ccc;\n            border-radius: 5px;\n            margin: 20px 10px;\n        }\n        \n        .tweeterHandle {\n            color: #ccc;\n            font-size: 13px;\n            margin-left: 15px;\n        }\n    "],
                        directives: [likeButton_component_1.LikeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map