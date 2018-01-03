import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AjaxService {
    
    private URL : string = 'http://localhost/';
    private HEADER : Headers = new Headers();

    constructor(private http : Http) {
        this.http = http;
        this.HEADER.append('Content-Type', 'application/json');

        // xhr.withCredentials 을 true로 변경
        let _build = (<any> http)._backend._browserXHR.build;
        (<any> http)._backend._browserXHR.build = () => {
            let _xhr =  _build();
             _xhr.withCredentials = true;
            return _xhr;
        };
    }

    login(id: string, password: string) {
        console.log(id);
    }

}