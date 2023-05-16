import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { SellerComponent } from './pages/seller/seller.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationpageComponent } from './pages/registrationpage/registrationpage.component';

const routes: Routes = [
  {path:'home',component:HeaderComponent},
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'seller',component:SellerComponent},
  {path:'cart',component:CartComponent},
  {path:'registration',component:RegistrationpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
