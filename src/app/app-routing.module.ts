import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {routarr} from './router-array';
const routes: Routes = routarr;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
