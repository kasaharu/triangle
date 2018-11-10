import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';

const routes: Routes = [
  { path: 'page1', component: Page1Component, data: { title: 'page1-title' } },
  { path: 'page2', component: Page2Component, data: { title: 'page2-title' } },
  { path: 'page3', component: Page3Component, data: { title: 'page3-title' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
