import { Component, OnInit } from '@angular/core';

import { User } from './core/models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'at-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users = this.userService.users$;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers();
  }
}
