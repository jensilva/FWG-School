import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./login.component";

const routes = [
    {path: '', component: LoginComponent}
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class LoginRoutingModule{}
