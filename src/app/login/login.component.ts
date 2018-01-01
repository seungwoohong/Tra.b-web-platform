import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor() {

    }

    login(id: string, password: string) {
        console.log('id',id);
        console.log('password',password);
    }
}