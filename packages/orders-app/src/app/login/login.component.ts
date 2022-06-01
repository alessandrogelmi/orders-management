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
    this.loading = true;
    this.authService.login(this.user);
  }
}
