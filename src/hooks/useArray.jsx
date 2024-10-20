import { useState } from "react";

export const useArray = (defaultArr) => {
  const [array, setArray] = useState(defaultArr);

  const addToArray = (newArrItem) => setArray([...array, newArrItem]);

  const combineAnotherArray = (newArr) => setArray([...array, ...newArr]);

  const substituteItemsProps = (props) =>
    setArray((prev) => prev.map((item) => ({ ...item, ...props })));

  return {
    array,
    addToArray,
    combineAnotherArray,
    substituteItemsProps,
  };
};
