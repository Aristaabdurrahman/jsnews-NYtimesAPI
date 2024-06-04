import axios from "axios";

// This API function to
// casciahiashc

export const API = async (filter, period, shared_type='') => {
    const dataAPI = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/${filter}/${period}${shared_type}.json?api-key=xP9qtkNdXasqnTAM92nCm7sfZyHz2wI9`);
    return dataAPI.data.results;
}