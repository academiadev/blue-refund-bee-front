import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
		providedIn: 'root'
})
export class LoginGuard implements CanActivate {

		constructor(
				private authService: AuthService,
				private router: Router
		) { }

		canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
				const isUserLoggedIn = this.authService.isLoggedIn();

				if (isUserLoggedIn) {
						this.router.navigate(['/home']);
						return false;
				}

				return true;
		}
}
