import { Button } from '@rneui/themed';
import React, { FC } from 'react';
import { styles } from './RoundedButton.styles';
import { RoundedButtonProps } from './RoundedButton.types';

export const RoundedButton: FC<RoundedButtonProps> = ({
  title,
  onPress,
  iconName,
  iconType,
}) => {
  return (
    <Button
      title={title}
      onPress={onPress}
      size="sm"
      radius={15}
      buttonStyle={styles.container}
      titleStyle={styles.title}
      icon={
        iconName
          ? {
              name: iconName,
              type: iconType,
              size: 16,
              color: '#f4f8ff',
            }
          : undefined
      }
    />
  );
};
