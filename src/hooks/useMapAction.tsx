/* eslint-disable no-console */
import { useRouter } from 'next/router';
import {
  useState,
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
} from 'react';

const initialAction = {
  objectId: '',
  blockId: -1,
  coordinate: { x: -1, y: -1 },
  message: '',
  willDisappear: false,
};

export const useMapAction = (map: FieldMap) => {
  const router = useRouter();
  const { asPath } = router;

  const getCoordinate = useMemo(() => {
    const coordinate = asPath.split('?')[1];
    if (!coordinate) return undefined;
    const [x, y] = coordinate.slice(-3).split(',');

    return { x: Number(x), y: Number(y) };
  }, [asPath]);

  const [currentCoordinate, setCurrentCoordinate] = useState<FieldCoordinate>(
    getCoordinate || map.initialCoordinates
  );
  console.log('currentCoordinate', currentCoordinate);
  const [currentAction, setCurrentAction] =
    useState<FieldAction>(initialAction);
  const [isInitial, setIsInitial] = useState(true);
  console.log('isInitial', isInitial);

  useEffect(() => {
    if (isInitial) return;
    setCurrentCoordinate(getCoordinate || map.initialCoordinates);
  }, [asPath]);

  /* 移動フラグ */
  useEffect(() => {
    if (isInitial) return;
    const route = map.routes.find(
      (r) =>
        r.coordinate.x === currentCoordinate.x &&
        r.coordinate.y === currentCoordinate.y
    );
    if (route) {
      setIsInitial(true);
      router.push({
        pathname: `/field/${route.path}`,
        search: `?coordinate=${route.nextCoordinate.x},${route.nextCoordinate.y}`,
      });
    }
  }, [currentCoordinate, map.routes, router, isInitial]);

  /* アクションフラグ */
  useEffect(() => {
    const action = map.actions.find(
      (a) =>
        a.coordinate.x === currentCoordinate.x &&
        a.coordinate.y === currentCoordinate.y
    );
    if (action) {
      setCurrentAction(action);
    } else {
      setCurrentAction(initialAction);
    }
  }, [currentCoordinate, map.actions, router]);

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

  return { coordinate: currentCoordinate, action: currentAction, onKeyDown };
};
