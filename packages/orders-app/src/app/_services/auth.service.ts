import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(user: User) {
    let credentials = {
      username: user.username,
      password: user.password,
    };

    this.httpClient
      .post('http://localhost:8080/spring-auth/auth', credentials)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
