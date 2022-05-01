import React from 'react';

type ButtonProps = JSX.IntrinsicElements['button'] & {
  label: string;
  // onClick: () => void;
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className="bg-blue-400 text-white rounded-lg p-2"
      {...props}
    >
      {label}
    </button>
  );
};
