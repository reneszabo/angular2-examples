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
