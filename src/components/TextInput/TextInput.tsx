import React from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { TextInputProps } from './TextInput.types';
import { Input } from '@rneui/themed';

export const TextInput = <T extends FieldValues>({
  name,
  control,
  rules,
  ...rest
}: TextInputProps<T>) => {
  const {
    field: { onChange, value, ...restFieldProps },
  } = useController<T>({ name, control, rules });

  return (
    <Input
      onChangeText={onChange}
      value={value}
      {...restFieldProps}
      {...rest}
    />
  );
};
