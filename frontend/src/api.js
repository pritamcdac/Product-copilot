
console.log('*** REAL api.js LOADED ***');
import axios from 'axios';

const api = {
	get: (url, config) => axios.get(`http://localhost:5000${url}`, config),
	post: (url, data, config) => axios.post(`http://localhost:5000${url}`, data, config),
	delete: (url, config) => axios.delete(`http://localhost:5000${url}`, config),
};

export default api;
