import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service';

@Injectable({
		providedIn: 'root'
})
export class AuthGuard implements CanActivate {

		constructor(
				private authService: AuthService,
				private router: Router
		) { }

		canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
				const isUserLoggedIn = this.authService.isLoggedIn();

				if (isUserLoggedIn) {
						return true;
				}
				this.router.navigate(['/login'], { queryParams: { 'returnUrl': state.url } });
				return false;
		}


}
