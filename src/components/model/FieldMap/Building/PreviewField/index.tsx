import type { FC } from 'react';
import type { FieldCoordinate, FieldMap } from 'src/types/field';

import Image from 'next/image';
import { animated, useSpring } from 'react-spring';

/**
 * @param {number[][]} blocks - Map情報
 * @param {number[]} initialCoordinate - 初期座標
 */
type Props = {
  fieldMap: FieldMap;
  coordinate: {
    x: number;
    y: number;
  };
  selectedPanels: FieldCoordinate[];
  // eslint-disable-next-line no-unused-vars
  onChangeSelectedCoordinates: (selectCoordinate: FieldCoordinate) => void;
};

export const PreviewField: FC<Props> = ({
  fieldMap,
  coordinate,
  selectedPanels,
  onChangeSelectedCoordinates,
}) => {
  const styles = useSpring({
    top: 0,
    left: 0,
    to: { top: coordinate.y * 60, left: coordinate.x * 60 },
  });

  const isSelected = (c: FieldCoordinate) => {
    return selectedPanels.some(
      (selectedCoordinate) =>
        selectedCoordinate.x === c.x && selectedCoordinate.y === c.y
    );
  };

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
        {fieldMap.blocks.map((row, y) =>
          row.map((block, x) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`block-(${x},${y})`}
              className={`relative h-[60px] w-[60px] cursor-pointer overflow-hidden  ${
                isSelected({ x, y }) && 'bg-blue-800/30'
              }`}
              role="button"
              tabIndex={0}
              onClick={() => {
                onChangeSelectedCoordinates({ x, y });
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onChangeSelectedCoordinates({ x, y });
                }
              }}
            >
              {block === 1 && (
                <Image
                  className="h-[60px] w-[60px]"
                  src="/tree1.png"
                  alt="tree"
                  layout="fill"
                  objectFit="contain"
                />
                // <div className="flc text-[50px]">🌳</div> // 絵文字パターンw
              )}
              {block === 2 && (
                <Image
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
                  objectFit="contain"
                />
              )}
              {block === 4 && (
                <Image
                  className="absolute h-[60px] w-[60px]"
                  src="/girl.png"
                  alt="girl"
                  layout="fill"
                  objectFit="contain"
                />
              )}
              {block === 5 && (
                <Image
                  className="absolute h-[60px] w-[60px]"
                  src="/ojizou.png"
                  alt="ojizou"
                  layout="fill"
                  objectFit="contain"
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
