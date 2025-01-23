import { render, screen } from "@testing-library/react";
import { act } from "react";
import Restaurant from "../../pages/Restaurant/Restaurant";
import RES_DATA from "../../components/mocks/res_detail_mock.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
window.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(RES_DATA) })
);
describe("Add to cart functionality should work ", () => {
  it("should load restaurent screen", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <Restaurant />
          </Provider>
        </BrowserRouter>
      );
      // Querry
      const heading = screen.getByTestId("respage");
    });
  });
});

// load restaurent screen
// find button to add
// click on button
// ! check cart value in header
// !check cards length in cart screen
