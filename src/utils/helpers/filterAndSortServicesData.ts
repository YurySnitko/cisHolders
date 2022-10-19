import { FiltrationAndServiceState } from 'store/types/FiltrationAndSortingState';
import { ServiceCategory } from 'types/serviceCategory';

export const filterAndSortServicesData = (
  data: ServiceCategory[],
  { filtersByServiceType, sortBy }: FiltrationAndServiceState,
) => {
  if (Object.values(filtersByServiceType).includes(true)) {
    return data
      .filter(category => filtersByServiceType[category.title])
      .map(category => ({
        title: category.title,
        data: category.data.sort((a, b) =>
          a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0,
        ),
      }));
  } else {
    return data.map(category => ({
      title: category.title,
      data: category.data.sort((a, b) =>
        a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0,
      ),
    }));
  }
};
