import { NASA_API_KEY } from "./API_KEY";
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

const nasaAPODAPI = (data) =>
    nasa.get('', {
        params: {
            api_key: NASA_API_KEY,
            date: data,
        },
    });

const ross = axios.create({
    baseURL: "https://gghack-2020.herokuapp.com/",
})

const getServiceList = () => {
    ross.get('customer/services', { headers: { 'Access-Control-Allow-Origin': '*' } })
}

export { nasaAPODAPI, getServiceList }