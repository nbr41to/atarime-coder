import type { FC } from 'react';

import React from 'react';

type Props = JSX.IntrinsicElements['input'];

export const Input: FC<Props> = ({ ...props }) => {
  return <input className="border-2 border-double" {...props} />;
};
