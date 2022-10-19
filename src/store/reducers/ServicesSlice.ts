import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ServicesState } from 'store/types/ServicesState';
import { Service } from 'types/service';

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
