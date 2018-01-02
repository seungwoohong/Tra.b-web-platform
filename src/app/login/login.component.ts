import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor() {

    }

    user: any = {};

    onLogin() {
        console.log('id',this.user.id);
        console.log('password',this.user.password);
    }
}