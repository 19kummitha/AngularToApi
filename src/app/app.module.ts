import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage/landingpage.component';
import { HomeComponent } from './landingpage/home/home.component';
import { AboutComponent } from './landingpage/about/about.component';
import { LoginComponent } from './landingpage/login/login.component';
import { SignupComponent } from './landingpage/signup/signup.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleComponent } from './forms/example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
