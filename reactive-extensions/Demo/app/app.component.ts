/// <reference path="../typings/tsd.d.ts" />

import { Component } from 'angular2/core';
import { FormBuilder, ControlGroup } from 'angular2/common';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/fromArray';
// import 'rxjs/add/observable/fromEvent';
import { HTTP_PROVIDERS } from 'angular2/http';
import { GithubService } from './github.service';
import { OnInit } from 'angular2/core';

import { ObservablesExcerciseComponent } from './observablesExcercise.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    providers: [GithubService, HTTP_PROVIDERS],
    directives: [ObservablesExcerciseComponent]
})
export class AppComponent implements OnInit {
    form: ControlGroup;
    search;
    user;
    followers;
    isLoading = false;

    constructor(fb: FormBuilder, private _gs: GithubService) {
        this.form = fb.group({
            search: []
        });



        // Observables code


        // var search = this.form.find('search');
        // search.valueChanges
        //     .debounceTime(400)
        //     .map(str => (<string>str).replace(' ', '-'))
        //     .subscribe(input => console.log(input));



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

    ngOnInit() {
        this.search = this.form.find('search');
        this.search.valueChanges
            .debounceTime(400)
            .subscribe(input => {
                if(!input) return;
                
                this.isLoading = true;
                this._gs.getUserAndFollowers(input).subscribe(res => {
                    this.user = res.user;
                    this.followers = res.followers;
                }, err => {
                    console.log(err);
                },
                () => this.isLoading = false)
            });
    }
}