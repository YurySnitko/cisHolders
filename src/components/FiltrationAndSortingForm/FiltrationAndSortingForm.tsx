import React, { FC } from 'react';
import { FiltrationAndSortingFormProps } from './FiltrationAndSortingForm.types';
import { Text, View } from 'react-native';
import { styles } from './FiltrationAndSortingForm.styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ControlledCheckbox } from 'components/ControlledCheckbox/ControlledCheckbox';
import { Button } from 'react-native';
import { useAppDispatch, useAppSelector } from 'store/store';
import {
  setFiltersByServiceType,
  setSortBy,
} from 'store/reducers/FiltrationAndSortingSlice';
import { FiltrationAndServiceState } from 'store/types/FiltrationAndSortingState';
import { DropdownPicker } from 'components/DropdownPicker/DropdownPicker';
import { sortingItems } from 'consts/sortingItems';

export const FiltrationAndSortingForm: FC<FiltrationAndSortingFormProps> = ({
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const filtrationAndSorting = useAppSelector(
    state => state.filtrationAndSorting,
  );
  const { control, handleSubmit, setValue } =
    useForm<FiltrationAndServiceState>({
      defaultValues: filtrationAndSorting,
    });

  const onSubmit: SubmitHandler<FiltrationAndServiceState> = data => {
    dispatch(setFiltersByServiceType(data.filtersByServiceType));
    dispatch(setSortBy(data.sortBy));
    onClose();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Filter by service type</Text>
      <ControlledCheckbox
        name="filtersByServiceType.barbershop"
        title="Barbershops"
        control={control}
        setValue={setValue}
      />
      <ControlledCheckbox
        name="filtersByServiceType.cafe"
        title="Cafe"
        control={control}
        setValue={setValue}
      />
      <ControlledCheckbox
        name="filtersByServiceType.carService"
        title="Car services"
        control={control}
        setValue={setValue}
      />
      <ControlledCheckbox
        name="filtersByServiceType.food"
        title="Food"
        control={control}
        setValue={setValue}
      />
      <ControlledCheckbox
        name="filtersByServiceType.pharmacy"
        title="Pharmacies"
        control={control}
        setValue={setValue}
      />
      <ControlledCheckbox
        name="filtersByServiceType.school"
        title="Schools"
        control={control}
        setValue={setValue}
      />
      <Text style={styles.sectionTitle}>Sort by</Text>
      <DropdownPicker
        initialItems={sortingItems}
        name="sortBy"
        control={control}
      />
      <Button title="Apply" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
