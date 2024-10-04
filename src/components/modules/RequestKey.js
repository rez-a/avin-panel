'use client';
import useHandleForm from '@/hooks/useHandleForm';
import requestKeySchema from '@/validations/requestKeySchema';
import React from 'react';
import FormInput from '../shared/form/FormInput';
import Button from '../buttons/Button';
import Link from 'next/link';
import { handleCodeRequestForForgottenPassword } from '@/services/api/handleAuth';
import { toast } from 'sonner';
import TOAST_MESSAGE from '@/constants/toastMessage';

const RequestKey = ({ setKeyRequest, setCodeExpirationTime }) => {
  const { addToRefs, register, handleSubmit, errors, isSubmitting } =
    useHandleForm(requestKeySchema);

  const submit = async (values) => {
    const res = await handleCodeRequestForForgottenPassword(values);
    console.log(res)
    if (res?.status) {
      toast.success(
        TOAST_MESSAGE.CODE_REQUEST.SUCCESS(values.PhoneNumber)
      );
      setKeyRequest(res.data.Key);
      setCodeExpirationTime(res.data.exp);
    }
  };
  return (
    <div className="panel m-6 w-full max-w-md sm:w-[480px]">
      <h2 className="mb-3 text-2xl font-bold">درخواست کد</h2>
      <p className="mb-4 text-sm">
        برای تعیین رمزعبور جدید شماره همراه خود را وارد کنید
      </p>
      <form onSubmit={handleSubmit(submit)} className="space-y-5">
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
          title="درخواست کد"
        />
      </form>
      <div className="relative my-7 h-5 text-center before:absolute before:inset-0 before:m-auto before:h-[1px] before:w-full before:bg-[#ebedf2] dark:before:bg-[#253b5c]">
        <div className="relative z-[1] inline-block bg-white px-2 font-bold text-gray dark:bg-[#0e1726]">
          <span>یا</span>
        </div>
      </div>
      <p className="text-center text-xs">
        نیازی به بازیابی رمز عبور خود ندارید؟
        <Link href="./signin" className="link">
          ورود
        </Link>
      </p>
    </div>
  );
};

export default RequestKey;
