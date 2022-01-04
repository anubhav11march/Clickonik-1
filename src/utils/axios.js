import axios from "axios";

const instance = axios.create({
  baseURL: "https://clickonicbackend.herokuapp.com",
  withCredentials: true,
});

export default instance;
