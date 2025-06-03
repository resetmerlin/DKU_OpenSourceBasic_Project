import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const fetchProfile = () => API.get("/profile");
export const fetchAbout = () => API.get("/about");
export const fetchSocials = () => API.get("/socials");
export const fetchNavigation = () => API.get("/navigation");
