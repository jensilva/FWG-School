import { Component } from "@angular/core";

@Component({
    selector: 'ns-login',
    moduleId: module.id,
    templateUrl: '/login.component.html',
    styleUrls: ['/login.component.css'],
})

export class LoginComponent {
    public submit(){
        console.log("butão")
        alert("alo")
    }
}
