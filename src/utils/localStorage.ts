import type { FieldCoordinate } from '../types/field.d';
/**
 * userName: string
 * previousField: string
 * previousCoordinate: {x: number, y: number}
 * flags: string[]
 * TODO： それぞれのメソッドを作成する
 */

export const localStorage = {
  /* get */
  getUserName: (): string | null => {
    if (typeof window === 'undefined') return null;

    const json = window.localStorage.getItem('userName');

    return json ? json.replaceAll('"', '') : null; // ひらがながparseできないため
  },
  getPreviousCoordinate: (): FieldCoordinate | null => {
    if (typeof window === 'undefined') return null;
    const json = window.localStorage.getItem('previousCoordinate');

    return json ? JSON.parse(json) : null;
  },
  getPreviousField: (): string | null => {
    if (typeof window === 'undefined') return null;
    const json = window.localStorage.getItem('previousField');

    return json ? JSON.parse(json) : null;
  },
  getFlags: (): string[] => {
    if (typeof window === 'undefined') return [];
    const json = window.localStorage.getItem('flags');

    return json ? JSON.parse(json) : [];
  },
  /* set */
  setUserName: (value: string) => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('userName', value);
  },
  setPreviousCoordinate: (value: FieldCoordinate) => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('previousCoordinate', JSON.stringify(value));
  },
  setPreviousField: (value: string) => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('previousField', JSON.stringify(value));
  },
  setFlags: (value: string) => {
    if (typeof window === 'undefined') return;
    const json = window.localStorage.getItem('flags');
    const flags = json ? JSON.parse(json) : [];
    if (!flags.includes(value)) {
      const newFlags = [...flags, value];
      window.localStorage.setItem('flags', JSON.stringify(newFlags));
    }
  },
  /* other */
  removeItem: (key: string) => {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem(key);
  },
  clear: () => {
    if (typeof window === 'undefined') return;
    window.localStorage.clear();
  },
};
