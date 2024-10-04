"use client";
import Button from "@/components/buttons/Button";
import FormFile from "@/components/shared/form/FormFile";
import FormInput from "@/components/shared/form/FormInput";
import TitlePage from "@/components/shared/TitlePage";
import { PASSWORD } from "@/constants/formTypes";
import useHandleForm from "@/hooks/useHandleForm";
import React from "react";

const InfoPage = () => {
  const { addToRefs, register, handleSubmit, errors, isSubmitting } =
    useHandleForm({});
  const submit = () => {};
  return (
    <div className="h-screen">
      <TitlePage title="اطلاعات کاربری" />
      <div className="panel mt-3">
        <form
          onSubmit={handleSubmit(submit)}
          className="text-sm flex items-start gap-8"
        >
          <div>
            <div className=" bg-gray-50 rounded-full p-4 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="96"
                height="96"
                className="fill-gray-300"
              >
                <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
              </svg>
              <FormFile />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 grow">
            <FormInput
              {...{
                id: "NationalCode",
                name: "NationalCode",
                placeholder: "کد ملی خود را وارد کنید",
                label: "کد ملی",
                errors,
                addToRefs: () => addToRefs(),
                register: (name) => register(name),
              }}
            />

            <FormInput
              {...{
                id: "PhoneNumber",
                name: "PhoneNumber",
                placeholder: "شماره همراه خود را وارد کنید",
                label: "شماره همراه",
                errors,
                addToRefs: () => addToRefs(),
                register: (name) => register(name),
              }}
            />
            <FormInput
              {...{
                id: "Role",
                name: "Role",
                placeholder: "نوع عضویت شما",
                label: "نوع عضویت شما",
                errors,
                addToRefs: () => addToRefs(),
                register: (name) => register(name),
              }}
            />
            <FormInput
              {...{
                id: "FullName",
                name: "FullName",
                placeholder: "نام و نام خانوادگی خود را وارد کنید",
                label: "نام و نام خانوادگی",
                errors,
                addToRefs: () => addToRefs(),
                register: (name) => register(name),
              }}
            />
            <FormInput
              {...{
                id: "password",
                type: PASSWORD,
                name: "Password",
                placeholder: "رمزعبور جدید خود را وارد کنید",
                label: "رمز عبور",
                errors,
                addToRefs: () => addToRefs(),
                register: (name) => register(name),
              }}
            />
            <FormInput
              {...{
                id: "ConfirmPassword",
                type: PASSWORD,
                name: "ConfirmPassword",
                placeholder: "رمزعبور جدید خود را تایید کنید",
                label: "تایید رمز عبور جدید",
                errors,
                addToRefs: () => addToRefs(),
                register: (name) => register(name),
              }}
            />
            <div>
              <Button
                isSubmitting={isSubmitting}
                type="submit"
                variant="btn-primary"
                title="ذخیره تعییرات"
                full={false}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InfoPage;
