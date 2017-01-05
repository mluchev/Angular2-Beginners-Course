import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    private _base_url = 'https://jsonplaceholder.typicode.com/';

    constructor(private _http: Http) {

    }

    getPosts(userId?) {
        var url = this._base_url + 'posts';
        url = (userId || userId === 0) ? (url + '?userId=' + userId) : url;

        return this._http.get(url).map(response => response.json());
    }

    getComments(id) {
        var url = this._base_url + 'posts/' + id + '/comments';

        return this._http.get(url).map(response => response.json());
    }
}