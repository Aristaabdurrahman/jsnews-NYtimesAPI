import axios from "axios";

export const mostEmail = async (email) => {
    const dataEmail = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/emailed/${email}.json?api-key=xP9qtkNdXasqnTAM92nCm7sfZyHz2wI9`);
    //console.log({dataEmail})
}

export const mostShared = async (shared) => {
    const dataShared = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/shared/${shared}/facebook.json?api-key=xP9qtkNdXasqnTAM92nCm7sfZyHz2wI9`);
    return dataShared.data.results;
}

export const mostViewed = async (view) => {
    const dataViewed = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/${view}.json?api-key=xP9qtkNdXasqnTAM92nCm7sfZyHz2wI9`);
    return dataViewed.data.results;
}

export const API = async (filter, period, shared_type='') => {
    const dataAPI = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/${filter}/${period}${shared_type}.json?api-key=xP9qtkNdXasqnTAM92nCm7sfZyHz2wI9`);
    return dataAPI.data.results;
}