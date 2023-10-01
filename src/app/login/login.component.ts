import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const userData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8080/sign-in', userData).subscribe(
      (response) => {
        console.log('Sign in successful', response);
      },
      (error) => {
        console.error('Sign in failed', error);
      }
    );
  }
}