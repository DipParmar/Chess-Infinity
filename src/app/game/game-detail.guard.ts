import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameDetailGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const id = +next.url[1].path;
    
    if(isNaN(id) || id < 1) {
      alert('Invalid Game Id');
      this.router.navigate(['/games']);
      return false;
    } else {
      return true;
    }
  }
  
}
