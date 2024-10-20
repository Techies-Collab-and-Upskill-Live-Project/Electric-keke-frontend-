import React from "react";
import { render, screen } from "@testing-library/react";
import CustomSelectItem from "../CustomSelectItem";
import { Select, SelectContent, SelectGroup } from "../ui/select";

describe("CustomSelectItem", () => {
  const items = ["item1", "item2", "item3"];

  it(`should display ${items.length} items with correct text`, () => {
    render(
      <Select>
        <SelectContent>
          <SelectGroup>
            <CustomSelectItem items={items} />
          </SelectGroup>
        </SelectContent>
      </Select>
    );

    const renderedTexts = screen.getAllByText(/item/i)

    expect(renderedTexts.length).toBe(3);

    renderedTexts.forEach((text, index) => {
      expect(text).toHaveTextContent(`item${index + 1}`)
    })
  });
});
