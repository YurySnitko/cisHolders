import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { LatLng } from 'react-native-maps';

export type Service = {
  id: string;
  dateAdded: string;
  title: string;
  description: string;
  location: LatLng;
  attachment: DocumentPickerResponse | null;
  serviceType: string;
};

type ServicesState = {
  data: Service[];
  error: string;
  isLoading: boolean;
};

const initialState: ServicesState = {
  data: [] as Service[],
  error: '',
  isLoading: false,
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    getServicesStarted: state => {
      state.isLoading = true;
    },
    getServicesSuccess: (state, action: PayloadAction<Service[]>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    getServicesFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    addNewServiceStarted: (state, _action) => {
      state.isLoading = true;
    },
    addNewServiceSuccess: (state, action) => {
      state.data.push(action.payload);
      state.isLoading = false;
    },
    addNewServiceFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  getServicesFailed,
  getServicesStarted,
  getServicesSuccess,
  addNewServiceStarted,
  addNewServiceSuccess,
  addNewServiceFailed,
} = servicesSlice.actions;
export default servicesSlice.reducer;
