import React, { useState } from 'react';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import { View, Alert, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FieldValues, useController } from 'react-hook-form';
import { styles } from './DocumentPickerCustom.styles';
import { DocumentPickerCustomProps } from './DocumentPickerCustom.types';

export const DocumentPickerCustom = <T extends FieldValues>(
  props: DocumentPickerCustomProps<T>,
) => {
  const [image, setImage] = useState<DocumentPickerResponse | null>(null);
  const {
    field: { onChange },
  } = useController(props);

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      setImage(res);
      onChange(res);
    } catch (err) {
      setImage(null);
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
      {image && <Image style={styles.image} source={{ uri: image.uri }} />}
    </View>
  );
};
