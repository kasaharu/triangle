import { User } from './user';

export interface UserListFilter {
  nameFilter: string;
}

export interface State {
  userList: {
    item: User[];
  };
  userListFilter: UserListFilter;
}
