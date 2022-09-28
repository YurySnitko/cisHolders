import { DocumentPickerResponse } from 'react-native-document-picker';

export type FormDataWithDateType = {
  title: string;
  description: string;
  serviceType: string;
  location: string;
  attachment: DocumentPickerResponse | null;
  dateAdded: string;
};
