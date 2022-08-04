import { Component, OnInit } from '@angular/core';
import { FetchMastersService } from './../../services/fetch-masters.service'
@Component({
  selector: 'app-generate-ticket',
  templateUrl: './generate-ticket.component.html',
  styleUrls: ['./generate-ticket.component.css']
})
export class GenerateTicketComponent implements OnInit {
  districtData=null;

  constructor(private fetch: FetchMastersService) { }

  ngOnInit(): void {
    this.fetch.getDistrictList().subscribe((res:any)=>{
      console.log(res.data);
      this.districtData = res.data;
    });
  }
}


