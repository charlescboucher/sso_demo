import axios from "axios";
import UserService from "./UserService.js";

const HttpMethods = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE'
}
const _axios = axios.create();

const configure = () => {
    _axios.interceptors.request.use((config) => {
    if (UserService.isLoggedIn()) {
      const cb = () => {
        config.headers.Authorization = `Bearer ${UserService.getToken()}`;
        return Promise.resolve(config);
      };
      return UserService.updateToken(cb);
    }
  });
}

  const getAxiosclient = () => _axios;

  const HttpService = {
    HttpMethods,
    configure,
    getAxiosclient
  }