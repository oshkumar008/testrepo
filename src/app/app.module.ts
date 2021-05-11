import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import {HomeService} from './home.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule
  ],
  exports:[
    MatSliderModule
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
