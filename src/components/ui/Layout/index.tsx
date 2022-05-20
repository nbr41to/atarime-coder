import type { FC, ReactNode } from 'react';

import Image from 'next/image';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const focusScreen = () => {
    const screen = document?.getElementById('screen');
    if (screen) screen.focus();
  };

  return (
    <div
      className="relative h-full min-h-screen"
      role="menu"
      tabIndex={0}
      onKeyDown={focusScreen}
    >
      <header className="relative z-10 flex h-[52px] items-center justify-center gap-2 bg-orange-500 p-1">
        <h1 className="text-2xl font-bold tracking-wider text-gray-100">
          あたりめコーダー
        </h1>
        <div className="relative h-[40px] w-[40px]">
          <Image src="/squid.png" alt="squid" layout="fill" />
        </div>
      </header>

      <main className="relative h-[calc(100%-84px)] overflow-scroll">
        {children}
      </main>

      <footer className="absolute bottom-0 z-10 flex h-[32px] w-full items-center justify-center bg-orange-500 text-center">
        <a
          className="cursor-pointer text-gray-100"
          href="https://proglab.nbr41.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @progLearning
        </a>
      </footer>
    </div>
  );
};
