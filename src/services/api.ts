import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-full-stack-vini-garcia.onrender.com",
  timeout: 100000,
});

// export const api = axios.create({
//   baseURL: "http://localhost:3000",
//   timeout: 100000,
// });
