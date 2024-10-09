import axios, { InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', 
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.baseURL = 'http://localhost:3000/api';    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
