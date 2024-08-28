import handleGetInputsName from '@/utilities/handleGetInputsName';
import { useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const useHandleForm = (validationSchema) => {
  const inputRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !inputRefs.current.includes(el))
      inputRefs.current.push(el);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: handleGetInputsName(inputRefs),
    resolver: yupResolver(validationSchema),
  });

  return { addToRefs, register, handleSubmit, errors, isSubmitting };
};

export default useHandleForm;
