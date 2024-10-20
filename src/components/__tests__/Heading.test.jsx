import React from "react";
import { act, render, screen } from "@testing-library/react";
import Heading from "../Heading";

describe("Heading", () => {
  // const renderComponent = (props) => {
  //   render(<Heading {...props} />);
  // };

  it("should render a heading when title is defined", () => {
    act(() => render(<Heading title="Hello" />));

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("should render paragraph when description is defined", () => {
    act(() => render(<Heading description="Paragraph" />));

    expect(screen.getByText("Paragraph")).toBeInTheDocument();
  });
});
