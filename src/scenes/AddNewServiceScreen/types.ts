import { DocumentPickerResponse } from 'react-native-document-picker';

export type FormDataType = {
  title: string;
  description: string;
  serviceType: string;
  location: string;
  attachment: DocumentPickerResponse | null;
};
