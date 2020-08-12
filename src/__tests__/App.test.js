import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders placeholder text", () => {
  const { getByText } = render(<App />);
  const placeholder = getByText(/Hello World/i);

  expect(placeholder).toBeInTheDocument();
});
