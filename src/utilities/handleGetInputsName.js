import { CHECKBOX, PASSWORD, TEXT } from '@/constants/formTypes';

const handleGetInputsName = (inputRefs) => {
  const namesObject = {};

  inputRefs.current.forEach((input) => {
    if (input && input?.name) {
      if ([PASSWORD, TEXT].includes(input.type))
        namesObject[input.name] = '';

      if ([CHECKBOX].includes(input.type))
        namesObject[input.name] = false;
    }
  });

  return namesObject;
};

export default handleGetInputsName;
