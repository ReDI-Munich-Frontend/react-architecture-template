import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Home } from ".";

test("Home", () => {
  render(<Home />);

  expect(screen.getByLabelText("title")).toHaveTextContent(
    "Hello class of 2021"
  );
});
