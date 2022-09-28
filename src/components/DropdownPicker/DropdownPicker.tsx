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
  const [items, setItems] = useState([
    { label: 'Autoservice', value: 'autoservice' },
    { label: 'Cafe', value: 'cafe' },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={initValue}
      items={items}
      setOpen={setOpen}
      setValue={onChange}
      setItems={setItems}
      onChangeValue={onChange}
    />
  );
};
