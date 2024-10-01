import { toast } from 'sonner';

const reviewResponse = (res) => {
  if (res?.status) return res;

  toast.error(status?.message);
};

export default reviewResponse;
