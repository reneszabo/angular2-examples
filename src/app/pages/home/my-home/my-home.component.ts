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
