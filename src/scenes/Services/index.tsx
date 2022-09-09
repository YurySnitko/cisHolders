import { FC } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export const ServicesScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Services screen</Text>
    </SafeAreaView>
  );
};
