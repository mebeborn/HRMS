import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
message: string;

constructor(public authService: AuthService, private router: Router) {
	this.message = '';
}

login(username: string, password: string): boolean {
	this.message = '';
	if (this.authService.login(username, password) == 'user') {
		this.router.navigate(['/protected']);
	} else if (this.authService.login(username, password) == 'dev') {
		this.router.navigate(['/dev-profile']);
	} else {
		this.message = 'Incorrect credentials.';
		setTimeout(function() {
		this.message = '';
		}.bind(this), 2500);
	}
	return false;
}

	ngOnInit() {
	}

}
