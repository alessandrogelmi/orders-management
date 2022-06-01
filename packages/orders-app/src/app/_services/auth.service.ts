import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';
import { Token } from '../classes/token';
import { User } from '../classes/user';
import { ErrorMessageService } from './error-message.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userSubject: Subject<Token> = new Subject();

  constructor(
    private httpClient: HttpClient,
    private messageService: ErrorMessageService
  ) {}

  login(user: User) {
    let credentials = {
      username: user.username,
      password: user.password,
    };

    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');

    this.httpClient
      .post('http://localhost:8080/spring-auth/auth', credentials, {
        headers: httpHeaders,
      })
      .subscribe(
        (data) => {
          const token = (data as Token).token;
          sessionStorage.setItem('auth_token', token);
          this.userSubject.next(data as Token);
        },
        (error) => {
          this.messageService.error(error.error.message);
        }
      );
  }

  isLogged() {
    console.log('check token');
    let jwtHelper = new JwtHelperService();
    let token = sessionStorage.getItem('auth_token');

    if (!token || jwtHelper.isTokenExpired(token)) {
      return false;
    } else {
      return true;
    }
  }

  getToken() {
    return sessionStorage.getItem('auth_token');
  }
}
