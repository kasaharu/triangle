import { User } from '../../core/models';

export interface State {
  users: User[] | null;
  selectedUser: User | null;
}

export const initialState: State = {
  users: null,
  selectedUser: null,
};
