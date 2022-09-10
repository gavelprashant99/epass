import { Component, OnInit } from '@angular/core';
import { FetchMastersService } from './../../services/fetch-masters.service'
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  deplist = null;

  constructor(private fetch: FetchMastersService) { }

  ngOnInit(): void {
    
    this.fetch.getDepartmentlist().subscribe((res:any)=>{
      console.log(res.data);
      this.deplist = res.data;
    });
  }

}
