import { FormDataType } from './../../scenes/AddNewServiceScreen/types';

export const addDate = (data: FormDataType) => {
  return { ...data, dateAdded: new Date().toISOString() };
};
