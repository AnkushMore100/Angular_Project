import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminSuccessComponent } from './admin-success/admin-success.component';


@NgModule({
  declarations: [
    AdminLandingComponent,
    AdminSignInComponent,
    AdminSignUpComponent,
    AdminSuccessComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
