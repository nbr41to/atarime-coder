import type { FC } from 'react';
import type { FieldCoordinate, FieldMap } from 'src/types/field';

import Image from 'next/image';
import { useState } from 'react';

import { PreviewField } from 'src/components/model/FieldMap/Building/PreviewField';
import { Button } from 'src/components/ui/Button';
import { baseFieldObjects } from 'src/const/field/fieldObjects';
import { useMapAction } from 'src/hooks/useMapAction';

const initialMap = {
  entryFlag: 0,
  blocks: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  initialCoordinate: { x: 0, y: 0 },
  actions: [],
};

export const Building: FC = () => {
  const [map, setMap] = useState<FieldMap>(initialMap);
  const [selectedPanels, setSelectedPanels] = useState<FieldCoordinate[]>([]);

  const { coordinate, onKeyDown } = useMapAction(map);

  const onChangeSelectedPanels = (selectCoordinate: FieldCoordinate) => {
    if (
      selectedPanels.some(
        (c) => c.x === selectCoordinate.x && c.y === selectCoordinate.y
      )
    ) {
      setSelectedPanels(
        selectedPanels.filter(
          (c) => c.x !== selectCoordinate.x || c.y !== selectCoordinate.y
        )
      );
    } else {
      setSelectedPanels([...selectedPanels, selectCoordinate]);
    }
  };

  const createObject = (code: number) => {
    if (!selectedPanels) return;
    const newBlocks = [...map.blocks];
    selectedPanels.forEach((selectedCoordinate) => {
      newBlocks[selectedCoordinate.y][selectedCoordinate.x] = code;
    });

    setMap({
      ...map,
      blocks: newBlocks,
    });
    setSelectedPanels([]);
  };

  return (
    <div>
      <div
        id="screen"
        className="flex justify-center gap-4 outline-none"
        role="menu"
        tabIndex={0}
        onKeyDown={(e) => onKeyDown(e)}
      >
        <PreviewField
          coordinate={coordinate}
          fieldMap={map}
          selectedPanels={selectedPanels}
          onChangeSelectedPanels={onChangeSelectedPanels}
        />
        <div className="flex gap-4">
          <div>
            {baseFieldObjects.map((object) => (
              <div
                key={object.code}
                className={`relative h-[60px] w-[60px] cursor-pointer overflow-hidden ${
                  object.code === 0 && 'bg-lime-300'
                }`}
                onClick={() => createObject(object.code)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    createObject(object.code);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                {object.code}
                {object.code !== 0 && (
                  <Image
                    src={`/${object.name}.png`}
                    alt={object.name}
                    layout="fill"
                    objectFit="contain"
                  />
                )}
              </div>
            ))}
          </div>
          <div>
            <h4>Action</h4>
            <div className="flex flex-col gap-2">
              <Button>route</Button>
              <Button>message</Button>
              <Button>issue</Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <pre>
          <code>{JSON.stringify(map)}</code>
        </pre>
      </div>
    </div>
  );
};
