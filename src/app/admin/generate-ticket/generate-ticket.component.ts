import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FetchMastersService } from './../../services/fetch-masters.service'
import { 
    FormsModule,
    FormGroup,
    FormControl,
    Validators} from '@angular/forms';
@Component({
  selector: 'app-generate-ticket',
  templateUrl: './generate-ticket.component.html',
  styleUrls: ['./generate-ticket.component.css']
})
export class GenerateTicketComponent implements OnInit {

  

  @ViewChild('enableUrban') urban!: ElementRef;
  @ViewChild('enableRural') rural!: ElementRef;
  distdata =null;
  // type:any;
  district_id="";
  block_id="";
  nagar_id="";
  village_id="";
  gp_id="";

  Ward_No=null;
  blockdata=null;
  wardData=null;
  nagardata = null;
  GPData=null;
  villageData=null;
  showNagar:boolean = false;
  showBlock:boolean = false;
  showGP:boolean = false;
  showVillages:boolean = false;
  showWard:boolean=false;
  distlist =null;

  showadd:boolean = false;
  showdept:boolean = false;

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
      this.showGP = false;
      this.showWard = false;
      this.showVillages = false;
  });
   }

   showdistrict(){
    this.distlist = this.distdata;
   }

   getshowadd(){
    // this.showadd = !this.showadd;
    this.showadd = false;
    this.showdept = true;

  }
  getshowdept(){
  //  this.showdept=!this.showdept;
  this.showadd = true;
  this.showdept = false;

  }

   getUrbanList(){
    this.showBlock = false;
    this.showNagar = true;
    this.fetch.getNagarList(this.district_id).subscribe((res:any)=>{
      console.log(res.data);
      this.nagardata = res.data;
      this.showGP = false;
      this.showWard = false;
      this.showVillages = false;
    });
   }

   getWardList(){
    console.log(this.district_id, this.nagar_id);
    this.fetch.getWardList(this.district_id, this.nagar_id).subscribe((res:any)=>{
      console.log(res.data);
      this.wardData = res.data;
      this.showWard = true;
      this.showGP = false;
      this.showVillages = false;
    });
   }

   getGPList(){
    console.log(this.block_id);
    this.fetch.getGPList(this.district_id, this.block_id).subscribe((res:any)=>{
      console.log(res.data);
      this.GPData = res.data;
      this.showWard = false;
      this.showGP = true;
      this.showVillages = false;
    });
   }

   getVillageList(){
    console.log("here : ", this.district_id, this.block_id, this.gp_id)
    this.fetch.getVillageList(this.district_id, this.block_id, this.gp_id).subscribe((res:any)=>{
      console.log(res);
      this.villageData = res.data;
      this.showWard = false;
      this.showGP = true;
      this.showVillages = true;
    });
   }

   enableNikay(){
    this.urban.nativeElement.disabled = false;
    this.rural.nativeElement.disabled = false;

   }


   userDetailsReg(data:any){
    console.warn(data);

   // let obj = {
   //   "name": "Siddharth Vaidya",
   //   "mobile":"9131354482",
   //   "dob":"01-06-1963",
   //   "email":"rahulvaidya90820@gmail.com",
   //   "gender":"M",
   //   "is_department":"Y"
   // }
   this.fetch.postUserData(data).subscribe((res:any)=>{
      console.warn(res);
     // console.log("Response ", this.objshow);
     // this.objshow= res.data;
   });
  }
}
