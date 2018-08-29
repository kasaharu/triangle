import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'anytn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'anything';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('AppComponent - ngOnInit');
    this.route.data.subscribe(data => {
      console.log(data);
    });
  }
}
