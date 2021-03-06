import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GadgetModule } from 'gadget';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuListItemComponent } from './components/menu-list/menu-list-item.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { P1Section1Component } from './components/p1-section1/p1-section1.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    P1Section1Component,
    MenuListComponent,
    MenuListItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GadgetModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
