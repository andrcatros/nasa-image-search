import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/Search";

test("renders placeholder text", () => {
  const { getByText } = render(<Search />);
  const placeholder = getByText(/this is the search component/i);

  expect(placeholder).toBeInTheDocument();
});