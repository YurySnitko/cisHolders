import { ServiceType } from './serviceType';
import { LatLng } from 'react-native-maps';
import { DocumentPickerResponse } from 'react-native-document-picker';

export type FormDataWithDateType = {
  title: string;
  description: string;
  serviceType: ServiceType;
  location: LatLng;
  attachment: DocumentPickerResponse | null;
  dateAdded: string;
};
