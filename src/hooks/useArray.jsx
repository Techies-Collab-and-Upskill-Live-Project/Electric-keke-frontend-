import { comparison } from "@/utils/comparison";
import { useCallback, useState } from "react";

export const useArray = (defaultArr) => {
  const [stableArray, setStableArray] = useState(defaultArr);
  const [unstableArray, setUnstableArray] = useState(stableArray);

  const addToArray = (newArrItem) =>
    setUnstableArray([...unstableArray, newArrItem]);

  const combineAnotherArray = (newArr) =>
    setUnstableArray([...unstableArray, ...newArr]);

  // we changing properties of the particular item
  const setArrayItem = useCallback((itemIndex, itemProp, comparisonType) => {
    setUnstableArray(
      unstableArray.map((item, index) => {
        return comparison(itemIndex, index, comparisonType)
          ? { ...item, ...itemProp }
          : item;
      })
    );
  }, []);

  // we changing properties of the unstableArray items
  const substituteItemsProps = (props) => {
    setUnstableArray((prev) => prev.map((item) => ({ ...item, ...props })));
  };

  const filterArrayItems = (propToUseForFilter, modelProp) => {
    setUnstableArray(
      stableArray.filter((item) => item[propToUseForFilter] !== modelProp)
    );
  };

  const resetArray = () => stableArray

  return {
    unstableArray,
    addToArray,
    combineAnotherArray,
    substituteItemsProps,
    setArrayItem,
    filterArrayItems,
    resetArray,
    setStableArray,
  };
};
