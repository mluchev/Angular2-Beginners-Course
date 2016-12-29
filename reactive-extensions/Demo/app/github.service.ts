import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private _base_url = 'https://api.github.com/users/';

    constructor(private _http: Http) {

    }

    getUser(username) {
        console.log(username);
        var url = this._base_url + username;

        return this._http.get(url).map(response => response.json());
    }

    getFollowers(username) {
        var url = this._base_url + username + '/followers';

        return this._http.get(url).map(response => response.json());
    }

    getUserAndFollowers(username) {
        var userStream = this.getUser(username);
        var followersStream = this.getFollowers(username);

        var observable = Observable.forkJoin(userStream, followersStream)
            .map(joined => new Object({ user: joined[0], followers: joined[1] }));

        return observable;
    }
}