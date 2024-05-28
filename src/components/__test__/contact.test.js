import { render, screen } from "@testing-library/react";
import Contact from "../../pages/Contact/Contact";
import "@testing-library/jest-dom";

test("check if contact screen loaded", () => {
  render(<Contact />);
  //Querrying
  const heading = screen.getByRole("heading"); // returns a js object for the element

  //assertion
  expect(heading).toBeInTheDocument();
});
