import axios from "axios";
import { API_URL } from "./constants/connection";

export const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    withCredentials: true
  },
})