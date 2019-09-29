import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ColorCubeService } from '../color-cube/color-cube.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color-management',
  templateUrl: './color-management.component.html',
  styleUrls: ['./color-management.component.scss']
})
export class ColorManagementComponent implements OnInit {
  public isNewColor = true;
  public name: string;
  public color = '#FFFFFF';
  public showModal = false;

  private id: number;

  constructor(
    private colorCubeService: ColorCubeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.isNewColor = false;
      this.colorCubeService.getColor(this.id).subscribe(({ name, color }) => {
        this.name = name;
        this.color = color;
      });
    }
  }

  private submitNewColor(name: string, color: string) {
    this.colorCubeService.createColor(name, color).subscribe(
      () => {
        this.router.navigate(['/list']);
      },
      err => {
        alert('Deu ruim');
        console.error(err);
      }
    );
  }

  private submitEditedColor(id: number, name: string, color: string) {
    this.colorCubeService.editColor(id, name, color).subscribe(
      () => {
        this.router.navigate(['/list']);
      },
      err => {
        alert('Deu ruim');
        console.error(err);
      }
    );
  }

  public onSubmit(form: NgForm) {
    const { name, color } = form.value;

    if (this.isNewColor) {
      this.submitNewColor(name, color);
    } else {
      this.submitEditedColor(this.id, name, color);
    }
  }
}
