import { ImageSourcePropType } from 'react-native';

export default [
  {
    id: '1',
    text: 'Helps you to find suitable service',
    image: require('../assets/images/search.png'),
  },
  {
    id: '2',
    text: 'You can add your own service',
    image: require('../assets/images/addService.png'),
  },
  {
    id: '3',
    text: 'Define location manually or via map',
    image: require('../assets/images/location.png'),
  },
];

export type Slide = {
  id: string;
  text: string;
  image: ImageSourcePropType;
};
