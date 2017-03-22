# Tutorial

## step 1

Outputs lets us communicate to the parent that some action has been triggered. 

We are going to add to our list component **list-example.component.ts** a output on who has been clicked.
This action is done by 2 Functions one called **@Output()** function and a Event Emitter Class **EventEmitter**. 

We also need to sense the click on the component it self, so we are going to add a click event to the box in **list-example.component.html**

**list-example.component.ts**

```typescript
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss']
})
export class ListExampleComponent implements OnInit {
  // public listOfObjects: any;
  // public listOfObjects: Array<any>;
  @Input() public listOfObjects: Array<{name: string, description: string}>;
  @Output() onClickBox = new EventEmitter<{name: string, description: string}>();
  constructor() {
    this.listOfObjects = [
      { name: "Chris", description: "Designated to code on the worst front end framework of all aka REACT" },
      { name: "Qiongrong", description: "Loves Vue, we all know way <3" },
      { name: "Shane", description: "Nobody cares about 3D rendering, drop three.js before is too late" }
    ];
  }
  ngOnInit() {
    // Move away this.listOfObject because inputs gets passed before INIT gets called. This avoids override.
  }

  private onClickSendInfo(obj: any) {
    this.onClickBox.emit(obj);
  }
}
```

**list-example.component.html**

```html
<div class="row">
  <div class="col-md-4 col-sm-6" *ngFor="let user of listOfObjects">
    <div class="well well-sm" (click)="onClickSendInfo(user)">
      <h3>{{user.name}}</h3>
      <p>{{user.description}}</p>
    </div>
  </div>
</div>
```

## step 2

In our parent class, we are going to create a function to handle the emitted event. For the example we are going to use **my-home.component.ts**

On the template we are going to bind the event emitter to the function handling your event. For the example we are going to listen in **my-home.component.html** on our second component.
  
**my-home.component.ts**
  
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss']
})
export class MyHomeComponent implements OnInit {

  public users: Array<{name: string, description: string}>;
  public selectedUser: any;


  constructor() { }

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
  }

}

```  

**my-home.component.html**

```html
<div class="container">
  <p>
    my-home works!
  </p>
  <app-list-example></app-list-example>
  <app-list-example [listOfObjects]="users" (onClickBox)="getClickedElement($event)"></app-list-example>
  <div *ngIf="selectedUser">
    <h2>selected</h2>
    <div class="well well-sm">
      <h3>{{selectedUser.name}}</h3>
      <p>{{selectedUser.description}}</p>
    </div>
  </div>
</div>

```


