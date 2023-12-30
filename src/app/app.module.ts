import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacebookComponent } from './components/facebook/facebook.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { HeaderComponent } from './components/header/header.component';
import { GoogleComponent } from './components/google/google.component';
import { PawnedComponent } from './components/pawned/pawned.component';
import { PageRoutingService } from './services/page-routing.service';
import { HomeComponent } from './components/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AboutProjectComponent } from './components/about-project/about-project.component';
import { ShowPawnedUsersComponent } from './components/show-pawned-users/show-pawned-users.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FacebookComponent,
    InstagramComponent,
    HeaderComponent,
    GoogleComponent,
    PawnedComponent,
    HomeComponent,
    AboutProjectComponent,
    ShowPawnedUsersComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,


  ],
  providers: [PageRoutingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true,
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
