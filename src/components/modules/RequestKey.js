'use client';
import useHandleForm from '@/hooks/useHandleForm';
import requestKeySchema from '@/validations/requestKeySchema';
import React from 'react';
import FormInput from '../shared/form/FormInput';
import Button from '../extras/buttons/Button';

const RequestKey = ({ setCodedRequest }) => {
  const { addToRefs, register, handleSubmit, errors, isSubmitting } =
    useHandleForm(requestKeySchema);

  const submitHandler = (values) => {
    setCodedRequest();
    console.log(values);
  };
  return (
    <div className="panel m-6 w-full max-w-lg sm:w-[480px]">
      <h2 className="mb-3 text-2xl font-bold">درخواست کد</h2>
      <p className="mb-7">
        برای تعیین رمزعبور جدید شماره همراه خود را وارد کنید
      </p>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="space-y-5"
      >
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
    </div>
  );
};

export default RequestKey;
