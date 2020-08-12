import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const imageResults = response.data.collection.items;
        const parsedImages = imageResults.filter(
          (i) => i.data[0].media_type === "image"
        );

        return parsedImages;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;
