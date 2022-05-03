type FieldObject = {
  code: number;
  name: string;
  isEnterable: boolean;
};

type FieldCoordinate = {
  x: number;
  y: number;
};
type FieldRoute = {
  path: string; // 移動先の route path
  coordinate: FieldCoordinate; // 移動のトリガーとなる座標
  nextCoordinate: FieldCoordinate; // 移動先のマップの座標
};
type FieldAction =
  | {
      type: 'route';
      path: string;
      coordinate: FieldCoordinate;
      nextCoordinate: FieldCoordinate;
    }
  | {
      type: 'message';
      objectId: string; // そのオブジェクトのユニークなID
      blockId: number; // そのオブジェクトが存在する Block ID
      coordinate: FieldCoordinate; // そのオブジェクトが存在する座標
      message: string; // Action時に表示するメッセージ
      willDisappear: boolean; // Action後に消えるかどうか
    }
  | {
      type: 'issue';
      issueId: string; // そのオブジェクトのユニークなID
      coordinate: FieldCoordinate; // そのオブジェクトが存在する座標
    };
type FieldMap = {
  blocks: number[][]; // 10 * 10 の Block ID
  initialCoordinates: FieldCoordinate; // 初期位置の座標
  actions: FieldAction[];
};

type FieldMapData = {
  [key: string]: FieldMap;
};
