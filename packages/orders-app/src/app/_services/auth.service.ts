import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

    this.httpClient
      .post('http://localhost:8080/spring-auth/auth', credentials)
      .subscribe(
        (data) => {
          sessionStorage.setItem('auth_token', JSON.stringify(data));
          this.userSubject.next(data as Token);
        },
        (error) => {
          this.messageService.error(error.error.message);
        }
      );
  }
}
