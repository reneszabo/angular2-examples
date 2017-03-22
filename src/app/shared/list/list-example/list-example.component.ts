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
