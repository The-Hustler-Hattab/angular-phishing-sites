import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { ProjectConsts } from '../consts/consts';


export const APIEndpoints = {
  SAVE_CREDS_API: '/Prod',
  POST_SAVE_CREDS: '/saveCreds'
}


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  private apiUrl = ProjectConsts.rooturl;

  constructor(private http: HttpClient) {
  }

  saveBudgetRecord(creds: LoginModel ) : Observable<any>{
    const url = `${this.apiUrl}`;
    const headers= ProjectConsts.headers;
    
    return this.http.post<{message: string;}>
    (url+APIEndpoints.SAVE_CREDS_API+APIEndpoints.POST_SAVE_CREDS, creds,{ headers})

  }

}
