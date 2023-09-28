import { Component, ElementRef, ViewChild } from '@angular/core';
import { PageRoutingService } from 'src/app/services/page-routing.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent {
  isPasswordReady: boolean = false; // Set this to true or false based on your condition

  constructor(private pageRouting: PageRoutingService ){}
  
  @ViewChild('emailInput')
  emailInput!: ElementRef;

  @ViewChild('passwordInput')
  passwordInput!: ElementRef;

  finalEmail: string = '';
  finalPassword: string = '';


  next() {
    // Focus on the password input field when Enter is pressed in the email field
    // this.passwordInput.nativeElement.focus();
    
    if(this.isPasswordReady){
      this.finalPassword= this.passwordInput.nativeElement.value.toString()
      console.log("after value: "+this.finalPassword)


      
    }else{

      this.finalEmail=this.emailInput.nativeElement.value.toString()
      console.log("after value: "+this.finalEmail)
    }

    
    if (this.isPasswordReady) {
      this.pageRouting.navigateToPawned()
    }

    this.isPasswordReady = !this.isPasswordReady;
    
  }
}
