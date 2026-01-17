import { DecoratorFn } from '@storybook/react';
import { ThemeProvider } from 'app/providers/themeProvider';
import '../../../app/styles/index.scss';

export const StyleDecorator: DecoratorFn = (StoryComponent, { globals },) => {
  const theme = globals.theme || 'light';

  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
};
