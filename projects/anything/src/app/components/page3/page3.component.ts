import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anytn-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
})
export class Page3Component implements OnInit {
  constructor() {}
  menuList = [{ id: 1, label: 'hoge1' }, { id: 2, label: 'hoge2' }];

  ngOnInit() {}
}
