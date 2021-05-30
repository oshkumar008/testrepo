import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import {HomeService} from './home.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserModule } from './user/user.module';
import { LandingComponent } from './landing/landing.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatMenuModule,
    CommonModule,
    UserModule
  ],
  exports:[
    CommonModule,
    MatSliderModule,
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  all:any = 20;
  constructor(){
  

  } 
  ngInit(){
    console.log(this.all)
  }

 }
