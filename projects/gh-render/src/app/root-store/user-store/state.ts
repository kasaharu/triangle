import { User } from '../../core/models';

export interface State {
  users: User[] | null;
}

export const initialState = {
  users: null,
};
