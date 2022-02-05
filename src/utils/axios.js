import axios from "axios";

const instance = axios.create({
  baseURL: "https://stark-garden-07886.herokuapp.com",
  withCredentials: true,
});

export default instance;
// https://stark-garden-07886.herokuapp.com/
// https://clickonicbackend.herokuapp.com