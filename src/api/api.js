import { API_KEY } from "./API_KEY";
const axios = require("axios");
// NASA Astronomy Picture of the Day
// https://apod.nasa.gov/apod/astropix.html
// GET https://api.nasa.gov/planetary/apod

const nasa = axios.create({
  baseURL: "https://api.nasa.gov/planetary/apod/",
});

// nasa.CancelToken = nasa.CancelToken
// nasa.isCancel = nasa.isCancel
// nasa.defaults.cancelToken = nasa.CancelToken.source().token

export const nasaAPODAPI = (data) =>
  nasa.get('', {
    params: {
      api_key: API_KEY,
      date: data,
    },
  });
