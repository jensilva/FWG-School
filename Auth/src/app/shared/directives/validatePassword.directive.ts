import { Directive, Input } from "@angular/core";
import {
  Validator,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS
} from "@angular/forms";

@Directive({
  selector: "[appValidatePassword][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidatePasswordDirective,
      multi: true
    }
  ]
})
export class ValidatePasswordDirective implements Validator {
  private matchValue: any;

  @Input() set appValidatePassword(value: any) {
    this.matchValue = value;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const { value } = control;
    if (!value || (value.length > 0 && value.length < 4)) {
      return { message: "Password muito curto" };
    } else if (value.length > 10) {
      return { message: "Excedeu limite de caracteres" };
    }
  }
}
