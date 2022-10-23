import { Button } from '@rneui/themed';
import React, { FC } from 'react';
import { ShowOnMapButtonProps } from './ShowOnMapButton.types';
import { styles } from './ShowOnMapButton.styles';

export const ShowOnMapButton: FC<ShowOnMapButtonProps> = ({ onPress }) => {
  return (
    <Button
      title="Show on map"
      onPress={onPress}
      size="sm"
      radius={15}
      buttonStyle={styles.container}
      titleStyle={styles.title}
      icon={{
        name: 'map-pin',
        type: 'feather',
        size: 16,
        color: '#f4f8ff',
      }}
    />
  );
};
