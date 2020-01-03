import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../models/user';

const SERVER_URL: string = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = '/auth/login';
  private _homeUrl = '/machines';

  constructor(private http: HttpClient, private router: Router) {
  }

  public getLoginUrl(): string {
    return this._loginUrl;
  }

  public getHomeUrl(): string {
    return this._homeUrl;
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();

    const helper = new JwtHelperService();

    // return a boolean reflecting
    // whether or not the token is expired
    return !helper.isTokenExpired(token);
  }

  public authenticate(user: User): void {
    this.http.post(SERVER_URL+'/authenticate', user).subscribe((result: any) => {
      localStorage.setItem('token', result.token);
      this.router.navigate([ this.getHomeUrl() ]);
    });
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigate([ this.getLoginUrl() ]);
  }
}
