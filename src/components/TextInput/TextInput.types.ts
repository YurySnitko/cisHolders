import { FieldValues, UseControllerProps } from 'react-hook-form';
import { TextInputProps as NativeTextinputProps } from 'react-native';

export type TextInputProps<T extends FieldValues> = NativeTextinputProps &
  UseControllerProps<T>;
