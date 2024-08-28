import { CHECKBOX } from '@/constants/formTypes';
import React from 'react';

const FormCheckbox = ({
  id = CHECKBOX,
  name = CHECKBOX,
  type = CHECKBOX,
  label = 'لطفا یک label انتخاب کنید',
}) => {
  return (
    <div>
      <label className="flex items-center cursor-pointer">
        <input {...{ id, name, type }} className="form-checkbox" />
        <small className="text-white-dark">{label}</small>
      </label>
    </div>
  );
};

export default FormCheckbox;
