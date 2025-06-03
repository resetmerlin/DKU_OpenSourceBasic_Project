import axios from "axios";

export const API = axios.create({
  baseURL: import.meta.env.PROD ? "" : "http://localhost:4000",
});

export const fetchProfile = () => API.get("/profile");
export const fetchAbout = () => API.get("/about");
export const fetchSocials = () => API.get("/socials");
export const fetchNavigation = () => API.get("/navigation");
