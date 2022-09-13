import React, { useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import DropDownPicker from 'react-native-dropdown-picker';
import { DropdownPickerCustomProps } from './DropdownPicker.types';

export const DropdownPicker = <T extends FieldValues>(
  props: DropdownPickerCustomProps<T>,
) => {
  const {
    field: { onChange, value: initValue },
  } = useController(props);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState(initValue);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={onChange}
    />
  );
};
