import * as yup from 'yup';
import {
  nationalCodeRJX,
  phoneNumberRJX,
} from '../constants/patternRJX';

const signupSchema = yup.object().shape({
  NationalCode: yup
    .string()
    .matches(nationalCodeRJX, 'لطفا یک کدملی معتبر وارد کنید'),
  FullName: yup
    .string()
    .min(3, 'نام شما باید حداقل 3 کاراکتر داشته باشد'),
  PhoneNumber: yup
    .string()
    .matches(phoneNumberRJX, 'لطفا شماره همراه معتبر وارد کنید'),
});

export default signupSchema;
