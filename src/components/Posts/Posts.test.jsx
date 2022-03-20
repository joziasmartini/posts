import { render, screen } from "@testing-library/react";
import { Posts } from ".";

const postsMock = [
  { id: 1, title: "title 01", body: "body 01", cover: "cover 01" },
  { id: 2, title: "title 02", body: "body 02", cover: "cover 02" },
  { id: 3, title: "title 03", body: "body 03", cover: "cover 03" },
];

describe("<Posts />", () => {
  test("should render Posts", () => {
    render(<Posts posts={postsMock} />);

    const titles = screen.getAllByRole("heading", { name: /title/i });
    const covers = screen.getAllByRole("img", { src: /cover/i });
    const bodys = screen.getAllByText(/body/i);

    expect(titles).toHaveLength(3);
    expect(covers).toHaveLength(3);
    expect(bodys).toHaveLength(3);
  });

  test("should match snapshot", () => {
    const { container } = render(<Posts posts={postsMock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
