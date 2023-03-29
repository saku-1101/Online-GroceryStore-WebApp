import axios, { Axios, AxiosInstance, AxiosResponse } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://localhost:8080',
  headers: {
    'Content-type': 'application/json;charset=UTF-8',
  },
});

const responseBody = (response: AxiosResponse) => {
  return response.data.products;
};

export function getCategories() {
  return instance
    .get('products')
    .then(responseBody)
    .catch((error) => {
      console.log(error);
    });
}
