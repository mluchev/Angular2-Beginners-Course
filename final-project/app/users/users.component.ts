import { Component, OnInit } from 'angular2/core';
import { UsersService } from './users.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'users',
    templateUrl: 'app/users/users.component.html',
    providers: [UsersService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})
export class UsersComponent implements OnInit {
    users=[];

    constructor(private _usersService: UsersService) {
    }

    ngOnInit() {
        this._usersService.getUsers().subscribe(res => {
            this.users = res;
            console.log(res);
        }, err => {
            console.log(err);
       });
    }
}


