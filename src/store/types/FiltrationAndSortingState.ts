import { ServiceFilters } from 'types/serviceFilters';
import { SortingType } from 'types/sorting';

export type FiltrationAndServiceState = {
  filtersByServiceType: ServiceFilters;
  sortBy: SortingType;
};
