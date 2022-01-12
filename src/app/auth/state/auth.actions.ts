import { createAction, props } from '@ngrx/store';
import { AuthSession } from 'src/app/models/auth.model';

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';
export const LOGIN_AUTO = '[auth page] login auto';

export const loginStart = createAction(
  LOGIN_START,
  props<{username: string, password: string}>()
);
export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ session: AuthSession }>()
);
export const loginAuto = createAction(LOGIN_AUTO);
