import type { ComponentStory, ComponentMeta } from '@storybook/react';

import React from 'react';

import { TextArea } from '.';

export default {
  title: 'UI/TextArea',
  component: TextArea,
  argTypes: {
    fullWidth: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  fullWidth: false,
};
