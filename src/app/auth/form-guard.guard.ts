import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddProductComponent } from '../admin/add-product/add-product.component';
import { ConfirmDialogComponent } from '../admin/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuardGuard implements CanDeactivate<unknown> {

  constructor(private dialog:MatDialog){}

  canDeactivate(
    component: AddProductComponent,
  ): 
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean 
      | UrlTree {
        console.log("Form guard Triggered...");
            // return !component.form.dirty;

          //// without mat dilog
        // if(component.form.dirty){
        //   if(confirm('Are you sure?'))
        //     return true;
        // }
        // else{
        //   return false;
        // }

        if(!component.isDataSaved()){
          const dialogRef= this.dialog.open(ConfirmDialogComponent);
          return dialogRef.afterClosed();
        }
    return of(true);
  }
  
}
