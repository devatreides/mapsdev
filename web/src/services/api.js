import axios from 'axios';
import backendApi from '../credentials/api.json';

const api = axios.create({
    baseURL: backendApi.baseURL
})

export default api;