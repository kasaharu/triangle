import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { RootStoreModule } from './root-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './containers/user-detail/user-detail.component';
import { UseListComponent } from './containers/user-list/user-list.component';

@NgModule({
  declarations: [AppComponent, UseListComponent, UserDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RootStoreModule, StoreDevtoolsModule.instrument({ maxAge: 25 })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
