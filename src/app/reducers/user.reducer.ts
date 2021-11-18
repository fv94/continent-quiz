import * as UserActions from '../actions/user.actions';

const initialState = null;

export function userReducer(state = initialState, action: UserActions.Actions) {

  switch (action.type) {
    case UserActions.ADD_USER:
      return action.payload;
    default:
      return state;
  }
}
