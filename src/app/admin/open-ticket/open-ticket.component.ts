import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-ticket',
  templateUrl: './open-ticket.component.html',
  styleUrls: ['./open-ticket.component.css']
})
export class OpenTicketComponent implements OnInit {
  myName:any = "Rahul";
  myText:any = "";
  constructor() { }

  ngOnInit(): void {
  }

  updateName() {
    this.myName = 'Lucifer';
    console.log("My value", this.myText);
  }
}
