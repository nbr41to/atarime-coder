import type { FC } from 'react';

import React from 'react';

type Props = JSX.IntrinsicElements['input'] & {
  fullWidth?: boolean;
};

export const Input: FC<Props> = ({ fullWidth, ...props }) => {
  return (
    <input
      className={`rounded border-4 border-double border-black px-2 text-lg outline-none ${
        fullWidth && 'w-full'
      }`}
      {...props}
    />
  );
};
