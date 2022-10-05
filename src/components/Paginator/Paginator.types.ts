import { Animated } from 'react-native';
import { Slide } from 'consts/slides';

export type PaginatorProps = {
  data: Slide[];
  scrollX: Animated.Value;
};
