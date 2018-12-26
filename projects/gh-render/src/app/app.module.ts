import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RootStoreModule } from './root-store';

import { AppComponent } from './app.component';
import { UseListComponent } from './containers/user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, UseListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RootStoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
