import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadGuardGuard } from './auth/load-guard.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

{
  path: 'admin',
  loadChildren: () =>
    import('./admin/admin.module').then((m) => m.AdminModule),
  canLoad: [LoadGuardGuard],
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
