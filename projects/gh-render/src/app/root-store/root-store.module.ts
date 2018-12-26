import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { UserStoreModule } from './user-store/user-store.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot({}), UserStoreModule],
})
export class RootStoreModule {}
