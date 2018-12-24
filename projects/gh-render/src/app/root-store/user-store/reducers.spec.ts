import { FetchRequestAction, FetchSuccessAction } from './actions';
import { userReducer } from './reducers';
import { initialState } from './state';
import { User } from '../../core/models';

describe('userReducer', () => {
  const users: User[] = [
    {
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
    },
  ];

  it('FetchRequestAction', () => {
    expect(userReducer(initialState, new FetchRequestAction())).toEqual(initialState);
  });

  it('FetchRequestAction', () => {
    expect(userReducer(initialState, new FetchSuccessAction({ users }))).toEqual({ users });
  });
});