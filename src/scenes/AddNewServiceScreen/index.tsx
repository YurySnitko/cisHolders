import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Button, Text, Switch, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DocumentPickerCustom } from '../../components/DocumentPickerCustom/DocumentPickerCustom';
import { DropdownPicker } from '../../components/DropdownPicker/DropdownPicker';
import { TextInput } from '../../components/TextInput/TextInput';
import { styles } from './styles';
import { FormDataType } from './types';

export const AddNewServiceScreen: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      serviceType: '',
      address: '',
      attachment: null,
    },
  });
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onSubmit = (data: FormDataType) => Alert.alert(JSON.stringify(data));

  return (
    <SafeAreaView style={styles.container}>
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
      <TextInput control={control} name="address" placeholder="address" />
      <View style={styles.toogleText}>
        <Text>Show on map</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      {isEnabled && (
        <Button
          title="Show on map"
          onPress={() => Alert.alert('ShowOnMap button clicked!')}
        />
      )}

      <DocumentPickerCustom control={control} name="attachment" />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
};
