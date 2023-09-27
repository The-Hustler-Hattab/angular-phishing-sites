import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacebookComponent } from './components/facebook/facebook.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { HeaderComponent } from './components/header/header.component';
import { LinkdienComponent } from './components/linkdien/linkdien.component';

@NgModule({
  declarations: [
    AppComponent,
    FacebookComponent,
    InstagramComponent,
    HeaderComponent,
    LinkdienComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
