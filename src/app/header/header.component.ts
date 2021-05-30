import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private mainservice:HomeService) { }

  ngOnInit(): void {
  }
  data = ''; 
  outSearchString(){
    this.mainservice.changeString(this.data);
  } 
}
