import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "app/interface/user.interface";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  public user: User;

  constructor(private activedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activedRoute.data.subscribe(params => {
      const { user } = params;
      this.user = user;
    });
  }
}
