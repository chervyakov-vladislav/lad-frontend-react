import axios from 'axios';
const server = 'https://api.com';
const axiosInstance = axios.create({ baseURL: server, timeout: 60_000 });
export default axiosInstance;
