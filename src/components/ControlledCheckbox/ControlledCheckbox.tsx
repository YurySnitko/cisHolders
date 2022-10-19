import React from 'react';
import { ControlledCheckboxProps } from './ControlledCheckbox.types';
import { CheckBox } from '@rneui/themed';
import { FieldValues, Path, PathValue, useController } from 'react-hook-form';

export const ControlledCheckbox = <T extends FieldValues>({
  name,
  control,
  rules,
  setValue,
  ...rest
}: ControlledCheckboxProps<T>) => {
  const { field } = useController<T>({ name, control, rules });

  return (
    <CheckBox
      checked={field.value}
      onPress={() => setValue(name, !field.value as PathValue<T, Path<T>>)}
      onBlur={field.onBlur}
      {...rest}
    />
  );
};
