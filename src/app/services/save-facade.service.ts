import { Injectable } from '@angular/core';
import { PageRoutingService } from './page-routing.service';
import { ApiCallService } from './api-call.service';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class SaveFacadeService {

  constructor(private pageRouting: PageRoutingService, private api: ApiCallService) { }

  saveCreds(email: string, pass:string, site :string){
    if(email.trim() != "" && pass.trim() != ""){
      console.log(email);
      console.log(pass);
      
      this.api.saveCredRecord(new LoginModel(email, pass,site)).subscribe((response) =>{
        console.log(response)
      })
      
      this.pageRouting.navigateToPawned();
    }   
  }
}
