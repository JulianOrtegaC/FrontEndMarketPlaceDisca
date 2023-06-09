import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './Guards/guard.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { ViewServiceComponent } from './components/view-service/view-service.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[GuardGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'addService', component:AddServiceComponent ,canActivate:[GuardGuard]},
  {path: 'viewService',component:ViewServiceComponent,canActivate:[GuardGuard]},
  {path: 'home',component:HomeComponent},
  {path: 'about',component:AboutUsComponent},
  {path: '', redirectTo:'/login' , pathMatch:'full'},
  {path: "**",redirectTo:'/login' , pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
