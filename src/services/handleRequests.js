import { ECONNABORTED, ENOTFOUND } from '@/constants/axiosCode';
import TOAST_MESSAGE from '@/constants/toastMessage';


const handleRequests = async (instance, options = {}) => {
  try {
    const res = await instance.request(options);
    return res?.data;
  } catch (error) {
    if (error.code === ENOTFOUND)
      return { status: false, message: TOAST_MESSAGE.REQUEST.ENOTFOUND };
    if (error.code === ECONNABORTED)
      return { status: false, message: error.message };
    return {
      ...error?.response?.data,
      message: error?.response?.data?.data,
    };
  }
};

export default handleRequests;
