import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GadgetModule } from 'gadget';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
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
