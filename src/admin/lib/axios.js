import axios from "axios";

const { REACT_APP_API_URL } = process.env;
const token = localStorage.getItem("adminToken");

const instance = axios.create({
    baseURL: REACT_APP_API_URL,
});

instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default instance;
