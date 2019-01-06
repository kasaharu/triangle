import { ActionTypes, ActionsUnion } from './actions';
import { State, initialState } from './state';

export function userReducer(state = initialState, action: ActionsUnion): State {
  switch (action.type) {
    case ActionTypes.FETCH_LIST_REQUEST:
      return state;
    case ActionTypes.FETCH_LIST_SUCCESS:
      return {
        ...state,
        users: action.payload,
        selectedUser: null,
      };
    case ActionTypes.FETCH_DETAIL_REQUEST:
      return state;
    case ActionTypes.FETCH_DETAIL_SUCCESS:
      return { ...state, selectedUser: action.payload };
    default:
      return state;
  }
}
