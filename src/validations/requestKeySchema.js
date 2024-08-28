import * as yup from 'yup';
import { phoneNumberRJX } from '../constants/patternRJX';

const requestKeySchema = yup.object().shape({
  PhoneNumber: yup
    .string()
    .required('وارد کردن شماره همراه الزامی است')
    .matches(phoneNumberRJX, 'لطفا شماره همراه معتبر وارد کنید'),
});

export default requestKeySchema;
