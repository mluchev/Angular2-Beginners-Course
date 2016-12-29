System.register(['angular2/core', './authors.component', './likeButton.component', './vote.component', './tweet.component', './tweets.service', './zippy/zippy.component', './firstForm/firstForm.component', './customValidationForm/customValidationForm.component'], function(exports_1, context_1) {
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
    var core_1, authors_component_1, likeButton_component_1, vote_component_1, tweet_component_1, tweets_service_1, zippy_component_1, firstForm_component_1, customValidationForm_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (likeButton_component_1_1) {
                likeButton_component_1 = likeButton_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweets_service_1_1) {
                tweets_service_1 = tweets_service_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (firstForm_component_1_1) {
                firstForm_component_1 = firstForm_component_1_1;
            },
            function (customValidationForm_component_1_1) {
                customValidationForm_component_1 = customValidationForm_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetsService) {
                    this.isLiked = false;
                    this.totalLikes = 10;
                    this.voteCount = 32;
                    this.isFavorite = false;
                    this.tweets = tweetsService.getTweets();
                }
                AppComponent.prototype.voted = function ($event) {
                    this.voteCount += $event.myVote;
                };
                AppComponent.prototype.likeToggled = function ($event) {
                    this.totalLikes += $event.isLiked ? +1 : -1;
                };
                AppComponent.prototype.toggleStar = function () {
                    this.isFavorite = !this.isFavorite;
                };
                ;
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>My First Angular 2 App</h1>\n    \n    <tweet *ngFor=\"#tweet of tweets; #i = index\" [authorIndex]=\"i\" [tweet]=\"tweet\"></tweet>\n    <first-form></first-form>     \n\n    <authors></authors>\n    <zippy></zippy>\n\n    <custom-validation-form></custom-validation-form>\n\n    <like [isLiked]='isLiked' (toggleLike)='likeToggled($event)'></like>\n     <span>{{ totalLikes }}</span>\n    \n    <i class='glyphicon' \n        [class.glyphicon-star]='isFavorite' \n        [class.glyphicon-star-empty]='!isFavorite'\n        (click)='toggleStar()'>\n        \n     <vote [voteCount]='voteCount' (vote)='voted($event)'></vote>\n     \n    ",
                        directives: [authors_component_1.AuthorsComponent, likeButton_component_1.LikeComponent, vote_component_1.VoteComponent, tweet_component_1.TweetComponent, zippy_component_1.ZippyComponent, firstForm_component_1.FirstFormComponent, customValidationForm_component_1.CustomValidationFormComponent],
                        providers: [tweets_service_1.TweetsService]
                    }), 
                    __metadata('design:paramtypes', [tweets_service_1.TweetsService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map