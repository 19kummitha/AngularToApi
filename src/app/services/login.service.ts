import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../Models/LoginResponse';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // Hardcoded API URL
  private apiUrl = 'http://localhost:5001/api/auth/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, { username, password });
  }
}
