import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { RootStoreModule } from './root-store';

import { AppComponent } from './app.component';
import { CountingPageComponent } from './components/counting-page/counting-page.component';

@NgModule({
  declarations: [AppComponent, CountingPageComponent],
  imports: [BrowserModule, RootStoreModule, StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
