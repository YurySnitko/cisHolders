import { DocumentPickerResponse } from 'react-native-document-picker';

export type FormDataType = {
  title: string;
  description: string;
  serviceType: string;
  address: string;
  attachment: DocumentPickerResponse | null;
};
