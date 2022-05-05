import type { ReactNode } from 'react';

export type FieldObject = {
  code: number;
  name: string;
  isEnterable: boolean;
};

export type FieldCoordinate = {
  x: number;
  y: number;
};
export type FieldRoute = {
  path: string; // 移動先の route path
  coordinate: FieldCoordinate; // 移動のトリガーとなる座標
  nextCoordinate: FieldCoordinate; // 移動先のマップの座標
};
export type FieldAction =
  | {
      type: 'route';
      path: string; // 移動先の route path
      coordinate: FieldCoordinate; // 移動のトリガーとなる座標
      nextCoordinate: FieldCoordinate; // 移動先のマップの座標
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
      type: 'modal';
      objectId: string; // そのオブジェクトのユニークなID
      blockId: number; // そのオブジェクトが存在する Block ID
      coordinate: FieldCoordinate; // そのオブジェクトが存在する座標
      content: ReactNode; // Modalの内容
      willDisappear: boolean; // Action後に消えるかどうか
    }
  | {
      type: 'issue';
      issueId: string; // そのオブジェクトのユニークなID
      coordinate: FieldCoordinate; // そのオブジェクトが存在する座標
    };
export type FieldMap = {
  entryFlag: number; // フィールド解放に必要なClearフラグ数
  blocks: number[][]; // 10 * 10 の Block ID
  initialCoordinate: FieldCoordinate; // 初期位置の座標
  actions: FieldAction[];
};

export type FieldMapData = {
  [key: string]: FieldMap;
};
