import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UseListComponent } from './components/user-list/user-list.component';

const routes: Routes = [{ path: '', redirectTo: '/user-list', pathMatch: 'full' }, { path: 'user-list', component: UseListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
