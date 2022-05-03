import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

/**
 * @param {number[][]} blocks - Map情報
 * @param {number[]} initialCoordinates - 初期座標
 */
type Props = {
  blocks: number[][];
  coordinate: {
    x: number;
    y: number;
  };
};

export const Field: FC<Props> = ({ blocks, coordinate }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  const styles = useSpring({
    top: 0,
    left: 0,
    to: { top: coordinate.y * 60, left: coordinate.x * 60 },
  });

  if (isLoading) {
    const words = ['S', 'Q', 'U', 'I', 'D'];
    const character = words[Math.floor(Math.random() * words.length)];
    const positions = [
      'top-0 left-12',
      'top-0 right-12',
      'bottom-0 left-12',
      'bottom-0 right-12',
    ];
    const position = positions[Math.floor(Math.random() * positions.length)];

    return (
      <div className="relative h-[600px] w-[600px] bg-white outline-none ring-2 ring-slate-600">
        <div className={`absolute text-[120px] ${position}`}>{character}</div>
      </div>
    );
  }

  return (
    <div className="relative h-[600px] w-[600px] bg-lime-300 outline-none ring-2 ring-slate-600">
      <animated.div
        className="absolute z-10 flex h-[60px] w-[60px] items-center justify-center rounded-md text-6xl drop-shadow"
        style={styles}
      >
        <Image
          className="h-[60px] w-[60px]"
          src="/squid.png"
          alt="tree"
          layout="fill"
        />
      </animated.div>
      <div className="absolute grid grid-cols-10">
        {blocks.map((row, y) =>
          row.map((block, x) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`block-(${x},${y})`}
              className="relative h-[60px] w-[60px]"
            >
              {block === 1 && (
                <Image
                  className="h-[60px] w-[60px]"
                  src="/tree1.png"
                  alt="tree"
                  layout="fill"
                />
              )}
              {block === 2 && (
                <Image
                  className="absolute h-[60px] w-[60px]"
                  src="/computer.png"
                  alt="computer"
                  layout="fill"
                  objectFit="contain"
                />
              )}
              {block === 3 && (
                <Image
                  className="absolute h-[60px] w-[60px]"
                  src="/strawberry.png"
                  alt="strawberry"
                  layout="fill"
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
