import { formatServicesData } from '../../utils/helpers/formatServicesData';
import React, { FC, useEffect } from 'react';
import { SectionList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getServicesStarted } from 'store/reducers/ServicesSlice';
import { useAppDispatch, useAppSelector } from 'store/store';
import { styles } from './styles';

export const ServicesScreen: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(state => state.services);
  const { data } = useAppSelector(state => state.services);

  useEffect(() => {
    dispatch(getServicesStarted());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Text>loading...</Text>
      ) : (
        <SectionList
          sections={formatServicesData(data)}
          keyExtractor={(item, index) => item.title + index}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      )}
    </SafeAreaView>
  );
};
