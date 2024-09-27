const TOAST_MESSAGE = {
  SIGNIN: {
    SUCCESS: 'با موفقیت وارد حساب کاربری خود شدید',
  },
  CODE_REQUEST: {
    SUCCESS: (phoneNumber) => {
      return `کد با موفقیت برای ${phoneNumber} ارسال شد`;
    },
  },
  CHANGE_PASSWORD: {
    SUCCESS: 'رمز عبور شما با موفقیت تغییر یافت',
    CODE_EXPIRED: 'کد ارسال شده برای شما منقضی شده است',
  },
};

export default TOAST_MESSAGE;
