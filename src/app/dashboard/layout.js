import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import React from "react";

const DashboardLayout = async ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className="mr-64 z-10 bg-gray-50 min-h-screen flex flex-col">
        <Header />
        <section className="p-6 grow">{children}</section>
      </main>
    </>
  );
};

export default DashboardLayout;
