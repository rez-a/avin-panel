import Link from 'next/link';
import React from 'react';

const SigninPage = () => {
  return (
    <div className="panel m-6 w-full max-w-lg sm:w-[480px]">
      <h2 className="mb-3 text-2xl font-bold">ورود</h2>
      <p className="mb-7">
        برای ورود کد ملی و رمز عبور خود را وارد کنید
      </p>
      <form className="space-y-5">
        <div>
          <label
            className="block mb-2 font-semibold"
            htmlFor="NationalCode"
          >
            کد ملی
          </label>
          <input
            id="NationalCode"
            type="text"
            className="form-input"
            placeholder="کد ملی خود را وارد کنید"
          />
        </div>
        <div>
          <label
            className="block mb-2 font-semibold"
            htmlFor="password"
          >
            رمزعبور
          </label>
          <input
            id="password"
            type="password"
            className="form-input"
            placeholder="رمزعبور خود را وارد کنید"
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <small className="text-white-dark">
                مرا بخاطر بسپار
              </small>
            </label>
          </div>
          <div>
            <Link href="./forget-password" className="link">
              <small>فراموشی رمز عبور</small>
            </Link>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          ورود
        </button>
      </form>
      <div className="relative my-7 h-5 text-center before:absolute before:inset-0 before:m-auto before:h-[1px] before:w-full before:bg-[#ebedf2] dark:before:bg-[#253b5c]">
        <div className="relative z-[1] inline-block bg-white px-2 font-bold text-white-dark dark:bg-[#0e1726]">
          <span>یا</span>
        </div>
      </div>
      <p className="text-center">
        حساب کاربری ندارید؟
        <Link href="./signup" className="link">
          ثبت نام
        </Link>
      </p>
    </div>
  );
};

export default SigninPage;
