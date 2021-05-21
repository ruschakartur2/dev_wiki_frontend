import axios from "axios";

const API_URL = "http://localhost:800";

const getPublicContent = () => {
    return axios.get(API_URL);
};

export default {
    getPublicContent
};