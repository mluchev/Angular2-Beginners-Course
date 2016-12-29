import {Component} from 'angular2/core';
import {AuthorsService} from './authors.service'

@Component({
    selector: 'authors',
    template: `<ul>
        <li *ngFor="#author of authors">{{author}}</li>
    </ul>`,
    providers: [AuthorsService]
})
export class AuthorsComponent {
    authors;

    constructor(authorsService: AuthorsService) {
        this.authors = authorsService.getAuthors();
    }
}