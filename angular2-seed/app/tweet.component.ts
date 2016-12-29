
import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {LikeComponent} from './likeButton.component'
import {TweetsService} from './tweets.service'

@Component({
    selector: 'tweet',
    templateUrl: 'app/tweet.template.html',
    styles: [`
        .tweet {
            padding: 15px 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 20px 10px;
        }
        
        .tweeterHandle {
            color: #ccc;
            font-size: 13px;
            margin-left: 15px;
        }
    `],
    directives: [LikeComponent]
})
export class TweetComponent {
    @Input() tweet;
    @Input() authorIndex;


    // alert(authorIndex);

    likeToggled($event) {
        this.tweet.totalLikes += $event.isLiked ? +1 : -1;
        console.log(this.authorIndex);
    }
    
}


