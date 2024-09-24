import { reviewToken } from '@/utilities/handleToken';
import { redirect } from 'next/navigation';
import React from 'react';

const DashboardLayout = async ({ children }) => {
  if (!await reviewToken()) redirect('/signin');
  return <div>{children}</div>;
};

export default DashboardLayout;
