import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid='counter-value'>{counterValue}</h1>
      <Button data-testid='increment-btn' onClick={handleIncrement}>Increment</Button>
      <Button data-testid='decrement-btn' onClick={handleDecrement}>Decrement</Button>
    </div>
  );
};
