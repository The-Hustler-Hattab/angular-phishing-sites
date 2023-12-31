import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from './components/facebook/facebook.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { GoogleComponent } from './components/google/google.component';
import { PawnedComponent } from './components/pawned/pawned.component';
import { HomeComponent } from './components/home/home.component';
import { AboutProjectComponent } from './components/about-project/about-project.component';

const routes: Routes = [
  {path: "", component: HomeComponent},

  {path: "facebook", component: FacebookComponent},
  {path: "instagram", component: InstagramComponent},
  {path: "google", component: GoogleComponent},
  {path: "pawned", component: PawnedComponent},
  {path: "about", component: AboutProjectComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
