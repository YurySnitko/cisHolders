import React, { FC } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from 'store/store';
import { styles } from './styles';

export const MapScreen: FC = () => {
  const { data } = useAppSelector(state => state.services);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 40.7306,
          longitude: -73.9352,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {data.length > 0 &&
          data.map(service => (
            <Marker
              key={service.id}
              coordinate={{
                longitude: service.location.longitude,
                latitude: service.location.latitude,
              }}
              title={service.title}
              description={service.description}
            />
          ))}
      </MapView>
    </SafeAreaView>
  );
};
