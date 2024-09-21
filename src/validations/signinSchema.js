import * as yup from 'yup';
import {
  NATIONALCODE_RJX,
  PASSWORD_RJX,
} from '../constants/patternRJX';

const signinSchema = yup.object().shape({
  NationalCode: yup.string().required('وارد کردن کدملی الزامی است'),
  // .matches(NATIONALCODE_RJX, 'لطفا یک کدملی معتبر وارد کنید'),
  Password: yup.string().required('وارد کردن رمزعبور الزامی است'),
  // .min(6, 'رمز عبور شما باید حداقل 6 کاراکتر باشد')
  // .matches(
  //   PASSWORD_RJX,
  //   'رمز عبور شما باید دارای حروف بزرگ و کوچک و اعداد باشد'
  // ),
});

export default signinSchema;
