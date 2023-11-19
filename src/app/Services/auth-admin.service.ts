import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  private pwd='admin';
  private username='admin';

  public login(username: string, pwd: string) {
    localStorage.setItem('authenticated',"true");
    return username == this.username && pwd == this.pwd;
  }


  public logout() {
    localStorage.setItem('authenticated',"false");;
  }


  public isAuthenticated() {
    return localStorage.getItem('authenticated')=="true";
  }
}
