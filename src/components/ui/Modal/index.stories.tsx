import type { ComponentStory, ComponentMeta } from '@storybook/react';

import React, { useState } from 'react';

import { Modal } from '.';

export default {
  title: 'UI/Modal',
  component: Modal,
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['small', 'middle', 'large', 'full'],
    },
    message: { control: 'text' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeHandler = () => setIsOpen(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        open
      </button>
      <Modal {...args} isOpen={isOpen} close={closeHandler} />
    </>
  );
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  message: 'Modal',
  children: <div className="text-center">content!!</div>,
};

export const Middle = Template.bind({});
Middle.args = {
  size: 'middle',
  message: 'Modal',
  children: <div className="text-center">content!!</div>,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  message: 'Modal',
  children: <div className="text-center">content!!</div>,
};

export const Full = Template.bind({});
Full.args = {
  size: 'full',
  message: 'Modal',
  children: <div className="text-center">content!!</div>,
};
