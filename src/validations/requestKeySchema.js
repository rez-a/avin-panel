import * as yup from 'yup';
import { PHONENUMBER_RJX } from '../constants/patternRJX';

const requestKeySchema = yup.object().shape({
  PhoneNumber: yup
    .string()
    .required('وارد کردن شماره همراه الزامی است')
    .matches(PHONENUMBER_RJX, 'لطفا شماره همراه معتبر وارد کنید'),
});

export default requestKeySchema;
