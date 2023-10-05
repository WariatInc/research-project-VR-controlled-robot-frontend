import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app/common/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.authService.logout().subscribe(() => {
        this.router.navigate(['./']);
      });
    }, 2000);
  }
}
