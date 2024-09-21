import axiosConfigsDefault from '@/configs/axios';
import axios from 'axios';

const authInstance = axios.create({ ...axiosConfigsDefault });

export default authInstance;
