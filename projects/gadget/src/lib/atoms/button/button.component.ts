import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'button[gad-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() innerLabel: string;
  @Input() additionalClass: string;
  @Output() clickButton = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  handleClickEvent() {
    this.clickButton.emit(true);
  }
}
