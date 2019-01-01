import { User } from '../../core/models';

export interface State {
  users: User[] | null;
  selectedUser: User | null;
}

export const initialState = {
  users: null,
  selectedUser: null,
};
