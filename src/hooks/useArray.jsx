import { useCallback, useState } from "react";

export const useArray = (defaultArr) => {
  const [array, setArray] = useState(defaultArr);

  const addToArray = (newArrItem) => setArray([...array, newArrItem]);

  const combineAnotherArray = (newArr) => setArray([...array, ...newArr]);

  const setArrayItem = useCallback((itemIndex, itemProp) => {
    console.log("come and fix the issue with set Array Item for aut process")
    setArray(
      array.map((item, index) => {
        return itemIndex >= index ? { ...item, ...itemProp } : item;
      })
    );
  }, []);

  const substituteItemsProps = (props) =>
    setArray((prev) => prev.map((item) => ({ ...item, ...props })));

  return {
    array,
    addToArray,
    combineAnotherArray,
    substituteItemsProps,
    setArrayItem,
  };
};
