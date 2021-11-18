import { Action } from '@ngrx/store';

export const ADD_USER = '[USER] Add';

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload) {}
}

export type Actions = AddUser;

