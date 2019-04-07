import { Component, HostBinding, Input, OnInit } from '@angular/core';

export type ColorType = 'primary' | 'danger';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'button[gad-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() innerLabel: string;
  @Input() color: ColorType;
  @HostBinding('class.is-primary')
  get classIsPrimary() {
    return this.color === 'primary';
  }
  @HostBinding('class.is-danger')
  get classIsDanger() {
    return this.color === 'danger';
  }

  constructor() {}

  ngOnInit() {}
}
