const axiosConfigsDefault = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  validateStatus: (status) => {
    return status >= 200 && status < 300;
  },
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
  timeoutErrorMessage:
    'خطا در اتصال!! لطفا اینترنت خود را بررسی کنید',
};

export default axiosConfigsDefault;
