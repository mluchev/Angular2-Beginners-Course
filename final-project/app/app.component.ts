import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NavbarComponent} from './navbar/navbar.component';
import {UsersComponent} from './users/users.component';
import {AddUserComponent} from './addUser/addUser.component';
import {PostsComponent} from './posts/posts.component';


@RouteConfig([
    {
        path: '/users',
        name: 'Users',
        component: UsersComponent,
        useAsDefault: true
    },
    {
        path: '/add-user',
        name: 'AddUser',
        component: AddUserComponent,
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
    template: `<navbar></navbar>
    <div class="container">
    <router-outlet></router-outlet>
    </div>`,
    directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
export class AppComponent { }


