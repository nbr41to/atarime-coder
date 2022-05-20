import type { FC } from 'react';
import type { FieldCoordinate, FieldMap } from 'src/types/field';

import Image from 'next/image';
import { useState } from 'react';

import { PreviewField } from 'src/components/model/FieldMap/Building/PreviewField';
import { Button } from 'src/components/ui/Button';
import { TextArea } from 'src/components/ui/TextArea';
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
  const [editingAction, setEditingAction] = useState('');
  const [inputCoordinate, setInputCoordinate] = useState<FieldCoordinate>();

  const { coordinate, onKeyDown } = useMapAction(map);

  /* 変化させるパネルを選択（複数選択可） */
  const onChangeSelectedPanels = (selectCoordinate: FieldCoordinate) => {
    if (editingAction) {
      /* パネルを選択して座標を入力 */
      setInputCoordinate(selectCoordinate);
    } else if (
      /* 変化させるパネルを選択（複数選択可） */
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

  const createMessageAction = () => {
    if (editingAction !== 'message') return;
    if (!inputCoordinate) return;
    const newActions = [...map.actions];
    newActions.push({
      type: 'message',
      objectId: '',
      blockId: map.blocks[inputCoordinate.y][inputCoordinate.x],
      coordinate: inputCoordinate,
      message: '',
      willDisappear: false,
    });
    setMap({
      ...map,
      actions: newActions,
    });
    setEditingAction('');
    setInputCoordinate(undefined);
  };

  /* Actionの編集を開始 */
  const startEditAction = (action: string) => {
    setEditingAction(action);
    if (selectedPanels.length === 1) {
      setInputCoordinate(selectedPanels[0]);

      return;
    }
    setInputCoordinate(undefined);
  };

  /* Actionの編集をキャンセル */
  const cancelEditingAction = () => {
    setEditingAction('');
    setInputCoordinate(undefined);
  };

  return (
    <div className="flex justify-center gap-4 outline-none">
      <div>
        Map Object
        <div className="min-h-[604px] overflow-y-scroll rounded bg-slate-800 px-6 py-4 text-white">
          <pre>
            <code>
              {JSON.stringify(
                map,
                (key, value) => {
                  if (key !== 'blocks' && value.length === 10) {
                    return JSON.stringify(value);
                  }

                  return value;
                },
                4
              ).replace(/"/g, '')}
            </code>
          </pre>
        </div>
      </div>
      <div role="menu" tabIndex={0} onKeyDown={(e) => onKeyDown(e)}>
        Field Map
        <PreviewField
          coordinate={coordinate}
          fieldMap={map}
          selectedPanels={selectedPanels}
          onChangeSelectedPanels={onChangeSelectedPanels}
        />
      </div>
      <div className="flex gap-4">
        <div>
          Object
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
            {/* Message Setting */}
            <Button onClick={() => startEditAction('message')}>message</Button>
            {editingAction === 'message' && (
              <div className="flex flex-col gap-2">
                <div>
                  {inputCoordinate ? (
                    <div>
                      &#123; x: {inputCoordinate?.x}, y: {inputCoordinate?.y}{' '}
                      &#125;
                    </div>
                  ) : (
                    <div>座標を選択してください。</div>
                  )}
                </div>

                <TextArea placeholder="message" rows={3} />
                <div className="space-x-2 text-center">
                  <Button onClick={createMessageAction}>決定</Button>
                  <Button color="secondary" onClick={cancelEditingAction}>
                    キャンセル
                  </Button>
                </div>
              </div>
            )}
            {/* Issue Setting */}
            <Button onClick={() => startEditAction('issue')}>issue</Button>
            {editingAction === 'issue' && (
              <div className="flex flex-col gap-2">
                <div>
                  {inputCoordinate ? (
                    <div>
                      &#123; x: {inputCoordinate?.x}, y: {inputCoordinate?.y}{' '}
                      &#125;
                    </div>
                  ) : (
                    <div>座標を選択してください。</div>
                  )}
                </div>

                <TextArea placeholder="message" rows={3} />
                <div className="space-x-2 text-center">
                  <Button onClick={createMessageAction}>決定</Button>
                  <Button color="secondary" onClick={cancelEditingAction}>
                    キャンセル
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
