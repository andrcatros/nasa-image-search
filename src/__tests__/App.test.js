import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

describe("renders App component", () => {
  it("renders placeholder text", () => {
    const { getByText } = render(<App />);
    const placeholder = getByText(/Hello World/i);

    expect(placeholder).toBeInTheDocument();
  });

  it("renders the NASA logo", () => {
    const { getByAltText } = render(<App />);
    const logo = getByAltText(/NASA logo/i);

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass("logo");
  });

  it("renders the Search component", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("search-test")).toBeInTheDocument();
  });
});
