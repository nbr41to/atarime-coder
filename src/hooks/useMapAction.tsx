import type { KeyboardEvent } from 'react';
import type { FieldCoordinate, FieldMap } from 'src/types/field';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { enterableCodes } from 'src/const/field/fieldObjects';
import { mapA } from 'src/const/field/map_a';
import { localStorage } from 'src/utils/localStorage';

export const useMapAction = (fieldMap: FieldMap) => {
  const router = useRouter();

  /* FieldObjectの進入可能チェック */
  const isEnterable = (coordinate: FieldCoordinate) => {
    const { x, y } = coordinate;
    if (x < 0 || y < 0 || x > 9 || y > 9) return false;

    return enterableCodes.includes(fieldMap.blocks[y][x]);
  };

  /* 前回の座標の取得 */
  const getCoordinate = (): FieldCoordinate | null => {
    const previousCoordinate = localStorage.getPreviousCoordinate();
    if (previousCoordinate && isEnterable(previousCoordinate)) {
      return previousCoordinate;
    }

    return null;
  };

  const [currentCoordinate, setCurrentCoordinate] = useState<FieldCoordinate>(
    getCoordinate() || fieldMap.initialCoordinate
  );
  const [currentMessage, setCurrentMessage] = useState('');
  const [isInitial, setIsInitial] = useState(true);

  /* Field移動の権限チェック */
  const checkEntryRoute = (path: string) => {
    const flags = localStorage.getFlags();
    const { entryFlag } = mapA[path];

    return flags.length >= entryFlag;
  };

  /* フラグ回収 */
  useEffect(() => {
    if (isInitial) return;
    localStorage.removeItem('previousCoordinate');

    const action = fieldMap.actions.find(
      (r) =>
        r.coordinate.x === currentCoordinate.x &&
        r.coordinate.y === currentCoordinate.y
    );
    if (!action) {
      setCurrentMessage('');

      return;
    }
    if (action.type === 'message') {
      setCurrentMessage(action.message);

      return;
    }

    if (action.type === 'route') {
      if (!checkEntryRoute(action.path)) {
        setCurrentMessage('まだこの先には進めないようだ。');

        return;
      }

      localStorage.setPreviousCoordinate(action.nextCoordinate);
      if (router.asPath.split('/')[2] === action.path) {
        router.reload();
      }
      setIsInitial(true);
      router.push(`/field/${action.path}`);

      return;
    }

    if (action.type === 'issue') {
      localStorage.setPreviousCoordinate(currentCoordinate);
      router.push(`/issues/${action.issueId}`);
    }
  }, [currentCoordinate, fieldMap.actions, router, isInitial]);

  /* 移動ロジック */
  const moveTop = () => {
    const will = { x: currentCoordinate.x, y: currentCoordinate.y - 1 };
    if (!isEnterable(will)) return;
    setCurrentCoordinate(will);
    setIsInitial(false);
  };
  const moveRight = () => {
    const will = { x: currentCoordinate.x + 1, y: currentCoordinate.y };
    if (!isEnterable(will)) return;
    setCurrentCoordinate(will);
    setIsInitial(false);
  };
  const moveBottom = () => {
    const will = { x: currentCoordinate.x, y: currentCoordinate.y + 1 };
    if (!isEnterable(will)) return;
    setCurrentCoordinate(will);
    setIsInitial(false);
  };
  const moveLeft = () => {
    const will = { x: currentCoordinate.x - 1, y: currentCoordinate.y };
    if (!isEnterable(will)) return;
    setCurrentCoordinate(will);
    setIsInitial(false);
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

  return { coordinate: currentCoordinate, message: currentMessage, onKeyDown };
};
