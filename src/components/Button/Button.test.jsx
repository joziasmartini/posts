import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./index";

describe("<Button />", () => {
  test("should render a button with text", () => {
    render(<Button text="Load more" />);
    const button = screen.getByText(/load more/i);
    expect(button).toBeInTheDocument();
  });

  test("should call function on button click", () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);
    const button = screen.getByText(/load more/i);
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("should be disabled when disabled is true", () => {
    render(<Button text="Load more" disabled />);
    const button = screen.getByText(/load more/i);
    expect(button).toBeDisabled();
  });

  test("should be enabled when disabled is false", () => {
    render(<Button text="Load more" disabled={false} />);
    const button = screen.getByText(/load more/i);
    expect(button).toBeEnabled();
  });
});
