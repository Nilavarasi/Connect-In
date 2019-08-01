import axios from 'axios';

// TODO: Get the variables from env
const apiProtocol = 'http';
const apiHost = 'localhost';
const apiPort = 5000;

const apiInstance = axios.create({
  baseURL: `${apiProtocol}://${apiHost}:${apiPort}`,
  headers: {}
});

export default apiInstance;
