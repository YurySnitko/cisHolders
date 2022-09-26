import React, { FC } from 'react';
import { Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export const MapScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Map screen</Text> */}
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  );
};
