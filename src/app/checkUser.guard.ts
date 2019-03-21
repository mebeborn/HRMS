import { Injectable } from '@angular/core';
import {
CanActivate,
ActivatedRouteSnapshot,
RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class CheckUserGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            const userLoggedIn = this.authService.getUser();
            console.log(userLoggedIn);
			if (userLoggedIn == 'user'){
				this.router.navigate(['/protected']);
				return false;
			}
				return true;
		}
}
