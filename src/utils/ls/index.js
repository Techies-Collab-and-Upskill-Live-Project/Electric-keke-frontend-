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

const updateItemInLs = (key, update, type = "array") => {
  const retrieveItem = getItemFromLs(key);
  let updatedItem;

  type === "array"
    ? (updatedItem = [...retrieveItem, ...update])
    : (updatedItem = { ...retrieveItem, ...update });

  console.log(updatedItem, 'updated Item');
  addItemToLs(key, updatedItem);
};

export { getItemFromLs, addItemToLs, deletItemFromLs, clearLs, updateItemInLs };
