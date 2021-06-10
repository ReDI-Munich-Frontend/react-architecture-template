import { render, screen } from "@testing-library/react";
import { Number } from ".";

const numbersApiFixture = "some other data";
const numberIdFixture = 99;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    numberId: numberIdFixture,
  }),
}));

jest.mock("./hooks", () => ({
  useNumbersApi: () => numbersApiFixture,
}));

test("Number returns correctly", () => {
  render(<Number />);
  const numberByAriaLabel = screen.getByLabelText("number");

  expect(numberByAriaLabel).toHaveTextContent(numberIdFixture);
  expect(numberByAriaLabel).toHaveTextContent(numbersApiFixture);
});
