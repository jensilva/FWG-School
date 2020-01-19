import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { DashboardResolver } from "./dashboard.resolver";
import { UserInformationService } from "Core/Service/userInfo.service";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    resolve: { user: DashboardResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserInformationService]
})
export class DashboardRoutingModule {}
