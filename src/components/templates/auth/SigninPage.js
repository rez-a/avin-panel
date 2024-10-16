'use client';
import Button from '@/components/buttons/Button';
import FormCheckbox from '@/components/shared/form/FormCheckbox';
import FormInput from '@/components/shared/form/FormInput';
import { PASSWORD } from '@/constants/formTypes';
import Link from 'next/link';
import React from 'react';
import useHandleForm from '@/hooks/useHandleForm';
import signinSchema from '@/validations/signinSchema';
import { signinAction } from '@/actions/auth/signinAction';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '@/features/authSlice';

const SigninPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { addToRefs, register, handleSubmit, errors, isSubmitting } =
    useHandleForm(signinSchema);

  const submit = async (values) => {
    const res = await signinAction(values);
    if (res?.status) {
      dispatch(setUser(res.user));
      dispatch(setToken(res.token));
      toast.success(res.message);
      router.push('/dashboard');
      return;
    }
    toast.error(res.message);
  };
  return (
    <div className="panel m-6 w-full max-w-md sm:w-[480px]">
      <h2 className="mb-3 text-2xl font-bold">ورود</h2>
      <p className="mb-4 text-sm">
        برای ورود کد ملی و رمز عبور خود را وارد کنید
      </p>
      <form
        onSubmit={handleSubmit(submit)}
        className="space-y-5 text-sm"
      >
        <FormInput
          {...{
            id: 'NationalCode',
            name: 'NationalCode',
            placeholder: 'کد ملی خود را وارد کنید',
            label: 'کد ملی',
            errors,
            addToRefs: () => addToRefs(),
            register: (name) => register(name),
          }}
        />
        <FormInput
          {...{
            id: 'password',
            type: PASSWORD,
            name: 'Password',
            placeholder: 'رمزعبور خود را وارد کنید',
            label: 'رمز عبور',
            errors,
            addToRefs: () => addToRefs(),
            register: (name) => register(name),
          }}
        />
        <div className="flex items-center justify-between">
          <FormCheckbox
            id="remember"
            name="remember"
            label="مرا بخاطر بسپار"
          />
          <div>
            <Link href="./forget-password" className="link">
              <small>فراموشی رمز عبور</small>
            </Link>
          </div>
        </div>
        <Button
          isSubmitting={isSubmitting}
          type="submit"
          variant="btn-primary"
          title="ورود"
        />
      </form>
      <div className="relative my-7 h-5 text-center before:absolute before:inset-0 before:m-auto before:h-[1px] before:w-full before:bg-[#ebedf2] dark:before:bg-[#253b5c]">
        <div className="relative z-[1] inline-block bg-white px-2 font-bold text-gray-400 dark:bg-[#0e1726]">
          <span>یا</span>
        </div>
      </div>
      <p className="text-center text-xs">
        حساب کاربری ندارید؟
        <Link href="./signup" className="link">
          ثبت نام
        </Link>
      </p>
    </div>
  );
};

export default SigninPage;
