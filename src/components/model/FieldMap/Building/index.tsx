import type { FC } from 'react';
import type { FieldCoordinate, FieldMap } from 'src/types/field';

import Image from 'next/image';
import { useState } from 'react';

import { PreviewField } from 'src/components/model/FieldMap/Building/PreviewField';
import { Button } from 'src/components/ui/Button';
import { Input } from 'src/components/ui/Input';
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
  routes: {
    up: '',
    down: '',
    left: '',
    right: '',
  },
  actions: [],
};

export const Building: FC = () => {
  const [map, setMap] = useState<FieldMap>(initialMap);
  const [selectedPanels, setSelectedPanels] = useState<FieldCoordinate[]>([]);
  const [editingAction, setEditingAction] = useState('');
  const [inputCoordinate, setInputCoordinate] = useState<FieldCoordinate>();
  const [messageTextState, setMessageTextState] = useState('');
  const [issueIdState, setIssueIdState] = useState('');
  const [routePathsState, setRoutePathsState] = useState({
    up: '',
    down: '',
    left: '',
    right: '',
  });

  const { coordinate, onKeyDown } = useMapAction(map);

  /* 変化させるパネルを選択（複数選択可） */
  const onChangeSelectedCoordinates = (selectCoordinate: FieldCoordinate) => {
    if (editingAction) {
      /* パネルを選択して座標を入力 */
      setInputCoordinate(selectCoordinate);
    }
    /* 変化させるパネルを選択（複数選択可） */
    if (!editingAction) {
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
    }
  };

  /* FieldにObjectを作成 */
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

  /* Message Actionの作成 */
  const createMessageAction = () => {
    if (editingAction !== 'message') return;
    if (!inputCoordinate || !messageTextState) return;
    const newActions = [...map.actions];
    newActions.push({
      type: 'message',
      objectId: '',
      blockId: map.blocks[inputCoordinate.y][inputCoordinate.x],
      coordinate: inputCoordinate,
      message: messageTextState,
      willDisappear: false,
    });

    setMap({
      ...map,
      actions: newActions,
    });
    setEditingAction('');
    setInputCoordinate(undefined);
    setMessageTextState('');
  };

  /* Issue Actionの作成 */
  const createIssueAction = () => {
    if (editingAction !== 'issue') return;
    if (!inputCoordinate || !issueIdState) return;
    const newActions = [...map.actions];
    newActions.push({
      type: 'issue',
      issueId: issueIdState,
      coordinate: inputCoordinate,
    });
    setMap({
      ...map,
      actions: newActions,
    });
    setEditingAction('');
    setInputCoordinate(undefined);
    setIssueIdState('');
  };
  /* Routesの保存 */
  const saveRoutePaths = () => {
    setMap({
      ...map,
      routes: routePathsState,
    });
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

  /* 選択された座標のActionの削除 */
  const deleteAction = () => {
    if (!(selectedPanels.length > 0)) return;
    const newActions = [...map.actions];
    selectedPanels.forEach((selectedCoordinate) => {
      newActions.forEach((action, index) => {
        if (
          action.coordinate.x === selectedCoordinate.x &&
          action.coordinate.y === selectedCoordinate.y
        ) {
          newActions.splice(index, 1);
        }
      });
    });
    setMap({
      ...map,
      actions: newActions,
    });
  };

  return (
    <div className="flex justify-center gap-4">
      <div>
        Map Object
        <div className="max-h-[604px] overflow-y-scroll rounded bg-slate-800 px-6 py-4 text-white">
          <pre>
            <code>
              {JSON.stringify(
                map,
                (key, value) => {
                  if (key !== 'blocks' && value.length === 10) {
                    return JSON.stringify(value);
                  }

                  if (
                    key.includes('coordinate') ||
                    key.includes('Coordinate')
                  ) {
                    return JSON.stringify(value);
                  }

                  return value;
                },
                4
              )
                .replace(/"/g, '')
                .replace(/\\/g, '')}
            </code>
          </pre>
        </div>
      </div>
      <div
        className="outline-none"
        role="menu"
        tabIndex={0}
        onKeyDown={(e) => onKeyDown(e)}
      >
        Field Map
        <PreviewField
          coordinate={coordinate}
          fieldMap={map}
          selectedPanels={selectedPanels}
          onChangeSelectedCoordinates={onChangeSelectedCoordinates}
        />
        <div className="mt-2 flex items-start justify-between">
          <p className="w-[440px] whitespace-pre-wrap text-sm">
            {selectedPanels.map((c) => `(${c.x},${c.y})`).join(', ')}
          </p>
          <Button onClick={() => setSelectedPanels([])}>選択状態を解除</Button>
        </div>
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
            {/* Message Setting */}
            <Button
              disabled={!!editingAction}
              onClick={() => startEditAction('message')}
            >
              message
            </Button>
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

                <TextArea
                  placeholder="message"
                  rows={3}
                  onChange={(e) => setMessageTextState(e.target.value)}
                />
                <div className="space-x-2 text-center">
                  <Button onClick={createMessageAction}>決定</Button>
                  <Button color="secondary" onClick={cancelEditingAction}>
                    キャンセル
                  </Button>
                </div>
              </div>
            )}
            {/* Issue Setting */}
            <Button
              disabled={!!editingAction}
              onClick={() => startEditAction('issue')}
            >
              issue
            </Button>
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
                <span>Issue ID:</span>
                <Input
                  placeholder="js-1-2"
                  onChange={(e) => setIssueIdState(e.target.value)}
                />
                <div className="space-x-2 text-center">
                  <Button onClick={createIssueAction}>決定</Button>
                  <Button color="secondary" onClick={cancelEditingAction}>
                    キャンセル
                  </Button>
                </div>
              </div>
            )}
            {/* Route Setting */}
            <div className="space-y-2">
              <h4>route</h4>
              <div className="flex items-center">
                <span>上:</span>
                <Input
                  fullWidth
                  onChange={(e) =>
                    setRoutePathsState({
                      ...routePathsState,
                      up: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex items-center">
                <span>右:</span>
                <Input
                  fullWidth
                  onChange={(e) =>
                    setRoutePathsState({
                      ...routePathsState,
                      right: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex items-center">
                <span>下:</span>
                <Input
                  fullWidth
                  onChange={(e) =>
                    setRoutePathsState({
                      ...routePathsState,
                      down: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex items-center">
                <span>左:</span>
                <Input
                  fullWidth
                  onChange={(e) =>
                    setRoutePathsState({
                      ...routePathsState,
                      left: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <Button onClick={saveRoutePaths}>保存</Button>
          </div>
          <div className="mt-2">
            <Button color="secondary" onClick={deleteAction}>
              Actionの削除
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
