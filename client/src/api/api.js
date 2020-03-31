import *as axios from 'axios';

const instans = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000',

})

export const ProductApi = {
  getProduct() {
    return instans
      .get(`api/products`)
      .then(response => response.data)
  },
  setProduct(title, group, price, description, img) {
    return instans.post('api/products/create', {title, group, price, description, img} )
  }
}

export const authAPI = {

  login(email, password) {
    return instans.post(`api/auth/login`, { email, password })
  },

  registration(email, password, name) {
    return instans.post(`api/auth/register`, { email, password, name })
  }
}