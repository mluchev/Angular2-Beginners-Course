import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators, Control} from 'angular2/common';
import {CustomValidators} from './customValidators' 

@Component({
    selector: 'custom-validation-form',
    templateUrl: 'app/customValidationForm/customValidationForm.template.html',
})
export class CustomValidationFormComponent {
    changePasswordForm: ControlGroup;

    constructor(fb: FormBuilder){   
        let that = this;

        this.changePasswordForm = fb.group({
            currentPass: ['', Validators.required],
            newPass: ['', Validators.required],
            confirmPass: ['', Validators.required]
        }, { 
            validator: CustomValidators.confirmPassMatch
        });
    } 

    
        //Validators.compose([v1, v2]),
        //Validators.composeAsync([v3, v4])

    submitForm() {
        let insertedCurrentPass = this.changePasswordForm.find('currentPass'),
        actualCurrentPass = '1111';

        if (insertedCurrentPass.value !== actualCurrentPass) {
            insertedCurrentPass.setErrors({wrongCurrentPass: true});
        }

        if(this.changePasswordForm.valid) {
            alert('Form submitted successfully!');
        }

        console.log(this.changePasswordForm);
    }
}