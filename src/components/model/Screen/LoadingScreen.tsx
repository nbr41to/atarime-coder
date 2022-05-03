import { FC } from 'react';

import { FieldInfo } from '../FieldInfo';

export const LoadingScreen: FC = () => {
  return (
    <div className="flex justify-center gap-4 outline-none">
      <div className="ring-2 ring-slate-600 w-[600px] h-[600px] bg-gray-600 relative outline-none" />
      <FieldInfo message="" />
    </div>
  );
};
