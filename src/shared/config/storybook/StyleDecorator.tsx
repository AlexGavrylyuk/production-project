import { DecoratorFn } from '@storybook/react';
import '../../../app/styles/index.scss';

export const StyleDecorator: DecoratorFn = (StoryComponent, { globals }) => {
  const theme = globals.theme || 'light';

  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
};
