import type { ComponentStory, ComponentMeta } from '@storybook/react';

import React from 'react';

import { Button } from '.';

export default {
  title: 'UI/Button',
  component: Button,
  // More on control: https://storybook.js.org/docs/react/essentials/controls
  argTypes: {
    children: { control: 'text' },
    color: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'danger'],
    },
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  color: 'primary',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  color: 'secondary',
  disabled: false,
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Button',
  color: 'danger',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  color: 'primary',
  disabled: true,
};
