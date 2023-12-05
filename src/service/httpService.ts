// Note: HTTP Service
import axios from "axios"

const baseURL = "https://jsonplaceholder.typicode.com"

export const httpService = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
})
