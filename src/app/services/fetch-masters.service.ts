
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchMastersService {

  constructor(public http:HttpClient) { }

  getDistrictList(){
   return this.http.get('http://localhost:4001/master/district');
  }

  getBlockList(Id:string){
    return this.http.get('http://localhost:4001/master/block/'+Id);
   }

   getNagarList(Id:string){
    return this.http.get('http://localhost:4001/master/nagar/'+Id);
   }
   getWardList(Id:string){
    return this.http.get('http://localhost:4001/master/wd/'+Id);
   }

}
