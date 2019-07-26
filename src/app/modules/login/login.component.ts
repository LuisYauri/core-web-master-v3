import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login/login.service';
import {log} from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {email: '', password: ''};

  constructor(private auth: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.user.email = 'jose.com';
    this.user.password = '123';
  }

  loginAuth() {
    this.setToken();
  }

  async setToken() {
    try {
      const response = await this.auth.setToken(this.user).toPromise();
      localStorage.setItem('access_token', response['token']);
      await this.router.navigate(['core/empleados']);
    } catch (e) {
      console.log(e);
    }
  }

}

