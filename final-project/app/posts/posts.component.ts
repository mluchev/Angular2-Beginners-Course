import { Component, OnInit } from 'angular2/core';
import { PostsService } from './posts.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import {SpinnerComponent} from '../spinner/spinner.component'

@Component({
    selector: 'posts',
    templateUrl: 'app/posts/posts.component.html',
    providers: [PostsService, HTTP_PROVIDERS],
    directives: [SpinnerComponent]
})
export class PostsComponent implements OnInit {
    posts;
    isLoadingPosts;
    isLoadingComments;
    selectedPost;

    constructor(private _postsService: PostsService) {
    }

    ngOnInit() {
        this.loadPosts();
    }

    loadPosts() {
        this.isLoadingPosts = true;
        this._postsService.getPosts().subscribe(posts => {
            this.posts = posts;
             this.isLoadingPosts = false;
        });
    }
    
    selectPost(post) {
        this.selectedPost = post;
        this.isLoadingComments = true;
        this._postsService.getComments(post.id).subscribe(comments => {
            this.selectedPost.comments = comments;
            this.isLoadingComments = false;
        });
    }
}


