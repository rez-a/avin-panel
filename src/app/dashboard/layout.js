import Header from '@/components/layout/Header';
import React from 'react';

const DashboardLayout = async ({ children }) => {
  return <main><Header />{children}</main>;
};

export default DashboardLayout;
