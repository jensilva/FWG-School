import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { User } from "app/interface/user.interface";
import { environment } from "@env";

@Injectable({
  providedIn: "root"
})
export class UserInformationService {
  private users$: BehaviorSubject<User> = new BehaviorSubject(undefined);
  constructor(private http: HttpClient) {}

  public getInfo(userId: number): Observable<User> {
    return this.http.get<User>(`${environment.service}/users/${userId}`);
  }
}
