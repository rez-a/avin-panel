'use client';
import ChangePassword from '@/components/modules/ChangePassword';
import RequestKey from '@/components/modules/RequestKey';
import React, { useState } from 'react';

const ForgetPasswordPage = () => {
  const [codedRequest, setCodedRequest] = useState(false);
  return (
    <>
      {codedRequest ? (
        <ChangePassword
          setCodedRequest={() => setCodedRequest(!codedRequest)}
        />
      ) : (
        <RequestKey
          setCodedRequest={() => setCodedRequest(!codedRequest)}
        />
      )}
    </>
  );
};

export default ForgetPasswordPage;
