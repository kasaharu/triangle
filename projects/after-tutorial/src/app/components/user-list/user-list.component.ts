import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../core/models/user';

@Component({
  selector: 'at-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input()
  users!: User[];

  constructor() {}

  ngOnInit() {}
}
