
console.log('*** REAL api.js LOADED ***');
import axios from 'axios';

export const get = (url, config) => axios.get(`http://localhost:5000${url}`, config);
export const post = (url, data, config) => axios.post(`http://localhost:5000${url}`, data, config);
export const del = (url, config) => axios.delete(`http://localhost:5000${url}`, config);
