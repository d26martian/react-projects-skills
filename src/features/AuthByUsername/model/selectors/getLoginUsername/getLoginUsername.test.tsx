import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "app/types/types";
import { getLoginUsername } from "./getLoginUsername";

describe('getLoginUsername.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'biba'
      }
    }

    expect(getLoginUsername(state as StateSchema)).toEqual('biba')
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: ''
      }
    }

    expect(getLoginUsername(state as StateSchema)).toEqual('')
  });
});