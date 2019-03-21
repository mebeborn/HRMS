import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
	login(user: string, password: string): string {
		if (user === 'user' && password === 'password' || user === 'dev' && password === 'password') {
			localStorage.setItem('username', user);
			return user;
		}
	}

	logout(): any {
		localStorage.removeItem('username');
	}

	getUser(): any {
 		return localStorage.getItem('username');
 	}

 	isLoggedIn(): boolean {
 		return this.getUser() !== null;
	}
	 

}

export const AUTH_PROVIDERS: Array<any> = [
 	{ provide: AuthService, useClass: AuthService }
];