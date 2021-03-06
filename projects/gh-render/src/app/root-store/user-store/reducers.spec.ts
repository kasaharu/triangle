import { User } from '../../core/models';
import { FetchDetailRequestAction, FetchDetailSuccessAction, FetchListRequestAction, FetchListSuccessAction } from './actions';
import { userReducer } from './reducers';
import { initialState } from './state';

describe('userReducer', () => {
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

  it('FetchListRequestAction', () => {
    expect(userReducer(initialState, new FetchListRequestAction())).toEqual(initialState);
  });

  it('FetchListSuccessAction', () => {
    expect(userReducer(initialState, new FetchListSuccessAction(users))).toEqual({ ...initialState, users });
  });

  it('FetchDetailRequestAction', () => {
    const userName = 'test';
    expect(userReducer(initialState, new FetchDetailRequestAction(userName))).toEqual(initialState);
  });

  it('FetchDetailSuccessAction', () => {
    expect(userReducer(initialState, new FetchDetailSuccessAction(user))).toEqual({ ...initialState, selectedUser: user });
  });
});
