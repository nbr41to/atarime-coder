import type { FC } from 'react';

import { FieldInfo } from '../FieldInfo';

export const LoadingScreen: FC = () => {
  return (
    <div className="flex justify-center gap-4 outline-none">
      <div className="relative h-[600px] w-[600px] bg-white outline-none ring-2 ring-slate-600" />
      <FieldInfo message="" />
    </div>
  );
};
