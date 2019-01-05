import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { RootStoreModule } from './root-store';

import { AppComponent } from './app.component';
import { UseListComponent } from './containers/user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailComponent } from './containers/user-detail/user-detail.component';

@NgModule({
  declarations: [AppComponent, UseListComponent, UserDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RootStoreModule, StoreDevtoolsModule.instrument({ maxAge: 25 })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
