import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'gh-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userList: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.fetchUserList();
  }

  fetchUserList(): void {
    this.userService.fetchGitHubUserList().subscribe(userList => this.userList = userList);
  }
}
