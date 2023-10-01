import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';
import { DynamoDbModel } from '../../models/dynamoDbRecord.model';
import { PawnedUsersService } from 'src/app/services/pawned-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-pawned-users',
  templateUrl: './show-pawned-users.component.html',
  styleUrls: ['./show-pawned-users.component.css']
})
export class ShowPawnedUsersComponent implements OnInit {

  dynamoDbList:DynamoDbModel[]  = [];

  constructor(private pawnedUsersService: PawnedUsersService,private router: Router){

  }
  
  ngOnInit(): void {
    
    console.log('Component is rendered.');
    
    this.fetchData();
    
  }
  

  deleteItem(id:string){
    this.pawnedUsersService.deleteCred(id);
  }


  fetchData() {
    this.dynamoDbList= this.pawnedUsersService.getAllCreds()
    
    this.pawnedUsersService.dynamoDbListEvent.subscribe( (apiResponse: DynamoDbModel[]) =>{
      this.dynamoDbList = apiResponse
      console.log(this.dynamoDbList);

    } )
  }
}
