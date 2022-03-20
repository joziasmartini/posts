import { render, screen } from "@testing-library/react";
import { PostCard } from "./index";

const props = {
  cover: "img/cover.png",
  title: "Test title",
  body: "Test body",
  id: 123,
};

describe("<PostCard />", () => {
  test("should render PostCard correctly", () => {
    render(<PostCard {...props} />);
    expect(screen.getByRole("img", { name: "Test title" })).toHaveAttribute(
      "src",
      "img/cover.png"
    );
    expect(
      screen.getByRole("heading", { name: "Test title 123" })
    ).toBeInTheDocument();
    expect(screen.getByText("Test body")).toBeInTheDocument();
  });

  test("should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
