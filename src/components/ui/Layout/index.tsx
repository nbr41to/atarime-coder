import type { FC, ReactNode } from 'react';

import Image from 'next/image';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const focusScreen = () => {
    document?.getElementById('screen')?.focus();
  };

  return (
    <div className="h-screen" role="menu" tabIndex={0} onKeyDown={focusScreen}>
      <header className="flex items-center justify-center gap-2 bg-orange-500 p-1">
        <h1 className="text-2xl font-bold tracking-wider text-gray-100">
          あたりめコーダー
        </h1>
        <div className="relative h-[40px] w-[40px]">
          <Image src="/squid.png" alt="squid" layout="fill" />
        </div>
      </header>

      <main className="">{children}</main>

      <footer className="absolute bottom-0 w-full bg-orange-500 text-center">
        <small className="text-gray-100">@progLearning</small>
      </footer>
    </div>
  );
};
