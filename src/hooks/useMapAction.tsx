import { useRouter } from 'next/router';
import { useState, KeyboardEvent, useCallback, useEffect } from 'react';

// const initialAction: Extract<FieldAction, { type: 'message' }> = {
//   type: 'message',
//   objectId: '',
//   blockId: -1,
//   coordinate: { x: -1, y: -1 },
//   message: '',
//   willDisappear: false,
// };

export const useMapAction = (map: FieldMap) => {
  const router = useRouter();
  const { asPath } = router;

  const getCoordinate = () => {
    const coordinate = asPath.split('?')[1];
    if (!coordinate) return undefined;
    const [x, y] = coordinate.slice(-3).split(',');

    return { x: Number(x), y: Number(y) };
  };

  const [currentCoordinate, setCurrentCoordinate] = useState<FieldCoordinate>(
    getCoordinate() || map.initialCoordinates
  );

  const [currentMessage, setCurrentMessage] = useState('');
  const [isInitial, setIsInitial] = useState(true);

  /* フラグ回収 */
  useEffect(() => {
    if (isInitial) return;

    const action = map.actions.find(
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
      router.push({
        pathname: `/field/${action.path}`,
        search: `?coordinate=${action.nextCoordinate.x},${action.nextCoordinate.y}`,
      });
    }
  }, [currentCoordinate, map.actions, router, isInitial]);

  const isMovable = useCallback(
    (x: number, y: number) => {
      if (x < 0 || y < 0 || x > 9 || y > 9) return false;

      return map.blocks[y][x] !== 1;
    },
    [map.blocks]
  );

  const moveTop = () => {
    const will = { x: currentCoordinate.x, y: currentCoordinate.y - 1 };
    if (!isMovable(will.x, will.y)) return;
    setCurrentCoordinate(will);
    setIsInitial(false);
  };
  const moveRight = () => {
    const will = { x: currentCoordinate.x + 1, y: currentCoordinate.y };
    if (!isMovable(will.x, will.y)) return;
    setCurrentCoordinate(will);
    setIsInitial(false);
  };
  const moveBottom = () => {
    const will = { x: currentCoordinate.x, y: currentCoordinate.y + 1 };
    if (!isMovable(will.x, will.y)) return;
    setCurrentCoordinate(will);
    setIsInitial(false);
  };
  const moveLeft = () => {
    const will = { x: currentCoordinate.x - 1, y: currentCoordinate.y };
    if (!isMovable(will.x, will.y)) return;
    setCurrentCoordinate(will);
    setIsInitial(false);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
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
  };

  return { coordinate: currentCoordinate, message: currentMessage, onKeyDown };
};
