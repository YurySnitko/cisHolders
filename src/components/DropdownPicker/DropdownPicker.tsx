import React, { useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './DropdownPicker.styles';
import { DropdownPickerCustomProps } from './DropdownPicker.types';
import Icon from 'react-native-vector-icons/Feather';

export const DropdownPicker = <T extends FieldValues>({
  initialItems,
  placeholder,
  ...useControllerProps
}: DropdownPickerCustomProps<T>) => {
  const {
    field: { onChange, value },
  } = useController(useControllerProps);
  const [open, setOpen] = useState<boolean>(false);
  const [items, setItems] = useState(initialItems);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={onChange}
      setItems={setItems}
      onChangeValue={onChange}
      maxHeight={300}
      style={styles.container}
      textStyle={styles.text}
      dropDownContainerStyle={styles.dropdownContainer}
      ArrowDownIconComponent={() => (
        <Icon name="chevron-down" style={styles.arrowIcon} />
      )}
      ArrowUpIconComponent={() => (
        <Icon name="chevron-up" style={styles.arrowIcon} />
      )}
      placeholder={placeholder}
    />
  );
};
