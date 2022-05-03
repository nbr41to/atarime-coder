export const mapA: FieldMapData = {
  'a-1': {
    blocks: [
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 1, 1],
      [1, 0, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    initialCoordinates: { x: 3, y: 8 },
    routes: [
      {
        path: 'a_2',
        coordinate: { x: 4, y: 0 },
        nextCoordinate: { x: 4, y: 9 },
      },
      {
        path: 'a_2',
        coordinate: { x: 5, y: 0 },
        nextCoordinate: { x: 4, y: 9 },
      },
    ],
    actions: [],
  },

  'a-2': {
    blocks: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
    initialCoordinates: { x: 4, y: 9 },
    routes: [
      {
        path: 'a_1',
        coordinate: { x: 4, y: 9 },
        nextCoordinate: { x: 4, y: 0 },
      },
      {
        path: 'a_1',
        coordinate: { x: 5, y: 9 },
        nextCoordinate: { x: 5, y: 0 },
      },
    ],
    actions: [
      {
        coordinate: { x: 6, y: 4 },
        message: 'これはイチゴです。',
        willDisappear: true,
        blockId: 3,
        objectId: '',
      },
      {
        coordinate: { x: 3, y: 4 },
        message: 'パソコンを手に入れた。',
        willDisappear: false,
        blockId: 2,
        objectId: '',
      },
    ],
  },
};
