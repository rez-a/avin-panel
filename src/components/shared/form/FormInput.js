'use client';
import React, { useState } from 'react';
import ViewPassword from './ViewPassword';
import { PASSWORD, TEXT } from '@/constants/formTypes';

const FormInput = ({
  id = 'form',
  type = TEXT,
  name = 'form',
  placeholder = '',
  label = 'لطفا یک label انتخاب کنید',
  errors,
  addToRefs,
  register,
}) => {
  const [view, setView] = useState(false);

  return (
    <div>
      <label className="block mb-2 font-semibold" htmlFor={id}>
        {label}
      </label>
      <div className="flex items-stretch">
        <input
          {...{
            id,
            type: view ? TEXT : type,
            placeholder,
          }}
          ref={addToRefs}
          {...register(name)}
          className={`form-input ${
            type === PASSWORD &&
            'ltr:rounded-r-none rtl:rounded-l-none'
          }`}
        />
        {type === PASSWORD && <ViewPassword {...{ view, setView }} />}
      </div>
      {errors[name] && (
        <div className="flex items-center p-3.5 py-1.5 mt-2 rounded text-danger bg-danger/10">
          <small className="ltr:pr-2 rtl:pl-2">
            {errors[name].message}
          </small>
        </div>
      )}
    </div>
  );
};

export default FormInput;
