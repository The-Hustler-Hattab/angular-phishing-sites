import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageRoutingService {

  constructor(private router: Router) { }


  navigateToPawned() {
    this.router.navigate(['/pawned']);
  }
}
