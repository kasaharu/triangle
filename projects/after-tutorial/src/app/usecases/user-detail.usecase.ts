import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, takeUntil } from 'rxjs/operators';

import { Store } from '../services/store.service';
import { UserApiService } from '../services/user-api.service';

@Injectable({
  providedIn: 'root',
})
export class UserDetailUsecase {
  get user$() {
    return this.store.select((state) => state.userDetail.user);
  }
  constructor(private store: Store, private userApi: UserApiService) {}

  subscribeRouteChanges(route: ActivatedRoute, untilObservable: Observable<any>) {
    route.params
      .pipe(
        takeUntil(untilObservable),
        map((params) => params['userId']),
        distinctUntilChanged(),
      )
      .subscribe((userId) => this.onUserIdChanged(userId));
  }

  private async onUserIdChanged(userId: string) {
    this.store.update((state) => {
      return {
        ...state,
        userDetail: {
          ...state.userDetail,
          user: null,
        },
      };
    });

    const user = await this.userApi.getUserById(userId);

    this.store.update((state) => {
      return {
        ...state,
        userDetail: {
          ...state.userDetail,
          user,
        },
      };
    });
  }
}
