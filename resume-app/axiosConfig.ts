import axios from "axios"

const api = axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:3000/api",
=======
  baseURL: import.meta.env.VITE_API_URL,
>>>>>>> upstream/main
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API error:", error);
    return Promise.reject(error);
  }
);

export default api;


