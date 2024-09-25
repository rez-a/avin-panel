'use client';
import { selectUser } from '@/features/authSlice';
import React from 'react';
import { useSelector } from 'react-redux';

const Main = () => {
  const data = useSelector(selectUser);
  console.log(data);
  return <div></div>;
};

export default Main;
