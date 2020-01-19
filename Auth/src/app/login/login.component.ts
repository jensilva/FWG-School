import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  public login(form: NgForm): void {
    const { username, password } = form.value;
    this.loginService.login({ username, password }).subscribe(
      user => {
        if (user) {
          localStorage.setItem("user", user[0].id.toString());
          this.router.navigate(["/dashboard"]);
        }
        console.log("oi", user);
      },
      err => {
        console.error(err);
      }
    );
  }
}
