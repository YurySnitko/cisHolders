import { Service } from 'types/service';

export type ServicesState = {
  data: Service[];
  error: string;
  isLoading: boolean;
};
