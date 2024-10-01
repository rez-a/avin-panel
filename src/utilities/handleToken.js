'use server';

import { AVIN_AUTH } from '@/constants/cookiesValue';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { handleReviewToken } from '../services/api/handleAuth';
import { tokenConfigs } from '@/configs/token';

const decodeToken = async (token) => {
  const tokenDecoded = jwtDecode(token);
  return { ...tokenDecoded };
};

const insertToken = async (token) => {
  const {exp} = await decodeToken(token);
  if (cookies().has(AVIN_AUTH)) deleteToken();

  console.log(AVIN_AUTH, token, {
    ...tokenConfigs(exp),
  });
  cookies().set(AVIN_AUTH, token, {
    ...tokenConfigs(exp),
  });
};

const deleteToken = async () => {
  cookies().delete(AVIN_AUTH);
};

const updateToken = async (token) => {
  deleteToken();
  insertToken(token);
};

const reviewToken = async () => {
  const token = cookies().get(AVIN_AUTH)?.value;
  try {
    const res = await handleReviewToken({ Token: token });
    return res.status;
  } catch (err) {
    return false;
  }
};
const getToken = async () => {
  const token = cookies().get(AVIN_AUTH)?.value;
  return token;
};
export {
  decodeToken,
  insertToken,
  deleteToken,
  updateToken,
  reviewToken,
  getToken,
};
