import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'anytn-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
})
export class MenuListItemComponent implements OnInit {
  @Input()
  id: number;
  @Input()
  label: string;
  constructor() {}

  ngOnInit() {}
}
