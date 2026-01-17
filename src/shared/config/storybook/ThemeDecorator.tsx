import { DecoratorFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/themeProvider';
import '../../../app/styles/index.scss';

export const ThemeDecorator = (theme: Theme): DecoratorFn => (StoryComponent) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);
