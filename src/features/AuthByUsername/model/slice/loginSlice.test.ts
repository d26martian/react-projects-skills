import { DeepPartial } from "app/types/types";
import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'boba' }

    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('biba')
    )).toEqual({ username: 'biba' })
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '1233' }

    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('4224')
    )).toEqual({ password: '4224' })
  });
});