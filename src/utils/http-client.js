import axios from 'axios';
import { store } from '../store/config';
import { setError } from '../store/slices/error-slice';

const AUTH_TOKEN = 'abcdefg';

// https://github.com/axios/axios#installing
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.defaults.headers.common.Authorization = AUTH_TOKEN;

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    store.dispatch(setError(error));

    return Promise.reject(error);
  },
);

export default axiosInstance;
