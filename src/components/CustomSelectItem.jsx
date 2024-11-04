import React from "react";
import { SelectItem } from "./ui/select";

const CustomSelectItem = ({ items }) => {
  console.log(items)
  return (
    <>
      {items.map((item, index) => (
        <SelectItem value={item} key={index}>
          {item}
        </SelectItem>
      ))}
    </>
  );
};

export default CustomSelectItem;
