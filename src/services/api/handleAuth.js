import API_URLS from '@/constants/apiUrls';
import handleRequests from '@/services/handleRequests';
import authInstance from '@/services/instances/authInstance';
import dashboardInstance from '@/services/instances/dashboardInstance';

const handleSignin = async (data) => {
  const res = await handleRequests(authInstance, {
    url: API_URLS.USER.SIGNIN.URL,
    method: API_URLS.USER.SIGNIN.METHOD,
    data,
  });

  return res;
};

const handleSignup = async (data) => {
  const res = await handleRequests(authInstance, {
    url: API_URLS.USER.SIGNUP.URL,
    method: API_URLS.USER.SIGNUP.METHOD,
    data,
  });
  if(res?.status) return res;
  

  
};

const handleReviewToken = async (data) => {
  const res = await handleRequests(dashboardInstance, {
    url: API_URLS.USER.REVIEW_TOKEN.URL,
    method: API_URLS.USER.REVIEW_TOKEN.METHOD,
    data,
  });
  return res;
};

const handleCodeRequestForForgottenPassword = async (data) => {
  const res = await handleRequests(authInstance, {
    url: API_URLS.USER.CODE_REQUEST.URL,
    method: API_URLS.USER.CODE_REQUEST.METHOD,
    data,
  });

  return res;
};

const handleChangePassword = async (data) => {
  const res = await handleRequests(authInstance, {
    url: API_URLS.USER.CHANGE_PASSWORD.URL,
    method: API_URLS.USER.CHANGE_PASSWORD.METHOD,
    data,
  });

  return res;
};

export {
  handleSignin,
  handleSignup,
  handleReviewToken,
  handleCodeRequestForForgottenPassword,
  handleChangePassword,
};
