import { SortingType } from 'types/sorting';
import { ServiceFilters } from 'types/serviceFilters';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltrationAndServiceState } from './../types/FiltrationAndSortingState';

const initialState: FiltrationAndServiceState = {
  filtersByServiceType: {
    barberShop: false,
    cafe: false,
    carService: false,
    food: false,
    pharmacy: false,
    school: false,
  },
  sortBy: 'title',
};

export const filtrationAndSortingSlice = createSlice({
  name: 'filtrationAndSorting',
  initialState,
  reducers: {
    setFiltersByServiceType: (state, action: PayloadAction<ServiceFilters>) => {
      state.filtersByServiceType = action.payload;
    },
    setSortBy: (state, action: PayloadAction<SortingType>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setFiltersByServiceType, setSortBy } =
  filtrationAndSortingSlice.actions;

export default filtrationAndSortingSlice.reducer;
