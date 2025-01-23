import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body/Body";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import MOCK_DATA from "../../components/mocks/mock_restaurant.json";
import "@testing-library/jest-dom";

window.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Search screen should load and search for a keyword", () => {
  it("should load the home screen with some cards", async () => {
    //render
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    // querry
    const initialResCards = screen.getAllByTestId("rescard");
    // asert
    expect(initialResCards).toHaveLength(19);

    //querry
    const searchInput = screen.getByPlaceholderText(
      "Search for restaurants or dishes"
    );
    // asert
    expect(searchInput).toBeInTheDocument();

    //--- enter value to the input
    fireEvent.change(searchInput, { target: { value: "pizza" } });
    //querry
    const newResCards = screen.getAllByTestId("rescard");
    //asert
    expect(newResCards).toHaveLength(3);
  });
});
