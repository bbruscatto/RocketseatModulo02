import axios from "axios";

export const api = axios.create({
    baseURL: 'httl://localhost:3000/api',
})