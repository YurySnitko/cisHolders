import React, { FC } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export const AboutScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>About screen</Text>
    </SafeAreaView>
  );
};
