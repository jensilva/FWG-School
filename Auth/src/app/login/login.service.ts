import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { find, filter } from 'rxjs/operators';
import { User } from 'app/interface/user.interface';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  private mockLogin(login: User): Observable<User> {
    return this.http
      .get<any>(`${environment.service}/users`)
      .pipe(
        filter(users =>
          users.find(
            user =>
              user.password === login.password &&
              login.username === login.username
          )
        )
      );
  }

  public login(user: User): Observable<User> {
    return this.mockLogin(user);
  }
}
