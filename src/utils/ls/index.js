const getItemFromLs = (item) => {
  const retrieveItem = localStorage.getItem(item);
  if (retrieveItem !== null || retrieveItem !== undefined) {
    const item = JSON.parse(retrieveItem);
    return item;
  }
  return;
};

const addItemToLs = (key, item) => {
  key && localStorage.setItem(key, JSON.stringify(item));
};

const deletItemFromLs = (key) => localStorage.removeItem(key);


const clearLs = () => localStorage.clear();

export { getItemFromLs, addItemToLs, deletItemFromLs, clearLs };
