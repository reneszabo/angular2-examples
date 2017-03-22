# Tutorial

## step 1

Create a new component

Folder structure is important, so you dont get lost on your own code

In this case, we are going to create a component that can be user by any page.

```bash
ng g component shared/list/list-example
```

## step 2

Edit the component TS, SCSS and HTML to handler your needs

**list-example.component.ts**

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss']
})
export class ListExampleComponent implements OnInit {

  // public listOfObjects: any;
  // public listOfObjects: Array<any>;
  public listOfObjects: Array<{name: string, description: string}>;

  constructor() { }

  ngOnInit() {
    this.listOfObjects = [
      { name: "Chris", description: "Destinated to code on the worst front end framework of all aka REACT" },
      { name: "Qiongrong", description: "Loves Vue, we all know way <3" },
      { name: "Shane", description: "Nobody cares about 3D rendering, drop three.js before is too late" }
    ];
  }

}
```

**list-example.component.html**

```html
<div class="row">
  <div class="col-md-4 col-sm-6" *ngFor="let user of listOfObjects">
    <div class="well well-sm">
      <h3>{{user.name}}</h3>
      <p>{{user.description}}</p>
    </div>
  </div>
</div>
```

**list-example.component.scss**

```scss
.well{
  min-height: 150px;
}
```

## step 3

User your new component in any page, for this example we are going to use the component in **my-home.component.html** and **my-error.component.html** just to see how it works.

**my-home.component.html**

we are going to use it 2 time

```html
<div class="container">
  <p>
    my-home works!
  </p>
  <app-list-example></app-list-example>
  <app-list-example></app-list-example>
</div>

```

**my-error.component.html**

we are going to use it 1 time only

```html
<p>
  my-error works!
</p>
<app-list-example></app-list-example>
```


