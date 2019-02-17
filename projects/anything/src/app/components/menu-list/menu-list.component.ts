import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'anytn-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  @Input()
  menuList: object[];
  constructor() {}

  ngOnInit() {}
}
