import React from 'react';
import { redirect } from 'next/navigation';
import { reviewToken } from '@/utilities/handleToken';

const AuthLayout = async ({ children }) => {
  if (await reviewToken()) redirect('/dashboard');
  return (
    <div className="flex min-h-screen items-center justify-center bg-auth-pattern bg-cover bg-center dark:bg-auth-pattern-dark dark:text-dark-color-primary">
      {children}
    </div>
  );
};

export default AuthLayout;
