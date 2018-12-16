import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'at-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss'],
})
export class UserDetailPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
