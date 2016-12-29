import {Component} from 'angular2/core';
import {AuthorsComponent} from './authors.component'
import {LikeComponent} from './likeButton.component'
import {VoteComponent} from './vote.component'
import {TweetComponent} from './tweet.component'
import {TweetsService} from './tweets.service'
import {ZippyComponent} from './zippy/zippy.component'
import {FirstFormComponent} from './firstForm/firstForm.component'
import {CustomValidationFormComponent} from './customValidationForm/customValidationForm.component'

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    
    <tweet *ngFor="#tweet of tweets; #i = index" [authorIndex]="i" [tweet]="tweet"></tweet>
    <first-form></first-form>     

    <authors></authors>
    <zippy></zippy>

    <custom-validation-form></custom-validation-form>

    <like [isLiked]='isLiked' (toggleLike)='likeToggled($event)'></like>
     <span>{{ totalLikes }}</span>
    
    <i class='glyphicon' 
        [class.glyphicon-star]='isFavorite' 
        [class.glyphicon-star-empty]='!isFavorite'
        (click)='toggleStar()'>
        
     <vote [voteCount]='voteCount' (vote)='voted($event)'></vote>
     
    `,
    directives: [AuthorsComponent, LikeComponent, VoteComponent, TweetComponent, ZippyComponent, FirstFormComponent, CustomValidationFormComponent],
    providers: [TweetsService]
})
export class AppComponent {
    // tweets = [{author: 'Martin'},{author: 'Martin'},{author: 'Martin'}];

    tweets: Object[];

    isLiked = false;
    totalLikes = 10;

    voteCount = 32;

    voted($event) {
        this.voteCount += $event.myVote;
    }

    likeToggled($event) {
        this.totalLikes += $event.isLiked ? +1 : -1;
    }


    isFavorite = false;

    toggleStar() {
        this.isFavorite = !this.isFavorite;
    };
    

    constructor(tweetsService: TweetsService) {
        this.tweets = tweetsService.getTweets();
    }



}