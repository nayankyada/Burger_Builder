import axios from "axios";

const instance = axios.create({
  baseURL: "https://6007c264309f8b0017ee4bea.mockapi.io"
});

export default instance;
