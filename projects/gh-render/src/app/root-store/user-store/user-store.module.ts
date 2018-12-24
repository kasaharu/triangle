import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { userReducer } from './reducers';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('user', userReducer)],
})
export class UserStoreModule {}
