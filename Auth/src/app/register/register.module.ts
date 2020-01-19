import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register.component";
import { MatStepperModule } from "@angular/material/stepper";
import { RegisterRoutingModule } from "./register-routing.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { DirectiveModule } from "../shared/directives/directives.module";
import { HttpClientModule } from "@angular/common/http";
import { RegisterService } from "./register.service";

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    MatStepperModule,
    RegisterRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    DirectiveModule,
    HttpClientModule
  ],
  exports: [],
  providers: [RegisterService]
})
export class RegisterModule {}
