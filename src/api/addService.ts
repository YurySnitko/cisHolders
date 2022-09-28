import { utils } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { FormDataWithDateType } from 'src/types/formDataWithDateType';

export const addService = async (data: FormDataWithDateType) => {
  const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/${data.attachment?.name}`;
  await storage().ref(data.attachment?.name).putFile(pathToFile);
  const url = await storage().ref(data.attachment?.name).getDownloadURL();
  const response = await firestore()
    .collection('services')
    .add({ ...data, attachment: url });
  return response;
};
