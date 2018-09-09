import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { counterReducer } from './root-store/counter/counter.reducers';
import { CounterEffects } from './root-store/counter/counter.effects';

import { AppComponent } from './app.component';
import { CountingPageComponent } from './components/counting-page/counting-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CountingPageComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }),
    EffectsModule.forRoot([CounterEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
