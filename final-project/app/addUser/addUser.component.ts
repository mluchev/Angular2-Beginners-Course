import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {ControlGroup, Validators, FormBuilder} from 'angular2/common';
import {EmailValidator} from './emailValidator';

@Component({
    selector: 'add-user',
    templateUrl: 'app/addUser/addUser.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AddUserComponent {
    form: ControlGroup;
    
    constructor(fb: FormBuilder){
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', EmailValidator.correctEmailFormat],
            phone: [''],
            address: fb.group({
                street: [''],
                suite: [''],
                city: [''],
                zipCode: [''],
            })
        });
    }

    submitForm() {
        console.log(this.form.value);
    }
}

}