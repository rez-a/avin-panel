'use client';
import ChangePassword from '@/components/modules/ChangePassword';
import RequestKey from '@/components/modules/RequestKey';
import React, { useState } from 'react';

const ForgetPasswordPage = () => {
  const [keyRequest, setKeyRequest] = useState(null);
  const [codeExpirationTime, setCodeExpirationTime] = useState(null);
  console.log(keyRequest);
  return (
    <>
      {keyRequest ? (
        <ChangePassword
          setKeyRequest={() => setKeyRequest(null)}
          keyRequest={keyRequest}
          codeExpirationTime={codeExpirationTime}
        />
      ) : (
        <RequestKey
          setKeyRequest={(key) => setKeyRequest(key)}
          setCodeExpirationTime={(time) =>
            setCodeExpirationTime(time)
          }
        />
      )}
    </>
  );
};

export default ForgetPasswordPage;
