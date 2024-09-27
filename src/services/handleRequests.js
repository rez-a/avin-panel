import { ECONNABORTED } from '@/constants/axiosCode';
import { toast } from 'sonner';

const handleRequests = async (instance, options = {}) => {
  try {
    const res = await instance.request(options);
    return res?.data;
  } catch (error) {
    if (error.code === ECONNABORTED)
      return toast.error(error.message);

    return toast.error(error?.response?.data?.data);
  }
};

export default handleRequests;
