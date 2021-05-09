import { Component,HostListener,OnDestroy,OnInit,NgZone } from '@angular/core';
import {HomeService} from './home.service';
@Component({
  selector: '[app]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces:false
})
export class AppComponent { 
  all:any = true;
  constructor(homedata:HomeService){
    console.log(homedata);

  } 
  ngOnInit(){
    console.log(this.all)
    console.log(NgZone)
  }
  
  title = 'rev2grow';
  @HostListener('click',['$event'])
  onhostclick(event:Event){
    //alert('hello')
  }
  data = '';
  
}
