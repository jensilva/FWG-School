import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: '<div>App-dialog Mock</div>'
})
export class DialogTestingComponent {
  @Input() show: boolean;
}
