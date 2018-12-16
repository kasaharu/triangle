import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListFilterComponent } from './components/user-list-filter/user-list-filter.component';
import { UserDetailPageComponent } from './components/user-detail-page/user-detail-page.component';

@NgModule({
  declarations: [AppComponent, UserListItemComponent, UserListComponent, UserListFilterComponent, UserDetailPageComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
