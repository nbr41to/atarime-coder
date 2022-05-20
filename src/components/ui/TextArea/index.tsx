import type { FC } from 'react';

import React from 'react';

type Props = JSX.IntrinsicElements['textarea'] & {
  fullWidth?: boolean;
};

export const TextArea: FC<Props> = ({ fullWidth, ...props }) => {
  return (
    <textarea
      className={`rounded border-4 border-double border-black px-2 text-lg outline-none ${
        fullWidth && 'w-full'
      }`}
      {...props}
    />
  );
};
