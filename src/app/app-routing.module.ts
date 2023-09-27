import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from './components/facebook/facebook.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { LinkdienComponent } from './components/linkdien/linkdien.component';

const routes: Routes = [
  {path: "facebook", component: FacebookComponent},
  {path: "instagram", component: InstagramComponent},
  {path: "linkdien", component: LinkdienComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
