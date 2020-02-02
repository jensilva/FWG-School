import { NgModule } from '@angular/core';
import { ValidateEqualDirective } from './validateEqual/validateEqual.directive';
import { ValidatePasswordDirective } from './validatePassword.directive';

const directives = [ValidateEqualDirective, ValidatePasswordDirective];

@NgModule({
  imports: [],
  declarations: directives,
  exports: directives
})
export class DirectiveModule {}
