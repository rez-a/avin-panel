'use server';

import TOAST_MESSAGE from '@/constants/toastMessage';
import { handleSignin } from '@/services/api/handleAuth';
import { decodeToken, insertToken } from '@/utilities/handleToken';

const signinAction = async (data) => {
  try {
    const res = await handleSignin(data);
    insertToken(res.data);
    return {
      user: decodeToken(res.data)?.NationalCode,
      token: res.data,
      status: res.status,
      message: TOAST_MESSAGE.SIGNIN.SUCCESS,
    };
  } catch (err) {
    return;
  }
};

export { signinAction };
