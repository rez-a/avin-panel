'use server';

import { handleSignup } from '@/services/api/handleAuth';

const signupAction = async (data) => {
  const res = await handleSignup(data);
  if (res.status) {
    return {
      status: res.status,
      message: res.data,
    };
  }

  return res;
};

export { signupAction };
