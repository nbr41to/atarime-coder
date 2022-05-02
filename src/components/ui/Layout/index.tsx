import Image from 'next/image';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <header className="bg-orange-500 flex justify-center items-center gap-2 p-1">
        <h1 className="text-2xl font-bold text-gray-100 tracking-wider">
          あたりめコーダー
        </h1>
        <div className="relative w-[40px] h-[40px]">
          <Image src="/squid.png" alt="squid" layout="fill" />
        </div>
      </header>

      <main className="">{children}</main>

      <footer>@progLearning</footer>
    </div>
  );
};
