import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterStoreModule } from './counter-store/counter-store.module';

@NgModule({
  imports: [
    CommonModule,
    CounterStoreModule,
  ],
  declarations: [],
})
export class RootStoreModule { }
