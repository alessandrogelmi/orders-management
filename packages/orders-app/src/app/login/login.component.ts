import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  loading: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  handleSubmit() {
    console.log('submit');
    this.loading = true;
    console.log({ user: this.user.username, pass: this.user.password });
    this.authService.login(this.user);
  }
}
