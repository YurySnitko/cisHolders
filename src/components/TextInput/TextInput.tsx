import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';
import { FieldValues, useController } from 'react-hook-form';
import { TextInputProps } from './TextInput.types';

export const TextInput = <T extends FieldValues>(props: TextInputProps<T>) => {
  const { name, control, rules, ...rest } = props;
  const {
    field: { onChange, ...restFieldProps },
  } = useController<T>({ name, control, rules });

  return (
    <NativeTextInput onChangeText={onChange} {...restFieldProps} {...rest} />
  );
};
