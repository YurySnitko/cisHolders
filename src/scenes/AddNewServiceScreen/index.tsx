import React, { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Text, LogBox } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DocumentPickerCustom } from 'components/DocumentPickerCustom/DocumentPickerCustom';
import { DropdownPicker } from 'components/DropdownPicker/DropdownPicker';
import { TextInput } from 'components/TextInput/TextInput';
import { styles } from './styles';
import { NewServiceFormDataType } from './types';
import { useAppDispatch } from 'store/store';
import { addNewServiceStarted } from 'store/reducers/ServicesSlice';
import MapView, { MapPressEvent, PROVIDER_GOOGLE } from 'react-native-maps';
import { serviceTypeItems } from 'consts/serviceTypeItems';
import { Button } from '@rneui/themed';
import { ScrollView } from 'react-native-gesture-handler';
import { RoundedButton } from 'controls/RoundedButton/RoundedButton';

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

  const onSubmit: SubmitHandler<NewServiceFormDataType> = ({
    location,
    ...restData
  }) => {
    const formatedData = {
      location: {
        latitude: +location.latitude,
        longitude: +location.longitude,
      },
      dateAdded: new Date().toISOString(),
      ...restData,
    };
    dispatch(addNewServiceStarted(formatedData));
    reset();
  };

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {!isMapOpen ? (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <TextInput
            control={control}
            name="title"
            label="Title"
            placeholder="Enter title..."
            rules={{ required: true }}
          />
          {errors.title && <Text>This field is required.</Text>}
          <TextInput
            control={control}
            name="description"
            label="Description"
            multiline
            placeholder="Enter description..."
          />
          <DropdownPicker
            initialItems={serviceTypeItems}
            control={control}
            name="serviceType"
            placeholder="Select a service type"
          />
          <TextInput
            control={control}
            name="location.latitude"
            label="Latitude"
            placeholder="Enter latitude..."
            keyboardType="number-pad"
          />
          <TextInput
            control={control}
            name="location.longitude"
            label="Longitude"
            placeholder="Enter longitude..."
            keyboardType="number-pad"
          />
          <RoundedButton
            title="Show on map"
            onPress={openMap}
            iconName="map-pin"
            iconType="feather"
          />
          <DocumentPickerCustom control={control} name="attachment" />
          <Button
            title="Submit"
            uppercase
            size="lg"
            radius="xl"
            color="secondary"
            onPress={handleSubmit(onSubmit)}
            containerStyle={styles.submitButton}
          />
        </ScrollView>
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
