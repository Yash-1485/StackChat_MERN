import axios from "axios";

// const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";
// const BASE_URL = "http://localhost:8000/api";
const BASE_URL = import.meta.env.VITE_BASE_URL || "https://stackchatbackend.vercel.app";
console.log("Base_url,",import.meta.env.VITE_BASE_URL);
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, // send cookies with the request
});
