import { Component, OnInit } from '@angular/core';

import { User } from '../../core/models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'gh-user',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UseListComponent implements OnInit {
  userList: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.fetchUserList();
  }

  fetchUserList(): void {
    this.userService.fetchGitHubUserList().subscribe((userList) => (this.userList = userList));
  }
}
