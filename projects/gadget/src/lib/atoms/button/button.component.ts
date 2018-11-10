import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gad-button',
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
