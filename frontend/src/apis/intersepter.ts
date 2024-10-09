import axios, { InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: 'https://restaurant-management-msd0.onrender.com/api', 
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.baseURL = 'https://restaurant-management-msd0.onrender.com/api';    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
