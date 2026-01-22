import { DeepPartial } from '@reduxjs/toolkit';
import { DecoratorFn } from '@storybook/react';
import { StoreProvider, type StateSchema } from 'app/providers/storeProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>): DecoratorFn => (StoryComponent) => (
  <StoreProvider initialState={state as StateSchema}>
    <StoryComponent />
  </StoreProvider>
);
