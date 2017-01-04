System.register(['angular2/core', 'angular2/router', 'angular2/common', './emailValidator', '../users/users.service', 'angular2/http', './user'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, emailValidator_1, users_service_1, http_1, user_1;
    var CreateUpdateUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (emailValidator_1_1) {
                emailValidator_1 = emailValidator_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            CreateUpdateUserComponent = (function () {
                function CreateUpdateUserComponent(fb, _usersService, _router, _routeParams) {
                    this._usersService = _usersService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.user = new user_1.User();
                    this.form = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', emailValidator_1.EmailValidator.correctEmailFormat],
                        phone: [''],
                        address: fb.group({
                            street: [''],
                            suite: [''],
                            city: [''],
                            zipcode: [''],
                        })
                    });
                }
                CreateUpdateUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this.title = id ? 'Edit User' : 'New User';
                    if (id) {
                        this._usersService.getUser(id).subscribe(function (user) {
                            _this.user = user;
                        });
                    }
                };
                CreateUpdateUserComponent.prototype.submitForm = function () {
                    var _this = this;
                    this._usersService.addUser(this.form.value).subscribe(function (x) {
                        _this._router.navigate(['Users']);
                    });
                };
                CreateUpdateUserComponent.prototype.routerCanDeactivate = function (next, previous) {
                    if (this.form.dirty) {
                        return confirm("Are you sure?");
                    }
                };
                CreateUpdateUserComponent = __decorate([
                    core_1.Component({
                        selector: 'create-update-user',
                        templateUrl: 'app/createUpdateUser/createUpdateUser.component.html',
                        providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, users_service_1.UsersService, router_1.Router, router_1.RouteParams])
                ], CreateUpdateUserComponent);
                return CreateUpdateUserComponent;
            }());
            exports_1("CreateUpdateUserComponent", CreateUpdateUserComponent);
        }
    }
});
//# sourceMappingURL=createUpdateUser.component.js.map