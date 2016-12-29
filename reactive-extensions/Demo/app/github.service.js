System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1;
    var GithubService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            // import 'rxjs/add/operator/debounceTime';
            // import 'rxjs/add/operator/map';
            GithubService = (function () {
                function GithubService(_http) {
                    this._http = _http;
                    this._base_url = 'https://api.github.com/users/';
                }
                GithubService.prototype.getUser = function (username) {
                    console.log(username);
                    var url = this._base_url + username;
                    return this._http.get(url).map(function (response) { return response.json(); });
                };
                GithubService.prototype.getFollowers = function (username) {
                    var url = this._base_url + username + '/followers';
                    return this._http.get(url).map(function (response) { return response.json(); });
                };
                GithubService.prototype.getUserAndFollowers = function (username) {
                    var userStream = this.getUser(username);
                    var followersStream = this.getFollowers(username);
                    var observable = Rx_1.Observable.forkJoin(userStream, followersStream)
                        .map(function (joined) { return new Object({ user: joined[0], followers: joined[1] }); });
                    return observable;
                };
                GithubService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GithubService);
                return GithubService;
            }());
            exports_1("GithubService", GithubService);
        }
    }
});
//# sourceMappingURL=github.service.js.map