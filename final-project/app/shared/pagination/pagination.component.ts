import { Component, Input, Output, EventEmitter, OnChanges } from 'angular2/core';

@Component({
    selector: 'pagination',
    templateUrl: 'app/pagination/pagination.component.html',
})
export class PaginationComponent implements OnChanges {
    @Input() pageSize;
    @Input() items;
    @Output() pageChanged = new EventEmitter();
    pageIndexes;
    selectedPageIndex = 0;
    numOfPages;

    ngOnChanges() {
        this.numOfPages = this.items ? (this.items.length / this.pageSize) : 0;
        this.pageIndexes = new Array(this.numOfPages);
    }

    changePageAction(pageIndex: number) {
        if (pageIndex < 0 || pageIndex === this.numOfPages) { return; }

        this.selectedPageIndex = pageIndex;
        this.pageChanged.emit({ pageIndex: pageIndex });
    }
}


