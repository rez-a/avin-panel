const API_URLS = {
  USER: {
    SIGNIN: {
      URL: '/user/login/',
      METHOD: 'post',
    },
    SIGNUP: {
      URL: '/user/create/',
      METHOD: 'post',
    },
    REVIEW_TOKEN: {
      URL: '/token/check/',
      METHOD: 'post',
    },
  },
};

export default API_URLS;
