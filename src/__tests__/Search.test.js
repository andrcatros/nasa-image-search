import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("renders Search component", () => {
  afterEach(cleanup);

  xit("renders placeholder text", () => {
    const { getByText } = render(<Search />);
    const placeholder = getByText(/this is the Search component/i);

    expect(placeholder).toBeInTheDocument();
  });

  it("renders text input and button elements", () => {
    render(<Search />);

    const textInput = screen.getByRole("textbox", { id: "search-input" });
    const button = screen.getByRole("button", { class: "search-button" });

    expect(textInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
