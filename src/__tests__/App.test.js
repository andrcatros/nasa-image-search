import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "../components/App";

describe("renders App component", () => {
  afterEach(cleanup);

  xit("renders placeholder text", () => {
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

  it("renders the ImageResults component", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("image-results-test")).toBeInTheDocument();
  });
});
