import { Component, OnInit, OnChanges } from 'angular2/core';
import { PostsService } from './posts.service';
import { UsersService } from '../users/users.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import { SpinnerComponent } from '../spinner/spinner.component'
import { PaginationComponent } from '../pagination/pagination.component'

@Component({
    selector: 'posts',
    templateUrl: 'app/posts/posts.component.html',
    providers: [PostsService, UsersService, HTTP_PROVIDERS],
    directives: [SpinnerComponent, PaginationComponent]
})
export class PostsComponent implements OnInit {
    posts;
    postsInPage;
    users;
    selectedPost;
    showPaginationComponent;
    isLoadingPosts;
    isLoadingComments;
    pageSize = 10;

    constructor(private _postsService: PostsService, private _usersService: UsersService) { }

    ngOnInit() {
        this.loadPosts();
        this.loadUsersInDropdown();
    }

    private loadPosts(userId?) {
        this.selectedPost = null;
        this.isLoadingPosts = true;
        this._postsService.getPosts(userId).subscribe(posts => {
            this.posts = posts;
            this.postsInPage = this.getPostsInPage(0);
            this.isLoadingPosts = false;
        });
    }

    private loadUsersInDropdown() {
        this._usersService.getUsers().subscribe(users => {
            this.users = users;
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

    private getPostsInPage(pageIndex) {
        var firstElemIndex = pageIndex * this.pageSize + 1,
            lastElemIndex =  Math.min((pageIndex + 1) * this.pageSize + 1, this.posts.length);

        return this.posts.slice(firstElemIndex, lastElemIndex);
    }

    reloadPostsInPage(e) {
        this.postsInPage = this.getPostsInPage(e.pageIndex);
    }
}


