export const localStorage = {
  getItem: (key: string) => {
    if (typeof window === 'undefined') return null;
    const json = window.localStorage.getItem(key);

    return json ? JSON.parse(json) : null;
  },
  setItem: (key: string, value: any) => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: (key: string) => {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem(key);
  },
  clear: () => {
    if (typeof window === 'undefined') return;
    window.localStorage.clear();
  },
};
