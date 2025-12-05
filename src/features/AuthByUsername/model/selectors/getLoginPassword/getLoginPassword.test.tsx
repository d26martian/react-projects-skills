import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "app/types/types";
import { getLoginPassword } from "./getLoginPassword";

describe('getLoginPassword.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '12431'
      }
    }

    expect(getLoginPassword(state as StateSchema)).toEqual('12431')
  });

  test('shoud work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false
      }
    }

    expect(getLoginPassword(state as StateSchema)).toEqual('')
  });
});