import { Component, OnInit, Input } from '@angular/core';
import { Color } from './color-cube.interface';

@Component({
  selector: 'app-color-cube',
  templateUrl: './color-cube.component.html',
  styleUrls: ['./color-cube.component.scss']
})
export class ColorCubeComponent implements OnInit {
  @Input() color: Color;

  constructor() {}

  ngOnInit() {}
}
