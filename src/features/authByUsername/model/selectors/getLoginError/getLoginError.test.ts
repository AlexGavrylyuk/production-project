import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };

    expect(getLoginError(state as StateSchema)).toBe('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {},
    };

    expect(getLoginError(state as StateSchema)).toEqual('');
  });
});
