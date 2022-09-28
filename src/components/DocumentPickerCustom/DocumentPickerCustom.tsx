import React from 'react';
import DocumentPicker from 'react-native-document-picker';
import { View, Alert, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FieldValues, useController } from 'react-hook-form';
import { styles } from './DocumentPickerCustom.styles';
import { DocumentPickerCustomProps } from './DocumentPickerCustom.types';

export const DocumentPickerCustom = <T extends FieldValues>(
  props: DocumentPickerCustomProps<T>,
) => {
  const {
    field: { onChange, value },
  } = useController(props);

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      onChange(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled');
      } else {
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={selectFile}>
        <Text>Upload file</Text>
      </TouchableOpacity>
      {value && <Image style={styles.image} source={{ uri: value.uri }} />}
    </View>
  );
};
