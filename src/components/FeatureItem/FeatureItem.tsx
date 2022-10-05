import React, { FC } from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from './FeatureItem.styles';
import { FeatureItemProps } from './FeatureItem.types';

export const FeatureItem: FC<FeatureItemProps> = ({ text, image }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image source={image} style={[styles.image, { width }]} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{text}</Text>
      </View>
    </View>
  );
};
