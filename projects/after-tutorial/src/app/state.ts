import { User } from './core/models/user';

export interface UserListFilter {
  nameFilter: string;
}

export interface State {
  userList: {
    items: User[];
  };
  userListFilter: UserListFilter;
  userDetail: {
    user: User | null;
  };
}

export const initialState: State = {
  userList: {
    items: [],
  },
  userListFilter: {
    nameFilter: '',
  },
  userDetail: {
    user: null,
  },
};
