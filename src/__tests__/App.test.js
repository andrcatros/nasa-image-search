import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

describe("renders App component", () => {
  it("renders placeholder text", () => {
    const { getByText } = render(<App />);
    const placeholder = getByText(/Hello World/i);

    expect(placeholder).toBeInTheDocument();
  });

  it("renders the Search component", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("search-test")).toBeInDocument();
  });
});
