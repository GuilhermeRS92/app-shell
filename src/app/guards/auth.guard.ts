import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private storage: StorageService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userName = this.storage.get('userName');
    if (userName) {
      return true;
    } else {
      this.storage.set('blockedUrl', state.url);
      this.router.navigate(['/login']);
      return false;
    }
  }
}