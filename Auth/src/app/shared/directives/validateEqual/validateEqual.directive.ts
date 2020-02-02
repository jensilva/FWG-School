import { Directive, Input } from '@angular/core';
import {
  Validator,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS
} from '@angular/forms';

@Directive({
  selector: '[appValidateEqual][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateEqualDirective,
      multi: true
    }
  ]
})
export class ValidateEqualDirective implements Validator {
  private matchValue: any;

  @Input() set appValidateEqual(value: any) {
    this.matchValue = value;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const { value } = control;

    if (value !== this.matchValue) {
      return { mismatch: true };
    }
    return null;
  }
}
