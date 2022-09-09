import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { AboutScreen } from '../scenes/About';

const Stack = createStackNavigator();

export const DrawerStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};
