import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
  test('should return username value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '123',
      },
    };

    expect(getLoginUsername(state as StateSchema)).toBe('123');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {},
    };

    expect(getLoginUsername(state as StateSchema)).toBe('');
  });
});
