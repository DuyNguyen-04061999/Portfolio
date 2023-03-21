import axios from "axios";

export const EMAIL_API = import.meta.env.VITE_EMAIL_API;

export const api = axios.create();
