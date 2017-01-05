System.register(['angular2/core', './posts.service', '../users/users.service', 'angular2/http', '../spinner/spinner.component', '../pagination/pagination.component'], function(exports_1, context_1) {
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
    var core_1, posts_service_1, users_service_1, http_1, spinner_component_1, pagination_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postsService, _usersService) {
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    this.pageSize = 10;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.loadPosts();
                    this.loadUsersInDropdown();
                };
                PostsComponent.prototype.loadPosts = function (userId) {
                    var _this = this;
                    this.selectedPost = null;
                    this.isLoadingPosts = true;
                    this._postsService.getPosts(userId).subscribe(function (posts) {
                        _this.posts = posts;
                        _this.postsInPage = _this.getPostsInPage(0);
                        _this.isLoadingPosts = false;
                    });
                };
                PostsComponent.prototype.loadUsersInDropdown = function () {
                    var _this = this;
                    this._usersService.getUsers().subscribe(function (users) {
                        _this.users = users;
                    });
                };
                PostsComponent.prototype.selectPost = function (post) {
                    var _this = this;
                    this.selectedPost = post;
                    this.isLoadingComments = true;
                    this._postsService.getComments(post.id).subscribe(function (comments) {
                        _this.selectedPost.comments = comments;
                        _this.isLoadingComments = false;
                    });
                };
                PostsComponent.prototype.getPostsInPage = function (pageIndex) {
                    var firstElemIndex = pageIndex * this.pageSize + 1, lastElemIndex = Math.min((pageIndex + 1) * this.pageSize + 1, this.posts.length);
                    return this.posts.slice(firstElemIndex, lastElemIndex);
                };
                PostsComponent.prototype.reloadPostsInPage = function (e) {
                    this.postsInPage = this.getPostsInPage(e.pageIndex);
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        templateUrl: 'app/posts/posts.component.html',
                        providers: [posts_service_1.PostsService, users_service_1.UsersService, http_1.HTTP_PROVIDERS],
                        directives: [spinner_component_1.SpinnerComponent, pagination_component_1.PaginationComponent]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map