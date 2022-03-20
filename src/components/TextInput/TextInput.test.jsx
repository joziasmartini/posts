import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from ".";

const props = {
  searchValue: "test",
  handleChange: jest.fn(),
};

describe("<TextInput />", () => {
  test("should have a value of searchValue", () => {
    render(<TextInput {...props} />);
    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe("test");
  });

  test("should call handleChange function on key press", () => {
    render(<TextInput {...props} />);
    const input = screen.getByPlaceholderText(/type your search/i);
    const value = "value";
    userEvent.type(input, value);
    expect(props.handleChange).toHaveBeenCalledTimes(value.length);
  });

  test("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} />);
    expect(container).toMatchSnapshot();
  });
});
