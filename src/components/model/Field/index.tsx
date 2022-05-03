import Image from 'next/image';
import { FC } from 'react';
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
  const styles = useSpring({
    top: 0,
    left: 0,
    to: { top: coordinate.y * 60, left: coordinate.x * 60 },
  });

  return (
    <div className="ring-2 ring-slate-600 w-[600px] h-[600px] bg-lime-300 relative outline-none">
      <animated.div
        className="w-[60px] h-[60px] absolute z-10 rounded-md text-6xl drop-shadow flex items-center justify-center"
        style={styles}
      >
        <Image
          className="w-[60px] h-[60px]"
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
              className="w-[60px] h-[60px] relative"
            >
              {block === 1 && (
                <Image
                  className="w-[60px] h-[60px]"
                  src="/tree1.png"
                  alt="tree"
                  layout="fill"
                />
              )}
              {block === 2 && (
                <Image
                  className="absolute w-[60px] h-[60px]"
                  src="/computer.png"
                  alt="computer"
                  layout="fill"
                  objectFit="contain"
                />
              )}
              {block === 3 && (
                <Image
                  className="absolute w-[60px] h-[60px]"
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
