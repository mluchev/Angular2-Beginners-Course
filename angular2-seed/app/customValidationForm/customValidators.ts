import {ControlGroup} from 'angular2/common';

export class CustomValidators {
    static confirmPassMatch(cg: ControlGroup) {
        let newPass = cg.find('newPass').value,
            confirmPass = cg.find('confirmPass').value;

        if (newPass !== confirmPass)
            return { passwordMismatch: true };
        return null;
    }

    // static isCurrentPassCorrect(control: Control) {
    //     console.log(control);

    //     return new Promise((resolve, reject) => {
    //         if (newPass !== control.value)
    //             resolve({ passwordMismatch: true });
    //         resolve(null);
    //     });
    // }
} 