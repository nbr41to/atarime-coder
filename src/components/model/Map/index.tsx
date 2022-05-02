import Image from 'next/image';
import { useState, KeyboardEvent, FC } from 'react';
import { animated, useSpring } from 'react-spring';

/**
 * @param {number[][]} blocks - Map情報
 * @param {number[]} initialCoordinates - 初期座標
 */
type Props = {
  blocks: number[][];
  initialCoordinates: {
    x: number;
    y: number;
  };
};

export const Map: FC<Props> = ({ blocks, initialCoordinates }) => {
  /* 座標 */
  const [coordinates, setCoordinates] = useState(initialCoordinates);
  const styles = useSpring({
    top: 0,
    left: 0,
    to: { top: coordinates.y * 60, left: coordinates.x * 60 },
  });
  const isMovable = (x: number, y: number) => {
    if (x < 0 || y < 0 || x > 9 || y > 9) return false;
    return blocks[y][x] !== 1;
  };

  const moveTop = () => {
    const will = { x: coordinates.x, y: coordinates.y - 1, direction: 'up' };
    if (!isMovable(will.x, will.y)) return;
    setCoordinates(will);
  };
  const moveRight = () => {
    const will = { x: coordinates.x + 1, y: coordinates.y, direction: 'right' };
    if (!isMovable(will.x, will.y)) return;
    setCoordinates(will);
  };
  const moveBottom = () => {
    const will = { x: coordinates.x, y: coordinates.y + 1, direction: 'down' };
    if (!isMovable(will.x, will.y)) return;
    setCoordinates(will);
  };
  const moveLeft = () => {
    const will = { x: coordinates.x - 1, y: coordinates.y, direction: 'left' };
    if (!isMovable(will.x, will.y)) return;
    setCoordinates(will);
  };

  const [isAwait, setIsAwait] = useState(false);
  const onKeyDown = async (e: KeyboardEvent<HTMLDivElement>) => {
    if (isAwait) return;
    setIsAwait(true);
    switch (e.key) {
      case 'ArrowUp':
      case 'w':
        moveTop();
        break;
      case 'ArrowRight':
      case 'd':
        moveRight();
        break;
      case 'ArrowDown':
      case 's':
        moveBottom();
        break;
      case 'ArrowLeft':
      case 'a':
        moveLeft();
        break;
      // case ' ': // space
      // case 'f':
      //   action();
      //   break;
      default:
        break;
    }
    await new Promise((s) => {
      setTimeout(s, 80);
    });
    setIsAwait(false);
  };

  return (
    <div
      className="ring-2 ring-slate-600 w-[600px] h-[600px] bg-lime-300 relative outline-none"
      role="menu"
      tabIndex={0}
      onKeyDown={(e) => onKeyDown(e)}
    >
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
