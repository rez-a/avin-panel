'use server';

import { AVIN_AUTH } from '@/constants/cookiesValue';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { handleReviewToken } from './handleAuth';
import { tokenConfigs } from '@/configs/token';

const decodeToken = (token) => {
  const tokenDecoded = jwtDecode(token);
  return { ...tokenDecoded };
};

const insertToken = (token) => {
  const { exp } = decodeToken(token);
  if (cookies().has(AVIN_AUTH)) deleteToken();

  cookies().set(AVIN_AUTH, token, {
    ...tokenConfigs(exp),
  });
};

const deleteToken = () => {
  cookies().delete(AVIN_AUTH);
};

const updateToken = (token) => {
  deleteToken();
  insertToken(token);
};

const reviewToken = async () => {
  const token = cookies().get(AVIN_AUTH)?.value;
  const res = await handleReviewToken({ Token: token });
  return res.status;
};

export {
  decodeToken,
  insertToken,
  deleteToken,
  updateToken,
  reviewToken,
};
