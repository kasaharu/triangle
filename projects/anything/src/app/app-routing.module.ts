import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { P1Section1Component } from './components/p1-section1/p1-section1.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';

const routes: Routes = [
  {
    path: 'page1',
    component: Page1Component,
    data: { title: 'page1-title' },
    children: [{ path: 'section1', component: P1Section1Component }],
  },
  { path: 'page2', component: Page2Component, data: { title: 'page2-title' } },
  { path: 'page3', component: Page3Component, data: { title: 'page3-title' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
