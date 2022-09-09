import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Button } from 'react-native';

export const NavBackButton: FC = () => {
  const navigation = useNavigation();

  return <Button title="Back" onPress={() => navigation.goBack()} />;
};
