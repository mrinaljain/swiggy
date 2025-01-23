import { render, screen } from "@testing-library/react";
import Contact from "../../pages/Contact/Contact";
import "@testing-library/jest-dom";


describe("Contact Us screen", () => {
  test("check if contact screen loaded", () => {
    render(<Contact />);
    //Querrying
    const heading = screen.getByRole("heading"); // returns a js object for the element
    //assertion
    expect(heading).toBeInTheDocument();
  });

  test("Check if input is loaded", () => {
    //render screen
    render(<Contact />);
    //find element
    const inputs = screen.getAllByRole("textbox");
    //compare

    expect(inputs.length).toBe(3);
  });
});

