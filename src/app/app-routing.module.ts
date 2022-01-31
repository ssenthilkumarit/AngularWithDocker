import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { DepositAmountComponent } from './deposit-amount/deposit-amount.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransferComponent } from './transfer/transfer.component';

export const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'deposit', component:DepositAmountComponent},
  {path:'register',component:RegisterComponent},
  {path:'balance',component:BalanceComponent},
  {path:'transfer', component:TransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
