import { Component, OnDestroy, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'at-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss'],
})
export class UserDetailPageComponent implements OnDestroy {
  private onDestroy$ = new EventEmitter();
  constructor(private route: ActivatedRoute) {}

  ngOnDestroy() {
    this.onDestroy$.complete();
  }
}
