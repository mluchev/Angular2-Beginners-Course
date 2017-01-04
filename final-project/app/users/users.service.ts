import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    private _base_url = 'https://jsonplaceholder.typicode.com/';

    constructor(private _http: Http) {

    }

    getUsers() {
        var url = this._base_url + 'users';

        return this._http.get(url).map(response => response.json());
    }

    getUser(id) {
        var url = this._base_url + 'users/' + id;

        return this._http.get(url).map(response => response.json());
    }

    addUser(user) {
        var url = this._base_url + 'users';

        return this._http.post(url, JSON.stringify(user)).map(response => response.json());
    }
}