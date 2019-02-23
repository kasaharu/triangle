import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailPageComponent } from './components/user-detail-page/user-detail-page.component';

const routes: Routes = [
  {
    path: 'users/:userId',
    component: UserDetailPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
