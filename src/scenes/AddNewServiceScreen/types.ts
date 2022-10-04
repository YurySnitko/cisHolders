import { DocumentPickerResponse } from 'react-native-document-picker';

export type NewServiceFormDataType = {
  title: string;
  description: string;
  serviceType: string;
  location: {
    latitude: string;
    longitude: string;
  };
  attachment: DocumentPickerResponse | null;
};
