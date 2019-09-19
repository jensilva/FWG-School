import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ColorCubeService } from '../color-cube/color-cube.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-management',
  templateUrl: './color-management.component.html',
  styleUrls: ['./color-management.component.scss']
})
export class ColorManagementComponent implements OnInit {
  public color = '#FFFFFF';
  public showModal = false;

  constructor(
    private colorCubeService: ColorCubeService,
    private router: Router
  ) {}

  ngOnInit() {}

  public onSubmit(form: NgForm) {
    const { name, color } = form.value;
    this.colorCubeService.createColor(name, color).subscribe(
      () => {
        this.router.navigate(['/list']);
      },
      err => {
        alert('Algo deu errado');
        console.error(err);
      }
    );
  }
}
