import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NavbarComponent} from './navbar/navbar.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';


@RouteConfig([
    {
        path: '/users',
        name: 'Users',
        component: UsersComponent,
        useAsDefault: true
    },
    {
        path: '/posts',
        name: 'Posts',
        component: PostsComponent
    },
    {
        path: '/*other',
        name: 'Other',
        redirectTo: ['Users']
    },
])
@Component({
    selector: 'my-app',
    template: '<navbar></navbar><router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
export class AppComponent { }


