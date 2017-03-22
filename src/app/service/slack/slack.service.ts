import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class SlackService {

  private baseUrl: string = 'URL-WILL-BE-PROVIDED';

  constructor(private http: Http) { }

  public postInSlack(obj: any) {
    let body = JSON.stringify({ channel: '#angular2', username: obj.name , text: obj.description }); // create the object as slack wants it
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(this.baseUrl, body, options);
  }

}
