import {
  FieldValues,
  UseControllerProps,
  UseFormSetValue,
} from 'react-hook-form';
import { CheckBoxProps } from '@rneui/themed';

export type ControlledCheckboxProps<T extends FieldValues> = {
  setValue: UseFormSetValue<T>;
} & Omit<CheckBoxProps, 'checked'> &
  UseControllerProps<T>;
