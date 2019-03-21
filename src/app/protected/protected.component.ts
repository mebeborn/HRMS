import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
})
export class ProtectedComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) {
  };

  logout(): boolean {
		this.authService.logout();
		this.router.navigate(['/home']);
		return false;
	}

  ngOnInit() {
  }

}
