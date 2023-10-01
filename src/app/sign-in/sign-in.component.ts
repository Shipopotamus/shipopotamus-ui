import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
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