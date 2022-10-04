import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DocumentPickerCustom } from 'components/DocumentPickerCustom/DocumentPickerCustom';
import { DropdownPicker } from 'components/DropdownPicker/DropdownPicker';
import { TextInput } from 'components/TextInput/TextInput';
import { styles } from './styles';
import { NewServiceFormDataType } from './types';
import { useAppDispatch } from 'store/store';
import { addNewServiceStarted } from 'store/reducers/ServicesSlice';
import { formatNewServiceData } from 'utils/helpers/formatNewServiceData';
import MapView, { MapPressEvent, PROVIDER_GOOGLE } from 'react-native-maps';

export const AddNewServiceScreen: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      serviceType: '',
      location: { latitude: '', longitude: '' },
      attachment: null,
    },
  });
  const dispatch = useAppDispatch();
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);

  const openMap = () => setIsMapOpen(true);

  const onMapPress = (e: MapPressEvent) => {
    setIsMapOpen(false);
    setValue('location.latitude', e.nativeEvent.coordinate.latitude.toString());
    setValue(
      'location.longitude',
      e.nativeEvent.coordinate.longitude.toString(),
    );
  };

  const onSubmit: SubmitHandler<NewServiceFormDataType> = data => {
    dispatch(addNewServiceStarted(formatNewServiceData(data)));
    reset();
  };

  return (
    <SafeAreaView style={styles.container}>
      {!isMapOpen ? (
        <>
          <TextInput
            control={control}
            name="title"
            placeholder="title"
            rules={{ required: true }}
          />
          {errors.title && <Text>This field is required.</Text>}
          <TextInput
            control={control}
            name="description"
            placeholder="description"
          />
          <DropdownPicker control={control} name="serviceType" />
          <TextInput
            control={control}
            name="location.latitude"
            placeholder="latitude"
            keyboardType="number-pad"
          />
          <TextInput
            control={control}
            name="location.longitude"
            placeholder="longitude"
            keyboardType="number-pad"
          />
          <Button title="Show on map" onPress={openMap} />
          <DocumentPickerCustom control={control} name="attachment" />
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </>
      ) : (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          onPress={onMapPress}
          initialRegion={{
            latitude: 40.7306,
            longitude: -73.9352,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      )}
    </SafeAreaView>
  );
};
