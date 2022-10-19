import { InputProps } from '@rneui/base';
import { FieldValues, UseControllerProps } from 'react-hook-form';

export type TextInputProps<T extends FieldValues> = InputProps &
  UseControllerProps<T>;
