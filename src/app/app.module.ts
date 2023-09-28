import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacebookComponent } from './components/facebook/facebook.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { HeaderComponent } from './components/header/header.component';
import { LinkdienComponent } from './components/linkdien/linkdien.component';
import { GoogleComponent } from './components/google/google.component';

@NgModule({
  declarations: [
    AppComponent,
    FacebookComponent,
    InstagramComponent,
    HeaderComponent,
    LinkdienComponent,
    GoogleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
