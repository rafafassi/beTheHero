import axios from 'axios';

const api = axios.create({
    baseURL: 'http://vpn.cottonsheep.com.br:9001'
    //baseURL: 'http://localhost:9001'
})

export default api;