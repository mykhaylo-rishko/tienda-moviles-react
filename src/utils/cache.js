const EXPIRATION_TIME = 60 * 60 * 1000; // 1 hora

export const setCachedData = (key, data) => {
  const item = {
    data: data,
    expiry: Date.now() + EXPIRATION_TIME,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getCachedData = (key) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const isExpired = Date.now() > item.expiry;

  if (isExpired) {
    localStorage.removeItem(key);
    return null;
  }
  return item.data;
};