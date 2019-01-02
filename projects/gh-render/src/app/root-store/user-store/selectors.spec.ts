import { selectUsers, selectUser } from './selectors';
import { State } from './state';
import { User } from '../../core/models';

describe('UserStoreSelector', () => {
  const user: User = {
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
  };

  const users: User[] = [user];
  const state: State = { users, selectedUser: user };

  it('selectUsers', () => {
    expect(selectUsers.projector(state)).toEqual(users);
  });

  it('selectUser', () => {
    expect(selectUser.projector(state)).toEqual(user);
  });
});
