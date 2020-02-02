import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit() {}

  public registerUser(username: string, password: string): void {
    const user = { username, password };
    this.registerService.createUser(user).subscribe(
      () => {
        this.router.navigate(['/auth']);
      },
      err => {
        console.error(err);
      }
    );
  }
}
