import { LatLng } from 'react-native-maps';
import { DocumentPickerResponse } from 'react-native-document-picker';

export type FormDataWithDateType = {
  title: string;
  description: string;
  serviceType: string;
  location: LatLng;
  attachment: DocumentPickerResponse | null;
  dateAdded: string;
};
