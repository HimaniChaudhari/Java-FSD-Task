import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';


//  step 1
const routes: Routes = [
  {path:'signup',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:AppComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'payment',component:PaymentComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
