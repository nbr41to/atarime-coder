import type { ComponentStory, ComponentMeta } from '@storybook/react';

import React from 'react';

import { Input } from '.';

export default {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    fullWidth: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  fullWidth: false,
};
