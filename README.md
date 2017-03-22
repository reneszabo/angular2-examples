# Tutorial

## step 1

Services are meant mostly to interact with APIs, but they can have other uses.

Lets create a Service to send information to SLACK XD

```bash
  ng g service service/slack/slack
```

## step 2

Add the logic to sent information to slack, Webhook url will be provided in class.
Edit the new file created with cli, **slack.service.ts**

```typescript
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

```

## step 3

Add reference to our service in the **app.module.ts** under providers we also need to import the class.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHomeComponent } from './pages/home/my-home/my-home.component';
import { MyAboutComponent } from './pages/about/my-about/my-about.component';
import { MyErrorComponent } from './pages/errors/my-error/my-error.component';
import { ListExampleComponent } from './shared/list/list-example/list-example.component';
import { SlackService } from "./service/slack/slack.service";

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyAboutComponent,
    MyErrorComponent,
    ListExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SlackService],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Notice we added the import 

```typescript
import { SlackService } from "./service/slack/slack.service";
```

and also the provider 

```typescript
 providers: [SlackService],
```

## step 4

Since we have a component that emits a selected object, we are going to take that object and send it to slack.

Service will be used in **my-home.component.ts**

```typescript
import { Component, OnInit } from '@angular/core';
import {SlackService} from "../../../service/slack/slack.service";

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss']
})
export class MyHomeComponent implements OnInit {

  public users: Array<{name: string, description: string}>;
  public selectedUser: any;


  constructor(private _slackService: SlackService) { }

  ngOnInit() {
    this.users = [
      { name: "Rene", description: "Using best front end ever" },
      { name: "Jason", description: "El negro ! XD" },
      { name: "Tyler", description: "Secret developer, knows more that he shows" },
      { name: "Abby", description: "Future CEO of shopify" }
    ];
  }

  private getClickedElement(obj: any) {
    this.selectedUser = obj;
    this._slackService.postInSlack(obj).subscribe((data) => {
      // Success
      console.log(data);
    }, (error) => {
      // Error
      console.log(error);
    }, () => {
      // run on both success or error
      console.log('run if success or error');
    });
  }

}

```

Notice we added the import to out service 

```typescript
import {SlackService} from "../../../service/slack/slack.service";
```

we declared the service in the component constructor

```typescript
constructor(private _slackService: SlackService) { }
```

and finally used the service on the **getClickedElement** function

```typescript
private getClickedElement(obj: any) {
    this.selectedUser = obj;
    this._slackService.postInSlack(obj).subscribe((data) => {
      // Success
      console.log(data);
    }, (error) => {
      // Error
      console.log(error);
    }, () => {
      // run on both success or error
      console.log('run if success or error');
    });
  }
```
