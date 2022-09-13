import { FieldValues, UseControllerProps } from 'react-hook-form';

export type DropdownPickerCustomProps<T extends FieldValues> =
  UseControllerProps<T>;
