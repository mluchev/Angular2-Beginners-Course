/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/common', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var ObservablesExcerciseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            // import 'rxjs/add/operator/fromArray';
            // import 'rxjs/add/observable/fromEvent';
            ObservablesExcerciseComponent = (function () {
                function ObservablesExcerciseComponent(fb) {
                    this.form = fb.group({
                        search: []
                    });
                    // Observables code
                    var search = this.form.find('search');
                    search.valueChanges
                        .debounceTime(400)
                        .map(function (str) { return str.replace(' ', '-'); })
                        .subscribe(function (input) { return console.log(input); });
                    // setData(x) {
                    //     _gs.getUserAndFollowers(x).subscribe(res => {
                    //         that.user = res.user;
                    //         that.followers = res.followers;
                    //     })
                    // }
                    // // observable from array 
                    // var startDates = [];
                    // var startDate = new Date();	//	Assuming	today	for	simplicity
                    // for (var day = -2; day <= 2; day++) {
                    //     var date = new Date(
                    //         startDate.getFullYear(),
                    //         startDate.getMonth(),
                    //         startDate.getDate() + day);
                    //     startDates.push(date);
                    // }
                    // var observable = Observable.fromArray(startDates)
                    //     .map(date => {
                    //         console.log('Getting deals for date ' + date);
                    //         return [1, 2, 3];
                    //     });
                    // var	observable	= Observable.empty();
                    // var observable = Observable.range(1, 5);
                    // var observable = Observable.of([1, 2, 3]);
                    // observable.subscribe(x => console.log(x));
                    // var observable = Observable.interval(1000);
                    // observable
                    // .map(x => {
                    //     console.log('callinng the server to get latest news');
                    //     return [1, 2, 3];
                    // })
                    // .subscribe(news => console.log(news));
                    // var userStream = Observable
                    //     .of({ userId: 1, username: 'mosh' })
                    //     .delay(200);
                    // var tweetsStream = Observable.of([1, 2, 3]).delay(1500);
                    // Observable.forkJoin(userStream, tweetsStream)
                    //     .map(joined => new Object( { user: joined[0], tweets: joined[1] }))
                    //     .subscribe(result => console.log(result));
                    // var observable = Observable.throw(new Error("Sth failed"));
                    // observable.subscribe(x => console.log(x), error => console.log(error));
                    // var counter = 0;
                    // var ajaxCall = Observable
                    //     .of('url')
                    //     .flatMap(() => {
                    //         if (++counter < 2)
                    //             return Observable.throw(new Error("Request	failed"));
                    //         return Observable.of([1, 2, 3]);
                    //     });
                    // ajaxCall
                    // .retry(3)
                    // .subscribe(
                    //     x => console.log(x),
                    //     error => console.error(error)
                    // );
                    // var remoteDataStream = Observable.throw(new Error("Something failed."));
                    // // var remoteDataStream = Observable.of([4, 5, 6]);
                    // remoteDataStream
                    //     .catch(err => {
                    //         return Observable.of([1, 2, 3]);
                    //     })
                    //     .subscribe(x => console.log(x));
                    // var remoteDataStream = Observable.of([1, 2, 3]).delay(5000);
                    // remoteDataStream
                    //     .timeout(1000)
                    //     .subscribe(
                    //         x => console.log(x),
                    //         error => console.error(error)
                    //     );
                    // var observable = Observable.fromArray([1, 2, 3]).delay(2000);
                    // var observable = Observable.fromArray([1, 2, 3]).delay(2000);
                    // var observable = Observable.fromArray([1, 2, 3]).delay(2000);
                    // observable.subscribe(x => console.log(x),
                    //     err => console.log(err),
                    //     () => console.log('completed!'));
                    // $(window).load(function () {
                    //     var keyups = Observable.fromEvent($('#search'), 'keyup')
                    //         .map(e => e.target.value)
                    //         .filter(text => text.length > 3)
                    //         .debounceTime(400)
                    //         .distinctUntilChanged()
                    //         .flatMap(searchTerm => {
                    //             let url = 'https://api.spotify.com/v1/search?type=artist&q=' + searchTerm;
                    //             let promise = $.getJSON(url);
                    //             return Observable.fromPromise(promise);
                    //         });
                    //     keyups.subscribe(data => console.log(data));
                    // });
                    // let debounced = _.debounce(function (text) {
                    //     let url = 'https://api.spotify.com/v1/search?type=artist&q=' + text;
                    //     if (text.length < 3) return;
                    //     $.getJSON(url, function (artists) {
                    //         console.log(artists);
                    //     });
                    // }, 400);
                    // $( window ).load(function() {
                    //     $('#search').keyup(function (e) {
                    //     let text = e.target.value;
                    //      debounced(text);
                    //     });
                    // });
                }
                ObservablesExcerciseComponent = __decorate([
                    core_1.Component({
                        selector: 'observables-excercise',
                        template: "<form [ngFormModel]=\"form\">\n    Observables Excercise Search:\n    <input type=\"text\" ngControl=\"search\" #searchInput=\"ngForm\"/></form>"
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ObservablesExcerciseComponent);
                return ObservablesExcerciseComponent;
            }());
            exports_1("ObservablesExcerciseComponent", ObservablesExcerciseComponent);
        }
    }
});
//# sourceMappingURL=observablesExcercise.component.js.map