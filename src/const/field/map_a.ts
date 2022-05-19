import type { FieldMapData } from 'src/types/field';

export const mapA: FieldMapData = {
  'a-1': {
    entryFlag: 0,
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
        nextCoordinate: { x: 5, y: 9 },
      },
    ],
  },

  'a-2': {
    entryFlag: 0,
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
        type: 'route',
        path: 'a-3',
        coordinate: { x: 4, y: 0 },
        nextCoordinate: { x: 4, y: 9 },
      },
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 5, y: 0 },
        nextCoordinate: { x: 5, y: 9 },
      },
      {
        type: 'message',
        objectId: '',
        blockId: 3,
        coordinate: { x: 6, y: 4 },
        message: 'なんだこれは！？甘酸っぱい香りに力がみなぎってくるっ',
        willDisappear: true,
      },
      {
        type: 'issue',
        issueId: 'js-1-1',
        coordinate: { x: 3, y: 4 },
      },
    ],
  },
  'a-3': {
    entryFlag: 1,
    blocks: [
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 2, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    ],
    initialCoordinate: { x: 4, y: 9 },
    actions: [
      /* ↓ */
      {
        type: 'route',
        path: 'a-2',
        coordinate: { x: 4, y: 9 },
        nextCoordinate: { x: 4, y: 0 },
      },
      {
        type: 'route',
        path: 'a-2',
        coordinate: { x: 5, y: 9 },
        nextCoordinate: { x: 5, y: 0 },
      },
      /* ↑ */
      {
        type: 'route',
        path: 'a-4',
        coordinate: { x: 4, y: 0 },
        nextCoordinate: { x: 4, y: 9 },
      },
      {
        type: 'route',
        path: 'a-4',
        coordinate: { x: 5, y: 0 },
        nextCoordinate: { x: 5, y: 9 },
      },
      /* ← */
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 0, y: 4 },
        nextCoordinate: { x: 9, y: 4 },
      },
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 0, y: 5 },
        nextCoordinate: { x: 9, y: 5 },
      },
      /* → */
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 9, y: 4 },
        nextCoordinate: { x: 0, y: 4 },
      },
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 9, y: 5 },
        nextCoordinate: { x: 0, y: 5 },
      },
      /* messages */
      {
        type: 'message',
        blockId: 4,
        objectId: '',
        message: 'ニュースよ!! ニュース!!',
        coordinate: { x: 6, y: 4 },
        willDisappear: false,
      },
      /* issues */
      {
        type: 'issue',
        issueId: 'js-1-2',
        coordinate: { x: 2, y: 2 },
      },
    ],
  },

  'a-4': {
    entryFlag: 1,
    blocks: [
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 2, 0, 0, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    ],
    initialCoordinate: { x: 4, y: 9 },
    actions: [
      /* ↓ */
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 4, y: 9 },
        nextCoordinate: { x: 4, y: 0 },
      },
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 5, y: 9 },
        nextCoordinate: { x: 5, y: 0 },
      },
      /* ↑ */
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 4, y: 0 },
        nextCoordinate: { x: 4, y: 9 },
      },
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 5, y: 0 },
        nextCoordinate: { x: 5, y: 9 },
      },
      /* ← */
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 0, y: 4 },
        nextCoordinate: { x: 9, y: 4 },
      },
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 0, y: 5 },
        nextCoordinate: { x: 9, y: 5 },
      },
      /* → */
      {
        type: 'route',
        path: 'a-5',
        coordinate: { x: 9, y: 4 },
        nextCoordinate: { x: 0, y: 4 },
      },
      {
        type: 'route',
        path: 'a-5',
        coordinate: { x: 9, y: 5 },
        nextCoordinate: { x: 0, y: 5 },
      },
      /* issues */
      {
        type: 'issue',
        issueId: 'js-1-3',
        coordinate: { x: 3, y: 4 },
      },
      {
        type: 'issue',
        issueId: 'js-1-4',
        coordinate: { x: 6, y: 4 },
      },
    ],
  },

  'a-5': {
    entryFlag: 1,
    blocks: [
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 2, 0, 0, 1],
      [0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    ],
    initialCoordinate: { x: 4, y: 9 },
    actions: [
      /* ↓ */
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 4, y: 9 },
        nextCoordinate: { x: 4, y: 0 },
      },
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 5, y: 9 },
        nextCoordinate: { x: 5, y: 0 },
      },
      /* ↑ */
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 4, y: 0 },
        nextCoordinate: { x: 4, y: 9 },
      },
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 5, y: 0 },
        nextCoordinate: { x: 5, y: 9 },
      },
      /* ← */
      {
        type: 'route',
        path: 'a-6',
        coordinate: { x: 0, y: 4 },
        nextCoordinate: { x: 9, y: 4 },
      },
      {
        type: 'route',
        path: 'a-6',
        coordinate: { x: 0, y: 5 },
        nextCoordinate: { x: 9, y: 5 },
      },
      /* → */
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 9, y: 4 },
        nextCoordinate: { x: 0, y: 4 },
      },
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 9, y: 5 },
        nextCoordinate: { x: 0, y: 5 },
      },
      /* Issues */
      {
        type: 'issue',
        issueId: 'js-1-5',
        coordinate: { x: 6, y: 3 },
      },
    ],
  },

  'a-6': {
    entryFlag: 1,
    blocks: [
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 0, 4, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    ],
    initialCoordinate: { x: 4, y: 9 },
    actions: [
      /* ↓ */
      {
        type: 'route',
        path: 'a-7',
        coordinate: { x: 4, y: 9 },
        nextCoordinate: { x: 4, y: 0 },
      },
      {
        type: 'route',
        path: 'a-7',
        coordinate: { x: 5, y: 9 },
        nextCoordinate: { x: 5, y: 0 },
      },
      /* ↑ */
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 4, y: 0 },
        nextCoordinate: { x: 4, y: 9 },
      },
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 5, y: 0 },
        nextCoordinate: { x: 5, y: 9 },
      },
      /* ← */
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 0, y: 4 },
        nextCoordinate: { x: 9, y: 4 },
      },
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 0, y: 5 },
        nextCoordinate: { x: 9, y: 5 },
      },
      /* → */
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 9, y: 4 },
        nextCoordinate: { x: 0, y: 4 },
      },
      {
        type: 'route',
        path: 'a-3',
        coordinate: { x: 9, y: 5 },
        nextCoordinate: { x: 0, y: 5 },
      },
      /* messages */
      {
        type: 'message',
        blockId: 4,
        objectId: '',
        message: 'あはは！迷子だったんですね！',
        coordinate: { x: 4, y: 2 },
        willDisappear: false,
      },
    ],
  },

  'a-7': {
    entryFlag: 1,
    blocks: [
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 0, 1, 1, 0, 0, 0, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 1, 2, 1, 1],
      [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 0, 4, 0, 0, 0, 0, 0],
      [1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
      [1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
      [1, 1, 0, 0, 0, 1, 0, 0, 1, 1],
      [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    initialCoordinate: { x: 4, y: 0 },
    actions: [
      /* ↑ */
      {
        type: 'route',
        path: 'a-6',
        coordinate: { x: 4, y: 0 },
        nextCoordinate: { x: 4, y: 9 },
      },
      {
        type: 'route',
        path: 'a-6',
        coordinate: { x: 5, y: 0 },
        nextCoordinate: { x: 5, y: 9 },
      },
      /* → */
      {
        type: 'route',
        path: 'a-8',
        coordinate: { x: 9, y: 4 },
        nextCoordinate: { x: 0, y: 4 },
      },
      {
        type: 'route',
        path: 'a-8',
        coordinate: { x: 9, y: 5 },
        nextCoordinate: { x: 0, y: 5 },
      },
      /* messages */
      {
        type: 'message',
        blockId: 4,
        objectId: '',
        message: 'よく…ここまでこれたね…\nあとは…まかせた…よ…ぐはっ',
        coordinate: { x: 4, y: 4 },
        willDisappear: false,
      },
      {
        type: 'message',
        blockId: 4,
        objectId: '',
        message: 'よく…ここまでこれたね…\nあとは…まかせた…よ…ぐはっ',
        coordinate: { x: 4, y: 4 },
        willDisappear: false,
      },
      /* issues */
      {
        type: 'message',
        blockId: 0,
        objectId: '',
        message: 'noos',
        coordinate: { x: 1, y: 1 },
        willDisappear: false,
      },
      {
        type: 'message',
        blockId: 0,
        objectId: '',
        message: 'gnimoc',
        coordinate: { x: 8, y: 8 },
        willDisappear: false,
      },
      /* issues */
      {
        type: 'issue',
        issueId: 'js-1-6',
        coordinate: { x: 7, y: 2 },
      },
    ],
  },

  'a-8': {
    entryFlag: 6,
    blocks: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 5, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 5, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    initialCoordinate: { x: 4, y: 0 },
    actions: [
      {
        type: 'route',
        path: 'a-7',
        coordinate: { x: 0, y: 4 },
        nextCoordinate: { x: 9, y: 4 },
      },
      {
        type: 'route',
        path: 'a-7',
        coordinate: { x: 0, y: 5 },
        nextCoordinate: { x: 9, y: 5 },
      },
    ],
  },
};
