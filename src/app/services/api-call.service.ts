import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { ProjectConsts } from '../consts/consts';
import { DynamoDbModel } from '../models/dynamoDbRecord.model';


export const APIEndpoints = {
  SAVE_CREDS_API: '/Prod',
  POST_SAVE_CREDS: '/saveCreds',
  GET_ALL_CREDS: '/getAllCreds',
  DELETE_CRED: '/deleteCred'


}


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  private apiUrl = ProjectConsts.rooturl;

  constructor(private http: HttpClient) {
  }

  saveCredRecord(creds: LoginModel ) : Observable<{message: string;}>{
    const url = `${this.apiUrl}`;
    const headers= ProjectConsts.headers;
    
    return this.http.post<{message: string;}>
    (url+APIEndpoints.SAVE_CREDS_API+APIEndpoints.POST_SAVE_CREDS, creds,{ headers})

  }

  getAllCredsRecords( ) : Observable<{message: string; dynamoDbRecords: DynamoDbModel[] }>{
    const url = `${this.apiUrl}`;
    const headers= ProjectConsts.headers;
    
    return this.http.get<{message: string; dynamoDbRecords: DynamoDbModel[] }>
    (url+APIEndpoints.SAVE_CREDS_API+APIEndpoints.GET_ALL_CREDS, { headers})

  }

  deleteCredsRecord(id:string ) : Observable<{message: string; }>{
    const url = `${this.apiUrl}`;
    const headers= ProjectConsts.headers;
    let itemID = {"id": id};
    return this.http.post<{message: string; }>
    (url+APIEndpoints.SAVE_CREDS_API+APIEndpoints.DELETE_CRED, itemID, { headers})

  }

}
