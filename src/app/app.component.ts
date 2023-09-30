import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: []
})
export class AppComponent {
  title = 'shipopotamus-ui';

  constructor(private router: Router) { }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}