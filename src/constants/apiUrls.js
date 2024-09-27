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
    CODE_REQUEST: {
      URL: '/user/recoverpass/',
      METHOD: 'post',
    },
    CHANGE_PASSWORD: {
      URL: '/user/newpass/',
      METHOD: 'put',
    },
  },
};

export default API_URLS;
