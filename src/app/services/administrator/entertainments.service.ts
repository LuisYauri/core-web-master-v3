import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {TokenModal} from '../../models/login/login.modal';
import {editDataModel, sendDataAddModel} from '../../models/administrator/entertainments.modal';

@Injectable({
  providedIn: 'root'
})
export class EntertainmentsService {

  private API_URL_LIST_ENTERTAINMENTS = environment.url_main + 'benefit/web';
  private API_URL_ADD_ACCOUNT = environment.url_main + 'benefit/create';
  private API_URL_SET_ACCOUNT = environment.url_main + 'benefit/update/';
  private API_URL_DELETE_ACCOUNT = environment.url_main + 'benefit/delete/';

  constructor(private http: HttpClient) {
  }

  private headersList() {
    let headers = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
      }
    };
    return headers;
  }

  getListEntertainments() {
    return this.http.get(this.API_URL_LIST_ENTERTAINMENTS, this.headersList());
  }

  setAddAccount(account: sendDataAddModel) {
    return this.http.post(this.API_URL_ADD_ACCOUNT, account, this.headersList());
  }

  editAccount(id: string, account: editDataModel) {
    return this.http.put(this.API_URL_SET_ACCOUNT + id, account, this.headersList());
  }

  deleteAccount(id: string) {
    return this.http.delete(this.API_URL_DELETE_ACCOUNT + id, this.headersList());
  }

}
