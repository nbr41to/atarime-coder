import React, { FC } from 'react';

type Props = JSX.IntrinsicElements['button'] & {
  children: string;
  // onClick: () => void;
};

export const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button
      type="button"
      className="cursor-pointer rounded-lg bg-black py-2 px-6 text-white"
      {...props}
    >
      {children}
    </button>
  );
};
