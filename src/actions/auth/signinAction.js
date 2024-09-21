'use server';

import TOAST_MESSAGE from '@/constants/toastMessage';
import { handleSignin } from '@/utilities/handleAuth';
import { insertToken } from '@/utilities/handleToken';

const signinAction = async (data) => {
  const res = await handleSignin(data);
  if (res.status) {
    insertToken(res.data);
    return {
      status: res.status,
      message: TOAST_MESSAGE.SIGNIN.SUCCESS,
    };
  }

  return res;
};

export { signinAction };
