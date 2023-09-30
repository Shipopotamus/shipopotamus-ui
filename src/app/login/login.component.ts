import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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

    // Make a POST request to your backend API
    this.http.post('http://localhost:8080/register', userData).subscribe(
      (response) => {
        // Handle success
        console.log('Registration successful', response);
      },
      (error) => {
        // Handle error
        console.error('Registration failed', error);
      }
    );
  }
}