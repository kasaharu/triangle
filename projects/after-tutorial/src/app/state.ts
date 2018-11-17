import { User } from './user';

export interface UserListFilter {
  nameFilter: string;
}

export interface State {
  userList: {
    items: User[];
  };
  userListFilter: UserListFilter;
}

export const initialState = {
  userList: {
    items: [],
  },
  userListFilter: {
    nameFilter: '',
  },
};
