import { Service } from 'store/reducers/ServicesSlice';

type ServiceCategory = {
  title: string;
  data: Service[];
};

export const formatServicesData = (data: Service[]) => {
  return data.reduce((arr, item) => {
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
};
