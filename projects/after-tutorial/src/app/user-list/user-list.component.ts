import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'at-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  @Input()
  users!: User[];
  constructor() {}

  ngOnInit() {}
}
