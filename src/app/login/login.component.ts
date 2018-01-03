import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AjaxService } from '../services';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private ajaxService: AjaxService) {

    }

    user: any = {};

    onLogin() {
        this.ajaxService.login(this.user.id, this.user.password);
    }
}