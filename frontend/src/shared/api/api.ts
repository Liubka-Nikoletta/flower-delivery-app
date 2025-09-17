import axios from 'axios';

export const api = axios.create({
    baseURL: "https://flower-delivery-app-w67d.onrender.com/api",
});
