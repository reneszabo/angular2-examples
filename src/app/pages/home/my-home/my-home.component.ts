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
