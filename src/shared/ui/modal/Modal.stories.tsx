import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/ Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'Lorem ipsum dolor sit ametconsectetur adipisicing elit. Illum quod cupiditate tempora veniam dignissimos error dolorum nobis ducimus quaerat, obcaecati quam aperiam sunt accusantium quae sed ipsum minima eius! Laboriosam placeat ab, sapiente ut exercitationem in',
  isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Lorem ipsum dolor sit ametconsectetur adipisicing elit. Illum quod cupiditate tempora veniam dignissimos error dolorum nobis ducimus quaerat, obcaecati quam aperiam sunt accusantium quae sed ipsum minima eius! Laboriosam placeat ab, sapiente ut exercitationem in',
  isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
