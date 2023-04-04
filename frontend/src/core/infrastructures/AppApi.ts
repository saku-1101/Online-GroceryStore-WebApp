import axios, { AxiosInstance, AxiosResponse } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-type': 'application/json;charset=UTF-8',
  },
});

const responseBody = (response: AxiosResponse) => {
  return response.data;
};

export function getCategories() {
  return instance
    .get('/product/category')
    .then(responseBody)
    .catch((error) => {
      console.log(error);
    });
}

export function getProductsByCategory(category: string | undefined) {
  return instance
    .get('/product/category/' + category)
    .then(responseBody)
    .catch((error) => {
      console.log(error);
    });
}

export function search(text: string) {
  return instance
    .get('product/search?query=' + text)
    .then(responseBody)
    .catch((error) => {
      console.log(error);
    });
}

export function addOrder(order_id: string, product_id: string, quantity: string) {
  return instance
    .post('/order/add', {
      order_id: order_id,
      product_id: product_id,
      quantity: quantity,
    })
    .then(responseBody)
    .catch((error) => {
      console.log(error);
    });
}

export function checkOut(name: string, email: string, orderId: string) {
  return instance
    .post('/checkout', {
      name: name,
      email: email,
      orderId: orderId,
    })
    .then(responseBody)
    .catch((error) => console.log(error));
}

export function showOrder(orderId: string) {
  return instance
    .get('/order/' + orderId)
    .then(responseBody)
    .catch((error) => console.log(error));
}
