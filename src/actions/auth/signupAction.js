'use server';

import { handleSignup } from '@/utilities/handleAuth';

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
