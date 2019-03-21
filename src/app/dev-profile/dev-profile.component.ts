import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dev-profile',
  templateUrl: './dev-profile.component.html',
  styleUrls: ['./dev-profile.component.css']
})

export class DevProfileComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    
  }

  logout(): boolean {
		this.authService.logout();
		this.router.navigate(['/home']);
		return false;
	}

}
