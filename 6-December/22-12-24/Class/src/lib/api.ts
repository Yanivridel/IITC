import axios from "axios";

const baseURL =
  import.meta.env.MODE === "development" ? "http://localhost:3000" : "/api";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
