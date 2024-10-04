import { toast } from 'sonner';

const reviewResponse = (res) => {
  if (res?.status) return res;

  toast.error(res?.message);
};

export default reviewResponse;
