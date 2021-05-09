import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { NotificationComponent } from './notification/notification.component';
import { OrderComponent } from './order/order.component';
import { WalletComponent } from './wallet/wallet.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, AccountComponent, NotificationComponent, OrderComponent, WalletComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
