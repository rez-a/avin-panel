import * as yup from 'yup';
import { passwordRJX } from '../constants/patternRJX';

const changePasswordSchema = yup.object().shape({
  Otp: yup.string().required('وارد کردن کد ارسال شده الزامی است'),
  Password: yup
    .string()
    .required('وارد کردن رمزعبور الزامی است')
    .min(6, 'رمز عبور شما باید حداقل 6 کاراکتر باشد')
    .matches(
      passwordRJX,
      'رمز عبور شما باید دارای حروف بزرگ و کوچک و اعداد باشد'
    ),
  ConfirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('Password'), null],
      'رمز عبور جدید با هم برابر نیستند'
    ),
});

export default changePasswordSchema;
