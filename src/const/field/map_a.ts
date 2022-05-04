import type { FieldMapData } from 'src/types/field';

export const mapA: FieldMapData = {
  'a-1': {
    blocks: [
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 1, 1],
      [1, 0, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    initialCoordinate: { x: 3, y: 8 },
    actions: [
      {
        type: 'route',
        path: 'a-2',
        coordinate: { x: 4, y: 0 },
        nextCoordinate: { x: 4, y: 9 },
      },
      {
        type: 'route',
        path: 'a-2',
        coordinate: { x: 5, y: 0 },
        nextCoordinate: { x: 4, y: 9 },
      },
    ],
  },

  'a-2': {
    blocks: [
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 2, 0, 0, 3, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    ],
    initialCoordinate: { x: 4, y: 9 },
    actions: [
      {
        type: 'route',
        path: 'a-1',
        coordinate: { x: 4, y: 9 },
        nextCoordinate: { x: 4, y: 0 },
      },
      {
        type: 'route',
        path: 'a-1',
        coordinate: { x: 5, y: 9 },
        nextCoordinate: { x: 5, y: 0 },
      },
      {
        type: 'message',
        objectId: '',
        blockId: 3,
        coordinate: { x: 6, y: 4 },
        message: 'これはイチゴです。',
        willDisappear: true,
      },
      {
        type: 'message',
        objectId: '',
        blockId: 0,
        coordinate: { x: 4, y: 0 },
        message: 'まだ進めないようだ。',
        willDisappear: false,
      },
      {
        type: 'message',
        objectId: '',
        blockId: 0,
        coordinate: { x: 5, y: 0 },
        message: 'まだ進めないようだ。',
        willDisappear: false,
      },
      {
        type: 'issue',
        issueId: 'js-1-1',
        coordinate: { x: 3, y: 4 },
      },
    ],
  },
  'a-3': {
    blocks: [
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 2, 0, 0, 2, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    ],
    initialCoordinate: { x: 4, y: 9 },
    actions: [
      {
        type: 'route',
        path: 'a-1',
        coordinate: { x: 4, y: 9 },
        nextCoordinate: { x: 4, y: 0 },
      },
      {
        type: 'route',
        path: 'a-1',
        coordinate: { x: 5, y: 9 },
        nextCoordinate: { x: 5, y: 0 },
      },
      {
        type: 'issue',
        issueId: 'js-1-2',
        coordinate: { x: 3, y: 4 },
      },
      {
        type: 'issue',
        issueId: 'js-1-3',
        coordinate: { x: 5, y: 4 },
      },
    ],
  },
};
