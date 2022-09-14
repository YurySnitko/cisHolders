import { FieldValues, UseControllerProps } from 'react-hook-form';

export type DocumentPickerCustomProps<T extends FieldValues> =
  UseControllerProps<T>;
