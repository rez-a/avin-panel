import * as yup from 'yup';
import {
  NATIONALCODE_RJX,
  PHONENUMBER_RJX,
} from '../constants/patternRJX';

const signupSchema = yup.object().shape({
  NationalCode: yup
    .string()
    .required('وارد کردن کدملی الزامی است')
    .matches(NATIONALCODE_RJX, 'لطفا یک کدملی معتبر وارد کنید'),
  FullName: yup
    .string()
    .required('وارد کردن نام و نام خانوادگی الزامی است')
    .min(3, 'نام شما باید حداقل 3 کاراکتر داشته باشد'),
  PhoneNumber: yup
    .string()
    .required('وارد کردن شماره همراه الزامی است')
    .matches(PHONENUMBER_RJX, 'لطفا شماره همراه معتبر وارد کنید'),
});

export default signupSchema;
