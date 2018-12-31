import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UseListComponent } from './containers/user-list/user-list.component';
import { UserDetailComponent } from './containers/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: 'user-list', component: UseListComponent },
  { path: 'user-detail/:userId', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
