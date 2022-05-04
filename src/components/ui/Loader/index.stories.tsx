import type { ComponentStory, ComponentMeta } from '@storybook/react';

import React from 'react';

import { Loader } from '.';

export default {
  title: 'UI/Loader',
  component: Loader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
