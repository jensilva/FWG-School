import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { first} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private dialogRef: MatDialogRef<AppComponent>;
  constructor(private dialog: MatDialog){}

 public openDialog(): void {
    this.dialog.open(AppComponent, {height: '350px'}).
    afterClosed().pipe(
      first()
    ).subscribe(result => {
    console.log(`Dialog result: ${result}`)
    })
  }
 }
