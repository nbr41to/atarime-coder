import type { FC } from 'react';

import React from 'react';

type Props = JSX.IntrinsicElements['button'] & {
  children: string;
  color?: 'primary' | 'secondary' | 'danger';
};

const colorClasses = {
  primary: 'bg-blue-500 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
  danger: 'bg-red-500 hover:bg-red-700 text-white',
};

export const Button: FC<Props> = ({
  children,
  color = 'primary',
  ...props
}) => {
  const colorClass = colorClasses[color];

  return (
    <button
      type="button"
      className={`cursor-pointer rounded-lg py-2 px-6 ${colorClass} disabled:darkness-50 disabled:brightness-75`}
      {...props}
    >
      {children}
    </button>
  );
};
