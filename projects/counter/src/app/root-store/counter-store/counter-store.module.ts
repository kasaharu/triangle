import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CounterEffects } from './effects';
import { counterReducer } from './reducers';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('counter', counterReducer), EffectsModule.forFeature([CounterEffects])],
  providers: [CounterEffects],
})
export class CounterStoreModule {}
