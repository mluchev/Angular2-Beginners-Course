
import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'vote',
    template: `
    <div class="container">
        <i
        class="glyphicon glyphicon-menu-up" 
        [class.highlighted]="sumOfVotes === 1"
        (click)="voteAction(1)">
        </i>
        <span>{{voteCount}}</span>
        <i
        class="glyphicon glyphicon-menu-down" 
        [class.highlighted]="sumOfVotes === -1"
        (click)="voteAction(-1)">
        </i>
    </div>
    `,
    styles: [`
        .container {
            width: 20px;
            text-align: center;
        }
    
        i {
            cursor: pointer;
        }
        
        .highlighted {
            color: orange;
        }   
    `]
})
export class VoteComponent {
    sumOfVotes = 0;
    @Input() voteCount;
    @Output() vote = new EventEmitter();


    voteAction(myVote: number) {
        if (this.sumOfVotes + myVote >= -1 && this.sumOfVotes + myVote <= 1) {
            this.sumOfVotes += myVote;
            this.vote.emit({ myVote: myVote });
        }
    }
}