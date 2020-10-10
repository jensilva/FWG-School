import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from '@angular/material/input';

const modules = [
  CommonModule,
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule
]

@NgModule({
  declarations: [],

  imports: modules,
  exports: modules
})

export class SharedModule { }
