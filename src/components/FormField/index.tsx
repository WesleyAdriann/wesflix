import React, { useMemo } from 'react';

import {
  FormFieldWrapper,
  LabelText,
  Input,
} from './style';
import { FormFieldProps } from './types'

const FormField = ({ label, type, name, value, onChange }: FormFieldProps) => {
  const tag = useMemo(() => type === 'textarea' ? 'textarea' : 'input', [type]);

  return (
    <FormFieldWrapper>
      <label>
        {/* <Input
          as={tag}
          name={name}
          onChange={onChange}
          type={type}
          value={value}
        /> */}
        <LabelText>{label}:</LabelText>
      </label>
    </FormFieldWrapper>
  )

};
