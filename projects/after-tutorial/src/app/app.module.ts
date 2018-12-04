import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [AppComponent, UserListItemComponent, UserListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
