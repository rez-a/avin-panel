import { ECONNABORTED } from '@/constants/axiosCode';

const handleRequests = async (instance, options = {}) => {
  try {
    const res = await instance.request(options);
    return res?.data;
  } catch (error) {
    if (error.code === ECONNABORTED)
      return { status: false, message: error.message };

    return {
      ...error?.response?.data,
      message: error?.response?.data?.data,
    };
  }
};

export default handleRequests;
