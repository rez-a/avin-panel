import axiosConfigsDefault from '@/configs/axios';
import axios from 'axios';

const dashboardInstance = axios.create({ ...axiosConfigsDefault });

export default dashboardInstance;
