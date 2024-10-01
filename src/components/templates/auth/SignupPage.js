'use client';
import Button from '@/components/buttons/Button';
import FormInput from '@/components/shared/form/FormInput';
import Link from 'next/link';
import React from 'react';
import useHandleForm from '@/hooks/useHandleForm';
import signupSchema from '@/validations/signupSchema';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const router = useRouter();
  const { addToRefs, register, handleSubmit, errors, isSubmitting } =
    useHandleForm(signupSchema);

  const submit = async (values) => {
    const res = await handleSignup(values);
    if (res.status) {
      toast.success(res.message);
      router.push('/signin');
    }
  };
  return (
    <div className="panel m-6 w-full max-w-md sm:w-[480px]">
      <h2 className="mb-3 text-2xl font-bold">ثبت نام</h2>
      <p className="mb-7 text-sm">
        برای ثبت نام اطلاعات زیر را تکمیل کنید
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
            id: 'FullName',
            name: 'FullName',
            placeholder: 'نام و نام خانوادگی خود را وارد کنید',
            label: 'نام و نام خانوادگی',
            errors,
            addToRefs: () => addToRefs(),
            register: (name) => register(name),
          }}
        />
        <FormInput
          {...{
            id: 'PhoneNumber',
            name: 'PhoneNumber',
            placeholder: 'شماره همراه خود را وارد کنید',
            label: 'شماره همراه',
            errors,
            addToRefs: () => addToRefs(),
            register: (name) => register(name),
          }}
        />

        <Button
          isSubmitting={isSubmitting}
          type="submit"
          variant="btn-primary"
          title="ثبت نام"
        />
      </form>
      <div className="relative my-7 h-5 text-center before:absolute before:inset-0 before:m-auto before:h-[1px] before:w-full before:bg-[#ebedf2] dark:before:bg-[#253b5c]">
        <div className="relative z-[1] inline-block bg-white px-2 font-bold text-gray-400 dark:bg-[#0e1726]">
          <span>یا</span>
        </div>
      </div>
      <p className="text-center text-xs">
        حساب کاربری دارید؟
        <Link href="./signin" className="link">
          ورود
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
