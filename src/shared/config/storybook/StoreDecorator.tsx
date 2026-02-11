import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { DecoratorFn } from '@storybook/react';
import { StoreProvider, type StateSchema } from 'app/providers/storeProvider';
import { profileReducer } from 'entities/profile';
import { loginReducer } from 'features/authByUsername';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
): DecoratorFn => (StoryComponent) => (
  <StoreProvider
    initialState={state as StateSchema}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
);
