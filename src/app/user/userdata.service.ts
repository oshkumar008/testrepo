import { Injectable } from '@angular/core';
import { range } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  shwodata(){
    let arr = 'Log In To Your Account';
    return(arr);
  }
}
