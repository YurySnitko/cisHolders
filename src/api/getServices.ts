import firestore from '@react-native-firebase/firestore';
import { Service } from 'store/reducers/ServicesSlice';

export const getServices = async () => {
  const services = [] as Service[];

  const servicesCollection = await firestore().collection('services').get();
  servicesCollection.forEach(doc =>
    services.push({ id: doc.id, ...(doc.data() as Omit<Service, 'id'>) }),
  );

  return services;
};
