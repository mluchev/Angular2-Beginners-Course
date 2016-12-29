import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy-item',
    templateUrl:'app/zippy/zippyItem.template.html' ,
})
export class ZippyItemComponent {
    @Input() title;
    @Input() isExpanded;
}