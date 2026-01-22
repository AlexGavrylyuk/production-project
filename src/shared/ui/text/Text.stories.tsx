import { ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Test title',
  text: 'Test text description',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Test title',
  text: 'Test text description',
  theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Test title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Test text description',
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  title: 'Test title',
  text: 'Test text description',
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Test title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Test text description',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
