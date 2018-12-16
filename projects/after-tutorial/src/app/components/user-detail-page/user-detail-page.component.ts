import { Component, OnDestroy, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserDetailUsecase } from '../../usecases/user-detail.usecase';

@Component({
  selector: 'at-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss'],
})
export class UserDetailPageComponent implements OnDestroy {
  private onDestroy$ = new EventEmitter();
  constructor(private route: ActivatedRoute, private userDetailUsecase: UserDetailUsecase) {
    this.userDetailUsecase.subscribeRouteChanges(this.route, this.onDestroy$);
  }

  ngOnDestroy() {
    this.onDestroy$.complete();
  }
}
