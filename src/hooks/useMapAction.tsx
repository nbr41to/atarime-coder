import type { KeyboardEvent } from 'react';
import type {
  FieldAction,
  FieldCoordinate,
  FieldMap,
  FieldRoute,
} from 'src/types/field';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { enterableCodes } from 'src/const/field/fieldObjects';
import { mapA } from 'src/const/field/map_a';
import { localStorage } from 'src/utils/localStorage';

const defaultRouteCoordinates: {
  direction: 'up' | 'down' | 'left' | 'right';
  from: { x: number; y: number };
  to: { x: number; y: number };
}[] = [
  {
    direction: 'up',
    from: { x: 4, y: 0 },
    to: { x: 4, y: 9 },
  },
  {
    direction: 'up',
    from: { x: 5, y: 0 },
    to: { x: 5, y: 9 },
  },
  {
    direction: 'down',
    from: { x: 4, y: 9 },
    to: { x: 4, y: 0 },
  },
  {
    direction: 'down',
    from: { x: 5, y: 9 },
    to: { x: 5, y: 0 },
  },
  {
    direction: 'left',
    from: { x: 0, y: 4 },
    to: { x: 9, y: 4 },
  },
  {
    direction: 'left',
    from: { x: 0, y: 5 },
    to: { x: 9, y: 5 },
  },
  {
    direction: 'right',
    from: { x: 9, y: 4 },
    to: { x: 0, y: 4 },
  },
  {
    direction: 'right',
    from: { x: 9, y: 5 },
    to: { x: 0, y: 5 },
  },
];

const defaultRouteActions = (
  routes: FieldRoute
): Extract<FieldAction, { type: 'route' }>[] =>
  defaultRouteCoordinates
    .filter((r) => routes[r.direction])
    .map((r) => ({
      type: 'route',
      path: routes[r.direction] || '',
      coordinate: r.from,
      to: r.to,
    }));

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

    /* Actionフラグの回収 */
    fieldMap.actions.push(...defaultRouteActions(fieldMap.routes));
    const action = fieldMap.actions.find(
      (r) =>
        r.coordinate.x === currentCoordinate.x &&
        r.coordinate.y === currentCoordinate.y
    );
    if (!action) {
      setCurrentMessage('');

      return;
    }

    if (action.type === 'route') {
      if (!checkEntryRoute(action.path)) {
        setCurrentMessage('まだこの先には進めないようだ。\n🚩を集めよう！');

        return;
      }

      localStorage.setPreviousCoordinate(action.to);
      if (router.asPath.split('/')[2] === action.path) {
        router.reload();
      }
      setIsInitial(true);
      router.push(`/field/${action.path}`);

      return;
    }

    if (action.type === 'message') {
      setCurrentMessage(action.message);

      return;
    }

    if (action.type === 'issue') {
      localStorage.setPreviousCoordinate(currentCoordinate);
      router.push(`/issues/${action.issueId}`);
    }
  }, [currentCoordinate, fieldMap, router, isInitial]);

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
