import axios from 'axios';

export const api = axios.create({
    baseURL: "https://flower-backend.onrender.com",
})