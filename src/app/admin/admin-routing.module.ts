import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AuthenticationGuard } from './auth/authentication.guard';
import { PermissionsGuard } from './auth/permissions.guard';
import { ListComponent } from './list/list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: '',
        // canActivateChild: [PermissionsGuard],
        canActivate:[AuthenticationGuard],
        children: [
          {
            path: 'add-user',
            canActivate:[PermissionsGuard],
            // canDeactivate: [FormGuardGuard],
            component: AddUserComponent,
          },
          {
            path: 'add-product',
            canActivate:[PermissionsGuard],
            // canDeactivate: [FormGuardGuard],
            component: AddProductComponent,
          },
        ],
      },
      { path: 'list', component: ListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
