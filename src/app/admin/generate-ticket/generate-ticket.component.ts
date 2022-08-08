import { Component, OnInit } from '@angular/core';
import { FetchMastersService } from './../../services/fetch-masters.service'
@Component({
  selector: 'app-generate-ticket',
  templateUrl: './generate-ticket.component.html',
  styleUrls: ['./generate-ticket.component.css']
})
export class GenerateTicketComponent implements OnInit {
   
  distdata =null;
  district_id="";
  Ward_No="";
  blockdata=null;
  wardData=null;
  nagardata = null;
  showNagar:boolean = false;
  showBlock:boolean = false;

  distlist =null;
  
  constructor(private fetch: FetchMastersService) { }

  ngOnInit(): void {
    this.fetch.getDistrictList().subscribe((res:any)=>{
      console.log(res.data);
      this.distdata = res.data;
    });
  }
   
  getBlockList(){ 
    console.log(this.district_id);
    this.showNagar = false;
    this.showBlock = true;
    this.fetch.getBlockList(this.district_id).subscribe((res:any)=>{
      console.log(res.data);
      this.blockdata = res.data;
  });
   }

   showdistrict(){
    this.distlist = this.distdata;
   }

   getUrbanList(){
    this.showBlock = false;
    this.showNagar = true;
    this.fetch.getNagarList(this.district_id).subscribe((res:any)=>{
      console.log(res.data);
      this.nagardata = res.data;
    });
   }

   getWardList(){ 
    console.log(this.Ward_No);
    // this.showNagar = false;
    // this.showBlock = true;
    this.fetch.getWardList(this.Ward_No).subscribe((res:any)=>{
      console.log(res.data);
      this.wardData = res.data;
  });
   }

}