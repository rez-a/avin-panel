import * as yup from 'yup';
import {
  nationalCodeRJX,
  passwordRJX,
} from '../constants/patternRJX';

const signinSchema = yup.object().shape({
  NationalCode: yup
    .string()
    .matches(nationalCodeRJX, 'لطفا یک کدملی معتبر وارد کنید'),
  password: yup
    .string()
    .min(6, 'رمز عبور شما باید حداقل 6 کاراکتر باشد')
    .matches(
      passwordRJX,
      'رمز عبور شما باید دارای حروف بزرگ و کوچک و اعداد باشد'
    ),
});

export default signinSchema;
