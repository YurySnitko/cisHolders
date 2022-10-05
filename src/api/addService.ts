import { utils } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { FormDataWithDateType } from 'types/formDataWithDateType';

export const addService = async (data: FormDataWithDateType) => {
  if (data.attachment) {
    const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/${data.attachment?.name}`;
    await storage().ref(data.attachment?.name).putFile(pathToFile);
    const url = await storage().ref(data.attachment?.name).getDownloadURL();
    const response = await firestore()
      .collection('services')
      .add({ ...data, attachment: url });
    return response;
  } else {
    const response = await firestore().collection('services').add(data);
    return response;
  }
};
