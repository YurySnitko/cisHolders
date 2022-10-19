import { Service } from './service';
import { ServiceType } from './serviceType';

export type ServiceCategory = {
  title: ServiceType;
  data: Service[];
};
