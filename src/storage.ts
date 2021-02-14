export const getFromStorage = (key: string) => {
  const itemFromStorage = localStorage.getItem(key);
  return JSON.parse(itemFromStorage || "null");
};

export const saveToStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
