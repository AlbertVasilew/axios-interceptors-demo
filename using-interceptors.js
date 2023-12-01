import axios from 'axios';

axios.interceptors.request.use(config => {
    console.log("> Starting loading indicator");
    return config;
  },
  error => {
    console.log("> Stopping loading indicator");
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log("> Stopping loading indicator");
    return response;
  },
  error => {
    console.log(error.code)
    console.log("> Stopping loading indicator");
    return Promise.reject(error);
});

axios.get("http://localhost:5121/get-questions")
    .then(response => console.log("Retrieved data: ", response?.data))
    .catch(error => error);