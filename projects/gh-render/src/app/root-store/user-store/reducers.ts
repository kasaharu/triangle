import { ActionTypes, ActionsUnion } from './actions';
import { State, initialState } from './state';

export function userReducer(state = initialState, action: ActionsUnion): State {
  switch (action.type) {
    case ActionTypes.FETCH_LIST_REQUEST:
      return state;
    case ActionTypes.FETCH_LIST_SUCCESS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
