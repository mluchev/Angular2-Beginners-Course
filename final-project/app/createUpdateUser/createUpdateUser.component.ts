import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router, CanDeactivate, RouteParams } from 'angular2/router';
import { ControlGroup, Validators, FormBuilder } from 'angular2/common';
import { EmailValidator } from './emailValidator';
import { UsersService } from '../users/users.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import { User } from './user'

@Component({
    selector: 'create-update-user',
    templateUrl: 'app/createUpdateUser/createUpdateUser.component.html',
    providers: [UsersService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})
export class CreateUpdateUserComponent implements CanDeactivate, OnInit {
    form: ControlGroup;
    user = new User();
    title;

    constructor(fb: FormBuilder, private _usersService: UsersService, private _router: Router, private _routeParams: RouteParams) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', EmailValidator.correctEmailFormat],
            phone: [''],
            address: fb.group({
                street: [''],
                suite: [''],
                city: [''],
                zipcode: [''],
            })
        });
    }


    ngOnInit() {
        var id = this._routeParams.get('id');
        this.title = id ? 'Edit User' : 'New User';
        if (id) {
            this._usersService.getUser(id).subscribe(user => {
                this.user = user;
            }, err => {
                console.log(err);
                this._router.navigate(['NotFound']);
            });
        }
    }

    submitForm() {
        this._usersService.addUser(this.form.value).subscribe(x => {
            this._router.navigate(['Users']);
        }
        );
    }

    routerCanDeactivate(next, previous) {
        if (this.form.dirty) {
            return confirm("Are you sure?");
        }
    }
}

