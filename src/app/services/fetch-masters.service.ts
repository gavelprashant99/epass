
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

  getIdproof(){
    return this.http.get('http://localhost:4001/master/idproof');
  }

  getDepartmentlist(){
    return this.http.get('http://localhost:4001/master/departmentlist');
  }

  getBlockList(Id:string){
    return this.http.get('http://localhost:4001/master/block/'+Id);
   }

   getNagarList(Id:string){
    return this.http.get('http://localhost:4001/master/nagar/'+Id);
   }
   getWardList(distId:string, nagar_id:string){
    return this.http.get('http://localhost:4001/master/wd/'+distId+'/'+nagar_id);
   }
   getGPList(district:string, block:string){
    return this.http.get('http://localhost:4001/master/'+'gp/'+district+'/'+block);
   }
   getVillageList(district:string, block:string,gp_id:string){
    return this.http.get('http://localhost:4001/master/'+'village/'+district+'/'+block+'/'+gp_id);
   }

   postUserData(data:any){
    return this.http.post('http://localhost:4001/user/userRegistration',data);
   }

}
