import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private router: Router
  ) { }

  login() {
    this.router.navigate(['/login']);
  }

  open() {
    this.router.navigate(['/home/feed']);
  }
}
