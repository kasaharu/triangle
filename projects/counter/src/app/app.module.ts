import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { counterReducer } from './reducers/counter';

import { AppComponent } from './app.component';
import { CountingPageComponent } from './components/counting-page/counting-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CountingPageComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
