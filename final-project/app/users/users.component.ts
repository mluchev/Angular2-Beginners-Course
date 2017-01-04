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
    users;

    constructor(private _usersService: UsersService) {
    }

    ngOnInit() {
        this._usersService.getUsers().subscribe(res => {
            this.users = res;
        }, err => {
            console.log(err);
        });
    }

    deleteUser(id) {
        var r = confirm("Are you sure?"),
            removedUser, index;
        if (r == true) {
            // the optimistic approach - remove the element from the table upfront
            this.users.forEach((user, i) => {
                if (user.id === id) {
                    index = i;
                    removedUser = user;
                    this.users.splice(i, 1);
                }
            });
            this._usersService.deleteUser(id).subscribe(() => {
                console.log('Successful delete!')
            }, err => {
                this.users.splice(index, 0, removedUser);
                console.log(err);
            });
        }
    }
}


