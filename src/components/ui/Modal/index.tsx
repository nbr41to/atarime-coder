import type { FC, ReactNode } from 'react';

// import { useRouter } from 'next/router';
import ReactDOM from 'react-dom';

const Portal = ({ children }: { children: ReactNode }) => {
  if (typeof document !== 'undefined') {
    const element = document.querySelector('#modal-root');

    return element ? ReactDOM.createPortal(children, element) : null;
  }

  return null;
};

type Props = {
  isOpen: boolean;
  close: () => void;
  size?: 'small' | 'middle' | 'large' | 'full';
  message?: string;
  children?: ReactNode;
};

const sizeClasses = {
  small: 'w-40 h-60',
  middle: 'w-[600px] h-[700px]',
  large: 'w-[1000px] h-[800px]',
  full: 'w-full h-full m-8',
};

export const Modal: FC<Props> = ({
  isOpen,
  close,
  size = 'middle',
  message,
  children,
}) => {
  // const router = useRouter();
  const closeHandler = () => {
    close();
  };

  const sizeClass = sizeClasses[size];

  /* ページ遷移時にModalを閉じる */
  // useEffect(() => {
  //   router.events.on('routeChangeStart', closeHandler);

  //   return () => {
  //     router.events.off('routeChangeStart', closeHandler);
  //   };
  // }, []);

  return (
    <Portal>
      {isOpen && (
        <div className="fixed top-0 z-50 flex h-full w-full items-center justify-center bg-slate-700/20 backdrop-blur">
          <div
            className="absolute h-full w-full cursor-pointer"
            onClick={closeHandler}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Escape' && closeHandler()}
            role="button"
            aria-label="close modal"
          />
          <div className={`relative h-[600px] rounded bg-white ${sizeClass}`}>
            {children && children}
            {message && <p className="text-center">{message}</p>}
          </div>
        </div>
      )}
    </Portal>
  );
};
