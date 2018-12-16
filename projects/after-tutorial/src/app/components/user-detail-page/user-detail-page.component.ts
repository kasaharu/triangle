import { Component, OnDestroy, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, takeUntil, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'at-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss'],
})
export class UserDetailPageComponent implements OnDestroy {
  private onDestroy$ = new EventEmitter();
  constructor(private route: ActivatedRoute) {
    this.route.params
      .pipe(
        takeUntil(this.onDestroy$),
        map((params) => params['userId']),
        distinctUntilChanged(),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.onDestroy$.complete();
  }
}
