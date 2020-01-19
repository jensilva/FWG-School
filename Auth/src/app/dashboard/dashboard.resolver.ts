import { Injectable } from "@angular/core";
import { UserInformationService } from "Core/Service/userInfo.service";
import { Observable } from "rxjs";
import { User } from "app/interface/user.interface";
import { Resolve } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class DashboardResolver implements Resolve<User> {
  constructor(private userInformation: UserInformationService) {}

  resolve(): Observable<User> {
    const userId = localStorage.getItem("user");
    return this.userInformation.getInfo(+userId);
  }
}
