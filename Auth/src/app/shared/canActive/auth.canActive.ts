import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthCanActive implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      this.router.navigate(['auth']);
      return false;
    }
  }
}
