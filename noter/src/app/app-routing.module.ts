import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";


const routes: Routes = [
    {path: '', redirectTo:'/login', pathMatch: 'full'},
    {path: 'home', loadChildren: () => import ('./home/home.module')
    .then( m => m.HomeModule)},
    {path: 'login', loadChildren: () => import('./login/login.module')
    .then(m => m.LoginModule)}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
