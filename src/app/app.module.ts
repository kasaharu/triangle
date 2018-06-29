import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GadgetModule } from 'gadget';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GadgetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
