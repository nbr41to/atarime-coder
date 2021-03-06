import type { FC } from 'react';

import { UIPanel } from '../UIPanel';

export const LoadingScreen: FC = () => {
  return (
    <div className="flex justify-center gap-4 outline-none">
      <div className="relative h-[600px] w-[600px] bg-white outline-none ring-2 ring-slate-600" />
      <UIPanel message="" coordinate={{ x: 0, y: 0 }} />
    </div>
  );
};
