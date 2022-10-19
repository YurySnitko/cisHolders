import { DocumentPickerResponse } from 'react-native-document-picker';
import { LatLng } from 'react-native-maps';
import { ServiceType } from './serviceType';

export type Service = {
  id: string;
  dateAdded: string;
  title: string;
  description: string;
  location: LatLng;
  attachment: DocumentPickerResponse | null;
  serviceType: ServiceType;
};
