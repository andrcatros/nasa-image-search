import axios from "axios";
import getImages from "../components/getImages";

describe("makes GET requests to NASA API and returns parsed image URL", () => {
  it("returns array of image href links when passed a valid query", async () => {
    const mockQuery = "moon";
    const expectedMoonImage =
      "https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg";
    const response = await getImages(mockQuery);

    expect(response).toBeTruthy();
    expect(response[0].links[0].href).toEqual(expectedMoonImage);
  });

  it("returns empty array when query is not a valid search term", async () => {
    const mockQuery = "fkgjhklij";
    const response = await getImages(mockQuery);

    expect(response.length).toBe(0);
  });
});
