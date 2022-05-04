import type { KeyboardEvent } from 'react';
import type { FieldCoordinate, FieldMap } from 'src/types/field';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { localStorage } from 'src/utils/localStorage';

export const useMapAction = (fieldMap: FieldMap) => {
  const router = useRouter();

  const isEnterable = (coordinate: FieldCoordinate) => {
    const { x, y } = coordinate;
    if (x < 0 || y < 0 || x > 9 || y > 9) return false;

    return fieldMap.blocks[y][x] !== 1;
  };

  const getCoordinate = (): FieldCoordinate | null => {
    const previousCoordinate = localStorage.getItem(
      'previousCoordinate'
    ) as FieldCoordinate | null;
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
      localStorage.setItem('previousCoordinate', action.nextCoordinate);
      router.push({
        pathname: `/field/${action.path}`,
        // search: `?coordinate=${action.nextCoordinate.x},${action.nextCoordinate.y}`,
      });

      return;
    }
    if (action.type === 'issue') {
      localStorage.setItem('previousCoordinate', currentCoordinate);
      router.push(`/issues/${action.issueId}`);
    }
  }, [currentCoordinate, fieldMap.actions, router, isInitial]);

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
