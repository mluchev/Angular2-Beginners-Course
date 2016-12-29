import {Component} from 'angular2/core';

@Component({
    selector: 'first-form',
    templateUrl: 'app/firstForm/firstForm.template.html',
})
export class FirstFormComponent {
    submitForm(form) {
        console.log(form);
    }
    // zippyItems = [{title: 'Item1', content: 'Content1'}, {title: 'Item2', content: 'Content2'}];
    // expandedItemIndex;

    // expandItem(newIndex) {
    //     this.expandedItemIndex = (this.expandedItemIndex === newIndex) ? undefined : newIndex;
    // };
}