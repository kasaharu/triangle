import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserStoreModule } from './user-store/user-store.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot({}), EffectsModule.forRoot([]), UserStoreModule],
})
export class RootStoreModule {}
