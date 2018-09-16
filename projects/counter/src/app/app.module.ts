import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootStoreModule } from './root-store';

import { AppComponent } from './app.component';
import { CountingPageComponent } from './components/counting-page/counting-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CountingPageComponent,
  ],
  imports: [
    BrowserModule,
    RootStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
