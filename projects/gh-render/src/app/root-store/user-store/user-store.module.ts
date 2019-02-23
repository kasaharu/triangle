import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserEffects } from './effects';
import { userReducer } from './reducers';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('user', userReducer), EffectsModule.forFeature([UserEffects])],
})
export class UserStoreModule {}
