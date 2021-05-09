import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from './user/user.module';
import {HomeService} from './home.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    NgbModule
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
