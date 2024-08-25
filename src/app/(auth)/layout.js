import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-auth-pattern bg-cover bg-center dark:bg-auth-pattern-dark dark:text-dark-color-primary">
      {children}
    </div>
  );
};

export default AuthLayout;
