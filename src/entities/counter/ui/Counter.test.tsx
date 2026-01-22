import { DeepPartial } from '@reduxjs/toolkit';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StateSchema } from 'app/providers/storeProvider';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

const initialState: DeepPartial<StateSchema> = {
  counter: {
    value: 10,
  },
};

describe('Counter', () => {
  test('should render the component', () => {
    componentRender(<Counter />, { initialState: initialState as StateSchema });
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
  });

  test('should increment counter', () => {
    componentRender(<Counter />, { initialState: initialState as StateSchema });
    userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
  });

  test('should decrement counter', () => {
    componentRender(<Counter />, { initialState: initialState as StateSchema });
    userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
  });
});
