System.register(['angular2/core', 'angular2/router', './shared/navbar/navbar.component', './users/users.component', './createUpdateUser/createUpdateUser.component', './posts/posts.component', './shared/notFound/notFound.component'], function(exports_1, context_1) {
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
    var core_1, router_1, navbar_component_1, users_component_1, createUpdateUser_component_1, posts_component_1, notFound_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (createUpdateUser_component_1_1) {
                createUpdateUser_component_1 = createUpdateUser_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (notFound_component_1_1) {
                notFound_component_1 = notFound_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/users',
                            name: 'Users',
                            component: users_component_1.UsersComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/users/new',
                            name: 'NewUser',
                            component: createUpdateUser_component_1.CreateUpdateUserComponent,
                        },
                        {
                            path: '/users/:id',
                            name: 'EditUser',
                            component: createUpdateUser_component_1.CreateUpdateUserComponent,
                        },
                        {
                            path: '/posts',
                            name: 'Posts',
                            component: posts_component_1.PostsComponent
                        },
                        {
                            path: '/not-found',
                            name: 'NotFound',
                            component: notFound_component_1.NotFoundComponent
                        },
                        {
                            path: '/*other',
                            name: 'Other',
                            redirectTo: ['Posts']
                        },
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "<navbar></navbar>\n    <div class=\"container\">\n    <router-outlet></router-outlet>\n    </div>",
                        directives: [router_1.ROUTER_DIRECTIVES, navbar_component_1.NavbarComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map