import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DIALOG_STATUS } from './dialog.enum';

declare const $: any;

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterViewInit {
  public readonly referenceId = 'dialogModal';
  private _isVisible: boolean;

  @Input() title: string;
  @Input() text: string;
  @Input() link: string;
  @Input() set show(isVisible: boolean) {
    this._isVisible = isVisible;
    this.setModalStatus(isVisible ? DIALOG_STATUS.OPEN : DIALOG_STATUS.CLOSE);
  }

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.show = this._isVisible;
  }

  private setModalStatus(status: DIALOG_STATUS) {
    $(`#${this.referenceId}`).modal(status);
  }

  public handleRedirect(url: string) {
    this.setModalStatus(DIALOG_STATUS.CLOSE);
    this.router.navigate([url]);
  }
}
