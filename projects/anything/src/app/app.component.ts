import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'anytn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'anything';
  pageName: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const lastChildRoute = this.findLastChildRoute(this.route.snapshot);
        this.pageName = lastChildRoute.data['title'];
      }
    });
  }

  findLastChildRoute(route: ActivatedRouteSnapshot) {
    if (route.firstChild === null) { return route; }

    return this.findLastChildRoute(route.firstChild);
  }
}
