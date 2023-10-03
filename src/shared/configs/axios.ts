import axios from 'axios';
import { keysController } from '@/shared/api/keys';

const baseURL = 'https://kinopoiskapiunofficial.tech/api';
const timeout = 60_000;
const headers = {
  Accept: 'application/json',
  'X-Api-Key': keysController.getRandomKey(),
};

const axiosInstance = axios.create({ baseURL, timeout, headers });

export default axiosInstance;
