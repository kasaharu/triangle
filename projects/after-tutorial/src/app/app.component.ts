import { Component } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'at-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users: User[] = [];
}
