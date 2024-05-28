import { screen, render, fireEvent } from "@testing-library/react";
import Header from "../Header/Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import UserContext from "../../utils/userContext";
import { BrowserRouter } from "react-router-dom";
describe("Header component", () => {
  it("Should render a Component with a login button", () => {
    //1.) Render
    render(
      <Provider store={appStore}>
        <UserContext.Provider
          value={{
            userFullName: "userName",
            userImage: "https://avatars.githubusercontent.com/mrinaljain",
            changeName: () => {},
          }}
        >
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </UserContext.Provider>
      </Provider>
    );
    // 2. Querying
    const loginButton = screen.getByRole("button", { name: "login" });
    // 3.) assert
    expect(loginButton).toBeInTheDocument();
  });

  it("Should render a Cart with zero Items", () => {
    //1.) Render
    render(
      <Provider store={appStore}>
        <UserContext.Provider
          value={{
            userFullName: "userName",
            userImage: "https://avatars.githubusercontent.com/mrinaljain",
            changeName: () => {},
          }}
        >
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </UserContext.Provider>
      </Provider>
    );
    // 2. Querying
    const cartText = screen.getByText("Cart 0 Items");
    // 3.) assert
    expect(cartText).toBeInTheDocument();
  });
});
