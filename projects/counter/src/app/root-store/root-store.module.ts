import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CounterStoreModule } from './counter-store/counter-store.module';

@NgModule({
  imports: [CommonModule, CounterStoreModule, StoreModule.forRoot({}), EffectsModule.forRoot([])],
  declarations: [],
})
export class RootStoreModule {}
