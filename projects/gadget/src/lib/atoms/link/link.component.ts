import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gad-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @Input() linkPath: string;
  @Input() linkText: string;

  constructor() { }

  ngOnInit() {
  }

}
