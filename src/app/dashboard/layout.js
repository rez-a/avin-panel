import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import React from 'react';

const DashboardLayout = async ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className='mr-64'>
        <Header />
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
