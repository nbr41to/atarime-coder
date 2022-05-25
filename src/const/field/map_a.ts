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
    routes: {
      up: 'a-2',
      down: '',
      left: '',
      right: '',
    },
    actions: [],
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
    routes: {
      up: 'a-3',
      down: 'a-1',
      left: '',
      right: '',
    },
    actions: [
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
    routes: {
      up: 'a-4',
      down: 'a-2',
      left: 'a-3',
      right: 'a-3',
    },
    actions: [
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
    routes: {
      up: 'a-3',
      down: 'a-3',
      left: 'a-3',
      right: 'a-5',
    },
    actions: [
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
    routes: {
      up: 'a-3',
      down: 'a-3',
      left: 'a-6',
      right: 'a-3',
    },
    actions: [
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
    routes: {
      up: 'a-3',
      down: 'a-7',
      left: 'a-3',
      right: 'a-3',
    },
    actions: [
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
    routes: {
      up: 'a-6',
      down: '',
      left: '',
      right: 'a-8',
    },
    actions: [
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
      [1, 1, 1, 1, 5, 5, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 1, 0, 3, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
      [1, 0, 2, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    initialCoordinate: { x: 0, y: 4 },
    routes: {
      up: 'a-10',
      down: '',
      left: 'a-7',
      right: 'a-9',
    },
    actions: [
      {
        type: 'message',
        objectId: '',
        blockId: 3,
        coordinate: { x: 8, y: 1 },
        message: 'あのときのイチゴだ',
        willDisappear: false,
      },
      {
        type: 'issue',
        issueId: 'js-1-7',
        coordinate: { x: 2, y: 7 },
      },
    ],
  },
};
