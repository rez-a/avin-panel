'use client';
import useHandleForm from '@/hooks/useHandleForm';
import React, { useState } from 'react';
import FormInput from '../shared/form/FormInput';
import Button from '../buttons/Button';
import changePasswordSchema from '@/validations/changePasswordSchema';
import { PASSWORD } from '@/constants/formTypes';
import CountDown from '../CountDown';
import { handleChangePassword } from '@/services/api/handleAuth';
import { toast } from 'sonner';
import TOAST_MESSAGE from '@/constants/toastMessage';
import { useRouter } from 'next/navigation';

const ChangePassword = ({
  setKeyRequest,
  keyRequest,
  codeExpirationTime,
}) => {
  const [isFinishedCountDown, setIsFinishedCountDown] =
    useState(false);
  const router = useRouter();

  const { addToRefs, register, handleSubmit, errors, isSubmitting } =
    useHandleForm(changePasswordSchema);

  const submit = async (values) => {
    if (!isFinishedCountDown) {
      const res = await handleChangePassword({
        ...values,
        Key: keyRequest,
      });
      if (res?.status) {
        toast.success(TOAST_MESSAGE.CHANGE_PASSWORD.SUCCESS);
        router.push('/signin');
      }
      return;
    }
    toast.error(TOAST_MESSAGE.CHANGE_PASSWORD.CODE_EXPIRED);
  };

  const editPhoneNumberHandler = () => {
    setKeyRequest();
  };
  return (
    <div className="panel m-6 w-full max-w-md sm:w-[480px]">
      <h2 className="mb-3 text-2xl font-bold">تعیین رمز عبور جدید</h2>
      <p className="mb-4 text-sm">
        رمزعبور جدید بهمراه کد ارسال شده را وارد کنید
      </p>
      <form onSubmit={handleSubmit(submit)} className="space-y-5">
        <FormInput
          {...{
            id: 'Otp',
            name: 'Otp',
            placeholder: 'کد ارسال شده را وارد کنید',
            label: 'کد',
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
            placeholder: 'رمزعبور جدید خود را وارد کنید',
            label: 'رمز عبور',
            errors,
            addToRefs: () => addToRefs(),
            register: (name) => register(name),
          }}
        />
        <FormInput
          {...{
            id: 'ConfirmPassword',
            type: PASSWORD,
            name: 'ConfirmPassword',
            placeholder: 'رمزعبور جدید خود را تایید کنید',
            label: 'تایید رمز عبور جدید',
            errors,
            addToRefs: () => addToRefs(),
            register: (name) => register(name),
          }}
        />

        <Button
          isSubmitting={isSubmitting}
          type="submit"
          variant="btn-primary"
          title="ذخیره رمز عبور جدید"
        />
      </form>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <button
            onClick={editPhoneNumberHandler}
            className="text-primary link"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline me-2"
            >
              <path
                d="M11.4001 18.1612L11.4001 18.1612L18.796 10.7653C17.7894 10.3464 16.5972 9.6582 15.4697 8.53068C14.342 7.40298 13.6537 6.21058 13.2348 5.2039L5.83882 12.5999L5.83879 12.5999C5.26166 13.1771 4.97307 13.4657 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L7.47918 20.5844C8.25351 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5343 19.0269 10.823 18.7383 11.4001 18.1612Z"
                fill="currentColor"
              ></path>
              <path
                d="M20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178L14.3999 4.03882C14.4121 4.0755 14.4246 4.11268 14.4377 4.15035C14.7628 5.0875 15.3763 6.31601 16.5303 7.47002C17.6843 8.62403 18.9128 9.23749 19.85 9.56262C19.8875 9.57563 19.9245 9.58817 19.961 9.60026L20.8482 8.71306Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="text-xs">ویرایش شماره همراه</span>
          </button>
        </div>
        <div>
          <CountDown
            isFinishedCountDown={isFinishedCountDown}
            setIsFinishedCountDown={setIsFinishedCountDown}
            numberOfSeconds={codeExpirationTime}
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
