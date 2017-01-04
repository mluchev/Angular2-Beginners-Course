import { Control, ControlGroup } from 'angular2/common';

export class EmailValidator {
    static correctEmailFormat(control: Control) {
        var errorObject = { incorrectEmailFormat: true },
            re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(control.value)) {
            return errorObject;
        }

        return null;
    }

} 