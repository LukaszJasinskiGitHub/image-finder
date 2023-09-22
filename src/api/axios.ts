import axios from 'axios';

import apiUrl from './routes';

export const axiosApi = axios.create({
  baseURL: apiUrl,
  headers: { 'Content-Type': 'application/json' },
});
