import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GadgetModule } from 'gadget';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { ReadComponent } from './pages/read/read.component';
import { ReadingComponent } from './pages/reading/reading.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ReadComponent, BookListComponent, SidemenuComponent, ReadingComponent, NewComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    GadgetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
