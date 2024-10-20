import React from "react";
import { render, screen } from "@testing-library/react";
import Choose from "../Choose";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Choose", () => {
  const eventOne = vi.fn();
  const eventTwo = vi.fn();

  it("should render two button elements", () => {
    render(<Choose />);

    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBe(2);
  });

  it("should render the buttons with text Yes for button one and No for button two", () => {
    render(<Choose choice1txt="Yes" choice2txt="No" />);

    const buttons = screen.getAllByRole("button");

    buttons.forEach((btn, index) => {
      index === 0
        ? expect(btn).toHaveTextContent("Yes")
        : expect(btn).toHaveTextContent("No");
    });
  });

  test("buttons calls functions on click event", async () => {
    render(
      <Choose
        choice1txt="click1"
        choice2txt="click2"
        handleChoice1={eventOne}
        handleChoice2={eventTwo}
      />
    );

    const click1Btn = screen.getByRole("button", { name: /click1/i });
    const click2Btn = screen.getByRole("button", { name: /click2/i });

    const user = userEvent.setup();

    await user.click(click1Btn);
    expect(eventOne).toHaveBeenCalledOnce();

    await user.click(click2Btn);
    expect(eventTwo).toHaveBeenCalledOnce();
  });
});
