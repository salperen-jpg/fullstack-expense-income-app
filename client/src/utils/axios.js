import axios from 'axios';
import { getFromLocalStore } from './localStorage';

const authFetch = axios.create({
  baseURL: '/api/v1',
  headers: {
    authorization: `Bearer ${getFromLocalStore().token}`,
  },
});

export default authFetch;
