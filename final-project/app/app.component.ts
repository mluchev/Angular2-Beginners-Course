import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { CreateUpdateUserComponent } from './createUpdateUser/createUpdateUser.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './shared/notFound/notFound.component';


@RouteConfig([
    {
        path: '/users',
        name: 'Users',
        component: UsersComponent,
        useAsDefault: true
    },
    {
        path: '/users/new',
        name: 'NewUser',
        component: CreateUpdateUserComponent,
    },
    {
        path: '/users/:id',
        name: 'EditUser',
        component: CreateUpdateUserComponent,
    },
    {
        path: '/posts',
        name: 'Posts',
        component: PostsComponent
    },
    {
        path: '/not-found',
        name: 'NotFound',
        component: NotFoundComponent
    },
    {
        path: '/*other',
        name: 'Other',
        redirectTo: ['Posts']
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


