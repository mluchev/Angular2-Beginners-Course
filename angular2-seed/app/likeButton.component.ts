
import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'like',
    template: `
    <i
       class="glyphicon glyphicon-heart" 
       [class.highlighted]="isLiked"
       (click)="onClick()">
    </i>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        
        .highlighted {
            color: deeppink;
        }   
    `]
})
export class LikeComponent {
    @Input() isLiked = false;
    @Output() toggleLike = new EventEmitter();
    
    
    onClick(){
        this.isLiked = !this.isLiked;
        this.toggleLike.emit({isLiked: this.isLiked});
    }
}