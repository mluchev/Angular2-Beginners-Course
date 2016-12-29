import {Component} from 'angular2/core';
import {ZippyItemComponent} from './zippyItem.component'

@Component({
    selector: 'zippy',
    templateUrl: 'app/zippy/zippy.template.html',
    directives: [ZippyItemComponent],
})
export class ZippyComponent {
    zippyItems = [{title: 'Item1', content: 'Content1'}, {title: 'Item2', content: 'Content2'}];
    expandedItemIndex;

    expandItem(newIndex) {
        this.expandedItemIndex = (this.expandedItemIndex === newIndex) ? undefined : newIndex;
    };
}