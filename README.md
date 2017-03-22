# Tutorial

## step 1

Inputs are useful if you want to render a component base on changing variables. 

We are going to leave default array, but we are going to also allow the array to be swapped by an external variable. 
  
Inputs are inserted before INIT, therefor we are going to move out init declariation for **listOfObjects** to de constructor and we are going to append a function **@Input()** on out component **list-example.component.ts**

```typescript
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss']
})
export class ListExampleComponent implements OnInit {
  // public listOfObjects: any;
  // public listOfObjects: Array<any>;
  @Input() public listOfObjects: Array<{name: string, description: string}>;
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
}
```

## step 2

Create a separate array, with the data you want the component to render. In this example, create the new array in **my-home.component.ts**

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss']
})
export class MyHomeComponent implements OnInit {

  public users: Array<{name: string, description: string}>;

  constructor() { }

  ngOnInit() {
    this.users = [
      { name: "Rene", description: "Using best front end ever" },
      { name: "Jason", description: "El negro ! XD" },
      { name: "Tyler", description: "Secret developer, knows more that he shows" },
      { name: "Abby", description: "Future CEO of shopify" }
    ];
  }

}

```


## step 3

In the template we can tell the shared component we have an array for it. And we pass it using the same name we deplared the variable adding square brackets [variable-name] **[listOfObjects]="new array"**

```html
<div class="container">
  <p>
    my-home works!
  </p>
  <app-list-example></app-list-example>
  <app-list-example [listOfObjects]="users"></app-list-example>
</div>

```
