import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angulartowebapi';
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService) { }

  onLogin() {
    this.loginService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        localStorage.setItem('token', response.token);
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }
}
