import firestore from '@react-native-firebase/firestore';
import { Service } from 'types/service';

export const getServices = async () => {
  const services = [] as Service[];

  const servicesCollection = await firestore()
    .collection<Omit<Service, 'id'>>('services')
    .get();
  servicesCollection.forEach(doc =>
    services.push({ id: doc.id, ...doc.data() }),
  );

  return services;
};
