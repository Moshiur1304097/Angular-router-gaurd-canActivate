import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    // return of(false).pipe(delay(500));   
    return of(true).pipe(delay(500));
  }

  hasPermisssions(){
   return of(true);
  }
}
