import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { ApiCallService } from './api-call.service';
import { DynamoDbModel } from '../models/dynamoDbRecord.model';

@Injectable({
  providedIn: 'root'
})
export class PawnedUsersService  {
  dynamoDbList:DynamoDbModel[]  = [];
  
  @Output()
  dynamoDbListEvent: EventEmitter< DynamoDbModel[]> = new EventEmitter< DynamoDbModel[]>();
  constructor(private api: ApiCallService) {
   }
  

  getAllCreds() : DynamoDbModel[] {
    this.api.getAllCredsRecords().subscribe(res => {
      console.log(res);
      this.dynamoDbList= res.dynamoDbRecords
      this.dynamoDbListEvent.emit(this.dynamoDbList)
    })
    
    return this.dynamoDbList;
 
  }

  deleteCred(id:string): void{
    this.api.deleteCredsRecord(id).subscribe(res => {
      console.log(res.message);
      this.dynamoDbList = this.dynamoDbList.filter((row) => row.id !== id);
      this.dynamoDbListEvent.emit(this.dynamoDbList)

    })
  }
  


}
