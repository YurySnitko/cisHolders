import { FC } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export const MapScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Map screen</Text>
    </SafeAreaView>
  );
};
