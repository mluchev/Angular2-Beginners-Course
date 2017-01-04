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