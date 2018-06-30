import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gad-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() innerLabel: string;

  constructor() { }

  ngOnInit() {
  }

}
