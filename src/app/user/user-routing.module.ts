import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
const routes: Routes = [{path:'login',component:LoginComponent},
{path:'myaccount',component:AccountComponent},
{'path':'', redirectTo:'login', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }