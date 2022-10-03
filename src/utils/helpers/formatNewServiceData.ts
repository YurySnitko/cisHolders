import { NewServiceFormDataType } from '../../scenes/AddNewServiceScreen/types';

export const formatNewServiceData = ({
  location,
  ...restData
}: NewServiceFormDataType) => {
  return {
    location: { latitude: +location.latitude, longitude: +location.longitude },
    dateAdded: new Date().toISOString(),
    ...restData,
  };
};
