import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from './components/facebook/facebook.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { LinkdienComponent } from './components/linkdien/linkdien.component';
import { GoogleComponent } from './components/google/google.component';

const routes: Routes = [
  {path: "facebook", component: FacebookComponent},
  {path: "instagram", component: InstagramComponent},
  {path: "linkdien", component: LinkdienComponent},
  {path: "google", component: GoogleComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
