export const getFromStorage = (key: string) => {
  const itemFromStorage = localStorage.getItem(key)!;
  return JSON.parse(itemFromStorage);
};

export const saveToStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
