import React from 'react';
import DocumentPicker from 'react-native-document-picker';
import { View, Alert, Image } from 'react-native';
import { FieldValues, useController } from 'react-hook-form';
import { styles } from './DocumentPickerCustom.styles';
import { DocumentPickerCustomProps } from './DocumentPickerCustom.types';
import { RoundedButton } from 'controls/RoundedButton/RoundedButton';
import { Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

  const unselectFile = () => {
    onChange(null);
  };

  return (
    <View style={styles.container}>
      {value ? (
        <>
          <Image style={styles.image} source={{ uri: value.uri }} />
          <TouchableOpacity
            containerStyle={styles.closeIcon}
            onPress={unselectFile}>
            <Icon name="close" type="font-awesome" color="#f4f8ff" />
          </TouchableOpacity>
        </>
      ) : (
        <RoundedButton
          title="Upload an image"
          onPress={selectFile}
          iconName="upload"
          iconType="feather"
        />
      )}
    </View>
  );
};
