import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Home from "../../pages/Home/Home";
import MOCK_DATA from "../../components/mocks/mock_restaurant.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

window.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
describe("click on filter should filter top rated restaurent", () => {
  it("should Load homepage with 19 cards", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
    });
    //Querrying
    const resCards = screen.getAllByTestId("rescard");
    //Asert
    expect(resCards).toHaveLength(19);
  });
  it("Should have a filter button on screen and working", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
    });
    //querry
    const filterButton = screen.getByText("Top Rated");
    //assert
    expect(filterButton).toBeInTheDocument();
    fireEvent.click(filterButton);

    //Querrying
    const newResCards = screen.getAllByTestId("rescard");
    //Asert
    expect(newResCards).toHaveLength(5);
  });
});
