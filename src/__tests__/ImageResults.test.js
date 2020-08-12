import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import ImageResults from "../components/ImageResults";
import moonArray from "../data/moonarray.json";

describe("renders Search component", () => {
  afterEach(cleanup);

  xit("renders placeholder text", () => {
    const { getByText } = render(<ImageResults />);
    const placeholder = getByText(/this is the ImageResults component/i);

    expect(placeholder).toBeInTheDocument();
  });

  it("renders images when passed href links", () => {
    const moonDataArray = moonArray;

    const { getByText } = render(
      <ImageResults searchResults={moonDataArray} />
    );

    expect(getByText("Super Blue Moon Lunar Eclipse")).toBeInTheDocument();
  });
});
