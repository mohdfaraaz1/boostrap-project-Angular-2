import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewserver = false;

  constructor() {

   }

  ngOnInit() {
    setTimeout(() => {
      this.allowNewserver = true;
    }, 2000);
  }

}
