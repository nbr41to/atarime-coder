import { useRouter } from 'next/router';
import { KeyboardEvent, useEffect, useState } from 'react';
import useSWR from 'swr';

// const initialAction = {
//   objectId: '',
//   blockId: -1,
//   coordinate: { x: -1, y: -1 },
//   message: '',
//   willDisappear: false,
// };

export const useCurrentCoordinate = (map: FieldMap) => {
  const router = useRouter();
  const { data: currentCoordinate, mutate } = useSWR<FieldCoordinate>(
    '/me/coordinate',
    null,
    {
      revalidateOnReconnect: false,
      revalidateOnFocus: false,
      revalidateOnMount: false,
      fallbackData: map.initialCoordinates,
    }
  );
  // const [currentAction, setCurrentAction] =
  //   useState<FieldAction>(initialAction);
  const [isInitial, setIsInitial] = useState(true);

  /* 移動フラグ */
  useEffect(() => {
    // console.log(currentCoordinate);
    if (!currentCoordinate) return;
    if (isInitial) return;
    const route = map.routes.find(
      (r) =>
        r.coordinate.x === currentCoordinate.x &&
        r.coordinate.y === currentCoordinate.y
    );
    if (route) {
      // window.location.href = `/field/${route.path}?coordinate=${route.nextCoordinate.x},${route.nextCoordinate.y}`;
      mutate(route.nextCoordinate);
      router.push(`/field/${route.path}`);
    }
  }, [currentCoordinate, map.routes, router, isInitial]);

  const isMovable = (x: number, y: number) => {
    if (x < 0 || y < 0 || x > 9 || y > 9) return false;

    return map.blocks[y][x] !== 1;
  };

  const moveTop = () => {
    if (!currentCoordinate) return;
    const will = { x: currentCoordinate.x, y: currentCoordinate.y - 1 };
    if (!isMovable(will.x, will.y)) return;
    mutate(will);
    setIsInitial(false);
  };
  const moveRight = () => {
    if (!currentCoordinate) return;
    const will = { x: currentCoordinate.x + 1, y: currentCoordinate.y };
    if (!isMovable(will.x, will.y)) return;
    mutate(will);
    setIsInitial(false);
  };
  const moveBottom = () => {
    if (!currentCoordinate) return;
    const will = { x: currentCoordinate.x, y: currentCoordinate.y + 1 };
    if (!isMovable(will.x, will.y)) return;
    mutate(will);
    setIsInitial(false);
  };
  const moveLeft = () => {
    if (!currentCoordinate) return;
    const will = { x: currentCoordinate.x - 1, y: currentCoordinate.y };
    if (!isMovable(will.x, will.y)) return;
    mutate(will);
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

  if (!currentCoordinate) {
    return { coordinate: map.initialCoordinates, onKeyDown };
  }

  return { coordinate: currentCoordinate, onKeyDown };
};
