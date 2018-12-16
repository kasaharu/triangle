import { Injectable } from '@angular/core';

import { Store } from '../services/store.service';
import { UserApiService } from '../services/user-api.service';

@Injectable({
  providedIn: 'root',
})
export class UserListUsecase {
  get users$() {
    return this.store.select((state) => {
      return state.userList.items.filter((user) => {
        return user.name.includes(state.userListFilter.nameFilter);
      });
    });
  }

  get filter$() {
    return this.store.select((state) => state.userListFilter);
  }

  constructor(private store: Store, private userApi: UserApiService) {}

  async fetchUsers() {
    const users = await this.userApi.getAllUsers();

    this.store.update((state) => {
      return {
        ...state,
        userList: {
          ...state.userList,
          items: users,
        },
      };
    });
  }

  setNameFilter(nameFilter: string) {
    this.store.update((state) => {
      return {
        ...state,
        userListFilter: {
          nameFilter,
        },
      };
    });
  }
}
