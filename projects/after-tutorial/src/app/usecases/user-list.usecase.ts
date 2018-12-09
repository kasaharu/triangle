import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';

import { Store } from '../services/store.service';
import { User } from '../core/models/user';

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

  constructor(private http: HttpClient, private store: Store) {}

  async fetchUsers() {
    const users = await this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').toPromise();

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
