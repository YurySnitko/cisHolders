import { FiltrationAndServiceState } from 'store/types/FiltrationAndSortingState';
import { Service } from 'types/service';
import { ServiceCategory } from 'types/serviceCategory';
import { filterAndSortServicesData } from './filterAndSortServicesData';

export const formatServicesData = (
  data: Service[],
  filtersAndSortings: FiltrationAndServiceState,
) => {
  const servicesDataInCategories = data.reduce((arr, item) => {
    const index = arr.findIndex(
      category => category.title === item.serviceType,
    );
    if (index >= 0) {
      arr[index].data.push(item);
    } else {
      arr.push({ title: item.serviceType, data: [item] });
    }
    return arr;
  }, [] as ServiceCategory[]);

  return filterAndSortServicesData(
    servicesDataInCategories,
    filtersAndSortings,
  );
};
