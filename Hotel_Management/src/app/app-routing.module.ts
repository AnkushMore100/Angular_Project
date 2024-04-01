import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLandingComponent } from './admin/admin-landing/admin-landing.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)},
  {path:'user', loadChildren: () => import('./user/user.module').then(mod =>mod.UserModule)},
  {path:'owner', loadChildren: () => import('./owner/owner.module').then(mod => mod.OwnerModule)},
  {path:"adminLanding", component:AdminLandingComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
