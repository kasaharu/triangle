import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GadgetModule } from 'gadget';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { HomeComponent } from './pages/home/home.component';
import { ReadComponent } from './pages/read/read.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ReadComponent, BookListComponent, SidemenuComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, GadgetModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
