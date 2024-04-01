import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminSuccessComponent } from './admin-success/admin-success.component';

const routes: Routes = [
{path:'adminLanding',component:AdminLandingComponent},
{path:'adminsignin',component:AdminSignInComponent},
{path:'adminsignup',component:AdminSignUpComponent},
{path:'adminsuccess',component:AdminSuccessComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
