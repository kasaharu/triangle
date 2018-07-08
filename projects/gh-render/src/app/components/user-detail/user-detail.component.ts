import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserDetail } from '../../models/user-detail';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'gh-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  userDetail: UserDetail;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(pmap => this.fetchUserDetail(pmap.get('name')));
  }

  fetchUserDetail(name: string): void {
    // this.userService.fetchGitHubUser().subscribe(userDetail => this.userDetail = userDetail);
    this.userService.fetchGitHubUser(name).subscribe(userDetail => console.log(userDetail));
  }
}
