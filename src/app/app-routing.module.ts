import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { AuthenticationGuard } from './auth/authentication.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

{
  path: 'admin',
  component:WelcomeComponent,
  canActivate: [AuthenticationGuard],
  children:[
  {path: 'add-user', component:AddUserComponent},
  {path: 'add-product', component:AddProductComponent},
]
  // loadChildren: () =>
  // import('./admin/admin.module').then((m) => m.AdminModule),
},

{
  path:'',
  component: HomeComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
