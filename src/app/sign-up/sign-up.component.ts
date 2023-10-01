import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const userData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8080/sign-up', userData).subscribe(
      (response) => {
        console.log('Sign up successful', response);
        this.router.navigate(['/sign-in']);
      },
      (error) => {
        console.error('Sign up failed', error);
      }
    );
  }
}
