import { Component } from "@angular/core";
import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";
import { Router } from "@angular/router";

@Component({
    selector: 'ns-login',
    moduleId: module.id,
    templateUrl: '/login.component.html',
    styleUrls: ['/login.component.css'],
})

export class LoginComponent {
    public user: User = new User();
    public isLoggingIn = true;

    constructor(private userService : UserService,
                private router: Router){}

    private handleError(error: any){
        (exception) => {
            if(exception.error && exception.error.description){
                alert(exception.error.description);
            }else {
                alert(exception);
                }
            }
    }

    private login(user: User){
        this.userService.login(user).subscribe( ()=>{
            this.router.navigate(['/list'])
        }, this.handleError)
    }

    private singUp(user: User) {
        this.userService.register(user).subscribe( () => {
            alert('Your account was successfully created.');
            this.toggleDisplay();
        }, this.handleError);
    }

    public submit( user: User){
        if (this.isLoggingIn){
            this.login(user);
        } else {
            this.singUp(user);
        }
    }

    public toggleDisplay(){
        this.isLoggingIn = !this.isLoggingIn;
    }
}
