import { formatServicesData } from 'utils/helpers/formatServicesData';
import React, { FC, useEffect, useState } from 'react';
import { Button, SectionList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getServicesStarted } from 'store/reducers/ServicesSlice';
import { useAppDispatch, useAppSelector } from 'store/store';
import { styles } from './styles';
import { FiltrationAndSortingModal } from 'components/FiltrationAndSortingModal/FiltrationAndSortingModal';
import { useNavigation } from '@react-navigation/native';

export const ServicesScreen: FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { isLoading } = useAppSelector(state => state.services);
  const { data } = useAppSelector(state => state.services);
  const filtrationAndSorting = useAppSelector(
    state => state.filtrationAndSorting,
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const setModalVisibility = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  };

  useEffect(() => {
    dispatch(getServicesStarted());
  }, [dispatch]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Filter" onPress={() => setModalVisibility(true)} />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Text>loading...</Text>
      ) : (
        <>
          <SectionList
            sections={formatServicesData(data, filtrationAndSorting)}
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
          <FiltrationAndSortingModal
            isOpen={isModalOpen}
            setModalVisibility={setModalVisibility}
          />
        </>
      )}
    </SafeAreaView>
  );
};
