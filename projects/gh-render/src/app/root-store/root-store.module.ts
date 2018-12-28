import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserStoreModule } from './user-store/user-store.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot({}), EffectsModule.forRoot([]), UserStoreModule],
})
export class RootStoreModule {}
