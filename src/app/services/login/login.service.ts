import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {LoginModal, TokenModal} from '../../models/login/login.modal';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_URL_TOKEN = environment.url_main + 'auth/signin/web';

  constructor(private http: HttpClient) {
  }

  setToken(user: LoginModal){
    return this.http.post(this.API_URL_TOKEN,user);
  }

  static logout() {
    localStorage.removeItem('access_token');
  }

}
